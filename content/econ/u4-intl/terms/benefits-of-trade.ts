import type { Term } from '../../../../src/contract/types';

const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'absolute-advantage',
    term: { en: 'absolute advantage', ru: 'абсолютное преимущество (absolute advantage)' },
    def: {
      en: 'A producer can make more of a good than another producer from the same resources, or the same output with fewer resources.',
      ru: 'Производитель может выпустить больше товара, чем другой производитель, из тех же ресурсов, или тот же выпуск — с меньшими ресурсами.',
    },
    example: {
      en: 'Country A makes 90 units of wheat from the resources that let country B make only 40, so A has an absolute advantage in wheat.',
      ru: 'Страна A выпускает 90 единиц пшеницы из тех ресурсов, из которых страна B выпускает только 40, поэтому A имеет абсолютное преимущество в пшенице.',
    },
    pitfall: {
      en: 'Absolute advantage does not decide trade: a country can have an absolute advantage in both goods and still gain from trade through comparative advantage.',
      ru: 'Абсолютное преимущество не определяет торговлю: страна может иметь абсолютное преимущество в обоих товарах и всё равно выигрывать от торговли благодаря сравнительному преимуществу.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.2, p. 438' },
  },
  {
    id: 'comparative-advantage',
    term: { en: 'comparative advantage', ru: 'сравнительное преимущество (comparative advantage)' },
    def: {
      en: 'A producer can make a good at a lower opportunity cost than another producer, so it should specialise in that good and trade for the others.',
      ru: 'Производитель может выпускать товар с меньшими альтернативными издержками, чем другой производитель, поэтому ему выгодно специализироваться на нём и обменивать его на остальные товары.',
    },
    example: {
      en: 'Country B gives up 0.5 units of wheat for each unit of cloth, while A gives up 1.5, so B has the comparative advantage in cloth.',
      ru: 'Страна B отдаёт 0,5 единицы пшеницы за единицу ткани, а A отдаёт 1,5, поэтому B имеет сравнительное преимущество в ткани.',
    },
    pitfall: {
      en: 'Comparative advantage is about opportunity cost, not output: the country with the absolute advantage can still have the higher opportunity cost.',
      ru: 'Сравнительное преимущество связано с альтернативными издержками, а не с выпуском: страна с абсолютным преимуществом может иметь более высокие альтернативные издержки.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.2, p. 439' },
  },
  {
    id: 'specialisation',
    term: { en: 'specialisation', ru: 'специализация (specialisation)' },
    def: {
      en: 'Focusing output on a few goods that a country can make efficiently (at low cost), namely those in which it has a comparative advantage, and trading to obtain the other goods.',
      ru: 'Концентрация производства на немногих товарах, которые страна может выпускать эффективно (с низкими издержками), в первую очередь тех, в которых у неё есть сравнительное преимущество, и обмен на остальные товары.',
    },
    example: {
      en: 'Country B moves all its resources into cloth and produces 80 units of cloth, instead of splitting them between wheat and cloth.',
      ru: 'Страна B переводит все ресурсы в производство ткани и выпускает 80 единиц ткани, а не делит ресурсы между пшеницей и тканью.',
    },
    pitfall: {
      en: 'Full specialisation is a simplification; in practice countries keep some production of goods they also import, for security or to limit dependence.',
      ru: 'Полная специализация — упрощение; на практике страны сохраняют производство некоторых импортируемых товаров, например для безопасности или чтобы ограничить зависимость.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.1, p. 434' },
  },
  {
    id: 'gains-from-trade',
    term: { en: 'gains from trade', ru: 'выгоды от торговли (gains from trade)' },
    def: {
      en: 'The benefits countries gain from international trade, such as lower prices and greater choice for consumers, and the increase in output and consumption that comes from specialising according to comparative advantage and trading, compared with no trade.',
      ru: 'Выгоды, которые страны получают от международной торговли, например более низкие цены и больший выбор для потребителей, а также прирост выпуска и потребления, который даёт специализация в соответствии со сравнительным преимуществом и торговля, по сравнению с отсутствием торговли.',
    },
    example: {
      en: 'Before trade the world makes 65 wheat and 70 cloth; after specialisation it makes 90 wheat and 80 cloth, a gain of 25 and 10 units.',
      ru: 'До торговли мир производит 65 единиц пшеницы и 70 единиц ткани; после специализации — 90 единиц пшеницы и 80 единиц ткани, то есть прирост на 25 и 10 единиц.',
    },
    pitfall: {
      en: 'The gains are a total for the economy; producers that compete with imports can lose, so the gains are not shared equally.',
      ru: 'Выгоды — это итог для экономики в целом; производители, конкурирующие с импортом, могут проиграть, поэтому выгоды распределяются неравномерно.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.1, p. 433' },
  },
  {
    id: 'free-trade',
    term: { en: 'free trade', ru: 'свободная торговля (free trade)' },
    def: {
      en: 'Trade between countries with no government intervention of any kind, such as tariffs, quotas or other barriers that restrict the flow of goods and services.',
      ru: 'Торговля между странами без государственного вмешательства любого рода, то есть без тарифов, квот и других барьеров, которые ограничивают движение товаров и услуг.',
    },
    example: {
      en: 'A country that removes a AED 100 tariff on each imported bicycle lets buyers pay less for the same bicycle.',
      ru: 'Страна, которая отменяет тариф 100 AED на каждый импортный велосипед, позволяет покупателям платить меньше за тот же велосипед.',
    },
    pitfall: {
      en: 'Free trade does not mean no rules: countries still apply safety standards, customs procedures and product labelling.',
      ru: 'Свободная торговля не означает отсутствия правил: страны по-прежнему применяют стандарты безопасности, таможенные процедуры и маркировку товаров.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.1, p. 433' },
  },
  {
    id: 'import-competing-industry',
    term: { en: 'import-competing industry', ru: 'отрасль, конкурирующая с импортом (import-competing industry)' },
    def: {
      en: 'A domestic industry that makes goods also supplied by imports, so it faces competition from foreign producers and may lose sales when trade opens.',
      ru: 'Отечественная отрасль, которая производит товары, также поставляемые по импорту; она сталкивается с конкуренцией зарубежных производителей и может потерять продажи при открытии торговли.',
    },
    example: {
      en: 'A domestic furniture maker that sells a chair for AED 800 loses sales when cheaper imports sell for AED 600.',
      ru: 'Отечественный производитель мебели, который продаёт стул за 800 AED, теряет продажи, когда более дешёвый импорт продаётся за 600 AED.',
    },
    pitfall: {
      en: 'Import-competing producers are the short-run losers from trade, while the gains are spread across many consumers.',
      ru: 'Производители, конкурирующие с импортом, — проигравшие в краткосрочном периоде, а выгоды распределяются между многими потребителями.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.1' },
  },
  {
    id: 'adjustment-costs',
    term: { en: 'adjustment costs', ru: 'издержки адаптации (adjustment costs)' },
    def: {
      en: 'The short-run costs borne by workers, firms and regions when resources move from declining industries to expanding ones, such as unemployment, retraining and lost output.',
      ru: 'Краткосрочные издержки, которые несут работники, фирмы и регионы, когда ресурсы переходят из сокращающихся отраслей в растущие: безработица, переобучение и потерянный выпуск.',
    },
    example: {
      en: 'After cheap imports arrive, a textile factory closes and 300 workers need retraining, with some out of work for a year.',
      ru: 'После появления дешёвого импорта текстильная фабрика закрывается, 300 работников нуждаются в переобучении, а часть из них год остаётся без работы.',
    },
    pitfall: {
      en: 'Adjustment costs are real even when the total gain is positive, and the workers who bear them are not always the ones who gain.',
      ru: 'Издержки адаптации реальны, даже когда общий итог положителен, и работники, которые их несут, не всегда те, кто выигрывает.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.1' },
  },
  {
    id: 'trade-dependence',
    term: { en: 'trade dependence', ru: 'зависимость от торговли (trade dependence)' },
    def: {
      en: 'A situation in which a country relies heavily on imports of key goods or on exports to a few markets, so foreign price or supply shocks strongly affect its economy.',
      ru: 'Ситуация, когда страна сильно зависит от импорта ключевых товаров или от экспорта на несколько рынков, поэтому внешние шоки цен или поставок сильно влияют на её экономику.',
    },
    example: {
      en: 'A country that imports 90% of its food is exposed when world food prices rise sharply.',
      ru: 'Страна, которая импортирует 90% своего продовольствия, уязвима, когда мировые цены на продукты резко растут.',
    },
    pitfall: {
      en: 'Dependence is a risk, not a reason to avoid trade; diversifying imports and export markets reduces it.',
      ru: 'Зависимость — это риск, а не причина избегать торговли; диверсификация импорта и экспортных рынков её снижает.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.1' },
  },
];
