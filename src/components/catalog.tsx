"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  slots,
  mechanics,
  providerSlug,
  slotFeatureOptions,
  slotMatchesSearch,
  slotMechanics,
  slotRtpValue,
  type Slot,
} from "@/lib/data";
import { GameImage } from "./editorial-client";
import { getVerifiedSlotMetrics } from "@/lib/dossier";
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
      initialVolatility={params.get("volatility") || ""}
      initialRtp={params.get("rtp") || ""}
      initialFeature={params.get("feature") || ""}
      initialSort={params.get("sort") || "editorial"}
    />
  );
}

export function Catalog({
  initialQ = "",
  initialProvider = "",
  initialMechanic = "",
  initialVolatility = "",
  initialRtp = "",
  initialFeature = "",
  initialSort = "editorial",
}: {
  initialQ?: string;
  initialProvider?: string;
  initialMechanic?: string;
  initialVolatility?: string;
  initialRtp?: string;
  initialFeature?: string;
  initialSort?: string;
}) {
  const PAGE_SIZE = 18;
  const [q, setQ] = useState(initialQ);
  const [provider, setProvider] = useState(initialProvider);
  const [mechanic, setMechanic] = useState(initialMechanic);
  const [volatility, setVolatility] = useState(initialVolatility);
  const [rtp, setRtp] = useState(initialRtp);
  const [feature, setFeature] = useState(initialFeature);
  const [sort, setSort] = useState(initialSort);
  const [view, setView] = useState("list");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setQ(initialQ);
    setProvider(initialProvider);
    setMechanic(initialMechanic);
    setVolatility(initialVolatility);
    setRtp(initialRtp);
    setFeature(initialFeature);
    setSort(initialSort);
  }, [
    initialQ,
    initialProvider,
    initialMechanic,
    initialVolatility,
    initialRtp,
    initialFeature,
    initialSort,
  ]);

  useEffect(() => {
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (provider) p.set("provider", provider);
    if (mechanic) p.set("mechanic", mechanic);
    if (volatility) p.set("volatility", volatility);
    if (rtp) p.set("rtp", rtp);
    if (feature) p.set("feature", feature);
    if (sort !== "editorial") p.set("sort", sort);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + (p.size ? "?" + p : ""),
    );
  }, [q, provider, mechanic, volatility, rtp, feature, sort]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [q, provider, mechanic, volatility, rtp, feature, sort]);

  const minRtp = rtp ? Number.parseFloat(rtp) : 0;
  let results = slots.filter((s) =>
    slotMatchesSearch(s, q) &&
    (!provider || providerSlug(s.provider) === provider) &&
    (!mechanic || slotMechanics(s).includes(mechanic)) &&
    (!volatility || s.volatility === volatility) &&
    (!rtp || slotRtpValue(s) >= minRtp) &&
    (!feature || s.tags.includes(feature)),
  );

  if (sort === "name")
    results = [...results].sort((a, b) => a.name.localeCompare(b.name, "ru"));
  if (sort === "new") results = [...results].sort((a, b) => b.year - a.year);
  if (sort === "rtp")
    results = [...results].sort(
      (a, b) =>
        slotRtpValue(b) - slotRtpValue(a),
    );

  const visibleResults = results.slice(0, visibleCount);
  const remaining = Math.max(0, results.length - visibleResults.length);
  const selectedProvider = providerOptions.find(
    (item) => item.slug === provider,
  );
  const hasFilters = Boolean(
    q.trim() || provider || mechanic || volatility || rtp || feature,
  );

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
                    {slots.filter((s) => slotMechanics(s).includes(m.name)).length}
                  </span>
                </label>
              ))}
            </fieldset>

            <div className="filter-select-group">
              <label htmlFor="volatility">Волатильность</label>
              <select
                id="volatility"
                value={volatility}
                onChange={(e) => setVolatility(e.target.value)}
              >
                <option value="">Любая</option>
                {Array.from(new Set(slots.map((slot) => slot.volatility))).map(
                  (value) => (
                    <option key={value} value={value}>
                      {value} · {slots.filter((slot) => slot.volatility === value).length}
                    </option>
                  ),
                )}
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
              <select
                id="feature"
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
              >
                <option value="">Любая</option>
                {slotFeatureOptions.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} · {item.count}
                  </option>
                ))}
              </select>
            </div>

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
              {volatility && (
                <button onClick={() => setVolatility("")}>
                  {volatility} <b>×</b>
                </button>
              )}
              {rtp && (
                <button onClick={() => setRtp("")}>
                  RTP ≥ {rtp.replace(".", ",")}% <b>×</b>
                </button>
              )}
              {feature && (
                <button onClick={() => setFeature("")}>
                  {feature} <b>×</b>
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
                      <div className="catalog-game-tags" aria-label="Особенности игры">
                        {s.tags.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="catalog-game-data">
                        <span>{slotMechanics(s).join(" · ")}</span>
                        <span>{s.volatility}</span>
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
  const [picker, setPicker] = useState("");
  const seed = useSearchParams().get("seed");

  useEffect(() => {
    const sync = () => setSelected(readSelection());
    sync();
    window.addEventListener("comparison-change", sync);
    return () => window.removeEventListener("comparison-change", sync);
  }, []);

  useEffect(() => {
    if (!seed || !slots.some((game) => game.slug === seed)) return;
    const stored = readSelection();
    if (stored.includes(seed) || stored.length >= 3) return;
    const next = [...stored, seed];
    localStorage.setItem("slotfolio-compare", JSON.stringify(next));
    setSelected(next);
    window.dispatchEvent(new Event("comparison-change"));
  }, [seed]);

  const games = selected
    .map((slug) => slots.find((game) => game.slug === slug))
    .filter((game): game is Slot => !!game);

  const availableGames = slots.filter((game) => !selected.includes(game.slug));
  const presets = [
    {
      label: "Два каскадных подхода",
      caption: "Gates of Olympus + Sweet Bonanza",
      slugs: ["gates-of-olympus", "sweet-bonanza"],
    },
    {
      label: "Линии против кластеров",
      caption: "Book of Dead + Reactoonz",
      slugs: ["book-of-dead", "reactoonz"],
    },
    {
      label: "Три разные логики",
      caption: "Каскады + линии + сбор символов",
      slugs: ["gates-of-olympus", "book-of-dead", "big-bass-bonanza"],
    },
    {
      label: "Три кластерных поля",
      caption: "Jammin’ Jars + Reactoonz + Le Bandit",
      slugs: ["jammin-jars", "reactoonz", "le-bandit"],
    },
    {
      label: "Динамические способы",
      caption: "San Quentin xWays + Fire in the Hole",
      slugs: ["san-quentin-xways", "fire-in-the-hole"],
    },
    {
      label: "Эволюция каскадов",
      caption: "Gonzo’s Quest + Gates of Olympus + Starlight Princess",
      slugs: ["gonzos-quest", "gates-of-olympus", "starlight-princess"],
    },
    {
      label: "Три классические сетки",
      caption: "Starburst + Fire Joker + Book of 99",
      slugs: ["starburst", "fire-joker", "book-of-99"],
    },
    {
      label: "Большие кластерные поля",
      caption: "Sugar Rush + Jammin’ Jars + Retro Tapes",
      slugs: ["sugar-rush", "jammin-jars", "retro-tapes"],
    },
  ];

  function save(next: string[]) {
    const normalized = next
      .filter((slug) => slots.some((game) => game.slug === slug))
      .slice(0, 3);
    setSelected(normalized);
    localStorage.setItem("slotfolio-compare", JSON.stringify(normalized));
    window.dispatchEvent(new Event("comparison-change"));
  }

  function remove(slug: string) {
    save(selected.filter((item) => item !== slug));
  }

  function add() {
    if (!picker || selected.length >= 3 || selected.includes(picker)) return;
    save([...selected, picker]);
    setPicker("");
  }

  function setPreset(slugs: string[]) {
    save(slugs);
    setPicker("");
  }

  const selectedMechanics = new Set(games.flatMap((game) => slotMechanics(game)));
  const fields = new Set(games.map((game) => game.field));
  const rtps = games.map(slotRtpValue);
  const minRtp = rtps.length ? Math.min(...rtps) : 0;
  const maxRtp = rtps.length ? Math.max(...rtps) : 0;

  return (
    <div className="comparison">
      <section className="comparison-builder" aria-label="Выбор игр для сравнения">
        <div className="comparison-builder-copy">
          <span className="eyebrow">Ваш набор</span>
          <h2>
            {games.length
              ? `${games.length} из 3 мест занято`
              : "Выберите игры для таблицы"}
          </h2>
          <p>
            Добавляйте игры прямо здесь или начните с готовой пары. Сравнение
            не пытается выбрать победителя: оно показывает различия в правилах
            и характеристиках.
          </p>
        </div>

        <div className="comparison-picker">
          <label htmlFor="comparison-game">Добавить игру</label>
          <div>
            <select
              id="comparison-game"
              value={picker}
              onChange={(event) => setPicker(event.target.value)}
              disabled={selected.length >= 3 || !availableGames.length}
            >
              <option value="">
                {selected.length >= 3 ? "Лимит — три игры" : "Выберите из каталога"}
              </option>
              {availableGames.map((game) => (
                <option key={game.slug} value={game.slug}>
                  {game.name} · {game.provider}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={add}
              disabled={!picker || selected.length >= 3}
            >
              Добавить
            </button>
          </div>
          {games.length > 0 && (
            <button
              type="button"
              className="comparison-clear"
              onClick={() => save([])}
            >
              Очистить сравнение
            </button>
          )}
        </div>
      </section>

      {games.length > 0 && (
        <div className="comparison-selection" aria-label="Выбранные игры">
          {games.map((game, index) => (
            <article key={game.slug}>
              <span className="comparison-selection-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Link href={`/slots/${game.slug}`}>
                <GameImage slot={game} />
              </Link>
              <div>
                <span className="eyebrow">{game.provider}</span>
                <h3>
                  <Link href={`/slots/${game.slug}`}>{game.name}</Link>
                </h3>
                <p>
                  {slotMechanics(game).join(" · ")} · {game.rtp}
                </p>
              </div>
              <button
                type="button"
                onClick={() => remove(game.slug)}
                aria-label={`Удалить ${game.name} из сравнения`}
              >
                ×
              </button>
            </article>
          ))}
          {Array.from({ length: 3 - games.length }).map((_, index) => (
            <div className="comparison-selection-empty" key={index}>
              <span>+</span>
              <small>Свободное место</small>
            </div>
          ))}
        </div>
      )}

      {games.length >= 2 && (
        <section className="comparison-summary" aria-label="Короткая сводка">
          <div>
            <span className="eyebrow">Механика</span>
            <strong>
              {selectedMechanics.size === 1
                ? "Одинаковая"
                : `${selectedMechanics.size} разные`}
            </strong>
            <small>{Array.from(selectedMechanics).join(" · ")}</small>
          </div>
          <div>
            <span className="eyebrow">Игровое поле</span>
            <strong>
              {fields.size === 1 ? "Одинаковое" : `${fields.size} варианта`}
            </strong>
            <small>{Array.from(fields).join(" · ")}</small>
          </div>
          <div>
            <span className="eyebrow">RTP*</span>
            <strong>
              {minRtp === maxRtp
                ? `${minRtp.toFixed(2).replace(".", ",")}%`
                : `${minRtp.toFixed(2).replace(".", ",")}–${maxRtp
                    .toFixed(2)
                    .replace(".", ",")}%`}
            </strong>
            <small>Справочные версии игр</small>
          </div>
        </section>
      )}

      {games.length ? (
        <>
          <div className="comparison-scroll">
            <table className="comparison-table">
              <caption className="sr-only">Сравнение выбранных игр</caption>
              <thead>
                <tr>
                  <th>Параметр</th>
                  {games.map((game) => (
                    <th key={game.slug}>
                      <Link href={`/slots/${game.slug}`}>{game.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Провайдер</th>
                  {games.map((game) => (
                    <td key={game.slug}>
                      <Link
                        className="comparison-cell-link"
                        href={`/providers/${providerSlug(game.provider)}`}
                      >
                        {game.provider} ↗
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Механики</th>
                  {games.map((game) => (
                    <td key={game.slug}>
                      <div className="comparison-mechanics">
                        {slotMechanics(game).map((name) => {
                          const mechanic = mechanics.find((item) => item.name === name);
                          return mechanic ? (
                            <Link
                              key={name}
                              className="comparison-cell-link"
                              href={`/mechanics/${mechanic.slug}`}
                            >
                              {name} ↗
                            </Link>
                          ) : (
                            <span key={name}>{name}</span>
                          );
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Ключевые особенности</th>
                  {games.map((game) => (
                    <td key={game.slug}>{game.tags.join(" · ")}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">RTP-конфигурации</th>
                  {games.map((game) => {
                    const metrics = getVerifiedSlotMetrics(game.slug);
                    return (
                      <td key={game.slug}>
                        {metrics?.rtpVariants?.length
                          ? metrics.rtpVariants.join(" · ")
                          : `${game.rtp} · другие публично не подтверждены`}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <th scope="row">Подтверждённый максимум</th>
                  {games.map((game) => {
                    const metrics = getVerifiedSlotMetrics(game.slug);
                    return (
                      <td key={game.slug}>
                        {metrics?.maxWin
                          ? `${metrics.maxWin} · ${(metrics.maxWinLabel || "максимум").toLowerCase()}`
                          : "Не указан в используемом публичном источнике"}
                      </td>
                    );
                  })}
                </tr>
                {[
                  ["Поле", "field"],
                  ["RTP*", "rtp"],
                  ["Волатильность", "volatility"],
                  ["Год", "year"],
                  ["Особенность", "feature"],
                  ["Взгляд редакции", "note"],
                ].map(([label, key]) => (
                  <tr key={key}>
                    <th scope="row">{label}</th>
                    {games.map((game) => (
                      <td key={game.slug}>{game[key as keyof Slot]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="data-note comparison-note">
            * Справочные значения могут отличаться от конфигурации оператора.
            Высокий RTP не гарантирует выигрыш.
          </p>
        </>
      ) : (
        <div className="comparison-empty">
          <span className="eyebrow accent">Быстрый старт</span>
          <h2>Не обязательно начинать с пустой таблицы.</h2>
          <p>
            Выберите готовую пару, чтобы сразу увидеть, как работает сравнение.
          </p>
        </div>
      )}

      <section className="comparison-presets" aria-label="Готовые сравнения">
        {presets.map((preset, index) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => setPreset(preset.slugs)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{preset.label}</strong>
            <small>{preset.caption}</small>
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </section>

      <div className="comparison-end">
        <p>
          Нужной игры ещё нет в указателе? Каталог расширяется постепенно,
          по мере подготовки и проверки новых досье.
        </p>
        <Link className="text-link" href="/slots">
          Открыть каталог ↗
        </Link>
      </div>
    </div>
  );
}
