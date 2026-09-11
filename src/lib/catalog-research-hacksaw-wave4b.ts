import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawWave4b: Record<string, CatalogResearch> = {
  "hacksaw-gaming-pray-for-six": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/pray-for-six",
    verifiedAt,
    evidence: "Official Total Win Bar and Wailing Wheels rules repeatedly state wins are collected until all cascades end and new 6 symbols can drop in during cascades.",
  },
  "hacksaw-gaming-rad-maxx": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/rad-maxx",
    verifiedAt,
    evidence: "Official Pay Direction Arrows rules explicitly state winning paylines are calculated in active directions and paylines can form in multiple directions.",
  },
  "hacksaw-gaming-rainbow-princess": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.hacksawgaming.com/games/rainbow-princess",
    verifiedAt,
    evidence: "Official page explicitly defines Super Cascades and says Magic Frame Multipliers activate on positions that are part of a winning cluster.",
  },
  "hacksaw-gaming-reign-of-rome": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/reign-of-rome",
    verifiedAt,
    evidence: "Official Tribute and LootLines rules define a LootLine as a winning payline of Tribute symbols.",
  },
  "hacksaw-gaming-rip-city": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/rip-city",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: 19 paylines.",
  },
  "hacksaw-gaming-rise-of-ymir": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/rise-of-ymir",
    verifiedAt,
    evidence: "Official game description calls Rise of Ymir a 5-reel, 4-row game with payline wins.",
  },
  "hacksaw-gaming-rusty-and-curly": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/rusty-and-curly",
    verifiedAt,
    evidence: "Official page describes Rusty & Curly as a 5-reel, 4-row game with payline wins.",
  },
  "hacksaw-gaming-shaolin-master": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.hacksawgaming.com/games/shaolin-master",
    verifiedAt,
    evidence: "Official Cascades rules say symbols in a winning cluster are removed and new symbols cascade in, while Chi Orb rules explicitly apply multipliers to cluster wins.",
  },
  "hacksaw-gaming-slayers-inc": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/slayers-inc",
    verifiedAt,
    evidence: "Official page describes a 5-reel, 4-row game with paylines and lists Win Type: Paylines with 14 winning lines.",
  },
};

export function getCatalogResearchHacksawWave4b(slug: string) {
  return catalogResearchHacksawWave4b[slug];
}
