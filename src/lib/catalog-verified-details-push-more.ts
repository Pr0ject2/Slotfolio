import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "push-gaming-10-cash-bisons": {
    field: "Push-Up: 5×4 / 5×5",
    rtp: "96,29% / 94,37%",
    maxWin: "5 168x",
    volatility: "Низкая–средняя",
    source: "https://www.pushgaming.com/games/10-cash-bisons.html",
    verifiedAt,
  },
  "push-gaming-bamboo-ways": {
    rtp: "96,30% / 94,42%",
    maxWin: "25 000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/bamboo-ways.html",
    verifiedAt,
  },
  "push-gaming-big-bam-book": {
    rtp: "96,31% / 94,42%",
    maxWin: "10 000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/big-bam-book.html",
    verifiedAt,
  },
  "push-gaming-big-bamboo": {
    rtp: "96,13% / 94,13%",
    maxWin: "50 000x",
    source: "https://www.pushgaming.com/games/big-bamboo.html",
    verifiedAt,
  },
  "push-gaming-big-bamboo-2": {
    rtp: "96,36% / 94,47%",
    maxWin: "75 000x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/big-bamboo-2.html",
    verifiedAt,
  },
  "push-gaming-deadly-5": {
    rtp: "96,39% / 94,35%",
    maxWin: "5 000x",
    volatility: "Средняя",
    source: "https://www.pushgaming.com/games/deadly-5.html",
    verifiedAt,
  },
  "push-gaming-dragon-hopper": {
    rtp: "96,33% / 94,39%",
    maxWin: "10 000x",
    volatility: "Средняя–высокая",
    source: "https://www.pushgaming.com/games/dragon-hopper.html",
    verifiedAt,
  },
  "push-gaming-fat-rabbit": {
    field: "5×5 · 50 линий",
    rtp: "96,45% / 94,15%",
    maxWin: "3 844x",
    volatility: "Высокая",
    source: "https://www.pushgaming.com/games/fat-rabbit.html",
    verifiedAt,
  },
  "push-gaming-fat-santa": {
    field: "5×5 · 50 линий",
    rtp: "96,45% / 94,15%",
    maxWin: "3 844x",
    volatility: "Средняя–высокая",
    source: "https://www.pushgaming.com/games/fat-santa.html",
    verifiedAt,
  },
  "push-gaming-fish-n-nudge": {
    rtp: "96,40% / 94,38%",
    maxWin: "10 000x",
    volatility: "Средняя",
    source: "https://www.pushgaming.com/games/fish-n-nudge.html",
    verifiedAt,
  },
  "push-gaming-fish-n-nudge-big-catch": {
    field: "Линии",
    rtp: "96,46% / 94,27%",
    maxWin: "3 094x",
    volatility: "Низкая",
    source: "https://www.pushgaming.com/games/fish-n-nudge-big-catch.html",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPushMore(slug: string) {
  return details[slug];
}
