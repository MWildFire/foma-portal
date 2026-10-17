import type { Question } from '../../../../src/contract/types';
// Original, explicitly hypothetical student work; private school checklist originals stay outside Git.
export const questions: Question[] = [
  {
    "id": "r06-econ-01",
    "subject": "econ",
    "topicIds": [
      "demand",
      "mock-checklist"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Draw a concave PPC for food/machines; mark an efficient point, unemployment and an unattainable point. Explain scarcity, increasing opportunity cost, a movement along it and an outward shift. [8] (b) Draw a two-sector circular flow with separate product/resource markets and all real/money flows. Extend it to five sectors, labelling S, T, M and I, G, X and equilibrium leakages/injections. [8] (c) Define demand and ceteris paribus. Classify a price fall, higher normal/inferior-good income, a dearer substitute, dearer complement, fashion and more buyers as movements/shifts. [4]",
      "ru": "(a) Построй вогнутую КПВ еды/станков: эффективная точка, безработица, недостижимая точка. Объясни редкость, растущие альтернативные издержки, движение вдоль и сдвиг наружу. [8] (b) Нарисуй двухсекторный кругооборот с рынками продуктов/ресурсов, реальными и денежными потоками. Добавь финансовый, государственный, внешний секторы; S, T, M и I, G, X, условие равновесия. [8] (c) Определи спрос и «при прочих равных». Различи движение/сдвиг при падении цены, росте дохода для нормального/низшего блага, удорожании заменителя/дополнителя, моде и росте числа покупателей. [4]"
    },
    "markscheme": {
      "en": "(a) Axes quantities; on PPC fully used resources, inside underuse, outside unavailable with current resources/technology. Moving toward machines sacrifices food, increasingly on a concave frontier; better resources/technology shift it outward. [8] (b) Households supply factors to resource markets, firms pay wages/rent/interest/profit; firms supply products, households pay consumption expenditure. Financial S→I, government T→G, foreign M→X; equilibrium S+T+M=I+G+X. Distinguish real flows from opposite money flows. [8] (c) Demand is quantities willing/able to buy at alternative prices per period. Own-price fall moves down D; income shifts normal D right/inferior left; substitute price up shifts right, complement up left; favourable tastes/more buyers right, other determinants fixed. [4]",
      "ru": "(a) Оси — количества. На КПВ ресурсы использованы, внутри недоиспользованы, снаружи точка недостижима при данных ресурсах/технологии. Больше станков означает отказ от еды; на вогнутой КПВ издержки растут. Улучшение ресурсов/технологии сдвигает границу. [8] (b) Домохозяйства предлагают факторы, фирмы платят зарплату/ренту/процент/прибыль; фирмы дают продукты, получают потребительские расходы. Финансовый сектор S→I, государство T→G, внешний M→X; S+T+M=I+G+X. Реальные и встречные денежные стрелки различны. [8] (c) Спрос — готовность и возможность покупать разные количества при разных ценах за период. Своя цена вниз — движение по D; доход вверх: нормальное благо вправо, низшее влево; заменитель дороже — вправо, дополнение дороже — влево; мода/покупатели — вправо при прочих равных. [4]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-02",
    "subject": "econ",
    "topicIds": [
      "supply",
      "competitive-market-equilibrium"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Explain diminishing marginal utility and both substitution/real-income effects of a price fall. Distinguish diminishing marginal RETURNS when one input is fixed. [6] (b) For a bakery classify wages, technology, joint/competitive products, expected future prices, taxes/subsidies, number of firms and a flood as supply determinants; contrast own-price movement. [6] (c) Draw separate demand-rise and supply-fall equilibria, showing the price signal/incentive and adjustment from shortage. Define supply/ceteris paribus. [6]",
      "ru": "(a) Объясни убывающую предельную полезность, эффекты замещения/реального дохода при падении цены. Отличи убывающую предельную ОТДАЧУ при фиксированном факторе. [6] (b) Для пекарни классифицируй зарплату, технологию, совместные/конкурирующие продукты, ожидания цен, налоги/субсидии, число фирм, наводнение; отличи собственную цену. [6] (c) Отдельно построй рост спроса и падение предложения с равновесиями, сигналом/стимулом цены и устранением дефицита. Определи предложение/ceteris paribus. [6]"
    },
    "markscheme": {
      "en": "(a) Extra consumption generally adds less utility; lower relative price encourages substitution toward the good, while higher real purchasing power increases normal-good consumption (inferior-good income effect opposes it). Extra variable input with fixed capacity eventually adds less output: this is production, not utility. [6] (b) Higher input cost/tax shifts S left, technology/subsidy/more firms right; competing production reallocates resources, joint supply links outputs. Expectations can postpone current supply; flood destroys capacity. Own-price changes move along S. [6] (c) Supply means quantities willing/able to sell at alternative prices per period, other factors fixed. D right raises P, Q; S left raises P, lowers Q. At old price excess demand bids price up, signalling scarcity and encouraging quantity supplied/restraining demanded until balance. Label axes/curves/both equilibria. [6]",
      "ru": "(a) Дополнительное потребление обычно даёт всё меньшую полезность. Снижение относительной цены ведёт к замещению в пользу блага, рост реальной покупательной силы увеличивает спрос на нормальное благо (для низшего эффект дохода противоположен). Дополнительный переменный фактор при фиксированной мощности постепенно даёт меньший прирост выпуска — это отдача, не полезность. [6] (b) Рост затрат/налога сдвигает S влево, технология/субсидия/новые фирмы вправо; конкурирующие продукты делят ресурсы, совместные связаны производством. Ожидание цены может отложить продажи, паводок сокращает мощности. Своя цена — движение по S. [6] (c) Предложение — готовность/возможность продать количества по разным ценам за период при прочих равных. D вправо: P, Q растут; S влево: P растёт, Q падает. Дефицит при старой цене повышает цену: сигнал редкости, стимул предложения и сдерживание спроса. Подпиши оси/кривые/равновесия. [6]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-03",
    "subject": "econ",
    "topicIds": [
      "competitive-market-equilibrium",
      "mock-checklist"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Demand P=10−Q, supply P=2+Q. Find equilibrium, consumer/producer surplus and show MB=MC and maximum total surplus; explain signal versus incentive. [8] (b) A shop displays “was 100, now 60”, places fruit at eye level, and offers a default donation with opt-out. Explain anchoring, framing, availability and rules of thumb; devise a distinct example of each. [6] (c) Contrast rational choice with bounded rationality, self-control, selfishness and imperfect information. Explain a nudge/choice architecture and evaluate consent and effectiveness in this shop. [6]",
      "ru": "(a) Спрос P=10−Q, предложение P=2+Q. Найди равновесие, излишки; покажи MB=MC, максимум общего излишка, сигнал/стимул. [8] (b) Магазин пишет «было 100, стало 60», ставит фрукты на уровне глаз, задаёт пожертвование по умолчанию с отказом. Объясни якорь, фрейминг, доступность примеров, эвристики; придумай отдельный пример каждого. [6] (c) Сравни рациональный выбор с ограниченной рациональностью/самоконтролем/эгоизмом и неполной информацией. Объясни подталкивание, архитектуру выбора, оцени согласие/эффект. [6]"
    },
    "markscheme": {
      "en": "(a) 10−Q=2+Q→Q 4, P 6. CS=½(10−6)4=8, PS=½(6−2)4=8, total 16. With no externalities/information failures D=MB, S=MC; below 4 MB>MC, above 4 MC>MB, so 4 maximises surplus. Price signals scarcity and changes incentives. [8] (b) 100 is an anchor; presenting saving 40 rather than paying 60 frames the same offer; availability means judging by easily recalled examples (e. g. a recent vivid food scare); “buy familiar brand” is a rule of thumb. Eye placement/default changes architecture, not proof of any one bias. [6] (c) Rational choice weighs feasible marginal benefits/costs with consistent preferences. Limited processing/info, temptation despite intentions, and concern for others depart from simple maximisation. Default donation preserves opt-out but may exploit inertia; test informed choice, actual donations/diet and unintended spending, not assume every nudge helps. [6]",
      "ru": "(a) 10−Q=2+Q: Q 4, P 6. CS=½(10−6)4=8, PS=½(6−2)4=8, всего 16. Без экстерналий/информационных сбоев D=MB, S=MC: до 4 MB>MC, после 4 MC>MB. Цена сообщает о редкости и меняет стимулы. [8] (b) 100 — якорь; «экономия 40» вместо «плата 60» — фрейминг; доступность — суждение по легко вспоминаемому случаю (яркий недавний пищевой скандал); «брать знакомую марку» — эвристика. Размещение/умолчание меняют архитектуру, сами по себе не доказывают конкретное искажение. [6] (c) Рациональный выбор сопоставляет предельные выгоды/затраты доступных вариантов при согласованных предпочтениях. Ограниченная обработка/информация, слабый самоконтроль и забота о других усложняют модель. Отказ сохраняется, но умолчание использует инерцию; проверь осознанность, реальные пожертвования/рацион и побочные расходы. [6]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-04",
    "subject": "econ",
    "topicIds": [
      "price-elasticity-of-demand"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Calculate initial-value PED and revenue before/after: (P, Q) (10,100)→(12,90); reverse; (10,100)→(12,70); reverse. Explain all four price/revenue cases. [8] (b) On Q=120−10 P compare point PED magnitudes at P=2 and P=10, explaining why slope is constant but elasticity varies. [4] (c) Draw the same adverse supply shock for a primary commodity with inelastic demand and a manufactured product with elastic demand, holding scales comparable. Use substitutes, necessity, budget share and time to qualify the comparison. [6]",
      "ru": "(a) Найди PED по исходным значениям и выручку: (P, Q)(10,100)→(12,90), обратно; (10,100)→(12,70), обратно. Объясни четыре случая цены/выручки. [8] (b) На Q=120−10 P сравни точечную |PED| при P 2 и 10: почему наклон постоянен, эластичность нет? [4] (c) Построй одинаковый отрицательный шок предложения для сырья с неэластичным спросом и промышленного товара с эластичным, при сопоставимых осях. Уточни роль заменителей, необходимости, доли бюджета, времени. [6]"
    },
    "markscheme": {
      "en": "(a) −0.5, revenue 1000→1080 (inelastic price rise); reverse −2/3,1080→1000. Elastic case −1.5,1000→840; reverse −18/7≈−2.57,840→1000. State baseline; reverse percentages differ. [8] (b) |PED|=10 P/Q: at 2, Q 100 gives 0.2; at 10, Q 20 gives 5. Slope alone is not elasticity; P/Q changes. [4] (c) Label S 0→S 1 left and D steep/flatter on comparable scales. Inelastic demand causes larger price/smaller quantity response; substitutes/time can make demand more elastic. Not all commodities/industrial goods share one elasticity, and units/scales matter. [6]",
      "ru": "(a) −0,5, выручка 1000→1080; обратно−2/3,1080→1000. Эластичный случай−1,5,1000→840; обратно−18/7≈−2,57,840→1000. Укажи базу: обратные проценты отличаются. [8] (b) |PED|=10 P/Q: при 2, Q 100 получаем 0,2; при 10, Q 20 —5. Наклон не равен эластичности: меняется P/Q. [4] (c) S сдвигается влево, D круче/положе при сопоставимых шкалах. Неэластичный спрос даёт большее изменение цены, меньшее количества. Заменители/время повышают эластичность; категорическое деление всех товаров неверно, важны единицы/масштаб. [6]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-05",
    "subject": "econ",
    "topicIds": [
      "income-and-cross-elasticity",
      "elasticity-of-supply"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Income rises 10%; quantities change−2%, +3%, +16%. Calculate/classify YED and explain the possible long-run sectoral-spending shift, without equating spending to employment/GDP shares. [6] (b) Supply changes (P, Q)(10,100)→(12,110), then reverse. Calculate PES and draw inelastic/elastic supply on comparable axes. [4] (c) Draw an equal demand increase with steep farm supply versus flatter manufactured supply. Explain time, factor mobility, storage, spare capacity and rising costs. State two government-intervention objectives. [8]",
      "ru": "(a) Доход+10%, количества−2%, +3%, +16%. Найди/классифицируй YED, объясни возможный сдвиг расходов по секторам, не приравнивая его к занятости/ВВП. [6] (b) (P, Q)(10,100)→(12,110), затем обратно: PES, крутая/пологая S при сопоставимых осях. [4] (c) Одинаковый рост D при крутой аграрной/пологой промышленной S. Объясни время, мобильность, хранение, резерв мощности, рост затрат. Две цели вмешательства. [8]"
    },
    "markscheme": {
      "en": "(a) YED−0.2 inferior;0.3 normal income-inelastic;1.6 normal income-elastic. Services/luxury spending may grow relatively faster; productivity, prices, trade and initial sizes also determine sector shares. [6] (b) 0.5; reverse (−10/110)/(−2/12)=6/11≈0.545. Use initial values consistently. [4] (c) D right gives larger ΔP/smaller ΔQ with inelastic S. Biological cycles/storage/perishability constrain farms short run; manufacturing may have spare plant but is not always elastic. Mobility/time ease constraints; sharply rising marginal costs restrain response. Objectives include revenue, producer support, low-income support, changing output/consumption to address externalities. [8]",
      "ru": "(a) YED−0,2 — низшее;0,3 — нормальное неэластичное по доходу;1,6 — нормальное эластичное. Расходы на услуги/роскошь могут расти быстрее; доли секторов зависят также от производительности, цен, торговли, исходных размеров. [6] (b) 0,5; обратно 6/11≈0,545. Базы согласованы. [4] (c) D вправо при неэластичной S сильнее повышает P, слабее Q. Биологический цикл/хранение/порча ограничивают сельское хозяйство; у завода могут быть свободные мощности, но не всегда. Время/мобильность ослабляют ограничения, рост предельных затрат сдерживает ответ. Цели: доход бюджета, поддержка фирм/бедных, коррекция производства/потребления. [8]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-06",
    "subject": "econ",
    "topicIds": [
      "government-taxes-subsidies-price-controls"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "Demand P=10−Q, supply P=2+Q. (a) Draw a binding ceiling P 4. Calculate traded Q, shortage, CS, PS and deadweight loss assuming efficient rationing. Discuss queues/black markets. [8] (b) Repeat for a floor P 8 without government buying, including surplus and rationing. Then distinguish government purchase of all surplus. [8] (c) Impose a unit tax 2: find buyer/seller prices, Q, tax revenue, CS/PS and DWL; draw/label every area and explain stakeholder incidence. [9]",
      "ru": "Спрос P=10−Q, предложение P=2+Q. (a) Потолок P 4: проданное Q, дефицит, CS, PS, DWL при эффективном распределении; очереди/чёрный рынок. [8] (b) Минимальная P 8 без госзакупки: избыток/распределение. Отличи выкуп всего избытка. [8] (c) Поштучный налог 2: цены покупателя/продавца, Q, доход бюджета, CS/PS/DWL; подпиши все области/распределение бремени. [9]"
    },
    "markscheme": {
      "en": "(a) Qs 2, Qd 6, traded 2, shortage 4. CS=(6+4)×2/2=10; PS=2×2/2=2; total 12, DWL 4 against 16. Rationing to highest willingness assumed; queues/misallocation can reduce welfare further. [8] (b) Qd 2, Qs 6, surplus 4, traded 2; CS 2, PS 10, DWL 4 if lowest-cost producers sell. Buying surplus costs 8×4=32, raises production to 6 and requires storage/disposal; cannot retain the no-purchase welfare calculation. [8] (c) 10−Q=2+Q+2→Q 3, Pbuyer 7, Pseller 5. Revenue 6; CS 4.5, PS 4.5, total incl revenue 15, DWL 1. Tax wedge 2; each side bears 1 here because slopes match, not a universal equal split. Label quantities/prices/triangles/rectangle. [9]",
      "ru": "(a) Qs 2, Qd 6, продано 2, дефицит 4. CS=(6+4)×2/2=10; PS=2×2/2=2; всего 12, DWL 4 против 16. Высшая готовность платить получает товар; очереди/неэффективное распределение ухудшат итог. [8] (b) Qd 2, Qs 6, избыток 4, продано 2; CS 2, PS 10, DWL 4 при продаже наименее затратными фирмами. Выкуп стоит 8·4=32, производство 6, нужны хранение/утилизация; расчёт без закупки уже неприменим. [8] (c) Q 3, цена покупателя 7, продавца 5. Бюджет 6, CS 4,5, PS 4,5, общий излишек с налогом 15, DWL 1. Клин 2, по 1 на сторону из-за одинаковых наклонов, а не всегда. Подпиши цены/количества/площади. [9]"
    },
    "origin": "original",
    "minutes": 25
  },
  {
    "id": "r06-econ-07",
    "subject": "econ",
    "topicIds": [
      "externalities",
      "common-pool-resources",
      "government-taxes-subsidies-price-controls"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) In the preceding P=10−Q / P=2+Q market introduce a unit subsidy 2. Draw and calculate Q, buyer/seller prices, government cost, CS/PS and welfare loss. [8] (b) For a factory with MPC=2+Q, MSC=4+Q, MSB=10−Q, find market/social output and welfare loss; explain externality versus private cost, and draw a corrective tax. [8] (c) Compare a tax per tonne of emissions with a tradable emissions cap. Explain the mechanism of fishery licensing/quotas and climate common-access overuse, future generations, monitoring and uncertainty. [6]",
      "ru": "(a) Для P=10−Q/P=2+Q введи субсидию 2 на единицу. Диаграмма, Q, цены покупателя/продавца, затраты бюджета, CS/PS, DWL. [8] (b) Завод: MPC=2+Q, MSC=4+Q, MSB=10−Q. Рыночный/общественный выпуск, DWL, внешние/частные затраты, корректирующий налог. [8] (c) Сравни налог на тонну выбросов и торгуемый лимит. Объясни лицензии/квоты рыбного промысла, общий доступ к среде, будущие поколения, контроль и неопределённость. [6]"
    },
    "markscheme": {
      "en": "(a) Supply to buyers P=Q; Q 5, Pb 5, Ps 7. Cost 10, CS 12.5, PS 12.5; net 15, DWL 1 vs 16. Label subsidy wedge/cost rectangle and overproduction triangle. [8] (b) Private Q 4, P 6; social Q 3, P 7 since MSC=MSB. Welfare loss½(4−3)×2=1. External cost falls on unpriced third parties, not all firm costs. Tax 2 internalises constant marginal harm; revenue is a transfer, not itself social gain. [8] (c) Emissions tax fixes pollution price, emissions uncertain; cap fixes permitted quantity, permit price varies. Tax output is not identical to taxing emissions when clean technology changes pollution/unit. Fish are rival but hard to exclude; individual gains ignore stock/future costs. Enforced licences, quotas, taxes or tradable rights can limit use but require scientific stock estimates/monitoring and international cooperation. [6]",
      "ru": "(a) S для покупателей P=Q: Q 5, Pb 5, Ps 7. Бюджет 10, CS 12,5, PS 12,5, чистый 15, DWL 1. Подпиши клин, прямоугольник затрат, треугольник перепроизводства. [8] (b) Частное Q 4, P 6; общественное Q 3, P 7 при MSC=MSB. DWL½·1·2=1. Внешние затраты несут третьи лица вне цены, не все затраты фирмы. Налог 2 учитывает постоянный предельный вред; налоговый доход — перераспределение, не самостоятельный общественный выигрыш. [8] (c) Налог фиксирует цену загрязнения, объём неизвестен; лимит фиксирует разрешённый объём, цена разрешения меняется. Налог на выпуск не равен налогу на выбросы при смене технологии. Рыба конкурентна в потреблении, исключение трудно; личный доход игнорирует истощение/будущее. Нужны исполнимые лицензии/квоты/платежи, оценка запасов, контроль/сотрудничество. [6]"
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-08",
    "subject": "econ",
    "topicIds": [
      "externalities"
    ],
    "paper": "P2",
    "marks": 24,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "Use MPC=2+Q and MPB=10−Q. Draw FOUR separate fully labelled diagrams, marking market/social quantities, social price and welfare triangle. (a) Negative production: MSC=MPC+2. (b) Negative consumption: MSB=MPB−2. (c) Positive production: MSC=MPC−2. (d) Positive consumption: MSB=MPB+2. For each calculate Qm, Qopt and loss and explain over/under-allocation. [16] (e) For each choose TWO responses from tax/subsidy, law/regulation, education, direct provision and a nudge. Show which private curve changes and explain one information/enforcement limitation. [8]",
      "ru": "При MPC=2+Q, MPB=10−Q построй ЧЕТЫРЕ диаграммы: рыночный/общественный объём, общественная цена, треугольник потерь. (a) Отрицательная производственная: MSC=MPC+2. (b) Отрицательная потребительская: MSB=MPB−2. (c) Положительная производственная: MSC=MPC−2. (d)Положительная потребительская: MSB=MPB+2. Для каждой Qm, Qopt, DWL, избыток/недостаток ресурсов. [16] (e)Для каждой ДВА ответа из налога/субсидии, регулирования, образования, госпредоставления, подталкивания: какая частная кривая меняется, ограничение информации/контроля? [8]"
    },
    "markscheme": {
      "en": "All market Qm 4, Pm 6. (a) Qopt 3, Popt 7; (b) Qopt 3, Popt 5; (c) Qopt 5, Popt 5; (d)Qopt 5, Popt 7. In each loss½×|Qopt−4|×2=1. Social price is the MSC=MSB intersection; actual buyer/producer prices after intervention may differ. Negative cases overproduce/consume, positive underproduce/consume. Label D=MPB, S=MPC plus distinct social curve. Corrective unit tax 2 shifts private S up in(a) ; consumption tax creates buyer/seller wedge in(b) ; subsidy 2 shifts private S down in(c) , consumption subsidy closes benefit gap in(d). Regulations can cap harms/require beneficial use; information and nudges change informed private demand, education/provision can encourage vaccination; innovation subsidy supports spillovers. Do not assume education always shifts social benefits or perfectly corrects unknown harm. Award for each mechanism, diagram and qualified evaluation, not a memorised list. [24]",
      "ru": "Везде Qm 4, Pm 6. (a) Qopt 3, Popt 7; (b) 3,5; (c) 5,5; (d)5,7. Потери в каждом½·|Qopt−4|·2=1. Общественная цена в пересечении MSC/MSB не обязательно равна ценам покупателя/продавца после меры. Отрицательные случаи — избыток, положительные — недостаток ресурсов. Подпиши D=MPB, S=MPC и отдельную общественную кривую. Налог 2 поднимает частные затраты(a) , потребительский налог создаёт клин(b) ; субсидия 2 снижает S(c) , субсидирование потребления закрывает разрыв выгод(d). Законы ограничивают вред/требуют полезных действий; информация/подталкивание меняют частный спрос, образование/предоставление поддерживают вакцинацию, субсидия исследований — внешние выгоды. Образование не обязано менять MSB и идеально устранять неизвестный вред. Баллы за механизм, диаграмму, условный вывод, не список. [24]"
    },
    "origin": "original",
    "minutes": 24
  },
  {
    "id": "r06-econ-09",
    "subject": "econ",
    "topicIds": [
      "public-goods",
      "asymmetric-information"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Explain non-rivalry/non-excludability using street flood warnings; connect free riding to under-provision and compare public provision with contracting a private operator. [6] (b) A used-car seller knows engine quality; a health-insurance buyer knows her own risk. Explain adverse selection in EACH direction and give screening/signalling/disclosure responses and limits. [6] (c) After full insurance a driver takes less care. Explain moral hazard, deductibles/monitoring and their equity trade-off; distinguish it from pre-contract selection. [6]",
      "ru": "(a) На примере общедоступного предупреждения о паводке объясни неконкурентность/неисключаемость, безбилетника, недопредоставление, госпроизводство/заказ частному оператору. [6] (b) Продавец автомобиля знает двигатель, покупатель медстраховки — свой риск: неблагоприятный отбор в ОБОИХ направлениях, скрининг/сигнал/раскрытие и ограничения. [6] (c) После полной страховки водитель менее осторожен: моральный риск, франшиза/контроль, справедливость; отличие от отбора до договора. [6]"
    },
    "markscheme": {
      "en": "(a) One person hearing a broadcast does not prevent another; excluding non-payers is difficult. Voluntary payers cannot capture all benefits, so too little is funded. Tax finance/internal public provision or competitively contracted service can supply it; monitor quality/coverage and procurement costs. [6] (b) Seller-held hidden quality can drive good cars out at pooled prices; warranties/independent inspection/disclosure help. Buyer-held health risk leads high-risk people to select cover, raising pooled premiums and potentially excluding low-risk buyers; questionnaires/screening/risk pooling or mandates address different parts, with privacy/equity/accuracy limits. [6] (c) Hidden behaviour AFTER contract changes incentives, unlike hidden type BEFORE it. Deductibles share losses and encourage care but may deter necessary claims by low-income people; monitoring costs money and intrudes on privacy. [6]",
      "ru": "(a) Прослушивание одним не мешает другому, неплательщиков трудно исключить. Добровольная оплата не захватывает все выгоды: недофинансирование. Налоги и госслужба либо конкурентный частный контракт могут дать услугу; проверяй качество/охват/затраты закупки. [6] (b) Скрытое качество продавца вытесняет хорошие машины при общей цене; помогают гарантия/осмотр/раскрытие. Скрытый риск покупателя ведёт к выбору страховки людьми высокого риска, росту общей премии/уходу низкого риска; анкеты/проверка/объединение рисков/обязательность решают разные части, ограничены точностью, приватностью, справедливостью. [6] (c) После договора скрытое поведение меняет стимулы, до него скрыт тип. Франшиза стимулирует осторожность, но может удерживать бедных от необходимых обращений; контроль дорог и вторгается в частную жизнь. [6]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-10",
    "subject": "econ",
    "topicIds": [
      "measuring-economic-activity",
      "equity-and-market-failure"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "All monetary aggregates below are in billions of local currency units unless stated otherwise. (a) Draw two/five-sector circular flows with real/money arrows and S, T, M/I, G, X. Given C 600, I 150, G 200, X 100, M 120, calculate GDP. [8] (b) Net primary income from abroad−30, population 10 million, nominal GDP 930 billion, deflator 120, PPP conversion 15 local units/international dollar versus market rate 20 local units per US dollar. Find GNI, real GDP, nominal GDP/person and PPP GDP; distinguish every measure. [8] (c) Explain two market causes of income/wealth inequality, distinguishing equality from equity. [4]",
      "ru": "(a) Нарисуй двух- и пятисекторный кругооборот с реальными и денежными потоками; подпиши S, T, M и I, G, X. Все агрегаты в млрд местных денежных единиц: C=600, I=150, G=200, X=100, M=120. Рассчитай ВВП. [8] (b) Чистые первичные доходы из-за рубежа равны −30 млрд местных единиц, население — 10 млн, номинальный ВВП — 930 млрд, дефлятор — 120. Коэффициент ППС — 15 местных единиц за международный доллар, рыночный курс — 20 за доллар. Рассчитай ВНД, реальный ВВП, номинальный ВВП на человека и ВВП по ППС; объясни различия показателей. [8] (c) Объясни две рыночные причины неравенства доходов и богатства; различи равенство и справедливость. [4]"
    },
    "markscheme": {
      "en": "(a) GDP=C+I+G+X−M=930; label households/firms/factor/product markets; money opposes resources/products; S, T, M leak, I, G, X inject. [8] (b) GNI=930−30=900 billion; real GDP 930/1.2=775 billion base-year units; nominal per capita 93000 local units; PPP GDP 930/15=62 billion international dollars (market conversion 46.5 billion is different). GDP is domestic production, GNI resident primary income; per capita divides by people; PPP adjusts cross-country price levels, deflator adjusts time. [8] (c) Unequal assets/human capital/opportunity/bargaining power/discrimination produce unequal market rewards. Income equality means equal income across people; equity is a reasoned fairness judgement and need not mean identical shares. [4]",
      "ru": "(a) ВВП=C+I+G+X−M=930; домохозяйства/фирмы/рынки факторов и продуктов; деньги навстречу ресурсам/продуктам; S, T, M — утечки, I, G, X — инъекции. [8] (b) ВНД 900 млрд, реальный ВВП 775 млрд в ценах базы, номинальный на человека 93000, ППС 62 млрд международных долларов (по курсу 46,5 — другое). ВВП — внутреннее производство, ВНД — первичные доходы резидентов; ППС сравнивает уровни цен стран, дефлятор — времени. [8] (c) Активы, человеческий капитал, возможности, власть/дискриминация дают разные рыночные вознаграждения. Равенство доходов — одинаковый доход у людей; справедливость — обоснованная оценка распределения, которая не обязательно требует одинаковых долей. [4]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-11",
    "subject": "econ",
    "topicIds": [
      "measuring-economic-activity",
      "ad-as-model-and-business-cycle"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Nominal GDP rises from 1000 to 1100 billion AED and deflator 100→105. Calculate both real GDPs and real growth. Sketch a cycle around a rising potential trend, naming expansion/peak/contraction/trough and why actual output need not equal potential. [8] (b) Define AD=C+I+G+NX; give a cause of a shift of EACH component and draw one AD change. [6] (c) Define SRAS, explain its upward slope and classify increases in wages, oil prices, indirect taxes or subsidies, and a drought; draw one shift and new equilibrium. [6]",
      "ru": "(a) Номинальный ВВП вырос с 1000 до 1100 млрд AED, дефлятор — со 100 до 105. Рассчитай реальный ВВП в обоих периодах и его рост. Изобрази цикл вокруг растущего потенциала: подъём, пик, сокращение, дно. Объясни, почему фактический выпуск может отличаться от потенциального. [8] (b) Определи AD=C+I+G+NX, назови причину сдвига каждого компонента и построй один сдвиг AD. [6] (c) Определи SRAS и объясни её положительный наклон. Классифицируй повышение зарплаты, цены нефти, косвенного налога или субсидии, а также засуху; покажи один сдвиг и новое равновесие. [6]"
    },
    "markscheme": {
      "en": "(a) 1000 and 1100/1.05=1047.619; real growth 4.7619%, not 10%. Cycle is actual output fluctuation around potential, with possible gaps; rising trend is capacity growth, not absence of recessions. [8] (b) AD planned total domestic spending at each price level. Confidence/disposable income→C, interest/expected profit→I, budget→G, foreign income/exchange rate→NX. AD shift is not movement from own price level. [6] (c) With sticky input costs, higher output prices make more output profitable short run. Higher wages/oil/tax shift SRAS left; subsidy right; drought left. Supply contraction raises P, lowers Y at fixed AD; label old/new intersections and units. [6]",
      "ru": "(a) 1000 и 1047,619; реальный рост 4,7619%, не 10%. Цикл — колебания фактического выпуска вокруг потенциала с разрывами; рост тренда мощностей не исключает спад. [8] (b) AD — планируемые расходы на внутренний выпуск при каждом уровне цен. Уверенность/располагаемый доход→C, процент/прибыль→I, бюджет→G, зарубежный доход/курс→NX. Свой уровень цен даёт движение, не сдвиг. [6] (c) При жёстких затратах рост цен выпуска повышает выгодность производства. Зарплата/нефть/налог вверх — SRAS влево, субсидия — вправо, засуха — влево; P растёт, Y падает при той же AD. Подпиши оба равновесия. [6]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-12",
    "subject": "econ",
    "topicIds": [
      "ad-as-model-and-business-cycle"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Draw neoclassical AD/SRAS/LRAS with actualY 90 and potential 100; define equilibrium, recessionary gap and full employment. Explain downward wage/resource-price adjustment back to potential with AD fixed. Contrast an inflationary gapY 110. [10] (b) Draw Keynesian AS horizontal/intermediate/vertical segments. Explain downward wage/price rigidity and compare an AD rise when capacity is spare versus full. Does equilibrium imply no unemployment? [10]",
      "ru": "(a) Неоклассическая AD/SRAS/LRAS: фактическийY 90, потенциал 100. Равновесие, рецессионный разрыв, полная занятость; снижение зарплат/ресурсных цен и возврат к потенциалу при той же AD; противопоставь разрывY 110. [10] (b) Кейнсианская AS: горизонталь/промежуточная/вертикаль. Жёсткость зарплат/цен вниз; рост AD при резерве и полном использовании. Означает ли равновесие отсутствие безработицы? [10]"
    },
    "markscheme": {
      "en": "(a) At AD=SRAS planned spending matches output, not necessarily potential. LRAS vertical 100; Y 90 below it. Flexible nominal wages/input prices fall, SRAS right untilY 100 at lowerP. At 110 above potential, resource pressure raises wages, SRAS left. Full employment permits natural frictional/structural unemployment, not zero. [10] (b) Keynesian AS has flat spare-capacity region, upward middle, vertical capacity limit. Downward rigidity may prevent fast self-correction; AD increase raisesY/employment with little price pressure on flat part, mainlyP at capacity. Mark diagrams and assumptions; these are different models, not guaranteed automatic forecasts. [10]",
      "ru": "(a) При AD=SRAS планируемые расходы равны выпуску, не обязательно потенциалу. LRAS вертикальна в 100, Y 90 левее. Гибкая номинальная зарплата/ресурсы дешевеют, SRAS вправо до 100 при меньшемP. При 110 ресурсное давление повышает зарплаты, SRAS влево. Полная занятость допускает естественную фрикционную/структурную безработицу. [10] (b) AS горизонтальна при резерве, затем растёт, вертикальна при пределе. Жёсткость вниз тормозит самокоррекцию; рост AD на горизонтали увеличиваетY/занятость почти без цен, при пределе — главным образомP. Подпиши предпосылки: модели не гарантированные прогнозы. [10]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-13",
    "subject": "econ",
    "topicIds": [
      "ad-as-model-and-business-cycle",
      "supply-side-policies",
      "macroeconomic-objectives"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) A training/transport programme raises potential 100→110. Draw the long-run change in BOTH neoclassical and Keynesian models; classify quantity/quality of factors, technology, efficiency, institutions and natural unemployment as capacity channels. [8] (b) Compare an AD rise fromY 90 under each model, specifying slope and wage assumptions rather than saying every demand rise is always inflationary. [6] (c) Explain household, firm, government and social costs of unemployment. [4]",
      "ru": "(a) Обучение/транспорт повышают потенциал 100→110. Долгосрочные сдвиги в ОБЕИХ моделях; количество/качество факторов, технология, эффективность, институты, естественная безработица. [8] (b) Рост AD изY 90: сравни наклон/жёсткость, не утверждай, что всякий рост спроса всегда инфляционен. [6] (c) Издержки безработицы для семьи, фирмы, бюджета, общества. [4]"
    },
    "markscheme": {
      "en": "(a) LRAS 100→110 right; Keynesian AS capacity boundary right with flat/transition regions extended as appropriate. Skills/health raise labour quality, infrastructure/capital quantity/productivity; technology/competition/institutions improve efficiency, matching reduces natural unemployment. [8] (b) Upward SRAS gives someP increase withY; Keynesian flat region permitsY expansion withoutP rise. At potential vertical supply prevents sustainedY gain from AD alone. Government intervention rationale differs with adjustment assumptions, not an absolute empirical law. [6] (c) Lost income/skills/wellbeing; lower sales; less tax/more benefits; lost output, exclusion/social stress. Weight depends on duration/type and safety nets. [4]",
      "ru": "(a) LRAS 100→110 вправо; у кейнсианской AS вправо сдвигается предел, расширяются участки резерва. Навыки/здоровье — качество труда, капитал/инфраструктура — количество/производительность; технологии/конкуренция/институты — эффективность, поиск — естественная безработица. [8] (b) На наклонной SRAS растут P иY, на горизонтали возможно без ростаP. У потенциала вертикальное предложение не даёт устойчивого приростаY от одной AD. Роль государства зависит от предпосылок адаптации, не абсолютного закона. [6] (c) Потеря дохода/навыков/здоровья, продаж, налогов; больше пособий, меньше выпуска, социальное исключение. Значение зависит от длительности/типа/защиты. [4]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-14",
    "subject": "econ",
    "topicIds": [
      "macroeconomic-objectives"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Population 1000 people:540 employed,60 unemployed and 400 outside the labour force. Calculate labour force/unemployment rate; explain exclusion of non-searchers and classify seasonal resort, job search, automation mismatch and recession layoffs. Draw structural labour mismatch and cyclical AD/AS unemployment. [8] (b) A fixed basket contains 2 units of bread and 1 of fuel. Base prices are 3 and 4 AED; new prices are 4 and 6 AED, respectively. Find CPI/inflation; discuss substitution, quality, new goods and household weighting biases. [6] (c) Distinguish inflation/disinflation/deflation; draw demand-pull and cost-push and explain redistribution, uncertainty, menu/shoe-leather and competitiveness costs conditionally. [8]",
      "ru": "(a) Население — 1000 человек: 540 заняты, 60 безработны, 400 вне рабочей силы. Рассчитай рабочую силу и уровень безработицы. Объясни статус неищущих работу; классифицируй сезонную работу курорта, поиск работы, несоответствие навыков после автоматизации и увольнения при спаде. Построй диаграммы структурного несоответствия и циклической безработицы AD/AS. [8] (b) Фиксированная корзина содержит 2 единицы хлеба и 1 единицу топлива. Базовые цены — 3 и 4 AED, новые — 4 и 6 AED соответственно. Рассчитай ИПЦ и инфляцию; объясни ограничения из-за замещения, качества, новых товаров и весов семей. [6] (c) Различи инфляцию, дезинфляцию и дефляцию; построй инфляцию спроса и затрат. Условно объясни перераспределение, неопределённость, издержки смены цен/управления наличностью и конкурентоспособность. [8]"
    },
    "markscheme": {
      "en": "(a) Labour force 600, rate 60/600×100=10%, not 6%. Unemployed are available/seeking; nonparticipants not denominator. Types seasonal, frictional, structural, cyclical. Structural diagram shows skills/location mismatch can persist despite vacancies; cyclical AD left reduces Y/employment in either model (show gap). [8] (b) Basket 10→14, CPI 140, inflation 40%. Fixed basket misses substitution, quality/new products; average weights differ from each household. [6] (c) Inflation sustained general price rise; disinflation slower positive rise; deflation sustained fall. AD right versus SRAS left gives different Y effects. Unexpected inflation reduces the purchasing power of fixed nominal incomes and redistributes from lenders to borrowers on fixed nominal debt; planning, repricing and cash-management responses can create costs; relative foreign inflation may weaken competitiveness, exchange rate/productivity matter. Not every wage or price rises equally. [8]",
      "ru": "(a) Рабочая сила 600, безработица 10%, не 6%. Нужны готовность/поиск; вне рабочей силы не в знаменателе. Типы: сезонная, фрикционная, структурная, циклическая. Структурная: навыки/место не соответствуют вакансиям; циклическая: AD влево, выпуск/занятость ниже потенциала. [8] (b) 10→14, ИПЦ 140, инфляция 40%. Фиксированная корзина плохо учитывает замещение/качество/новинки, средние веса не равны семейным. [6] (c) Инфляция — устойчивый общий рост цен, дезинфляция — замедление роста, дефляция — падение. AD вправо/SRAS влево по-разному влияют на Y. Неожиданная инфляция снижает покупательную способность фиксированных номинальных доходов и перераспределяет от кредиторов к должникам по фиксированным номинальным обязательствам. Планирование, смена цен и управление остатками денег могут создавать издержки. Конкурентоспособность зависит также от курса/производительности; не все цены/зарплаты растут одинаково. [8]"
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-15",
    "subject": "econ",
    "topicIds": [
      "macroeconomic-objectives",
      "ad-as-model-and-business-cycle"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Compare deflation caused by AD collapse with productivity-driven AS expansion using two diagrams; explain debt burden, postponement, profits and unemployment, qualifying why sustained general falls may be uncommon with stabilisation. [8] (b) Draw SRPC, an adverse supply/expectations shift and LRPC at natural unemployment; explain stagflation and why no permanent exploitable trade-off is guaranteed. [8] (c) Real GDP rises from 500 to 520 billion AED: calculate real growth. Contrast short-run actual growth by AD with long-run potential growth by AS and judge whether low unemployment or low inflation is always preferable. [6]",
      "ru": "(a) Сопоставь дефляцию из-за падения AD и роста производительности AS на двух диаграммах. Объясни долговое бремя, отложенные покупки, прибыль и безработицу; почему стабилизация может уменьшать вероятность устойчивого общего падения цен? [8] (b) Построй SRPC, её сдвиг из-за затрат или ожиданий и LRPC при естественной безработице. Объясни стагфляцию и отсутствие гарантированного постоянного компромисса. [8] (c) Реальный ВВП вырос с 500 до 520 млрд AED. Рассчитай рост. Сопоставь краткосрочный рост фактического выпуска через AD и долгосрочный рост потенциала через AS. Оцени, всегда ли низкая безработица важнее низкой инфляции. [6]"
    },
    "markscheme": {
      "en": "(a) AD left lowers P, Y, raises unemployment; AS right lowers P while Y rises. Falling P raises the real value of an unchanged nominal debt, may delay discretionary purchases and squeeze revenues, especially demand collapse; anticipated mild productivity falls differ. Positive inflation targets/stabilisation can reduce persistent falls, not make them impossible. [8] (b) SRPC downward relationship conditional on expected inflation/supply; oil shock or higher expectations shifts it up, allowing inflation+unemployment. LRPC vertical at natural rate; expectations/wage adjustment removes a lasting demand-driven unemployment gain. [8] (c) 4%. AD can use spare capacity but may raise P; LRAS expansion raises potential and can reduce price pressure. Compare severity, duration, distribution and policy feasibility: no universal ranking. [6]",
      "ru": "(a) AD влево снижает P, Y, повышает безработицу; AS вправо снижает P при росте Y. Реальная стоимость неизменного номинального долга растёт, покупки могут откладываться, выручка сжимается; мягкое ожидаемое падение от производительности отличается от провала спроса. Цели положительной инфляции/стабилизация снижают риск, не исключают дефляцию. [8] (b) SRPC убывает при данных ожиданиях/предложении; нефть/ожидания сдвигают вверх: инфляция и безработица вместе. LRPC вертикальна при естественной норме; адаптация ожиданий убирает постоянный выигрыш от спроса. [8] (c) 4%. AD использует резерв, но может поднять P; LRAS повышает потенциал и сдерживает цены. Сравни тяжесть, длительность, распределение, доступные меры: универсального приоритета нет. [6]"
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-16",
    "subject": "econ",
    "topicIds": [
      "fiscal-policy",
      "macroeconomic-objectives"
    ],
    "paper": "P2",
    "marks": 18,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) A growth programme raises real output/incomes, tax revenue and transport access but increases emissions and benefits mainly one region. Write two positive chains and two qualified trade-offs covering environment, inequality, inflation and social cohesion. [8] (b) Debt 600, nominal GDP 1000. Next year debt rises 5%, GDP 10%; calculate both debt ratios. Repeat with GDP falling 5%. Distinguish deficit/surplus/debt and explain why a falling ratio alone does not prove sustainability. [10]",
      "ru": "(a) Программа повышает реальный выпуск/доходы, налоги, доступ к транспорту, но выбросы растут, выгоды в одном регионе. Две положительные цепочки/два условных компромисса: среда, неравенство, инфляция, сплочённость. [8] (b) Долг 600, номинальный ВВП 1000. Долг+5%, ВВП+10%: отношения; затем ВВП−5%. Отличи дефицит/профицит/долг; почему снижения доли недостаточно для устойчивости? [10]"
    },
    "markscheme": {
      "en": "(a) Productivity→real wages/purchasing power and jobs; profits/tax base→R&D/public services, variety. Pollution depletes natural capital; uneven assets/skills/regions may widen inequality and conflict, not inevitably. AD growth near capacity may raise inflation; redistribution/clean technology/skills may reduce trade-offs. Do not label GDP welfare-measurement exclusion as excluding these consequences. [8] (b) Initial 60%;630/1100=57.27%;630/950=66.32%. Deficit annual spending>revenue, surplus reverse, debt outstanding stock. Compare NOMINAL debt and GDP consistently; real growth alone not the same denominator. Interest, currency, maturity, tax capacity, primary balance, refinancing risk matter even with falling debt/GDP. [10]",
      "ru": "(a) Производительность→реальная зарплата/покупательная сила/занятость; прибыль/налоги→НИОКР/общественные услуги/выбор. Загрязнение истощает природный капитал; разные активы/навыки/регионы могут усилить неравенство/конфликт, не неизбежно. Рост AD у предела инфляционен; перераспределение, чистая технология, обучение смягчают компромиссы. Исключение измерительных ограничений ВВП не исключает эти последствия. [8] (b) 60%;57,27%;66,32%. Дефицит — расходы выше доходов за год, профицит наоборот, долг — запас обязательств. Сравнивай номинальные величины согласованно. Процент, валюта, сроки, налоговая база, первичный баланс, рефинансирование важны даже при падении доли. [10]"
    },
    "origin": "original",
    "minutes": 18
  },
  {
    "id": "r06-econ-17",
    "subject": "econ",
    "topicIds": [
      "inequality-and-poverty",
      "fiscal-policy"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Income quintile shares 5,10,15,25,45%. Construct Lorenz points and use trapezoids for an approximate Gini; distinguish income/wealth, equality/equity. [8] (b) Define absolute/relative poverty; propose measurement and explain price/PPP, household size, informal income and data difficulties. Link poverty to opportunity, assets, skills, discrimination, power, tax-benefits, globalisation/technology and market reforms, not innate blame. [8] (c) Explain debt-service/credit-rating/future-tax/inequality/investment/debt-trap costs as conditional mechanisms. [6]",
      "ru": "(a) Доходные доли квинтилей: 5%, 10%, 15%, 25%, 45%. Построй кривую Лоренца и приближённо рассчитай Джини трапециями. Различи доход и богатство, равенство и справедливость. [8] (b) Различи абсолютную и относительную бедность. Объясни измерение с учётом цен/ППС, размера семьи, неформальных доходов и качества данных. Свяжи различия с активами, навыками, возможностями, дискриминацией, рыночной властью, налогами/пособиями, глобализацией, технологией и рыночными реформами. [8] (c) Объясни условные цепочки влияния долга: обслуживание, рейтинг, будущие налоги, неравенство, инвестиции и долговая ловушка. [6]"
    },
    "markscheme": {
      "en": "(a) Points(0,0), (.2, .05), (.4, .15), (.6, .30), (.8, .55), (1,1). Area=.31, Gini 1−2(.31)=.38 (grouped approximation, within-quintile distribution unknown). Wealth stock vs income flow; equity normative. [8] (b) Absolute threshold basic needs/purchasing power; relative threshold share of median equivalent income. Count below threshold, qualify depth/non-income deprivation. PPP/price/time changes, household needs, hidden income/survey access affect comparison. Each listed cause changes opportunity/reward or protection; technology/trade produce winners and losers, not universal poverty. [8] (c) Interest diverts spending, rollover/rating can raise rates, future taxes/services bear burden, asset holders receive interest, borrowing can crowd investment; interest-financed deficits may compound. Currency, ownership, capacity and productive use change outcomes; no automatic debt disaster. [6]",
      "ru": "(a) Точки(0;0), (.2; .05), (.4; .15), (.6; .30), (.8; .55), (1;1). Площадь .31, Джини .38, приближение по группам: распределение внутри неизвестно. Богатство — запас, доход — поток; справедливость нормативна. [8] (b) Абсолютная граница базовых потребностей/покупательной силы; относительная — доля медианного эквивалентного дохода. Доля ниже порога не показывает глубину/немонетарные лишения. Цены/ППС/время, потребности семьи, скрытые доходы, доступ к опросам меняют сравнение. Причины влияют на возможности/вознаграждение/защиту; торговля/технологии дают победителей и проигравших. [8] (c) Процент отвлекает расходы, риск рефинансирования/рейтинг повышает ставку, будущие налоги/услуги несут бремя, владельцы активов получают процент, заём может вытеснять инвестиции. Долг ради процентов накапливается. Валюта, владельцы, мощности, продуктивность расходов меняют итог; катастрофа не автоматична. [6]"
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-18",
    "subject": "econ",
    "topicIds": [
      "inequality-and-poverty",
      "monetary-policy"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Annual income is 50000 AED; tax 0% first 10000,10% next 20000,20% remainder. Find total, average, marginal tax rates. A tax-inclusive purchase of 120 AED has VAT 20%: find VAT. Define direct/indirect, proportional/progressive/regressive and explain why a proportional consumption tax can be income-regressive. [8] (b) Compare transfers, education/health access, minimum wages and asset/opportunity policies for poverty, growth, living standards/social stability. [6] (c) Distinguish central/commercial banks and define monetary policy; explain inflation targeting, employment, cycle/growth stability and external balance goals/trade-offs. [6]",
      "ru": "(a) Годовой доход — 50000 AED. Налог: 0% на первые 10000 AED, 10% на следующие 20000 AED, 20% на остаток. Рассчитай налог, среднюю и предельную ставки. Покупка за 120 AED уже включает НДС 20%: рассчитай НДС. Различи прямые/косвенные и пропорциональные/прогрессивные/регрессивные налоги; объясни возможную регрессивность налога на потребление относительно дохода. [8] (b) Сопоставь пособия, доступ к образованию/медицине, минимальную зарплату и политику активов/возможностей по влиянию на бедность, рост, уровень жизни и стабильность. [6] (c) Различи центральный и коммерческий банк, определи денежную политику и объясни цели инфляции, занятости, цикла/роста и внешнего баланса. [6]"
    },
    "markscheme": {
      "en": "(a) Tax 2000+4000=6000, average 12%, marginal 20%; VAT 120×20/120=20, not 24. Direct on income/wealth, indirect spending; progressive average rate rises with income, proportional constant, regressive falls. Low incomes may spend greater income share on taxed necessities. [8] (b) Transfers can immediately support disposable income but require funding; targeting may concentrate support on poorer households while creating exclusion risks, whereas universal transfers do not require means tests; skills/health increase opportunities with lags; minimum wage supports covered workers but employment effects depend on labour-market power/productivity/enforcement; assets/anti-discrimination broaden access. Evaluate inclusion, incentives, budget and long-run productivity, not one universal cure. [6] (c) Central bank sets monetary conditions/settles reserves; commercial banks take deposits/lend. Monetary policy manages rates/money/credit toward price stability and other mandates. Demand support may reduce cyclical unemployment but add inflation/external deficit; stable low inflation aids planning, not guaranteed growth. [6] All tax amounts and the VAT answer are in AED.",
      "ru": "(a) Налог 6000, средняя 12%, предельная 20%; НДС 20, не 24. Прямой — доход/богатство, косвенный — расходы; прогрессивность/регрессивность определяются изменением средней ставки с доходом. Бедные могут тратить большую долю на облагаемые необходимые товары. [8] (b) Пособия могут быстро поддержать доход, но требуют средств. Адресность может сосредоточить помощь на бедных, однако создаёт риск исключить нуждающихся; универсальные выплаты не требуют проверки доходов; навыки/здоровье дают возможности с лагом. Минимальная зарплата помогает охваченным, занятость зависит от рыночной власти, производительности, контроля. Активы/борьба с дискриминацией расширяют доступ. Оцени охват, стимулы, бюджет, продуктивность, не универсальное средство. [6] (c) ЦБ задаёт денежные условия/резервы, коммерческие банки принимают вклады/кредитуют. Политика управляет ставками/деньгами/кредитом по мандату. Если расходы реагируют и есть свободные мощности, поддержка спроса может снизить циклическую безработицу, может усилить инфляцию/внешний дефицит; стабильные цены помогают планированию, не гарантируют рост. [6] Все суммы налога и ответ по НДС — в AED."
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-19",
    "subject": "econ",
    "topicIds": [
      "monetary-policy"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) In a simplified deposit model with no cash leakage/excess reserves and reserve ratio 10%, an initial new reserve deposit of 100 AED supports what maximum deposits/loans? Explain why this is NOT a fixed real-world lending rule. [6] (b) Draw money demand/supply and rate determination. Explain open-market buying, reserve requirements, base lending rate and QE; contrast the instruments and their constraints. [8] (c) Nominal rate 7%, inflation 4%: approximate and exact real rate. Show expansionary/contractionary rate→C/I/exchange-rate/NX→AD→P/Y transmission in gap diagrams and one limitation. [8]",
      "ru": "(a) В упрощённой депозитной модели нет наличной утечки и избыточных резервов; резервная норма — 10%, первоначальный новый вклад резервных денег — 100 AED. Рассчитай максимальную сумму депозитов и кредитов. Объясни, почему это не фиксированное правило реальных банков. [6] (b) Построй рынок денег и определение ставки; объясни покупку активов на открытом рынке, резервный норматив, базовую кредитную ставку и QE, различая инструменты и ограничения. [8] (c) Номинальная ставка — 7%, инфляция — 4%. Рассчитай приближённую и точную реальную ставку. На диаграммах разрывов объясни передачу экспансии/сжатия: ставка → C/I/курс/NX → AD → P/Y, указав одно ограничение. [8]"
    },
    "markscheme": {
      "en": "(a) Toy multiplier 1/.1=10; maximum deposits 1000, loans 900 if initial 100 is deposited reserves. Loans create deposits in modern banking; capital, creditworthiness, demand, profitability, liquidity and monetary policy constrain lending, not a mechanical fixed reserve multiple. [6] (b) Rate vertical, money quantity horizontal; MD downward, MS stylised vertical. Asset purchases add reserves/liquidity; lower required reserve ratio relaxes toy constraint; lower base rate reduces marginal bank funding rates; QE large-scale longer-term assets targets yields/financial conditions, not just identical short-rate operation. Pass-through/expectations matter. [8] (c) Approx 3%, exact 1.07/1.04−1=2.8846%. Lower rates encourage interest-sensitive C/I and may depreciate currency/increase NX; AD right closes demand gap, reverse restrains inflation. FX effects depend on foreign rates/trade elasticities, confidence/debt can weaken transmission. [8] Deposits 1000 AED and loans 900 AED are amounts in the same toy model.",
      "ru": "(a) Модельный мультипликатор 10; депозиты 1000, кредиты 900 при исходных 100 резервного вклада. Реальные кредиты создают депозиты; капитал, платёжеспособность, спрос, прибыльность, ликвидность, политика ограничивают кредит, не механическая постоянная кратность. [6] (b) Ставка по вертикали, деньги по горизонтали, MD вниз, стилизованная MS вертикальна. Покупка активов добавляет резервы; снижение нормы ослабляет модельное ограничение; ставка ЦБ влияет на стоимость фондирования; QE — крупные покупки долгосрочных активов ради доходностей/условий, не просто та же краткая ставка. [8] (c) Приближённо 3%, точно 2,8846%. Ставка вниз поддерживает C/I, может ослабить валюту/повысить NX, AD вправо закрывает дефицит спроса; обратная мера сдерживает инфляцию. Внешние ставки/эластичности, уверенность/долги ограничивают передачу. [8] Депозиты 1000 AED и кредиты 900 AED — суммы той же учебной модели."
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-20",
    "subject": "econ",
    "topicIds": [
      "monetary-policy",
      "fiscal-policy",
      "multiplier"
    ],
    "paper": "P2",
    "marks": 22,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) An economy has a recessionary gap, policy rate 0.1%, weak confidence. Compare further rate cuts/QE with targeted government investment, considering flexibility, reversibility, implementation/transmission lags and near-zero constraints. [8] (b) Define fiscal policy and explain its price/employment/cycle/growth/equity/external goals using expansionary and contractionary AD diagrams. [6] (c) MPS=0.2, MPT=0.1, MPM=0.2; additional government spending G of 10 billion AED in the stated period. Calculate multiplier and predicted ΔY, define MPC/MPS/MPT/MPM, draw the successive AD effect and evaluate fixed-price/spare-capacity assumptions. [8]",
      "ru": "(a) В экономике рецессионный разрыв, ключевая ставка 0,1% и слабая уверенность. Сопоставь дальнейшее снижение ставки/QE с адресными государственными инвестициями: гибкость, обратимость, лаги внедрения и передачи, ограничение около нуля. [8] (b) Определи бюджетную политику и объясни её цели для цен, занятости, цикла/роста, справедливости и внешнего баланса, используя AD-диаграммы экспансии и сжатия. [6] (c) MPS=0,2, MPT=0,1, MPM=0,2; новые государственные расходы G=10 млрд AED за рассматриваемый период. Рассчитай мультипликатор и ожидаемое ΔY, определи MPC/MPS/MPT/MPM, покажи последовательный эффект AD и оцени допущения фиксированных цен и свободных мощностей. [8]"
    },
    "markscheme": {
      "en": "(a) Near-zero rate leaves little conventional scope; QE may lower long yields but low confidence weakens borrowing. Rate decisions flexible/reversible with short decision lag but uncertain transmission; targeted G directly buys output yet planning/procurement/politics delay and budget/debt constrain. Compare size/type of gap and crowding out. [8] (b) Government spending/taxation influence AD/distribution/capacity; G up/T down shifts AD right, reverse left. Lower unemployment/growth may conflict with inflation/external balance; targeting can improve equity. [6] (c) The marginal leakage rate is 0.2+0.1+0.2=0.5, so k=1/0.5=2 and ΔY=2×10=20 billion AED. MPS/MPT/MPM are fractions of additional income saved/taxed/imported; MPC is the fraction of additional income spent on consumption; imported consumption is separately a leakage from domestic demand. Initial 10 induces subsequent income/spending until total 20 under constant leakages, no crowding out, fixed prices/spare capacity. Do not multiply again after full ΔY. [8] The predicted change in income is 20 billion AED for that period.",
      "ru": "(a) Около нуля мало места для обычного снижения; QE может снизить долгосрочную доходность, но слабая уверенность тормозит заём. Решение по ставке гибко/обратимо, передача небыстра/неопределённа; G прямо покупает выпуск, но планирование/закупки/политика задерживают, бюджет/долг ограничивают. Сравни тип разрыва/вытеснение. [8] (b) Расходы/налоги меняют AD, распределение, мощности. G вверх/T вниз — AD вправо, обратно — влево. Занятость/рост могут конфликтовать с инфляцией/внешним балансом, адресность может улучшать справедливость при подходящем охвате. [6] (c) Суммарная предельная доля утечек: 0,2+0,1+0,2=0,5. Тогда k=1/0,5=2, а ΔY=2×10=20 млрд AED. MPS/MPT/MPM — доли дополнительного дохода на сбережения/налог/импорт, MPC — доля дополнительного дохода, идущая на потребление; импортная его часть отдельно утекает из спроса на внутренний выпуск. Первые 10 порождают следующие расходы до 20 при постоянных утечках, резерве/фиксированных ценах, без вытеснения. Не умножай полный результат снова. [8] Ожидаемое изменение дохода за этот период —20 млрд AED."
    },
    "origin": "original",
    "minutes": 22
  },
  {
    "id": "r06-econ-21",
    "subject": "econ",
    "topicIds": [
      "fiscal-policy",
      "supply-side-policies"
    ],
    "paper": "P2",
    "marks": 20,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Draw government borrowing→loanable-fund demand→interest→private investment crowding out, then explain why spare capacity/monetary accommodation may weaken it. [6] (b) Compare discretionary fiscal expansion with automatic progressive-tax/unemployment-benefit responses in recession and boom; show the feedback without a new law. [6] (c) Define supply-side policies/goals and distinguish market-based/interventionist channels for capacity, efficiency, labour costs/employment, price competitiveness and innovation. Evaluate budget, political, time/debt constraints of fiscal choices. [8]",
      "ru": "(a) Госзаём→спрос заёмных средств→процент→вытеснение инвестиций; диаграмма, почему резерв/денежная поддержка ослабляют эффект? [6] (b) Дискреционная мера против автоматического прогрессивного налога/пособия в спаде/буме, обратная связь без нового закона. [6] (c) Политика предложения: рыночная/интервенционистская, мощности, эффективность, труд/занятость, ценовая конкурентоспособность, инновации; бюджет, политика, время, долг. [8]"
    },
    "markscheme": {
      "en": "(a) Loanable funds axes rate/quantity; borrowing demand right raises rate if supply fixed, discouraging interest-sensitiveI. Slack resources/accommodating central bank/foreign flows mean not necessarily full crowding out. [6] (b) Recession lowers taxable incomes/average progressive burden and raises benefits, softening disposable-income/AD fall automatically; boom reverses. Discretion changes rates/spending by decision, with recognition/legislative/implementation lags. [6] (c) Supply-side aims productive capacity/productivity, competition/efficiency, labour flexibility/matching, lower unit cost and innovation incentives. Market reforms change incentives/competition; public training/health/infrastructure directly support capacity. Potential gains need time and may carry inequity/environment/budget costs; tax cuts can reduce revenue, market reform is not literally costless to enforce. [8]",
      "ru": "(a) Оси ставка/заёмные средства; спрос госзаёмщика вправо при данной S повышает ставку, снижает чувствительныеI. Резерв, ЦБ, внешний капитал не дают автоматически полного вытеснения. [6] (b) Спад снижает налогооблагаемый доход/среднее прогрессивное бремя, увеличивает пособия, смягчает падение дохода/AD; бум наоборот. Дискреция требует решения/лагов. [6] (c) Цели — мощность/производительность, конкуренция/эффективность, гибкость/соответствие труда, меньшие удельные затраты, инновационные стимулы. Рыночные реформы меняют стимулы, обучение/здоровье/инфраструктура прямо поддерживают потенциал. Нужны время/средства, возможны неравенство/экологический ущерб; налоговые льготы снижают доход, контроль реформ не бесплатен. [8]"
    },
    "origin": "original",
    "minutes": 20
  },
  {
    "id": "r06-econ-22",
    "subject": "econ",
    "topicIds": [
      "supply-side-policies"
    ],
    "paper": "P2",
    "marks": 24,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "(a) Classify and explain mechanisms for deregulation, privatisation, trade liberalisation, anti-monopoly rules, union/benefit/minimum-wage reforms, personal/business/capital-gains tax cuts. Distinguish removing rules from enforcing competition. [8] (b) Define infrastructure/industrial policy; explain education, training, healthcare, R&D, transport and targeted sector support with costs/lags. [6] (c) Government spends 20 on roads/training and cuts household taxes 10. Draw immediate AD and later LRAS/Keynesian-AS effects separately. Explain financing, imports, saving/spare-capacity conditions and supply-side effects of fiscal measures; do NOT assume capacity policy has no demand effect. [10]",
      "ru": "(a) Классифицируй/объясни дерегулирование, приватизацию, либерализацию торговли, антимонопольные правила, реформы профсоюзов/пособий/минимальной зарплаты, налоги на доход/прибыль/прирост капитала. Отличи снятие правил от защиты конкуренции. [8] (b) Инфраструктура/промышленная политика; образование, обучение, медицина, НИОКР, транспорт, отраслевой выбор, цены/лаги. [6] (c) G 20 на дороги/обучение, T домохозяйств−10: отдельные немедленные AD/поздние LRAS/кейнсианскаяAS; финансирование, импорт, сбережения, резерв; не отрицай спросовой эффект. [10]"
    },
    "markscheme": {
      "en": "(a) Competition/incentive/labour-flexibility market channels can reduce costs and improve allocation; privatisation transfers ownership, not automatically competition. Antitrust enforces rules against market power; trade expands contestability; benefit/minimum-wage cuts may alter incentives but hurt income/security and effects depend on employer power. Tax cuts raise after-tax reward/cash flow, not guaranteed investment. [8] (b) Infrastructure is enabling physical/social networks; industrial policy targets productive sectors. Public skills/health/research/capital can correct spillovers/access constraints with fiscal cost, selection risk and lags. [6] (c) G directly enters AD; tax cuts may raise disposable-income C or investment. AD right may raiseY/P depending slack. Later better skills/transport shift capacity right and may lower SRAS cost; training spending alone does not prove productive results. Financing offsets, import leakage, saving/confidence limit net AD, lag/effectiveness limit capacity. Distinguish objective from all effects. [10]",
      "ru": "(a) Конкуренция/стимулы/гибкость могут снизить затраты и улучшить размещение. Приватизация — смена владельца, не автоматическая конкуренция; антимонопольные меры вводят контроль, торговля усиливает состязательность. Снижение пособий/минимума меняет стимулы, но ухудшает защищённость; важна власть работодателя. Налоговые льготы увеличивают чистую отдачу/средства, не гарантируютI. [8] (b) Инфраструктура — обеспечивающие сети, промышленная политика — отраслевой выбор. Навыки/здоровье/наука/капитал устраняют внешние эффекты/барьеры доступа с бюджетной ценой/риском/лагом. [6] (c) G входит вAD прямо, T вниз может поднятьC/I; AD вправо меняетY/P по резерву. Позже навыки/транспорт сдвигают потенциал вправо, могут снизить затраты SRAS; сами расходы не доказывают результат. Финансирование, импорт, сбережения/уверенность ослабляют AD, лаги/качество — потенциал. Цель и все эффекты различны. [10]"
    },
    "origin": "original",
    "minutes": 24
  },
  {
    "id": "r06-econ-23",
    "subject": "econ",
    "topicIds": [
      "supply-side-policies",
      "fiscal-policy",
      "monetary-policy"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Calculate / Draw / Explain / Evaluate",
    "stimulus": {
      "en": "Original illustrative exercise: the people, economies and numerical data below are hypothetical, not an observed real-world case. Use the stated information; no external case search is required.",
      "ru": "Авторское учебное задание: люди, экономики и числовые данные ниже условные, а не наблюдаемый реальный кейс. Используй данное условие; искать внешний кейс не нужно."
    },
    "prompt": {
      "en": "A hypothetical economy has unemployment 9% (skills mismatch in half the vacancies), inflation 5%, weak demand, large regional inequality and a tight budget. Proposed A: abolish minimum wage/cut business tax; B: fund two-year training/transport; C: cut interest rates. (a) Use two labelled diagrams and evidence from this stimulus to compare likely demand/capacity/employment/inflation effects. [8] (b) Debate potential-output estimates, incentive responsiveness and minimum wage under competitive versus employer-power labour markets. [7] (c) Recommend a feasible sequence in 300–400 words, considering equity, vested interests, environment, costs, lags and growth. Give two measurable success criteria and one condition that would change your choice. [10]",
      "ru": "Условная экономика: безработица 9% (в половине вакансий несоответствие навыков), инфляция 5%, слабый спрос, региональное неравенство, тесный бюджет. A: убрать минимальную зарплату/снизить налог бизнеса; B: двухлетнее обучение/транспорт; C: снизить процент. (a) Две подписанные диаграммы и данные условия: AD/потенциал/занятость/цены. [8] (b) Спор об оценке потенциала, ответе стимулов, минимуме зарплаты при конкуренции/власти работодателя. [7] (c) Рекомендация 300–400 английских слов: справедливость, лобби, среда, цена/лаги/рост, два измеримых критерия и условие смены выбора. [10]"
    },
    "markscheme": {
      "en": "(a) Demand weakness supports AD measures but 5% inflation cautions against indiscriminate stimulus; skills mismatch calls for matching/training, not just demand. Draw AD change at stated slack plus later capacity shift; do not infer exact gap from 9% alone. [8] (b) Potential/natural unemployment unobserved and model-dependent; tax response depends confidence/demand/elasticity. Competitive above-equilibrium wage floor may reduce employment; with employer power a suitable minimum can raise wages without reducing jobs and possibly raise employment. Abolition is not universally beneficial. [7] (c) A defensible answer might target training/transport at mismatch regions with phased budget, retain/evaluate wage protection and use limited rate support only if expectations permit. Alternative sequences accepted when stimulus-based. Compare immediate support with two-year lag, budget opportunity cost, vested interests, emissions, regional distribution. Track vacancy-fill/time-to-employment and inflation/productivity, define baseline/date; reverse demand support if inflation expectations unanchor. Award coherent chains, evidence, qualified judgement, not a prescribed ideology. [10]",
      "ru": "(a) Слабый спрос поддерживает меры AD, но 5% требует осторожности; несоответствие навыков требует обучения/поиска, не одного спроса. Диаграммы AD при резерве/позднейшего потенциала; по 9% нельзя вычислить точный разрыв. [8] (b) Потенциал/естественная безработица ненаблюдаемы и зависят от модели; налоговый ответ зависит от уверенности/спроса/эластичности. В конкурентном рынке завышенный минимум сокращает занятость; при власти работодателя подходящий минимум может повысить зарплату без потери и даже с ростом рабочих мест. Отмена не универсальна. [7] (c) Можно адресно/поэтапно финансировать навыки/транспорт в отстающих регионах, оценивать защиту зарплаты, ограниченно поддержать ставки при устойчивых ожиданиях. Иные обоснованные последовательности допустимы. Сравни немедленный эффект/два года, бюджетную альтернативу, лобби, выбросы, распределение. Критерии: заполнение вакансий/срок трудоустройства и инфляция/производительность с базой/датой; при срыве ожиданий сократить стимул. Баллы за цепочки, данные, условный вывод, не идеологию. [10]"
    },
    "origin": "original",
    "minutes": 40
  }
];
