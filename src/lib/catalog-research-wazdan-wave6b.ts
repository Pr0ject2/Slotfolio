import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave6b: Record<string, CatalogResearch> = {
  "wazdan-demon-jack-27": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/demon-jack-27",
    verifiedAt,
    evidence: "Official page describes a 3-reel, 27-payline slot and Game Info lists 3 reels / 27 lines.",
  },
  "wazdan-dino-reels-81": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/dino-reels-81",
    verifiedAt,
    evidence: "Official Game Info lists 4 reels / 7 base lines and the official page explicitly describes paylines, including Wild with 81 paylines.",
  },
  "wazdan-dragons-lucky-8": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/dragons-lucky-8",
    verifiedAt,
    evidence: "Official Game Info lists 6 reels / 20 lines and the official description calls it a 20-payline video slot.",
  },
  "wazdan-draculas-castle": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/draculas-castle",
    verifiedAt,
    evidence: "Official page describes Dracula's Castle as a 5-reel, 5-payline slot and Game Info lists 5 reels / 5 lines.",
  },
  "wazdan-fenix-play": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fenix-play",
    verifiedAt,
    evidence: "Official page describes a classic slot with 3 reels and 5 paylines and Game Info lists 3 reels / 5 lines.",
  },
  "wazdan-fenix-play-27": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fenix-play-27",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 27 lines.",
  },
  "wazdan-fenix-play-27-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fenix-play-27-deluxe",
    verifiedAt,
    evidence: "Official page explicitly describes 3 reels and 27 paylines; Game Info lists 3 reels / 27 lines.",
  },
  "wazdan-fenix-play-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fenix-play-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 5 lines.",
  },
  "wazdan-fire-bird": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fire-bird",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 5 lines.",
  },
  "wazdan-fortune-reels": {
    mechanics: ["Способы"],
    source: "https://wazdan.com/games/fortune-reels",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and Reels / Ways to Win: 6 / 6.",
  },
  "wazdan-fruit-fiesta": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/fruit-fiesta",
    verifiedAt,
    evidence: "Official page describes a 5-reel, 20-payline game and Game Info lists 5 reels / 20 lines.",
  },
};

export function getCatalogResearchWazdanWave6b(slug: string) {
  return catalogResearchWazdanWave6b[slug];
}
