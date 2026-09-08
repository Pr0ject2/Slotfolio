import { Suspense } from "react";
import { CatalogFromUrl } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
import { createCatalogModel } from "@/lib/catalog-index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Каталог слотов",
  description: "Каталог слотов Slotfolio с поиском и фильтрами, проверенными источниками провайдеров и подробными редакционными досье для исследованных игр.",
  path: "/slots",
});

export default function Page() {
  const model = createCatalogModel();
  return (
    <>
      <Breadcrumbs items={[{ label: "Каталог слотов" }]} />
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Игровой указатель</span>
          <h1>
            Каталог слотов
            <span className="title-count">{String(model.facets.total).padStart(2, "0")}</span>
          </h1>
        </div>
        <p>
          От знакомого названия — к устройству игры.
          <br />
          Ищите, изучайте механику, сравнивайте.
        </p>
      </div>
      <Suspense fallback={<div className="catalog-loading">Готовим каталог…</div>}>
        <CatalogFromUrl model={model} />
      </Suspense>
    </>
  );
}
