import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoOP: Record<string, CatalogResearch> = {
  "playn-go-odin-protector-of-realms": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/odin-protector-of-realms",
    verifiedAt,
    evidence: "Official page states that five or more connected symbols form winning clusters, which are removed before new symbols cascade into the gaps.",
  },
  "playn-go-pack-and-cash": {
    mechanics: ["Способы", "Каскады"],
    source: "https://www.playngo.com/games/pack-%26-cash",
    verifiedAt,
    evidence: "Official page identifies a five-reel video slot with 1024 payways and states that winning combinations are removed before new symbols cascade into empty positions.",
  },
  "playn-go-perfect-gems": {
    mechanics: ["Способы", "Каскады"],
    source: "https://www.playngo.com/games/perfect-gems",
    verifiedAt,
    evidence: "Official page calls Perfect Gems a six-reel cascading Dynamic Payways slot and describes the multiplier increasing after each cascade.",
  },
  "playn-go-photo-safari": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/photo-safari",
    verifiedAt,
    evidence: "Official page states that players can activate up to 20 lines and that the lines are activated in numerical order.",
  },
  "playn-go-piggy-bank-farm": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/piggy-bank-farm",
    verifiedAt,
    evidence: "Official page describes a five-reel, four-row video slot with 50 paylines paying from left to right.",
  },
  "playn-go-planet-fortune": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/planet-fortune",
    verifiedAt,
    evidence: "Official page describes a five-reel video slot where matching symbols pay on any of 40 lines.",
  },
  "playn-go-prism-of-gems": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/prism-of-gems",
    verifiedAt,
    evidence: "Official page identifies a five-reel Dynamic Payways video slot with up to 3087 ways to win.",
  },
};

export function getCatalogResearchPlayngoOP(slug: string) {
  return catalogResearchPlayngoOP[slug];
}
