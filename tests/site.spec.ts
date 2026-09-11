import { test, expect } from "@playwright/test";
import {
  slots,
  mechanics,
  providerProfiles,
  relatedSlots,
  slotFeatureOptions,
  slotMatchesSearch,
  slotMechanics,
  slotRtpValue,
} from "../src/lib/data";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "../src/lib/catalog-research-lookup";
import { createCatalogModel } from "../src/lib/catalog-index";
import {
  catalogItemMatchesSearch,
  filterCatalogItems,
} from "../src/lib/catalog-query";
import {
  catalogRtpContext,
  getVerifiedSlotMetrics,
  slotFeatureCards,
} from "../src/lib/dossier";

const catalogModel = createCatalogModel();
const routes = [
  "/",
  "/slots",
  "/search",
  "/compare",
  "/mechanics",
  "/providers",
  ...providerProfiles.map((provider) => "/providers/" + provider.slug),
  "/collections",
  "/collections/beyond-lines",
  "/journal",
  "/journal/how-cascades-work",
  "/journal/understanding-rtp",
  "/regions",
  "/regions/great-britain",
  "/about",
  "/bonuses",
  "/privacy",
  "/disclosure",
  "/editorial-policy",
  "/responsible-gaming",
  ...slots.map((slot) => "/slots/" + slot.slug),
  ...mechanics.map((mechanic) => "/mechanics/" + mechanic.slug),
];

const pre1winPolicySlugs = new Set([
  "gates-of-olympus",
  "sweet-bonanza",
  "book-of-dead",
  "reactoonz",
  "the-dog-house",
  "big-bass-bonanza",
  "jammin-jars",
  "razor-shark",
  "wanted-dead-or-a-wild",
  "le-bandit",
  "san-quentin-xways",
  "fire-in-the-hole",
  "starlight-princess",
  "sugar-rush",
  "fruit-party",
  "legacy-of-dead",
  "fire-joker",
  "rise-of-olympus",
  "fat-rabbit",
  "retro-tapes",
  "chaos-crew",
  "chaos-crew-2",
  "deadwood",
  "mental",
  "starburst",
  "gonzos-quest",
  "dead-or-alive-2",
  "money-train-2",
  "snake-arena",
  "book-of-99",
]);

