import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave6e: Record<string, CatalogResearch> = {
  "wazdan-hot-slot-777-cash-out": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-cash-out",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines; the official description explicitly states twenty paylines.",
  },
  "wazdan-hot-slot-777-cash-out-extremely-light": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-cash-out-extremely-light",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-cash-out-grand-diamond-edition": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-diamond-edition",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-cash-out-grand-gold-edition": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-gold-edition",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-cash-out-grand-platinum-edition": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-platinum-edition",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-great-book-of-magic": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-great-book-of-magic",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines.",
  },
  "wazdan-hot-slot-magic-bombs": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-magic-bombs",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines; the official description explicitly calls it a 10-payline slot.",
  },
};

export function getCatalogResearchWazdanWave6e(slug: string) {
  return catalogResearchWazdanWave6e[slug];
}
