import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
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
  "playn-go-fortune-teller": {
    releaseDate: "2012-11-29",
    source: "https://www.playngo.com/games/fortune-teller",
    verifiedAt,
  },
  "playn-go-fortunes-of-ali-baba": {
    field: "5 барабанов · 20 линий",
    releaseDate: "2020-02-27",
    source: "https://www.playngo.com/games/fortunes-of-ali-baba",
    verifiedAt,
  },
  "playn-go-fox-mayhem": {
    field: "5×3 · 20 линий",
    releaseDate: "2023-07-06",
    source: "https://www.playngo.com/games/fox-mayhem",
    verifiedAt,
  },
  "playn-go-free-reelin-joker": {
    field: "3–6 барабанов",
    releaseDate: "2021-06-17",
    source: "https://www.playngo.com/games/free-reelin'-joker",
    verifiedAt,
  },
  "playn-go-free-reelin-joker-1000": {
    releaseDate: "2023-05-25",
    source: "https://www.playngo.com/games/free-reelin'-joker-1000",
    verifiedAt,
  },
  "playn-go-frozen-gems": {
    releaseDate: "2020-12-10",
    source: "https://www.playngo.com/games/frozen-gems",
    verifiedAt,
  },
  "playn-go-fu-er-dai": {
    field: "5 барабанов · 10 линий",
    releaseDate: "2017-11-03",
    source: "https://www.playngo.com/games/fu-er-dai",
    verifiedAt,
  },
  "playn-go-fulong-88": {
    field: "5×3",
    releaseDate: "2024-05-02",
    source: "https://www.playngo.com/games/fulong-88",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave17(slug: string) {
  return details[slug];
}
