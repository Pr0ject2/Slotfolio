import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave6: Record<string, CatalogResearch> = {
  "wazdan-mayan-ritual": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/mayan-ritual",
    verifiedAt,
    evidence: "Official page describes a 5-reel slot with 40 paylines and Game Info lists 5 reels / 40 lines.",
  },
  "wazdan-mighty-hot-777": {
    mechanics: ["Способы"],
    source: "https://wazdan.com/games/mighty-hot-777",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 10 Ways to Win.",
  },
  "wazdan-mighty-hot-amazonia": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/mighty-hot-amazonia",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 5 lines.",
  },
  "wazdan-mystery-jack-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/mystery-jack-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists 3 reels / 27 lines and the official description calls it a 27-payline video slot.",
  },
  "wazdan-prosperity-reels": {
    mechanics: ["Способы"],
    source: "https://wazdan.com/games/prosperity-reels",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 6 reels / 46,656 Ways to Win.",
  },
  "wazdan-sizzling-777": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/sizzling-777",
    verifiedAt,
    evidence: "Official page describes a 5-reel classic slot with 20 paylines and Game Info lists 5 reels / 20 lines.",
  },
  "wazdan-sizzling-777-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/sizzling-777-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines; the page repeatedly describes paylines.",
  },
  "wazdan-sizzling-bells": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/sizzling-bells",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 5 lines; official description explicitly states 5 paylines.",
  },
};

export function getCatalogResearchWazdanWave6(slug: string) {
  return catalogResearchWazdanWave6[slug];
}
