import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-13";

const sources: Record<string, string> = {
  "hacksaw-gaming-pray-for-three": "https://www.hacksawgaming.com/games/pray-for-three",
  "hacksaw-gaming-rise-of-fortuna": "https://www.hacksawgaming.com/games/rise-of-fortuna",
  "hacksaw-gaming-sixsixsix": "https://www.hacksawgaming.com/games/sixsixsix",
  "hacksaw-gaming-spear-of-athena": "https://www.hacksawgaming.com/games/spear-of-athena",
  "hacksaw-gaming-spinman": "https://www.hacksawgaming.com/games/spinman",
  "hacksaw-gaming-stormborn": "https://www.hacksawgaming.com/games/stormborn",
  "hacksaw-gaming-strength-of-hercules": "https://www.hacksawgaming.com/games/strength-of-hercules",
  "hacksaw-gaming-the-count": "https://www.hacksawgaming.com/games/the-count",
  "hacksaw-gaming-the-wildwood-curse": "https://www.hacksawgaming.com/games/the-wildwood-curse",
  "hacksaw-gaming-tiger-legends": "https://www.hacksawgaming.com/games/tiger-legends",
  "hacksaw-gaming-toshi-ways-club": "https://www.hacksawgaming.com/games/toshi-ways-club",
  "hacksaw-gaming-ultimate-slot-of-america": "https://www.hacksawgaming.com/games/ultimate-slot-of-america",
  "hacksaw-gaming-wings-of-horus": "https://www.hacksawgaming.com/games/wings-of-horus",
  "hacksaw-gaming-zeus-ze-zecond": "https://www.hacksawgaming.com/games/zeus-ze-zecond",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeHacksawFinal(slug: string) {
  return gameTypes[slug];
}
