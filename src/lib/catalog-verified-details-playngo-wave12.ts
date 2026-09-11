import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-boat-bonanza": {
    releaseDate: "2022-10-13",
    source: "https://www.playngo.com/games/boat-bonanza",
    verifiedAt,
  },
  "playn-go-boat-bonanza-croconile": {
    field: "5 барабанов · 12 линий",
    releaseDate: "2025-05-01",
    source: "https://www.playngo.com/games/boat-bonanza-croconile!",
    verifiedAt,
  },
  "playn-go-bull-in-a-china-shop": {
    field: "5 барабанов · 20 фиксированных линий",
    releaseDate: "2021-01-21",
    source: "https://www.playngo.com/games/bull-in-a-china-shop",
    verifiedAt,
  },
  "playn-go-cats-and-cash": {
    releaseDate: "2018-07-04",
    source: "https://www.playngo.com/games/cats-and-cash",
    verifiedAt,
  },
  "playn-go-chronos-joker": {
    field: "3 барабана · 10 линий",
    releaseDate: "2019-11-28",
    source: "https://www.playngo.com/games/chronos-joker",
    verifiedAt,
  },
  "playn-go-city-of-sound": {
    field: "5 барабанов · 25 линий",
    releaseDate: "2025-06-05",
    source: "https://www.playngo.com/games/city-of-sound",
    verifiedAt,
  },
  "playn-go-cloud-quest": {
    releaseDate: "2016-03-09",
    source: "https://www.playngo.com/games/cloud-quest",
    verifiedAt,
  },
  "playn-go-coils-of-cash": {
    field: "7 барабанов · 2304 способа",
    releaseDate: "2021-01-07",
    source: "https://www.playngo.com/games/coils-of-cash",
    verifiedAt,
  },
  "playn-go-colt-lightning-inferno": {
    field: "5 барабанов · 1024 способа",
    releaseDate: "2026-05-07",
    source: "https://www.playngo.com/games/colt-lightning-inferno",
    verifiedAt,
  },
  "playn-go-contact": {
    field: "5×7",
    releaseDate: "2019-03-28",
    source: "https://www.playngo.com/games/contact",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave12(slug: string) {
  return details[slug];
}
