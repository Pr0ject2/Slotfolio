import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawWave4c: Record<string, CatalogResearch> = {
  "hacksaw-gaming-smoking-dragon": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/smoking-dragon",
    verifiedAt,
    evidence: "Official Row Cascade rules state bottom-row symbols are removed after a win, symbols move down and new symbols drop in, with sequences continuing while wins remain.",
  },
  "hacksaw-gaming-snow-slingers": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/snow-slingers",
    verifiedAt,
    evidence: "Official game description explicitly calls Snow Slingers a 5-reel, 4-row paylines game.",
  },
  "hacksaw-gaming-steamrunners": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/steamrunners",
    verifiedAt,
    evidence: "Official About the Game section calls Steamrunners a 5-reel, 4-row payline game.",
  },
  "hacksaw-gaming-sun-princess": {
    mechanics: ["Кластеры"],
    source: "https://www.hacksawgaming.com/games/sun-princess",
    verifiedAt,
    evidence: "Official Sun Ray Frames rules state transformed symbols create new Clusters and multipliers activate when their positions are part of a winning cluster.",
  },
  "hacksaw-gaming-superstar-sevens": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/superstar-sevens",
    verifiedAt,
    evidence: "Official Cascade Counter rules explicitly operate across wins and Super Cascades and resolve after all Super Cascades have been handled.",
  },
  "hacksaw-gaming-supreme-zeus": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/supreme-zeus",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Ways and the CoinWays rules refer to predetermined Ways to win.",
  },
  "hacksaw-gaming-tai-the-toad": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/tai-the-toad",
    verifiedAt,
    evidence: "Official page describes Tai the Toad as a 5x5 slot with payline wins.",
  },
  "hacksaw-gaming-temple-of-torment": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/temple-of-torment",
    verifiedAt,
    evidence: "Official page states 14 paylines and GAME DATA lists Wintype: 14 Paylines.",
  },
};

export function getCatalogResearchHacksawWave4c(slug: string) {
  return catalogResearchHacksawWave4c[slug];
}
