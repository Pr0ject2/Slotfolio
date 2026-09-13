import { test, expect } from "@playwright/test";
import { catalogSeeds } from "../src/lib/catalog-seeds";
import { slots } from "../src/lib/data";
import { getVerifiedCatalogDetails } from "../src/lib/catalog-verified-details-lookup";
import { getVerifiedCatalogGameType } from "../src/lib/catalog-verified-game-type";
import { getVerifiedCatalogResearch } from "../src/lib/catalog-research-lookup";

const providers = ["Wazdan", "BGaming", "Endorphina", "Push Gaming", "3 Oaks Gaming", "Play’n GO", "Hacksaw Gaming", "Nolimit City"];
const detailedSeeds = providers.map((provider) =>
  catalogSeeds.find((seed) => seed.provider === provider && getVerifiedCatalogDetails(seed.slug)),
);

const playngoWave10Slugs = [
  "playn-go-5x-magic",
  "playn-go-7-sins",
  "playn-go-agent-destiny",
  "playn-go-agent-of-hearts",
  "playn-go-alice-cooper-and-the-tome-of-madness",
  "playn-go-ankh-of-anubis",
  "playn-go-ankh-of-anubis-awakening",
  "playn-go-athena-ascending",
  "playn-go-aztec-idols",
  "playn-go-aztec-warrior-princess",
];

const playngoWave11Slugs = [
  "playn-go-bakers-treat",
  "playn-go-banana-rock",
  "playn-go-banana-rush",
  "playn-go-banquet-of-dead",
  "playn-go-bao-shi",
  "playn-go-barn-busters",
  "playn-go-baron-lord-of-saturday",
  "playn-go-battle-royal",
  "playn-go-beasts-of-fire-maximum",
  "playn-go-big-win-777",
];

const playngoWave12Slugs = [
  "playn-go-boat-bonanza",
  "playn-go-boat-bonanza-croconile",
  "playn-go-bull-in-a-china-shop",
  "playn-go-cats-and-cash",
  "playn-go-chronos-joker",
  "playn-go-city-of-sound",
  "playn-go-cloud-quest",
  "playn-go-coils-of-cash",
  "playn-go-colt-lightning-inferno",
  "playn-go-contact",
];

const playngoWave13Slugs = [
  "playn-go-cops-n-robbers",
  "playn-go-count-jokula",
  "playn-go-coywolf-cash",
  "playn-go-crabbys-gold",
  "playn-go-crabbys-gold-ii",
  "playn-go-crystal-hall",
  "playn-go-crystal-sun",
  "playn-go-dawn-of-egypt",
  "playn-go-def-leppard-hysteria",
  "playn-go-demon",
];

const playngoWave14Slugs = [
  "playn-go-diamond-vortex",
  "playn-go-dio-killing-the-dragon",
  "playn-go-disco-diamonds",
  "playn-go-divina-commedia-i-nove-cerchi",
  "playn-go-divine-showdown",
  "playn-go-doom-of-egypt",
  "playn-go-dr-toonz",
  "playn-go-dragon-maiden",
  "playn-go-dragon-ship",
  "playn-go-dragonfates-favor",
];

