import { getCatalogVerifiedDetails } from "./catalog-verified-details";
import { getCatalogVerifiedDetailsBgaming } from "./catalog-verified-details-bgaming";
import { getCatalogVerifiedDetailsBgamingMore } from "./catalog-verified-details-bgaming-more";
import { getCatalogVerifiedDetailsBgamingThird } from "./catalog-verified-details-bgaming-third";
import { getCatalogVerifiedDetailsBgamingFourth } from "./catalog-verified-details-bgaming-fourth";
import { getCatalogVerifiedDetailsEndorphina } from "./catalog-verified-details-endorphina";
import { getCatalogVerifiedDetailsPush } from "./catalog-verified-details-push";

export function getVerifiedCatalogDetails(slug: string) {
  return (
    getCatalogVerifiedDetails(slug) ??
    getCatalogVerifiedDetailsBgaming(slug) ??
    getCatalogVerifiedDetailsBgamingMore(slug) ??
    getCatalogVerifiedDetailsBgamingThird(slug) ??
    getCatalogVerifiedDetailsBgamingFourth(slug) ??
    getCatalogVerifiedDetailsEndorphina(slug) ??
    getCatalogVerifiedDetailsPush(slug)
  );
}
