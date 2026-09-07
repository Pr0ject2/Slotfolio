"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { slots, mechanics, providerSlug, type Slot } from "@/lib/data";
import { GameImage } from "./editorial-client";
const providerOptions = Array.from(new Set(slots.map((s) => s.provider))).map(
  (name) => ({
    name,
    slug: providerSlug(name),
  }),
);
function readSelection(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem("slotfolio-compare") || "[]");
    return Array.isArray(value)
      ? value
          .filter(
            (s: unknown) =>
              typeof s === "string" && slots.some((g) => g.slug === s),
          )
          .slice(0, 3)
      : [];
  } catch {
    return [];
  }
}
export function CompareButton({ slug }: { slug: string }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const sync = () => setSelected(readSelection());
    sync();
    window.addEventListener("comparison-change", sync);
    return () => window.removeEventListener("comparison-change", sync);
  }, []);
  function toggle() {
    const previous = readSelection();
    if (previous.includes(slug)) {
      save(previous.filter((x) => x !== slug));
      setMessage("");
    } else if (previous.length < 3) {
      save([...previous, slug]);
      setMessage("");
    } else setMessage("В сравнении уже 3 игры. Удалите одну.");
  }
  function save(value: string[]) {
    localStorage.setItem("slotfolio-compare", JSON.stringify(value));
    setSelected(value);
    window.dispatchEvent(new Event("comparison-change"));
  }
  return (
    <div className="compare-control">
      <button
        className={
          "compare-button " + (selected.includes(slug) ? "selected" : "")
        }
        aria-pressed={selected.includes(slug)}
        onClick={toggle}
      >
        {selected.includes(slug) ? "✓ В сравнении" : "+ Сравнить"}
      </button>
      {message && (
        <small role="status">
          {message} <Link href="/compare">Открыть</Link>
        </small>
      )}
    </div>
  );
}
export function CatalogFromUrl() {
  const params = useSearchParams();
  return (
    <Catalog
      initialQ={params.get("q") || ""}
      initialProvider={params.get("provider") || ""}
      initialMechanic={params.get("mechanic") || ""}
      initialSort={params.get("sort") || "editorial"}
    />
  );
}

