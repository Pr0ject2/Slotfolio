import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave6d: Record<string, CatalogResearch> = {
  "wazdan-hot-slot-777-coins": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-coins",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-coins-extremely-light": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-coins-extremely-light",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-diamond-crown": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-diamond-crown",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines.",
  },
  "wazdan-hot-slot-777-gold-crown": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-gold-crown",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines.",
  },
  "wazdan-hot-slot-777-hold-the-jackpot": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-hold-the-jackpot",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines.",
  },
  "wazdan-hot-slot-777-platinum-crown": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-platinum-crown",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 lines.",
  },
  "wazdan-hot-slot-777-rubies": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-rubies",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-rubies-extremely-light": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-rubies-extremely-light",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-stars": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-stars",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-777-stars-extremely-light": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-777-stars-extremely-light",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-hot-slot-gold-coins": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/hot-slot-gold-coins",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 15 reels / 10 lines.",
  },
};

export function getCatalogResearchWazdanWave6d(slug: string) {
  return catalogResearchWazdanWave6d[slug];
}
