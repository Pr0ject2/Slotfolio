import { mkdir, writeFile } from "node:fs/promises";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const timeoutMs = 18_000;
const pageConcurrency = 12;

const providers = [
  { provider: "Pragmatic Play", origin: "https://www.pragmaticplay.com", match: /^\/en\/games\/[^/?#]+\/?$/i },
  { provider: "Play’n GO", origin: "https://www.playngo.com", match: /^\/games\/[^/?#]+\/?$/i },
  { provider: "Endorphina", origin: "https://endorphina.com", match: /^\/games\/[^/?#]+\/?$/i },
  { provider: "Hacksaw Gaming", origin: "https://www.hacksawgaming.com", match: /^\/games\/[^/?#]+\/?$/i, reject: /^\/games\/(?:slots|instant-win)\/?$/i },
  { provider: "Nolimit City", origin: "https://nolimitcity.com", match: /^\/(?:game|games)\/[^/?#]+\/?$/i },
  { provider: "Push Gaming", origin: "https://www.pushgaming.com", match: /^\/(?:game|games)\/[^/?#]+\/?$/i },
  { provider: "3 Oaks Gaming", origin: "https://3oaks.com", match: /^\/game\/[^/?#]+\/?$/i },
  { provider: "Onlyplay", origin: "https://onlyplay.com", match: /^\/games\/[^/?#]+\/?$/i },
];

function decodeHtml(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function stripTags(value = "") {
  return decodeHtml(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function cleanTitle(value, provider) {
  return stripTags(value)
    .replace(/\s*[|–—-]\s*(?:Pragmatic Play|Play.?n GO|Endorphina|Hacksaw Gaming|Nolimit City|Push Gaming|3 Oaks Gaming|Onlyplay).*$/i, "")
    .replace(/^(?:Play|Demo|Slot)\s*[:–—-]\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function goodTitle(value) {
  if (!value || value.length < 2 || value.length > 110) return false;
  if (/^(?:games?|slots?|home|casino games|all games|play|demo)$/i.test(value)) return false;
  if (/\b(?:privacy|cookie|terms|careers?|contact|responsible gaming|sitemap)\b/i.test(value)) return false;
  return /[a-z0-9]/i.test(value);
}

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: {
          accept: "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.5",
          "accept-language": "en-US,en;q=0.8",
          "user-agent": "Mozilla/5.0 SlotfolioCatalogResearch/1.1",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 600));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

function xmlLocs(text) {
  return Array.from(text.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc>/gi), (match) => stripTags(match[1])).filter(Boolean);
}

function robotsSitemaps(text) {
  return text
    .split(/\r?\n/)
    .map((line) => /^\s*sitemap\s*:\s*(https?:\/\/\S+)/i.exec(line)?.[1])
    .filter(Boolean);
}

async function discoverUrls(config) {
  const queue = new Set([
    `${config.origin}/sitemap.xml`,
    `${config.origin}/sitemap_index.xml`,
    `${config.origin}/sitemap-index.xml`,
  ]);
  try {
    const robots = await fetchText(`${config.origin}/robots.txt`);
    for (const url of robotsSitemaps(robots)) queue.add(url);
  } catch {}

  const visited = new Set();
  const pages = new Set();
  while (queue.size && visited.size < 80) {
    const sitemap = queue.values().next().value;
    queue.delete(sitemap);
    if (visited.has(sitemap)) continue;
    visited.add(sitemap);
    let text;
    try {
      text = await fetchText(sitemap);
    } catch {
      continue;
    }
    const locs = xmlLocs(text);
    for (const loc of locs) {
      let url;
      try {
        url = new URL(loc);
      } catch {
        continue;
      }
      if (url.origin !== new URL(config.origin).origin) continue;
      if (/\.xml(?:\.gz)?(?:$|\?)/i.test(url.pathname)) {
        if (!/\.gz$/i.test(url.pathname)) queue.add(url.toString());
        continue;
      }
      if (config.match.test(url.pathname) && !(config.reject?.test(url.pathname))) pages.add(url.toString());
    }
  }
  return Array.from(pages);
}

function extractName(html, provider) {
  const candidates = [
    /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1],
    /<meta\b[^>]*(?:property|name)=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i.exec(html)?.[1],
    /<meta\b[^>]*content=["']([^"']+)["'][^>]*(?:property|name)=["']og:title["'][^>]*>/i.exec(html)?.[1],
    /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1],
  ];
  for (const candidate of candidates) {
    const title = cleanTitle(candidate || "", provider);
    if (goodTitle(title)) return title;
  }
  return "";
}

async function mapLimit(values, limit, worker) {
  const result = new Array(values.length);
  let cursor = 0;
  async function run() {
    while (true) {
      const index = cursor++;
      if (index >= values.length) return;
      result[index] = await worker(values[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, run));
  return result;
}

const records = [];
const diagnostics = {};
for (const config of providers) {
  const urls = await discoverUrls(config);
  console.log(`${config.provider}: ${urls.length} candidate URL(s)`);
  const rows = await mapLimit(urls, pageConcurrency, async (url) => {
    try {
      const html = await fetchText(url);
      const name = extractName(html, config.provider);
      if (!name) return null;
      return {
        slug: `${slugify(config.provider)}-${slugify(name)}`,
        name,
        provider: config.provider,
        source: url,
        verifiedBy: "official-provider-catalog",
      };
    } catch {
      return null;
    }
  });
  const clean = rows.filter(Boolean);
  diagnostics[config.provider] = { discovered: urls.length, resolved: clean.length };
  records.push(...clean);
  console.log(`${config.provider}: ${clean.length} resolved title(s)`);
}

const unique = [];
const seen = new Set();
for (const record of records) {
  const key = `${record.provider}\u0000${record.name}`.normalize("NFKC").toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(record);
}
unique.sort((a, b) => a.provider.localeCompare(b.provider) || a.name.localeCompare(b.name));

await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/catalog-sitemaps.json`, `${JSON.stringify(unique, null, 2)}\n`);
await writeFile(`${outDir}/catalog-sitemaps-summary.json`, `${JSON.stringify({ total: unique.length, diagnostics }, null, 2)}\n`);
console.log(`TOTAL: ${unique.length}`);
console.log(JSON.stringify(diagnostics, null, 2));
