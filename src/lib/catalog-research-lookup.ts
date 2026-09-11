import { getCatalogResearch } from "./catalog-research";
import { getCatalogResearchMore } from "./catalog-research-more";
import { getCatalogResearchEndorphina } from "./catalog-research-endorphina";
import { getCatalogResearchHacksaw } from "./catalog-research-hacksaw";

export function getVerifiedCatalogResearch(slug: string) {
  return (
    getCatalogResearch(slug) ??
    getCatalogResearchMore(slug) ??
    getCatalogResearchEndorphina(slug) ??
    getCatalogResearchHacksaw(slug)
  );
}
