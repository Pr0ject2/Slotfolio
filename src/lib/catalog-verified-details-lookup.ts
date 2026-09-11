import { getCatalogVerifiedDetails } from "./catalog-verified-details";
import { getCatalogVerifiedDetails3Oaks } from "./catalog-verified-details-3oaks";
import { getCatalogVerifiedDetailsBgaming } from "./catalog-verified-details-bgaming";
import { getCatalogVerifiedDetailsBgamingMore } from "./catalog-verified-details-bgaming-more";
import { getCatalogVerifiedDetailsBgamingThird } from "./catalog-verified-details-bgaming-third";
import { getCatalogVerifiedDetailsBgamingFourth } from "./catalog-verified-details-bgaming-fourth";
import { getCatalogVerifiedDetailsEndorphina } from "./catalog-verified-details-endorphina";
import { getCatalogVerifiedDetailsPush } from "./catalog-verified-details-push";
import { getCatalogVerifiedDetailsPushMore } from "./catalog-verified-details-push-more";
import { getCatalogVerifiedDetailsPlayngo } from "./catalog-verified-details-playngo";
import { getCatalogVerifiedDetailsPlayngoMore } from "./catalog-verified-details-playngo-more";
import { getCatalogVerifiedDetailsHacksaw } from "./catalog-verified-details-hacksaw";
import { getCatalogVerifiedDetailsNolimit } from "./catalog-verified-details-nolimit";

export function getVerifiedCatalogDetails(slug: string) {
  return (
    getCatalogVerifiedDetails(slug) ??
    getCatalogVerifiedDetails3Oaks(slug) ??
    getCatalogVerifiedDetailsBgaming(slug) ??
    getCatalogVerifiedDetailsBgamingMore(slug) ??
    getCatalogVerifiedDetailsBgamingThird(slug) ??
    getCatalogVerifiedDetailsBgamingFourth(slug) ??
    getCatalogVerifiedDetailsEndorphina(slug) ??
    getCatalogVerifiedDetailsPush(slug) ??
    getCatalogVerifiedDetailsPushMore(slug) ??
    getCatalogVerifiedDetailsPlayngo(slug) ??
    getCatalogVerifiedDetailsPlayngoMore(slug) ??
    getCatalogVerifiedDetailsHacksaw(slug) ??
    getCatalogVerifiedDetailsNolimit(slug)
  );
}
