import { Suspense } from "react";
import { Catalog, CatalogFromUrl } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Поиск игр",
  description: "Поиск по каталогу Slotfolio по названию, провайдеру, механике, особенностям, RTP и волатильности.",
  path: "/search",
  noIndex: true,
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Поиск" }]} />
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Быстрый доступ</span>
          <h1>Найти свою игру</h1>
        </div>
        <p>
          Поиск по названию, провайдеру, механике и особенностям.
          <br />
          Материалы и гайды собраны в журнале.
        </p>
      </div>
      <Suspense fallback={<Catalog />}>
        <CatalogFromUrl />
      </Suspense>
    </>
  );
}
