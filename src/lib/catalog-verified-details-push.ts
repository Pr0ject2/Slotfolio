import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "push-gaming-fat-drac": {
    field: "5×5 · 40 линий",
    rtp: "96,57% / 94,05%",
    maxWin: "50000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/fat-drac.html",
    verifiedAt,
  },
  "push-gaming-giga-jar": {
    field: "Кластеры · каскады",
    rtp: "96,48% / 94,45%",
    maxWin: "10000x",
    volatility: "Средняя",
    source: "https://www.pushgaming.com/games/giga-jar.html",
    verifiedAt,
  },
  "push-gaming-razor-returns": {
    field: "Winlines",
    rtp: "96,55% / 94,49%",
    maxWin: "100000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/razor-returns.html",
    verifiedAt,
  },
  "push-gaming-fire-hopper": {
    field: "Кластеры · каскады",
    rtp: "96,30% / 94,50%",
    maxWin: "50000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/fire-hopper.html",
    verifiedAt,
  },
  "push-gaming-jammin-jars-2": {
    field: "8×8 · кластеры",
    rtp: "96,40% / 94,40%",
    maxWin: "50000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/jammin-jars-2.html",
    verifiedAt,
  },
  "push-gaming-mystery-museum": {
    field: "5×3 · 10 линий",
    rtp: "96,58% / 94,01%",
    maxWin: "17500x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/mystery-museum.html",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPush(slug: string) {
  return details[slug];
}
