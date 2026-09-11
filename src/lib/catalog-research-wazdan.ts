import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdan: Record<string, CatalogResearch> = {
  "wazdan-back-to-the-70s": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/back-to-the-70s",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines.",
  },
  "wazdan-bars7s": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/bars7s",
    verifiedAt,
    evidence: "Official Game Info lists 3 reels and 8 lines and the page explicitly describes the winning payline.",
  },
  "wazdan-black-hawk": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/black-hawk",
    verifiedAt,
    evidence: "Official Game Info lists 4 reels and 54 lines.",
  },
  "wazdan-black-hawk-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/black-hawk-deluxe",
    verifiedAt,
    evidence: "Official page describes Black Hawk Deluxe as a 4-reel, 54-payline slot and Game Info lists 54 lines.",
  },
  "wazdan-black-horse": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/black-horse",
    verifiedAt,
    evidence: "Official page describes a classic 3-reel, 5-payline slot and Game Info lists 5 lines.",
  },
  "wazdan-black-horse-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/black-horse-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists 6 reels and 20 lines and the description explicitly refers to 20 paylines.",
  },
  "wazdan-burning-reels": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/burning-reels",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines; the detailed description also states 20 paylines.",
  },
  "wazdan-burning-stars": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/burning-stars",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines.",
  },
  "wazdan-captain-shark": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/captain-shark",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines.",
  },
  "wazdan-criss-cross-81": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/criss-cross-81",
    verifiedAt,
    evidence: "Official Game Info lists 4 reels and 81 lines.",
  },
};

export function getCatalogResearchWazdan(slug: string) {
  return catalogResearchWazdan[slug];
}
