import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
await fs.mkdir("docs/screenshots", { recursive: true });
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  for (const [slug, path] of [
    ["home", "/"],
    ["catalog", "/slots"],
    ["slot", "/slots/gates-of-olympus"],
    ["article", "/journal/how-cascades-work"],
    ["collection", "/collections/beyond-lines"],
  ]) {
    await page.goto("http://localhost:3000" + path);
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `docs/screenshots/${name}-${slug}.png`,
      fullPage: true,
    });
    console.log(
      name,
      path,
      await page.title(),
      await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        images: [...document.images].filter(
          (i) => !i.complete || !i.naturalWidth,
        ).length,
      })),
    );
  }
  await page.close();
}
await browser.close();
