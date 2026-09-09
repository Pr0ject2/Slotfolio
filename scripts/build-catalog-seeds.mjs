import { readFile, writeFile } from "node:fs/promises";

const browserPath = process.env.BROWSER_CATALOG || "artifacts/catalog-browser.json";
const wazdanPath = process.env.WAZDAN_CATALOG || "artifacts/catalog-wazdan.json";
const oaksPath = process.env.OAKS_CATALOG || "artifacts/catalog-3oaks.json";
const outputPath = process.env.CATALOG_SEEDS_OUT || "src/data/catalog-seeds.json";

const nonSlotPattern = /\b(?:blackjack|roulette|baccarat|poker|bingo|keno)\b/i;

function normalize(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-zа-я0-9]+/gi, " ")
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

function sourceUrl(value) {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

function titleFromPath(source) {
  const url = sourceUrl(source);
  if (!url) return "";
  let segment = url.pathname.split("/").filter(Boolean).at(-1) || "";
  try { segment = decodeURIComponent(segment); } catch {}
  segment = segment.replace(/\.html?$/i, "").replace(/[+_]+/g, " ").replace(/-+/g, " ").trim();
  const small = new Set(["and", "of", "the", "in", "to", "for", "a", "an"]);
  return segment.split(/\s+/).filter(Boolean).map((word, index) => {
    const lower = word.toLowerCase();
    if (/^(?:xways|megaways|rtp|vip)$/i.test(word)) return word.toUpperCase();
    if (/^\d+[a-z]?$/i.test(word)) return word.toUpperCase();
    if (index && small.has(lower)) return lower;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

function exactBrowserRecord(item) {
  const url = sourceUrl(item.source);
  if (!url || !item.name || !item.provider) return null;
  const pathname = url.pathname;
  const host = url.hostname.replace(/^www\./, "");
  const name = String(item.name).trim();
  if (!name || nonSlotPattern.test(name)) return null;

  let valid = false;
  if (item.provider === "Play’n GO") valid = host === "playngo.com" && /^\/games\/[^/?#]+\/?$/i.test(pathname);
  else if (item.provider === "Hacksaw Gaming") valid = host === "hacksawgaming.com" && /^\/games\/[^/?#]+\/?$/i.test(pathname) && !/^\/games\/(?:slots|instant-win-games|scratchcards)\/?$/i.test(pathname);
  else if (item.provider === "BGaming") valid = host === "bgaming.com" && /^\/games\/[^/?#]+\/?$/i.test(pathname);
  else if (item.provider === "Push Gaming") valid = host === "pushgaming.com" && /^\/games\/[^/?#]+\.html?$/i.test(pathname);
  else if (item.provider === "Endorphina") valid = host === "endorphina.com" && /^\/games\/[^/?#]+(?:\/play)?\/?$/i.test(pathname);
  else if (item.provider === "Nolimit City") valid = host === "nolimitcity.com" && /^\/games\/[^/?#]+\/?$/i.test(pathname);
  if (!valid) return null;

  let cleaned = name;
  if (item.provider === "Nolimit City") cleaned = cleaned.replace(/\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+\s+20\d{2}.*$/i, "").trim();
  if (!cleaned || cleaned.length > 100) return null;
  return {
    slug: item.slug || `${slugify(item.provider)}-${slugify(cleaned)}`,
    name: cleaned,
    provider: item.provider,
    source: url.toString(),
    verifiedBy: "official-provider-catalog",
  };
}

function cleanWazdan(rows) {
  const bySource = new Map();
  for (const row of rows) {
    const url = sourceUrl(row.source);
    if (!url || url.hostname.replace(/^www\./, "") !== "wazdan.com" || !/^\/games\/[^/?#]+\/?$/i.test(url.pathname)) continue;
    const source = url.toString();
    const bucket = bySource.get(source) || [];
    bucket.push(row);
    bySource.set(source, bucket);
  }

  const result = [];
  for (const [source, candidates] of bySource) {
    const pathTitle = titleFromPath(source);
    if (!pathTitle || nonSlotPattern.test(pathTitle)) continue;
    const names = [...new Set(candidates.map((row) => String(row.name || "").trim()).filter((name) => name && !/^Upcoming\s*\|/i.test(name)))]
      .sort((a, b) => a.length - b.length || a.localeCompare(b, "en"));
    let name = (names[0] || pathTitle).replace(/[™®]/g, "").trim();
    if (name.length > 70 || name.length > pathTitle.length + 28 || /[.!?].+\s/.test(name)) name = pathTitle;
    result.push({
      slug: `wazdan-${slugify(pathTitle)}`,
      name,
      provider: "Wazdan",
      source,
      verifiedBy: "official-provider-catalog",
    });
  }
  return result;
}

function clean3Oaks(rows) {
  const seenSources = new Set();
  const result = [];
  for (const row of rows) {
    const url = sourceUrl(row.source);
    if (!url || url.hostname.replace(/^www\./, "") !== "3oaks.com" || !/^\/game\/[^/?#]+\/?$/i.test(url.pathname)) continue;
    const source = url.toString();
    if (seenSources.has(source)) continue;
    let name = String(row.name || "").replace(/\s+/g, " ").trim();
    if (!name || name.length > 100 || nonSlotPattern.test(name)) continue;
    seenSources.add(source);
    result.push({
      slug: row.slug || `3-oaks-gaming-${slugify(name)}`,
      name,
      provider: "3 Oaks Gaming",
      source,
      verifiedBy: "official-provider-catalog",
    });
  }
  return result;
}

const browser = JSON.parse(await readFile(browserPath, "utf8"));
const wazdan = JSON.parse(await readFile(wazdanPath, "utf8"));
const oaks = JSON.parse(await readFile(oaksPath, "utf8"));

const candidates = [
  ...browser.map(exactBrowserRecord).filter(Boolean),
  ...cleanWazdan(wazdan),
  ...clean3Oaks(oaks),
];

const selected = [];
const names = new Set();
const slugs = new Set();
for (const item of candidates) {
  const key = normalize(`${item.provider}\u0000${item.name}`);
  if (!key || names.has(key) || slugs.has(item.slug)) continue;
  names.add(key);
  slugs.add(item.slug);
  selected.push(item);
}
selected.sort((a, b) => a.provider.localeCompare(b.provider, "en") || a.name.localeCompare(b.name, "en"));

if (selected.length < 1000) {
  throw new Error(`Only ${selected.length} high-confidence catalog candidates after curation; need at least 1000 before full-slot deduplication.`);
}

await writeFile(outputPath, `${JSON.stringify(selected, null, 2)}\n`);
const counts = Object.fromEntries(Array.from(selected.reduce((map, item) => map.set(item.provider, (map.get(item.provider) || 0) + 1), new Map())).sort());
console.log(`Catalog seed pool: ${selected.length}`);
console.log(JSON.stringify(counts, null, 2));
