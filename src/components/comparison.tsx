"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GameImage } from "./editorial-client";
import {
  MAX_COMPARE,
  readSelection,
  saveSelection,
  useSelection,
} from "./compare-button";
import type { ComparisonItem } from "@/lib/catalog-index";

function ruPlural(count: number, one: string, few: string, many: string) {
  const mod100 = count % 100;
  const mod10 = count % 10;
  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

function formatRange(values: Array<number | null>) {
  const finite = values.filter((value): value is number => value !== null && Number.isFinite(value));
  if (!finite.length) return "Не указан";
  const min = Math.min(...finite);
  const max = Math.max(...finite);
  const format = (value: number) => `${value.toFixed(2).replace(".", ",")}%`;
  return min === max ? format(min) : `${format(min)}–${format(max)}`;
}

export function Comparison({ items }: { items: ComparisonItem[] }) {
  const selected = useSelection();
  const [seedMessage, setSeedMessage] = useState("");
  const [picker, setPicker] = useState("");
  const seed = useSearchParams().get("seed");
  const itemBySlug = useMemo(() => new Map(items.map((item) => [item.slug, item])), [items]);
  const validSelected = selected.filter((slug) => itemBySlug.has(slug)).slice(0, MAX_COMPARE);

  useEffect(() => {
    if (selected.join("|") !== validSelected.join("|")) saveSelection(validSelected);
  }, [selected, validSelected]);

  useEffect(() => {
    if (!seed || !itemBySlug.has(seed)) return;
    const stored = readSelection().filter((slug) => itemBySlug.has(slug));
    if (!stored.includes(seed) && stored.length >= MAX_COMPARE) {
      setSeedMessage("Чтобы добавить эту игру, освободите место в сравнении.");
      return;
    }
    if (!stored.includes(seed)) saveSelection([...stored, seed]);
    setSeedMessage("");
    const url = new URL(window.location.href);
    url.searchParams.delete("seed");
    window.history.replaceState(null, "", url.pathname + url.search);
  }, [seed, itemBySlug, selected.length]);

  const games = validSelected
    .map((slug) => itemBySlug.get(slug))
    .filter((game): game is ComparisonItem => Boolean(game));
  const availableGames = items.filter((game) => !validSelected.includes(game.slug));
  const presets = [
    { label: "Два каскадных подхода", caption: "Gates of Olympus + Sweet Bonanza", slugs: ["gates-of-olympus", "sweet-bonanza"] },
    { label: "Линии против кластеров", caption: "Book of Dead + Reactoonz", slugs: ["book-of-dead", "reactoonz"] },
    { label: "Динамические способы", caption: "San Quentin xWays + Fire in the Hole", slugs: ["san-quentin-xways", "fire-in-the-hole"] },
    { label: "Два поколения каскадов", caption: "Gonzo’s Quest + Gates of Olympus", slugs: ["gonzos-quest", "gates-of-olympus"] },
    { label: "Классическая сетка", caption: "Starburst + Book of 99", slugs: ["starburst", "book-of-99"] },
    { label: "Большие кластерные поля", caption: "Sugar Rush + Jammin’ Jars", slugs: ["sugar-rush", "jammin-jars"] },
    { label: "Один провайдер, разная логика", caption: "Wanted Dead or a Wild + Le Bandit", slugs: ["wanted-dead-or-a-wild", "le-bandit"] },
    { label: "Сбор как центр бонуса", caption: "Money Train 2 + Big Bass Bonanza", slugs: ["money-train-2", "big-bass-bonanza"] },
  ].filter((preset) => preset.slugs.every((slug) => itemBySlug.has(slug)));

  function remove(slug: string) {
    saveSelection(validSelected.filter((item) => item !== slug));
  }

  function add() {
    if (!picker || validSelected.length >= MAX_COMPARE || validSelected.includes(picker)) return;
    saveSelection([...validSelected, picker]);
    setPicker("");
  }

  function setPreset(slugs: string[]) {
    saveSelection(slugs.slice(0, MAX_COMPARE));
    setPicker("");
  }

  const selectedMechanics = new Set(games.flatMap((game) => game.mechanics.map((item) => item.name)));
  const fields = new Set(games.map((game) => game.field));

  return (
    <div className="comparison">
      {seedMessage && <p className="data-note" role="status">{seedMessage}</p>}
      <section className="comparison-builder" aria-label="Выбор игр для сравнения">
        <div className="comparison-builder-copy">
          <span className="eyebrow">Ваш набор</span>
          <h2>{games.length ? `${games.length} из ${MAX_COMPARE} мест занято` : "Выберите игры для таблицы"}</h2>
          <p>
            Сравнение рассчитано на пару: так легче заметить различия в правилах и характеристиках, не превращая таблицу в простыню.
          </p>
        </div>

        <div className="comparison-picker">
          <label htmlFor="comparison-game">Добавить игру</label>
          <div>
            <select
              id="comparison-game"
              value={picker}
              onChange={(event) => setPicker(event.target.value)}
              disabled={validSelected.length >= MAX_COMPARE || !availableGames.length}
            >
              <option value="">
                {validSelected.length >= MAX_COMPARE ? "Лимит — две игры" : "Выберите из каталога"}
              </option>
              {availableGames.map((game) => (
                <option key={game.slug} value={game.slug}>{game.name} · {game.provider}</option>
              ))}
            </select>
            <button type="button" onClick={add} disabled={!picker || validSelected.length >= MAX_COMPARE}>Добавить</button>
          </div>
          {games.length > 0 && (
            <button type="button" className="comparison-clear" onClick={() => saveSelection([])}>Очистить сравнение</button>
          )}
        </div>
      </section>

      {games.length > 0 && (
        <div className="comparison-selection" aria-label="Выбранные игры">
          {games.map((game, index) => (
            <article key={game.slug}>
              <span className="comparison-selection-index">{String(index + 1).padStart(2, "0")}</span>
              <Link href={`/slots/${game.slug}`}><GameImage slot={game} /></Link>
              <div>
                <span className="eyebrow">{game.provider}</span>
                <h3><Link href={`/slots/${game.slug}`}>{game.name}</Link></h3>
                <p>{game.mechanics.map((item) => item.name).join(" · ")} · {game.rtp}</p>
              </div>
              <button type="button" onClick={() => remove(game.slug)} aria-label={`Удалить ${game.name} из сравнения`}>×</button>
            </article>
          ))}
          {Array.from({ length: MAX_COMPARE - games.length }).map((_, index) => (
            <div className="comparison-selection-empty" key={index}>
              <span>+</span><small>Свободное место</small>
            </div>
          ))}
        </div>
      )}

      {games.length >= 2 && (
        <section className="comparison-summary" aria-label="Короткая сводка">
          <div>
            <span className="eyebrow">Механика</span>
            <strong>{selectedMechanics.size === 1 ? "Одинаковая" : `${selectedMechanics.size} ${ruPlural(selectedMechanics.size, "механика", "механики", "механик")}`}</strong>
            <small>{Array.from(selectedMechanics).join(" · ")}</small>
          </div>
          <div>
            <span className="eyebrow">Игровое поле</span>
            <strong>{fields.size === 1 ? "Одинаковое" : `${fields.size} варианта`}</strong>
            <small>{Array.from(fields).join(" · ")}</small>
          </div>
          <div>
            <span className="eyebrow">RTP*</span>
            <strong>{formatRange(games.map((game) => game.rtpValue))}</strong>
            <small>Справочные версии игр</small>
          </div>
        </section>
      )}

      {games.length ? (
        <>
          <div className="comparison-scroll" tabIndex={0} role="region" aria-label="Таблица сравнения, прокручивается по горизонтали">
            <table className="comparison-table">
              <caption className="sr-only">Сравнение выбранных игр</caption>
              <thead><tr><th>Параметр</th>{games.map((game) => <th key={game.slug}><Link href={`/slots/${game.slug}`}>{game.name}</Link></th>)}</tr></thead>
              <tbody>
                <tr><th scope="row">Провайдер</th>{games.map((game) => <td key={game.slug}><Link className="comparison-cell-link" href={`/providers/${game.providerSlug}`}>{game.provider} ↗</Link></td>)}</tr>
                <tr><th scope="row">Механики</th>{games.map((game) => <td key={game.slug}><div className="comparison-mechanics">{game.mechanics.map((mechanic) => mechanic.slug ? <Link key={mechanic.name} className="comparison-cell-link" href={`/mechanics/${mechanic.slug}`}>{mechanic.name} ↗</Link> : <span key={mechanic.name}>{mechanic.name}</span>)}</div></td>)}</tr>
                <tr><th scope="row">Ключевые особенности</th>{games.map((game) => <td key={game.slug}>{game.tags.join(" · ")}</td>)}</tr>
                <tr><th scope="row">RTP-конфигурации</th>{games.map((game) => <td key={game.slug}>{game.metrics?.rtpVariants?.length ? game.metrics.rtpVariants.join(" · ") : `${game.rtp} · другие публично не подтверждены`}</td>)}</tr>
                <tr><th scope="row">Подтверждённый максимум</th>{games.map((game) => <td key={game.slug}>{game.metrics?.maxWin ? `${game.metrics.maxWin} · ${(game.metrics.maxWinLabel || "максимум").toLowerCase()}` : "Не указан в используемом публичном источнике"}</td>)}</tr>
                {[
                  ["Поле", "field"], ["RTP*", "rtp"], ["Волатильность", "volatility"], ["Год", "year"], ["Особенность", "feature"], ["Взгляд редакции", "note"],
                ].map(([label, key]) => (
                  <tr key={key}><th scope="row">{label}</th>{games.map((game) => <td key={game.slug}>{String(game[key as keyof ComparisonItem] ?? "")}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="data-note comparison-note">* Справочные значения могут отличаться от конфигурации оператора. Высокий RTP не гарантирует выигрыш.</p>
        </>
      ) : (
        <div className="comparison-empty">
          <span className="eyebrow accent">Быстрый старт</span>
          <h2>Не обязательно начинать с пустой таблицы.</h2>
          <p>Выберите готовую пару, чтобы сразу увидеть, как работает сравнение.</p>
        </div>
      )}

      <section className="comparison-presets" aria-label="Готовые сравнения">
        {presets.map((preset, index) => (
          <button key={preset.label} type="button" onClick={() => setPreset(preset.slugs)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{preset.label}</strong><small>{preset.caption}</small><b aria-hidden="true">↗</b>
          </button>
        ))}
      </section>

      <div className="comparison-end">
        <p>Нужной игры ещё нет в указателе? Каталог расширяется постепенно, по мере подготовки и проверки новых досье.</p>
        <Link className="text-link" href="/slots">Открыть каталог ↗</Link>
      </div>
    </div>
  );
}
