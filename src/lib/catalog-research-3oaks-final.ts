import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-13";

export const catalogResearch3OaksFinal: Record<string, CatalogResearch> = {
  "3-oaks-gaming-super-china-pots": { mechanics: ["Линии"], source: "https://3oaks.com/game/super_china_pots", verifiedAt, evidence: "Official page describes the base game as 5x3 with 25 lines." },
  "3-oaks-gaming-super-hot-chilli": { mechanics: ["Линии"], source: "https://3oaks.com/game/super_hot_chilli", verifiedAt, evidence: "Official page describes the base game as 5x4 with 25 lines." },
  "3-oaks-gaming-super-hot-teapots": { mechanics: ["Линии"], source: "https://3oaks.com/game/super_hot_teapots", verifiedAt, evidence: "Official page describes the base game as 5x3 with 25 lines." },
  "3-oaks-gaming-super-sticky-piggy": { mechanics: ["Линии"], source: "https://3oaks.com/game/super_sticky_piggy", verifiedAt, evidence: "Official page describes the base game as 5x3 with 20 lines." },
  "3-oaks-gaming-supreme-diamond-xxl": { mechanics: ["Линии"], source: "https://3oaks.com/game/supreme_diamond_xxl", verifiedAt, evidence: "Official page describes the game as 3x5 with 15 lines." },
  "3-oaks-gaming-tiger-gems": { mechanics: ["Линии"], source: "https://3oaks.com/game/tiger_gems", verifiedAt, evidence: "Official page describes the base game as 5x4 with 25 lines." },
  "3-oaks-gaming-tiger-jungle": { mechanics: ["Линии"], source: "https://3oaks.com/game/tiger_jungle", verifiedAt, evidence: "Official page describes the base game as 5x3 with 25 lines." },
  "3-oaks-gaming-wolf-night": { mechanics: ["Линии"], source: "https://3oaks.com/game/wolf_night", verifiedAt, evidence: "Official page describes the base game as 5x3 with 25 lines." },
};

export function getCatalogResearch3OaksFinal(slug: string) {
  return catalogResearch3OaksFinal[slug];
}
