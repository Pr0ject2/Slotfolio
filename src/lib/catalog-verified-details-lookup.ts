import { getCatalogVerifiedDetails } from "./catalog-verified-details";
import { getCatalogVerifiedDetails3Oaks } from "./catalog-verified-details-3oaks";
import { getCatalogVerifiedDetails3OaksWave1 } from "./catalog-verified-details-3oaks-wave1";
import { getCatalogVerifiedDetailsBgaming } from "./catalog-verified-details-bgaming";
import { getCatalogVerifiedDetailsBgamingMore } from "./catalog-verified-details-bgaming-more";
import { getCatalogVerifiedDetailsBgamingThird } from "./catalog-verified-details-bgaming-third";
import { getCatalogVerifiedDetailsBgamingFourth } from "./catalog-verified-details-bgaming-fourth";
import { getCatalogVerifiedDetailsEndorphina } from "./catalog-verified-details-endorphina";
import { getCatalogVerifiedDetailsPush } from "./catalog-verified-details-push";
import { getCatalogVerifiedDetailsPushMore } from "./catalog-verified-details-push-more";
import { getCatalogVerifiedDetailsPlayngo } from "./catalog-verified-details-playngo";
import { getCatalogVerifiedDetailsPlayngoMore } from "./catalog-verified-details-playngo-more";
import { getCatalogVerifiedDetailsPlayngoWave11 } from "./catalog-verified-details-playngo-wave11";
import { getCatalogVerifiedDetailsPlayngoWave12 } from "./catalog-verified-details-playngo-wave12";
import { getCatalogVerifiedDetailsPlayngoWave13 } from "./catalog-verified-details-playngo-wave13";
import { getCatalogVerifiedDetailsPlayngoWave14 } from "./catalog-verified-details-playngo-wave14";
import { getCatalogVerifiedDetailsPlayngoWave15 } from "./catalog-verified-details-playngo-wave15";
import { getCatalogVerifiedDetailsPlayngoWave16 } from "./catalog-verified-details-playngo-wave16";
import { getCatalogVerifiedDetailsPlayngoWave17 } from "./catalog-verified-details-playngo-wave17";
import { getCatalogVerifiedDetailsPlayngoWave18 } from "./catalog-verified-details-playngo-wave18";
import { getCatalogVerifiedDetailsPlayngoWave19 } from "./catalog-verified-details-playngo-wave19";
import { getCatalogVerifiedDetailsPlayngoH } from "./catalog-verified-details-playngo-h";
import { getCatalogVerifiedDetailsPlayngoIJ } from "./catalog-verified-details-playngo-ij";
import { getCatalogVerifiedDetailsPlayngoKL } from "./catalog-verified-details-playngo-kl";
import { getCatalogVerifiedDetailsPlayngoMN } from "./catalog-verified-details-playngo-mn";
import { getCatalogVerifiedDetailsPlayngoOP } from "./catalog-verified-details-playngo-op";
import { getCatalogVerifiedDetailsPlayngoQR } from "./catalog-verified-details-playngo-qr";
import { getCatalogVerifiedDetailsHacksaw } from "./catalog-verified-details-hacksaw";
import { getCatalogVerifiedDetailsHacksawWave1 } from "./catalog-verified-details-hacksaw-wave1";
import { getCatalogVerifiedDetailsHacksawFinal } from "./catalog-verified-details-hacksaw-final";
import { getCatalogVerifiedDetailsNolimit } from "./catalog-verified-details-nolimit";
import { getCatalogVerifiedDetailsWazdanWave1 } from "./catalog-verified-details-wazdan-wave1";
import { getCatalogVerifiedDetailsWazdanWave2 } from "./catalog-verified-details-wazdan-wave2";
import { getCatalogVerifiedDetailsWazdanWave3 } from "./catalog-verified-details-wazdan-wave3";
import { getCatalogVerifiedDetailsWazdanWave4 } from "./catalog-verified-details-wazdan-wave4";

export function getVerifiedCatalogDetails(slug: string) {
  return (
    getCatalogVerifiedDetails(slug) ??
    getCatalogVerifiedDetails3Oaks(slug) ??
    getCatalogVerifiedDetails3OaksWave1(slug) ??
    getCatalogVerifiedDetailsBgaming(slug) ??
    getCatalogVerifiedDetailsBgamingMore(slug) ??
    getCatalogVerifiedDetailsBgamingThird(slug) ??
    getCatalogVerifiedDetailsBgamingFourth(slug) ??
    getCatalogVerifiedDetailsEndorphina(slug) ??
    getCatalogVerifiedDetailsPush(slug) ??
    getCatalogVerifiedDetailsPushMore(slug) ??
    getCatalogVerifiedDetailsPlayngo(slug) ??
    getCatalogVerifiedDetailsPlayngoMore(slug) ??
    getCatalogVerifiedDetailsPlayngoWave11(slug) ??
    getCatalogVerifiedDetailsPlayngoWave12(slug) ??
    getCatalogVerifiedDetailsPlayngoWave13(slug) ??
    getCatalogVerifiedDetailsPlayngoWave14(slug) ??
    getCatalogVerifiedDetailsPlayngoWave15(slug) ??
    getCatalogVerifiedDetailsPlayngoWave16(slug) ??
    getCatalogVerifiedDetailsPlayngoWave17(slug) ??
    getCatalogVerifiedDetailsPlayngoWave18(slug) ??
    getCatalogVerifiedDetailsPlayngoWave19(slug) ??
    getCatalogVerifiedDetailsPlayngoH(slug) ??
    getCatalogVerifiedDetailsPlayngoIJ(slug) ??
    getCatalogVerifiedDetailsPlayngoKL(slug) ??
    getCatalogVerifiedDetailsPlayngoMN(slug) ??
    getCatalogVerifiedDetailsPlayngoOP(slug) ??
    getCatalogVerifiedDetailsPlayngoQR(slug) ??
    getCatalogVerifiedDetailsHacksaw(slug) ??
    getCatalogVerifiedDetailsHacksawWave1(slug) ??
    getCatalogVerifiedDetailsHacksawFinal(slug) ??
    getCatalogVerifiedDetailsNolimit(slug) ??
    getCatalogVerifiedDetailsWazdanWave1(slug) ??
    getCatalogVerifiedDetailsWazdanWave2(slug) ??
    getCatalogVerifiedDetailsWazdanWave3(slug) ??
    getCatalogVerifiedDetailsWazdanWave4(slug)
  );
}
