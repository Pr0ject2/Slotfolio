import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoTenth: Record<string, CatalogResearch> = {
  "playn-go-fortunes-of-ali-baba": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/fortunes-of-ali-baba",
    verifiedAt,
    evidence: "Official game page states that Fortunes of Ali Baba is a 5-reel video slot played with 20 paylines.",
  },
  "playn-go-fox-mayhem": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/fox-mayhem",
    verifiedAt,
    evidence: "Official game page states that Fox Mayhem uses a 5x3 reel set with 20 paylines.",
  },
  "playn-go-frozen-gems": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/frozen-gems",
    verifiedAt,
    evidence: "Official game page explicitly describes additional cascades and a multiplier that increments on each cascade.",
  },
  "playn-go-fu-er-dai": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/fu-er-dai",
    verifiedAt,
    evidence: "Official game page describes Fu Er Dai as a five-reel slot played across ten lines.",
  },
};

export function getCatalogResearchPlayngoTenth(slug: string) {
  return catalogResearchPlayngoTenth[slug];
}
