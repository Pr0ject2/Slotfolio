import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchWazdanWave4: Record<string, CatalogResearch> = {
  "wazdan-9-tigers": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/9-tigers",
    verifiedAt,
    evidence: "Official Game Info lists 3 reels and 8 lines.",
  },
  "wazdan-choco-reels": {
    mechanics: ["Способы", "Каскады"],
    source: "https://wazdan.com/games/choco-reels",
    verifiedAt,
    evidence: "Official Game Info uses Reels / Ways to Win and the page states the grid can expand to 46,656 ways; after a win, winning symbols disappear and new symbols fall into their place.",
  },
  "wazdan-clover-lady": {
    mechanics: ["Линии"],
    source: "https://wazdan.com/games/clover-lady",
    verifiedAt,
    evidence: "Official Game Info lists 6 reels and 10 lines and the official description explicitly states the slot comes with 10 paylines.",
  },
  "wazdan-cube-mania": {
    mechanics: ["Линии", "Каскады"],
    source: "https://wazdan.com/games/cube-mania",
    verifiedAt,
    evidence: "Official Game Info lists 4 reels and 9 lines; Cascading Reels is a listed core feature and the page states winning symbols blow up and are replaced by symbols from above.",
  },
};

export function getCatalogResearchWazdanWave4(slug: string) {
  return catalogResearchWazdanWave4[slug];
}
