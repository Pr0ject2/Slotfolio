import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave5: Record<string, CatalogResearch> = {
  "wazdan-arcade": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/arcade",
    verifiedAt,
    evidence: "Official Game Info lists 3 reels and 1 line.",
  },
  "wazdan-burning-stars": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/burning-stars",
    verifiedAt,
    evidence: "Official Game Info lists 5 reels and 20 lines.",
  },
};

export function getCatalogResearchWazdanWave5(slug: string) {
  return catalogResearchWazdanWave5[slug];
}
