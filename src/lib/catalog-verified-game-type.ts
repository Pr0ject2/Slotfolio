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
  "playn-go-beasts-of-fire": { gameType: "Video Slot", source: "https://www.playngo.com/games/beasts-of-fire", verifiedAt },
  "playn-go-black-mamba": { gameType: "Grid Slot", source: "https://www.playngo.com/games/black-mamba", verifiedAt },
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
