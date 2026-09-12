import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-12";

const sources: Record<string, string> = {
  "wazdan-cash-grotto": "https://wazdan.com/games/cash-grotto",
  "wazdan-double-tigers": "https://wazdan.com/games/double-tigers",
  "wazdan-dwarfs-fortune": "https://wazdan.com/games/dwarfs-fortune",
  "wazdan-easter-coins": "https://wazdan.com/games/easter-coins",
  "wazdan-eggs-of-fortune": "https://wazdan.com/games/eggs-of-fortune",
  "wazdan-fishermans-luck": "https://wazdan.com/games/fishermans-luck",
  "wazdan-football-mania": "https://wazdan.com/games/football-mania",
  "wazdan-football-mania-deluxe": "https://wazdan.com/games/football-mania-deluxe",
  "wazdan-fruit-mania": "https://wazdan.com/games/fruit-mania",
  "wazdan-fruit-mania-deluxe": "https://wazdan.com/games/fruit-mania-deluxe",
  "wazdan-fruits-go-bananas": "https://wazdan.com/games/fruits-go-bananas",
  "wazdan-gem-splitter": "https://wazdan.com/games/gem-splitter",
  "wazdan-golden-sphinx": "https://wazdan.com/games/golden-sphinx",
  "wazdan-good-luck-40": "https://wazdan.com/games/good-luck-40",
  "wazdan-great-book-of-magic": "https://wazdan.com/games/great-book-of-magic",
  "wazdan-great-book-of-magic-deluxe": "https://wazdan.com/games/great-book-of-magic-deluxe",
  "wazdan-haunted-coins-x1000": "https://wazdan.com/games/haunted-coins-x1000",
  "wazdan-haunted-hospital": "https://wazdan.com/games/haunted-hospital",
  "wazdan-highschool-manga": "https://wazdan.com/games/highschool-manga",
  "wazdan-highway-to-hell": "https://wazdan.com/games/highway-to-hell",
  "wazdan-highway-to-hell-deluxe": "https://wazdan.com/games/highway-to-hell-deluxe",
  "wazdan-hot-777-deluxe": "https://wazdan.com/games/hot-777-deluxe",
  "wazdan-hot-party": "https://wazdan.com/games/hot-party",
  "wazdan-hot-party-deluxe": "https://wazdan.com/games/hot-party-deluxe",
  "wazdan-hot-slot-777-crown-extremely-light": "https://wazdan.com/games/hot-slot-777-crown-extremely-light",
  "wazdan-hot-slot-diamond-coins": "https://wazdan.com/games/hot-slot-diamond-coins",
  "wazdan-hot-slot-magic-pearls": "https://wazdan.com/games/hot-slot-magic-pearls",
  "wazdan-hot-slot-mystery-jackpot-joker": "https://wazdan.com/games/hot-slot-mystery-jackpot-joker",
  "wazdan-hot-slot-platinum-coins": "https://wazdan.com/games/hot-slot-platinum-coins",
  "wazdan-hungry-shark": "https://wazdan.com/games/hungry-shark",
  "wazdan-in-the-forest": "https://wazdan.com/games/in-the-forest",
  "wazdan-infinity-hero": "https://wazdan.com/games/infinity-hero",
  "wazdan-jacks-ride": "https://wazdan.com/games/jacks-ride",
  "wazdan-joker-explosion": "https://wazdan.com/games/joker-explosion",
  "wazdan-juicy-reels": "https://wazdan.com/games/juicy-reels",
  "wazdan-jumping-fruits": "https://wazdan.com/games/jumping-fruits",
  "wazdan-kick-off": "https://wazdan.com/games/kick-off",
  "wazdan-larry-the-leprechaun": "https://wazdan.com/games/larry-the-leprechaun",
  "wazdan-los-muertos": "https://wazdan.com/games/los-muertos",
  "wazdan-los-muertos-ii": "https://wazdan.com/games/los-muertos-ii",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeWazdanWave2(slug: string) {
  return gameTypes[slug];
}
