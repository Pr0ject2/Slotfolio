import Link from "next/link";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Великобритания — проверка оператора и доступности",
  description: "Как проверить легальность и доступность азартной площадки в Великобритании: регулятор, лицензия и условия оператора.",
  path: "/regions/great-britain",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Страны", href: "/regions" },
          { label: "Великобритания" },
        ]}
      />
      <div className="simple-heading geo-heading">
        <span className="eyebrow accent">Страновой справочник / GB</span>
        <h1>
          Великобритания:
          <br />
          сначала проверьте площадку
        </h1>
        <p>
          Ориентир для Англии, Шотландии и Уэльса. Эта страница помогает найти
          первоисточник и проверить условия доступа.
        </p>
      </div>
      <div className="article-layout">
        <nav className="article-toc">
          <span className="eyebrow">На этой странице</span>
          <a href="#register">Проверка лицензии</a>
          <a href="#conditions">Условия площадки</a>
          <a href="#operators">Операторы</a>
          <a href="#sources">Источники</a>
        </nav>
        <article className="prose">
          <section id="register">
            <h2>Начните с реестра</h2>
            <p>
              Gambling Commission предоставляет публичный реестр игорных
              компаний. Он позволяет искать организацию и проверять сведения о
              лицензии. Название бренда и юридическое наименование могут
              отличаться.
            </p>
            <p>
              Сопоставьте сведения на площадке с записью в реестре. Одного
              логотипа регулятора в подвале недостаточно: важно проверить
              конкретную компанию, действующий статус и связанный с ней адрес
              сайта.
            </p>
            <a
              className="text-link"
              href="https://www.gamblingcommission.gov.uk/public-register/businesses"
              target="_blank"
              rel="noreferrer"
            >
              Открыть официальный реестр ↗
            </a>
          </section>
          <section id="conditions">
            <h2>Что проверить до регистрации</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Вопрос</th>
                    <th>Где искать ответ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Кто управляет сайтом?</td>
                    <td>Юридическая информация и запись регулятора</td>
                  </tr>
                  <tr>
                    <td>Доступен ли сервис по месту проживания?</td>
                    <td>Список разрешённых территорий в условиях</td>
                  </tr>
                  <tr>
                    <td>Какие документы потребуются?</td>
                    <td>Правила проверки личности</td>
                  </tr>
                  <tr>
                    <td>Как устроены вывод и лимиты?</td>
                    <td>Платёжная политика и настройки ограничений</td>
                  </tr>
                  <tr>
                    <td>Какая версия игры запущена?</td>
                    <td>Встроенная справка игры, включая RTP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Доступность сайта в браузере сама по себе не подтверждает право
              обслуживать пользователя. Если условия неясны, уточните их у
              площадки до внесения средств.
            </p>
          </section>
          <section id="operators">
            <h2>Коммерческие размещения</h2>
            <p>
              В этом страновом разделе нет подключённых партнёрских операторов.
              Мы не утверждаем доступность 1win для Великобритании и не
              показываем переход без подтверждённого местного контекста.
            </p>
            <div className="margin-note">
              <strong>Как появится оператор</strong>
              <p>
                После проверки лицензии, территории обслуживания, условий и
                рекламной маркировки. Редакционная информация и коммерческая
                ссылка будут разделены.
              </p>
            </div>
          </section>
          <section id="sources">
            <h2>Первичные источники</h2>
            <p>
              <a href="https://www.gamblingcommission.gov.uk/public-register/businesses">
                Реестр компаний Gambling Commission
              </a>{" "}
              и{" "}
              <a href="https://www.gamblingcommission.gov.uk/public-and-players">
                информация регулятора для пользователей
              </a>
              . Ссылки проверены 7 сентября 2026 года.
            </p>
            <p className="source-note">
              Это справочная страница, а не персональная
              юридическая консультация. Перед использованием сервиса проверяйте
              актуальную запись и условия.
            </p>
            <Link className="text-link" href="/responsible-gaming">
              Ответственная игра ↗
            </Link>
          </section>
        </article>
      </div>
    </>
  );
}
