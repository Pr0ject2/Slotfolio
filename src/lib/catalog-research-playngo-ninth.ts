import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoNinth: Record<string, CatalogResearch> = {
  "playn-go-feline-fury": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/feline-fury",
    verifiedAt,
    evidence: "Official game page states that wins are formed across 20 paylines.",
  },
  "playn-go-fire-joker-freeze": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/fire-joker-freeze",
    verifiedAt,
    evidence: "Official game page explicitly describes Fire and Ice Jokers completing winning paylines.",
  },
  "playn-go-fire-toad": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/fire-toad",
    verifiedAt,
    evidence: "Official game page describes Fire Toad as a 5-reel video slot with 1024 payways.",
  },
  "playn-go-fire-toad-2": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/fire-toad-2",
    verifiedAt,
    evidence: "Official game page describes the Golden Lilypad splitting symbols to open additional payways.",
  },
  "playn-go-firefly-frenzy": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/firefly-frenzy",
    verifiedAt,
    evidence: "Official game page states that standard wins are formed along 30 paylines.",
  },
  "playn-go-forge-of-gems": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/forge-of-gems",
    verifiedAt,
    evidence: "Official game page identifies Dynamic Payways and states that splitting symbols can create up to 36,288 ways to win.",
  },
};

export function getCatalogResearchPlayngoNinth(slug: string) {
  return catalogResearchPlayngoNinth[slug];
}
