import {
  article,
  mechanics,
  providerProfiles as baseProviderProfiles,
  providerSlug,
  ruPlural,
  slotMatchesSearch,
  slotMechanics,
  slotRtpValue,
  slots as baseSlots,
  type OperatorAvailability,
  type ProviderProfile,
  type Slot,
} from "./data";
import { slotAdditions1 } from "./slot-additions-1";
import { slotAdditions2 } from "./slot-additions-2";
import { slotAdditions3 } from "./slot-additions-3";
import { slotAdditions4 } from "./slot-additions-4";
import { slotAdditions5 } from "./slot-additions-5";
import { providerProfileOverrides } from "./provider-profile-overrides";
import { providerProfileAdditions5 } from "./provider-profile-additions-5";

export { article, mechanics, providerSlug, ruPlural, slotMatchesSearch, slotMechanics, slotRtpValue };
export type { OperatorAvailability, ProviderProfile, Slot };

export const slots: Slot[] = [
  ...baseSlots,
  ...slotAdditions1,
  ...slotAdditions2,
  ...slotAdditions3,
  ...slotAdditions4,
  ...slotAdditions5,
];
export const getSlot = (slug: string) => slots.find((slot) => slot.slug === slug);

export const slotFeatureOptions = Array.from(
  slots.reduce((counts, slot) => {
    for (const tag of new Set(slot.tags)) counts.set(tag, (counts.get(tag) || 0) + 1);
    return counts;
  }, new Map<string, number>()),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"))
  .map(([name, count]) => ({ name, count }));

function titleTokens(value: string) {
  const ignored = new Set([
    "the",
    "of",
    "and",
    "win",
    "slot",
    "super",
    "deluxe",
    "hold",
    "free",
  ]);
  return value
    .toLowerCase()
    .replace(/[^a-zа-я0-9]+/gi, " ")
    .split(" ")
    .filter((token) => token.length > 2 && !ignored.has(token));
}

function relatedScore(slot: Slot, candidate: Slot) {
  const sharedMechanics = candidate.mechanics.filter((name) => slot.mechanics.includes(name)).length;
  const sharedTags = candidate.tags.filter((tag) => slot.tags.includes(tag)).length;
  const sameProvider = candidate.provider === slot.provider ? 1 : 0;
  const sameVolatility = candidate.volatility === slot.volatility ? 1 : 0;
  const candidateTitleTokens = new Set(titleTokens(candidate.name));
  const sharedTitleTokens = titleTokens(slot.name).filter((token) => candidateTitleTokens.has(token)).length;
  const rtpDistance = Math.abs(slotRtpValue(candidate) - slotRtpValue(slot));

  return (
    sharedMechanics * 6 +
    sharedTags * 2 +
    sameProvider * 3 +
    sameVolatility +
    sharedTitleTokens * 4 -
    (Number.isFinite(rtpDistance) ? Math.min(rtpDistance, 2) * 0.25 : 0)
  );
}

export function relatedSlots(slot: Slot, limit = 2) {
  const ranked = slots
    .filter((candidate) => candidate.slug !== slot.slug)
    .map((candidate, index) => ({ candidate, index, score: relatedScore(slot, candidate) }))
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const selected: typeof ranked = [];
  while (selected.length < limit && ranked.length) {
    const best = ranked[0];
    const diversified = ranked.find(
      (entry) =>
        entry.score >= best.score - 3 &&
        selected.every((picked) => picked.candidate.provider !== entry.candidate.provider),
    );
    const pick = diversified ?? best;
    selected.push(pick);
    ranked.splice(ranked.indexOf(pick), 1);
  }

  return selected.map(({ candidate }) => candidate);
}

const overrides = new Map(providerProfileOverrides.map((profile) => [profile.slug, profile]));
export const providerProfiles: ProviderProfile[] = [
  ...baseProviderProfiles.map((profile) => overrides.get(profile.slug) ?? profile),
  ...providerProfileOverrides.filter((profile) => !baseProviderProfiles.some((base) => base.slug === profile.slug)),
  ...providerProfileAdditions5,
];
