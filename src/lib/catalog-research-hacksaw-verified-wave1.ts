import type { CatalogResearch } from "./catalog-research";

const verifiedAt = "2026-09-13";

const research: Record<string, CatalogResearch> = {
  "hacksaw-gaming-bouncy-bombs": {
    mechanics: ["Каскады"], source: "https://www.hacksawgaming.com/games/bouncy-bombs", verifiedAt,
    evidence: "Official Cascading Dynamite Bomb rules explicitly describe successive cascades.",
  },
  "hacksaw-gaming-death-becomes-you": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/death-becomes-you", verifiedAt,
    evidence: "Official GAME DATA lists the win type as Paylines.",
  },
  "hacksaw-gaming-get-the-cheese": {
    mechanics: ["Кластеры", "Каскады"], source: "https://www.hacksawgaming.com/games/get-the-cheese", verifiedAt,
    evidence: "Official rules describe winning clusters and Super Cascades that remove winning symbols before new symbols drop.",
  },
  "hacksaw-gaming-hounds-of-hell": {
    mechanics: ["Каскады"], source: "https://www.hacksawgaming.com/games/hounds-of-hell", verifiedAt,
    evidence: "Official feature description states that a winning symbol cascades.",
  },
  "hacksaw-gaming-le-football-fan": {
    mechanics: ["Кластеры"], source: "https://www.hacksawgaming.com/games/le-football-fan", verifiedAt,
    evidence: "Official GAME DATA lists the win type as Cluster.",
  },
  "hacksaw-gaming-le-prechaun": {
    mechanics: ["Кластеры"], source: "https://www.hacksawgaming.com/games/le-prechaun", verifiedAt,
    evidence: "Official GAME DATA lists the win type as Cluster.",
  },
  "hacksaw-gaming-magic-piggy-og": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/magic-piggy-og", verifiedAt,
    evidence: "Official GAME DATA lists the win type as Paylines.",
  },
  "hacksaw-gaming-marlin-masters-og": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/marlin-masters-og", verifiedAt,
    evidence: "Official description identifies a 5-reel, 3-row game with payline wins.",
  },
  "hacksaw-gaming-marlin-masters-the-big-haul": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/marlin-masters-the-big-haul", verifiedAt,
    evidence: "Official description identifies a 5-reel, 4-row game with payline wins.",
  },
  "hacksaw-gaming-mayan-stackways": {
    mechanics: ["Способы"], source: "https://www.hacksawgaming.com/games/mayan-stackways", verifiedAt,
    evidence: "Official description identifies a 5-reel, 4-row ways-win slot with up to 100,000 ways.",
  },
  "hacksaw-gaming-mighty-masks": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/mighty-masks", verifiedAt,
    evidence: "Official GAME DATA lists 20 paylines.",
  },
  "hacksaw-gaming-munchy-milo": {
    mechanics: ["Кластеры"], source: "https://www.hacksawgaming.com/games/munchy-milo", verifiedAt,
    evidence: "Official game description explicitly refers to winning clusters.",
  },
  "hacksaw-gaming-orb-of-destiny": {
    mechanics: ["Линии"], source: "https://www.hacksawgaming.com/games/orb-of-destiny", verifiedAt,
    evidence: "Official page lists Paylines as the win type and specifies 14 winning lines.",
  },
};

export function getCatalogResearchHacksawVerifiedWave1(slug: string) {
  return research[slug];
}
