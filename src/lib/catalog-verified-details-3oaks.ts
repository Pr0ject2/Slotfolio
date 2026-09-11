import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "3-oaks-gaming-15-dragon-pearls": {
    field: "5×3 · 25 линий",
    source: "https://3oaks.com/game/15_dragon_pearls",
    verifiedAt,
  },
  "3-oaks-gaming-3-african-drums": {
    field: "5×3 · 25 линий",
    source: "https://3oaks.com/game/3_african_drums",
    verifiedAt,
  },
  "3-oaks-gaming-buddha-megaways": {
    field: "6 барабанов · 64–117 649 способов",
    maxWin: "12000x",
    source: "https://3oaks.com/game/buddha_megaways",
    verifiedAt,
  },
  "3-oaks-gaming-coin-princess-x1000": {
    field: "6×5 · Scatter Pays",
    source: "https://3oaks.com/game/coin_princess_x1000",
    verifiedAt,
  },
  "3-oaks-gaming-lady-fortune": {
    field: "6×5 · Scatter Pays · каскады",
    source: "https://3oaks.com/game/lady_fortune",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetails3Oaks(slug: string) {
  return details[slug];
}
