import Link from "next/link";
import {notFound} from "next/navigation";
import {mechanics, slots, slotMechanics, getSlot} from "@/lib/data";
import {mechanicGuides} from "@/lib/profile-content";
import {Breadcrumbs, GameImage, GameRow, SectionTitle} from "@/components/editorial";
import {CompareButton} from "@/components/compare-button";
import {EntityStats, EntityJsonLd, MechanicLinks} from "@/components/entity-profile";
import {pageMetadata} from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return mechanics.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const m = mechanics.find((m) => m.slug === slug);
  const guide = mechanicGuides[slug];
  return pageMetadata({title: m ? m.name + ": правила, примеры игр и сравнение" : "Механика не найдена", description: guide ? guide.contrast : "Справочник игровых механик Slotfolio.", path: "/mechanics/" + slug, noIndex: !m});
}
export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const m = mechanics.find((m) => m.slug === slug);
  const guide = mechanicGuides[slug];
  if (!m || !guide) notFound();
  const games = slots.filter((s) => slotMechanics(s).includes(m.name));
  const example = getSlot(guide.example);
  return <div className="entity-profile mechanic-dossier">
    <EntityJsonLd name={m.name} description={guide.contrast} path={"/mechanics/" + slug} parent="mechanics" games={games} />
    <Breadcrumbs items={[{label: "Механики", href: "/mechanics"}, {label: m.name}]} />
    <div className="simple-heading"><span className="eyebrow accent">Азбука слотов / Механика</span><h1>{m.name}</h1><p>{guide.subtitle}. {m.text}</p></div>
    <div className="article-layout"><aside className="article-toc"><span className="eyebrow">В справочнике</span><a href="#principle">Принцип работы</a><a href="#rhythm">Ритм и отличия</a><a href="#watch">Читать правила</a><a href="#example">На примере игры</a><a href="#catalog-profile">Портрет выборки</a><a href="#games">Игры · {games.length}</a></aside>
      <article className="prose"><section id="principle"><h2>Как это работает</h2>{guide.principle.map((text) => <p key={text}>{text}</p>)}<ol className="mechanic-sequence">{guide.sequence.map((text) => <li key={text}>{text}</li>)}</ol></section>
        <section id="rhythm"><h2>Чем отличается игровой процесс</h2><p>{guide.contrast}</p><h3>Что удобно наблюдать</h3><p>{guide.appeal}</p><h3>Что усложняет чтение</h3><p>{guide.tradeoff}</p></section>
        <section id="watch"><h2>Три вопроса к правилам</h2><ul>{guide.watch.map((text) => <li key={text}>{text}</li>)}</ul><div className="margin-note"><strong>Правило выплаты не определяет доходность</strong><p>Механика объясняет устройство раунда. RTP и волатильность относятся к математической конфигурации конкретной игры, а не к названию механики.</p></div></section>
      </article>
    </div>
    {example && <section id="example" className="mechanic-example"><Link href={"/slots/" + example.slug}><GameImage slot={example} /></Link><div><span className="eyebrow accent">Разобрать на примере</span><h2><Link href={"/slots/" + example.slug}>{example.name} ↗</Link></h2><p>{guide.exampleNote}</p><p>{example.feature}</p><CompareButton slug={example.slug} name={example.name} /></div></section>}
    <EntityStats games={games} filter={{mechanic: m.name}} mechanicName={m.name} />
    <SectionTitle title="Сопоставить принципы" /><MechanicLinks names={guide.related} />
    <section id="games"><SectionTitle title={"Игры: " + m.name.toLowerCase()} href={"/slots?mechanic=" + encodeURIComponent(m.name)} label="Открыть с фильтром" /><div className="entity-games">{games.map((slot, index) => <GameRow key={slot.slug} slot={slot} index={index} compare />)}</div></section>
    <div className="editorial-signoff"><p>Добавьте две игры и сопоставьте базовую механику, особенности и математические параметры.</p><Link href="/compare">Открыть сравнение ↗</Link></div>
    <div className="entity-reading-links"><Link href="/journal/how-cascades-work">Большой разбор каскадов ↗</Link><Link href="/collections/beyond-lines">Подборка: за пределами линий ↗</Link></div>
  </div>;
}