import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const chromePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const provider = "3 Oaks Gaming";
const catalogUrl = "https://3oaks.com/games";

function slugify(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/&/g, " and ").replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "").replace(/-+/g, "-");
}

function cleanName(value = "") {
  return value.replace(/\s+/g, " ").replace(/^(?:More about|Read more)\s+/i, "").trim();
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
const rows = [];
try {
  await page.goto(catalogUrl, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await page.waitForTimeout(1200);

  for (const pattern of [/accept all/i, /accept cookies/i, /agree/i]) {
    const button = page.getByRole("button", { name: pattern }).first();
    if (await button.isVisible().catch(() => false)) await button.click().catch(() => {});
  }

  let stable = 0;
  let previous = 0;
  for (let round = 0; round < 80 && stable < 6; round += 1) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    for (const pattern of [/show more/i, /load more/i, /more games/i]) {
      const button = page.getByRole("button", { name: pattern }).first();
      if (await button.isVisible().catch(() => false)) {
        await button.click({ timeout: 2000 }).catch(() => {});
        await page.waitForTimeout(400);
        break;
      }
    }
    const count = await page.locator('a[href*="/game/"]').count();
    if (count <= previous) stable += 1;
    else stable = 0;
    previous = count;
  }

  const extracted = await page.locator('a[href*="/game/"]').evaluateAll((anchors) =>
    anchors.map((anchor) => {
      const scope = anchor.closest("article, li, [class*='game'], [class*='card'], [class*='item']") || anchor;
      const heading = scope.querySelector("h1,h2,h3,h4,h5,[class*='title'],[class*='name']");
      const image = scope.querySelector("img[alt]");
      return {
        href: anchor.href,
        text: (anchor.textContent || "").replace(/\s+/g, " ").trim(),
        heading: (heading?.textContent || "").replace(/\s+/g, " ").trim(),
        alt: (image?.getAttribute("alt") || "").replace(/\s+/g, " ").trim(),
      };
    }),
  );

  const seenSources = new Set();
  for (const item of extracted) {
    let url;
    try { url = new URL(item.href); } catch { continue; }
    if (url.hostname.replace(/^www\./, "") !== "3oaks.com") continue;
    if (!/^\/game\/[^/?#]+\/?$/i.test(url.pathname)) continue;
    if (seenSources.has(url.toString())) continue;
    const name = cleanName(item.heading || item.text || item.alt);
    if (!name || name.length < 2 || name.length > 100 || /^(?:games?|details|read more)$/i.test(name)) continue;
    seenSources.add(url.toString());
    rows.push({
      slug: `${slugify(provider)}-${slugify(name)}`,
      name,
      provider,
      source: url.toString(),
      verifiedBy: "official-provider-catalog",
      titleSource: "official-page",
    });
  }
} finally {
  await browser.close();
}

rows.sort((a, b) => a.name.localeCompare(b.name, "en"));
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/catalog-3oaks.json`, `${JSON.stringify(rows, null, 2)}\n`);
await writeFile(`${outDir}/catalog-3oaks-summary.json`, `${JSON.stringify({ total: rows.length, sample: rows.slice(0, 20) }, null, 2)}\n`);
console.log(`3 Oaks Gaming: ${rows.length}`);
