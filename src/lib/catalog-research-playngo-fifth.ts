import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoFifth: Record<string, CatalogResearch> = {
  "playn-go-banana-rush": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/banana-rush",
    verifiedAt,
    evidence: "Official Play'n GO release describes Banana Rush as a 5x3 video slot with 10 fixed paylines.",
  },
  "playn-go-banquet-of-dead": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/banquet-of-dead",
    verifiedAt,
    evidence: "Official game page and release material both state that Banquet of Dead uses 10 paylines.",
  },
  "playn-go-barn-busters": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/barn-busters",
    verifiedAt,
    evidence: "Official Play'n GO release describes Barn Busters as a 5-reel video slot with 243 ways to win.",
  },
  "playn-go-big-win-777": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/big-win-777",
    verifiedAt,
    evidence: "Official game page describes a 5-reel slot with 15 paylines.",
  },
};

export function getCatalogResearchPlayngoFifth(slug: string) {
  return catalogResearchPlayngoFifth[slug];
}
