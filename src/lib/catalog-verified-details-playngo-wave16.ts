import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-fates-fortune": {
    releaseDate: "2026-07-16",
    source: "https://www.playngo.com/games/fate's-fortune",
    verifiedAt,
  },
  "playn-go-feline-fury": {
    field: "20 линий",
    releaseDate: "2020-09-24",
    source: "https://www.playngo.com/games/feline-fury",
    verifiedAt,
  },
  "playn-go-fire-joker-100": {
    releaseDate: "2025-05-29",
    source: "https://www.playngo.com/games/fire-joker-100",
    verifiedAt,
  },
  "playn-go-fire-joker-blitz": {
    releaseDate: "2025-08-28",
    source: "https://www.playngo.com/games/fire-joker-blitz",
    verifiedAt,
  },
  "playn-go-fire-joker-freeze": {
    releaseDate: "2021-04-22",
    source: "https://www.playngo.com/games/fire-joker-freeze",
    verifiedAt,
  },
  "playn-go-fire-toad": {
    field: "5 барабанов · 1024 способа",
    releaseDate: "2021-04-08",
    source: "https://www.playngo.com/games/fire-toad",
    verifiedAt,
  },
  "playn-go-fire-toad-2": {
    releaseDate: "2025-09-02",
    source: "https://www.playngo.com/games/fire-toad-2",
    verifiedAt,
  },
  "playn-go-firefly-frenzy": {
    field: "30 линий",
    releaseDate: "2019-07-24",
    source: "https://www.playngo.com/games/firefly-frenzy",
    verifiedAt,
  },
  "playn-go-forge-of-fortunes": {
    field: "3×1",
    releaseDate: "2022-08-11",
    source: "https://www.playngo.com/games/forge-of-fortunes",
    verifiedAt,
  },
  "playn-go-forge-of-gems": {
    field: "5×3 · до 36 288 способов",
    releaseDate: "2022-04-14",
    source: "https://www.playngo.com/games/forge-of-gems",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave16(slug: string) {
  return details[slug];
}
