import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoMore: Record<string, CatalogResearch> = {
  "playn-go-lucky-diamonds": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/lucky-diamonds",
    verifiedAt,
    evidence: "Official page describes Lucky Diamonds as a 3-reel slot with one payline.",
  },
  "playn-go-moon-princess": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess",
    verifiedAt,
    evidence: "Official page states winning symbols disappear and symbols in the same column drop into place to create further wins.",
  },
  "playn-go-moon-princess-extreme": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess-extreme",
    verifiedAt,
    evidence: "Official page explicitly labels Cascading Grid Wins and says winning groups disappear before new symbols drop into place.",
  },
  "playn-go-moon-princess-origins": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess-origins",
    verifiedAt,
    evidence: "Official page explicitly describes a Cascading Grid where winning symbols vanish and new ones tumble into place.",
  },
  "playn-go-moon-princess-power-of-love": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/moon-princess-power-of-love",
    verifiedAt,
    evidence: "Official page explicitly describes winning clusters on the 5x5 grid and states that features can create further cascades.",
  },
  "playn-go-moon-princess-stargazing": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess-stargazing",
    verifiedAt,
    evidence: "Official how-to states matched symbols vanish and new symbols fall into their places, allowing consecutive wins in one round.",
  },
  "playn-go-moon-princess-trinity": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/moon-princess-trinity",
    verifiedAt,
    evidence: "Official page describes matching three or more symbols horizontally or vertically and repeatedly refers to creating winning clusters.",
  },
  "playn-go-moon-princess-christmas-kingdom": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess%3A-christmas-kingdom",
    verifiedAt,
    evidence: "Official page explicitly refers to the cascading function of the grid slot and its Clear Grid Prize.",
  },
  "playn-go-viking-runecraft-100": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/viking-runecraft-100",
    verifiedAt,
    evidence: "Official page states winning combinations are removed and remaining symbols drop down to form new combinations; official release calls it a cascading grid.",
  },
  "playn-go-viking-runecraft-1000": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/viking-runecraft-1000",
    verifiedAt,
    evidence: "Official page explicitly describes Cascading Wins where winning symbols clear and fresh symbols drop until no new wins form.",
  },
  "playn-go-viking-runecraft-apocalypse": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/viking-runecraft%3A-apocalypse",
    verifiedAt,
    evidence: "Official Play'n GO release explicitly calls Viking Runecraft Apocalypse a cascading grid slot where combinations disappear and symbols cascade into place.",
  },
};

export function getCatalogResearchPlayngoMore(slug: string) {
  return catalogResearchPlayngoMore[slug];
}
