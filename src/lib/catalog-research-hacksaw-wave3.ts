import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchHacksawWave3: Record<string, CatalogResearch> = {
  "hacksaw-gaming-chaos-crew-2": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/chaos-crew-2",
    verifiedAt,
    evidence: "Official page describes a 5x5, 19-payline game and GAME DATA lists Wintype: 19 Paylines.",
  },
  "hacksaw-gaming-divine-drop": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/divine-drop",
    verifiedAt,
    evidence: "Official page describes Divine Drop as a 5-reel, 4-row paylines game and lists Win Type: Paylines with 14 winning lines.",
  },
  "hacksaw-gaming-epic-ze-zeus": {
    mechanics: ["Кластеры"],
    source: "https://www.hacksawgaming.com/games/epic-ze-zeus",
    verifiedAt,
    evidence: "Official GAME DATA lists Wintype: Cluster.",
  },
  "hacksaw-gaming-evil-eyes": {
    mechanics: ["Способы"],
    source: "https://www.hacksawgaming.com/games/evil-eyes",
    verifiedAt,
    evidence: "Official page explicitly describes Evil Eyes as a 5-reel, 5-row game with ways wins.",
  },
  "hacksaw-gaming-eye-of-medusa": {
    mechanics: ["Способы", "Каскады"],
    source: "https://www.hacksawgaming.com/games/eye-of-medusa",
    verifiedAt,
    evidence: "Official game description explicitly says ways-wins and a cascading game; the Super Cascades section says winning symbols are removed and new ones drop in.",
  },
  "hacksaw-gaming-feel-the-beat": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/feel-the-beat",
    verifiedAt,
    evidence: "Official Speaker mechanic repeatedly identifies and creates winning paylines across the 5x5 grid.",
  },
  "hacksaw-gaming-fighter-pit": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/fighter-pit",
    verifiedAt,
    evidence: "Official page describes Fighter Pit as a 5-reel, 4-row game with payline wins.",
  },
  "hacksaw-gaming-fire-my-laser": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/fire-my-laser",
    verifiedAt,
    evidence: "Official page explicitly states that removed symbols trigger a cascade, existing symbols drop into gaps and new symbols drop from above.",
  },
  "hacksaw-gaming-fist-of-destruction": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/fist-of-destruction",
    verifiedAt,
    evidence: "Official page describes Fist of Destruction as a 5-reel, 4-row game with paylines wins.",
  },
  "hacksaw-gaming-frkn-bananas": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/frkn-bananas",
    verifiedAt,
    evidence: "Official feature rules explicitly refer to Spreading Banana multipliers participating in a winning payline.",
  },
};

export function getCatalogResearchHacksawWave3(slug: string) {
  return catalogResearchHacksawWave3[slug];
}
