import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearch3OaksWave3: Record<string, CatalogResearch> = {
  "3-oaks-gaming-egypt-fire-2": {
    mechanics: ["Линии"],
    source: "https://3oaks.com/game/egypt_fire_2",
    verifiedAt,
    evidence: "Official game page and official release describe Egypt Fire 2 as a 5x4, 20-line slot.",
  },
  "3-oaks-gaming-jungle-volcano": {
    mechanics: ["Линии"],
    source: "https://3oaks.com/game/jungle_volcano",
    verifiedAt,
    evidence: "Official 3 Oaks release describes Jungle Volcano as a feature-rich 5x4, 20-line slot.",
  },
  "3-oaks-gaming-lady-fortune": {
    mechanics: ["Каскады"],
    source: "https://3oaks.com/game/lady_fortune",
    verifiedAt,
    evidence: "Official game page explicitly calls Lady Fortune a Cascading Reels slot and says matching symbols collapse to trigger chained wins.",
  },
};

export function getCatalogResearch3OaksWave3(slug: string) {
  return catalogResearch3OaksWave3[slug];
}
