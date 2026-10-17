import type { Term } from '../../../../src/contract/types';

// Definitions are in our own words. Terms the textbook defines (Tragakes, Economics for the IB Diploma:
// Coursebook) carry a textbook locator: chapter, section and printed page. Terms the book does not define
// keep the IB DP Economics subject guide (2020) as their source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'consumer-price-index',
    term: { en: 'consumer price index', ru: 'индекс потребительских цен (consumer price index, CPI)' },
    def: {
      en: 'A weighted index of the prices of a fixed basket of goods and services bought by households, compared with a base year that equals 100.',
      ru: 'Взвешенный индекс цен фиксированного набора товаров и услуг, которые покупают домохозяйства, по отношению к базовому году, в котором индекс равен 100.',
    },
    example: {
      en: 'A basket costs 800 AED in the base year and 880 AED later, so CPI = 880 / 800 x 100 = 110.',
      ru: 'Набор стоит 800 AED в базовом году и 880 AED позже, поэтому ИПЦ = 880 / 800 x 100 = 110.',
    },
    pitfall: {
      en: 'The CPI is an index, not a price: it has no currency unit, and the base year always equals 100.',
      ru: 'ИПЦ — это индекс, а не цена: у него нет валютной единицы, а базовый год всегда равен 100.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 309' },
  },
  {
    id: 'inflation',
    term: { en: 'inflation', ru: 'инфляция (inflation)' },
    def: {
      en: 'A sustained rise in the general price level, measured as the percentage change in the consumer price index over a year.',
      ru: 'Устойчивый рост общего уровня цен, измеряемый как процентное изменение индекса потребительских цен за год.',
    },
    example: {
      en: 'If the CPI rises from 110.0 to 113.3, inflation is 3.0% for that year.',
      ru: 'Если ИПЦ вырос с 110,0 до 113,3, инфляция за этот год составляет 3,0%.',
    },
    pitfall: {
      en: 'Inflation is a rise in prices, not a high price level: prices can be high and stable, with zero inflation.',
      ru: 'Инфляция — это рост цен, а не высокий уровень цен: цены могут быть высокими и стабильными, при нулевой инфляции.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 309' },
  },
  {
    id: 'demand-pull-inflation',
    term: { en: 'demand-pull inflation', ru: 'инфляция спроса (demand-pull inflation)' },
    def: {
      en: 'Inflation caused by aggregate demand rising faster than the economy can supply, so firms raise prices as demand exceeds output.',
      ru: 'Инфляция, вызванная ростом совокупного спроса быстрее возможностей экономики производить: фирмы повышают цены, когда спрос превышает выпуск.',
    },
    example: {
      en: 'In an AD/AS illustration with upward-sloping SRAS, higher consumption shifts AD right: the equilibrium price level and real output rise. The inflation rate cannot be calculated from the consumption change alone.',
      ru: 'В учебной модели AD/AS при восходящей SRAS рост потребления сдвигает AD вправо: равновесные уровень цен и реальный выпуск растут. По одному изменению потребления рассчитать темп инфляции нельзя.',
    },
    pitfall: {
      en: 'Demand-pull inflation starts on the demand side: aggregate demand shifts right, not short-run supply left.',
      ru: 'Инфляция спроса начинается со стороны спроса: совокупный спрос сдвигается вправо, а не краткосрочное предложение влево.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 314' },
  },
  {
    id: 'cost-push-inflation',
    term: { en: 'cost-push inflation', ru: 'инфляция издержек (cost-push inflation)' },
    def: {
      en: 'Inflation caused by rising costs of production, such as wages, energy or taxes, which shifts short-run aggregate supply to the left.',
      ru: 'Инфляция, вызванная ростом издержек производства, например зарплат, энергии или налогов, из-за которого краткосрочное совокупное предложение сдвигается влево.',
    },
    example: {
      en: 'In an AD/AS illustration with unchanged AD, higher energy costs shift SRAS left: the equilibrium price level rises and real output falls. A 20% energy-cost increase does not imply a 20% rise in all prices.',
      ru: 'В учебной модели AD/AS при неизменном AD рост затрат на энергию сдвигает SRAS влево: равновесный уровень цен растёт, а реальный выпуск падает. Подорожание энергии на 20% не означает роста всех цен на 20%.',
    },
    pitfall: {
      en: 'A rise in costs does not always mean inflation: if firms absorb it in lower profits, prices can stay stable.',
      ru: 'Рост издержек не всегда означает инфляцию: если фирмы поглощают его за счёт прибыли, цены могут остаться стабильными.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 315' },
  },
  {
    id: 'unemployment',
    term: { en: 'unemployment', ru: 'безработица (unemployment)' },
    def: {
      en: 'People within the survey’s age coverage who are not employed, are available to start work and are actively seeking it in the specified reference periods.',
      ru: 'Люди обследуемого возраста, которые не имеют работы, ищут её и готовы приступить к ней в установленные периоды наблюдения.',
    },
    example: {
      en: 'Of the 2000 thousand people in the labour force, 120 thousand are unemployed, so the rate is 6.0%.',
      ru: 'Из 2000 тыс. человек в рабочей силе 120 тыс. безработны, поэтому уровень безработицы составляет 6,0%.',
    },
    pitfall: {
      en: 'Student or pensioner status does not exclude a person: those employed count as employed, and those without employment who seek and are available can count as unemployed. Those neither employed nor meeting the unemployment criteria are outside the labour force.',
      ru: 'Статус студента или пенсионера не исключает человека: работающие относятся к занятым, а не имеющие работы, ищущие её и готовые приступить могут относиться к безработным. Вне рабочей силы — те, кто не занят и не выполняет критерии безработного.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'web', title: 'ILO — Labour force', url: 'https://www.ilo.org/resource/labour-force', locator: 'Activity/status priority and strict unemployment definition in specified reference periods' },
  },
  {
    id: 'frictional-unemployment',
    term: { en: 'frictional unemployment', ru: 'фрикционная безработица (frictional unemployment)' },
    def: {
      en: 'Short-term unemployment from workers moving between jobs or entering the labour market while they search for suitable work.',
      ru: 'Краткосрочная безработица, которая возникает, когда работники переходят между работами или впервые выходят на рынок труда и ищут подходящую работу.',
    },
    example: {
      en: 'A graduate without employment is available to start and actively searches for her first job for 2 months; she is frictionally unemployed during that search.',
      ru: 'Выпускница без работы готова приступить к ней и 2 месяца активно ищет первое место; в этот период поиска она относится к фрикционно безработным.',
    },
    pitfall: {
      en: 'Frictional unemployment is normal and unavoidable; it does not by itself signal a recession.',
      ru: 'Фрикционная безработица нормальна и неизбежна; сама по себе она не означает рецессию.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 303' },
  },
  {
    id: 'structural-unemployment',
    term: { en: 'structural unemployment', ru: 'структурная безработица (structural unemployment)' },
    def: {
      en: 'Unemployment caused by a mismatch between the skills or location of workers and the jobs available, or by labour market rigidities; often follows an industry decline.',
      ru: 'Безработица, вызванная несоответствием навыков или места работников имеющимся вакансиям либо жёсткостью рынка труда; часто возникает после спада отрасли.',
    },
    example: {
      en: 'A mine closure removes 500 jobs, and the miners lack the skills for the new technology jobs in the region.',
      ru: 'Закрытие шахты убирает 500 рабочих мест, а у шахтёров нет навыков для новых технологичных вакансий в регионе.',
    },
    pitfall: {
      en: 'Structural unemployment can persist even at full employment; cutting interest rates does not fix a skills mismatch.',
      ru: 'Структурная безработица может сохраняться даже при полной занятости; снижение процентных ставок не устраняет несоответствие навыков.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 301' },
  },
  {
    id: 'cyclical-unemployment',
    term: { en: 'cyclical unemployment', ru: 'циклическая безработица (cyclical unemployment)' },
    def: {
      en: 'Additional unemployment above the natural rate, caused by falling aggregate demand in recession, when the output gap is negative.',
      ru: 'Дополнительная безработица сверх естественного уровня, вызванная падением совокупного спроса в рецессии, когда разрыв выпуска отрицателен.',
    },
    example: {
      en: 'In a recession real GDP is 3% below potential output, so firms cut jobs and unemployment rises.',
      ru: 'В рецессию реальный ВВП на 3% ниже потенциального выпуска, поэтому фирмы сокращают рабочие места, а безработица растёт.',
    },
    pitfall: {
      en: 'Demand-side policy targets cyclical unemployment; structural unemployment needs supply-side policies.',
      ru: 'Политика спроса направлена на циклическую безработицу; структурная безработица требует политики предложения.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 10, p. 304' },
  },
  {
    id: 'phillips-curve',
    term: { en: 'Phillips curve', ru: 'кривая Филлипса (Phillips curve)' },
    def: {
      en: 'A model of inflation and unemployment: with expectations and supply conditions given, the short-run curve slopes down; with expectations fully adjusted, the long-run curve is vertical at a given natural rate.',
      ru: 'Модель связи инфляции и безработицы: при заданных ожиданиях и условиях предложения краткосрочная кривая убывает; после полного приспособления ожиданий долгосрочная кривая вертикальна на заданном естественном уровне.',
    },
    example: {
      en: 'Illustrative model with expected inflation 4% and natural unemployment 5%: inflation = 4 + (5 − unemployment). At unemployment 4%, inflation is 5%; at unemployment 3%, it is 6%. This is not country data.',
      ru: 'Учебная модель: ожидаемая инфляция 4%, естественный уровень безработицы 5%; инфляция = 4 + (5 − безработица). При безработице 4% инфляция равна 5%, а при безработице 3% — 6%. Это не данные конкретной страны.',
    },
    pitfall: {
      en: 'The Phillips curve is not a fixed menu: expected inflation shifts the short-run curve, and the long run offers no trade-off.',
      ru: 'Кривая Филлипса — не фиксированное меню: ожидаемая инфляция сдвигает краткосрочную кривую, а в долгосрочном периоде компромисса нет.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.phillips-sr',
    src: { kind: 'textbook', title: book, locator: 'ch. 10, pp. 325–327' },
  },
  {
    id: 'natural-rate-of-unemployment',
    term: { en: 'natural rate of unemployment', ru: 'естественный уровень безработицы (natural rate of unemployment)' },
    def: {
      en: 'The unemployment rate that exists when the output of the economy is at its potential level; it includes structural, frictional and seasonal unemployment.',
      ru: 'Уровень безработицы, который существует, когда выпуск экономики находится на потенциальном уровне; включает структурную, фрикционную и сезонную безработицу.',
    },
    example: {
      en: 'If frictional unemployment is 2%, structural unemployment is 2.5% and seasonal unemployment is 0.5%, the natural rate is 5%.',
      ru: 'Если фрикционная безработица составляет 2%, структурная — 2,5%, а сезонная — 0,5%, естественный уровень безработицы равен 5%.',
    },
    pitfall: {
      en: 'The natural rate is not zero: some unemployment is always present, even when the economy is at full employment.',
      ru: 'Естественный уровень не равен нулю: некоторая безработица есть всегда, даже при полной занятости.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.phillips-lr',
    src: { kind: 'textbook', title: book, locator: 'ch. 10.1, p. 304' },
  },
];
