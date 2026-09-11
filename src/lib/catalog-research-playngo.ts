import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngo: Record<string, CatalogResearch> = {
  "playn-go-chronos-joker": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/chronos-joker",
    verifiedAt,
    evidence: "Official page states that wins are formed across ten winning paylines.",
  },
  "playn-go-city-of-sound": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/city-of-sound",
    verifiedAt,
    evidence: "Official Play'n GO release describes a 5-reel, 25-payline structure.",
  },
  "playn-go-cloud-quest": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/cloud-quest",
    verifiedAt,
    evidence: "Official page says winning symbols are cleared and remaining symbols fall into place for new wins in the same round.",
  },
  "playn-go-coils-of-cash": {
    mechanics: ["Способы", "Каскады"],
    source: "https://www.playngo.com/games/coils-of-cash",
    verifiedAt,
    evidence: "Official page describes 2304 Dynamic Payways and states winning combinations are removed before new symbols cascade into view.",
  },
  "playn-go-colt-lightning-inferno": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/colt-lightning-inferno",
    verifiedAt,
    evidence: "Official Play'n GO release describes Colt Lightning Inferno as a 5-reel, 1024-payways video slot.",
  },
  "playn-go-contact": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/contact",
    verifiedAt,
    evidence: "Official page describes a 5x7 grid where 5+ matching horizontally or vertically connected symbols form a winning cluster.",
  },
  "playn-go-cops-n-robbers": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/cops-%E2%80%99n%E2%80%99-robbers",
    verifiedAt,
    evidence: "Official page describes a five-reel slot played on up to 9 lines.",
  },
  "playn-go-count-jokula": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/count-jokula",
    verifiedAt,
    evidence: "Official game page explicitly describes features that create winning paylines.",
  },
  "playn-go-coywolf-cash": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/coywolf-cash",
    verifiedAt,
    evidence: "Official page describes a 5x3 video slot with fifty paylines.",
  },
  "playn-go-gemix": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gemix",
    verifiedAt,
    evidence: "Official page describes connected cluster wins on a 7x7 grid and states that winning symbols are removed so new symbols can cascade in.",
  },
  "playn-go-gemix-100": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/gemix-100",
    verifiedAt,
    evidence: "Official page describes winning clusters of five or more gemstones on a 7x7 grid.",
  },
  "playn-go-gemix-2": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gemix-2",
    verifiedAt,
    evidence: "Official page says five or more symbols form a cluster and explicitly states that cascades continue until no more wins are created.",
  },
  "playn-go-gigantoonz": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/gigantoonz",
    verifiedAt,
    evidence: "Official game and release text describe cluster wins, including clusters of five or more symbols.",
  },
  "playn-go-honey-rush": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/honey-rush",
    verifiedAt,
    evidence: "Official page describes clusters of five or more symbols; winning clusters disappear and new symbols drop to create further wins.",
  },
  "playn-go-honey-rush-100": {
    mechanics: ["Кластеры"],
    source: "https://www.playngo.com/games/honey-rush-100",
    verifiedAt,
    evidence: "Official page describes clearing clusters of five or more symbols on the hexagonal grid.",
  },
  "playn-go-honey-rush-black-and-yellow": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/honey-rush-black-and-yellow",
    verifiedAt,
    evidence: "Official page explicitly identifies cluster pays and states winning symbols clear before new symbols drop in for chain-reaction cascades.",
  },
  "playn-go-hotel-yeti-way": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/hotel-yeti-way",
    verifiedAt,
    evidence: "Official page describes a dynamic payways game with 4096 payways in the base game and up to 262144 payways.",
  },
  "playn-go-inferno-joker": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/inferno-joker",
    verifiedAt,
    evidence: "Official page explicitly describes completing winning paylines with the Inferno Joker Wild.",
  },
};

export function getCatalogResearchPlayngo(slug: string) {
  return catalogResearchPlayngo[slug];
}
