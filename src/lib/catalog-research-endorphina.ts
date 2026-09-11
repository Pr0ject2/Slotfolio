import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchEndorphina: Record<string, CatalogResearch> = {
  "endorphina-burning-coins-100": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/burning-coins-100",
    verifiedAt,
    evidence: "Official Game Details list 100 fixed lines on a 5x4 grid.",
  },
  "endorphina-burning-coins-20-dice": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/burning-coins-20-dice",
    verifiedAt,
    evidence: "Official Game Details list 20 lines on a 5x3 grid.",
  },
  "endorphina-chance-machine-90s": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/chance-machine-90s",
    verifiedAt,
    evidence: "Official Game Details list 5 fixed lines on a 3x3 grid.",
  },
  "endorphina-druids-fortune": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/druids-fortune",
    verifiedAt,
    evidence: "Official Game Details list 20 fixed lines on a 5x3 grid.",
  },
  "endorphina-fortune-bankers": {
    mechanics: ["Каскады"],
    source: "https://endorphina.com/games/fortune-bankers",
    verifiedAt,
    evidence: "Official Game Details say Lines: Cascade and list Cascading Reels as a core feature.",
  },
  "endorphina-fortune-chests-dice": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/fortune-chests-dice",
    verifiedAt,
    evidence: "Official Game Details list 5 fixed lines on a 3x3 grid.",
  },
  "endorphina-gift-of-midas": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/gift-of-midas",
    verifiedAt,
    evidence: "Official Game Details list 10 fixed lines on a 5x3 grid.",
  },
  "endorphina-groovin-tiger": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/groovin-tiger",
    verifiedAt,
    evidence: "Official Game Details list 10 fixed lines on a 5x3 grid.",
  },
  "endorphina-hell-hot-1000": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/hell-hot-1000",
    verifiedAt,
    evidence: "Official Game Details list 100 fixed lines on a 5x4 grid.",
  },
  "endorphina-moofo": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/moofo",
    verifiedAt,
    evidence: "Official Game Details list 30 fixed lines on a 5x3 grid.",
  },
  "endorphina-zalatar": {
    mechanics: ["Линии"],
    source: "https://endorphina.com/games/zalatar",
    verifiedAt,
    evidence: "Official Endorphina release describes a 5x3 slot with 25 fixed paylines.",
  },
};

export function getCatalogResearchEndorphina(slug: string) {
  return catalogResearchEndorphina[slug];
}
