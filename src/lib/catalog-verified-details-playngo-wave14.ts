import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-diamond-vortex": {
    field: "Шестиугольная сетка · 3 кольца",
    releaseDate: "2020-08-20",
    source: "https://www.playngo.com/games/diamond-vortex",
    verifiedAt,
  },
  "playn-go-dio-killing-the-dragon": {
    releaseDate: "2022-10-06",
    source: "https://www.playngo.com/games/dio-killing-the-dragon",
    verifiedAt,
  },
  "playn-go-disco-diamonds": {
    field: "243 способа",
    releaseDate: "2020-10-29",
    source: "https://www.playngo.com/games/disco-diamonds",
    verifiedAt,
  },
  "playn-go-divina-commedia-i-nove-cerchi": {
    releaseDate: "2025-10-28",
    source: "https://www.playngo.com/games/divina-commedia-i-nove-cerchi",
    verifiedAt,
  },
  "playn-go-divine-showdown": {
    field: "5 барабанов · 20 линий",
    releaseDate: "2019-12-12",
    source: "https://www.playngo.com/games/divine-showdown",
    verifiedAt,
  },
  "playn-go-doom-of-egypt": {
    releaseDate: "2019-11-07",
    source: "https://www.playngo.com/games/doom-of-egypt",
    verifiedAt,
  },
  "playn-go-dr-toonz": {
    field: "6×4 · до 262 144 способов",
    releaseDate: "2021-09-09",
    source: "https://www.playngo.com/games/dr.-toonz",
    verifiedAt,
  },
  "playn-go-dragon-maiden": {
    releaseDate: "2018-11-14",
    source: "https://www.playngo.com/games/dragon-maiden",
    verifiedAt,
  },
  "playn-go-dragon-ship": {
    releaseDate: "2012-10-07",
    source: "https://www.playngo.com/games/dragon-ship",
    verifiedAt,
  },
  "playn-go-dragonfates-favor": {
    field: "6×4 · 4096 способов",
    releaseDate: "2025-05-22",
    source: "https://www.playngo.com/games/dragonfate's-favor",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoWave14(slug: string) {
  return details[slug];
}
