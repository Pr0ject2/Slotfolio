import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const chromePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";

function cleanName(value = "") {
  return value
    .replace(/^read more about\s+/i, "")
    .replace(/^find out more about\s+/i, "")
    .replace(/^more info(?: about)?\s+/i, "")
    .replace(/\s+(?:try it|play demo|play now|find out more|details)$/i, "")
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

function goodName(name) {
  if (name.length < 2 || name.length > 110) return false;
  if (/^(?:games?|slots?|home|details|more info|find out more|play|play now|play demo|try it|load more|show more|coming soon|back to home)$/i.test(name)) return false;
  if (/^(?:rtp|volatility|medium|high|low|very-high|medium-high|medium-low)$/i.test(name)) return false;
  return /[a-z0-9]/i.test(name);
}

function normalize(records) {
  const seen = new Set();
  const rows = [];
  for (const record of records) {
    const name = cleanName(record.name);
    if (!goodName(name)) continue;
    const key = `${record.provider}\u0000${name.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    rows.push({
      slug: `${slugify(record.provider)}-${slugify(name)}`,
      name,
      provider: record.provider,
      source: record.source,
      verifiedBy: "official-provider-catalog",
    });
  }
  return rows;
}

const providers = [
  {
    provider: "BGaming",
    url: "https://bgaming.com/game-type/slots",
    href: /bgaming\.com\/games\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /show more|load more/i,
  },
  {
    provider: "Hacksaw Gaming",
    url: "https://www.hacksawgaming.com/games/slots",
    href: /hacksawgaming\.com\/games\/[^/?#]+\/?(?:[?#].*)?$/i,
  },
  {
    provider: "Pragmatic Play",
    url: "https://www.pragmaticplay.com/en/games/",
    href: /pragmaticplay\.com\/en\/games\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /load more games|load more/i,
  },
  {
    provider: "Play’n GO",
    url: "https://www.playngo.com/games",
    href: /playngo\.com\/games\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /load more|show more/i,
  },
  {
    provider: "Endorphina",
    url: "https://endorphina.com/games",
    href: /endorphina\.com\/games\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /load more|show more/i,
  },
  {
    provider: "Nolimit City",
    url: "https://nolimitcity.com/games/",
    href: /nolimitcity\.com\/(?:game|games)\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /load more|show more/i,
  },
  {
    provider: "Push Gaming",
    url: "https://www.pushgaming.com/games/",
    href: /pushgaming\.com\/(?:game|games)\/[^/?#]+\/?(?:[?#].*)?$/i,
    more: /load more|show more/i,
  },
];

async function dismissOverlays(page) {
  const candidates = [
    /yes,? i am over 18/i,
    /^yes$/i,
    /accept all/i,
    /accept cookies/i,
    /allow all/i,
    /agree/i,
  ];
  for (const pattern of candidates) {
    const button = page.getByRole("button", { name: pattern }).first();
    if (await button.isVisible().catch(() => false)) {
      await button.click({ timeout: 1500 }).catch(() => {});
      await page.waitForTimeout(250);
    }
  }
}

async function reveal(page, pattern) {
  for (let round = 0; round < 80; round += 1) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    if (!pattern) continue;
    const buttons = page.getByRole("button", { name: pattern });
    const count = await buttons.count();
    let clicked = false;
    for (let i = 0; i < count; i += 1) {
      const button = buttons.nth(i);
      if (await button.isVisible().catch(() => false)) {
        await button.click({ timeout: 2500 }).catch(() => {});
        await page.waitForTimeout(450);
        clicked = true;
        break;
      }
    }
    if (!clicked && round > 5) break;
  }
}

async function extractCards(page, config) {
  const rows = await page.evaluate(() => {
    const generic = /^(details|more info|find out more|play|play now|play demo|try it|coming soon)$/i;
    const links = [];
    for (const anchor of document.querySelectorAll("a[href]")) {
      const href = anchor.href;
      const own = (anchor.textContent || "").replace(/\s+/g, " ").trim();
      let name = own;
      const scope = anchor.closest("article, li, [class*='game'], [class*='card'], [class*='item']") || anchor.parentElement;
      if (!name || generic.test(name)) {
        const title = scope?.querySelector("h1,h2,h3,h4,h5,[class*='title'],[class*='name']");
        const text = (title?.textContent || "").replace(/\s+/g, " ").trim();
        if (text && !generic.test(text)) name = text;
      }
      if (!name || generic.test(name)) {
        const image = scope?.querySelector("img[alt]");
        const alt = (image?.getAttribute("alt") || "").replace(/\s+/g, " ").trim();
        if (alt && !generic.test(alt)) name = alt;
      }
      links.push({ href, name });
    }
    return links;
  });
  return normalize(
    rows
      .filter((row) => config.href.test(row.href))
      .map((row) => ({ provider: config.provider, name: row.name, source: row.href })),
  );
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const all = [];
const diagnostics = {};
try {
  for (const config of providers) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
    try {
      await page.goto(config.url, { waitUntil: "domcontentloaded", timeout: 45_000 });
      await dismissOverlays(page);
      await page.waitForTimeout(1000);
      await reveal(page, config.more);
      const rows = await extractCards(page, config);
      all.push(...rows);
      diagnostics[config.provider] = {
        count: rows.length,
        sample: rows.slice(0, 12).map((row) => ({ name: row.name, source: row.source })),
        title: await page.title(),
      };
      console.log(`${config.provider}: ${rows.length}`);
    } catch (error) {
      diagnostics[config.provider] = { count: 0, error: error?.message || String(error) };
      console.warn(`${config.provider}: ${error?.message || error}`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}

const catalog = normalize(all).sort((a, b) => a.provider.localeCompare(b.provider) || a.name.localeCompare(b.name));
const counts = Object.fromEntries(
  Array.from(catalog.reduce((map, item) => map.set(item.provider, (map.get(item.provider) || 0) + 1), new Map())).sort(),
);

await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/catalog-browser.json`, `${JSON.stringify(catalog, null, 2)}\n`);
await writeFile(`${outDir}/catalog-browser-summary.json`, `${JSON.stringify({ total: catalog.length, counts, diagnostics }, null, 2)}\n`);
console.log(`TOTAL: ${catalog.length}`);
console.log(JSON.stringify(counts, null, 2));
