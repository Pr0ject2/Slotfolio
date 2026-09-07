import { notFound } from "next/navigation";
import { systemPages } from "@/lib/system-pages";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(systemPages).map((page) => ({ page }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const data = systemPages[page];
  if (!data) {
    return pageMetadata({
      title: "Страница не найдена",
      description: "Такой страницы нет в Slotfolio.",
      path: "/",
      noIndex: true,
    });
  }

  return pageMetadata({
    title: data.title,
    description: data.intro,
    path: `/${page}`,
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const data = systemPages[(await params).page];
  if (!data) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: data.eyebrow }]} />
      <div className="simple-heading">
        <span className="eyebrow accent">{data.eyebrow}</span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
      </div>
      <div className="article-layout">
        <nav className="article-toc">
          <span className="eyebrow">На странице</span>
          {data.sections.map((s, i) => (
            <a href={"#section-" + i} key={s.title}>
              {s.title}
            </a>
          ))}
        </nav>
        <article className="prose">
          {data.sections.map((s, i) => (
            <section id={"section-" + i} key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
