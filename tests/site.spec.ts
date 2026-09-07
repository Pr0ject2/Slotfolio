import { test, expect } from "@playwright/test";
import { slots, mechanics, providerProfiles } from "../src/lib/data";
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
  await expect(page.getByRole("button", { name: "Показать ещё 12 ↓" })).toBeVisible();
  await page.getByRole("button", { name: "Показать ещё 12 ↓" }).click();
  await expect(page.locator(".catalog-game")).toHaveCount(30);
  await page.getByRole("radio", { name: "Каскады" }).check();
  await expect(page.locator(".catalog-game")).toHaveCount(4);
  await page.getByRole("combobox", { name: "Сортировка" }).selectOption("name");
  await page.reload();
  await expect(page.locator(".catalog-game")).toHaveCount(4);
  await expect(page.getByRole("combobox", { name: "Сортировка" })).toHaveValue(
    "name",
  );
  await page.getByRole("button", { name: "Обложки", exact: true }).click();
  await expect(page.locator(".catalog-results")).toHaveClass(/covers/);
});
test("comparison selection, maximum, persistence and removal", async ({
  page,
}) => {
  await page.goto("/slots");
  for (let i = 0; i < 3; i++)
    await page
      .locator(".catalog-game")
      .nth(i)
      .getByRole("button", { name: "+ Сравнить", exact: true })
      .click();
  await page
    .locator(".catalog-game")
    .nth(3)
    .getByRole("button", { name: "+ Сравнить", exact: true })
    .click();
  await expect(
    page.getByText("В сравнении уже 3 игры. Удалите одну."),
  ).toBeVisible();
  await page.goto("/compare");
  await expect(page.locator("thead img")).toHaveCount(3);
  await page.reload();
  await expect(page.locator("thead img")).toHaveCount(3);
  await page.getByRole("button", { name: "Удалить Gates of Olympus" }).click();
  await expect(page.locator("thead img")).toHaveCount(2);
  await page.goto("/slots/gates-of-olympus");
  await expect(
    page.getByRole("button", { name: "+ Сравнить", exact: true }),
  ).toBeVisible();
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
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/slots",
      "/slots/gates-of-olympus",
      "/journal/how-cascades-work",
      "/collections/beyond-lines",
      "/regions/great-britain",
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
