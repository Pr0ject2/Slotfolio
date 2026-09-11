import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave6c: Record<string, CatalogResearch> = {
  "wazdan-jelly-reels": {
    mechanics: ["Способы", "Каскады"],
    source: "https://wazdan.com/games/jelly-reels",
    verifiedAt,
    evidence: "Official page describes 16,777,216 ways to win and lists Cascading Wins; winning symbols disappear and new symbols fall into place.",
  },
  "wazdan-lucky-9": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/lucky-9",
    verifiedAt,
    evidence: "Official page describes a 6-reel, 20-payline slot and Game Info lists 6 reels / 20 lines.",
  },
  "wazdan-lucky-fish": {
    mechanics: ["Способы", "Каскады"],
    source: "https://wazdan.com/games/lucky-fish",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels / 243 Ways to Win and the page explicitly describes Cascading Reels where winning symbols disappear and new symbols fall from above.",
  },
  "wazdan-lucky-fortune": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/lucky-fortune",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-lucky-queen": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/lucky-queen",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-lucky-reels": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/lucky-reels",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 6 reels / 20 lines.",
  },
  "wazdan-magic-fruits": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 5 lines.",
  },
  "wazdan-magic-fruits-27": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-27",
    verifiedAt,
    evidence: "Official page explicitly describes 27 paylines and Game Info lists 3 reels / 27 lines.",
  },
  "wazdan-magic-fruits-4": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-4",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 4 reels / 10 lines.",
  },
  "wazdan-magic-fruits-4-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-4-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 4 reels / 10 lines.",
  },
  "wazdan-magic-fruits-81": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-81",
    verifiedAt,
    evidence: "Official Game Info lists 4 reels / 81 lines and the page explicitly describes Wild with 81 Paylines.",
  },
  "wazdan-magic-fruits-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 5 lines.",
  },
  "wazdan-magic-fruits-dice": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-fruits-dice",
    verifiedAt,
    evidence: "Official page describes a classic slot built around 3 reels and 5 paylines and explicitly refers to wins on a payline.",
  },
};

export function getCatalogResearchWazdanWave6c(slug: string) {
  return catalogResearchWazdanWave6c[slug];
}
