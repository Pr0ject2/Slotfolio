export type CatalogItem = {
  slug: string;
  name: string;
  provider: string;
  providerSlug: string;
  year: number | null;
  mechanics: string[];
  tags: string[];
  field: string;
  rtp: string;
  rtpValue: number | null;
  volatility: string;
  image: string;
  description: string;
  searchText: string;
  coverage: "dossier" | "catalog";
  source?: string;
};

export type CatalogFacet = { name: string; count: number };
export type CatalogProviderFacet = CatalogFacet & { slug: string };
export type CatalogMechanicFacet = CatalogFacet & { slug: string };

export type CatalogFacets = {
  total: number;
  mechanicsKnown: number;
  providers: CatalogProviderFacet[];
  mechanics: CatalogMechanicFacet[];
  volatility: CatalogFacet[];
  features: CatalogFacet[];
};

export type CatalogModel = {
  items: CatalogItem[];
  facets: CatalogFacets;
};

export type CatalogFilters = {
  q: string;
  provider: string;
  mechanic: string;
  volatility: string;
  rtp: string;
  feature: string;
};

const searchAliasGroups = [
  ["wild", "вайлд", "вилд"],
  ["free spins", "фриспины", "свободные вращения"],
  ["rtp", "ртп", "возврат"],
  ["cascades", "tumble", "avalanche", "каскады"],
  ["clusters", "cluster", "кластеры"],
  ["ways", "xways", "способы"],
  ["super scatter", "супер скаттер", "суперскаттер"],
  ["risk game", "риск игра", "риск"],
  ["hold and win", "холд энд вин", "холд"],
  ["jackpot", "джекпот", "джекпоты"],
  ["nudge", "надж", "сдвиг"],
  ["pick", "pick bonus", "пик бонус", "pick-бонус"],
  ["bonus pop", "бонус поп"],
];

export function normalizeCatalogSearch(value: string) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/(\d),(?=\d)/g, "$1.")
    .replace(/[’']/g, "")
    .replace(/[^a-zа-я0-9.%×]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildCatalogSearchText(input: {
  name: string;
  provider: string;
  year?: number | null;
  field?: string;
  rtp?: string;
  volatility?: string;
  mechanics?: string[];
  tags?: string[];
  description: string;
  feature?: string;
}) {
  return normalizeCatalogSearch(
    [
      input.name,
      input.provider,
      "rtp ртп волатильность механика особенность",
      input.year ?? "",
      input.field || "",
      input.rtp || "",
      input.volatility || "",
      ...(input.mechanics || []),
      ...(input.tags || []),
      input.description,
      input.feature || "",
    ].join(" "),
  );
}

export function catalogItemMatchesSearch(item: CatalogItem, query: string) {
  const normalizedQuery = normalizeCatalogSearch(query);
  if (!normalizedQuery) return true;
  const tokens = normalizedQuery.split(" ").filter(Boolean);
  return tokens.every((token) => {
    if (item.searchText.includes(token)) return true;
    const aliases = searchAliasGroups.find((group) =>
      group.some((alias) => normalizeCatalogSearch(alias).split(" ").includes(token)),
    );
    return aliases
      ? aliases.some((alias) => item.searchText.includes(normalizeCatalogSearch(alias)))
      : false;
  });
}

export function filterCatalogItems(items: CatalogItem[], filters: CatalogFilters) {
  const minRtp = filters.rtp ? Number.parseFloat(filters.rtp) : 0;
  return items.filter(
    (item) =>
      catalogItemMatchesSearch(item, filters.q) &&
      (!filters.provider || item.providerSlug === filters.provider) &&
      (!filters.mechanic || item.mechanics.includes(filters.mechanic)) &&
      (!filters.volatility || item.volatility === filters.volatility) &&
      (!filters.rtp || (item.rtpValue !== null && item.rtpValue >= minRtp)) &&
      (!filters.feature || item.tags.includes(filters.feature)),
  );
}

export function sortCatalogItems(items: CatalogItem[], sort: string) {
  if (sort === "name") return [...items].sort((a, b) => a.name.localeCompare(b.name, "ru"));
  if (sort === "new")
    return [...items].sort((a, b) => (b.year ?? Number.NEGATIVE_INFINITY) - (a.year ?? Number.NEGATIVE_INFINITY));
  if (sort === "rtp")
    return [...items].sort((a, b) => (b.rtpValue ?? -1) - (a.rtpValue ?? -1));
  return items;
}
