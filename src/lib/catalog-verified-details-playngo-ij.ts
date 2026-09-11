import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-immortails-of-egypt": {
    field: "5×3 · до 5×4 в Free Spins",
    releaseDate: "2022-09-22",
    source: "https://www.playngo.com/games/immortails-of-egypt",
    verifiedAt,
  },
  "playn-go-imperial-opera": {
    releaseDate: "2018-03-06",
    source: "https://www.playngo.com/games/imperial-opera",
    verifiedAt,
  },
  "playn-go-infernal-trinity-go-guaranteed": {
    releaseDate: "2026-09-03",
    source: "https://www.playngo.com/games/infernal-trinity-go-guaranteed",
    verifiedAt,
  },
  "playn-go-inferno-joker": {
    releaseDate: "2019-09-12",
    source: "https://www.playngo.com/games/inferno-joker",
    verifiedAt,
  },
  "playn-go-inferno-star": {
    field: "5×3 · 5 линий",
    releaseDate: "2019-05-16",
    source: "https://www.playngo.com/games/inferno-star",
    verifiedAt,
  },
  "playn-go-invading-vegas": {
    releaseDate: "2023-01-12",
    source: "https://www.playngo.com/games/invading-vegas",
    verifiedAt,
  },
  "playn-go-invading-vegas-revenge-on-mars": {
    field: "5 барабанов · 20 линий",
    releaseDate: "2025-02-06",
    source: "https://www.playngo.com/games/invading-vegas-revenge-on-mars",
    verifiedAt,
  },
  "playn-go-invading-vegas-las-christmas": {
    field: "5×3",
    releaseDate: "2023-11-16",
    source: "https://www.playngo.com/games/invading-vegas%3A-las-christmas",
    verifiedAt,
  },
  "playn-go-irish-gold": {
    releaseDate: "2012-12-12",
    source: "https://www.playngo.com/games/irish-gold",
    verifiedAt,
  },
  "playn-go-iron-girl": {
    field: "5 барабанов",
    releaseDate: "2018-10-03",
    source: "https://www.playngo.com/games/iron-girl",
    verifiedAt,
  },
  "playn-go-jade-magician": {
    field: "5×3 · 15 линий",
    releaseDate: "2017-01-25",
    source: "https://www.playngo.com/games/jade-magician",
    verifiedAt,
  },
  "playn-go-jewel-box": {
    releaseDate: "2012-11-29",
    source: "https://www.playngo.com/games/jewel-box",
    verifiedAt,
  },
  "playn-go-joker-flip": {
    field: "5×3 · до 20 линий",
    releaseDate: "2024-08-08",
    source: "https://www.playngo.com/games/joker-flip",
    verifiedAt,
  },
  "playn-go-jolly-roger": {
    releaseDate: "2012-01-01",
    source: "https://www.playngo.com/games/jolly-roger",
    verifiedAt,
  },
  "playn-go-jolly-roger-2": {
    field: "5×3",
    releaseDate: "2020-08-27",
    source: "https://www.playngo.com/games/jolly-roger-2",
    verifiedAt,
  },
  "playn-go-jolly-roger-wild-kraken": {
    releaseDate: "2024-12-19",
    source: "https://www.playngo.com/games/jolly-roger-wild-kraken",
    verifiedAt,
  },
  "playn-go-journey-to-paris": {
    field: "5×5",
    releaseDate: "2024-06-27",
    source: "https://www.playngo.com/games/journey-to-paris",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoIJ(slug: string) {
  return details[slug];
}
