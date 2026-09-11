import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoFourth: Record<string, CatalogResearch> = {
  "playn-go-7-sins": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/7-sins",
    verifiedAt,
    evidence: "Official Play'n GO material describes a 5-reel, 3-row game with 243 ways to win and no fixed paylines.",
  },
  "playn-go-agent-of-hearts": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/agent-of-hearts",
    verifiedAt,
    evidence: "Official page says five or more connected symbols form clusters; winning symbols are removed and new symbols cascade into the grid.",
  },
  "playn-go-alice-cooper-and-the-tome-of-madness": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/alice-cooper-and-the-tome-of-madness",
    verifiedAt,
    evidence: "Official page says four or more connected symbols form clusters, winning symbols are removed, and new symbols drop until no further wins form.",
  },
  "playn-go-ankh-of-anubis": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/ankh-of-anubis",
    verifiedAt,
    evidence: "Official page describes Ankh of Anubis as a 5-reel video slot played with 576 payways.",
  },
  "playn-go-aztec-warrior-princess": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/aztec-warrior-princess",
    verifiedAt,
    evidence: "Official page explicitly states that players can activate up to 20 lines.",
  },
};

export function getCatalogResearchPlayngoFourth(slug: string) {
  return catalogResearchPlayngoFourth[slug];
}
