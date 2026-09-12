import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-13";

const research: Record<string, CatalogResearch> = {
  "hacksaw-gaming-pray-for-three": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/pray-for-three",
    verifiedAt,
    evidence: "Official Wheel of Sin rules state that activated and other winning symbols are removed before new symbols drop in.",
  },
  "hacksaw-gaming-toshi-ways-club": {
    mechanics: ["Каскады"],
    source: "https://www.hacksawgaming.com/games/toshi-ways-club",
    verifiedAt,
    evidence: "Official Flash Frames rules state that winning symbols reveal new symbols and repeat on subsequent wins until no new wins occur.",
  },
  "hacksaw-gaming-ultimate-slot-of-america": {
    mechanics: ["Линии"],
    source: "https://www.hacksawgaming.com/games/ultimate-slot-of-america",
    verifiedAt,
    evidence: "Official Gem Clusters rules explicitly refer to each winning payline in which a cluster participates.",
  },
};

export function getCatalogResearchHacksawFinal(slug: string) {
  return research[slug];
}
