import { Catalog } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
import { slots } from "@/lib/data";
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
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Игровой указатель</span>
          <h1>
            Каталог слотов<span className="title-count">{String(slots.length).padStart(2, "0")}</span>
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
