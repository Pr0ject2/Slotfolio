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
  "playn-go-eye-of-the-kraken": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/eye-of-the-kraken",
    verifiedAt,
    evidence: "Official Play'n GO editorial describes Eye of the Kraken as a 3x3 game with eight paylines.",
  },
};

export function getCatalogResearchPlayngoThird(slug: string) {
  return catalogResearchPlayngoThird[slug];
}
