import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "../src/lib/catalog-research-lookup";

const researched = catalogSeeds.find((seed) => (getVerifiedCatalogResearch(seed.slug)?.mechanics.length ?? 0) > 0)!;
const pending = catalogSeeds.find((seed) => !getVerifiedCatalogResearch(seed.slug)?.mechanics.length)!;

function filterHref(mechanic: string) {
  return new RegExp(`^/slots/?\\?mechanic=${encodeURIComponent(mechanic)}$`);
}

test("catalog-only pages are useful records instead of thin placeholders", async ({ page }) => {
  for (const seed of [researched, pending]) {
    await page.goto(`/slots/catalog/${seed.slug}`);
    await expect(page.locator("h1")).toHaveText(seed.name);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("heading", { name: "Что подтверждено" })).toBeVisible();
    await expect(page.getByText("Покрытие данных", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: `Ещё у ${seed.provider}` })).toBeVisible();
    await expect.poll(() => page.locator(".game-row").count()).toBeGreaterThanOrEqual(6);
    await expect(page.getByRole("link", { name: new RegExp(`Все игры ${seed.provider.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`) })).toBeVisible();
    await expect(page.getByRole("link", { name: /Официальный каталог/ })).toHaveAttribute("href", seed.source);
    await expect(page.locator("body")).not.toContainText("undefined");
    await expect(page.locator("body")).not.toContainText("NaN");
  }
});

test("researched catalog page exposes mechanics and a second related path", async ({ page }) => {
  const research = getVerifiedCatalogResearch(researched.slug)!;
  await page.goto(`/slots/catalog/${researched.slug}`);
  await expect(page.locator(".catalog-record-facts dd").filter({ hasText: /^Механика проверена$/ })).toHaveCount(1);
  for (const mechanic of research.mechanics) {
    await expect(page.getByRole("link", { name: mechanic, exact: true }).first()).toHaveAttribute("href", filterHref(mechanic));
  }
  await expect(page.getByRole("heading", { name: "Похожие по механике" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Открыть фильтр ↗" })).toHaveAttribute("href", filterHref(research.mechanics[0]));
});
