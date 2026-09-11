const verifiedAt = "2026-09-11";

export type CatalogVerifiedGameType = {
  gameType: "Video Slot" | "Grid Slot";
  source: string;
  verifiedAt: string;
};

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-5x-magic": { gameType: "Video Slot", source: "https://www.playngo.com/games/5x-magic", verifiedAt },
  "playn-go-7-sins": { gameType: "Video Slot", source: "https://www.playngo.com/games/7-sins", verifiedAt },
  "playn-go-agent-destiny": { gameType: "Video Slot", source: "https://www.playngo.com/games/agent-destiny", verifiedAt },
  "playn-go-agent-of-hearts": { gameType: "Grid Slot", source: "https://www.playngo.com/games/agent-of-hearts", verifiedAt },
  "playn-go-alice-cooper-and-the-tome-of-madness": { gameType: "Grid Slot", source: "https://www.playngo.com/games/alice-cooper-and-the-tome-of-madness", verifiedAt },
  "playn-go-ankh-of-anubis": { gameType: "Video Slot", source: "https://www.playngo.com/games/ankh-of-anubis", verifiedAt },
  "playn-go-ankh-of-anubis-awakening": { gameType: "Video Slot", source: "https://www.playngo.com/games/ankh-of-anubis-awakening", verifiedAt },
  "playn-go-athena-ascending": { gameType: "Video Slot", source: "https://www.playngo.com/games/athena-ascending", verifiedAt },
  "playn-go-aztec-idols": { gameType: "Video Slot", source: "https://www.playngo.com/games/aztec-idols", verifiedAt },
  "playn-go-aztec-warrior-princess": { gameType: "Video Slot", source: "https://www.playngo.com/games/aztec-warrior-princess", verifiedAt },
  "playn-go-bakers-treat": { gameType: "Video Slot", source: "https://www.playngo.com/games/baker's-treat", verifiedAt },
  "playn-go-banana-rock": { gameType: "Video Slot", source: "https://www.playngo.com/games/banana-rock", verifiedAt },
  "playn-go-banana-rush": { gameType: "Video Slot", source: "https://www.playngo.com/games/banana-rush", verifiedAt },
  "playn-go-banquet-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/banquet-of-dead", verifiedAt },
  "playn-go-bao-shi": { gameType: "Video Slot", source: "https://www.playngo.com/games/bao-shi", verifiedAt },
  "playn-go-barn-busters": { gameType: "Video Slot", source: "https://www.playngo.com/games/barn-busters", verifiedAt },
  "playn-go-baron-lord-of-saturday": { gameType: "Video Slot", source: "https://www.playngo.com/games/baron%3A-lord-of-saturday", verifiedAt },
  "playn-go-battle-royal": { gameType: "Video Slot", source: "https://www.playngo.com/games/battle-royal", verifiedAt },
  "playn-go-beasts-of-fire": { gameType: "Video Slot", source: "https://www.playngo.com/games/beasts-of-fire", verifiedAt },
  "playn-go-beasts-of-fire-maximum": { gameType: "Video Slot", source: "https://www.playngo.com/games/beasts-of-fire-maximum", verifiedAt },
  "playn-go-big-win-777": { gameType: "Video Slot", source: "https://www.playngo.com/games/big-win-777", verifiedAt },
  "playn-go-black-mamba": { gameType: "Grid Slot", source: "https://www.playngo.com/games/black-mamba", verifiedAt },
  "playn-go-boat-bonanza": { gameType: "Video Slot", source: "https://www.playngo.com/games/boat-bonanza", verifiedAt },
  "playn-go-boat-bonanza-croconile": { gameType: "Video Slot", source: "https://www.playngo.com/games/boat-bonanza-croconile!", verifiedAt },
  "playn-go-bull-in-a-china-shop": { gameType: "Video Slot", source: "https://www.playngo.com/games/bull-in-a-china-shop", verifiedAt },
  "playn-go-cats-and-cash": { gameType: "Video Slot", source: "https://www.playngo.com/games/cats-and-cash", verifiedAt },
  "playn-go-chronos-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/chronos-joker", verifiedAt },
  "playn-go-city-of-sound": { gameType: "Video Slot", source: "https://www.playngo.com/games/city-of-sound", verifiedAt },
  "playn-go-cloud-quest": { gameType: "Grid Slot", source: "https://www.playngo.com/games/cloud-quest", verifiedAt },
  "playn-go-coils-of-cash": { gameType: "Video Slot", source: "https://www.playngo.com/games/coils-of-cash", verifiedAt },
  "playn-go-colt-lightning-inferno": { gameType: "Video Slot", source: "https://www.playngo.com/games/colt-lightning-inferno", verifiedAt },
  "playn-go-contact": { gameType: "Grid Slot", source: "https://www.playngo.com/games/contact", verifiedAt },
  "playn-go-gemix": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gemix", verifiedAt },
  "playn-go-gemix-100": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gemix-100", verifiedAt },
  "playn-go-moon-princess": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess", verifiedAt },
  "playn-go-moon-princess-extreme": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-extreme", verifiedAt },
  "playn-go-moon-princess-origins": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-origins", verifiedAt },
  "playn-go-moon-princess-trinity": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-trinity", verifiedAt },
  "playn-go-wizard-of-gems": { gameType: "Video Slot", source: "https://www.playngo.com/games/wizard-of-gems", verifiedAt },
};

export function getVerifiedCatalogGameType(slug: string) {
  return gameTypes[slug];
}
