import { getCatalogResearch } from "./catalog-research";
import { getCatalogResearchMore } from "./catalog-research-more";
import { getCatalogResearchEndorphina } from "./catalog-research-endorphina";
import { getCatalogResearchHacksaw } from "./catalog-research-hacksaw";
import { getCatalogResearchPlayngo } from "./catalog-research-playngo";
import { getCatalogResearchPlayngoMore } from "./catalog-research-playngo-more";
import { getCatalogResearchWazdan } from "./catalog-research-wazdan";
import { getCatalogResearchPush } from "./catalog-research-push";

export function getVerifiedCatalogResearch(slug: string) {
  return (
    getCatalogResearch(slug) ??
    getCatalogResearchMore(slug) ??
    getCatalogResearchEndorphina(slug) ??
    getCatalogResearchHacksaw(slug) ??
    getCatalogResearchPlayngo(slug) ??
    getCatalogResearchPlayngoMore(slug) ??
    getCatalogResearchWazdan(slug) ??
    getCatalogResearchPush(slug)
  );
}