const playngoWave15To18Slugs = [
  "playn-go-easter-eggs",
  "playn-go-easter-eggspedition",
  "playn-go-enchanted-crystals",
  "playn-go-enchanted-meadow",
  "playn-go-energoonz",
  "playn-go-eye-of-atum",
  "playn-go-eye-of-the-kraken",
  "playn-go-fangs-and-fire",
  "playn-go-fat-frankies",
  "playn-go-fate-of-dead-blitzways",
  "playn-go-fates-fortune",
  "playn-go-feline-fury",
  "playn-go-fire-joker-100",
  "playn-go-fire-joker-blitz",
  "playn-go-fire-joker-freeze",
  "playn-go-fire-toad",
  "playn-go-fire-toad-2",
  "playn-go-firefly-frenzy",
  "playn-go-forge-of-fortunes",
  "playn-go-forge-of-gems",
  "playn-go-fortune-teller",
  "playn-go-fortunes-of-ali-baba",
  "playn-go-fox-mayhem",
  "playn-go-free-reelin-joker",
  "playn-go-free-reelin-joker-1000",
  "playn-go-frozen-gems",
  "playn-go-fu-er-dai",
  "playn-go-fulong-88",
  "playn-go-game-of-gladiators",
  "playn-go-game-of-gladiators-uprising",
  "playn-go-gargantoonz",
  "playn-go-gates-of-troy",
  "playn-go-gemix-2",
  "playn-go-gerards-gambit",
  "playn-go-ghost-of-dead",
  "playn-go-gigantoonz",
  "playn-go-gnawn-gold",
  "playn-go-gold-king",
];

const playngoGoldHSlugs = [
  "playn-go-gold-of-fortune-god",
  "playn-go-gold-trophy-2",
  "playn-go-gold-volcano",
  "playn-go-golden-caravan",
  "playn-go-golden-colts",
  "playn-go-golden-legend",
  "playn-go-golden-osiris",
  "playn-go-golden-ticket",
  "playn-go-golden-ticket-2",
  "playn-go-grannys-wild",
  "playn-go-hammerfall",
  "playn-go-happy-halloween",
  "playn-go-helloween",
  "playn-go-highway-legends",
  "playn-go-holiday-season",
  "playn-go-holiday-spirits",
  "playn-go-holy-moo-extreme-power",
  "playn-go-honey-rush",
  "playn-go-honey-rush-100",
  "playn-go-honey-rush-black-and-yellow",
  "playn-go-hooligan-hustle",
  "playn-go-hope-unleashed-fortune-rises",
  "playn-go-hot-dog-heist",
  "playn-go-hotel-yeti-way",
  "playn-go-house-of-doom",
  "playn-go-house-of-doom-2-the-crypt",
  "playn-go-hugo",
  "playn-go-hugo-2",
  "playn-go-hugo-carts",
  "playn-go-hugo-goal",
  "playn-go-hugo-legacy",
  "playn-go-hugos-adventure",
  "playn-go-ice-joker",
  "playn-go-idol-of-fortune",
];

const playngoIJSlugs = [
  "playn-go-immortails-of-egypt",
  "playn-go-imperial-opera",
  "playn-go-infernal-trinity-go-guaranteed",
  "playn-go-inferno-joker",
  "playn-go-inferno-star",
  "playn-go-invading-vegas",
  "playn-go-invading-vegas-revenge-on-mars",
  "playn-go-invading-vegas-las-christmas",
  "playn-go-irish-gold",
  "playn-go-iron-girl",
  "playn-go-jade-magician",
  "playn-go-jewel-box",
  "playn-go-joker-flip",
  "playn-go-jolly-roger",
  "playn-go-jolly-roger-2",
  "playn-go-jolly-roger-wild-kraken",
  "playn-go-journey-to-paris",
];

const playngoKLSlugs = [
  "playn-go-king-of-sweets",
  "playn-go-kings-mask",
  "playn-go-kings-mask-eclipse-of-gods",
  "playn-go-kingdom-below",
  "playn-go-kiss-reels-of-rock",
  "playn-go-lab-of-madness-its-a-wild",
  "playn-go-lady-of-fortune",
  "playn-go-lady-of-fortune-destiny-spins",
  "playn-go-lady-of-fortune-remastered",
  "playn-go-lawn-n-disorder",
  "playn-go-legacy-of-dynasties",
  "playn-go-legacy-of-egypt",
  "playn-go-legacy-of-gems-blitzways",
  "playn-go-legacy-of-inca",
  "playn-go-legacy-of-undead-dragon-abyssways",
  "playn-go-legend-of-the-ice-dragon",
  "playn-go-legion-gold",
  "playn-go-legion-gold-and-the-sphinx-of-dead",
  "playn-go-legion-gold-and-the-throne-of-dead",
  "playn-go-legion-gold-reckoning",
  "playn-go-legion-gold-unleashed",
];

