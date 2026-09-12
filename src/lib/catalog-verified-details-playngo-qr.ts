import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-12";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-queens-day-tilt": { field: "3×3", releaseDate: "2019-02-14", source: "https://www.playngo.com/games/queen's-day-tilt", verifiedAt },
  "playn-go-rabbit-hole-riches": { releaseDate: "2020-10-08", source: "https://www.playngo.com/games/rabbit-hole-riches", verifiedAt },
  "playn-go-rabbit-hole-riches-court-of-hearts": { field: "5 барабанов", releaseDate: "2021-04-29", source: "https://www.playngo.com/games/rabbit-hole-riches---court-of-hearts", verifiedAt },
  "playn-go-rage-to-riches": { releaseDate: "2013-10-30", source: "https://www.playngo.com/games/rage-to-riches", verifiedAt },
  "playn-go-raging-rex": { field: "6×4 · 4096 способов", releaseDate: "2019-01-10", source: "https://www.playngo.com/games/raging-rex", verifiedAt },
  "playn-go-raging-rex-2": { field: "4096 способов", releaseDate: "2022-03-17", source: "https://www.playngo.com/games/raging-rex-2", verifiedAt },
};

export function getCatalogVerifiedDetailsPlayngoQR(slug: string) {
  return details[slug];
}
