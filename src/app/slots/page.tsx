import { Suspense } from "react";
import { Catalog, CatalogFromUrl } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
import { slots } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Каталог слотов",
  description: "Каталог слотов Slotfolio с фильтрами по провайдеру и механике, краткими характеристиками и переходами к подробным досье.",
  path: "/slots",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Каталог слотов" }]} />
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Игровой указатель</span>
          <h1>
            Каталог слотов
            <span className="title-count">
              {String(slots.length).padStart(2, "0")}
            </span>
          </h1>
        </div>
        <p>
          От знакомого названия — к устройству игры.
          <br />
          Ищите, изучайте механику, сравнивайте.
        </p>
      </div>
      <Suspense fallback={<Catalog />}>
        <CatalogFromUrl />
      </Suspense>
    </>
  );
}
