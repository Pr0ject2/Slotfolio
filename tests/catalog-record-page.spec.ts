import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "../src/lib/catalog-research-lookup";

const researched = catalogSeeds.find((seed) => (getVerifiedCatalogResearch(seed.slug)?.mechanics.length ?? 0) > 0)!;
const pending = catalogSeeds.find((seed) => !getVerifiedCatalogResearch(seed.slug)?.mechanics.length)!;

test("catalog-only pages are useful records instead of thin placeholders", async ({ page }) => {
  for (const seed of [researched, pending]) {
    await page.goto(`/slots/catalog/${seed.slug}`);
    await expect(page.locator("h1")).toHaveText(seed.name);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("heading", { name: "Что подтверждено" })).toBeVisible();
    await expect(page.getByText("Покрытие данных", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: `Ещё у ${seed.provider}` })).toBeVisible();
    await expect(page.locator(".game-row")).toHaveCount(6);
    await expect(page.getByRole("link", { name: new RegExp(`Все игры ${seed.provider.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`) })).toBeVisible();
    await expect(page.getByRole("link", { name: /Официальная страница/ })).toHaveAttribute("href", seed.source);
    await expect(page.locator("body")).not.toContainText("undefined");
    await expect(page.locator("body")).not.toContainText("NaN");
  }
});

test("researched catalog page exposes mechanics and a second related path", async ({ page }) => {
  const research = getVerifiedCatalogResearch(researched.slug)!;
  await page.goto(`/slots/catalog/${researched.slug}`);
  await expect(page.getByText("Механика проверена", { exact: true })).toBeVisible();
  for (const mechanic of research.mechanics) {
    await expect(page.getByRole("link", { name: mechanic, exact: true }).first()).toHaveAttribute(
      "href",
      `/slots?mechanic=${encodeURIComponent(mechanic)}`,
    );
  }
  await expect(page.getByRole("heading", { name: "Похожие по механике" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Открыть фильтр ↗" })).toHaveAttribute(
    "href",
    `/slots?mechanic=${encodeURIComponent(research.mechanics[0])}`,
  );
});
