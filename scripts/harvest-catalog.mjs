import { mkdir, writeFile } from "node:fs/promises";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const timeoutMs = 20_000;

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)));
}

function stripTags(value) {
  return decodeHtml(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
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
          accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5",
          "accept-language": "en-US,en;q=0.8",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/152 Safari/537.36 SlotfolioCatalogResearch/1.0",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 700));
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError;
}

function anchors(html, baseUrl) {
  const result = [];
  const re = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = re.exec(html))) {
    const name = stripTags(match[2]);
    if (!name) continue;
    try {
      result.push({ name, url: new URL(decodeHtml(match[1]), baseUrl).toString() });
    } catch {}
  }
  return result;
}

function cleanName(name) {
  return name
    .replace(/^read more about\s+/i, "")
    .replace(/^find out more about\s+/i, "")
    .replace(/\s+(?:try it|play demo|play now|find out more)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function looksLikeGameName(name) {
  if (name.length < 2 || name.length > 100) return false;
  if (/^(games?|slots?|home|more info|find out more|play|play now|play demo|try it|details|load more|show more|coming soon)$/i.test(name)) return false;
  return /[a-z0-9]/i.test(name);
}

function normalize(records) {
  const seen = new Set();
  const result = [];
  for (const record of records) {
    const name = cleanName(record.name);
    if (!looksLikeGameName(name)) continue;
    const key = `${record.provider}\u0000${name.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push({
      slug: record.slug || `${slugify(record.provider)}-${slugify(name)}`,
      name,
      provider: record.provider,
      source: record.source || record.url,
      verifiedBy: record.verifiedBy || "official-provider-catalog",
    });
  }
  return result;
}

async function harvestSimple({ provider, page, include }) {
  const html = await fetchText(page);
  const rows = anchors(html, page)
    .filter(({ url }) => include(url))
    .map(({ name, url }) => ({ provider, name, url, source: url }));
  return normalize(rows);
}

async function harvestPragmatic() {
  const provider = "Pragmatic Play";
  const records = [];
  let emptyPages = 0;
  for (let page = 1; page <= 80 && emptyPages < 3; page += 1) {
    const url = page === 1
      ? "https://www.pragmaticplay.com/en/games/"
      : `https://www.pragmaticplay.com/en/games/page/${page}/`;
    try {
      const html = await fetchText(url);
      const found = anchors(html, url).filter(({ url: href }) => {
        const u = new URL(href);
        return u.hostname.endsWith("pragmaticplay.com") &&
          /\/en\/games\/[^/?#]+\/?$/i.test(u.pathname) &&
          !/\/en\/games\/(?:page|category|studio)\//i.test(u.pathname);
      });
      const normalized = normalize(found.map(({ name, url: href }) => ({ provider, name, url: href, source: href })));
      if (!normalized.length) emptyPages += 1;
      else emptyPages = 0;
      records.push(...normalized);
      console.log(`Pragmatic page ${page}: ${normalized.length}`);
    } catch (error) {
      console.warn(`Pragmatic page ${page}: ${error?.message || error}`);
      emptyPages += 1;
    }
  }
  return normalize(records);
}

async function harvestHacksaw() {
  const provider = "Hacksaw Gaming";
  const page = "https://www.hacksawgaming.com/games/slots";
  const html = await fetchText(page);
  const cutoff = html.search(/Instant Win/i);
  const slotHtml = cutoff > 0 ? html.slice(0, cutoff) : html;
  const rows = anchors(slotHtml, page)
    .filter(({ url }) => {
      const u = new URL(url);
      return u.hostname.endsWith("hacksawgaming.com") && /\/games\/[^/?#]+\/?$/i.test(u.pathname) && !/\/games\/slots\/?$/i.test(u.pathname);
    })
    .map(({ name, url }) => ({ provider, name, url, source: url }));
  return normalize(rows);
}

async function harvestBGaming() {
  const provider = "BGaming";
  const page = "https://bgaming.com/game-type/slots";
  const html = await fetchText(page);
  const rows = anchors(html, page)
    .filter(({ url }) => {
      const u = new URL(url);
      return u.hostname === "bgaming.com" && /\/games\/[^/?#]+\/?$/i.test(u.pathname);
    })
    .map(({ name, url }) => ({ provider, name, url, source: url }));
  return normalize(rows);
}

const simpleSources = [
  {
    provider: "Play’n GO",
    page: "https://www.playngo.com/games",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("playngo.com") && /\/games\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Endorphina",
    page: "https://endorphina.com/games",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("endorphina.com") && /\/games\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Nolimit City",
    page: "https://nolimitcity.com/games/",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("nolimitcity.com") && /\/games?\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Push Gaming",
    page: "https://www.pushgaming.com/games/",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("pushgaming.com") && /\/games?\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Relax Gaming",
    page: "https://www.relax-gaming.com/products/casino-games/",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("relax-gaming.com") && /\/(?:games?|casino-games)\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "3 Oaks Gaming",
    page: "https://3oaks.com/games",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("3oaks.com") && /\/game\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Onlyplay",
    page: "https://onlyplay.com/games",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("onlyplay.com") && /\/games\/[^/?#]+\/?$/i.test(u.pathname);
    },
  },
  {
    provider: "Mancala Gaming",
    page: "https://mancalagaming.com/games",
    include: (href) => {
      const u = new URL(href);
      return u.hostname.endsWith("mancalagaming.com") && /\/[^/?#]+\/?$/i.test(u.pathname) && !/^\/(?:games|about|contact|news|careers?)\/?$/i.test(u.pathname);
    },
  },
];

const all = [];
for (const task of [
  ["BGaming", harvestBGaming],
  ["Hacksaw Gaming", harvestHacksaw],
  ["Pragmatic Play", harvestPragmatic],
]) {
  const [label, fn] = task;
  try {
    const rows = await fn();
    console.log(`${label}: ${rows.length}`);
    all.push(...rows);
  } catch (error) {
    console.warn(`${label}: failed: ${error?.message || error}`);
  }
}

for (const source of simpleSources) {
  try {
    const rows = await harvestSimple(source);
    console.log(`${source.provider}: ${rows.length}`);
    all.push(...rows);
  } catch (error) {
    console.warn(`${source.provider}: failed: ${error?.message || error}`);
  }
}

const catalog = normalize(all).sort((a, b) => a.provider.localeCompare(b.provider) || a.name.localeCompare(b.name));
const counts = Object.fromEntries(
  Array.from(catalog.reduce((map, item) => map.set(item.provider, (map.get(item.provider) || 0) + 1), new Map())).sort(),
);

await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/catalog-harvest.json`, `${JSON.stringify(catalog, null, 2)}\n`);
await writeFile(`${outDir}/catalog-harvest-summary.json`, `${JSON.stringify({ total: catalog.length, counts }, null, 2)}\n`);
console.log(`TOTAL: ${catalog.length}`);
console.log(JSON.stringify(counts, null, 2));