test("100 full dossiers remain rich while the public catalog scales to 1000", () => {
  expect(slots).toHaveLength(100);
  expect(new Set(slots.map((slot) => slot.slug)).size).toBe(100);
  for (const slot of slots) {
    expect(slot.mechanics.length, `${slot.slug} mechanics`).toBeGreaterThan(0);
    expect(slot.tags.length, `${slot.slug} tags`).toBeGreaterThanOrEqual(3);
    expect(slot.mechanics).toContain(slot.mechanic);
    expect(slotRtpValue(slot), `${slot.slug} RTP`).toBeGreaterThan(0);
  }

  expect(catalogSeeds).toHaveLength(900);
  expect(catalogModel.facets.total).toBe(1000);
  expect(catalogModel.items).toHaveLength(1000);
  expect(new Set(catalogModel.items.map((item) => item.slug)).size).toBe(1000);
  expect(catalogModel.items.filter((item) => item.coverage === "dossier")).toHaveLength(100);

  const catalogOnly = catalogModel.items.filter((item) => item.coverage === "catalog");
  expect(catalogOnly).toHaveLength(900);
  for (const item of catalogOnly) {
    const research = getVerifiedCatalogResearch(item.slug);
    expect(item.source, `${item.slug} source`).toMatch(/^https:\/\//);
    expect(item.year, `${item.slug} year`).toBeNull();
    expect(item.rtp, `${item.slug} RTP`).toBe("");
    expect(item.rtpValue, `${item.slug} RTP value`).toBeNull();
    expect(item.mechanics, `${item.slug} mechanics`).toEqual(research?.mechanics ?? []);
    expect(item.tags, `${item.slug} tags`).toEqual([]);
    expect(item.volatility, `${item.slug} volatility`).toBe("");
    if (research) {
      expect(research.source, `${item.slug} research source`).toBe(item.source);
      expect(research.verifiedAt, `${item.slug} research date`).toMatch(/^20\d{2}-\d{2}-\d{2}$/);
      expect(research.evidence.length, `${item.slug} research evidence`).toBeGreaterThan(20);
    }
  }

  expect(slotFeatureOptions.some((item) => item.name === "Множители")).toBe(true);
  expect(slotMatchesSearch(slots[0], "множители")).toBe(true);
  expect(slotMatchesSearch(slots[0], "ртп")).toBe(true);
  const jammin = slots.find((slot) => slot.slug === "jammin-jars")!;
  expect(slotMechanics(jammin)).toEqual(["Кластеры", "Каскады"]);
  const related = relatedSlots(jammin, 3);
  expect(related).toHaveLength(3);
  expect(related.every((slot) => slot.slug !== jammin.slug)).toBe(true);
  expect(new Set(related.map((slot) => slot.slug)).size).toBe(3);
});

test("every researched slot added after v123 keeps auditable 1win evidence", () => {
  const additions = slots.filter((slot) => !pre1winPolicySlugs.has(slot.slug));
  expect(additions).toHaveLength(70);
  for (const slot of additions) {
    const evidence = slot.availability?.find((item) => item.operator === "1win");
    expect(evidence, `${slot.slug} 1win evidence`).toBeTruthy();
    expect(evidence!.verifiedAt).toMatch(/^20\d{2}-\d{2}-\d{2}$/);
    expect(evidence!.source).toMatch(/^https:\/\/(?:www\.)?(?:1win\.com|forum\.1win\.com)\//);
    expect(evidence!.evidence.length).toBeGreaterThan(20);
  }
});

test("dossier enrichment and local media stay intact", () => {
  const wanted = slots.find((slot) => slot.slug === "wanted-dead-or-a-wild")!;
  const metrics = getVerifiedSlotMetrics(wanted.slug)!;
  expect(metrics.maxWin).toBe("12 500x");
  expect(metrics.rtpVariants).toHaveLength(4);
  expect(slotFeatureCards(wanted)).toHaveLength(4);
  expect(catalogRtpContext(wanted).median).toBeGreaterThan(0);
  expect(slots.find((slot) => slot.slug === "chaos-crew-2")?.rtp).toBe("96,27%");

  for (const slot of slots) {
    expect(slot.image, slot.slug).toMatch(/^\/images\/slots\/.+\.(?:webp|svg)$/);
    if (slot.featureImage) {
      expect(slot.featureImage, `${slot.slug} feature`).toMatch(/^\/images\/slots\/.+\.(?:webp|svg)$/);
    }
  }
});

test("all established public routes, local navigation targets, images and headings", async ({ page, request }) => {
  test.setTimeout(240000);
  const links = new Set<string>();
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.title()).toContain("Slotfolio");

    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")!))) {
      links.add(href.split("#")[0]);
    }

    const images = page.locator("img");
    for (let index = 0; index < (await images.count()); index += 1) {
      const image = images.nth(index);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(async () => {
          const src = await image.getAttribute("src");
          if (!src || /^https?:\/\//.test(src)) return 0;
          return (await request.get(src)).status();
        })
        .toBe(200);
      expect(await image.getAttribute("src"), `external runtime image on ${route}`).not.toMatch(/^https?:\/\//);
    }
  }

  for (const href of links) expect((await request.get(href)).status(), href).toBeLessThan(400);
  expect(errors).toEqual([]);
});

test("seo metadata, structured data, robots and sitemap stay conservative", async ({ page, request }) => {
  await page.goto("/slots/gates-of-olympus");
  await expect(page.getByRole("heading", { name: "Что реально меняет ход раунда" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Цифры без ложной точности" })).toBeVisible();
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(canonical).toContain("/slots/gates-of-olympus");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Gates of Olympus/);
  const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents()).join("\n");
  expect(jsonLd).toContain('"@type":"Article"');
  expect(jsonLd).toContain('"@type":"Game"');
  expect(jsonLd).toContain('"@type":"BreadcrumbList"');

  await page.goto("/search");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);

  const robotsText = await (await request.get("/robots.txt")).text();
  if (process.env.NEXT_PUBLIC_INDEXABLE === "true") {
    expect(robotsText).toContain("Allow: /");
    expect(robotsText).toContain("Sitemap:");
  } else {
    expect(robotsText).toContain("Disallow: /");
  }

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapText = await sitemap.text();
  expect(sitemapText).toContain("/slots/gates-of-olympus");
  expect(sitemapText).toContain("/slots/mahjong-wins-super-scatter");
  expect(sitemapText).toContain("/providers/pragmatic-play");
  expect(sitemapText).not.toContain("/slots/catalog/");
  expect(sitemapText).not.toContain("/search");
  expect(sitemapText).not.toContain("/compare");
});

test("catalog search, filters and pagination operate on all 1000 records", async ({ page }) => {
  await page.goto("/slots");
  await expect(page.getByRole("status")).toContainText("1000 игр");
  await expect(page.locator(".catalog-game")).toHaveCount(18);

  const bonanzaCount = catalogModel.items.filter((item) => catalogItemMatchesSearch(item, "bonanza")).length;
  await page.getByRole("searchbox").fill("bonanza");
  await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, bonanzaCount));

  await page.getByRole("button", { name: /Сбросить фильтры|Сбросить всё/ }).first().click();
  await expect(page.locator(".catalog-game")).toHaveCount(18);
  for (const expected of [2, 3, 4]) {
    await page.getByRole("button", { name: "Следующая страница" }).click();
    await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue(String(expected));
    await expect(page.locator(".catalog-game")).toHaveCount(18);
  }

  await page.getByRole("radio", { name: "Каскады" }).check();
  const cascadeCount = catalogModel.items.filter((item) => item.mechanics.includes("Каскады")).length;
  await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, cascadeCount));
  await page.getByRole("combobox", { name: "Сортировка" }).selectOption("name");
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Сортировка" })).toHaveValue("name");
  await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, cascadeCount));
  await page.getByRole("button", { name: "Обложки", exact: true }).click();
  await expect(page.locator(".catalog-results")).toHaveClass(/covers/);
});

