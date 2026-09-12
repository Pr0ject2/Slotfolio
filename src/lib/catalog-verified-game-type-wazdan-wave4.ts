import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-12";

const sources: Record<string, string> = {
  "wazdan-space-gem": "https://wazdan.com/games/space-gem",
  "wazdan-space-spins": "https://wazdan.com/games/space-spins",
  "wazdan-spectrum": "https://wazdan.com/games/spectrum",
  "wazdan-sun-of-fortune": "https://wazdan.com/games/sun-of-fortune",
  "wazdan-super-hot": "https://wazdan.com/games/super-hot",
  "wazdan-throne-of-elements-platinum": "https://wazdan.com/games/throne-of-elements-platinum",
  "wazdan-mighty-wild-panther-grand-diamond-edition": "https://wazdan.com/games/mighty-wild-panther-grand-diamond-edition",
  "wazdan-triple-star": "https://wazdan.com/games/triple-star",
  "wazdan-unicorn-reels": "https://wazdan.com/games/unicorn-reels",
  "wazdan-valhalla": "https://wazdan.com/games/valhalla",
  "wazdan-vegas-hot": "https://wazdan.com/games/vegas-hot",
  "wazdan-vegas-reels-ii": "https://wazdan.com/games/vegas-reels-ii",
  "wazdan-welcome-to-hell-81": "https://wazdan.com/games/welcome-to-hell-81",
  "wazdan-wild-girls": "https://wazdan.com/games/wild-girls",
  "wazdan-wild-guns": "https://wazdan.com/games/wild-guns",
  "wazdan-wild-jack": "https://wazdan.com/games/wild-jack",
  "wazdan-wild-jack-81": "https://wazdan.com/games/wild-jack-81",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeWazdanWave4(slug: string) {
  return gameTypes[slug];
}
