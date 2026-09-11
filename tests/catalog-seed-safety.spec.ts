import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "../src/lib/catalog-research-lookup";

const verifiedNonSlotSlugs = [
  "hacksaw-gaming-blocks",
  "playn-go-3-hand-casino-holdem",
  "playn-go-casino-holdem",
  "playn-go-deuces-wild-mh",
  "playn-go-go-craps",
  "playn-go-money-wheel",
  "playn-go-super-wheel",
  "wazdan-black-jack",
  "wazdan-sic-bo-dragons",
];

test("catalog seed selection excludes provider entries verified as non-slots", () => {
  expect(catalogSeeds).toHaveLength(900);
  const selected = new Set(catalogSeeds.map((seed) => seed.slug));
  for (const slug of verifiedNonSlotSlugs) expect(selected.has(slug), slug).toBe(false);
});

test("confirmed non-slot products are not exposed as verified slot research", () => {
  expect(getVerifiedCatalogResearch("hacksaw-gaming-blocks")).toBeUndefined();
});

test("catalog seed selection repairs verified provider-title parser artifacts", () => {
  const throne = catalogSeeds.find((seed) => seed.slug === "wazdan-throne-of-elements-platinum");
  if (throne) expect(throne.name).toBe("Throne of Elements: Platinum");
  expect(catalogSeeds.some((seed) => seed.name.trim().toLowerCase() === "new")).toBe(false);
});
