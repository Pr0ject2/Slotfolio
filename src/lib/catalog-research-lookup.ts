import { getCatalogResearch } from "./catalog-research";
import { getCatalogResearchMore } from "./catalog-research-more";
import { getCatalogResearch3OaksWave3 } from "./catalog-research-3oaks-wave3";
import { getCatalogResearch3OaksVerifiedWave1 } from "./catalog-research-3oaks-verified-wave1";
import { getCatalogResearchEndorphina } from "./catalog-research-endorphina";
import { getCatalogResearchHacksaw } from "./catalog-research-hacksaw";
import { getCatalogResearchHacksawMore } from "./catalog-research-hacksaw-more";
import { getCatalogResearchHacksawWave3 } from "./catalog-research-hacksaw-wave3";
import { getCatalogResearchHacksawWave4 } from "./catalog-research-hacksaw-wave4";
import { getCatalogResearchHacksawWave4b } from "./catalog-research-hacksaw-wave4b";
import { getCatalogResearchHacksawWave4c } from "./catalog-research-hacksaw-wave4c";
import { getCatalogResearchHacksawWave4d } from "./catalog-research-hacksaw-wave4d";
import { getCatalogResearchHacksawVerifiedWave1 } from "./catalog-research-hacksaw-verified-wave1";
import { getCatalogResearchHacksawFinal } from "./catalog-research-hacksaw-final";
import { getCatalogResearchPlayngo } from "./catalog-research-playngo";
import { getCatalogResearchPlayngoMore } from "./catalog-research-playngo-more";
import { getCatalogResearchPlayngoThird } from "./catalog-research-playngo-third";
import { getCatalogResearchPlayngoFourth } from "./catalog-research-playngo-fourth";
import { getCatalogResearchPlayngoFifth } from "./catalog-research-playngo-fifth";
import { getCatalogResearchPlayngoSixth } from "./catalog-research-playngo-sixth";
import { getCatalogResearchPlayngoSeventh } from "./catalog-research-playngo-seventh";
import { getCatalogResearchPlayngoEighth } from "./catalog-research-playngo-eighth";
import { getCatalogResearchPlayngoNinth } from "./catalog-research-playngo-ninth";
import { getCatalogResearchPlayngoTenth } from "./catalog-research-playngo-tenth";
import { getCatalogResearchPlayngoEleventh } from "./catalog-research-playngo-eleventh";
import { getCatalogResearchPlayngoTwelfth } from "./catalog-research-playngo-twelfth";
import { getCatalogResearchPlayngoH } from "./catalog-research-playngo-h";
import { getCatalogResearchPlayngoIJ } from "./catalog-research-playngo-ij";
import { getCatalogResearchPlayngoKL } from "./catalog-research-playngo-kl";
import { getCatalogResearchPlayngoMN } from "./catalog-research-playngo-mn";
import { getCatalogResearchPlayngoOP } from "./catalog-research-playngo-op";
import { getCatalogResearchPlayngoQR } from "./catalog-research-playngo-qr";
import { getCatalogResearchWazdan } from "./catalog-research-wazdan";
import { getCatalogResearchWazdanWave4 } from "./catalog-research-wazdan-wave4";
import { getCatalogResearchWazdanWave5 } from "./catalog-research-wazdan-wave5";
import { getCatalogResearchWazdanWave6 } from "./catalog-research-wazdan-wave6";
import { getCatalogResearchWazdanWave6b } from "./catalog-research-wazdan-wave6b";
import { getCatalogResearchWazdanWave6c } from "./catalog-research-wazdan-wave6c";
import { getCatalogResearchWazdanWave6d } from "./catalog-research-wazdan-wave6d";
import { getCatalogResearchWazdanWave6e } from "./catalog-research-wazdan-wave6e";
import { getCatalogResearchPush } from "./catalog-research-push";
import { getCatalogResearchNolimit } from "./catalog-research-nolimit";

export function getVerifiedCatalogResearch(slug: string) {
  return (
    getCatalogResearch(slug) ??
    getCatalogResearchMore(slug) ??
    getCatalogResearch3OaksWave3(slug) ??
    getCatalogResearch3OaksVerifiedWave1(slug) ??
    getCatalogResearchEndorphina(slug) ??
    getCatalogResearchHacksaw(slug) ??
    getCatalogResearchHacksawMore(slug) ??
    getCatalogResearchHacksawWave3(slug) ??
    getCatalogResearchHacksawWave4(slug) ??
    getCatalogResearchHacksawWave4b(slug) ??
    getCatalogResearchHacksawWave4c(slug) ??
    getCatalogResearchHacksawWave4d(slug) ??
    getCatalogResearchHacksawVerifiedWave1(slug) ??
    getCatalogResearchHacksawFinal(slug) ??
    getCatalogResearchPlayngo(slug) ??
    getCatalogResearchPlayngoMore(slug) ??
    getCatalogResearchPlayngoThird(slug) ??
    getCatalogResearchPlayngoFourth(slug) ??
    getCatalogResearchPlayngoFifth(slug) ??
    getCatalogResearchPlayngoSixth(slug) ??
    getCatalogResearchPlayngoSeventh(slug) ??
    getCatalogResearchPlayngoEighth(slug) ??
    getCatalogResearchPlayngoNinth(slug) ??
    getCatalogResearchPlayngoTenth(slug) ??
    getCatalogResearchPlayngoEleventh(slug) ??
    getCatalogResearchPlayngoTwelfth(slug) ??
    getCatalogResearchPlayngoH(slug) ??
    getCatalogResearchPlayngoIJ(slug) ??
    getCatalogResearchPlayngoKL(slug) ??
    getCatalogResearchPlayngoMN(slug) ??
    getCatalogResearchPlayngoOP(slug) ??
    getCatalogResearchPlayngoQR(slug) ??
    getCatalogResearchWazdan(slug) ??
    getCatalogResearchWazdanWave4(slug) ??
    getCatalogResearchWazdanWave5(slug) ??
    getCatalogResearchWazdanWave6(slug) ??
    getCatalogResearchWazdanWave6b(slug) ??
    getCatalogResearchWazdanWave6c(slug) ??
    getCatalogResearchWazdanWave6d(slug) ??
    getCatalogResearchWazdanWave6e(slug) ??
    getCatalogResearchPush(slug) ??
    getCatalogResearchNolimit(slug)
  );
}
