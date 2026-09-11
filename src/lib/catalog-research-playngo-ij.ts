import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoIJ: Record<string, CatalogResearch> = {
  "playn-go-imperial-opera": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/imperial-opera",
    verifiedAt,
    evidence: "Official game page explicitly describes winning paylines in the base game and Harmony feature.",
  },
  "playn-go-inferno-joker": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/inferno-joker",
    verifiedAt,
    evidence: "Official game page explicitly refers to completing a winning payline.",
  },
  "playn-go-inferno-star": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/inferno-star",
    verifiedAt,
    evidence: "Official game page describes the 5x3 slot and its five paylines.",
  },
  "playn-go-invading-vegas-revenge-on-mars": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/invading-vegas-revenge-on-mars",
    verifiedAt,
    evidence: "Official Play'n GO release identifies the game as a five-reel, 20-payline slot.",
  },
  "playn-go-iron-girl": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/iron-girl",
    verifiedAt,
    evidence: "Official game page states that wins are collected by matching symbols across winning paylines.",
  },
  "playn-go-jade-magician": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/jade-magician",
    verifiedAt,
    evidence: "Official game page describes Jade Magician as a 5x3 slot with 15 paylines.",
  },
  "playn-go-joker-flip": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/joker-flip",
    verifiedAt,
    evidence: "Official game page states that winning combinations are formed across 20 possible paylines.",
  },
  "playn-go-journey-to-paris": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/journey-to-paris",
    verifiedAt,
    evidence: "Official game page describes a 5x5 grid where adjacent symbols form winning clusters, winners are removed, and symbols cascade down.",
  },
};

export function getCatalogResearchPlayngoIJ(slug: string) {
  return catalogResearchPlayngoIJ[slug];
}
