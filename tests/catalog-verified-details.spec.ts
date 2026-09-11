import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogDetails } from "../src/lib/catalog-verified-details-lookup";
import { getVerifiedCatalogGameType } from "../src/lib/catalog-verified-game-type";

const providers = ["Wazdan", "BGaming", "Endorphina", "Push Gaming", "3 Oaks Gaming", "Play’n GO", "Hacksaw Gaming", "Nolimit City"];
const detailedSeeds = providers.map((provider) =>
  catalogSeeds.find((seed) => seed.provider === provider && getVerifiedCatalogDetails(seed.slug)),
);

const playngoWave10Slugs = [
  "playn-go-5x-magic",
  "playn-go-7-sins",
  "playn-go-agent-destiny",
  "playn-go-agent-of-hearts",
  "playn-go-alice-cooper-and-the-tome-of-madness",
  "playn-go-ankh-of-anubis",
  "playn-go-ankh-of-anubis-awakening",
  "playn-go-athena-ascending",
  "playn-go-aztec-idols",
  "playn-go-aztec-warrior-princess",
];

const playngoWave11Slugs = [
  "playn-go-bakers-treat",
  "playn-go-banana-rock",
  "playn-go-banana-rush",
  "playn-go-banquet-of-dead",
  "playn-go-bao-shi",
  "playn-go-barn-busters",
  "playn-go-baron-lord-of-saturday",
  "playn-go-battle-royal",
  "playn-go-beasts-of-fire-maximum",
  "playn-go-big-win-777",
];

const playngoWave12Slugs = [
  "playn-go-boat-bonanza",
  "playn-go-boat-bonanza-croconile",
  "playn-go-bull-in-a-china-shop",
  "playn-go-cats-and-cash",
  "playn-go-chronos-joker",
  "playn-go-city-of-sound",
  "playn-go-cloud-quest",
  "playn-go-coils-of-cash",
  "playn-go-colt-lightning-inferno",
  "playn-go-contact",
];

const playngoWave13Slugs = [
  "playn-go-cops-n-robbers",
  "playn-go-count-jokula",
  "playn-go-coywolf-cash",
  "playn-go-crabbys-gold",
  "playn-go-crabbys-gold-ii",
  "playn-go-crystal-hall",
  "playn-go-crystal-sun",
  "playn-go-dawn-of-egypt",
  "playn-go-def-leppard-hysteria",
  "playn-go-demon",
];

test("verified catalog details render without promoting records to dossiers", async ({ page }) => {
  expect(detailedSeeds.every(Boolean)).toBe(true);

  for (const seed of detailedSeeds) {
    expect(seed).toBeTruthy();
    const details = getVerifiedCatalogDetails(seed!.slug)!;
    const gameType = getVerifiedCatalogGameType(seed!.slug);
    expect(details.source).toBe(seed!.source);
    if (gameType) expect(gameType.source).toBe(seed!.source);

    await page.goto(`/slots/catalog/${seed!.slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator(".catalog-record-heading").getByText("Базовая запись", { exact: true })).toBeVisible();
    await expect(page.getByText("Технические данные проверены", { exact: true })).toBeVisible();
    if (gameType) await expect(page.locator(".catalog-record-facts").getByText(gameType.gameType, { exact: true })).toBeVisible();
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

test("new Play’n GO technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of [...playngoWave10Slugs, ...playngoWave11Slugs, ...playngoWave12Slugs, ...playngoWave13Slugs]) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
  }
});
