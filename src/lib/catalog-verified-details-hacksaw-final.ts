import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-13";

const details: Record<string, CatalogVerifiedDetails> = {
  "hacksaw-gaming-tiger-legends": {
    field: "5×4",
    source: "https://www.hacksawgaming.com/games/tiger-legends",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsHacksawFinal(slug: string) {
  return details[slug];
}
