import Link from "next/link";
import { slots, article, mechanics } from "@/lib/data";
import { GameImage, GameRow, SectionTitle } from "@/components/editorial";
export default function Home() {
  return (
    <>
      <div className="edition-line">
        <span>
          <i /> СЕЙЧАС В ФОКУСЕ
        </span>
        <span>Игры, механики и факты</span>
        <span>Сентябрь / 2026</span>
      </div>
      <section className="front-lead">
        <article className="cover-story">
          <Link href="/slots/gates-of-olympus" className="cover-art">
            <GameImage slot={slots[0]} priority />
            <span className="image-caption">
              ДОСЬЕ ИГРЫ <span>↗</span>
            </span>
          </Link>
          <div className="cover-copy">
            <span className="eyebrow accent">
              Игра крупным планом / Pragmatic Play
            </span>
            <h1>
              <Link href="/slots/gates-of-olympus">
                За воротами <br />
                Олимпа
              </Link>
            </h1>
            <p>
              Не только Зевс и молнии. Как устроены каскады, множители и
              ожидание большого события в Gates of Olympus.
            </p>
            <Link href="/slots/gates-of-olympus" className="text-link">
              Разобрать игру <span>↗</span>
            </Link>
          </div>
        </article>
        <aside className="front-aside">
          <article className="side-story">
            <Link href="/slots/reactoonz">
              <GameImage slot={slots[3]} />
            </Link>
            <span className="eyebrow accent">Другая логика игры</span>
            <h2>
              <Link href="/slots/reactoonz">
                Когда поле
                <br />
                живёт своей жизнью
              </Link>
            </h2>
            <p>
              Reactoonz и цепная реакция: что происходит, когда исчезают линии.
            </p>
          </article>
          <div className="reading-note">
            <span className="eyebrow">Прежде чем играть</span>
            <h3>
              <Link href="/journal/understanding-rtp">
                96% RTP — это не обещание вернуть 96 рублей
              </Link>
            </h3>
            <Link className="text-link" href="/journal/understanding-rtp">
              Читать объяснение ↗
            </Link>
          </div>
        </aside>
      </section>
      <section className="catalog-preview">
        <SectionTitle
          title="В поле зрения"
          href="/slots"
          label="Открыть каталог"
        />
        <div className="catalog-preview-layout">
          <div className="catalog-intro">
            <span className="eyebrow accent">Игровой указатель</span>
            <p className="serif">
              У каждой игры
              <br />
              свой характер.
              <br />
              <em>Начните с механики.</em>
            </p>
            <p>
              Шесть игр, разные способы собрать выигрыш. Факты, особенности и
              короткий редакционный комментарий.
            </p>
            <form action="/slots" className="mini-search">
              <label className="sr-only" htmlFor="home-search">
                Название игры
              </label>
              <input id="home-search" name="q" placeholder="Название игры…" />
              <button aria-label="Найти игру">↗</button>
            </form>
          </div>
          <div>
            {[slots[1], slots[2], slots[5]].map((slot, index) => (
              <GameRow slot={slot} index={index} key={slot.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="feature-band">
        <div className="feature-band-title">
          <span className="eyebrow">Журнал / Устройство игры</span>
          <h2>
            <Link href={article.href}>
              Один спин.
              <br />
              <em>Несколько событий.</em>
            </Link>
          </h2>
          <p>
            Почему символы исчезают, новые падают сверху, а один раунд
            превращается в целую последовательность.
          </p>
          <Link href={article.href} className="text-link">
            Как работают каскады ↗
          </Link>
        </div>
        <div
          className="cascade-art"
          aria-label="Схематическое изображение каскадной механики"
        >
          <div className="cascade-column">
            <span>◆</span>
            <span>✦</span>
            <span>◆</span>
          </div>
          <div className="cascade-column">
            <span>✦</span>
            <span className="falling">↓</span>
            <span>◆</span>
          </div>
          <div className="cascade-column">
            <span>◆</span>
            <span>◆</span>
            <span>✦</span>
          </div>
          <small>СОВПАДЕНИЕ → ИСЧЕЗНОВЕНИЕ → НОВЫЙ ШАНС</small>
        </div>
      </section>
      <section className="explore-section">
        <div>
          <SectionTitle
            title="Устройство игры"
            href="/mechanics"
            label="Все механики"
          />
          <div className="mechanic-list">
            {mechanics.map((m) => (
              <Link href={"/mechanics/" + m.slug} key={m.slug}>
                <span>{m.name}</span>
                <p>{m.text}</p>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
        <article className="collection-teaser">
          <span className="eyebrow accent">Тематическая подборка</span>
          <h2>
            <Link href="/collections/beyond-lines">
              За пределами
              <br />
              линий
            </Link>
          </h2>
          <p>Три игры, которые иначе понимают выигрышную комбинацию.</p>
          <div className="collection-images">
            <GameImage slot={slots[1]} />
            <GameImage slot={slots[3]} />
          </div>
          <Link href="/collections/beyond-lines" className="text-link">
            Изучить подборку ↗
          </Link>
        </article>
      </section>
      <div className="editorial-signoff">
        <span className="brand-small">s.</span>
        <p>
          Мы смотрим на слоты как на игры с правилами.
          <br />
          <span>Объясняем механику, отделяем факты от впечатлений.</span>
        </p>
        <Link href="/about">О редакции ↗</Link>
      </div>
    </>
  );
}
