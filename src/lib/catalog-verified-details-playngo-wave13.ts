import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-cops-n-robbers": {
    field: "5 барабанов · до 9 линий",
    releaseDate: "2018-05-08",
    source: "https://www.playngo.com/games/cops-%E2%80%99n%E2%80%99-robbers",
    verifiedAt,
  },
  "playn-go-count-jokula": {
    releaseDate: "2022-10-27",
    source: "https://www.playngo.com/games/count-jokula",
    verifiedAt,
  },
  "playn-go-coywolf-cash": {
    field: "5×3 · 50 линий",
    releaseDate: "2020-01-30",
    source: "https://www.playngo.com/games/coywolf-cash",
    verifiedAt,
  },
  "playn-go-crabbys-gold": {
    releaseDate: "2025-05-08",
    source: "https://www.playngo.com/games/crabby's-gold",
    verifiedAt,
  },
  "playn-go-crabbys-gold-ii": {
    field: "6 барабанов · 4096 способов",
    releaseDate: "2026-07-02",
    source: "https://www.playngo.com/games/crabby's-gold-ii",
    verifiedAt,
  },
  "playn-go-crystal-hall": {
    releaseDate: "2025-02-13",
    source: "https://www.playngo.com/games/crystal-hall",
    verifiedAt,
  },
  "playn-go-crystal-sun": {
    field: "5 барабанов · 10 фиксированных линий",
    releaseDate: "2019-04-24",
    source: "https://www.playngo.com/games/crystal-sun",
    verifiedAt,
  },
  "playn-go-dawn-of-egypt": {
    releaseDate: "2020-02-20",
    source: "https://www.playngo.com/games/dawn-of-egypt",
    verifiedAt,
  },
  "playn-go-def-leppard-hysteria": {
    releaseDate: "2022-03-31",
    source: "https://www.playngo.com/games/def-leppard%3A-hysteria",
    verifiedAt,
  },
  "playn-go-demon": {
    releaseDate: "2019-09-26",
    source: "https://www.playngo.com/games/demon",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave13(slug: string) {
  return details[slug];
}
