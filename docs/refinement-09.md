# Refinement 09 — каталог из 30 игр

- Каталог расширен с 12 до 30 полноценных игровых досье.
- Добавлены Starlight Princess, Sugar Rush, Fruit Party, Legacy of Dead, Fire Joker, Rise of Olympus, Fat Rabbit, Retro Tapes, Chaos Crew, Chaos Crew 2, Deadwood, Mental, Starburst, Gonzo’s Quest, Dead or Alive 2, Money Train 2, Snake Arena и Book of 99.
- Добавлены профили NetEnt и Relax Gaming; существующие профили переписаны под расширенный набор игр.
- Фильтры, sitemap, статические страницы досье и страницы провайдеров растут из `src/lib/data.ts` автоматически.
- Пагинация каталога теперь реально используется: первые 18 записей и ещё 12 по кнопке.
- Локализатор изображений умеет определять `og:image`/`twitter:image` по официальной странице и имеет локальный fallback, чтобы внешний CDN не мог сломать production build.
- Добавлено русское склонение счётчиков игр и механик в профилях провайдеров.
