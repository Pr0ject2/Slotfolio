import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawMore: Record<string, CatalogResearch> = {
  "hacksaw-gaming-blocks": {
    mechanics: ["Кластеры"],
    source: "https://www.hacksawgaming.com/games/blocks",
    verifiedAt,
    evidence: "Official page calls BLOCKS a cluster slot and defines winning clusters of matching colors on the 3x3 grid.",
  },
  "hacksaw-gaming-red-rascal": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/red-rascal",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Paylines.",
  },
  "hacksaw-gaming-ronin-stackways": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/ronin-stackways",
    verifiedAt,
    evidence: "Official page describes a maximum of 100,000 winning ways and GAME DATA lists Wintype: 100,000 Ways.",
  },
  "hacksaw-gaming-sand-and-ashes": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/sand-and-ashes",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Paylines and feature text repeatedly refers to winning paylines.",
  },
  "hacksaw-gaming-vending-machine": {
    mechanics: ["Линии", "Каскады"],
    source: "https://www.hacksawgaming.com/games/vending-machine",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: 35 Paylines and the feature description explicitly defines a Remove & Cascade mechanic.",
  },
};

export function getCatalogResearchHacksawMore(slug: string) {
  return catalogResearchHacksawMore[slug];
}
