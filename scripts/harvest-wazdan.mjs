import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const outDir = process.env.CATALOG_HARVEST_OUT || "artifacts";
const chromePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const provider = "Wazdan";
const catalogUrl = "https://wazdan.com/games";

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

function cleanName(value = "") {
  return value
    .replace(/\s+(?:Play|Read more|Details)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
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
  for (let round = 0; round < 80 && stable < 5; round += 1) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(250);
    const showMore = page.getByRole("button", { name: /show more/i }).first();
    if (await showMore.isVisible().catch(() => false)) {
      await showMore.click({ timeout: 2500 }).catch(() => {});
      await page.waitForTimeout(450);
    }
    const count = await page.locator('a[href*="/games/"]').count();
    if (count <= previous) stable += 1;
    else stable = 0;
    previous = count;
  }

  const extracted = await page.locator('a[href*="/games/"]').evaluateAll((anchors) =>
    anchors.map((anchor) => {
      const scope = anchor.closest("article, li, [class*='game'], [class*='card'], [class*='item']") || anchor;
      const heading = scope.querySelector("h2,h3,h4,[class*='title'],[class*='name']");
      const image = scope.querySelector("img[alt]");
      return {
        href: anchor.href,
        text: (anchor.textContent || "").replace(/\s+/g, " ").trim(),
        heading: (heading?.textContent || "").replace(/\s+/g, " ").trim(),
        alt: (image?.getAttribute("alt") || "").replace(/\s+/g, " ").trim(),
      };
    }),
  );

  const seen = new Set();
  for (const item of extracted) {
    let url;
    try {
      url = new URL(item.href);
    } catch {
      continue;
    }
    if (url.hostname.replace(/^www\./, "") !== "wazdan.com") continue;
    if (!/^\/games\/[^/?#]+\/?$/i.test(url.pathname)) continue;
    const name = cleanName(item.heading || item.text || item.alt);
    if (!name || name.length < 2 || name.length > 100) continue;
    if (/^(?:games?|show more|read more|details)$/i.test(name)) continue;
    const key = name.normalize("NFKC").toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
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
await writeFile(`${outDir}/catalog-wazdan.json`, `${JSON.stringify(rows, null, 2)}\n`);
await writeFile(`${outDir}/catalog-wazdan-summary.json`, `${JSON.stringify({ total: rows.length, sample: rows.slice(0, 20) }, null, 2)}\n`);
console.log(`Wazdan: ${rows.length}`);
