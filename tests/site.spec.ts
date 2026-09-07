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
import {
  catalogRtpContext,
  getVerifiedSlotMetrics,
  slotFeatureCards,
} from "../src/lib/dossier";
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
  ...slots.map((s) => "/slots/" + s.slug),
  ...mechanics.map((m) => "/mechanics/" + m.slug),
];

test("catalog taxonomy, richer search and related-game scoring", () => {
  expect(slots).toHaveLength(41);
  for (const slot of slots) {
    expect(slot.mechanics.length, `${slot.slug} mechanics`).toBeGreaterThan(0);
    expect(slot.tags.length, `${slot.slug} tags`).toBeGreaterThanOrEqual(3);
    expect(slot.mechanics).toContain(slot.mechanic);
    expect(slotRtpValue(slot)).toBeGreaterThan(0);
  }
  expect(slotFeatureOptions.some((item) => item.name === "Множители")).toBe(true);
  expect(slotMatchesSearch(slots[0], "множители")).toBe(true);
  expect(slotMatchesSearch(slots[0], "ртп")).toBe(true);
  expect(slotMatchesSearch(slots[0], "вайлд")).toBe(false);
  const jammin = slots.find((slot) => slot.slug === "jammin-jars")!;
  expect(slotMechanics(jammin)).toEqual(["Кластеры", "Каскады"]);
  const related = relatedSlots(jammin, 3);
  expect(related).toHaveLength(3);
  expect(related.every((slot) => slot.slug !== jammin.slug)).toBe(true);
});



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

test("every slot added after v123 keeps auditable 1win availability evidence", () => {
  const additions = slots.filter((slot) => !pre1winPolicySlugs.has(slot.slug));
  expect(additions.length).toBeGreaterThanOrEqual(11);
  for (const slot of additions) {
    const evidence = slot.availability?.find((item) => item.operator === "1win");
    expect(evidence, `${slot.slug} 1win evidence`).toBeTruthy();
    expect(evidence!.verifiedAt).toMatch(/^20\d{2}-\d{2}-\d{2}$/);
    expect(evidence!.source).toMatch(/^https:\/\/(?:www\.)?(?:1win\.com|forum\.1win\.com)\//);
    expect(evidence!.evidence.length).toBeGreaterThan(20);
  }
});

test("dossier enrichment exposes verified metrics and feature cards", () => {
  const wanted = slots.find((slot) => slot.slug === "wanted-dead-or-a-wild")!;
  const wantedMetrics = getVerifiedSlotMetrics(wanted.slug)!;
  expect(wantedMetrics.maxWin).toBe("12 500x");
  expect(wantedMetrics.rtpVariants).toHaveLength(4);
  const jammin = slots.find((slot) => slot.slug === "jammin-jars")!;
  expect(getVerifiedSlotMetrics(jammin.slug)?.maxWinLabel).toContain("Наблюдавшийся");
  expect(slotFeatureCards(wanted)).toHaveLength(4);
  expect(catalogRtpContext(wanted).median).toBeGreaterThan(0);
  expect(slots.find((slot) => slot.slug === "chaos-crew-2")?.rtp).toBe("96,27%");
});

test("slot media uses local runtime paths", () => {
  for (const slot of slots) {
    expect(slot.image, slot.slug).toMatch(/^\/images\/slots\/.+\.webp$/);
    if (slot.featureImage)
      expect(slot.featureImage, `${slot.slug} feature`).toMatch(
        /^\/images\/slots\/.+\.webp$/,
      );
  }
});
test("all public routes, local navigation targets, images and headings", async ({
  page,
  request,
}) => {
  test.setTimeout(120000);
  const links = new Set<string>();
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.title()).toContain("Slotfolio");
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")!)))
      links.add(href.split("#")[0]);
    for (const src of await page
      .locator("img")
      .evaluateAll((imgs) => imgs.map((i) => i.getAttribute("src")!))) {
      expect(src, `external runtime image on ${route}`).not.toMatch(/^https?:\/\//);
      expect((await request.get(src)).status(), src).toBe(200);
    }
  }
  for (const href of links) {
    expect((await request.get(href)).status(), href).toBeLessThan(400);
  }
  expect(errors).toEqual([]);
});

