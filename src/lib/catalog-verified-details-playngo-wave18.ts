import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-game-of-gladiators": {
    field: "5 барабанов · 20 линий",
    releaseDate: "2019-06-06",
    source: "https://www.playngo.com/games/game-of-gladiators",
    verifiedAt,
  },
  "playn-go-game-of-gladiators-uprising": {
    releaseDate: "2023-01-26",
    source: "https://www.playngo.com/games/game-of-gladiators%3A-uprising",
    verifiedAt,
  },
  "playn-go-gargantoonz": {
    releaseDate: "2023-11-30",
    source: "https://www.playngo.com/games/gargantoonz",
    verifiedAt,
  },
  "playn-go-gates-of-troy": {
    field: "5 барабанов",
    releaseDate: "2022-09-15",
    source: "https://www.playngo.com/games/gates-of-troy",
    verifiedAt,
  },
  "playn-go-gemix-2": {
    releaseDate: "2021-07-08",
    source: "https://www.playngo.com/games/gemix-2",
    verifiedAt,
  },
  "playn-go-gerards-gambit": {
    releaseDate: "2023-04-27",
    source: "https://www.playngo.com/games/gerard's-gambit",
    verifiedAt,
  },
  "playn-go-ghost-of-dead": {
    releaseDate: "2021-09-16",
    source: "https://www.playngo.com/games/ghost-of-dead",
    verifiedAt,
  },
  "playn-go-gigantoonz": {
    releaseDate: "2022-01-27",
    source: "https://www.playngo.com/games/gigantoonz",
    verifiedAt,
  },
  "playn-go-gnawn-gold": {
    releaseDate: "2026-06-25",
    source: "https://www.playngo.com/games/gnaw'n-gold",
    verifiedAt,
  },
  "playn-go-gold-king": {
    field: "20 линий",
    releaseDate: "2018-02-25",
    source: "https://www.playngo.com/games/gold-king",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave18(slug: string) {
  return details[slug];
}