const playngoMNSlugs = [
  "playn-go-madame-ink",
  "playn-go-mafia-gold",
  "playn-go-mahjong-88",
  "playn-go-manta-mayhem",
  "playn-go-matsuri",
  "playn-go-medusas-madness",
  "playn-go-mega-don",
  "playn-go-mega-don-triple-threat",
  "playn-go-mega-don-feeding-frenzy",
  "playn-go-merlin-and-the-ice-queen-morgana",
  "playn-go-merlin-realm-of-charm",
  "playn-go-merlin-journey-of-flame",
  "playn-go-merlins-grimoire",
  "playn-go-mermaids-diamond",
  "playn-go-merry-xmas",
  "playn-go-midnight-gold",
  "playn-go-miner-donkey-trouble",
  "playn-go-mirror-joker",
  "playn-go-mission-cash",
  "playn-go-monkey-battle-for-the-scrolls",
  "playn-go-moon-princess",
  "playn-go-moon-princess-100",
  "playn-go-moon-princess-extreme",
  "playn-go-moon-princess-origins",
  "playn-go-moon-princess-power-of-love",
  "playn-go-moon-princess-stargazing",
  "playn-go-moon-princess-trinity",
  "playn-go-moon-princess-christmas-kingdom",
  "playn-go-motley-crue",
  "playn-go-mount-m",
  "playn-go-muerto-en-mictlan",
  "playn-go-multifruit-81",
  "playn-go-mystery-egg-surprise",
  "playn-go-mystery-genie-fortunes-of-the-lamp",
  "playn-go-mystery-joker",
  "playn-go-myth",
  "playn-go-myth-of-dead",
  "playn-go-naughty-nicks-book",
  "playn-go-new-year-riches",
  "playn-go-ninja-fruits",
];

const playngoOPSlugs = [
  "playn-go-oasis-of-dead",
  "playn-go-octopus-treasure",
  "playn-go-odin-protector-of-realms",
  "playn-go-pack-and-cash",
  "playn-go-pandastic-adventure",
  "playn-go-pandoras-box-of-evil",
  "playn-go-pearl-lagoon",
  "playn-go-pearls-of-india",
  "playn-go-perfect-gems",
  "playn-go-phoenix-reborn",
  "playn-go-photo-safari",
  "playn-go-piggy-bank-farm",
  "playn-go-piggy-blitz",
  "playn-go-piggy-blitz-casino-gold",
  "playn-go-piggy-blitz-disco-gold",
  "playn-go-piggy-heist",
  "playn-go-pilgrim-of-dead",
  "playn-go-pimped",
  "playn-go-piranha-pays",
  "playn-go-planet-fortune",
  "playn-go-playn-go-buffalo-of-wealth",
  "playn-go-playn-go-mole-digger",
  "playn-go-playn-go-wrappin-gold",
  "playn-go-potion-of-madness",
  "playn-go-primal-rampage",
  "playn-go-prism-of-gems",
  "playn-go-prissy-princess",
  "playn-go-prosperity-palace",
  "playn-go-puebla-parade",
];

const playngoQRSlugs = [
  "playn-go-queens-day-tilt",
  "playn-go-rabbit-hole-riches",
  "playn-go-rabbit-hole-riches-court-of-hearts",
  "playn-go-rage-to-riches",
  "playn-go-raging-rex",
  "playn-go-raging-rex-2",
];

