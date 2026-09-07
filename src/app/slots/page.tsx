import { Catalog } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
export const metadata = { title: "Каталог слотов" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const p = await searchParams;
  return (
    <>
      <Breadcrumbs items={[{ label: "Каталог слотов" }]} />
      <div className="page-heading">
        <div>
          <span className="eyebrow accent">Игровой указатель</span>
          <h1>
            Каталог слотов<span className="title-count">06</span>
          </h1>
        </div>
        <p>
          От знакомого названия — к устройству игры.
          <br />
          Ищите, изучайте механику, сравнивайте.
        </p>
      </div>
      <Catalog
        initialSort={typeof p.sort === "string" ? p.sort : "editorial"}
        initialQ={typeof p.q === "string" ? p.q : ""}
        initialProvider={typeof p.provider === "string" ? p.provider : ""}
        initialMechanic={typeof p.mechanic === "string" ? p.mechanic : ""}
      />
    </>
  );
}
