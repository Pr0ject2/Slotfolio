import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-bakers-treat": {
    field: "5×3",
    releaseDate: "2018-04-11",
    source: "https://www.playngo.com/games/baker's-treat",
    verifiedAt,
  },
  "playn-go-banana-rock": {
    releaseDate: "2018-11-26",
    source: "https://www.playngo.com/games/banana-rock",
    verifiedAt,
  },
  "playn-go-banana-rush": {
    field: "5×3 · 10 фиксированных линий",
    releaseDate: "2025-11-25",
    source: "https://www.playngo.com/games/banana-rush",
    verifiedAt,
  },
  "playn-go-banquet-of-dead": {
    field: "10 линий",
    releaseDate: "2024-03-07",
    source: "https://www.playngo.com/games/banquet-of-dead",
    verifiedAt,
  },
  "playn-go-bao-shi": {
    field: "5 барабанов",
    releaseDate: "2025-10-09",
    source: "https://www.playngo.com/games/bao-shi",
    verifiedAt,
  },
  "playn-go-barn-busters": {
    field: "5 барабанов · 243 способа",
    releaseDate: "2026-01-22",
    source: "https://www.playngo.com/games/barn-busters",
    verifiedAt,
  },
  "playn-go-baron-lord-of-saturday": {
    field: "5×4",
    releaseDate: "2024-10-17",
    source: "https://www.playngo.com/games/baron%3A-lord-of-saturday",
    verifiedAt,
  },
  "playn-go-battle-royal": {
    releaseDate: "2018-12-10",
    source: "https://www.playngo.com/games/battle-royal",
    verifiedAt,
  },
  "playn-go-beasts-of-fire-maximum": {
    field: "5×4",
    releaseDate: "2024-10-24",
    source: "https://www.playngo.com/games/beasts-of-fire-maximum",
    verifiedAt,
  },
  "playn-go-big-win-777": {
    field: "5 барабанов · 15 линий",
    releaseDate: "2019-10-24",
    source: "https://www.playngo.com/games/big-win-777",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave11(slug: string) {
  return details[slug];
}
