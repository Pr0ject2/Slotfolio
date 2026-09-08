import rawSeeds from "@/data/catalog-seeds.json";
import { slots } from "./data-v128";

export type CatalogSeed = {
  slug: string;
  name: string;
  provider: string;
  source: string;
  verifiedBy: "official-provider-catalog";
};

export const CATALOG_TARGET = 1000;

function normalizedKey(provider: string, name: string) {
  return `${provider}\u0000${name}`
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-zа-я0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeSeed(value: unknown): CatalogSeed | null {
  if (!value || typeof value !== "object") return null;
  const item = value as Record<string, unknown>;
  const slug = typeof item.slug === "string" ? item.slug.trim() : "";
  const name = typeof item.name === "string" ? item.name.trim() : "";
  const provider = typeof item.provider === "string" ? item.provider.trim() : "";
  const source = typeof item.source === "string" ? item.source.trim() : "";
  if (!slug || !name || !provider || !/^https:\/\//i.test(source)) return null;
  return { slug, name, provider, source, verifiedBy: "official-provider-catalog" };
}

const fullKeys = new Set(slots.map((slot) => normalizedKey(slot.provider, slot.name)));
const fullSlugs = new Set(slots.map((slot) => slot.slug));
const candidates = (rawSeeds as unknown[])
  .map(sanitizeSeed)
  .filter((item): item is CatalogSeed => Boolean(item))
  .filter((item) => !fullKeys.has(normalizedKey(item.provider, item.name)) && !fullSlugs.has(item.slug));

const byProvider = new Map<string, CatalogSeed[]>();
const seenCandidateKeys = new Set<string>();
const seenCandidateSlugs = new Set<string>();
for (const item of candidates) {
  const key = normalizedKey(item.provider, item.name);
  if (seenCandidateKeys.has(key) || seenCandidateSlugs.has(item.slug)) continue;
  seenCandidateKeys.add(key);
  seenCandidateSlugs.add(item.slug);
  const bucket = byProvider.get(item.provider) || [];
  bucket.push(item);
  byProvider.set(item.provider, bucket);
}
for (const bucket of byProvider.values()) bucket.sort((a, b) => a.name.localeCompare(b.name, "en"));

const wanted = Math.max(0, CATALOG_TARGET - slots.length);
const selected: CatalogSeed[] = [];
const providerNames = Array.from(byProvider.keys()).sort((a, b) => a.localeCompare(b, "en"));
const offsets = new Map(providerNames.map((provider) => [provider, 0]));

while (selected.length < wanted && providerNames.length) {
  let pickedThisRound = false;
  for (const provider of providerNames) {
    const bucket = byProvider.get(provider)!;
    const index = offsets.get(provider) || 0;
    const candidate = bucket[index];
    if (!candidate) continue;
    selected.push(candidate);
    offsets.set(provider, index + 1);
    pickedThisRound = true;
    if (selected.length >= wanted) break;
  }
  if (!pickedThisRound) break;
}

export const catalogSeeds = selected;
export const getCatalogSeed = (slug: string) => catalogSeeds.find((item) => item.slug === slug);
