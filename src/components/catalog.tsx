"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { slots, mechanics, providerSlug, type Slot } from "@/lib/data";
import { GameImage } from "./editorial-client";
const providerOptions = Array.from(new Set(slots.map((s) => s.provider))).map((name) => ({
  name,
  slug: providerSlug(name),
}));
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
  const [q, setQ] = useState(initialQ);
  const [provider, setProvider] = useState(initialProvider);
  const [mechanic, setMechanic] = useState(initialMechanic);
  const [sort, setSort] = useState(initialSort);
  const [view, setView] = useState("list");
  const [filtersOpen, setFiltersOpen] = useState(false);
  useEffect(() => {
    setQ(initialQ);
    setProvider(initialProvider);
    setMechanic(initialMechanic);
    setSort(initialSort);
  }, [initialQ, initialProvider, initialMechanic, initialSort]);
  useEffect(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (provider) p.set("provider", provider);
    if (mechanic) p.set("mechanic", mechanic);
    if (sort !== "editorial") p.set("sort", sort);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + (p.size ? "?" + p : ""),
    );
  }, [q, provider, mechanic, sort]);
  let results = slots.filter(
    (s) =>
      (s.name + " " + s.provider)
        .toLowerCase()
        .includes(q.toLowerCase().trim()) &&
      (!provider || providerSlug(s.provider) === provider) &&
      (!mechanic || s.mechanic === mechanic),
  );
  if (sort === "name")
    results = [...results].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "new") results = [...results].sort((a, b) => b.year - a.year);
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
            placeholder="Название игры или провайдера"
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
            Фильтры {provider || mechanic ? "· активны" : ""}
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
              <option value="">Все провайдеры</option>
              {providerOptions.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
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
            <button className="reset-link" onClick={reset}>
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
              {results.length} из {slots.length} игр
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
            <div className={"catalog-results " + view}>
              {results.map((s) => (
                <article key={s.slug} className="catalog-game">
                  <Link className="catalog-game-art" href={"/slots/" + s.slug}>
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
          )}
          <p className="data-note">
            * Указана справочная версия RTP. Значение в конкретной игре у
            оператора может отличаться.{" "}
            <Link href="/journal/understanding-rtp">Как читать RTP ↗</Link>
          </p>
          <div className="catalog-end">
            Показаны все игры, подходящие под текущие фильтры.{" "}
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
