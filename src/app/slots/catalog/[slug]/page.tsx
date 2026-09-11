import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/editorial";
import { catalogSeeds, getCatalogSeed } from "@/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "@/lib/catalog-research-lookup";
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
  const mechanicsText = research?.mechanics.length
    ? ` Подтверждённые механики: ${research.mechanics.join(", ")}.`
    : "";

  return pageMetadata({
    title: `${slot.name} от ${slot.provider}`,
    description: `${slot.name} подтверждён в официальном каталоге ${slot.provider}.${mechanicsText} Неисследованные характеристики не заполняются без источника.`,
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
  const knownMechanics = research?.mechanics ?? [];
  const verifiedAt = research?.verifiedAt
    ? research.verifiedAt.split("-").reverse().join(".")
    : null;

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
          <span className="eyebrow accent">Базовая запись</span>
          <h1>{slot.name}</h1>
          <Link className="provider-link" href={`/slots?provider=${providerSlug(slot.provider)}`}>{slot.provider} ↗</Link>
          <p className="catalog-record-deck">
            {knownMechanics.length
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
              <div><dt>Статус</dt><dd>{knownMechanics.length ? "Механика проверена" : "Проверены название и провайдер"}</dd></div>
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
              {verifiedAt ? <div><dt>Проверено</dt><dd>{verifiedAt}</dd></div> : null}
              <div><dt>Источник</dt><dd><a href={slot.source} rel="noreferrer">Официальный каталог ↗</a></dd></div>
            </dl>
          </section>

          <aside className="catalog-record-status">
            <span className="eyebrow">Покрытие данных</span>
            <h2>{knownMechanics.length ? "Основа уже проверена" : "Запись в очереди на исследование"}</h2>
            <p>
              <strong>Подтверждено:</strong> название, провайдер{knownMechanics.length ? `, ${knownMechanics.join(" и ").toLowerCase()}` : ""}.
            </p>
            <p>
              <strong>Ещё не подтверждено:</strong> RTP, волатильность, год выпуска и обложка{knownMechanics.length ? "" : ", механика"}. Эти поля намеренно не заполняются догадками.
            </p>
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
