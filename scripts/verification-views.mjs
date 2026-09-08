import { chromium } from "@playwright/test";
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000/");
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "docs/screenshots/preview-desktop.png" });
await page.goto("http://localhost:3000/slots");
await page.getByRole("searchbox").fill("zzzz-no-results");
await page.screenshot({
  path: "docs/screenshots/desktop-empty-search.png",
  fullPage: true,
});
await page.getByRole("button", { name: "Показать все игры" }).click();
await page
  .locator(".catalog-game")
  .nth(0)
  .getByRole("button", { name: "+ Сравнить", exact: true })
  .click();
await page
  .locator(".catalog-game")
  .nth(1)
  .getByRole("button", { name: "+ Сравнить", exact: true })
  .click();
await page.goto("http://localhost:3000/compare");
await page.locator("thead img").first().waitFor();
await page.screenshot({
  path: "docs/screenshots/desktop-comparison.png",
  fullPage: true,
});
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({
  path: "docs/screenshots/mobile-comparison.png",
  fullPage: true,
});
await page.goto("http://localhost:3000/slots");
await page.getByRole("button", { name: /Фильтры/ }).click();
await page.locator("#provider").selectOption("play-n-go");
await page.screenshot({
  path: "docs/screenshots/mobile-filters.png",
  fullPage: true,
});
await page.goto("http://localhost:3000/journal/how-cascades-work");
await page.locator('.article-toc a[href="#rules"]').click();
await page.waitForFunction(
  () =>
    Math.abs(document.querySelector("#rules").getBoundingClientRect().top) <
    100,
);
await page.screenshot({ path: "docs/screenshots/mobile-reading.png" });
await page.setViewportSize({ width: 320, height: 844 });
await page.goto("http://localhost:3000/regions/great-britain");
await page.screenshot({
  path: "docs/screenshots/small-mobile-geo.png",
  fullPage: true,
});
await browser.close();
console.log("Seven additional visual states captured.");
