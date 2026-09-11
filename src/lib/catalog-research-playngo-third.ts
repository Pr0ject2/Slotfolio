import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoThird: Record<string, CatalogResearch> = {
  "playn-go-beasts-of-fire": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/beasts-of-fire",
    verifiedAt,
    evidence: "Official game and release pages describe Dynamic Payways with up to 12,348 ways to win.",
  },
  "playn-go-black-mamba": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/black-mamba",
    verifiedAt,
    evidence: "Official page calls Black Mamba a cascading grid slot and describes multiplier progression within a cascade.",
  },
  "playn-go-boat-bonanza": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/boat-bonanza",
    verifiedAt,
    evidence: "Official Play'n GO review describes a 5x4 grid with 12 paylines and says winning combinations are aligned on paylines.",
  },
  "playn-go-boat-bonanza-croconile": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/boat-bonanza-croconile!",
    verifiedAt,
    evidence: "Official Play'n GO release describes Boat Bonanza CrocoNile as a 5-reel, 12-payline slot.",
  },
  "playn-go-bull-in-a-china-shop": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/bull-in-a-china-shop",
    verifiedAt,
    evidence: "Official page describes Bull in a China Shop as a 5-reel video slot with 20 fixed paylines.",
  },
  "playn-go-cats-and-cash": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/cats-and-cash",
    verifiedAt,
    evidence: "Official Play'n GO release describes Cats and Cash as a 5-reel slot with fifteen paylines.",
  },
  "playn-go-chinese-new-year": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/chinese-new-year",
    verifiedAt,
    evidence: "Official page explicitly describes bonus symbols triggering on active lines, confirming a payline-based reel structure.",
  },
  "playn-go-dr-toonz": {
    mechanics: ["Способы", "Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/dr.-toonz",
    verifiedAt,
    evidence: "Official page describes a dynamic-payways grid with up to 262,144 ways to win, matching alien clusters, and new aliens cascading into empty positions after wins.",
  },
  "playn-go-energoonz": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/energoonz",
    verifiedAt,
    evidence: "Official page says symbols cascade to form winning combinations, explicitly calls wins clusters, then removes winning clusters and cascades new symbols into place.",
  },
  "playn-go-eye-of-the-kraken": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/eye-of-the-kraken",
    verifiedAt,
    evidence: "Official Play'n GO editorial describes Eye of the Kraken as a 3x3 game with eight paylines.",
  },
  "playn-go-gemix": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gemix",
    verifiedAt,
    evidence: "Official page calls Gemix a cascading 7x7 grid slot where five or more connected symbols form a winning cluster and new symbols drop until no new wins remain.",
  },
  "playn-go-gemix-2": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gemix-2",
    verifiedAt,
    evidence: "Official page states wins require clusters of five or more symbols; winning gems are removed and cascades continue until no more wins can be created.",
  },
  "playn-go-gemix-100": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gemix-100",
    verifiedAt,
    evidence: "Official page describes winning clusters of five or more gemstones, while official Play'n GO material describes the 7x7 grid as cascading and the multiplier increasing with each winning cascade.",
  },
  "playn-go-gigantoonz": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gigantoonz",
    verifiedAt,
    evidence: "Official release identifies Dynamic Cluster Payways, requires clusters of five or more to win, and explicitly describes symbols landing after cascading.",
  },
  "playn-go-reactoonz-100": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/reactoonz-100",
    verifiedAt,
    evidence: "Official page explicitly labels Cascading Cluster Wins: clusters of five or more matching symbols win, disappear, and new symbols drop into place for further cascades.",
  },
  "playn-go-wild-falls": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/wild-falls",
    verifiedAt,
    evidence: "Official page repeatedly describes winning paylines and new winning lines during the Rapid Re-Spins feature, confirming a payline-based structure.",
  },
  "playn-go-wizard-of-gems": {
    mechanics: ["Линии", "Каскады"],
    source: "https://www.playngo.com/games/wizard-of-gems",
    verifiedAt,
    evidence: "Official page describes 20 fixed lines, then states winning symbols vanish and are replaced by new symbols dropping from above to create further wins in the same round.",
  },
};

export function getCatalogResearchPlayngoThird(slug: string) {
  return catalogResearchPlayngoThird[slug];
}
