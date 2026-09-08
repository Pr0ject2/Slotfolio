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
import { providerProfileOverrides } from "./provider-profile-overrides";

export { article, mechanics, providerSlug, ruPlural, slotMatchesSearch, slotMechanics, slotRtpValue };
export type { OperatorAvailability, ProviderProfile, Slot };

export const slots: Slot[] = [...baseSlots, ...slotAdditions1, ...slotAdditions2, ...slotAdditions3, ...slotAdditions4];
export const getSlot = (slug: string) => slots.find((slot) => slot.slug === slug);

export const slotFeatureOptions = Array.from(
  slots.reduce((counts, slot) => {
    for (const tag of new Set(slot.tags)) counts.set(tag, (counts.get(tag) || 0) + 1);
    return counts;
  }, new Map<string, number>()),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"))
  .map(([name, count]) => ({ name, count }));

export function relatedSlots(slot: Slot, limit = 2) {
  return slots
    .filter((candidate) => candidate.slug !== slot.slug)
    .map((candidate, index) => {
      const sharedMechanics = candidate.mechanics.filter((name) => slot.mechanics.includes(name)).length;
      const sharedTags = candidate.tags.filter((tag) => slot.tags.includes(tag)).length;
      const sameProvider = candidate.provider === slot.provider ? 1 : 0;
      const sameVolatility = candidate.volatility === slot.volatility ? 1 : 0;
      const rtpDistance = Math.abs(slotRtpValue(candidate) - slotRtpValue(slot));
      return { candidate, index, score: sharedMechanics * 5 + sharedTags * 2 + sameProvider * 3 + sameVolatility - (Number.isFinite(rtpDistance) ? Math.min(rtpDistance, 2) * 0.25 : 0) };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

const overrides = new Map(providerProfileOverrides.map((profile) => [profile.slug, profile]));
export const providerProfiles: ProviderProfile[] = [
  ...baseProviderProfiles.map((profile) => overrides.get(profile.slug) ?? profile),
  ...providerProfileOverrides.filter((profile) => !baseProviderProfiles.some((base) => base.slug === profile.slug)),
];
