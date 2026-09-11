import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-11";

export const catalogResearchPlayngoTwelfth: Record<string, CatalogResearch> = {
  "playn-go-gold-trophy-2": {
    mechanics: ["Линии"],
    source: "https://www.playngo.com/games/gold-trophy-2",
    verifiedAt,
    evidence: "Official game page describes Gold Trophy 2 as a 5x3 slot with up to 20 paylines.",
  },
  "playn-go-gold-volcano": {
    mechanics: ["Кластеры", "Каскады"],
    source: "https://www.playngo.com/games/gold-volcano",
    verifiedAt,
    evidence: "Official game page states that four or more connected symbols form winning clusters and that winning symbols are removed before new symbols cascade into place.",
  },
  "playn-go-golden-osiris": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/golden-osiris",
    verifiedAt,
    evidence: "Official game page explicitly describes new cascades and cascade-based feature progression.",
  },
  "playn-go-golden-ticket": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/golden-ticket",
    verifiedAt,
    evidence: "Official game page states that winning combinations are removed and remaining symbols drop down to possibly form new winning combinations.",
  },
  "playn-go-golden-ticket-2": {
    mechanics: ["Каскады"],
    source: "https://www.playngo.com/games/golden-ticket-2",
    verifiedAt,
    evidence: "Official game page identifies Golden Ticket 2 as a 5x5 cascading grid slot.",
  },
};

export function getCatalogResearchPlayngoTwelfth(slug: string) {
  return catalogResearchPlayngoTwelfth[slug];
}