const wazdanWave1Slugs = [
  "wazdan-12-coins",
  "wazdan-12-coins-grand-diamond-edition",
  "wazdan-12-coins-grand-gold-edition",
  "wazdan-12-coins-grand-platinum-edition",
  "wazdan-15-coins",
  "wazdan-15-coins-grand-diamond-edition",
  "wazdan-15-coins-grand-gold-edition",
  "wazdan-15-coins-grand-platinum-edition",
  "wazdan-16-coins",
  "wazdan-16-coins-grand-gold-edition",
  "wazdan-16-coins-grand-platinum-edition",
  "wazdan-16-coins-x5000",
  "wazdan-20-coins",
  "wazdan-20-coins-grand-gold-edition",
  "wazdan-24-coins",
  "wazdan-25-coins",
  "wazdan-25-coins-grand-gold-edition",
  "wazdan-25-coins-x3000",
  "wazdan-30-coins",
  "wazdan-30-coins-grand-gold-edition",
  "wazdan-36-coins",
  "wazdan-36-coins-grand-gold-edition",
  "wazdan-9-balls",
  "wazdan-9-bells",
  "wazdan-9-burning-dragons",
  "wazdan-9-burning-stars",
  "wazdan-9-coins",
  "wazdan-9-coins-1000-edition",
  "wazdan-9-coins-extremely-light",
  "wazdan-9-coins-grand-diamond-edition",
  "wazdan-9-coins-grand-gold-edition",
  "wazdan-9-coins-grand-platinum-edition",
  "wazdan-9-lions",
  "wazdan-9-lions-hold-the-jackpot",
  "wazdan-beauty-fruity",
  "wazdan-bumba-meu-boi-coin",
  "wazdan-burning-stars-3",
  "wazdan-burning-sun",
  "wazdan-burning-sun-extremely-light",
  "wazdan-butterfly-lovers",
];

const wazdanWave2Slugs = [
  "wazdan-cash-grotto",
  "wazdan-double-tigers",
  "wazdan-dwarfs-fortune",
  "wazdan-easter-coins",
  "wazdan-eggs-of-fortune",
  "wazdan-fishermans-luck",
  "wazdan-football-mania",
  "wazdan-football-mania-deluxe",
  "wazdan-fruit-mania",
  "wazdan-fruit-mania-deluxe",
  "wazdan-fruits-go-bananas",
  "wazdan-gem-splitter",
  "wazdan-golden-sphinx",
  "wazdan-good-luck-40",
  "wazdan-great-book-of-magic",
  "wazdan-great-book-of-magic-deluxe",
  "wazdan-haunted-coins-x1000",
  "wazdan-haunted-hospital",
  "wazdan-highschool-manga",
  "wazdan-highway-to-hell",
  "wazdan-highway-to-hell-deluxe",
  "wazdan-hot-777-deluxe",
  "wazdan-hot-party",
  "wazdan-hot-party-deluxe",
  "wazdan-hot-slot-777-crown-extremely-light",
  "wazdan-hot-slot-diamond-coins",
  "wazdan-hot-slot-magic-pearls",
  "wazdan-hot-slot-mystery-jackpot-joker",
  "wazdan-hot-slot-platinum-coins",
  "wazdan-hungry-shark",
  "wazdan-in-the-forest",
  "wazdan-infinity-hero",
  "wazdan-jacks-ride",
  "wazdan-joker-explosion",
  "wazdan-juicy-reels",
  "wazdan-jumping-fruits",
  "wazdan-kick-off",
  "wazdan-larry-the-leprechaun",
  "wazdan-los-muertos",
  "wazdan-los-muertos-ii",
];

