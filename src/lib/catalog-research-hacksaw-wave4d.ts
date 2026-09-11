import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawWave4d: Record<string, CatalogResearch> = {
  "hacksaw-gaming-the-luxe": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/the-luxe",
    verifiedAt,
    evidence: "Official Golden Frames rules state a frame counts as part of a win when its position is included in a winning payline.",
  },
  "hacksaw-gaming-twisted-lab": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/twisted-lab",
    verifiedAt,
    evidence: "Official page describes a 5-reel, 5-row game with payline wins and lists Win Type: Paylines with 19 winning lines.",
  },
  "hacksaw-gaming-wishbringer": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/wishbringer",
    verifiedAt,
    evidence: "Official game description calls Wishbringer a 6-reel, 4-row slot featuring ways-wins.",
  },
  "hacksaw-gaming-xmas-drop": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/xmas-drop",
    verifiedAt,
    evidence: "Official GAME DATA lists 19 unique paylines.",
  },
  "hacksaw-gaming-ze-zeus": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.hacksawgaming.com/games/ze-zeus",
    verifiedAt,
    evidence: "Official description calls Ze Zeus a 6-reel, 5-row game with cluster wins and the Super Cascades rules state winning symbols are removed and new ones drop in.",
  },
};

export function getCatalogResearchHacksawWave4d(slug: string) {
  return catalogResearchHacksawWave4d[slug];
}
