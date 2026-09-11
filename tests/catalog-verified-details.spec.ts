import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getCatalogVerifiedDetails } from "../src/lib/catalog-verified-details";

const detailedSeeds = catalogSeeds.filter((seed) => getCatalogVerifiedDetails(seed.slug)).slice(0, 4);

test("verified catalog details render without promoting records to dossiers", async ({ page }) => {
  expect(detailedSeeds.length).toBeGreaterThan(0);
  for (const seed of detailedSeeds) {
    const details = getCatalogVerifiedDetails(seed.slug)!;
    expect(details.source).toBe(seed.source);
    await page.goto(`/slots/catalog/${seed.slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByText("Технические данные проверены", { exact: true })).toBeVisible();
    if (details.field) await expect(page.getByText(details.field, { exact: true })).toBeVisible();
    if (details.rtp) await expect(page.getByText(details.rtp, { exact: true })).toBeVisible();
    if (details.maxWin) await expect(page.getByText(details.maxWin, { exact: true })).toBeVisible();
    if (details.volatility) await expect(page.getByText(details.volatility, { exact: true })).toBeVisible();
    if (details.releaseDate) {
      await expect(page.getByText(details.releaseDate.split("-").reverse().join("."), { exact: true })).toBeVisible();
    }
    await expect(page.getByRole("link", { name: /Официальная страница/ })).toHaveAttribute("href", seed.source);
  }
});