const wazdanWave3Slugs = [
  "wazdan-lost-treasure",
  "wazdan-magic-eggs",
  "wazdan-magic-fruit-cherries",
  "wazdan-magic-fruit-oranges",
  "wazdan-magic-hot",
  "wazdan-magic-hot-4",
  "wazdan-magic-of-the-ring",
  "wazdan-magic-of-the-ring-deluxe",
  "wazdan-magic-stars",
  "wazdan-magic-stars-9",
  "wazdan-mighty-crown-empire-of-gold",
  "wazdan-mighty-crown-legacy-of-mars",
  "wazdan-mighty-fish-blue-marlin",
  "wazdan-mighty-symbols-crowns",
  "wazdan-mighty-symbols-diamonds",
  "wazdan-mighty-symbols-jokers",
  "wazdan-mighty-symbols-sevens",
  "wazdan-mighty-wild-gorilla",
  "wazdan-mighty-wild-jaguar",
  "wazdan-mighty-wild-panther-grand-gold-edition",
  "wazdan-mighty-wild-panther-grand-platinum-edition",
  "wazdan-moon-of-fortune",
  "wazdan-neon-city",
  "wazdan-one-coin",
  "wazdan-ox-coin",
  "wazdan-power-of-gods-egypt",
  "wazdan-power-of-gods-hades",
  "wazdan-power-of-gods-medusa",
  "wazdan-power-of-gods-medusa-extremely-light",
  "wazdan-power-of-gods-the-pantheon",
  "wazdan-power-of-gods-valhalla",
  "wazdan-power-of-gods-valhalla-extremely-light",
  "wazdan-power-of-sun-svarog",
  "wazdan-prosperity-pearls",
  "wazdan-santas-gifts-frenzy",
  "wazdan-sizzling-eggs-grand-gold-edition",
  "wazdan-sizzling-eggs-grand-platinum-edition",
  "wazdan-sizzling-moon",
  "wazdan-slot-jam",
  "wazdan-sonic-reels",
];

const wazdanWave4Slugs = [
  "wazdan-space-gem",
  "wazdan-space-spins",
  "wazdan-spectrum",
  "wazdan-sun-of-fortune",
  "wazdan-super-hot",
  "wazdan-throne-of-elements-platinum",
  "wazdan-mighty-wild-panther-grand-diamond-edition",
  "wazdan-triple-star",
  "wazdan-unicorn-reels",
  "wazdan-valentines-coins",
  "wazdan-valhalla",
  "wazdan-vegas-hot",
  "wazdan-vegas-reels-ii",
  "wazdan-welcome-to-hell-81",
  "wazdan-wild-girls",
  "wazdan-wild-guns",
  "wazdan-wild-jack",
  "wazdan-wild-jack-81",
];

const hacksawVerifiedWave1Slugs = [
  "hacksaw-gaming-aiko-and-the-wind-spirit",
  "hacksaw-gaming-army-of-ares",
  "hacksaw-gaming-bash-bros",
  "hacksaw-gaming-booze-bash",
  "hacksaw-gaming-bouncy-bombs",
  "hacksaw-gaming-chaos-crew-3",
  "hacksaw-gaming-circle-of-life",
  "hacksaw-gaming-dandy-diamonds",
  "hacksaw-gaming-death-becomes-you",
  "hacksaw-gaming-dorks-of-the-deep",
  "hacksaw-gaming-duel-at-dawn",
  "hacksaw-gaming-dynasty-of-death",
  "hacksaw-gaming-epic-bullets-and-bounty",
  "hacksaw-gaming-eternal-duel",
  "hacksaw-gaming-freds-food-truck",
  "hacksaw-gaming-get-the-cheese",
  "hacksaw-gaming-hot-ross",
  "hacksaw-gaming-hounds-of-hell",
  "hacksaw-gaming-jaws-of-justice",
  "hacksaw-gaming-le-digger",
  "hacksaw-gaming-le-fisherman",
  "hacksaw-gaming-le-football-fan",
  "hacksaw-gaming-le-king",
  "hacksaw-gaming-le-pharaoh",
  "hacksaw-gaming-le-prechaun",
  "hacksaw-gaming-le-santa",
  "hacksaw-gaming-le-viking",
  "hacksaw-gaming-le-zeus",
  "hacksaw-gaming-magic-piggy-og",
  "hacksaw-gaming-marlin-masters",
  "hacksaw-gaming-marlin-masters-atlantis",
  "hacksaw-gaming-marlin-masters-og",
  "hacksaw-gaming-marlin-masters-the-big-haul",
  "hacksaw-gaming-mayan-stackways",
  "hacksaw-gaming-miami-mayhem",
  "hacksaw-gaming-mighty-masks",
  "hacksaw-gaming-munchy-milo",
  "hacksaw-gaming-octo-attack",
  "hacksaw-gaming-orb-of-destiny",
  "hacksaw-gaming-phoenix-duelreels",
];

