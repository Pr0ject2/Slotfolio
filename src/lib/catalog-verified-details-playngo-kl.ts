import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-king-of-sweets": {
    field: "5×5",
    releaseDate: "2025-06-12",
    source: "https://www.playngo.com/games/king-of-sweets",
    verifiedAt,
  },
  "playn-go-kings-mask": {
    releaseDate: "2022-05-26",
    source: "https://www.playngo.com/games/king%27s-mask",
    verifiedAt,
  },
  "playn-go-kings-mask-eclipse-of-gods": {
    field: "5×3",
    releaseDate: "2024-07-18",
    source: "https://www.playngo.com/games/king%27s-mask-eclipse-of-gods",
    verifiedAt,
  },
  "playn-go-kingdom-below": {
    field: "5×4",
    releaseDate: "2024-09-26",
    source: "https://www.playngo.com/games/kingdom-below",
    verifiedAt,
  },
  "playn-go-kiss-reels-of-rock": {
    field: "6×4 · до 4096 способов",
    releaseDate: "2021-12-09",
    source: "https://www.playngo.com/games/kiss-reels-of-rock",
    verifiedAt,
  },
  "playn-go-lab-of-madness-its-a-wild": {
    releaseDate: "2025-09-18",
    source: "https://www.playngo.com/games/lab-of-madness-it%27s-a-wild%21",
    verifiedAt,
  },
  "playn-go-lady-of-fortune": {
    releaseDate: "2014-04-02",
    source: "https://www.playngo.com/games/lady-of-fortune",
    verifiedAt,
  },
  "playn-go-lady-of-fortune-destiny-spins": {
    releaseDate: "2025-08-07",
    source: "https://www.playngo.com/games/lady-of-fortune-destiny-spins",
    verifiedAt,
  },
  "playn-go-lady-of-fortune-remastered": {
    field: "5×3 · 15 линий",
    releaseDate: "2024-10-03",
    source: "https://www.playngo.com/games/lady-of-fortune-remastered",
    verifiedAt,
  },
  "playn-go-lawn-n-disorder": {
    field: "5×3 · 243 способа",
    releaseDate: "2025-11-06",
    source: "https://www.playngo.com/games/lawn-n%27-disorder",
    verifiedAt,
  },
  "playn-go-legacy-of-dead": {
    releaseDate: "2020-01-02",
    source: "https://www.playngo.com/games/legacy-of-dead",
    verifiedAt,
  },
  "playn-go-legacy-of-dynasties": {
    field: "5×3",
    releaseDate: "2023-11-09",
    source: "https://www.playngo.com/games/legacy-of-dynasties",
    verifiedAt,
  },
  "playn-go-legacy-of-egypt": {
    releaseDate: "2018-04-24",
    source: "https://www.playngo.com/games/legacy-of-egypt",
    verifiedAt,
  },
  "playn-go-legacy-of-gems-blitzways": {
    field: "5×3 · до 16 807 способов",
    releaseDate: "2025-01-23",
    source: "https://www.playngo.com/games/legacy-of-gems-blitzways",
    verifiedAt,
  },
  "playn-go-legacy-of-inca": {
    releaseDate: "2023-02-02",
    source: "https://www.playngo.com/games/legacy-of-inca",
    verifiedAt,
  },
  "playn-go-legacy-of-undead-dragon-abyssways": {
    field: "6×4 · до 6×6",
    releaseDate: "2026-01-15",
    source: "https://www.playngo.com/games/legacy-of-undead-dragon-abyssways",
    verifiedAt,
  },
  "playn-go-legend-of-the-ice-dragon": {
    releaseDate: "2021-11-04",
    source: "https://www.playngo.com/games/legend-of-the-ice-dragon",
    verifiedAt,
  },
  "playn-go-legion-gold": {
    releaseDate: "2023-02-09",
    source: "https://www.playngo.com/games/legion-gold",
    verifiedAt,
  },
  "playn-go-legion-gold-and-the-sphinx-of-dead": {
    releaseDate: "2024-10-31",
    source: "https://www.playngo.com/games/legion-gold-and-the-sphinx-of-dead",
    verifiedAt,
  },
  "playn-go-legion-gold-and-the-throne-of-dead": {
    releaseDate: "2026-07-09",
    source: "https://www.playngo.com/games/legion-gold-and-the-throne-of-dead",
    verifiedAt,
  },
  "playn-go-legion-gold-reckoning": {
    releaseDate: "2026-04-23",
    source: "https://www.playngo.com/games/legion-gold-reckoning",
    verifiedAt,
  },
  "playn-go-legion-gold-unleashed": {
    releaseDate: "2024-02-29",
    source: "https://www.playngo.com/games/legion-gold-unleashed",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoKL(slug: string) {
  return details[slug];
}
