import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/editorial";
import { catalogSeeds, getCatalogSeed } from "@/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "@/lib/catalog-research-lookup";
import { getCatalogVerifiedDetails } from "@/lib/catalog-verified-details";
import { createCatalogModel } from "@/lib/catalog-index";
import type { CatalogItem } from "@/lib/catalog-query";
import { providerSlug } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

const catalogModel = createCatalogModel();

function itemHref(item: CatalogItem) {
  return item.coverage === "dossier" ? `/slots/${item.slug}` : `/slots/catalog/${item.slug}`;
}

function coverageLabel(item: CatalogItem) {
  if (item.coverage === "dossier") return "Полное досье";
  if (item.mechanics.length) return "Механика проверена";
  return "Базовая запись";
}

function sortUsefulFirst(a: CatalogItem, b: CatalogItem) {
  if (a.coverage !== b.coverage) return a.coverage === "dossier" ? -1 : 1;
  if (a.mechanics.length !== b.mechanics.length) return b.mechanics.length - a.mechanics.length;
  return a.name.localeCompare(b.name, "ru");
}

function RelatedGames({ items }: { items: CatalogItem[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <Link className="game-row" href={itemHref(item)} key={item.slug}>
          <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="row-main">
            <span className="eyebrow">{coverageLabel(item)}</span>
            <h3>{item.name}</h3>
            <p>
              {item.provider}
              {item.mechanics.length ? <><span>·</span>{item.mechanics.join(" · ")}</> : null}
            </p>
          </div>
          <span className="row-arrow" aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  );
}

function displayDate(value?: string) {
  return value ? value.split("-").reverse().join(".") : null;
}

export function generateStaticParams() {
  return catalogSeeds.map((slot) => ({ slug: slot.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slot = getCatalogSeed((await params).slug);
  if (!slot) {
    return pageMetadata({
      title: "Игра не найдена",
      description: "Такой записи нет в текущем каталоге Slotfolio.",
      path: "/slots",
      image: "/images/unavailable.svg",
      noIndex: true,
    });
  }

  const research = getVerifiedCatalogResearch(slot.slug);
  const details = getCatalogVerifiedDetails(slot.slug);
  const mechanicsText = research?.mechanics.length
    ? ` Подтверждённые механики: ${research.mechanics.join(", ")}.`
    : "";
  const technicalText = details
    ? ` RTP ${details.rtp ?? "не указан"}${details.maxWin ? `, максимум ${details.maxWin}` : ""}${details.releaseDate ? `, релиз ${displayDate(details.releaseDate)}` : ""}.`
    : "";

  return pageMetadata({
    title: `${slot.name} от ${slot.provider}`,
    description: `${slot.name} подтверждён в официальном каталоге ${slot.provider}.${mechanicsText}${technicalText} Неисследованные характеристики не заполняются без источника.`,
    path: `/slots/catalog/${slot.slug}`,
    image: "/images/unavailable.svg",
    noIndex: true,
  });
}

export default async function CatalogSlotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slot = getCatalogSeed((await params).slug);
  if (!slot) notFound();
  const research = getVerifiedCatalogResearch(slot.slug);
  const details = getCatalogVerifiedDetails(slot.slug);
  const knownMechanics = research?.mechanics ?? [];
  const verifiedAt = displayDate(details?.verifiedAt ?? research?.verifiedAt);
  const releaseDate = displayDate(details?.releaseDate);
  const hasVerifiedTechnicalData = Boolean(details?.rtp || details?.volatility || details?.field || details?.maxWin || details?.releaseDate);

  const confirmed = [
    "название",
    "провайдер",
    knownMechanics.length ? "механика" : null,
    details?.field ? "формат поля" : null,
    details?.rtp ? "RTP" : null,
    details?.maxWin ? "макс. выигрыш" : null,
    details?.volatility ? "волатильность" : null,
    details?.releaseDate ? "дата релиза" : null,
  ].filter(Boolean) as string[];
  const pending = [
    knownMechanics.length ? null : "механика",
    details?.field ? null : "формат поля",
    details?.rtp ? null : "RTP",
    details?.maxWin ? null : "макс. выигрыш",
    details?.volatility ? null : "волатильность",
    details?.releaseDate ? null : "дата релиза",
    "обложка",
  ].filter(Boolean) as string[];

  const providerItems = catalogModel.items
    .filter((item) => item.slug !== slot.slug && item.provider === slot.provider)
    .sort(sortUsefulFirst)
    .slice(0, 6);
  const providerItemSlugs = new Set(providerItems.map((item) => item.slug));
  const mechanicItems = knownMechanics.length
    ? catalogModel.items
        .filter(
          (item) =>
            item.slug !== slot.slug &&
            !providerItemSlugs.has(item.slug) &&
            item.mechanics.some((mechanic) => knownMechanics.includes(mechanic)),
        )
        .sort((a, b) => {
          const aOverlap = a.mechanics.filter((mechanic) => knownMechanics.includes(mechanic)).length;
          const bOverlap = b.mechanics.filter((mechanic) => knownMechanics.includes(mechanic)).length;
          return bOverlap - aOverlap || sortUsefulFirst(a, b);
        })
        .slice(0, 6)
    : [];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Каталог", href: "/slots" },
          { label: slot.name },
        ]}
      />
      <article className="catalog-record-page">
        <header className="catalog-record-heading">
          <span className="eyebrow accent">{knownMechanics.length || hasVerifiedTechnicalData ? "Проверенная запись" : "Базовая запись"}</span>
          <h1>{slot.name}</h1>
          <Link className="provider-link" href={`/slots?provider=${providerSlug(slot.provider)}`}>{slot.provider} ↗</Link>
          <p className="catalog-record-deck">
            {hasVerifiedTechnicalData
              ? `Игра подтверждена в официальном каталоге ${slot.provider}. Основные технические параметры ниже уже сверены с источником; неподтверждённые поля остаются пустыми.`
              : knownMechanics.length
                ? `Игра подтверждена в официальном каталоге ${slot.provider}. Механика уже проверена по источнику; остальные характеристики добавляются только после отдельной верификации.`
                : `Игра подтверждена в официальном каталоге ${slot.provider}. Страница остаётся в каталоге, пока технические характеристики проходят отдельную проверку.`}
          </p>
        </header>

        <div className="catalog-record-body">
          <section aria-labelledby="record-facts">
            <h2 id="record-facts">Что подтверждено</h2>
            <dl className="catalog-record-facts">
              <div><dt>Название</dt><dd>{slot.name}</dd></div>
              <div><dt>Провайдер</dt><dd><Link href={`/slots?provider=${providerSlug(slot.provider)}`}>{slot.provider}</Link></dd></div>
              <div><dt>Статус</dt><dd>{hasVerifiedTechnicalData ? "Технические данные проверены" : knownMechanics.length ? "Механика проверена" : "Проверены название и провайдер"}</dd></div>
              {knownMechanics.length ? (
                <div>
                  <dt>Механика</dt>
                  <dd>
                    {knownMechanics.map((mechanic, index) => (
                      <span key={mechanic}>
                        {index ? " · " : ""}
                        <Link href={`/slots?mechanic=${encodeURIComponent(mechanic)}`}>{mechanic}</Link>
                      </span>
                    ))}
                  </dd>
                </div>
              ) : null}
              {details?.field ? <div><dt>Поле</dt><dd>{details.field}</dd></div> : null}
              {details?.rtp ? <div><dt>RTP</dt><dd>{details.rtp}</dd></div> : null}
              {details?.maxWin ? <div><dt>Макс. выигрыш</dt><dd>{details.maxWin}</dd></div> : null}
              {details?.volatility ? <div><dt>Волатильность</dt><dd>{details.volatility}</dd></div> : null}
              {releaseDate ? <div><dt>Дата релиза</dt><dd>{releaseDate}</dd></div> : null}
              {verifiedAt ? <div><dt>Проверено</dt><dd>{verifiedAt}</dd></div> : null}
              <div><dt>Источник</dt><dd><a href={details?.source ?? slot.source} rel="noreferrer">Официальная страница {slot.provider} ↗</a></dd></div>
            </dl>
          </section>

          <aside className="catalog-record-status">
            <span className="eyebrow">Покрытие данных</span>
            <h2>{hasVerifiedTechnicalData ? "Техническая карточка уже заполнена" : knownMechanics.length ? "Основа уже проверена" : "Запись в очереди на исследование"}</h2>
            <p><strong>Подтверждено:</strong> {confirmed.join(", ")}.</p>
            <p><strong>Ещё не подтверждено:</strong> {pending.join(", ")}. Эти поля намеренно не заполняются догадками.</p>
            <p>Наличие игры у разработчика не считается доказательством её доступности у конкретного оператора. Полное сравнение включается только после отдельного досье.</p>
          </aside>
        </div>

        <nav className="catalog-record-next" aria-label="Продолжить изучение">
          <Link className="text-link" href={`/slots?provider=${providerSlug(slot.provider)}`}>Все игры {slot.provider} ↗</Link>
          {knownMechanics.map((mechanic) => (
            <Link className="text-link" href={`/slots?mechanic=${encodeURIComponent(mechanic)}`} key={mechanic}>{mechanic} в каталоге ↗</Link>
          ))}
          <Link className="text-link" href="/slots">Весь каталог ↗</Link>
        </nav>

        {providerItems.length ? (
          <section aria-labelledby="provider-related">
            <div className="section-title">
              <h2 id="provider-related">Ещё у {slot.provider}</h2>
              <Link className="text-link" href={`/slots?provider=${providerSlug(slot.provider)}`}>Все игры ↗</Link>
            </div>
            <RelatedGames items={providerItems} />
          </section>
        ) : null}

        {mechanicItems.length ? (
          <section aria-labelledby="mechanic-related">
            <div className="section-title">
              <h2 id="mechanic-related">Похожие по механике</h2>
              <Link className="text-link" href={`/slots?mechanic=${encodeURIComponent(knownMechanics[0])}`}>Открыть фильтр ↗</Link>
            </div>
            <RelatedGames items={mechanicItems} />
          </section>
        ) : null}
      </article>
    </>
  );
}
