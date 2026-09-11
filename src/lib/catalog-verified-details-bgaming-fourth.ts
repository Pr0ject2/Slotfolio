import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "bgaming-reel-of-ra": {
    field: "5×3 · 243 линии",
    rtp: "97,02%",
    maxWin: "2500x",
    volatility: "Средняя",
    releaseDate: "2026-07-20",
    source: "https://bgaming.com/games/reel-of-ra",
    verifiedAt,
  },
  "bgaming-st-patricks-pots-hold-and-win": {
    field: "243 линии",
    rtp: "97,75%",
    maxWin: "3000x",
    volatility: "Средняя",
    releaseDate: "2026-08-11",
    source: "https://bgaming.com/games/st-patricks-pots-hold-and-win",
    verifiedAt,
  },
  "bgaming-sweet-samurai": {
    field: "3×4×3×4×3 · Ways Pays",
    rtp: "97,60%",
    maxWin: "4500x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-06-25",
    source: "https://bgaming.com/games/sweet-samurai",
    verifiedAt,
  },
  "bgaming-cats-love-yummy": {
    rtp: "96,07%",
    maxWin: "1500x",
    volatility: "Средняя–высокая",
    releaseDate: "2026-09-30",
    source: "https://bgaming.com/games/cats-love-yummy",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsBgamingFourth(slug: string) {
  return details[slug];
}
