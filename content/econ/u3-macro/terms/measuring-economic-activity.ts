import type { Term } from '../../../../src/contract/types';

// Definitions are in our own words. Terms the textbook defines (Tragakes, Economics for the IB Diploma:
// Coursebook) carry a textbook locator: chapter, section and printed page. Terms the book does not define
// keep the IB DP Economics subject guide (2020) as their source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'circular-flow-of-income',
    term: { en: 'circular flow of income', ru: 'круговой поток доходов (circular flow of income)' },
    def: {
      en: 'A model in which households supply factors of production to firms for income and spend that income on output, so money flows round the economy. Withdrawals and injections change the flow.',
      ru: 'Модель, в которой домохозяйства предоставляют фирмам факторы производства за доход и тратят его на выпуск, так что деньги циркулируют в экономике. Изъятия и инъекции меняют поток.',
    },
    example: {
      en: 'Households earn AED 1000 bn of income, spend AED 800 bn on domestic output and save AED 200 bn, which banks lend to firms.',
      ru: 'Домохозяйства получают 1000 млрд AED дохода, тратят 800 млрд AED на отечественный выпуск и сберегают 200 млрд AED, которые банки дают фирмам в кредит.',
    },
    pitfall: {
      en: 'Saving is a withdrawal, but it becomes an injection again when banks lend it to firms for investment.',
      ru: 'Сбережения — это изъятие, но они снова становятся инъекцией, когда банки выдают их фирмам на инвестиции.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 20' },
    sim: 'econ.circular-flow',
  },
  {
    id: 'injections',
    term: { en: 'injections', ru: 'инъекции (injections)' },
    def: {
      en: 'Additions of spending to the circular flow from outside households and firms: investment, government spending and exports.',
      ru: 'Добавления расходов в круговой поток извне домохозяйств и фирм: инвестиции, государственные расходы и экспорт.',
    },
    example: {
      en: 'The government spends AED 50 bn on new schools, which adds AED 50 bn of spending to the circular flow.',
      ru: 'Правительство тратит 50 млрд AED на новые школы, и это добавляет 50 млрд AED расходов в круговой поток.',
    },
    pitfall: {
      en: 'Government spending is an injection, but taxes are a withdrawal, even though both involve the government.',
      ru: 'Государственные расходы — это инъекция, а налоги — изъятие, хотя в обоих случаях участвует государство.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 21' },
    sim: 'econ.circular-flow',
  },
  {
    id: 'withdrawals',
    term: { en: 'withdrawals (leakages)', ru: 'изъятия (withdrawals, leakages)' },
    def: {
      en: 'Money that leaves the circular flow instead of being spent on domestic output: saving, taxes and imports.',
      ru: 'Деньги, которые выходят из кругового потока вместо траты на отечественный выпуск: сбережения, налоги и импорт.',
    },
    example: {
      en: 'Households save AED 200 bn, pay AED 300 bn in taxes and spend AED 150 bn on imports, so AED 650 bn leaves the flow.',
      ru: 'Домохозяйства сберегают 200 млрд AED, платят 300 млрд AED налогов и тратят 150 млрд AED на импорт, поэтому 650 млрд AED выходят из потока.',
    },
    pitfall: {
      en: 'Exports are injections and imports are withdrawals, so the effect of trade on the flow depends on exports minus imports.',
      ru: 'Экспорт — это инъекция, а импорт — изъятие, поэтому влияние торговли на поток зависит от экспорта минус импорта.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 20' },
    sim: 'econ.circular-flow',
  },
  {
    id: 'gdp',
    term: { en: 'gross domestic product (GDP)', ru: 'валовой внутренний продукт, ВВП (gross domestic product, GDP)' },
    def: {
      en: 'The total market value of goods and services in their final form, produced inside a nation over a period, usually one year.',
      ru: 'Совокупная рыночная стоимость товаров и услуг в их конечной форме, произведённых внутри страны за период, обычно за год.',
    },
    example: {
      en: 'Country Y produces AED 300 bn of final goods and services in a year, so its GDP is AED 300 bn.',
      ru: 'Страна Y производит конечные товары и услуги на 300 млрд AED за год, значит её ВВП равен 300 млрд AED.',
    },
    pitfall: {
      en: 'GDP counts only final goods: the flour in a loaf of bread is not added on top of the bread.',
      ru: 'ВВП учитывает только конечные товары: мука в буханке хлеба не прибавляется сверху к самому хлебу.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.2, p. 252' },
  },
  {
    id: 'nominal-gdp',
    term: { en: 'nominal GDP', ru: 'номинальный ВВП (nominal GDP)' },
    def: {
      en: 'GDP measured at current prices, so it changes with both the volume of output and the price level.',
      ru: 'ВВП, измеренный в текущих ценах, поэтому меняется и при изменении объёма выпуска, и при изменении уровня цен.',
    },
    example: {
      en: 'If output stays the same and prices rise by 5%, nominal GDP also rises by 5%.',
      ru: 'Если выпуск не меняется, а цены растут на 5%, номинальный ВВП тоже растёт на 5%.',
    },
    pitfall: {
      en: 'A rise in nominal GDP is not growth on its own; it may be pure inflation.',
      ru: 'Рост номинального ВВП сам по себе не означает роста экономики: это может быть чистая инфляция.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.3, p. 257' },
  },
  {
    id: 'real-gdp',
    term: { en: 'real GDP', ru: 'реальный ВВП (real GDP)' },
    def: {
      en: 'GDP measured at constant prices of a base year, so it changes only when the volume of output changes.',
      ru: 'ВВП, измеренный в ценах базового года, поэтому меняется только тогда, когда меняется объём выпуска.',
    },
    example: {
      en: 'Nominal GDP of AED 1260 bn with a deflator of 105 gives real GDP of AED 1200 bn.',
      ru: 'Номинальный ВВП 1260 млрд AED при дефляторе 105 дают реальный ВВП 1200 млрд AED.',
    },
    pitfall: {
      en: 'Real GDP is only as reliable as the price index used to remove inflation.',
      ru: 'Реальный ВВП так же надёжен, как индекс цен, который используют для удаления инфляции.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.3, p. 257' },
  },
  {
    id: 'gdp-deflator',
    term: { en: 'GDP deflator', ru: 'дефлятор ВВП (GDP deflator)' },
    def: {
      en: 'A price index of all domestic output: nominal GDP divided by real GDP, times 100, with the base year equal to 100.',
      ru: 'Индекс цен всего внутреннего выпуска: номинальный ВВП, делённый на реальный ВВП, умноженный на 100; в базовом году он равен 100.',
    },
    example: {
      en: 'If nominal GDP is AED 1260 bn and real GDP is AED 1200 bn, the deflator is 105.',
      ru: 'Если номинальный ВВП равен 1260 млрд AED, а реальный 1200 млрд AED, дефлятор равен 105.',
    },
    pitfall: {
      en: 'The GDP deflator covers all domestic output, unlike the consumer price index (CPI), which covers a basket bought by households.',
      ru: 'Дефлятор ВВП охватывает весь внутренний выпуск, в отличие от индекса потребительских цен (consumer price index, CPI), который охватывает набор товаров, покупаемых домохозяйствами.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.3, p. 258' },
  },
  {
    id: 'income-approach',
    term: { en: 'income approach', ru: 'доходный метод (income approach)' },
    def: {
      en: 'Measures GDP by adding up the incomes that production factors earn within a nation over a period: wages, rent, interest and profit.',
      ru: 'Измеряет ВВП суммой доходов, которые факторы производства получают внутри страны за период: зарплаты, ренты, процента и прибыли.',
    },
    example: {
      en: 'Wages of AED 500 bn, rent of AED 40 bn, interest of AED 60 bn and profit of AED 400 bn give GDP of AED 1000 bn.',
      ru: 'Зарплаты 500 млрд AED, рента 40 млрд AED, процент 60 млрд AED и прибыль 400 млрд AED дают ВВП 1000 млрд AED.',
    },
    pitfall: {
      en: 'Transfer payments such as pensions are not earned by factors of production, so they are not added.',
      ru: 'Трансферты, например пенсии, не получены факторами производства, поэтому их не прибавляют.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.2, p. 252' },
  },
  {
    id: 'expenditure-approach',
    term: { en: 'expenditure approach', ru: 'расходный метод (expenditure approach)' },
    def: {
      en: 'Measures GDP by adding consumption, investment, government spending and net exports on final goods and services bought within a nation over a period.',
      ru: 'Измеряет ВВП суммой потребления, инвестиций, государственных расходов и чистого экспорта на конечные товары и услуги, купленные внутри страны за период.',
    },
    example: {
      en: 'Consumption of AED 500 bn, investment of AED 100 bn, government spending of AED 200 bn, exports of AED 300 bn and imports of AED 250 bn give GDP of AED 850 bn.',
      ru: 'Потребление 500 млрд AED, инвестиции 100 млрд AED, государственные расходы 200 млрд AED, экспорт 300 млрд AED и импорт 250 млрд AED дают ВВП 850 млрд AED.',
    },
    pitfall: {
      en: 'Imports are subtracted because they are spending on foreign output, not on domestic output.',
      ru: 'Импорт вычитают, потому что это расходы на зарубежный, а не на отечественный выпуск.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.2, p. 251' },
  },
  {
    id: 'production-approach',
    term: { en: 'production approach', ru: 'производственный метод (production approach)' },
    def: {
      en: 'Measures GDP as the sum of value added in each sector: the value of output minus the cost of intermediate goods.',
      ru: 'Измеряет ВВП как сумму добавленной стоимости по секторам: стоимость выпуска минус затраты на промежуточные товары.',
    },
    example: {
      en: 'A bakery sells bread worth AED 10 million, buys flour worth AED 4 million and adds AED 6 million of value.',
      ru: 'Пекарня продаёт хлеб на 10 млн AED, покупает муку на 4 млн AED и добавляет 6 млн AED стоимости.',
    },
    pitfall: {
      en: 'Adding the value of the bread and the flour separately counts the flour twice.',
      ru: 'Если сложить стоимость хлеба и муки отдельно, мука будет посчитана дважды.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.2, p. 252' },
  },
];
