import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "nolimit-city-ding-dong-death15th-september-202622nd-september-2026": { field: "6×3", rtp: "95,83%", maxWin: "14 280x", releaseDate: "2026-09-22", source: "https://nolimitcity.com/games/ding-dong-death", verifiedAt },
  "nolimit-city-duck-hunters-23rd-september-202610th-september-2026": { field: "6×6", rtp: "96,00%", maxWin: "40 000x", releaseDate: "2026-09-10", source: "https://nolimitcity.com/games/duck-hunters-2", verifiedAt },
  "nolimit-city-gator-hunters-229th-september-20266th-october-2026": { releaseDate: "2026-10-06", source: "https://nolimitcity.com/games/gator-hunters-2", verifiedAt },
  "nolimit-city-six-feet-under13th-october-202620th-october-2026": { releaseDate: "2026-10-20", source: "https://nolimitcity.com/games/six-feet-under", verifiedAt },
};

export function getCatalogVerifiedDetailsNolimit(slug: string) {
  return details[slug];
}
