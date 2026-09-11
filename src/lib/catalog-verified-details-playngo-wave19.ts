import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-gold-of-fortune-god": {
    releaseDate: "2024-06-06",
    source: "https://www.playngo.com/games/gold-of-fortune-god",
    verifiedAt,
  },
  "playn-go-gold-trophy-2": {
    field: "5×3 · до 20 линий",
    releaseDate: "2014-02-01",
    source: "https://www.playngo.com/games/gold-trophy-2",
    verifiedAt,
  },
  "playn-go-gold-volcano": {
    releaseDate: "2020-07-16",
    source: "https://www.playngo.com/games/gold-volcano",
    verifiedAt,
  },
  "playn-go-golden-caravan": {
    releaseDate: "2016-04-20",
    source: "https://www.playngo.com/games/golden-caravan",
    verifiedAt,
  },
  "playn-go-golden-colts": {
    releaseDate: "2019-02-26",
    source: "https://www.playngo.com/games/golden-colts",
    verifiedAt,
  },
  "playn-go-golden-legend": {
    releaseDate: "2015-04-20",
    source: "https://www.playngo.com/games/golden-legend",
    verifiedAt,
  },
  "playn-go-golden-osiris": {
    releaseDate: "2020-12-17",
    source: "https://www.playngo.com/games/golden-osiris",
    verifiedAt,
  },
  "playn-go-golden-ticket": {
    field: "5×5",
    releaseDate: "2014-10-27",
    source: "https://www.playngo.com/games/golden-ticket",
    verifiedAt,
  },
  "playn-go-golden-ticket-2": {
    field: "5×5",
    releaseDate: "2020-09-03",
    source: "https://www.playngo.com/games/golden-ticket-2",
    verifiedAt,
  },
  "playn-go-grannys-wild": {
    releaseDate: "2026-05-26",
    source: "https://www.playngo.com/games/granny's-wild",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave19(slug: string) {
  return details[slug];
}
