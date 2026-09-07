import { test, expect } from "@playwright/test";
import { slots, providerProfiles, mechanics, providerSlug, slotMechanics, slotMatchesSearch, slotFeatureOptions, type Slot } from "../src/lib/data";
import { catalogStats, representativeGames, rtpRange } from "../src/lib/catalog-stats";

test("statistics handle duplicate records, overlapping mechanics and unavailable RTP", () => {
  const a = { ...slots[0], mechanics: ["Каскады", "Каскады", "Линии"], tags: ["Wild", "Wild"] };
  const b = { ...slots[1], rtp: "" };
  const stats = catalogStats([a, a, b]);
  expect(stats.count).toBe(2);
  expect(stats.rtp.count).toBe(1);
  expect(stats.rtp.median).toBe(96.5);
  expect(stats.features.find((item) => item.name === "Wild")?.count).toBe(1);
  expect(stats.mechanics.find((item) => item.name === "Каскады")?.count).toBe(2);
  expect(rtpRange(catalogStats([]).rtp)).toBe("Не указан");
  for (const rtp of ["нет", "NaN", "101%", "-2%", "96–97%", undefined]) {
    expect(catalogStats([{...slots[0], rtp} as Slot]).rtp.count).toBe(0);
  }
  expect(new Set(representativeGames([a, a, b]).map((game) => game.slug)).size).toBe(2);
});

test("every three-game combination has finite consistent derived data", () => {
  let combinations = 0;
  for (let a = 0; a < slots.length - 2; a++) for (let b = a + 1; b < slots.length - 1; b++) for (let c = b + 1; c < slots.length; c++) {
    const stats = catalogStats([slots[a], slots[b], slots[c]]);
    expect(stats.count).toBe(3);
    expect(stats.rtp.min).toBeLessThanOrEqual(stats.rtp.median!);
    expect(stats.rtp.median).toBeLessThanOrEqual(stats.rtp.max!);
    expect(stats.volatility.reduce((sum, item) => sum + item.count, 0)).toBe(3);
    combinations++;
  }
  expect(combinations).toBe(4060);
});

test("Russian aliases, decimal RTP and every feature remain searchable", () => {
  expect(slotMatchesSearch(slots[0], "ртп 96,50")).toBe(true);
  expect(slotMatchesSearch(slots[0], "rtp 96.50")).toBe(true);
  expect(slotMatchesSearch(slots.find((s) => s.slug === "starburst")!, "вайлд")).toBe(true);
  expect(slotMatchesSearch(slots[0], "свободные вращения")).toBe(true);
  expect(slotMatchesSearch(slots[0], "выдуманная игра")).toBe(false);
  expect(new Set(slotFeatureOptions.map((x) => x.name))).toEqual(new Set(slots.flatMap((s) => s.tags)));
});

test("all entity profiles expose the right games, statistics and breadcrumbs", async ({page}) => {
  test.setTimeout(120000);
  const entities = [...providerProfiles.map((p) => ({path: `/providers/${p.slug}`, name: p.name, games: slots.filter((s) => providerSlug(s.provider) === p.slug)})), ...mechanics.map((m) => ({path: `/mechanics/${m.slug}`, name: m.name, games: slots.filter((s) => slotMechanics(s).includes(m.name))}))];
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const entity of entities) {
    await page.goto(entity.path);
    await expect(page.locator("h1")).toHaveText(entity.name);
    await expect(page.locator(".entity-games .game-row")).toHaveCount(entity.games.length);
    await expect(page.locator(".entity-rtp")).toContainText(rtpRange(catalogStats(entity.games).rtp));
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    const data = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((s) => JSON.parse(s));
    expect(JSON.stringify(data)).toContain('"@type":"BreadcrumbList"');
    expect(JSON.stringify(data)).toContain('"numberOfItems":' + entity.games.length);
    titles.add(await page.title());
    descriptions.add((await page.locator('meta[name="description"]').getAttribute("content"))!);
  }
  expect(titles.size).toBe(12);
  expect(descriptions.size).toBe(12);
});

test("provider and mechanic entry links apply filters and preserve rare tags", async ({page}) => {
  await page.goto("/providers/pragmatic-play");
  await page.locator('.entity-jump a[href*="provider="]').click();
  await expect(page.locator("#provider")).toHaveValue("pragmatic-play");
  await expect(page.locator(".catalog-game")).toHaveCount(7);
  await page.goto("/mechanics/clusters");
  await page.locator('#games .section-title a').click();
  const count = slots.filter((s) => s.mechanics.includes("Кластеры")).length;
  await expect(page.locator(".catalog-game")).toHaveCount(count);
  const rare = slotFeatureOptions.find((x) => x.count === 1)!;
  await page.goto("/slots?feature=" + encodeURIComponent(rare.name));
  await expect(page.locator("#feature")).toHaveValue(rare.name);
  await expect(page.locator(".catalog-game")).toHaveCount(1);
  await page.reload();
  await expect(page.locator("#feature")).toHaveValue(rare.name);
});

test("profiles add games to comparison and seed survives a full selection", async ({page}) => {
  await page.goto("/providers/hacksaw-gaming");
  await page.locator(".entity-games .compare-button").first().click();
  await page.goto("/mechanics/ways");
  await page.locator(".entity-games .compare-button").first().click();
  await page.locator(".entity-games .compare-button").nth(1).click();
  await page.goto("/compare?seed=starburst");
  await expect(page.getByRole("status")).toContainText("освободите место");
  await page.locator(".comparison-selection article button").first().click();
  await expect(page.locator(".comparison-selection")).toContainText("Starburst");
  await expect(page).not.toHaveURL(/seed=/);
  await page.getByRole("button", {name: "Удалить Starburst из сравнения", exact: true}).click();
  await page.reload();
  await expect(page.locator(".comparison-selection")).not.toContainText("Starburst");
});

test("comparison recovers corrupt, duplicate and unavailable browser storage", async ({page}) => {
  await page.goto("/compare");
  await page.evaluate(() => localStorage.setItem("slotfolio-compare", '["starburst","starburst","not-a-game","mental"]'));
  await page.reload();
  await expect(page.locator(".comparison-selection article")).toHaveCount(2);
  await page.evaluate(() => localStorage.setItem("slotfolio-compare", '{broken'));
  await page.reload();
  await expect(page.locator(".comparison-selection article")).toHaveCount(0);
  await page.addInitScript(() => { Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } }); });
  await page.goto("/providers/netent");
  await page.locator(".entity-games .compare-button").first().click();
  await expect(page.locator(".entity-games .compare-button").first()).toHaveAttribute("aria-pressed", "true");
});

test("failed artwork uses a local fallback without a resize", async ({page}) => {
  await page.route("**/images/slots/gates-of-olympus-feature.webp", (route) => route.abort());
  await page.goto("/slots/gates-of-olympus");
  await expect(page.locator('img[src$="/images/unavailable.svg"]')).toHaveCount(1);
  await expect.poll(() => page.locator('img[src$="/images/unavailable.svg"]').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
});
