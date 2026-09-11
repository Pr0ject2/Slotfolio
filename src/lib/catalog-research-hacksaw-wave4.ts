import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawWave4: Record<string, CatalogResearch> = {
  "hacksaw-gaming-great-game-rockies": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/great-game-rockies",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Paylines.",
  },
  "hacksaw-gaming-immortal-desire": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/immortal-desire",
    verifiedAt,
    evidence: "Official page states up to 1,024 winning ways and GAME DATA lists Wintype: 1024 Ways.",
  },
  "hacksaw-gaming-invictus": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/invictus",
    verifiedAt,
    evidence: "Official Pantheon Multiplier rules explicitly apply multipliers to the winning payline and describe wins crossing the grid.",
  },
  "hacksaw-gaming-jelly-slice": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/jelly-slice",
    verifiedAt,
    evidence: "Official page describes ways wins and lists Win Type: Ways, with up to 1,204 winning ways.",
  },
  "hacksaw-gaming-keepem": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/keep-em",
    verifiedAt,
    evidence: "Official page describes a 6-reel, 5-row drop game with ways wins and lists Win Type: Ways, with 15,625 winning ways.",
  },
  "hacksaw-gaming-klowns": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/klowns",
    verifiedAt,
    evidence: "Official game description explicitly calls Klowns a 6-reel, 5-row drop cascades game.",
  },
  "hacksaw-gaming-le-bunny": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/le-bunny",
    verifiedAt,
    evidence: "Official Super Cascades rules state winning symbols are removed and new symbols drop into the empty spaces.",
  },
  "hacksaw-gaming-le-cowboy": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.hacksawgaming.com/games/le-cowboy",
    verifiedAt,
    evidence: "Official page explicitly defines Super Cascades and states the Revolver Reveal starts from a winning Cluster before all wins and cascades settle.",
  },
  "hacksaw-gaming-le-hooligan": {
    mechanics: ["Кластеры"],
    source: "https://www.hacksawgaming.com/games/le-hooligan",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Cluster.",
  },
  "hacksaw-gaming-le-sortudo": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/le-sortudo",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Paylines.",
  },
};

export function getCatalogResearchHacksawWave4(slug: string) {
  return catalogResearchHacksawWave4[slug];
}
