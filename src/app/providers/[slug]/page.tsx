import Link from "next/link";
import { notFound } from "next/navigation";
import {
  providerProfiles,
  providerSlug,
  ruPlural,
  slots,
} from "@/lib/data";
import { Breadcrumbs, SectionTitle, GameRow } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return providerProfiles.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = providerProfiles.find((item) => item.slug === slug);
  if (!provider) {
    return pageMetadata({
      title: "Провайдер не найден",
      description: "Такого профиля студии нет в текущем каталоге Slotfolio.",
      path: "/providers",
      noIndex: true,
    });
  }

  return pageMetadata({
    title: `${provider.name}: игры и механики`,
    description: provider.catalogSummary,
    path: `/providers/${provider.slug}`,
  });
}

function parseRtp(value: string) {
  return Number.parseFloat(value.replace(",", ".").replace("%", ""));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = providerProfiles.find((item) => item.slug === slug);
  if (!profile) notFound();

  const games = slots.filter((slot) => providerSlug(slot.provider) === slug);
  if (!games.length) notFound();

  const mechanicGroups = Array.from(
    games.reduce((map, game) => {
      const group = map.get(game.mechanic) || [];
      group.push(game.name);
      map.set(game.mechanic, group);
      return map;
    }, new Map<string, string[]>()),
  );
  const averageRtp =
    games.reduce((sum, game) => sum + parseRtp(game.rtp), 0) / games.length;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Провайдеры", href: "/providers" },
          { label: profile.name },
        ]}
      />

      <div className="page-heading provider-profile-heading">
        <div>
          <span className="eyebrow accent">Профиль студии</span>
          <h1>{profile.name}</h1>
        </div>
        <p>
          {games.length} {ruPlural(games.length, "игра", "игры", "игр")} в каталоге · {mechanicGroups.length} {ruPlural(mechanicGroups.length, "механика", "механики", "механик")}
          <br />
          Смотрим на студию через конкретные игры.
        </p>
      </div>

      <section className="provider-profile-hero">
        <div className="provider-mark provider-mark-refined" aria-hidden="true">
          <span>{profile.name}</span>
          <small>{profile.mark}</small>
        </div>
        <div className="provider-profile-copy">
          <span className="eyebrow">В каталоге Slotfolio</span>
          <p className="provider-profile-intro">{profile.profileIntro}</p>
          <p>{profile.profileBody}</p>
          <div className="provider-profile-actions">
            <Link href={`/slots?provider=${slug}`} className="text-link">
              Показать все игры в каталоге ↗
            </Link>
            <Link href="/compare" className="text-link muted-link">
              Открыть сравнение ↗
            </Link>
          </div>
        </div>
      </section>

      <div className="provider-facts" aria-label="Сводка по играм провайдера">
        <div>
          <span className="eyebrow">Игр в указателе</span>
          <strong>{games.length}</strong>
          <small>Только уже разобранные игры</small>
        </div>
        <div>
          <span className="eyebrow">Механик</span>
          <strong>{mechanicGroups.length}</strong>
          <small>{mechanicGroups.map(([name]) => name).join(" · ")}</small>
        </div>
        <div>
          <span className="eyebrow">Средний RTP*</span>
          <strong>{averageRtp.toFixed(2).replace(".", ",")}%</strong>
          <small>По справочным версиям в каталоге</small>
        </div>
      </div>

      <SectionTitle title="Что видно по каталогу" />
      <div className="provider-mechanics">
        {mechanicGroups.map(([mechanic, names], index) => (
          <Link
            href={`/slots?provider=${slug}&mechanic=${encodeURIComponent(mechanic)}`}
            key={mechanic}
            className="provider-mechanic-row"
          >
            <span className="number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{mechanic}</h3>
              <p>{names.join(" · ")}</p>
            </div>
            <span className="provider-mechanic-count">
              {names.length} {names.length === 1 ? "игра" : "игры"}
            </span>
            <b aria-hidden="true">↗</b>
          </Link>
        ))}
      </div>

      <SectionTitle title="Игры студии" />
      <div className="provider-games-list">
        {games.map((slot, index) => (
          <GameRow key={slot.slug} slot={slot} index={index} />
        ))}
      </div>

      <p className="data-note">
        * Это не оценка провайдера и не обещание результата. RTP указан для
        справочных версий игр и может отличаться у конкретного оператора.
      </p>

      <div className="editorial-signoff provider-signoff">
        <p>{profile.signoff}</p>
        <Link href="/compare">Поставить игры рядом ↗</Link>
      </div>
    </>
  );
}
