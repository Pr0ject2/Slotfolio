import { type Slot, slotMechanics, slotRtpValue } from "./data";

export type Frequency = { name: string; count: number };

/** A game counts once per group, even if an imported record repeats a tag. */
export function frequencies(games: Slot[], values: (game: Slot) => string[]): Frequency[] {
  const counts = new Map<string, number>();
  for (const game of uniqueGames(games)) {
    for (const name of new Set(values(game).filter(Boolean))) {
      counts.set(name, (counts.get(name) || 0) + 1);
    }
  }
  return Array.from(counts, ([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "ru"));
}

export function uniqueGames(games: Slot[]) {
  return [...new Map(games.map((game) => [game.slug, game])).values()];
}

export function catalogStats(input: Slot[]) {
  const games = uniqueGames(input);
  const values = games.map(slotRtpValue).filter(Number.isFinite).sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return {
    count: games.length,
    rtp: {
      count: values.length,
      min: values.length ? values[0] : null,
      max: values.length ? values[values.length - 1] : null,
      mean: values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null,
      median: values.length ? (values[middle] + values[Math.floor((values.length - 1) / 2)]) / 2 : null,
    },
    mechanics: frequencies(games, slotMechanics),
    features: frequencies(games, (game) => game.tags),
    volatility: frequencies(games, (game) => [game.volatility]),
    fields: frequencies(games, (game) => [game.field]),
    providers: frequencies(games, (game) => [game.provider]),
  };
}

export function formatRtp(value: number | null) {
  return value === null || !Number.isFinite(value) ? "Не указан" : `${value.toFixed(2).replace(".", ",")}%`;
}

export function rtpRange(rtp: ReturnType<typeof catalogStats>["rtp"]) {
  return rtp.min === rtp.max ? formatRtp(rtp.min) : `${formatRtp(rtp.min)}–${formatRtp(rtp.max)}`;
}

/** Editorial order, followed by the game that adds most unseen mechanics/features. */
export function representativeGames(input: Slot[], limit = 2) {
  const remaining = uniqueGames(input);
  const chosen: Slot[] = [];
  const seen = new Set<string>();
  while (remaining.length && chosen.length < limit) {
    const keys = (game: Slot) => [...slotMechanics(game).map((x) => `m:${x}`), ...game.tags];
    const score = (game: Slot) => keys(game).reduce((n, key) => n + (seen.has(key) ? 0 : key.startsWith("m:") ? 4 : 1), 0);
    const index = chosen.length ? remaining.reduce((best, game, i) => score(game) > score(remaining[best]) ? i : best, 0) : 0;
    const [game] = remaining.splice(index, 1);
    chosen.push(game);
    keys(game).forEach((key) => seen.add(key));
  }
  return chosen;
}
