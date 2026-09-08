import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/editorial";
import { catalogSeeds, getCatalogSeed } from "@/lib/catalog-seeds";
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
      noIndex: true,
    });
  }

  return pageMetadata({
    title: `${slot.name} от ${slot.provider}`,
    description: `${slot.name} подтверждён в официальном каталоге ${slot.provider}. Подробное досье Slotfolio находится в очереди на редакционную проверку.`,
    path: `/slots/catalog/${slot.slug}`,
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

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Каталог", href: "/slots" },
          { label: slot.name },
        ]}
      />
      <main className="prose catalog-record-page">
        <span className="eyebrow accent">Каталожная запись</span>
        <h1>{slot.name}</h1>
        <p className="slot-deck">{slot.provider}</p>

        <section>
          <h2>Что уже подтверждено</h2>
          <p>
            Название игры и принадлежность к {slot.provider} взяты из официального каталога провайдера.
            Запись добавлена в общий указатель Slotfolio, чтобы каталог мог расти быстрее, не заполняя
            неизвестные характеристики догадками.
          </p>
          <p>
            RTP, волатильность, год выпуска, механики и игровая графика появятся здесь только после
            отдельной проверки. До этого мы намеренно не показываем приблизительные значения.
          </p>
          <a className="text-link" href={slot.source} rel="noreferrer">
            Официальный источник провайдера ↗
          </a>
        </section>

        <section>
          <h2>Статус досье</h2>
          <p>
            Сейчас это проверенная каталожная запись, а не полное редакционное досье. По мере обработки
            игр она будет заменена полноценной страницей с механикой, RTP-конфигурациями, особенностями,
            источниками и сравнением.
          </p>
          <Link className="text-link" href={`/slots?provider=${encodeURIComponent(slot.provider)}`}>
            Другие игры {slot.provider} ↗
          </Link>
        </section>
      </main>
    </>
  );
}
