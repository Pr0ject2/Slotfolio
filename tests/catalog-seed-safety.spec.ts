import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";

const verifiedNonSlotSlugs = [
  "playn-go-casino-holdem",
  "playn-go-deuces-wild-mh",
  "playn-go-go-craps",
  "playn-go-money-wheel",
  "wazdan-black-jack",
];

test("catalog seed selection excludes provider entries verified as non-slots", () => {
  expect(catalogSeeds).toHaveLength(900);
  const selected = new Set(catalogSeeds.map((seed) => seed.slug));
  for (const slug of verifiedNonSlotSlugs) expect(selected.has(slug), slug).toBe(false);
});
