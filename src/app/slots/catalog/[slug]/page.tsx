import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/editorial";
import { catalogSeeds, getCatalogSeed } from "@/lib/catalog-seeds";
import { getVerifiedCatalogResearch } from "@/lib/catalog-research-lookup";
import { providerSlug } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

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

  return pageMetadata({
    title: `${slot.name} от ${slot.provider}`,
    description: `${slot.name} подтверждён в официальном каталоге ${slot.provider}. Подробное досье Slotfolio находится в очереди на редакционную проверку.`,
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
        <p className="catalog-record-deck">Игра из официального каталога провайдера. Здесь собраны подтверждённые сведения; подробного разбора пока нет.</p>
        </header>
        <div className="catalog-record-body">
          <section aria-labelledby="record-facts">
            <h2 id="record-facts">Проверенные сведения</h2>
            <dl className="catalog-record-facts">
              <div><dt>Название</dt><dd>{slot.name}</dd></div>
              <div><dt>Провайдер</dt><dd>{slot.provider}</dd></div>
              {research?.mechanics.length ? <div><dt>Механика</dt><dd>{research.mechanics.join(" · ")}</dd></div> : null}
              <div><dt>Источник</dt><dd><a href={slot.source} rel="noreferrer">Официальный каталог ↗</a></dd></div>
            </dl>
          </section>
          <aside className="catalog-record-status">
            <span className="eyebrow">До подробного досье</span>
            <h2>Что ещё не проверено</h2>
            <p>
              {research?.mechanics.length
                ? "RTP, волатильность, год выпуска и обложка требуют отдельной проверки. Подтверждённая механика уже учитывается в каталоге, но до полного досье игру нельзя корректно сравнить с другими."
                : "RTP, волатильность, механики, год выпуска и обложка требуют отдельной проверки. До проверки этих данных игру нельзя корректно сравнить с другими."}
            </p>
            <p>Наличие игры в каталоге разработчика не подтверждает её доступность у конкретного оператора.</p>
          </aside>
        </div>
        <nav className="catalog-record-next" aria-label="Продолжить изучение">
          <Link className="text-link" href={`/slots?provider=${providerSlug(slot.provider)}`}>Другие игры {slot.provider} ↗</Link>
          <Link className="text-link" href="/slots">Весь каталог ↗</Link>
        </nav>
      </article>
    </>
  );
}
