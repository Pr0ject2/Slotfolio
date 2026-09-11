import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoEighth: Record<string, CatalogResearch> = {
  "playn-go-fate-of-dead-blitzways": {
    mechanics: ["Способы", "Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/fate-of-dead-blitzways",
    verifiedAt,
    evidence: "Official Play'n GO game and release material describe dynamic reels with up to 16,807 ways to win, cluster wins, and winning symbols disappearing before new symbols cascade into place.",
  },
};

export function getCatalogResearchPlayngoEighth(slug: string) {
  return catalogResearchPlayngoEighth[slug];
}
