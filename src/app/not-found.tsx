import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <span className="eyebrow accent">404 / Не найдено</span>
      <h1>
        Эта страница
        <br />
        вне каталога.
      </h1>
      <p>
        Возможно, адрес изменился или в нём опечатка. Найдите игру по названию
        или начните с главной страницы.
      </p>
      <Link className="button" href="/search">
        Найти игру ↗
      </Link>
      <Link className="text-link" href="/" style={{ marginLeft: 25 }}>
        На главную
      </Link>
    </div>
  );
}
