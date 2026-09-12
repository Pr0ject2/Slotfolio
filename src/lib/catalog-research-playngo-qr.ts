import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-12";

export const catalogResearchPlayngoQR: Record<string, CatalogResearch> = {
  "playn-go-rabbit-hole-riches-court-of-hearts": {
    mechanics: ["Линии", "Каскады"],
    source: "https://www.playngo.com/games/rabbit-hole-riches---court-of-hearts",
    verifiedAt,
    evidence: "Official page describes five cascading reels, line wins during Free Spins, and winning cascades that move the expanding Wild.",
  },
  "playn-go-raging-rex": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/raging-rex",
    verifiedAt,
    evidence: "Official page describes a six-reel, four-row video slot with 4,096 payways.",
  },
  "playn-go-raging-rex-2": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/raging-rex-2",
    verifiedAt,
    evidence: "Official page states that Raging Rex 2 has 4,096 ways to win.",
  },
};

export function getCatalogResearchPlayngoQR(slug: string) {
  return catalogResearchPlayngoQR[slug];
}
