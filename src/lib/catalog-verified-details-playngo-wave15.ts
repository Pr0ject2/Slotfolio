import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-easter-eggs": {
    releaseDate: "2015-03-17",
    source: "https://www.playngo.com/games/easter-eggs",
    verifiedAt,
  },
  "playn-go-easter-eggspedition": {
    releaseDate: "2024-03-28",
    source: "https://www.playngo.com/games/easter-eggspedition",
    verifiedAt,
  },
  "playn-go-enchanted-crystals": {
    releaseDate: "2014-05-26",
    source: "https://www.playngo.com/games/enchanted-crystals",
    verifiedAt,
  },
  "playn-go-enchanted-meadow": {
    releaseDate: "2012-10-01",
    source: "https://www.playngo.com/games/enchanted-meadow",
    verifiedAt,
  },
  "playn-go-energoonz": {
    releaseDate: "2013-11-28",
    source: "https://www.playngo.com/games/energoonz",
    verifiedAt,
  },
  "playn-go-eye-of-atum": {
    releaseDate: "2022-03-24",
    source: "https://www.playngo.com/games/eye-of-atum",
    verifiedAt,
  },
  "playn-go-eye-of-the-kraken": {
    releaseDate: "2015-09-16",
    source: "https://www.playngo.com/games/eye-of-the-kraken",
    verifiedAt,
  },
  "playn-go-fangs-and-fire": {
    releaseDate: "2025-11-27",
    source: "https://www.playngo.com/games/fangs-%26-fire",
    verifiedAt,
  },
  "playn-go-fat-frankies": {
    releaseDate: "2022-03-10",
    source: "https://www.playngo.com/games/fat-frankies",
    verifiedAt,
  },
  "playn-go-fate-of-dead-blitzways": {
    field: "Динамические 2–7 символов на барабан · до 16 807 способов",
    releaseDate: "2025-10-02",
    source: "https://www.playngo.com/games/fate-of-dead-blitzways",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave15(slug: string) {
  return details[slug];
}