export function Catalog({
  initialQ = "",
  initialProvider = "",
  initialMechanic = "",
  initialSort = "editorial",
}: {
  initialQ?: string;
  initialProvider?: string;
  initialMechanic?: string;
  initialSort?: string;
}) {
  const PAGE_SIZE = 18;
  const [q, setQ] = useState(initialQ);
  const [provider, setProvider] = useState(initialProvider);
  const [mechanic, setMechanic] = useState(initialMechanic);
  const [sort, setSort] = useState(initialSort);
  const [view, setView] = useState("list");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setQ(initialQ);
    setProvider(initialProvider);
    setMechanic(initialMechanic);
    setSort(initialSort);
  }, [initialQ, initialProvider, initialMechanic, initialSort]);

  useEffect(() => {
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (provider) p.set("provider", provider);
    if (mechanic) p.set("mechanic", mechanic);
    if (sort !== "editorial") p.set("sort", sort);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + (p.size ? "?" + p : ""),
    );
  }, [q, provider, mechanic, sort]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [q, provider, mechanic, sort]);

  const normalizedQuery = q.toLowerCase().trim();
  let results = slots.filter((s) => {
    const haystack =
      `${s.name} ${s.provider} ${s.mechanic} ${s.year}`.toLowerCase();
    return (
      haystack.includes(normalizedQuery) &&
      (!provider || providerSlug(s.provider) === provider) &&
      (!mechanic || s.mechanic === mechanic)
    );
  });

  if (sort === "name")
    results = [...results].sort((a, b) => a.name.localeCompare(b.name, "ru"));
  if (sort === "new") results = [...results].sort((a, b) => b.year - a.year);
  if (sort === "rtp")
    results = [...results].sort(
      (a, b) =>
        Number.parseFloat(b.rtp.replace(",", ".")) -
        Number.parseFloat(a.rtp.replace(",", ".")),
    );

  const visibleResults = results.slice(0, visibleCount);
  const remaining = Math.max(0, results.length - visibleResults.length);
  const selectedProvider = providerOptions.find(
    (item) => item.slug === provider,
  );
  const hasFilters = Boolean(q.trim() || provider || mechanic);

  function reset() {
    setQ("");
    setProvider("");
    setMechanic("");
    setSort("editorial");
  }

  return (
    <div className="catalog">
      <form
        className="catalog-search"
        onSubmit={(e) => e.preventDefault()}
        role="search"
      >
        <label htmlFor="catalog-q">Найти игру</label>
        <div>
          <input
            type="search"
            id="catalog-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Название, провайдер или механика"
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
          <div
            id="catalog-filters"
            className={filtersOpen ? "filters open" : "filters"}
          >
            <div className="filter-heading">Уточнить выбор</div>
            <label htmlFor="provider">Провайдер</label>
            <select
              id="provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            >
              <option value="">Все провайдеры · {slots.length}</option>
              {providerOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} ·{" "}
                  {slots.filter((s) => s.provider === item.name).length}
                </option>
              ))}
            </select>
            <fieldset>
              <legend>Механика</legend>
              <label>
                <input
                  type="radio"
                  name="mechanic"
                  checked={!mechanic}
                  onChange={() => setMechanic("")}
                />
                Все механики
                <span>{slots.length}</span>
              </label>
              {mechanics.map((m) => (
                <label key={m.slug}>
                  <input
                    type="radio"
                    name="mechanic"
                    checked={mechanic === m.name}
                    onChange={() => setMechanic(m.name)}
                  />
                  {m.name}
                  <span>
                    {slots.filter((s) => s.mechanic === m.name).length}
                  </span>
                </label>
              ))}
            </fieldset>
            <button
              className="reset-link"
              onClick={reset}
              disabled={!hasFilters && sort === "editorial"}
            >
              Сбросить фильтры ↺
            </button>
            <p className="filter-note">
              Не знаете, с чего начать?
              <br />
              <Link href="/collections/beyond-lines">
                Посмотрите подборку редакции ↗
              </Link>
            </p>
          </div>
        </aside>

        <div className="results">
          <div className="results-toolbar">
            <span role="status" aria-live="polite">
              {results.length === slots.length
                ? `${slots.length} игр`
                : `Найдено ${results.length} из ${slots.length}`}
            </span>
            <label>
              <span className="sr-only">Сортировка</span>
              <select
                aria-label="Сортировка"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="editorial">Выбор редакции</option>
                <option value="name">По названию</option>
                <option value="new">Сначала новые</option>
                <option value="rtp">RTP: выше сначала</option>
              </select>
            </label>
            <div className="view-controls">
              <button
                aria-label="Список"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
              >
                ☷
              </button>
              <button
                aria-label="Обложки"
                aria-pressed={view === "covers"}
                onClick={() => setView("covers")}
              >
                ▦
              </button>
            </div>
          </div>

          {hasFilters && (
            <div className="active-filters" aria-label="Активные фильтры">
              <span>Отбор:</span>
              {q.trim() && (
                <button onClick={() => setQ("")}>
                  «{q.trim()}» <b>×</b>
                </button>
              )}
              {selectedProvider && (
                <button onClick={() => setProvider("")}>
                  {selectedProvider.name} <b>×</b>
                </button>
              )}
              {mechanic && (
                <button onClick={() => setMechanic("")}>
                  {mechanic} <b>×</b>
                </button>
              )}
              <button className="clear-all" onClick={reset}>
                Сбросить всё
              </button>
            </div>
          )}

          {!results.length ? (
            <div className="empty-state">
              <span className="eyebrow">Ничего не найдено</span>
              <h2>
                Такой игры пока нет
                <br />в нашем указателе.
              </h2>
              <p>Попробуйте часть названия или снимите один из фильтров.</p>
              <button className="button" onClick={reset}>
                Показать все игры
              </button>
            </div>
          ) : (
            <>
              <div className={"catalog-results " + view}>
                {visibleResults.map((s) => (
                  <article key={s.slug} className="catalog-game">
                    <Link
                      className="catalog-game-art"
                      href={"/slots/" + s.slug}
                    >
                      <GameImage slot={s} />
                    </Link>
                    <div className="catalog-game-copy">
                      <span className="eyebrow">
                        {s.provider} / {s.year}
                      </span>
                      <h2>
                        <Link href={"/slots/" + s.slug}>{s.name}</Link>
                      </h2>
                      <p>{s.description}</p>
                      <div className="catalog-game-data">
                        <span>{s.mechanic}</span>
                        <span>RTP* {s.rtp}</span>
                        <CompareButton slug={s.slug} />
                      </div>
                    </div>
                    <Link
                      className="catalog-open"
                      href={"/slots/" + s.slug}
                      aria-label={`Открыть ${s.name}`}
                    >
                      ↗
                    </Link>
                  </article>
                ))}
              </div>

              {remaining > 0 && (
                <div className="catalog-more">
                  <span>
                    Показано {visibleResults.length} из {results.length}
                  </span>
                  <button
                    onClick={() =>
                      setVisibleCount((count) => count + PAGE_SIZE)
                    }
                  >
                    Показать ещё {Math.min(PAGE_SIZE, remaining)} ↓
                  </button>
                </div>
              )}
            </>
          )}

          <p className="data-note">
            * Указана справочная версия RTP. Значение в конкретной игре у
            оператора может отличаться.{" "}
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
export function Comparison() {
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    setSelected(readSelection());
  }, []);
  const games = selected
    .map((s) => slots.find((g) => g.slug === s))
    .filter((x): x is Slot => !!x);
  function remove(slug: string) {
    const next = selected.filter((x) => x !== slug);
    setSelected(next);
    localStorage.setItem("slotfolio-compare", JSON.stringify(next));
    window.dispatchEvent(new Event("comparison-change"));
  }
  return (
    <>
      {games.length ? (
        <>
          <div className="comparison-scroll">
            <table className="comparison-table">
              <caption className="sr-only">Сравнение выбранных игр</caption>
              <thead>
                <tr>
                  <th>Игра</th>
                  {games.map((s) => (
                    <th key={s.slug}>
                      <Link href={"/slots/" + s.slug}>
                        <GameImage slot={s} />
                        {s.name}
                      </Link>
                      <button
                        onClick={() => remove(s.slug)}
                        aria-label={`Удалить ${s.name}`}
                      >
                        Убрать ×
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Провайдер", "provider"],
                  ["Механика", "mechanic"],
                  ["Поле", "field"],
                  ["RTP*", "rtp"],
                  ["Волатильность", "volatility"],
                  ["Год", "year"],
                  ["Особенность", "feature"],
                  ["Взгляд редакции", "note"],
                ].map(([label, key]) => (
                  <tr key={key}>
                    <th scope="row">{label}</th>
                    {games.map((s) => (
                      <td key={s.slug}>{s[key as keyof Slot]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="data-note">
            * Справочные значения могут отличаться от конфигурации оператора.
            Высокий RTP не гарантирует выигрыш.
          </p>
        </>
      ) : (
        <div className="empty-state">
          <h2>Что поставим рядом?</h2>
          <p>
            Добавьте до трёх игр из каталога — сравним правила, поле и
            особенности без рейтинга «лучше / хуже».
          </p>
          <Link className="button" href="/slots">
            Выбрать игры ↗
          </Link>
        </div>
      )}
      <Link className="text-link" href="/slots">
        {games.length ? "Добавить игру из каталога ↗" : ""}
      </Link>
    </>
  );
}