test("verified-metric filters exclude catalog-only records with unknown values", async ({ page }) => {
  await page.goto("/slots");
  await page.locator("#volatility").selectOption("Высокая");
  await page.locator("#rtp").selectOption("96.5");
  await page.locator("#feature").selectOption("Множители");
  const expected = slots.filter(
    (slot) =>
      slot.volatility === "Высокая" &&
      slotRtpValue(slot) >= 96.5 &&
      slot.tags.includes("Множители"),
  ).length;
  await expect(page.locator(".catalog-game")).toHaveCount(expected);
  await page.reload();
  await expect(page.locator("#volatility")).toHaveValue("Высокая");
  await expect(page.locator("#rtp")).toHaveValue("96.5");
  await expect(page.locator("#feature")).toHaveValue("Множители");
  await expect(page.locator(".catalog-game")).toHaveCount(expected);
});

test("comparison remains limited to researched dossiers", async ({ page }) => {
  await page.goto("/slots");
  for (let index = 0; index < 2; index += 1) {
    await page.locator(".catalog-game").nth(index).getByRole("button", { name: /^Добавить .+ в сравнение$/ }).click();
  }
  await page.locator(".catalog-game").nth(2).getByRole("button", { name: /^Добавить .+ в сравнение$/ }).click();
  await expect(page.getByText("В сравнении уже 2 игры. Удалите одну.")).toBeVisible();
  await page.goto("/compare");
  await expect(page.locator(".comparison-selection article img")).toHaveCount(2);
  await page.reload();
  await expect(page.locator(".comparison-selection article img")).toHaveCount(2);
});

test("catalog-only pages disclose limited coverage and stay noindex", async ({ page }) => {
  const samples = [catalogSeeds[0], catalogSeeds[Math.floor(catalogSeeds.length / 2)], catalogSeeds.at(-1)!];
  for (const seed of samples) {
    await page.goto(`/slots/catalog/${seed.slug}`);
    await expect(page.locator("h1")).toHaveText(seed.name);
    await expect(page.getByText("Базовая запись", { exact: true })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("link", { name: /Официальный каталог/ })).toHaveAttribute("href", seed.source);
  }
});

