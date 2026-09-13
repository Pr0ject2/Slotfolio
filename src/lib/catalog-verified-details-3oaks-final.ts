import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-13";

const details: Record<string, CatalogVerifiedDetails> = {
  "3-oaks-gaming-super-china-pots": { field: "5×3 · 25 линий", releaseDate: "2025-06", source: "https://3oaks.com/game/super_china_pots", verifiedAt },
  "3-oaks-gaming-super-hot-chilli": { field: "5×4 · 25 линий", releaseDate: "2024-07", source: "https://3oaks.com/game/super_hot_chilli", verifiedAt },
  "3-oaks-gaming-super-hot-teapots": { field: "5×3 · 25 линий", releaseDate: "2025-09", source: "https://3oaks.com/game/super_hot_teapots", verifiedAt },
  "3-oaks-gaming-super-hotfire-diamonds": { field: "3×3", releaseDate: "2026-07", source: "https://3oaks.com/game/super_hotfire_diamonds", verifiedAt },
  "3-oaks-gaming-super-sticky-piggy": { field: "5×3 · 20 линий", releaseDate: "2024-06", source: "https://3oaks.com/game/super_sticky_piggy", verifiedAt },
  "3-oaks-gaming-supreme-diamond-xxl": { field: "5×3 · 15 линий", releaseDate: "2026-05", source: "https://3oaks.com/game/supreme_diamond_xxl", verifiedAt },
  "3-oaks-gaming-thunder-tiger": { field: "5×3", releaseDate: "2026-04", source: "https://3oaks.com/game/thunder_tiger", verifiedAt },
  "3-oaks-gaming-tiger-gems": { field: "5×4 · 25 линий", releaseDate: "2023-06", source: "https://3oaks.com/game/tiger_gems", verifiedAt },
  "3-oaks-gaming-tiger-jungle": { field: "5×3 · 25 линий", releaseDate: "2021-09", source: "https://3oaks.com/game/tiger_jungle", verifiedAt },
  "3-oaks-gaming-wolf-night": { field: "5×3 · 25 линий", releaseDate: "2021-08", source: "https://3oaks.com/game/wolf_night", verifiedAt },
};

export function getCatalogVerifiedDetails3OaksFinal(slug: string) {
  return details[slug];
}
