import Link from "next/link";
import { notFound } from "next/navigation";
import { slots, providerSlug } from "@/lib/data";
import { Breadcrumbs, SectionTitle, GameRow } from "@/components/editorial";
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: "pragmatic-play" }, { slug: "play-n-go" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return {
    title:
      (await params).slug === "pragmatic-play" ? "Pragmatic Play" : "Play’n GO",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const games = slots.filter((s) => providerSlug(s.provider) === slug);
  if (!games.length) notFound();
  const name = games[0].provider;
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Провайдеры", href: "/providers" }, { label: name }]}
      />
      <div className="page-heading">
        <div>
          <span className="eyebrow accent">Профиль студии</span>
          <h1>{name}</h1>
        </div>
        <p>
          Разработчик игр · {games.length} в каталоге
          <br />
          Редакционное знакомство
        </p>
      </div>
      <div className="hub-lead">
        <div className="provider-mark">
          {name}
          <span className="eyebrow" style={{ marginTop: 20, letterSpacing: 2 }}>
            GAME DEVELOPER
          </span>
        </div>
        <div>
          <p>
            {slug === "pragmatic-play"
              ? "В нашем каталоге Pragmatic Play представлен сразу несколькими подходами: выплатами по линиям в The Dog House, каскадами в Gates of Olympus и сбором денежных символов в Big Bass Bonanza."
              : "Book of Dead и Reactoonz хорошо показывают, насколько разными могут быть игры одной студии. У первой — традиционные барабаны, у второй — большое кластерное поле и шкала энергии."}
          </p>
          <p>
            Имя провайдера помогает найти другие игры знакомого разработчика. Но
            правила, RTP и набор функций стоит изучать отдельно у каждой игры.
          </p>
          <Link href={"/slots?provider=" + slug} className="text-link">
            Показать в каталоге ↗
          </Link>
        </div>
      </div>
      <SectionTitle title="Игры студии" />
      {games.map((s) => (
        <GameRow key={s.slug} slot={s} />
      ))}
      <div className="editorial-signoff">
        <p>Сравните не названия студий, а конкретные правила игры.</p>
        <Link href="/compare">К сравнению ↗</Link>
      </div>
    </>
  );
}
