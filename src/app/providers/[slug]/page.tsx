import Link from "next/link";
import { notFound } from "next/navigation";
import { providerProfiles, providerSlug, ruPlural, slots } from "@/lib/data";
import { Breadcrumbs, SectionTitle, GameRow } from "@/components/editorial";
import { EntityJsonLd, EntityStats, FeaturedGames, MechanicLinks } from "@/components/entity-profile";
import { catalogStats, representativeGames } from "@/lib/catalog-stats";
import { providerReadingNotes } from "@/lib/profile-content";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return providerProfiles.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const profile = providerProfiles.find((p) => p.slug === slug);
  return pageMetadata({title: profile ? profile.name + ": профиль студии, игры и механики" : "Провайдер не найден", description: profile?.catalogSummary || "Профили провайдеров в Slotfolio.", path: "/providers/" + slug, noIndex: !profile});
}
export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const profile = providerProfiles.find((p) => p.slug === slug);
  if (!profile) notFound();
  const games = slots.filter((s) => providerSlug(s.provider) === slug);
  const stats = catalogStats(games);
  const reading = providerReadingNotes[slug];
  return <div className="entity-profile provider-dossier">
    <EntityJsonLd name={profile.name} description={profile.catalogSummary} path={"/providers/" + slug} parent="providers" games={games} />
    <Breadcrumbs items={[{label: "Провайдеры", href: "/providers"}, {label: profile.name}]} />
    <div className="page-heading provider-profile-heading"><div><span className="eyebrow accent">Профиль студии</span><h1>{profile.name}</h1></div><p>{stats.count} {ruPlural(stats.count, "игра", "игры", "игр")} в Slotfolio<br/>{profile.mark}</p></div>
    <nav className="entity-jump" aria-label="Разделы профиля"><a href="#approach">Подход к играм</a><a href="#catalog-profile">Портрет выборки</a><a href="#games">Все игры · {stats.count}</a><Link href={"/slots?provider=" + slug}>Открыть в каталоге ↗</Link></nav>
    <section id="approach" className="entity-intro"><p className="big-serif">{profile.profileIntro}</p><div><p>{profile.profileBody}</p><p className="entity-editorial-note">{profile.signoff}</p></div></section>
    <SectionTitle title="Два входа в каталог студии" />
    <p className="entity-section-note">Первый ориентир и игра с другим набором функций. Это примеры устройства, а не рейтинг.</p>
    <FeaturedGames games={representativeGames(games)} />
    {reading && <section className="entity-reading"><span className="eyebrow accent">Редакционный маршрут</span><div><h2>{reading.title}</h2><p>{reading.text}</p><div className="entity-reading-links">{reading.compare.map((gameSlug) => { const game = games.find((s) => s.slug === gameSlug); return game && <Link key={game.slug} href={"/slots/" + game.slug}>{game.name} ↗</Link>; })}<Link href="/compare">Открыть сравнение ↗</Link></div></div></section>}
    <EntityStats games={games} filter={{provider: slug}} />
    <SectionTitle title="Связанные механики" /><MechanicLinks names={stats.mechanics.map((m) => m.name)} />
    <section id="games"><SectionTitle title="Все игры студии" href={"/slots?provider=" + slug} label="Уточнить фильтры" /><div className="entity-games">{games.map((slot, index) => <GameRow key={slot.slug} slot={slot} index={index} compare />)}</div></section>
    <div className="editorial-signoff provider-signoff"><p>Характеристики и ссылки на первичные источники приведены в каждом досье. Сравнивайте конкретные версии и правила игры.</p><Link href="/compare">Поставить игры рядом ↗</Link></div>
  </div>;
}