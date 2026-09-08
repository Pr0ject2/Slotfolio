"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="not-found">
      <span className="eyebrow accent">Ошибка загрузки</span>
      <h1>
        Не удалось
        <br />
        открыть страницу.
      </h1>
      <p>Попробуйте загрузить её ещё раз.</p>
      <button className="button" onClick={reset}>
        Повторить
      </button>
    </div>
  );
}
