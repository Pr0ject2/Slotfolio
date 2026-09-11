import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoH: Record<string, CatalogResearch> = {
  "playn-go-hammerfall": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/hammerfall",
    verifiedAt,
    evidence: "Official game page explicitly describes HammerFall's cascading reels.",
  },
  "playn-go-helloween": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/helloween",
    verifiedAt,
    evidence: "Official game page states that winning combinations are formed across 10 paylines.",
  },
  "playn-go-holiday-spirits": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/holiday-spirits",
    verifiedAt,
    evidence: "Official game page states that matching symbols win across five paylines.",
  },
  "playn-go-holy-moo-extreme-power": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/holy-moo!-extreme-power",
    verifiedAt,
    evidence: "Official game page describes cluster wins on a 6x6 grid, with winning symbols clearing and new symbols cascading into place.",
  },
  "playn-go-honey-rush": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/honey-rush",
    verifiedAt,
    evidence: "Official game page identifies Honey Rush as a hexagonal cascading grid slot and describes cluster-based wins.",
  },
  "playn-go-honey-rush-100": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/honey-rush-100",
    verifiedAt,
    evidence: "Official game page describes wins from groups of five or more connected symbols on the hexagonal grid.",
  },
  "playn-go-honey-rush-black-and-yellow": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/honey-rush-black-and-yellow",
    verifiedAt,
    evidence: "Official game page describes cluster pays on a seven-reel hexagonal grid and winning cascades that clear symbols before new ones drop in.",
  },
  "playn-go-hooligan-hustle": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/hooligan-hustle",
    verifiedAt,
    evidence: "Official Play'n GO release identifies Hooligan Hustle as a Dynamic Payways slot whose split symbols increase the number of ways to win.",
  },
  "playn-go-hotel-yeti-way": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/hotel-yeti-way",
    verifiedAt,
    evidence: "Official Play'n GO material explicitly describes Dynamic Payways that increase the number of ways to win.",
  },
  "playn-go-hugo": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/hugo",
    verifiedAt,
    evidence: "Official game page describes a five-reel slot with up to 10 active lines.",
  },
};

export function getCatalogResearchPlayngoH(slug: string) {
  return catalogResearchPlayngoH[slug];
}
