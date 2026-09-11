import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "hacksaw-gaming-2-wild-2-die": { field: "5×4", maxWin: "15 000x", source: "https://www.hacksawgaming.com/games/2-wild-2-die", verifiedAt },
  "hacksaw-gaming-cash-crew": { field: "5×5", maxWin: "10 000x", source: "https://www.hacksawgaming.com/games/cash-crew", verifiedAt },
  "hacksaw-gaming-cursed-crypt": { field: "5×4", maxWin: "10 000x", source: "https://www.hacksawgaming.com/games/cursed-crypt", verifiedAt },
  "hacksaw-gaming-dark-summoning": { field: "5×6 · 24 линии", rtp: "96,36% / 94,34% / 92,22% / 88,28%", maxWin: "10 666x", volatility: "4/5", source: "https://www.hacksawgaming.com/games/dark-summoning", verifiedAt },
  "hacksaw-gaming-red-rascal": { rtp: "96,34% / 94,29% / 92,26% / 86,35%", maxWin: "15 000x", volatility: "4/5", releaseDate: "2026-05-21", source: "https://www.hacksawgaming.com/games/red-rascal", verifiedAt },
  "hacksaw-gaming-ronin-stackways": { field: "5×4 · до 100 000 способов", rtp: "96,35% / 94,33% / 92,24% / 88,23%", maxWin: "5 000x", volatility: "2/5", source: "https://www.hacksawgaming.com/games/ronin-stackways", verifiedAt },
  "hacksaw-gaming-sand-and-ashes": { rtp: "96,27% / 94,21% / 92,30% / 86,19%", maxWin: "10 000x", volatility: "3/5", releaseDate: "2026-05-14", source: "https://www.hacksawgaming.com/games/sand-and-ashes", verifiedAt },
  "hacksaw-gaming-vending-machine": { field: "35 линий", rtp: "96,28% / 94,26% / 92,32% / 88,28%", maxWin: "5 000x", volatility: "3/5", source: "https://www.hacksawgaming.com/games/vending-machine", verifiedAt },
  "hacksaw-gaming-3-cursed-chests-hold-and-win": { rtp: "96,30% / 94,37% / 92,30% / 86,29%", maxWin: "2 500x", volatility: "3/5", releaseDate: "2026-05-28", source: "https://www.hacksawgaming.com/games/3-cursed-chests%3A-hold-%26-win", verifiedAt },
  "hacksaw-gaming-arizona-james-and-the-lost-relics": { rtp: "96% / 94% / 92% / 86%", maxWin: "25 000x", volatility: "3/5", releaseDate: "2026-08-25", source: "https://www.hacksawgaming.com/games/arizona-james-and-the-lost-relics", verifiedAt },
  "hacksaw-gaming-beast-below": { field: "5×4 · 14 линий", rtp: "96,29% / 94,27% / 92,25% / 88,28%", maxWin: "10 000x", volatility: "4/5", source: "https://www.hacksawgaming.com/games/beast-below", verifiedAt },
  "hacksaw-gaming-benny-the-beer": { field: "5×4 · до 100 000 способов", maxWin: "10 000x", volatility: "3/5", source: "https://www.hacksawgaming.com/games/benny-the-beer", verifiedAt },
};

export function getCatalogVerifiedDetailsHacksaw(slug: string) {
  return details[slug];
}
