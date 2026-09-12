import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-12";

const sources: Record<string, string> = {
  "wazdan-12-coins": "https://wazdan.com/games/12-coins",
  "wazdan-12-coins-grand-diamond-edition": "https://wazdan.com/games/12-coins-grand-diamond-edition",
  "wazdan-12-coins-grand-gold-edition": "https://wazdan.com/games/12-coins-grand-gold-edition",
  "wazdan-12-coins-grand-platinum-edition": "https://wazdan.com/games/12-coins-grand-platinum-edition",
  "wazdan-15-coins": "https://wazdan.com/games/15-coins",
  "wazdan-15-coins-grand-diamond-edition": "https://wazdan.com/games/15-coins-grand-diamond-edition",
  "wazdan-15-coins-grand-gold-edition": "https://wazdan.com/games/15-coins-grand-gold-edition",
  "wazdan-15-coins-grand-platinum-edition": "https://wazdan.com/games/15-coins-grand-platinum-edition",
  "wazdan-16-coins": "https://wazdan.com/games/16-coins",
  "wazdan-16-coins-grand-gold-edition": "https://wazdan.com/games/16-coins-grand-gold-edition",
  "wazdan-16-coins-grand-platinum-edition": "https://wazdan.com/games/16-coins-grand-platinum-edition",
  "wazdan-16-coins-x5000": "https://wazdan.com/games/16-coins-x5000",
  "wazdan-20-coins": "https://wazdan.com/games/20-coins",
  "wazdan-20-coins-grand-gold-edition": "https://wazdan.com/games/20-coins-grand-gold-edition",
  "wazdan-24-coins": "https://wazdan.com/games/24-coins",
  "wazdan-25-coins": "https://wazdan.com/games/25-coins",
  "wazdan-25-coins-grand-gold-edition": "https://wazdan.com/games/25-coins-grand-gold-edition",
  "wazdan-25-coins-x3000": "https://wazdan.com/games/25-coins-x3000",
  "wazdan-30-coins": "https://wazdan.com/games/30-coins",
  "wazdan-30-coins-grand-gold-edition": "https://wazdan.com/games/30-coins-grand-gold-edition",
  "wazdan-36-coins": "https://wazdan.com/games/36-coins",
  "wazdan-36-coins-grand-gold-edition": "https://wazdan.com/games/36-coins-grand-gold-edition",
  "wazdan-9-balls": "https://wazdan.com/games/9-balls",
  "wazdan-9-bells": "https://wazdan.com/games/9-bells",
  "wazdan-9-burning-dragons": "https://wazdan.com/games/9-burning-dragons",
  "wazdan-9-burning-stars": "https://wazdan.com/games/9-burning-stars",
  "wazdan-9-coins": "https://wazdan.com/games/9-coins",
  "wazdan-9-coins-1000-edition": "https://wazdan.com/games/9-coins-1000-edition",
  "wazdan-9-coins-extremely-light": "https://wazdan.com/games/9-coins-extremely-light",
  "wazdan-9-coins-grand-diamond-edition": "https://wazdan.com/games/9-coins-grand-diamond-edition",
  "wazdan-9-coins-grand-gold-edition": "https://wazdan.com/games/9-coins-grand-gold-edition",
  "wazdan-9-coins-grand-platinum-edition": "https://wazdan.com/games/9-coins-grand-platinum-edition",
  "wazdan-9-lions": "https://wazdan.com/games/9-lions",
  "wazdan-9-lions-hold-the-jackpot": "https://wazdan.com/games/9-lions-hold-the-jackpot",
  "wazdan-beauty-fruity": "https://wazdan.com/games/beauty-fruity",
  "wazdan-bumba-meu-boi-coin": "https://wazdan.com/games/bumba-meu-boi-coin",
  "wazdan-burning-stars-3": "https://wazdan.com/games/burning-stars-3",
  "wazdan-burning-sun": "https://wazdan.com/games/burning-sun",
  "wazdan-burning-sun-extremely-light": "https://wazdan.com/games/burning-sun-extremely-light",
  "wazdan-butterfly-lovers": "https://wazdan.com/games/butterfly-lovers",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeWazdanWave1(slug: string) {
  return gameTypes[slug];
}
