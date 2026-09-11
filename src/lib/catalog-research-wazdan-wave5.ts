import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave5: Record<string, CatalogResearch> = {
  "wazdan-arcade": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/arcade",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 1 line.",
  },
  "wazdan-burning-stars": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/burning-stars",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines.",
  },
  "wazdan-magic-stars-3": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-stars-3",
    verifiedAt,
    evidence: "Official page describes a 3-reel slot with 5 fixed paylines and Game Info lists 3 reels / 5 lines.",
  },
  "wazdan-magic-stars-5": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-stars-5",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels / 20 lines and the official description explicitly states 20 paylines.",
  },
  "wazdan-magic-stars-6": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-stars-6",
    verifiedAt,
    evidence: "Official Game Info lists 6 reels / 20 lines and the official description explicitly states 20 paylines.",
  },
  "wazdan-magic-target": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-target",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-magic-target-deluxe": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/magic-target-deluxe",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-miami-beach": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/miami-beach",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-midnight-in-tokyo": {
    mechanics: ["Способы"],
    source: "https://wazdan.com/games/midnight-in-tokyo",
    verifiedAt,
    evidence: "Official page describes a 5-reel slot with 243+ ways to win and Game Info lists 5 reels / 243 Ways to Win.",
  },
  "wazdan-mystery-jack": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/mystery-jack",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 3 reels / 27 lines.",
  },
  "wazdan-night-club-81": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/night-club-81",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 4 reels / 81 lines; Wild is explicitly described with 81 paylines.",
  },
  "wazdan-reel-hero": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/reel-hero",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 5 reels / 20 lines.",
  },
  "wazdan-reel-joke": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/reel-joke",
    verifiedAt,
    evidence: "Official Game Info lists Game type: Slots and 6 reels / 20 lines.",
  },
};

export function getCatalogResearchWazdanWave5(slug: string) {
  return catalogResearchWazdanWave5[slug];
}
