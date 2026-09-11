import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoSixth: Record<string, CatalogResearch> = {
  "playn-go-crabbys-gold-ii": {
    mechanics: ["Способы"],
    source: "https://www.playngo.com/games/crabby's-gold-ii",
    verifiedAt,
    evidence: "Official Play'n GO release describes Crabby's Gold II as a 6-reel slot with 4096 ways to win.",
  },
  "playn-go-crystal-sun": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/crystal-sun",
    verifiedAt,
    evidence: "Official game page states that Crystal Sun has 10 fixed paylines on five reels.",
  },
};

export function getCatalogResearchPlayngoSixth(slug: string) {
  return catalogResearchPlayngoSixth[slug];
}
