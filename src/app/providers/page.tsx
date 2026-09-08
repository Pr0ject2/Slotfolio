import Link from "next/link";
import { catalogStats } from "@/lib/catalog-stats";
import { Breadcrumbs } from "@/components/editorial";
import {
  providerProfiles,
  providerSlug,
  ruPlural,
  slots,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Провайдеры слотов",
  description: "Провайдеры игр в каталоге Slotfolio: профили студий, представленные механики и разобранные слоты.",
  path: "/providers",
});

function providerStats(name: string) {
  const games = slots.filter((slot) => slot.provider === name);
  const stats = catalogStats(games);
  return { games: stats.count, mechanics: stats.mechanics.length };
}

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Каталог", href: "/slots" }, { label: "Провайдеры" }]}
      />

      <div className="page-heading utility-heading provider-heading">
        <div>
          <span className="eyebrow accent">Студии и их игры</span>
          <h1>Кто делает слоты</h1>
        </div>
        <p>
          Провайдер помогает ориентироваться в каталоге,
          <br />
          но правила всё равно живут на уровне конкретной игры.
        </p>
      </div>

      <div className="provider-index-lead">
        <p className="big-serif">
          Одна студия может выпускать игры с совершенно разной логикой.
        </p>
        <div>
          <p>
            Здесь провайдеры нужны не как рейтинг брендов, а как ещё один путь
            по каталогу. Смотрите, какие механики уже представлены у студии,
            затем переходите к конкретным досье.
          </p>
          <Link href="/compare" className="text-link">
            Сравнить игры разных студий ↗
          </Link>
        </div>
      </div>

      <div className="provider-index" aria-label="Провайдеры в каталоге">
        {providerProfiles.map((profile, index) => {
          const stats = providerStats(profile.name);
          return (
            <Link
              key={profile.slug}
              href={`/providers/${providerSlug(profile.name)}`}
              className="provider-index-row"
            >
              <span className="provider-index-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="provider-index-name">
                <span className="eyebrow">Профиль студии</span>
                <h2>{profile.name}</h2>
              </div>
              <p>{profile.catalogSummary}</p>
              <div className="provider-index-stats">
                <span>{stats.games} {ruPlural(stats.games, "игра", "игры", "игр")}</span>
                <span>{stats.mechanics} {ruPlural(stats.mechanics, "механика", "механики", "механик")}</span>
              </div>
              <b aria-hidden="true">↗</b>
            </Link>
          );
        })}
      </div>

      <p className="data-note provider-data-note">
        Сейчас в указателе представлены только студии, для которых уже есть
        игровые досье. Список будет расти вместе с каталогом.
      </p>
    </>
  );
}
