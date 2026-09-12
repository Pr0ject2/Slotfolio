import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-13";

const sources: Record<string, string> = {
  "hacksaw-gaming-aiko-and-the-wind-spirit": "https://www.hacksawgaming.com/games/aiko-and-the-wind-spirit",
  "hacksaw-gaming-army-of-ares": "https://www.hacksawgaming.com/games/army-of-ares",
  "hacksaw-gaming-bash-bros": "https://www.hacksawgaming.com/games/bash-bros",
  "hacksaw-gaming-booze-bash": "https://www.hacksawgaming.com/games/booze-bash",
  "hacksaw-gaming-bouncy-bombs": "https://www.hacksawgaming.com/games/bouncy-bombs",
  "hacksaw-gaming-chaos-crew-3": "https://www.hacksawgaming.com/games/chaos-crew-3",
  "hacksaw-gaming-circle-of-life": "https://www.hacksawgaming.com/games/circle-of-life",
  "hacksaw-gaming-dandy-diamonds": "https://www.hacksawgaming.com/games/dandy-diamonds",
  "hacksaw-gaming-death-becomes-you": "https://www.hacksawgaming.com/games/death-becomes-you",
  "hacksaw-gaming-dorks-of-the-deep": "https://www.hacksawgaming.com/games/dorks-of-the-deep",
  "hacksaw-gaming-duel-at-dawn": "https://www.hacksawgaming.com/games/duel-at-dawn",
  "hacksaw-gaming-dynasty-of-death": "https://www.hacksawgaming.com/games/dynasty-of-death",
  "hacksaw-gaming-epic-bullets-and-bounty": "https://www.hacksawgaming.com/games/epic-bullets-and-bounty",
  "hacksaw-gaming-eternal-duel": "https://www.hacksawgaming.com/games/eternal-duel",
  "hacksaw-gaming-freds-food-truck": "https://www.hacksawgaming.com/games/freds-food-truck",
  "hacksaw-gaming-get-the-cheese": "https://www.hacksawgaming.com/games/get-the-cheese",
  "hacksaw-gaming-hot-ross": "https://www.hacksawgaming.com/games/hot-ross",
  "hacksaw-gaming-hounds-of-hell": "https://www.hacksawgaming.com/games/hounds-of-hell",
  "hacksaw-gaming-jaws-of-justice": "https://www.hacksawgaming.com/games/jaws-of-justice",
  "hacksaw-gaming-le-digger": "https://www.hacksawgaming.com/games/le-digger",
  "hacksaw-gaming-le-fisherman": "https://www.hacksawgaming.com/games/le-fisherman",
  "hacksaw-gaming-le-football-fan": "https://www.hacksawgaming.com/games/le-football-fan",
  "hacksaw-gaming-le-king": "https://www.hacksawgaming.com/games/le-king",
  "hacksaw-gaming-le-pharaoh": "https://www.hacksawgaming.com/games/le-pharaoh",
  "hacksaw-gaming-le-prechaun": "https://www.hacksawgaming.com/games/le-prechaun",
  "hacksaw-gaming-le-santa": "https://www.hacksawgaming.com/games/le-santa",
  "hacksaw-gaming-le-viking": "https://www.hacksawgaming.com/games/le-viking",
  "hacksaw-gaming-le-zeus": "https://www.hacksawgaming.com/games/le-zeus",
  "hacksaw-gaming-magic-piggy-og": "https://www.hacksawgaming.com/games/magic-piggy-og",
  "hacksaw-gaming-marlin-masters": "https://www.hacksawgaming.com/games/marlin-masters",
  "hacksaw-gaming-marlin-masters-atlantis": "https://www.hacksawgaming.com/games/marlin-masters-atlantis",
  "hacksaw-gaming-marlin-masters-og": "https://www.hacksawgaming.com/games/marlin-masters-og",
  "hacksaw-gaming-marlin-masters-the-big-haul": "https://www.hacksawgaming.com/games/marlin-masters-the-big-haul",
  "hacksaw-gaming-mayan-stackways": "https://www.hacksawgaming.com/games/mayan-stackways",
  "hacksaw-gaming-miami-mayhem": "https://www.hacksawgaming.com/games/miami-mayhem",
  "hacksaw-gaming-mighty-masks": "https://www.hacksawgaming.com/games/mighty-masks",
  "hacksaw-gaming-munchy-milo": "https://www.hacksawgaming.com/games/munchy-milo",
  "hacksaw-gaming-octo-attack": "https://www.hacksawgaming.com/games/octo-attack",
  "hacksaw-gaming-orb-of-destiny": "https://www.hacksawgaming.com/games/orb-of-destiny",
  "hacksaw-gaming-phoenix-duelreels": "https://www.hacksawgaming.com/games/phoenix-duelreels",
};

const gameTypes = Object.fromEntries(
  Object.entries(sources).map(([slug, source]) => [slug, { gameType: "Slots", source, verifiedAt }]),
) as Record<string, CatalogVerifiedGameType>;

export function getVerifiedCatalogGameTypeHacksawWave1(slug: string) {
  return gameTypes[slug];
}
