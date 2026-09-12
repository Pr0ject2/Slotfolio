import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-12";

const sources: Record<string, string> = {
  "wazdan-lost-treasure": "https://wazdan.com/games/lost-treasure",
  "wazdan-magic-eggs": "https://wazdan.com/games/magic-eggs",
  "wazdan-magic-fruit-cherries": "https://wazdan.com/games/magic-fruit-cherries",
  "wazdan-magic-fruit-oranges": "https://wazdan.com/games/magic-fruit-oranges",
  "wazdan-magic-hot": "https://wazdan.com/games/magic-hot",
  "wazdan-magic-hot-4": "https://wazdan.com/games/magic-hot-4",
  "wazdan-magic-of-the-ring": "https://wazdan.com/games/magic-of-the-ring",
  "wazdan-magic-of-the-ring-deluxe": "https://wazdan.com/games/magic-of-the-ring-deluxe",
  "wazdan-magic-stars": "https://wazdan.com/games/magic-stars",
  "wazdan-magic-stars-9": "https://wazdan.com/games/magic-stars-9",
  "wazdan-mighty-crown-empire-of-gold": "https://wazdan.com/games/mighty-crown-empire-of-gold",
  "wazdan-mighty-crown-legacy-of-mars": "https://wazdan.com/games/mighty-crown-legacy-of-mars",
  "wazdan-mighty-fish-blue-marlin": "https://wazdan.com/games/mighty-fish-blue-marlin",
  "wazdan-mighty-symbols-crowns": "https://wazdan.com/games/mighty-symbols-crowns",
  "wazdan-mighty-symbols-diamonds": "https://wazdan.com/games/mighty-symbols-diamonds",
  "wazdan-mighty-symbols-jokers": "https://wazdan.com/games/mighty-symbols-jokers",
  "wazdan-mighty-symbols-sevens": "https://wazdan.com/games/mighty-symbols-sevens",
  "wazdan-mighty-wild-gorilla": "https://wazdan.com/games/mighty-wild-gorilla",
  "wazdan-mighty-wild-jaguar": "https://wazdan.com/games/mighty-wild-jaguar",
  "wazdan-mighty-wild-panther-grand-gold-edition": "https://wazdan.com/games/mighty-wild-panther-grand-gold-edition",
  "wazdan-mighty-wild-panther-grand-platinum-edition": "https://wazdan.com/games/mighty-wild-panther-grand-platinum-edition",
  "wazdan-moon-of-fortune": "https://wazdan.com/games/moon-of-fortune",
  "wazdan-neon-city": "https://wazdan.com/games/neon-city",
  "wazdan-one-coin": "https://wazdan.com/games/one-coin",
  "wazdan-ox-coin": "https://wazdan.com/games/ox-coin",
  "wazdan-power-of-gods-egypt": "https://wazdan.com/games/power-of-gods-egypt",
  "wazdan-power-of-gods-hades": "https://wazdan.com/games/power-of-gods-hades",
  "wazdan-power-of-gods-medusa": "https://wazdan.com/games/power-of-gods-medusa",
  "wazdan-power-of-gods-medusa-extremely-light": "https://wazdan.com/games/power-of-gods-medusa-extremely-light",
  "wazdan-power-of-gods-the-pantheon": "https://wazdan.com/games/power-of-gods-the-pantheon",
  "wazdan-power-of-gods-valhalla": "https://wazdan.com/games/power-of-gods-valhalla",
  "wazdan-power-of-gods-valhalla-extremely-light": "https://wazdan.com/games/power-of-gods-valhalla-extremely-light",
  "wazdan-power-of-sun-svarog": "https://wazdan.com/games/power-of-sun-svarog",
  "wazdan-prosperity-pearls": "https://wazdan.com/games/prosperity-pearls",
  "wazdan-santas-gifts-frenzy": "https://wazdan.com/games/santas-gifts-frenzy",
  "wazdan-sizzling-eggs-grand-gold-edition": "https://wazdan.com/games/sizzling-eggs-grand-gold-edition",
  "wazdan-sizzling-eggs-grand-platinum-edition": "https://wazdan.com/games/sizzling-eggs-grand-platinum-edition",
  "wazdan-sizzling-moon": "https://wazdan.com/games/sizzling-moon",
  "wazdan-slot-jam": "https://wazdan.com/games/slot-jam",
  "wazdan-sonic-reels": "https://wazdan.com/games/sonic-reels",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeWazdanWave3(slug: string) {
  return gameTypes[slug];
}
