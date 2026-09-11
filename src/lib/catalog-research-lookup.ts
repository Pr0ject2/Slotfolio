import { getCatalogResearch } from "./catalog-research";
import { getCatalogResearchMore } from "./catalog-research-more";
import { getCatalogResearch3OaksWave3 } from "./catalog-research-3oaks-wave3";
import { getCatalogResearchEndorphina } from "./catalog-research-endorphina";
import { getCatalogResearchHacksaw } from "./catalog-research-hacksaw";
import { getCatalogResearchHacksawMore } from "./catalog-research-hacksaw-more";
import { getCatalogResearchHacksawWave3 } from "./catalog-research-hacksaw-wave3";
import { getCatalogResearchHacksawWave4 } from "./catalog-research-hacksaw-wave4";
import { getCatalogResearchPlayngo } from "./catalog-research-playngo";
import { getCatalogResearchPlayngoMore } from "./catalog-research-playngo-more";
import { getCatalogResearchPlayngoThird } from "./catalog-research-playngo-third";
import { getCatalogResearchWazdan } from "./catalog-research-wazdan";
import { getCatalogResearchPush } from "./catalog-research-push";
import { getCatalogResearchNolimit } from "./catalog-research-nolimit";

export function getVerifiedCatalogResearch(slug: string) {
  return (
    getCatalogResearch(slug) ??
    getCatalogResearchMore(slug) ??
    getCatalogResearch3OaksWave3(slug) ??
    getCatalogResearchEndorphina(slug) ??
    getCatalogResearchHacksaw(slug) ??
    getCatalogResearchHacksawMore(slug) ??
    getCatalogResearchHacksawWave3(slug) ??
    getCatalogResearchHacksawWave4(slug) ??
    getCatalogResearchPlayngo(slug) ??
    getCatalogResearchPlayngoMore(slug) ??
    getCatalogResearchPlayngoThird(slug) ??
    getCatalogResearchWazdan(slug) ??
    getCatalogResearchPush(slug) ??
    getCatalogResearchNolimit(slug)
  );
}
