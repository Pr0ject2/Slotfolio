import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-13";

const details: Record<string, CatalogVerifiedDetails> = {
  "hacksaw-gaming-bouncy-bombs": { field: "6×5", source: "https://www.hacksawgaming.com/games/bouncy-bombs", verifiedAt },
  "hacksaw-gaming-death-becomes-you": { releaseDate: "2026-06-25", source: "https://www.hacksawgaming.com/games/death-becomes-you", verifiedAt },
  "hacksaw-gaming-le-football-fan": { releaseDate: "2026-06-08", source: "https://www.hacksawgaming.com/games/le-football-fan", verifiedAt },
  "hacksaw-gaming-le-prechaun": { releaseDate: "2026-07-16", source: "https://www.hacksawgaming.com/games/le-prechaun", verifiedAt },
  "hacksaw-gaming-magic-piggy-og": { releaseDate: "2026-05-05", source: "https://www.hacksawgaming.com/games/magic-piggy-og", verifiedAt },
  "hacksaw-gaming-marlin-masters-og": { field: "5×3", releaseDate: "2026-07-28", source: "https://www.hacksawgaming.com/games/marlin-masters-og", verifiedAt },
  "hacksaw-gaming-marlin-masters-the-big-haul": { field: "5×4", source: "https://www.hacksawgaming.com/games/marlin-masters-the-big-haul", verifiedAt },
  "hacksaw-gaming-mayan-stackways": { field: "5×4 · до 100 000 способов", source: "https://www.hacksawgaming.com/games/mayan-stackways", verifiedAt },
  "hacksaw-gaming-mighty-masks": { field: "20 линий", source: "https://www.hacksawgaming.com/games/mighty-masks", verifiedAt },
  "hacksaw-gaming-orb-of-destiny": { field: "6×4 · 14 линий", source: "https://www.hacksawgaming.com/games/orb-of-destiny", verifiedAt },
};

export function getCatalogVerifiedDetailsHacksawWave1(slug: string) {
  return details[slug];
}
