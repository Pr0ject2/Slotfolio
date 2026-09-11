import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogDetails } from "../src/lib/catalog-verified-details-lookup";

const detailedSeeds = [
  catalogSeeds.find((seed) => seed.provider === "Wazdan" && getVerifiedCatalogDetails(seed.slug)),
  catalogSeeds.find((seed) => seed.provider === "BGaming" && getVerifiedCatalogDetails(seed.slug)),
  catalogSeeds.find((seed) => seed.provider === "Endorphina" && getVerifiedCatalogDetails(seed.slug)),
].filter(Boolean) as typeof catalogSeeds;

test("verified catalog details render without promoting records to dossiers", async ({ page }) => {
  expect(detailedSeeds).toHaveLength(3);
  for (const seed of detailedSeeds) {
    const details = getVerifiedCatalogDetails(seed.slug)!;
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
    await expect(page.getByRole("link", { name: /Официальный каталог/ })).toHaveAttribute("href", seed.source);
  }
});
