import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchNolimit: Record<string, CatalogResearch> = {
  "nolimit-city-duck-hunters-23rd-september-202610th-september-2026": {
    mechanics: ["Способы"],
    source: "https://nolimitcity.com/games/duck-hunters-2",
    verifiedAt,
    evidence: "Official game page lists xWays and Infectious xWays and explicitly says these mechanics produce additional ways to win.",
  },
};

export function getCatalogResearchNolimit(slug: string) {
  return catalogResearchNolimit[slug];
}
