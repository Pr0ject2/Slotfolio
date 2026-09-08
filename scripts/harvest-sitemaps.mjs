import { mkdir, writeFile } from "node:fs/promises";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const timeoutMs = 8_000;
const sitemapConcurrency = 20;

const providers = [
  { provider: "Pragmatic Play", origin: "https://www.pragmaticplay.com", match: /^\/en\/games\/[^/?#]+\/?$/i },
  { provider: "Play’n GO", origin: "https://www.playngo.com", match: /^\/games\/[^/?#]+\/?$/i },
  { provider: "Endorphina", origin: "https://endorphina.com", match: /^\/games\/[^/?#]+\/?$/i },
  { provider: "Hacksaw Gaming", origin: "https://www.hacksawgaming.com", match: /^\/games\/[^/?#]+\/?$/i, reject: /^\/games\/(?:slots|instant-win-games|scratchcards)\/?$/i },
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

function nameFromUrl(value) {
  const url = new URL(value);
  let segment = url.pathname.split("/").filter(Boolean).at(-1) || "";
  try {
    segment = decodeURIComponent(segment);
  } catch {}
  segment = segment.replace(/\.html?$/i, "").replace(/[+_]+/g, " ").replace(/-+/g, " ").trim();
  if (!segment || /^(?:game|slot|demo|play|games|slots|game \d+)$/i.test(segment)) return "";
  return segment
    .split(/\s+/)
    .map((word) => {
      if (/^(?:xways|megaways|rtp|vip)$/i.test(word)) return word.toUpperCase();
      if (/^\d+[a-z]?$/i.test(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bOf\b/g, "of")
    .replace(/\bThe\b/g, "the")
    .replace(/\bIn\b/g, "in")
    .replace(/\bTo\b/g, "to")
    .trim();
}

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: {
          accept: "application/xml,text/xml,text/plain;q=0.9,*/*;q=0.5",
          "accept-language": "en-US,en;q=0.8",
          "user-agent": "Mozilla/5.0 SlotfolioCatalogResearch/1.3",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 300));
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
  await Promise.all(Array.from({ length: Math.min(limit, values.length || 1) }, run));
  return result;
}

async function discoverUrls(config) {
  const origin = new URL(config.origin).origin;
  const seedSitemaps = new Set([
    `${config.origin}/sitemap.xml`,
    `${config.origin}/sitemap_index.xml`,
    `${config.origin}/sitemap-index.xml`,
  ]);
  try {
    const robots = await fetchText(`${config.origin}/robots.txt`);
    for (const url of robotsSitemaps(robots)) seedSitemaps.add(url);
  } catch {}

  const visited = new Set();
  const pages = new Set();
  let frontier = Array.from(seedSitemaps);
  while (frontier.length && visited.size < 120) {
    const batch = frontier.filter((url) => !visited.has(url)).slice(0, Math.max(0, 120 - visited.size));
    if (!batch.length) break;
    for (const url of batch) visited.add(url);
    const documents = await mapLimit(batch, sitemapConcurrency, async (url) => {
      try {
        return { url, text: await fetchText(url) };
      } catch {
        return { url, text: "" };
      }
    });

    const next = new Set();
    for (const document of documents) {
      if (!document.text) continue;
      for (const loc of xmlLocs(document.text)) {
        let url;
        try {
          url = new URL(loc);
        } catch {
          continue;
        }
        if (url.origin !== origin) continue;
        if (/\.xml(?:\.gz)?(?:$|\?)/i.test(url.pathname)) {
          if (!/\.gz$/i.test(url.pathname) && !visited.has(url.toString())) next.add(url.toString());
          continue;
        }
        if (config.match.test(url.pathname) && !(config.reject?.test(url.pathname))) pages.add(url.toString());
      }
    }
    frontier = Array.from(next);
  }
  return Array.from(pages).sort();
}

const records = [];
const diagnostics = {};
for (const config of providers) {
  const urls = await discoverUrls(config);
  const rows = urls
    .map((source) => {
      const name = nameFromUrl(source);
      if (!name) return null;
      return {
        slug: `${slugify(config.provider)}-${slugify(name)}`,
        name,
        provider: config.provider,
        source,
        verifiedBy: "official-provider-catalog",
        titleSource: "official-url-slug",
      };
    })
    .filter(Boolean);
  diagnostics[config.provider] = { discovered: urls.length, usable: rows.length };
  records.push(...rows);
  console.log(`${config.provider}: ${rows.length} usable official game URL(s)`);
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
