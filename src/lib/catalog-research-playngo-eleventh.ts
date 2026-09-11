import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoEleventh: Record<string, CatalogResearch> = {
  "playn-go-game-of-gladiators": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/game-of-gladiators",
    verifiedAt,
    evidence: "Official game page describes Game of Gladiators as a five-reel video slot played with 20 paylines.",
  },
  "playn-go-gold-king": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/gold-king",
    verifiedAt,
    evidence: "Official game page states that Gold King is played across 20 paylines.",
  },
};

export function getCatalogResearchPlayngoEleventh(slug: string) {
  return catalogResearchPlayngoEleventh[slug];
}