test("mobile filters and search URLs use the expanded catalog", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Меню" }).click();
  await expect(page.getByRole("button", { name: "Закрыть" })).toHaveAttribute("aria-expanded", "true");
  await page.locator("#main-navigation").getByRole("link", { name: "Провайдеры", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("Кто делает слоты");

  await page.goto("/slots");
  await expect(page.locator("#provider")).not.toBeVisible();
  await page.getByRole("button", { name: /Фильтры/ }).click();
  await page.locator("#provider").selectOption("play-n-go");
  const playngoCount = catalogModel.items.filter((item) => item.providerSlug === "play-n-go").length;
  await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, playngoCount));

  const pragmaticBonanza = filterCatalogItems(catalogModel.items, {
    q: "bonanza",
    provider: "pragmatic-play",
    mechanic: "",
    volatility: "",
    rtp: "",
    feature: "",
  }).length;
  await page.goto("/search?q=bonanza&provider=pragmatic-play&sort=name");
  await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, pragmaticBonanza));
  await expect(page.getByRole("combobox", { name: "Сортировка" })).toHaveValue("name");

  await page.goto("/journal/how-cascades-work");
  for (const href of await page.locator(".article-toc a").evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")!))) {
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test("unknown pages and safe unconfigured affiliate route", async ({ request }) => {
  for (const path of [
    "/no-such-page",
    "/slots/no-such-slot",
    "/slots/catalog/no-such-slot",
    "/providers/no-provider",
    "/mechanics/no-mechanic",
    "/go/unknown",
  ]) {
    expect((await request.get(path)).status()).toBe(404);
  }

  const response = await request.get("/go/1win", { maxRedirects: 0 });
  if (process.env.SLOTFOLIO_STATIC_PREVIEW === "true") {
    expect(response.status()).toBe(404);
  } else {
    expect(response.status()).toBe(307);
    expect(response.headers().location).toContain("/disclosure");
  }
});

test("no viewport overflow across mobile, tablet and desktop", async ({ page }) => {
  test.setTimeout(180000);
  const catalogSample = catalogSeeds[0] ? `/slots/catalog/${catalogSeeds[0].slug}` : null;
  const paths = [
    "/",
    "/slots",
    "/slots/gates-of-olympus",
    "/slots/great-clawsby-deluxe",
    "/slots/mahjong-wins-super-scatter",
    "/journal/how-cascades-work",
    "/collections/beyond-lines",
    "/regions/great-britain",
    "/providers/pragmatic-play",
    "/providers/hacksaw-gaming",
    "/providers/clawbuster",
    "/providers/onlyplay",
    "/providers/mancala-gaming",
    "/mechanics/cascades",
    "/mechanics/ways",
    "/slots/chaos-crew-2",
    ...(catalogSample ? [catalogSample] : []),
  ];

  for (const width of [320, 360, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      await page.goto(path);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${width} ${path}`,
      ).toBe(true);
    }
  }
});

test("catalog page and view survive reload, detail navigation and history", async ({ page }) => {
  await page.goto("/slots?page=56");
  await expect(page.locator(".catalog-game")).toHaveCount(10);
  await expect(page.getByRole("button", { name: "Следующая страница" })).toBeDisabled();
  await expect(page.locator(".catalog-pagination")).toContainText("991–1000");
  await page.getByRole("combobox", { name: "Страница каталога" }).selectOption("2");
  await expect(page).toHaveURL(/page=2/);
  const title = await page.locator(".catalog-game h2").first().innerText();
  await page.locator(".catalog-game h2 a").first().click();
  await expect(page).toHaveURL(/\/slots\/[^?]+$/);
  await page.goBack();
  await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue("2");
  await expect(page.locator(".catalog-game h2").first()).toHaveText(title);
  await page.getByRole("button", { name: "Обложки", exact: true }).click();
  await page.reload();
  await expect(page.locator(".catalog-results")).toHaveClass(/covers/);
  await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue("2");
  await page.getByRole("button", { name: "Следующая страница" }).click();
  await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue("3");
  await page.goBack();
  await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue("2");
  await page.getByRole("searchbox").fill("bonanza");
  await expect(page).not.toHaveURL(/page=/);
  await expect(page.locator(".catalog-game")).not.toHaveCount(0);
});
test("pagination visits all 1000 games once without accumulating DOM rows", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("/slots");
  const seen = new Set<string>();
  const count = Math.ceil(catalogModel.items.length / 18);
  for (let current = 1; current <= count; current += 1) {
    await expect(page.getByRole("combobox", { name: "Страница каталога" })).toHaveValue(String(current));
    await expect(page.locator(".catalog-game")).toHaveCount(Math.min(18, catalogModel.items.length - (current - 1) * 18));
    for (const href of await page.locator(".catalog-game h2 a").evaluateAll(links => links.map(link => link.getAttribute("href")!))) {
      expect(seen.has(href), href).toBe(false);
      seen.add(href);
    }
    if (current < count) await page.getByRole("button", { name: "Следующая страница" }).click();
  }
  expect(seen.size).toBe(1000);
  await expect(page.getByRole("button", { name: "Следующая страница" })).toBeDisabled();
});

test("mobile filter apply returns to results and basic records remain actionable", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("/slots?page=56");
  await page.getByRole("button", { name: /^Фильтры/ }).click();
  await page.locator("#provider").selectOption("clawbuster");
  await page.getByRole("button", { name: /К результатам/ }).click();
  await expect(page.locator("#provider")).not.toBeVisible();
  await expect(page).not.toHaveURL(/page=/);
  await expect(page.getByRole("status")).toContainText("9");
  await page.goto("/slots?page=56");
  await page.getByRole("link", { name: "Открыть запись ↗", exact: true }).first().click();
  await expect(page).toHaveURL(/\/slots\/catalog\//);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator(".compare-button")).toHaveCount(0);
});