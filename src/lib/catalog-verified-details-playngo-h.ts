import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-hammerfall": {
    releaseDate: "2021-05-06",
    source: "https://www.playngo.com/games/hammerfall",
    verifiedAt,
  },
  "playn-go-happy-halloween": {
    releaseDate: "2015-10-14",
    source: "https://www.playngo.com/games/happy-halloween",
    verifiedAt,
  },
  "playn-go-helloween": {
    field: "10 линий",
    releaseDate: "2020-10-15",
    source: "https://www.playngo.com/games/helloween",
    verifiedAt,
  },
  "playn-go-highway-legends": {
    releaseDate: "2023-05-18",
    source: "https://www.playngo.com/games/highway-legends",
    verifiedAt,
  },
  "playn-go-holiday-season": {
    releaseDate: "2016-11-14",
    source: "https://www.playngo.com/games/holiday-season",
    verifiedAt,
  },
  "playn-go-holiday-spirits": {
    field: "5 линий",
    releaseDate: "2020-11-05",
    source: "https://www.playngo.com/games/holiday-spirits",
    verifiedAt,
  },
  "playn-go-holy-moo-extreme-power": {
    field: "6×6",
    releaseDate: "2026-08-13",
    source: "https://www.playngo.com/games/holy-moo!-extreme-power",
    verifiedAt,
  },
  "playn-go-honey-rush": {
    field: "Шестиугольная сетка · 37 символов",
    releaseDate: "2019-10-31",
    source: "https://www.playngo.com/games/honey-rush",
    verifiedAt,
  },
  "playn-go-honey-rush-100": {
    field: "Шестиугольная сетка",
    releaseDate: "2023-08-17",
    source: "https://www.playngo.com/games/honey-rush-100",
    verifiedAt,
  },
  "playn-go-honey-rush-black-and-yellow": {
    field: "7-барабанная шестиугольная сетка",
    releaseDate: "2026-04-02",
    source: "https://www.playngo.com/games/honey-rush-black-and-yellow",
    verifiedAt,
  },
  "playn-go-hooligan-hustle": {
    releaseDate: "2021-12-16",
    source: "https://www.playngo.com/games/hooligan-hustle",
    verifiedAt,
  },
  "playn-go-hope-unleashed-fortune-rises": {
    releaseDate: "2026-03-24",
    source: "https://www.playngo.com/games/hope-unleashed-fortune-rises",
    verifiedAt,
  },
  "playn-go-hot-dog-heist": {
    releaseDate: "2024-12-13",
    source: "https://www.playngo.com/games/hot-dog-heist",
    verifiedAt,
  },
  "playn-go-hotel-yeti-way": {
    releaseDate: "2021-07-15",
    source: "https://www.playngo.com/games/hotel-yeti-way",
    verifiedAt,
  },
  "playn-go-house-of-doom": {
    releaseDate: "2018-03-12",
    source: "https://www.playngo.com/games/house-of-doom",
    verifiedAt,
  },
  "playn-go-house-of-doom-2-the-crypt": {
    releaseDate: "2021-03-11",
    source: "https://www.playngo.com/games/house-of-doom-2%3A-the-crypt",
    verifiedAt,
  },
  "playn-go-hugo": {
    field: "5 барабанов · до 10 линий",
    releaseDate: "2016-08-15",
    source: "https://www.playngo.com/games/hugo",
    verifiedAt,
  },
  "playn-go-hugo-2": {
    releaseDate: "2017-11-22",
    source: "https://www.playngo.com/games/hugo-2",
    verifiedAt,
  },
  "playn-go-hugo-carts": {
    releaseDate: "2021-08-26",
    source: "https://www.playngo.com/games/hugo-carts",
    verifiedAt,
  },
  "playn-go-hugo-goal": {
    field: "3 барабана",
    releaseDate: "2018-05-30",
    source: "https://www.playngo.com/games/hugo-goal",
    verifiedAt,
  },
  "playn-go-hugo-legacy": {
    releaseDate: "2023-08-10",
    source: "https://www.playngo.com/games/hugo-legacy",
    verifiedAt,
  },
  "playn-go-hugos-adventure": {
    releaseDate: "2019-09-05",
    source: "https://www.playngo.com/games/hugo's-adventure",
    verifiedAt,
  },
  "playn-go-ice-joker": {
    releaseDate: "2020-12-03",
    source: "https://www.playngo.com/games/ice-joker",
    verifiedAt,
  },
  "playn-go-idol-of-fortune": {
    releaseDate: "2022-05-12",
    source: "https://www.playngo.com/games/idol-of-fortune",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoH(slug: string) {
  return details[slug];
}
