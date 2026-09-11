import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoKL: Record<string, CatalogResearch> = {
  "playn-go-king-of-sweets": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/king-of-sweets",
    verifiedAt,
    evidence: "Official Play'n GO material describes a 5x5 cascading grid slot with cluster wins and cascading reactions.",
  },
  "playn-go-kiss-reels-of-rock": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/kiss-reels-of-rock",
    verifiedAt,
    evidence: "Official game page describes a 6x4 diamond grid and an Encore feature expanding the grid to create 4096 ways to win.",
  },
  "playn-go-lady-of-fortune": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/lady-of-fortune",
    verifiedAt,
    evidence: "Official game page states that prizes are awarded for combinations on selected lines and refers to winning combinations per line.",
  },
  "playn-go-lady-of-fortune-remastered": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/lady-of-fortune-remastered",
    verifiedAt,
    evidence: "Official Play'n GO release describes Lady of Fortune Remastered as a 5x3 video slot with 15 paylines.",
  },
  "playn-go-lawn-n-disorder": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/lawn-n'-disorder",
    verifiedAt,
    evidence: "Official Play'n GO release describes Lawn n' Disorder as a 5x3 video slot with 243 ways to win.",
  },
  "playn-go-legacy-of-gems-blitzways": {
    mechanics: ["Способы", "Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/legacy-of-gems-blitzways",
    verifiedAt,
    evidence: "Official Blitzways material combines Dynamic Payways with Cluster Pay, up to 16,807 ways, and cascading wins where winning clusters disappear and new symbols drop.",
  },
  "playn-go-legacy-of-undead-dragon-abyssways": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/legacy-of-undead-dragon-abyssways",
    verifiedAt,
    evidence: "Official game page identifies the Abyssways mechanic with dynamic reel layouts and new paths for connecting wins.",
  },
  "playn-go-legend-of-the-ice-dragon": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/legend-of-the-ice-dragon",
    verifiedAt,
    evidence: "Official game page explicitly identifies Legend of the Ice Dragon as a cascading grid slot.",
  },
};

export function getCatalogResearchPlayngoKL(slug: string) {
  return catalogResearchPlayngoKL[slug];
}
