import { test, expect } from "@playwright/test";

test.use({ baseURL: process.env.AUDIT_BASE_URL || "http://localhost:3000" });

for (const width of [320, 390]) {
  for (const sample of [
    { query: "?provider=clawbuster&q=clawsby", count: 1, textSize: 12 },
    { query: "?provider=clawbuster", count: 9, textSize: 16 },
    { query: "", count: 18, textSize: 12 },
    { query: "?q=zz-no-such-game", count: 0, textSize: 20 },
  ]) {
    test(`filter return keeps results visible: ${width}px, ${sample.count} rows, ${sample.textSize}px labels`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("/slots" + sample.query);
      await page.waitForLoadState("networkidle");
      await expect(page.locator(".catalog-game")).toHaveCount(sample.count);
      const filterToggle = page.getByRole("button", { name: /^Фильтры/ });
      await expect.poll(() => filterToggle.evaluate((element) =>
        Object.keys(element).some((key) => key.startsWith("__reactProps$")),
      ), { message: "Catalog controls are hydrated" }).toBe(true);
      // Larger labels model browser text enlargement, which changes the panel height.
      await page.addStyleTag({ content: `.filters fieldset label { font-size: ${sample.textSize}px; }` });
      for (let attempt = 0; attempt < 3; attempt++) {
        await filterToggle.click();
        await expect(page.locator("#provider")).toBeVisible();
        const panelHeight = await page.locator(".filters").evaluate(el => el.getBoundingClientRect().height);
        await page.getByRole("button", { name: /К результатам/ }).click();
        await expect(page.locator("#provider")).not.toBeVisible();
        await expect.poll(async () => {
          const top = await page.locator(".results").evaluate(el => el.getBoundingClientRect().top);
          return top >= 0 && top <= 65;
        }, { message: `Result toolbar visible after collapsing ${panelHeight}px panel` }).toBe(true);
        await expect(page.locator(sample.count ? ".catalog-game h2" : ".empty-state").first()).toBeInViewport();
        // Allow the existing CSS smooth scroll to finish before checking for a later jump.
        await page.waitForTimeout(1000);
        await expect(page.locator(sample.count ? ".catalog-game h2" : ".empty-state").first()).toBeInViewport();
        const settledY = await page.evaluate(() => scrollY);
        await page.waitForTimeout(400);
        expect(Math.abs(await page.evaluate(() => scrollY) - settledY)).toBeLessThanOrEqual(1);
      }
    });
  }
}
for (const width of [320, 390, 1440]) {
  test(`preset selection reveals and focuses the chosen pair: ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/compare');
    await page.waitForLoadState('networkidle');
    for (const name of [/01 Два каскадных/, /02 Линии против/, /02 Линии против/]) {
      await page.getByRole('button', { name }).click();
      const selection = page.locator('.comparison-selection');
      await expect(selection).toBeFocused();
      await expect(selection.locator('article')).toHaveCount(2);
      await expect(page.locator('#comparison-game')).toBeDisabled();
      await expect.poll(() => selection.evaluate(el => Math.abs(el.getBoundingClientRect().top - 30))).toBeLessThan(2);
      await expect(selection.locator('h3').first()).toBeInViewport();
    }
  });
}

test('desktop filter selection keeps the panel open without scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/slots?provider=clawbuster');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('.filter-apply')).not.toBeVisible();
  await page.getByLabel('Провайдер', { exact: true }).selectOption('onlyplay');
  await expect(page.locator('.catalog-game')).toHaveCount(5);
  await expect(page.locator('#provider')).toBeVisible();
  expect(await page.evaluate(() => scrollY)).toBe(0);
});
test('game rows preserve square and wide artwork without cropping', async ({ page }) => {
  for (const width of [390, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const provider of ['mancala-gaming', 'pragmatic-play']) {
      await page.goto(`/providers/${provider}#games`);
      const artwork = page.locator('.row-image .game-image').first();
      await artwork.scrollIntoViewIfNeeded();
      await expect(artwork).toHaveCSS('object-fit', 'contain');
      await expect.poll(() => artwork.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  }
});