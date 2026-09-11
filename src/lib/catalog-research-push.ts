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
};

export function getCatalogResearchPush(slug: string) {
  return catalogResearchPush[slug];
}
