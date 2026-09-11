import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-gemix": {
    field: "7×7",
    releaseDate: "2014-12-01",
    source: "https://www.playngo.com/games/gemix",
    verifiedAt,
  },
  "playn-go-moon-princess": {
    field: "5×5",
    releaseDate: "2017-07-26",
    source: "https://www.playngo.com/games/moon-princess",
    verifiedAt,
  },
  "playn-go-beasts-of-fire": {
    field: "До 12 348 способов",
    releaseDate: "2021-12-23",
    source: "https://www.playngo.com/games/beasts-of-fire",
    verifiedAt,
  },
  "playn-go-black-mamba": {
    releaseDate: "2019-11-14",
    source: "https://www.playngo.com/games/black-mamba",
    verifiedAt,
  },
  "playn-go-wizard-of-gems": {
    field: "20 фиксированных линий",
    releaseDate: "2015-12-09",
    source: "https://www.playngo.com/games/wizard-of-gems",
    verifiedAt,
  },
  "playn-go-gemix-100": {
    field: "7×7",
    releaseDate: "2024-08-29",
    source: "https://www.playngo.com/games/gemix-100",
    verifiedAt,
  },
  "playn-go-moon-princess-extreme": {
    field: "5×5",
    releaseDate: "2026-07-30",
    source: "https://www.playngo.com/games/moon-princess-extreme",
    verifiedAt,
  },
  "playn-go-moon-princess-trinity": {
    releaseDate: "2023-03-16",
    source: "https://www.playngo.com/games/moon-princess-trinity",
    verifiedAt,
  },
  "playn-go-moon-princess-origins": {
    releaseDate: "2025-04-17",
    source: "https://www.playngo.com/games/moon-princess-origins",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngo(slug: string) {
  return details[slug];
}