test("seo metadata, structured data, robots and sitemap", async ({
  page,
  request,
}) => {
  await page.goto("/slots/gates-of-olympus");
  await expect(page.getByRole("heading", { name: "Что реально меняет ход раунда" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Цифры без ложной точности" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "С чем сравнивать эту игру" })).toBeVisible();

  const canonical = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");
  expect(canonical).toContain("/slots/gates-of-olympus");

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    /Gates of Olympus/,
  );

  const jsonLd = (
    await page.locator('script[type="application/ld+json"]').allTextContents()
  ).join("\n");
  expect(jsonLd).toContain('"@type":"Article"');
  expect(jsonLd).toContain('"@type":"Game"');
  expect(jsonLd).toContain('"@type":"BreadcrumbList"');

  await page.goto("/search");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  const robotsText = await robots.text();
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
  expect(sitemapText).toContain("/providers/pragmatic-play");
  expect(sitemapText).not.toContain("/search");
  expect(sitemapText).not.toContain("/compare");
});

test("catalog query, combined filters, empty state, reset and sorting persist", async ({
  page,
}) => {
  await page.goto("/slots");
  await page.getByRole("searchbox").fill("bonanza");
  await expect(page.locator(".catalog-game")).toHaveCount(2);
  await page.locator("#provider").selectOption("play-n-go");
  await expect(page.getByText("Такой игры пока нет")).toBeVisible();
  await page.getByRole("button", { name: "Показать все игры" }).click();
  await expect(page.locator(".catalog-game")).toHaveCount(18);
  await expect(page.getByRole("button", { name: "Показать ещё 18 ↓" })).toBeVisible();
  await page.getByRole("button", { name: "Показать ещё 18 ↓" }).click();
  await expect(page.locator(".catalog-game")).toHaveCount(36);
  await expect(page.getByRole("button", { name: "Показать ещё 5 ↓" })).toBeVisible();
  await page.getByRole("button", { name: "Показать ещё 5 ↓" }).click();
  await expect(page.locator(".catalog-game")).toHaveCount(41);
  await page.getByRole("radio", { name: "Каскады" }).check();
  const cascadeCount = slots.filter((slot) =>
    slotMechanics(slot).includes("Каскады"),
  ).length;
  await expect(page.locator(".catalog-game")).toHaveCount(cascadeCount);
  await page.getByRole("combobox", { name: "Сортировка" }).selectOption("name");
  await page.reload();
  await expect(page.locator(".catalog-game")).toHaveCount(cascadeCount);
  await expect(page.getByRole("combobox", { name: "Сортировка" })).toHaveValue(
    "name",
  );
  await page.getByRole("button", { name: "Обложки", exact: true }).click();
  await expect(page.locator(".catalog-results")).toHaveClass(/covers/);
});
test("volatility, RTP and feature filters combine and persist in URL", async ({
  page,
}) => {
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
  await expect(page).toHaveURL(/volatility=/);
  await expect(page).toHaveURL(/rtp=96.5/);
  await expect(page).toHaveURL(/feature=/);
  await page.reload();
  await expect(page.locator("#volatility")).toHaveValue("Высокая");
  await expect(page.locator("#rtp")).toHaveValue("96.5");
  await expect(page.locator("#feature")).toHaveValue("Множители");
  await expect(page.locator(".catalog-game")).toHaveCount(expected);
});

test("comparison selection, two-game maximum, persistence and removal", async ({
  page,
}) => {
  await page.goto("/slots");
  for (let i = 0; i < 2; i++)
    await page
      .locator(".catalog-game")
      .nth(i)
      .getByRole("button", { name: /^Добавить .+ в сравнение$/ })
      .click();
  await page
    .locator(".catalog-game")
    .nth(2)
    .getByRole("button", { name: /^Добавить .+ в сравнение$/ })
    .click();
  await expect(
    page.getByText("В сравнении уже 2 игры. Удалите одну."),
  ).toBeVisible();
  await page.goto("/compare");
  await expect(page.locator(".comparison-selection article img")).toHaveCount(2);
  await page.reload();
  await expect(page.locator(".comparison-selection article img")).toHaveCount(2);
  await page.getByRole("button", { name: "Удалить Gates of Olympus" }).click();
  await expect(page.locator(".comparison-selection article img")).toHaveCount(1);
  await page.goto("/slots/gates-of-olympus");
  await expect(
    page.getByRole("button", { name: /^Добавить .+ в сравнение$/ }),
  ).toBeVisible();
  await page.goto("/compare?seed=gates-of-olympus");
  await expect(page.getByRole("link", { name: "Gates of Olympus", exact: true }).first()).toBeVisible();
});
test("mobile navigation, filters, FAQ and touch layouts", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Меню" }).click();
  await expect(page.getByRole("button", { name: "Закрыть" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page
    .locator("#main-navigation")
    .getByRole("link", { name: "Провайдеры", exact: true })
    .click();
  await expect(page.locator("h1")).toHaveText("Кто делает слоты");
  await page.goto("/slots");
  await expect(page.locator("#provider")).not.toBeVisible();
  await page.getByRole("button", { name: /Фильтры/ }).click();
  await page.locator("#provider").selectOption("play-n-go");
  await expect(page.locator(".catalog-game")).toHaveCount(5);
  await page.goto("/slots/reactoonz");
  await page
    .getByText("Почему RTP на другом сайте отличается?", { exact: true })
    .click();
  await expect(page.locator("details[open]")).toHaveCount(1);
});
test("search URLs retain filters and article anchors exist", async ({
  page,
}) => {
  await page.goto("/search?q=bonanza&provider=pragmatic-play&sort=name");
  await expect(page.locator(".catalog-game")).toHaveCount(2);
  await expect(page.getByRole("combobox", { name: "Сортировка" })).toHaveValue(
    "name",
  );
  await page.goto("/journal/how-cascades-work");
  for (const href of await page
    .locator(".article-toc a")
    .evaluateAll((as) => as.map((a) => a.getAttribute("href")!))) {
    await expect(page.locator(href)).toHaveCount(1);
  }
  await page.locator('.article-toc a[href="#rules"]').click();
  await expect(page).toHaveURL(/#rules$/);
  await expect
    .poll(async () => Math.abs((await page.locator("#rules").boundingBox())!.y))
    .toBeLessThan(100);
});
test("unknown pages and safe unconfigured affiliate route", async ({
  request,
}) => {
  for (const path of [
    "/no-such-page",
    "/slots/no-such-slot",
    "/providers/no-provider",
    "/mechanics/no-mechanic",
    "/go/unknown",
  ])
    expect((await request.get(path)).status()).toBe(404);
  const r = await request.get("/go/1win", { maxRedirects: 0 });
  expect(r.status()).toBe(307);
  expect(r.headers().location).toContain("/disclosure");
});
test("no viewport overflow across mobile, tablet and desktop", async ({
  page,
}) => {
  test.setTimeout(120000);
  for (const width of [320, 360, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/slots",
      "/slots/gates-of-olympus",
      "/journal/how-cascades-work",
      "/collections/beyond-lines",
      "/regions/great-britain",
      "/providers/pragmatic-play",
      "/providers/hacksaw-gaming",
      "/mechanics/cascades",
      "/mechanics/ways",
      "/slots/chaos-crew-2",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${width} ${path}`,
      ).toBe(true);
    }
  }
});
