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
      en: 'Saving is a withdrawal. Financing through banks or securities markets can support investment, but lending or trading existing shares is not itself the injection: investment expenditure on output is.',
      ru: 'Сбережения — изъятие. Банки и рынок ценных бумаг могут финансировать инвестиции, но выдача кредита или торговля существующими акциями сами по себе не являются инъекцией: нужны инвестиционные расходы на выпуск.',
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
      en: 'Spending added to the basic household-consumption flow: investment, government purchases and exports. Investment is expenditure on capital/output, often by firms; it is not simply a bank loan.',
      ru: 'Расходы, дополняющие базовый поток потребительских расходов домохозяйств: инвестиции, государственные закупки и экспорт. Инвестиции — расходы на капитал или выпуск, часто со стороны фирм, а не просто банковский кредит.',
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
      ru: 'Точность реального ВВП зависит, в частности, от качества индекса цен, используемого для пересчёта.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.3, p. 257' },
  },
  {
    id: 'gdp-deflator',
    term: { en: 'GDP deflator', ru: 'дефлятор ВВП (GDP deflator)' },
    def: {
      en: 'A price index for the domestic final output included in GDP: nominal GDP divided by real GDP, times 100, with the base year equal to 100.',
      ru: 'Индекс цен конечного выпуска, включаемого в ВВП: номинальный ВВП, делённый на реальный ВВП, умноженный на 100; в базовом году он равен 100.',
    },
    example: {
      en: 'If nominal GDP is AED 1260 bn and real GDP is AED 1200 bn, the deflator is 105.',
      ru: 'Если номинальный ВВП равен 1260 млрд AED, а реальный 1200 млрд AED, дефлятор равен 105.',
    },
    pitfall: {
      en: 'The GDP deflator covers domestic final output included in GDP, unlike the consumer price index (CPI), which covers a basket bought by households.',
      ru: 'Дефлятор ВВП охватывает конечный выпуск, включаемый в ВВП, в отличие от индекса потребительских цен (consumer price index, CPI), который охватывает набор товаров и услуг, покупаемых домохозяйствами.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.3, p. 258' },
  },
  {
    id: 'income-approach',
    term: { en: 'income approach', ru: 'доходный метод (income approach)' },
    def: {
      en: 'Measures domestic output from the incomes generated in production. A simple sum of net factor incomes is not yet market-price GDP: gross/net and tax/subsidy adjustments must be consistent. In national accounts the gross income components include employee compensation, gross operating/mixed income and net production/import taxes.',
      ru: 'Измеряет внутренний выпуск через доходы, возникающие в производстве. Простая сумма чистых факторных доходов ещё не равна ВВП в рыночных ценах: нужно согласовать валовую и чистую оценку, налоги и субсидии. В СНС валовые доходные компоненты включают оплату труда, валовую прибыль и смешанные доходы, чистые налоги на производство и импорт.',
    },
    example: {
      en: 'Illustrative domestic accounts: employee compensation 500, gross operating/mixed income 400 and net production/import taxes 100 (AED bn) give GDP of 1000. Gross income already includes depreciation; do not add it a second time.',
      ru: 'Учебные внутренние счета: оплата труда 500, валовая прибыль и смешанные доходы 400, чистые налоги на производство и импорт 100 млрд AED дают ВВП 1000 млрд AED. Валовые доходы уже включают амортизацию; повторно прибавлять её нельзя.',
    },
    pitfall: {
      en: 'Transfer payments such as pensions are not earned by factors of production, so they are not added.',
      ru: 'Трансферты, например пенсии, не получены факторами производства, поэтому их не прибавляют.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'web', title: 'United Nations et al., System of National Accounts 2008', url: 'https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf', locator: 'Printed pp.332–333, §16.48: gross income components and net production/import taxes' },
  },
  {
    id: 'expenditure-approach',
    term: { en: 'expenditure approach', ru: 'расходный метод (expenditure approach)' },
    def: {
      en: 'Measures GDP as consumption plus investment plus government purchases plus exports minus imports over a period. Subtracting imports removes foreign production already included in spending; exports are domestic production sold abroad.',
      ru: 'Измеряет ВВП как сумму потребления, инвестиций, государственных закупок и экспорта за вычетом импорта за период. Вычет импорта исключает зарубежный выпуск, уже учтённый в расходах; экспорт — отечественный выпуск, проданный за рубеж.',
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
      en: 'Starts with value added: output minus intermediate consumption. To obtain GDP at market prices from value added at basic prices, add net taxes on products.',
      ru: 'Исходит из добавленной стоимости: выпуск минус промежуточное потребление. Чтобы из добавленной стоимости в основных ценах получить ВВП в рыночных ценах, прибавляют чистые налоги на продукты.',
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
    src: { kind: 'web', title: 'United Nations et al., System of National Accounts 2008', url: 'https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf', locator: 'Printed pp.332–333, §§16.47–16.50: value added, basic prices and net product taxes' },
  },
];
