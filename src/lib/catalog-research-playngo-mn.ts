import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoMN: Record<string, CatalogResearch> = {
  "playn-go-mahjong-88": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/mahjong-88",
    verifiedAt,
    evidence: "Official game page describes an 8x8 grid where wins use clusters of four or more vertically or horizontally connected symbols; it explicitly notes that symbols do not cascade normally.",
  },
  "playn-go-matsuri": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/matsuri",
    verifiedAt,
    evidence: "Official game page states that winning combinations are formed on 25 lines.",
  },
  "playn-go-medusas-madness": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/medusa's-madness",
    verifiedAt,
    evidence: "Official game page describes a 5x5 cascading grid and winning symbols cascading off the grid.",
  },
  "playn-go-mega-don-triple-threat": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/mega-don-triple-threat",
    verifiedAt,
    evidence: "Official game page states that wins land across five reels with up to 1024 ways.",
  },
  "playn-go-merlins-grimoire": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/merlin's-grimoire",
    verifiedAt,
    evidence: "Official game page states that the reel area can expand from three to all five reels during Free Spins, reaching 7776 ways to win.",
  },
  "playn-go-mermaids-diamond": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/mermaid's-diamond",
    verifiedAt,
    evidence: "Official game page explicitly states 720 ways to win, with matching symbols on adjacent reels from either side.",
  },
  "playn-go-miner-donkey-trouble": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/miner-donkey-trouble",
    verifiedAt,
    evidence: "Official page identifies a 5x7 cascading grid and states that clusters of five or more adjacent connected symbols award wins.",
  },
  "playn-go-mirror-joker": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/mirror-joker",
    verifiedAt,
    evidence: "Official game page describes a 3x3 base layout with five fixed paylines and a Mirror Respin expansion to 5x3.",
  },
  "playn-go-mission-cash": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/mission-cash",
    verifiedAt,
    evidence: "Official page identifies five reels and 20 paylines for matching three or more symbols.",
  },
  "playn-go-moon-princess": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/moon-princess",
    verifiedAt,
    evidence: "Official page uses a 5x5 grid where three or more matching symbols connect horizontally or vertically, disappear, and new symbols drop into place.",
  },
  "playn-go-moon-princess-extreme": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/moon-princess-extreme",
    verifiedAt,
    evidence: "Official release describes a 5x5 grid where groups of three or more matching symbols connect horizontally or vertically, are removed, and symbols drop into the empty spaces.",
  },
  "playn-go-moon-princess-origins": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess-origins",
    verifiedAt,
    evidence: "Official Play'n GO material describes the 5x5 grid as using symbol-clearing cascades.",
  },
  "playn-go-moon-princess-power-of-love": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/moon-princess-power-of-love",
    verifiedAt,
    evidence: "Official game page states that wins are created as symbol clusters on a 5x5 grid.",
  },
  "playn-go-moon-princess-stargazing": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/moon-princess-stargazing",
    verifiedAt,
    evidence: "Official Play'n GO guide describes a 5x5 grid, horizontal or vertical matching connections, removal of winning symbols, and new symbols falling into place.",
  },
  "playn-go-moon-princess-trinity": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/moon-princess-trinity",
    verifiedAt,
    evidence: "Official material describes a dynamic grid where three or more horizontally or vertically connected symbols disappear to award a win.",
  },
  "playn-go-moon-princess-christmas-kingdom": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/moon-princess%3A-christmas-kingdom",
    verifiedAt,
    evidence: "Official game page explicitly calls out the cascading function of the grid slot and its Clear Grid Prize.",
  },
  "playn-go-multifruit-81": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/multifruit-81",
    verifiedAt,
    evidence: "Official game page explicitly states 81 ways to win.",
  },
};

export function getCatalogResearchPlayngoMN(slug: string) {
  return catalogResearchPlayngoMN[slug];
}
