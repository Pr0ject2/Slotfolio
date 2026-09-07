import { Suspense } from "react";
import { Catalog, CatalogFromUrl } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";

export const metadata = { title: "Поиск игр" };

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
          Поиск по названию, провайдеру и механике.
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
