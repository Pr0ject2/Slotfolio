import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "bgaming-alien-fruits-3": {
    field: "Cluster Pays",
    rtp: "97,00%",
    maxWin: "10000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-07-01",
    source: "https://bgaming.com/games/alien-fruits-3",
    verifiedAt,
  },
  "bgaming-fortune-trio-minions-of-fu": {
    field: "5×3 · 25 линий",
    rtp: "95,05%",
    maxWin: "2000x",
    volatility: "Средняя–низкая",
    releaseDate: "2026-08-27",
    source: "https://bgaming.com/games/fortune-trio-minions-of-fu",
    verifiedAt,
  },
  "bgaming-stars-and-stripes-hold-and-win": {
    field: "Trueways",
    rtp: "96,70%",
    maxWin: "5000x",
    volatility: "Очень высокая",
    releaseDate: "2026-06-30",
    source: "https://bgaming.com/games/stars-stripes-hold-and-win",
    verifiedAt,
  },
  "bgaming-mystic-reels": {
    field: "20 линий",
    rtp: "96,00%",
    maxWin: "4558,7x",
    volatility: "Средняя",
    releaseDate: "2026-08-04",
    source: "https://bgaming.com/games/mystic-reels",
    verifiedAt,
  },
  "bgaming-the-godfather-3-pillars-of-power": {
    field: "20 линий",
    rtp: "96,57%",
    maxWin: "5000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-07-15",
    source: "https://bgaming.com/games/the-godfather-3-pillars-of-power",
    verifiedAt,
  },
  "bgaming-train-heist-johnny-cash": {
    field: "Cluster Pays",
    rtp: "97,00%",
    maxWin: "10000x",
    volatility: "Очень высокая",
    releaseDate: "2026-07-08",
    source: "https://bgaming.com/games/train-heist-johnny-cash",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsBgamingThird(slug: string) {
  return details[slug];
}
