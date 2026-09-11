import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "bgaming-johnny-vs-chicken": {
    field: "15 линий",
    rtp: "97,00%",
    maxWin: "5000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-09-15",
    source: "https://bgaming.com/games/johnny-vs-chicken",
    verifiedAt,
  },
  "bgaming-multi-rush": {
    field: "Cluster Pays",
    rtp: "96,15%",
    maxWin: "10000x",
    volatility: "Высокая",
    releaseDate: "2026-06-17",
    source: "https://bgaming.com/games/multi-rush",
    verifiedAt,
  },
  "bgaming-red-hot-chilli-chickens": {
    field: "20 линий",
    rtp: "96,22%",
    maxWin: "5000x",
    volatility: "Средняя",
    releaseDate: "2026-09-17",
    source: "https://bgaming.com/games/red-hot-chilli-chickens",
    verifiedAt,
  },
  "bgaming-yokai": {
    field: "20 линий",
    rtp: "97,00%",
    maxWin: "8000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-07-06",
    source: "https://bgaming.com/games/yokai",
    verifiedAt,
  },
  "bgaming-wincent-wolf": {
    field: "20 линий",
    rtp: "97,00%",
    maxWin: "10000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-09-08",
    source: "https://bgaming.com/games/wincent-wolf",
    verifiedAt,
  },
  "bgaming-miss-cherry-wild-frames": {
    field: "20 линий",
    rtp: "97,00%",
    maxWin: "3000x",
    volatility: "Низкая–средняя",
    releaseDate: "2026-08-13",
    source: "https://bgaming.com/games/miss-cherry-wild-frames",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsBgamingMore(slug: string) {
  return details[slug];
}