const hacksawVerifiedFinalSlugs = [
  "hacksaw-gaming-pray-for-three",
  "hacksaw-gaming-rise-of-fortuna",
  "hacksaw-gaming-sixsixsix",
  "hacksaw-gaming-spear-of-athena",
  "hacksaw-gaming-spinman",
  "hacksaw-gaming-stormborn",
  "hacksaw-gaming-strength-of-hercules",
  "hacksaw-gaming-the-count",
  "hacksaw-gaming-the-wildwood-curse",
  "hacksaw-gaming-tiger-legends",
  "hacksaw-gaming-toshi-ways-club",
  "hacksaw-gaming-ultimate-slot-of-america",
  "hacksaw-gaming-wings-of-horus",
  "hacksaw-gaming-zeus-ze-zecond",
];

const threeOaksVerifiedWave1Slugs = [
  "3-oaks-gaming-3-jewel-crowns",
  "3-oaks-gaming-3-super-coin-volcanoes",
  "3-oaks-gaming-3-super-hot-teapots",
  "3-oaks-gaming-4-fortune-clovers",
  "3-oaks-gaming-china-festival",
  "3-oaks-gaming-coin-lamp",
  "3-oaks-gaming-coin-up-volcano",
  "3-oaks-gaming-coin-up-hot-fire",
  "3-oaks-gaming-coin-volcano",
  "3-oaks-gaming-coin-volcano-2",
  "3-oaks-gaming-crystal-scarabs",
  "3-oaks-gaming-dragon-pearls",
  "3-oaks-gaming-gold-nuggets",
  "3-oaks-gaming-lava-coins",
  "3-oaks-gaming-lava-coins-2",
  "3-oaks-gaming-little-farm",
  "3-oaks-gaming-lord-of-thunder",
  "3-oaks-gaming-lucky-apple-x1000",
  "3-oaks-gaming-lucky-penny",
  "3-oaks-gaming-lucky-penny-2",
  "3-oaks-gaming-lucky-penny-3-pots-super-wheel",
  "3-oaks-gaming-lucky-penny-power-scatter",
  "3-oaks-gaming-magic-apple",
  "3-oaks-gaming-magic-apple-2",
  "3-oaks-gaming-magic-clovers",
  "3-oaks-gaming-moon-sisters",
  "3-oaks-gaming-more-magic-apple",
  "3-oaks-gaming-power-sun",
  "3-oaks-gaming-power-sun-xxl",
  "3-oaks-gaming-purple-diamond",
  "3-oaks-gaming-rio-gems",
  "3-oaks-gaming-rush-for-gold",
  "3-oaks-gaming-sky-pearls",
  "3-oaks-gaming-space-coins",
  "3-oaks-gaming-sun-of-egypt",
  "3-oaks-gaming-sun-of-egypt-2",
  "3-oaks-gaming-sun-of-egypt-3",
  "3-oaks-gaming-sun-of-egypt-4",
  "3-oaks-gaming-sun-of-egypt-5",
  "3-oaks-gaming-sunlight-princess",
];

