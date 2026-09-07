import Link from "next/link";
import { Breadcrumbs } from "@/components/editorial";
export const metadata = { title: "Что означает RTP" };
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Разборы", href: "/journal" },
          { label: "Что означает RTP" },
        ]}
      />
      <header className="article-heading">
        <span className="eyebrow accent">Гайд / Математика без мифов</span>
        <h1>
          96% — не обещание
          <br />
          вернуть 96 рублей
        </h1>
        <p className="deck">
          Что показывает RTP, о чём он молчит и почему один процент нельзя
          читать отдельно от правил игры.
        </p>
        <div className="article-meta">
          <span>Редакция Slotfolio</span>
          <span>4 минуты чтения</span>
        </div>
      </header>
      <div className="article-layout">
        <nav className="article-toc">
          <span className="eyebrow">В материале</span>
          <a href="#meaning">Значение показателя</a>
          <a href="#session">Отдельная сессия</a>
          <a href="#version">Версия и источник</a>
        </nav>
        <article className="prose">
          <section id="meaning">
            <h2>Средняя величина на большой дистанции</h2>
            <p>
              Return to Player — теоретическая доля ставок, которая возвращается
              в виде выплат на большой дистанции. Это характеристика
              математической модели, а не персональное обязательство перед
              игроком.
            </p>
            <p>
              Условный RTP 96% означает теоретический возврат 96 единиц на
              каждые 100 единиц общего оборота ставок при большой выборке. Речь
              именно о сумме ставок, а не только о первоначальном депозите.
            </p>
          </section>
          <section id="session">
            <h2>Ваша сессия не обязана повторять среднее</h2>
            <p>
              На коротком отрезке результаты могут сильно отклоняться от
              теоретического значения. Можно потерять всю выделенную сумму или
              закончить с положительным результатом. Сам процент не позволяет
              предсказать, какой исход произойдёт.
            </p>
            <blockquote>
              RTP не является таймером, который приближает обязательный выигрыш.
            </blockquote>
            <p>
              Волатильность дополняет картину: она описывает разброс выплат. Две
              игры с похожим RTP способны ощущаться совсем по-разному из-за
              частоты и размера событий.
            </p>
          </section>
          <section id="version">
            <h2>Проверяйте конкретную версию</h2>
            <p>
              У одной игры могут существовать разные конфигурации. Поэтому
              справочный процент из каталога нужно сверять с правилами
              запущенной игры у конкретного оператора.
            </p>
            <div className="margin-note">
              <strong>Где искать</strong>
              <p>
                Раздел помощи, таблица выплат или информационное меню игры. Если
                процент не указан, не подменяйте отсутствующие данные
                предположением.
              </p>
            </div>
            <p>
              Пояснение о большой дистанции приведено в{" "}
              <a
                href="https://www.gamblingcommission.gov.uk/public-and-players/guide/return-to-player-how-much-gaming-machines-payout"
                target="_blank"
                rel="noreferrer"
              >
                справке Gambling Commission
              </a>
              . RTP не отменяет риска потери денег.
            </p>
            <Link className="text-link" href="/slots">
              Вернуться к каталогу ↗
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}
