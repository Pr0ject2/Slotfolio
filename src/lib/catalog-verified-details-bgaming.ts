import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "bgaming-3-lucky-monkeys-hold-and-win": {
    field: "5×3 · 20 линий",
    rtp: "96,98%",
    maxWin: "5000x",
    volatility: "Средняя",
    releaseDate: "2026-09-28",
    source: "https://bgaming.com/games/3-lucky-monkeys-hold-win",
    verifiedAt,
  },
  "bgaming-bonanza-billion-merge-uptm": {
    field: "Pays Anywhere",
    rtp: "97,04%",
    maxWin: "15000x",
    volatility: "Очень высокая",
    releaseDate: "2026-09-24",
    source: "https://bgaming.com/games/bonanza-billion-merge-up",
    verifiedAt,
  },
  "bgaming-book-of-hidden-tombs": {
    field: "5×3 · 10 линий",
    rtp: "97,00%",
    maxWin: "10000x",
    volatility: "Высокая",
    releaseDate: "2026-08-20",
    source: "https://bgaming.com/games/book-of-hidden-tombs",
    verifiedAt,
  },
  "bgaming-chicken-fire": {
    field: "3×3 · 5 линий",
    rtp: "95,90%",
    maxWin: "5000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-07-22",
    source: "https://bgaming.com/games/chicken-fire",
    verifiedAt,
  },
  "bgaming-divine-queen-power-of-sun": {
    field: "Pays Anywhere",
    rtp: "97,00%",
    maxWin: "5000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-10-01",
    source: "https://bgaming.com/games/divine-queen-power-of-sun",
    verifiedAt,
  },
  "bgaming-dusty-duel": {
    field: "Pays Anywhere",
    rtp: "97,00%",
    maxWin: "5000x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-06-15",
    source: "https://bgaming.com/games/dusty-duel",
    verifiedAt,
  },
  "bgaming-frenzy-clusters": {
    field: "Cluster Pays",
    rtp: "97,11%",
    maxWin: "10000x",
    volatility: "Высокая",
    releaseDate: "2026-06-23",
    source: "https://bgaming.com/games/frenzy-clusters",
    verifiedAt,
  },
  "bgaming-fruit-million-respin": {
    field: "100 линий",
    rtp: "97,00%",
    maxWin: "3000x",
    volatility: "Средняя",
    releaseDate: "2026-07-27",
    source: "https://bgaming.com/games/fruit-million-respin",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsBgaming(slug: string) {
  return details[slug];
}
