import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'exchange-rate',
    term: { en: 'exchange rate', ru: 'обменный курс (exchange rate)' },
    def: {
      en: 'The price of one currency expressed in units of another, as quoted in the market. This is the nominal exchange rate.',
      ru: 'Цена одной валюты, выраженная в единицах другой и котируемая на рынке. Это номинальный обменный курс.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'If the market quotes AED 3.6725 per USD, one US dollar costs 3.6725 dirhams, so USD 100 costs AED 367.25.',
      ru: 'Если рынок котирует 3,6725 AED за USD, один доллар стоит 3,6725 дирхама, а USD 100 стоят AED 367,25.',
    },
    pitfall: {
      en: 'AED 3.6725 per USD is not the same as USD 3.6725 per AED: check which currency is the unit of the quote.',
      ru: 'AED 3,6725 за USD — это не то же самое, что USD 3,6725 за AED: проверьте, какая валюта является единицей котировки.',
    },
    sim: 'econ.fx-market',
  },
  {
    id: 'real-exchange-rate',
    term: { en: 'real exchange rate', ru: 'реальный обменный курс (real exchange rate)' },
    def: {
      en: 'The nominal exchange rate adjusted for the difference in price levels at home and abroad. It shows the relative price of domestic and foreign goods.',
      ru: 'Номинальный обменный курс, скорректированный на разницу в уровнях цен внутри страны и за рубежом. Показывает относительную цену отечественных и иностранных товаров.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'A laptop costing USD 1200 in the US is AED 4407 at 3.6725 AED per USD; if it costs AED 5000 in Dubai, the real exchange rate is 4407 / 5000 = 0.88.',
      ru: 'Ноутбук стоимостью USD 1200 в США равен AED 4407 при курсе 3,6725 AED за USD; если в Дубае он стоит AED 5000, реальный курс равен 4407 / 5000 = 0,88.',
    },
    pitfall: {
      en: 'A rise in the nominal rate does not always mean a real depreciation: faster domestic inflation can offset it.',
      ru: 'Рост номинального курса не всегда означает реальное удешевление: более быстрая инфляция внутри страны может его компенсировать.',
    },
  },
  {
    id: 'foreign-exchange-market',
    term: { en: 'foreign exchange market', ru: 'валютный рынок (foreign exchange market)' },
    def: {
      en: 'The market where currencies are bought and sold. Demand for a currency comes from foreign buyers of its exports and assets; supply comes from domestic buyers of imports and foreign assets.',
      ru: 'Рынок, на котором покупают и продают валюты. Спрос на валюту исходит от иностранных покупателей её экспорта и активов; предложение — от внутренних покупателей импорта и зарубежных активов.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'When foreign tourists spend AED 2 million on hotels, they buy dirhams, which adds to the demand for AED.',
      ru: 'Когда иностранные туристы тратят AED 2 млн в отелях, они покупают дирхамы, и это увеличивает спрос на AED.',
    },
    pitfall: {
      en: 'Exports create demand for the domestic currency and imports create its supply; students often reverse this.',
      ru: 'Экспорт создаёт спрос на национальную валюту, а импорт — её предложение; учащиеся часто меняют эти стороны местами.',
    },
  },
  {
    id: 'appreciation',
    term: { en: 'appreciation', ru: 'удорожание валюты (appreciation)' },
    def: {
      en: 'A rise in the value of a currency against another currency, under a floating exchange rate, set by market forces. One unit of it buys more units of the other currency.',
      ru: 'Рост стоимости валюты по отношению к другой валюте при плавающем курсе, который задают рыночные силы. Одна единица валюты покупает больше единиц другой валюты.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'If the rate falls from 3.6725 to 3.30 AED per USD, one dirham buys about 0.30 USD instead of 0.27 USD, so the dirham appreciates.',
      ru: 'Если курс падает с 3,6725 до 3,30 AED за USD, один дирхам покупает около 0,30 USD вместо 0,27 USD, значит, дирхам дорожает.',
    },
    pitfall: {
      en: 'Appreciation is a market change under a floating rate; an official rise in a fixed rate is called revaluation.',
      ru: 'Удорожание — рыночное изменение при плавающем курсе; официальное повышение фиксированного курса называется ревальвацией.',
    },
    sim: 'econ.fx-market',
  },
  {
    id: 'depreciation',
    term: { en: 'depreciation', ru: 'удешевление валюты (depreciation)' },
    def: {
      en: 'A fall in the value of a currency against another currency, under a floating exchange rate, set by market forces. One unit of it buys fewer units of the other currency.',
      ru: 'Падение стоимости валюты по отношению к другой валюте при плавающем курсе, который задают рыночные силы. Одна единица валюты покупает меньше единиц другой валюты.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'If the rate rises from 3.6725 to 3.80 AED per USD, one dirham buys about 0.26 USD instead of 0.27 USD, so the dirham depreciates.',
      ru: 'Если курс растёт с 3,6725 до 3,80 AED за USD, один дирхам покупает около 0,26 USD вместо 0,27 USD, значит, дирхам дешевеет.',
    },
    pitfall: {
      en: 'Devaluation is an official cut in a fixed rate; depreciation is a market fall under a float. Do not use them as synonyms.',
      ru: 'Девальвация — официальное снижение фиксированного курса; удешевление — рыночное падение при плавающем курсе. Не используйте эти слова как синонимы.',
    },
    sim: 'econ.fx-market',
  },
  {
    id: 'floating-exchange-rate',
    term: { en: 'floating exchange rate', ru: 'плавающий обменный курс (floating exchange rate)' },
    def: {
      en: 'A system in which the exchange rate is set by the demand and supply of the currency in the foreign exchange market, with no official target for its level.',
      ru: 'Система, в которой обменный курс задаётся спросом и предложением валюты на валютном рынке без официальной цели для его уровня.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'If demand for US dollars rises, the price of one dollar may move from AED 3.6725 to AED 3.80 with no official announcement.',
      ru: 'Если спрос на доллары США растёт, цена одного доллара может вырасти с AED 3,6725 до AED 3,80 без официального объявления.',
    },
    pitfall: {
      en: 'Most floats are managed: central banks sometimes buy or sell currency, so a float is rarely completely free.',
      ru: 'Большинство плавающих курсов управляемы: центральные банки иногда покупают или продают валюту, поэтому курс редко бывает полностью свободным.',
    },
    sim: 'econ.fx-market',
  },
  {
    id: 'fixed-exchange-rate',
    term: { en: 'fixed exchange rate', ru: 'фиксированный обменный курс (fixed exchange rate)' },
    def: {
      en: 'A system in which the government or central bank sets the exchange rate against another currency, or a basket of currencies, and keeps it there by buying or selling currency.',
      ru: 'Система, в которой правительство или центральный банк задаёт курс к другой валюте или к корзине валют и поддерживает его, покупая или продавая валюту.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'The Central Bank of the UAE keeps the official rate at AED 3.6725 per USD, so the rate stays at that level unless the bank changes the peg.',
      ru: 'Центральный банк ОАЭ поддерживает официальный курс на уровне AED 3,6725 за USD, поэтому курс остаётся на этом уровне, пока банк не изменит привязку.',
    },
    pitfall: {
      en: 'A fixed rate changes only by an official decision (devaluation or revaluation); a floating rate moves with the market.',
      ru: 'Фиксированный курс меняется только официальным решением (девальвация или ревальвация); плавающий курс движется вместе с рынком.',
    },
  },
  {
    id: 'managed-exchange-rate',
    term: { en: 'managed exchange rate', ru: 'управляемый плавающий курс (managed exchange rate, managed float)' },
    def: {
      en: 'A floating rate that is mainly set by the market, but where the central bank buys or sells currency from time to time to influence its value.',
      ru: 'Плавающий курс, который в основном задаёт рынок, но центральный банк время от времени покупает или продаёт валюту, чтобы влиять на её стоимость.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'If a currency falls 5% in a month, the central bank may sell USD 500 million of its reserves to slow the fall, then let the market decide again.',
      ru: 'Если валюта дешевеет на 5% за месяц, центральный банк может продать резервы на USD 500 млн, чтобы замедлить падение, а затем снова оставить курс рынку.',
    },
    pitfall: {
      en: 'A managed float is not a fixed rate: the rate keeps moving, and the central bank is not obliged to hold it at any level.',
      ru: 'Управляемый плавающий курс — не фиксированный: курс продолжает меняться, и центральный банк не обязан удерживать его на каком-либо уровне.',
    },
  },
  {
    id: 'currency-speculation',
    term: { en: 'currency speculation', ru: 'валютная спекуляция (currency speculation)' },
    def: {
      en: 'Buying or selling a currency to make a profit from an expected change in its exchange rate. Speculative flows can move the rate sharply in the short run.',
      ru: 'Покупка или продажа валюты ради прибыли на ожидаемом изменении её обменного курса. Спекулятивные потоки могут резко сдвинуть курс в краткосрочном периоде.',
    },
    syllabus: '4.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' },
    example: {
      en: 'A trader expects the dirham to depreciate, so she buys USD 1 million at 3.6725 AED per USD and sells it later at 3.80, making about AED 127,500 before costs.',
      ru: 'Трейдер ожидает удешевления дирхама, поэтому покупает USD 1 млн по курсу 3,6725 AED за USD и продаёт их позже по 3,80, получая около AED 127 500 прибыли до издержек.',
    },
    pitfall: {
      en: 'Speculation can cause short-run swings, but on its own it does not explain a long-run trend in the exchange rate.',
      ru: 'Спекуляции вызывают краткосрочные колебания, но сами по себе не объясняют долгосрочный тренд обменного курса.',
    },
  },
];