test("verified catalog details render without promoting records to dossiers", async ({ page }) => {
  expect(detailedSeeds.every(Boolean)).toBe(true);

  for (const seed of detailedSeeds) {
    expect(seed).toBeTruthy();
    const details = getVerifiedCatalogDetails(seed!.slug)!;
    const gameType = getVerifiedCatalogGameType(seed!.slug);
    expect(details.source).toBe(seed!.source);
    if (gameType) expect(gameType.source).toBe(seed!.source);

    await page.goto(`/slots/catalog/${seed!.slug}`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator(".catalog-record-heading").getByText("Базовая запись", { exact: true })).toBeVisible();
    await expect(page.getByText("Технические данные проверены", { exact: true })).toBeVisible();
    if (gameType) await expect(page.locator(".catalog-record-facts").getByText(gameType.gameType, { exact: true })).toBeVisible();
    if (details.field) await expect(page.getByText(details.field, { exact: true })).toBeVisible();
    if (details.rtp) await expect(page.getByText(details.rtp, { exact: true })).toBeVisible();
    if (details.maxWin) await expect(page.getByText(details.maxWin, { exact: true })).toBeVisible();
    if (details.volatility) await expect(page.getByText(details.volatility, { exact: true })).toBeVisible();
    if (details.releaseDate) {
      await expect(page.getByText(details.releaseDate.split("-").reverse().join("."), { exact: true })).toBeVisible();
    }
    await expect(page.getByRole("link", { name: /Официальный каталог/ })).toHaveAttribute("href", seed!.source);
  }
});

test("new Play’n GO technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of [
    ...playngoWave10Slugs,
    ...playngoWave11Slugs,
    ...playngoWave12Slugs,
    ...playngoWave13Slugs,
    ...playngoWave14Slugs,
    ...playngoWave15To18Slugs,
    ...playngoGoldHSlugs,
    ...playngoIJSlugs,
    ...playngoKLSlugs,
    ...playngoMNSlugs,
    ...playngoOPSlugs,
    ...playngoQRSlugs,
  ]) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    if (playngoOPSlugs.includes(slug)) {
      expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe(
        slug === "playn-go-odin-protector-of-realms" ? "Grid Slot" : "Video Slot",
      );
    }
    if (playngoQRSlugs.includes(slug)) {
      expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe(
        slug === "playn-go-queens-day-tilt" ? "Grid Slot" : "Video Slot",
      );
    }
  }
});

test("new Wazdan technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of wazdanWave1Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");
  }
});

test("Wazdan wave 2 technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of wazdanWave2Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");
  }
});

test("Wazdan wave 3 technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of wazdanWave3Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");
  }
});

test("Wazdan wave 4 technical records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of wazdanWave4Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);

    if (slug === "wazdan-valentines-coins") {
      expect(getVerifiedCatalogGameType(slug), slug).toBeUndefined();
    } else {
      expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
      expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");
    }
  }

  expect(getVerifiedCatalogDetails("wazdan-three-cards")).toBeUndefined();
  expect(getVerifiedCatalogGameType("wazdan-three-cards")).toBeUndefined();
});

test("Hacksaw verified wave 1 records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of hacksawVerifiedWave1Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");

    const details = getVerifiedCatalogDetails(slug);
    const research = getVerifiedCatalogResearch(slug);
    if (details) expect(details.source, slug).toBe(seed!.source);
    if (research) expect(research.source, slug).toBe(seed!.source);
  }
});

test("Hacksaw final records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of hacksawVerifiedFinalSlugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogGameType(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug)?.gameType, slug).toBe("Slots");

    const details = getVerifiedCatalogDetails(slug);
    const research = getVerifiedCatalogResearch(slug);
    if (details) expect(details.source, slug).toBe(seed!.source);
    if (research) expect(research.source, slug).toBe(seed!.source);
  }
});

test("3 Oaks verified wave 1 records stay selected and keep exact official sources", () => {
  const selected = new Map(catalogSeeds.map((seed) => [seed.slug, seed]));

  for (const slug of threeOaksVerifiedWave1Slugs) {
    const seed = selected.get(slug);
    expect(seed, slug).toBeTruthy();
    expect(slots.some((slot) => slot.provider === seed!.provider && slot.name === seed!.name), slug).toBe(false);
    expect(getVerifiedCatalogDetails(slug)?.source, slug).toBe(seed!.source);
    expect(getVerifiedCatalogGameType(slug), slug).toBeUndefined();

    const research = getVerifiedCatalogResearch(slug);
    if (research) expect(research.source, slug).toBe(seed!.source);
  }
});
