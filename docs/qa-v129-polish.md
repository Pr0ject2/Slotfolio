# Slotfolio — завершение UX и artwork QA

Рабочая ветка: `fix/v129-unique-100`. Исходная точка: `8e36d5ad177b15f20651d1c94380dbe11c5591c0`.

Сохранены 1000 уникальных записей: 100 досье и 900 базовых записей. Архитектура данных, deduplication, SEO/noindex базовых записей, исключение их из sitemap и сравнения не менялись.

## Исправления

- Пагинация по 18 игр, переход на любую из 56 страниц, диапазон результатов, состояния первой/последней страницы.
- Номер страницы и режим списка/обложек сохраняются в URL; фильтрация сбрасывает страницу; возврат из досье и история браузера сохраняют состояние.
- Компактные базовые записи без повторяющихся крупных заглушек и описаний. Явное различие базовой записи и досье. Действие «Открыть запись» — настоящая ссылка.
- Базовая страница: подтверждённые сведения, официальный источник и объяснение отсутствующих данных; устранён вложенный main.
- Мобильные фильтры: кнопка возврата к результатам внизу, увеличенные поля и действия. Улучшены читаемость подписей, длинные заголовки и кнопки сравнения.
- Обложки в каталоге и досье сохраняют пропорции и важный игровой текст.
- В `.gitignore` исключены `.work`, зависимости, кэш, сборка и результаты тестов.

## Artwork

Добавлены 67 локализованных WebP. Старые декоративные фоны Fat Rabbit и Retro Tapes заменены официальными игровыми превью. Для RIP City закреплён официальный игровой скриншот вместо ненадёжного автоматического выбора OG; для Hand of Anubis — точное изображение игры из каталога Hacksaw.

Источники закреплены в `image-sources.json` и `image-sources-v129.json`. Для Panda Claw Jackpot использован промонабор, на который ссылается официальная страница Clawbuster. Это не подтверждение живого лобби 1win.

Не подтверждены: **House of Sins, Gates of 1win, 1win Bonanza**. Для них сохранены текстовые SVG-заглушки; обновлены только оформление и подписи. 900 базовых записей намеренно остаются без проверенного artwork и характеристик. Сомнительные изображения не подставлялись.

Живая проверка 1win: **BLOCKED BY GEO**. Фактический provider 1win Bonanza не подтверждён живой проверкой; недостающие параметры Gates of 1win и операторские RTP не добавлялись.

## Проверки

- `npm run typecheck`: PASS, exit 0.
- `npm run build`: PASS, exit 0; 1047/1047 pages.
- Full production Playwright: **24 passed (4.1m)**, exit 0.
- `pagination visits all 1000 games once without accumulating DOM rows`: PASS (1.9m).
- `mobile filter apply returns to results and basic records remain actionable`: PASS (1.1s).
- Strict artwork verification in prebuild: PASS, 104 manifest entries / 3779 KB (includes repeated manifest references and three declared SVG placeholders).
- Completed earlier visual pass: 320 / 360 / 390 / 430 / 768 / 1024 / 1440 px. No new audit was started during finalization.

## Added WebP inventory

- **Endorphina (19)**: 2021 Hit Slot; 2023 Hit Slot; 2025 Hit Slot; 2026 Hit Slot; 3 Coin Towers; 81 Burning Ways; Burning Coins 20; Burning Coins 40; Chance Machine 20; Crown Coins; Dia De Los Muertos 2; Hell Hot 100; Hell Hot 40; Joker Stoker; Lucky Streak 1; Lucky Streak 1000; Lucky Streak 3; Prestige Crown; Ultra Fresh.
- **Clawbuster (9)**: 3 Claws of Aztec Fire; Claw Bonanza: Gold Rush; ClawBass Bonanza: Free Rush; ClawBass Bonanza; Double Triple Burning Wilds; The Great Clawsby Deluxe: Hold and Win; Panda Claw Jackpot; Wolf Hunt: Claw and Win; Zeus Claws.
- **3 Oaks Gaming (5)**: 3 Hot Chillies; 777 Coins; Egypt Fire; Jungle Volcano; Scarab Temple.
- **Pragmatic Play (9)**: Bear Crazy; Crypto Genesys; Fury of Anubis; Gates of Olympus 1000; Gates of Olympus Super Scatter; Mahjong Wins Super Scatter; Sugar Rush 1000; Sweet Bonanza Super Scatter; The Big Dog House.
- **Shady Lady (2)**: Black Friday; Devil’s Finger.
- **Mancala Gaming (6)**: Caishen Gold: Infinity Dragon; Coin Craze Jackpot; Midas: Hand of Fortune; Money Booster; Mustang Rush; Power of Zeus.
- **Onlyplay (5)**: Caramelo Jackpot; Coin Flynn; Fruit Train Express: Hold & Win; Hot And Spicy Jackpot; Wild West Girls.
- **Hacksaw Gaming (8)**: Dork Unit; Hand of Anubis; Life and Death; Max Win Machine; Nitro Nights; Power of Ten; Rad Maxx; RIP City.
- **BGaming (1)**: Gemhalla.
- **Wazdan (1)**: Mighty Hot Amazonia.
- **Belatra Games (1)**: Mummyland Treasures.
- **Yggdrasil Gaming (1)**: Troy SuperWays.

## Changed source files

- `.gitignore`
- `src/components/catalog.tsx`
- `src/app/globals.css`
- `src/app/slots/catalog/[slug]/page.tsx`
- `src/app/[page]/page.tsx`
- `tests/site.spec.ts`
- `docs/image-sources.json`
- `docs/image-sources-v129.json`
- `docs/qa-v129-polish.md`
- 67 added WebP files listed above, two replaced WebP files (Fat Rabbit, Retro Tapes), and three placeholder SVG files in `public/images/slots/`.
