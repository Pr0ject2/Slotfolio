import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoSeventh: Record<string, CatalogResearch> = {
  "playn-go-diamond-vortex": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/diamond-vortex",
    verifiedAt,
    evidence: "Official game page states that six or more identical crystals form a cluster, winning clusters disappear, and symbols cascade into the grid for further wins.",
  },
  "playn-go-disco-diamonds": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/disco-diamonds",
    verifiedAt,
    evidence: "Official game page explicitly states that Disco Diamonds features 243 ways to win.",
  },
  "playn-go-divine-showdown": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/divine-showdown",
    verifiedAt,
    evidence: "Official game page describes Divine Showdown as a 5-reel video slot played with 20 paylines.",
  },
  "playn-go-dragonfates-favor": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/dragonfate's-favor",
    verifiedAt,
    evidence: "Official Play'n GO release describes Dragonfate's Favor as a 6x4 video slot with 4096 payways.",
  },
};

export function getCatalogResearchPlayngoSeventh(slug: string) {
  return catalogResearchPlayngoSeventh[slug];
}
