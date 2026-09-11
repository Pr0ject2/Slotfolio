import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPush: Record<string, CatalogResearch> = {
  "push-gaming-diamond-supernova-5": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/diamond-supernova-5.html",
    verifiedAt,
    evidence: "Official page explicitly describes five pay lines.",
  },
  "push-gaming-diamond-supernova-20": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/diamond-supernova-20.html",
    verifiedAt,
    evidence: "Official page explicitly describes twenty pay lines.",
  },
  "push-gaming-diamond-supernova-40": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/diamond-supernova-40.html",
    verifiedAt,
    evidence: "Official page explicitly describes forty pay lines.",
  },
  "push-gaming-diamond-supernova-100": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/diamond-supernova-100.html",
    verifiedAt,
    evidence: "Official page explicitly describes one hundred pay lines.",
  },
  "push-gaming-fire-pig-push-ways": {
    mechanics: ["Способы"],
    source: "https://www.pushgaming.com/games/fire-pig-push-ways.html",
    verifiedAt,
    evidence: "Official page describes Hot Zones splitting symbols to increase the number of winning ways; official release identifies the Push Ways mechanic.",
  },
  "push-gaming-giga-jar": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.pushgaming.com/games/giga-jar.html",
    verifiedAt,
    evidence: "Official page describes cluster wins of five or more and states winning symbols are removed before new symbols cascade onto the grid.",
  },
  "push-gaming-jammin-jars-2": {
    mechanics: ["Кластеры"],
    source: "https://www.pushgaming.com/games/jammin-jars-2.html",
    verifiedAt,
    evidence: "Official page states five or more adjacent instant prizes form a paying cluster and describes fruit clusters as the base win structure.",
  },
  "push-gaming-razor-ways": {
    mechanics: ["Способы", "Каскады"],
    source: "https://www.pushgaming.com/games/razor-ways.html",
    verifiedAt,
    evidence: "Official page states up to 46,656 ways to pay and explicitly describes grid expansion after a cascade.",
  },
  "push-gaming-fat-drac": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/fat-drac.html",
    verifiedAt,
    evidence: "Official page describes Fat Drac as a 5x5 slot with 40 win lines.",
  },
  "push-gaming-fire-hopper": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.pushgaming.com/games/fire-hopper.html",
    verifiedAt,
    evidence: "Official page calls out cascading reels and cluster pays; official release states wins use five-or-more clusters followed by a new cascade.",
  },
  "push-gaming-dragon-hopper": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.pushgaming.com/games/dragon-hopper.html",
    verifiedAt,
    evidence: "Official page describes five-symbol Instant Prize clusters and repeated cascades; official release identifies it as a cluster-pays slot.",
  },
  "push-gaming-mystery-museum": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/mystery-museum.html",
    verifiedAt,
    evidence: "Official page describes a 5x3 slot with 10 paylines.",
  },
  "push-gaming-razor-returns": {
    mechanics: ["Линии"],
    source: "https://www.pushgaming.com/games/razor-returns.html",
    verifiedAt,
    evidence: "Official base-game description explicitly states that existing winlines are paid after Mystery Symbols reveal paying symbols.",
  },
};

export function getCatalogResearchPush(slug: string) {
  return catalogResearchPush[slug];
}
