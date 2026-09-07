"use client";

import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CompareButton } from "./compare-button";
import { GameImage } from "./editorial-client";
import {
  filterCatalogItems,
  sortCatalogItems,
  type CatalogModel,
} from "@/lib/catalog-query";

function useUrlFilter(name: string, initial: string) {
  const [value, setValue] = useState(initial);
  useEffect(() => setValue(initial), [initial]);
  function update(next: string) {
    setValue(next);
    const url = new URL(window.location.href);
    if (next && !(name === "sort" && next === "editorial")) url.searchParams.set(name, next);
    else url.searchParams.delete(name);
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  return [value, update] as const;
}

export function CatalogFromUrl({ model }: { model: CatalogModel }) {
  const params = useSearchParams();
  return (
    <Catalog
      model={model}
      initialQ={params.get("q") || ""}
      initialProvider={params.get("provider") || ""}
      initialMechanic={params.get("mechanic") || ""}
      initialVolatility={params.get("volatility") || ""}
      initialRtp={params.get("rtp") || ""}
      initialFeature={params.get("feature") || ""}
      initialSort={params.get("sort") || "editorial"}
    />
  );
}

export function Catalog({
  model,
  initialQ = "",
  initialProvider = "",
  initialMechanic = "",
  initialVolatility = "",
  initialRtp = "",
  initialFeature = "",
  initialSort = "editorial",
}: {
  model: CatalogModel;
  initialQ?: string;
  initialProvider?: string;
  initialMechanic?: string;
  initialVolatility?: string;
  initialRtp?: string;
  initialFeature?: string;
  initialSort?: string;
}) {
  const PAGE_SIZE = 18;
  const [q, setQ] = useUrlFilter("q", initialQ);
  const [provider, setProvider] = useUrlFilter("provider", initialProvider);
  const [mechanic, setMechanic] = useUrlFilter("mechanic", initialMechanic);
  const [volatility, setVolatility] = useUrlFilter("volatility", initialVolatility);
  const [rtp, setRtp] = useUrlFilter("rtp", initialRtp);
  const [feature, setFeature] = useUrlFilter("feature", initialFeature);
  const [sort, setSort] = useUrlFilter("sort", initialSort);
  const [view, setView] = useState("list");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const deferredQ = useDeferredValue(q);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [q, provider, mechanic, volatility, rtp, feature, sort]);

  const results = useMemo(
    () =>
      sortCatalogItems(
        filterCatalogItems(model.items, {
          q: deferredQ,
          provider,
          mechanic,
          volatility,
          rtp,
          feature,
        }),
        sort,
      ),
    [model.items, deferredQ, provider, mechanic, volatility, rtp, feature, sort],
  );

  const visibleResults = results.slice(0, visibleCount);
  const remaining = Math.max(0, results.length - visibleResults.length);
  const selectedProvider = model.facets.providers.find((item) => item.slug === provider);
  const hasFilters = Boolean(q.trim() || provider || mechanic || volatility || rtp || feature);

  function reset() {
    setQ("");
    setProvider("");
    setMechanic("");
    setVolatility("");
    setRtp("");
    setFeature("");
    setSort("editorial");
  }

  return (
    <div className="catalog">
      <form className="catalog-search" onSubmit={(e) => e.preventDefault()} role="search">
        <label htmlFor="catalog-q">Найти игру</label>
        <div>
          <input
            type="search"
            id="catalog-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Название, провайдер, механика или особенность"
          />
          <span aria-hidden="true">↗</span>
        </div>
      </form>

      <div className="catalog-layout">
        <aside className="filter-panel">
          <button
            className="filter-toggle"
            aria-expanded={filtersOpen}
            aria-controls="catalog-filters"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            Фильтры {hasFilters ? "· активны" : ""}
            <span>{filtersOpen ? "−" : "+"}</span>
          </button>
          <div id="catalog-filters" className={filtersOpen ? "filters open" : "filters"}>
            <div className="filter-heading">Уточнить выбор</div>
            <label htmlFor="provider">Провайдер</label>
            <select id="provider" value={provider} onChange={(e) => setProvider(e.target.value)}>
              <option value="">Все провайдеры · {model.facets.total}</option>
              {model.facets.providers.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} · {item.count}
                </option>
              ))}
            </select>

            <fieldset>
              <legend>Механика</legend>
              <label>
                <input type="radio" name="mechanic" checked={!mechanic} onChange={() => setMechanic("")} />
                Все механики
                <span>{model.facets.total}</span>
              </label>
              {model.facets.mechanics.map((item) => (
                <label key={item.slug}>
                  <input
                    type="radio"
                    name="mechanic"
                    checked={mechanic === item.name}
                    onChange={() => setMechanic(item.name)}
                  />
                  {item.name}
                  <span>{item.count}</span>
                </label>
              ))}
            </fieldset>

            <div className="filter-select-group">
              <label htmlFor="volatility">Волатильность</label>
              <select id="volatility" value={volatility} onChange={(e) => setVolatility(e.target.value)}>
                <option value="">Любая</option>
                {model.facets.volatility.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} · {item.count}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-select-group">
              <label htmlFor="rtp">RTP, справочно</label>
              <select id="rtp" value={rtp} onChange={(e) => setRtp(e.target.value)}>
                <option value="">Любой</option>
                <option value="96">Не ниже 96,00%</option>
                <option value="96.5">Не ниже 96,50%</option>
                <option value="97">Не ниже 97,00%</option>
              </select>
            </div>

            <div className="filter-select-group">
              <label htmlFor="feature">Особенность</label>
              <select id="feature" value={feature} onChange={(e) => setFeature(e.target.value)}>
                <option value="">Любая</option>
                {model.facets.features.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} · {item.count}
                  </option>
                ))}
              </select>
            </div>

            <button className="reset-link" onClick={reset} disabled={!hasFilters && sort === "editorial"}>
              Сбросить фильтры ↺
            </button>
            <p className="filter-note">
              Не знаете, с чего начать?
              <br />
              <Link href="/collections/beyond-lines">Посмотрите подборку редакции ↗</Link>
            </p>
          </div>
        </aside>

        <div className="results">
          <div className="results-toolbar">
            <span role="status" aria-live="polite">
              {results.length === model.facets.total
                ? `${model.facets.total} игр`
                : `Найдено ${results.length} из ${model.facets.total}`}
            </span>
            <label>
              <span className="sr-only">Сортировка</span>
              <select aria-label="Сортировка" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="editorial">Выбор редакции</option>
                <option value="name">По названию</option>
                <option value="new">Сначала новые</option>
                <option value="rtp">RTP: выше сначала</option>
              </select>
            </label>
            <div className="view-controls">
              <button aria-label="Список" aria-pressed={view === "list"} onClick={() => setView("list")}>
                ☷
              </button>
              <button aria-label="Обложки" aria-pressed={view === "covers"} onClick={() => setView("covers")}>
                ▦
              </button>
            </div>
          </div>

          {hasFilters && (
            <div className="active-filters" aria-label="Активные фильтры">
              <span>Отбор:</span>
              {q.trim() && <button onClick={() => setQ("")}>«{q.trim()}» <b>×</b></button>}
              {selectedProvider && <button onClick={() => setProvider("")}>{selectedProvider.name} <b>×</b></button>}
              {mechanic && <button onClick={() => setMechanic("")}>{mechanic} <b>×</b></button>}
              {volatility && <button onClick={() => setVolatility("")}>{volatility} <b>×</b></button>}
              {rtp && <button onClick={() => setRtp("")}>RTP ≥ {rtp.replace(".", ",")}% <b>×</b></button>}
              {feature && <button onClick={() => setFeature("")}>{feature} <b>×</b></button>}
              <button className="clear-all" onClick={reset}>Сбросить всё</button>
            </div>
          )}

          {!results.length ? (
            <div className="empty-state">
              <span className="eyebrow">Ничего не найдено</span>
              <h2>Такой игры пока нет<br />в нашем указателе.</h2>
              <p>Попробуйте часть названия или снимите один из фильтров.</p>
              <button className="button" onClick={reset}>Показать все игры</button>
            </div>
          ) : (
            <>
              <div className={"catalog-results " + view}>
                {visibleResults.map((item) => (
                  <article key={item.slug} className="catalog-game">
                    <Link className="catalog-game-art" href={"/slots/" + item.slug}>
                      <GameImage slot={item} />
                    </Link>
                    <div className="catalog-game-copy">
                      <span className="eyebrow">{item.provider} / {item.year}</span>
                      <h2><Link href={"/slots/" + item.slug}>{item.name}</Link></h2>
                      <p>{item.description}</p>
                      <div className="catalog-game-tags" aria-label="Особенности игры">
                        {item.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      <div className="catalog-game-data">
                        <span>{item.mechanics.join(" · ")}</span>
                        <span>{item.volatility}</span>
                        <span>RTP* {item.rtp}</span>
                        <CompareButton slug={item.slug} name={item.name} />
                      </div>
                    </div>
                    <Link className="catalog-open" href={"/slots/" + item.slug} aria-label={`Открыть ${item.name}`}>↗</Link>
                  </article>
                ))}
              </div>

              {remaining > 0 && (
                <div className="catalog-more">
                  <span>Показано {visibleResults.length} из {results.length}</span>
                  <button onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
                    Показать ещё {Math.min(PAGE_SIZE, remaining)} ↓
                  </button>
                </div>
              )}
            </>
          )}

          <p className="data-note">
            * Указана справочная версия RTP. Значение в конкретной игре у оператора может отличаться.{" "}
            <Link href="/journal/understanding-rtp">Как читать RTP ↗</Link>
          </p>
          <div className="catalog-end">
            <span>
              {remaining
                ? `На странице ${visibleResults.length} из ${results.length} подходящих игр.`
                : "Показаны все игры, подходящие под текущие фильтры."}
            </span>
            <Link href="/compare">Перейти к сравнению ↗</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
