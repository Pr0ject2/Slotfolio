import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";

const verifiedNonSlotSlugs = [
  "playn-go-casino-holdem",
  "playn-go-deuces-wild-mh",
  "playn-go-go-craps",
  "playn-go-money-wheel",
  "wazdan-black-jack",
  "wazdan-sic-bo-dragons",
];

test("catalog seed selection excludes provider entries verified as non-slots", () => {
  expect(catalogSeeds).toHaveLength(900);
  const selected = new Set(catalogSeeds.map((seed) => seed.slug));
  for (const slug of verifiedNonSlotSlugs) expect(selected.has(slug), slug).toBe(false);
});

test("catalog seed selection repairs verified provider-title parser artifacts", () => {
  const throne = catalogSeeds.find((seed) => seed.slug === "wazdan-throne-of-elements-platinum");
  if (throne) expect(throne.name).toBe("Throne of Elements: Platinum");
  expect(catalogSeeds.some((seed) => seed.name.trim().toLowerCase() === "new")).toBe(false);
});
