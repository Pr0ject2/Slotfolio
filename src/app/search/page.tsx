import { Catalog } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
export const metadata = { title: "Поиск игр" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const p = await searchParams;
  return (
    <>
      <Breadcrumbs items={[{ label: "Поиск" }]} />
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Быстрый доступ</span>
          <h1>Найти свою игру</h1>
        </div>
        <p>
          Поиск по названию игры и провайдеру.
          <br />
          Материалы и гайды собраны в журнале.
        </p>
      </div>
      <Catalog
        initialQ={typeof p.q === "string" ? p.q : ""}
        initialProvider={typeof p.provider === "string" ? p.provider : ""}
        initialMechanic={typeof p.mechanic === "string" ? p.mechanic : ""}
        initialSort={typeof p.sort === "string" ? p.sort : "editorial"}
      />
    </>
  );
}
