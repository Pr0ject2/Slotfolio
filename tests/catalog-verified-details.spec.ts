import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogDetails } from "../src/lib/catalog-verified-details-lookup";

const providers = ["Wazdan", "BGaming", "Endorphina", "Push Gaming", "3 Oaks Gaming", "Play’n GO"];
const detailedSeeds = providers.map((provider) =>
  catalogSeeds.find((seed) => seed.provider === provider && getVerifiedCatalogDetails(seed.slug)),
);

test("verified catalog details render without promoting records to dossiers", async ({ page }) => {
  expect(detailedSeeds.every(Boolean)).toBe(true);

  for (const seed of detailedSeeds) {
    expect(seed).toBeTruthy();
    const details = getVerifiedCatalogDetails(seed!.slug)!;
    expect(details.source).toBe(seed!.source);

    await page.goto(`/slots/catalog/${seed!.slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByText("Базовая запись", { exact: true })).toBeVisible();
    await expect(page.getByText("Технические данные проверены", { exact: true })).toBeVisible();
    if (details.field) await expect(page.getByText(details.field, { exact: true })).toBeVisible();
    if (details.rtp) await expect(page.getByText(details.rtp, { exact: true })).toBeVisible();
    if (details.maxWin) await expect(page.getByText(details.maxWin, { exact: true })).toBeVisible();
    if (details.volatility) await expect(page.getByText(details.volatility, { exact: true })).toBeVisible();
    if (details.releaseDate) {
      await expect(page.getByText(details.releaseDate.split("-").reverse().join("."), { exact: true })).toBeVisible();
    }
    await expect(page.getByRole("link", { name: /Официальный каталог/ })).toHaveAttribute("href", seed!.source);
  }
});
