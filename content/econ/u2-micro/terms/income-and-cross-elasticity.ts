import type { SourceRef, Term } from '../../../../src/contract/types';

// Sources: the textbook (chapter and page) where it defines the term; otherwise the subject guide (section 2.5).
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
// normal-good, inferior-good, substitute-goods and complementary-goods are defined in terms/demand.ts (taught first).
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.5' };

export const terms: Term[] = [
  {
    id: 'income-elasticity-of-demand',
    term: { en: 'income elasticity of demand', ru: 'доходная эластичность спроса (income elasticity of demand, YED)' },
    def: {
      en: 'How strongly quantity demanded reacts to a change in income, measured as the ratio of the % change in quantity demanded to the % change in income.',
      ru: 'Чувствительность величины спроса к изменению дохода: процентное изменение величины спроса, делённое на процентное изменение дохода.',
    },
    example: {
      en: 'Income rises 10% and the quantity of bus journeys falls 5%, so YED = -5 / 10 = -0.50.',
      ru: 'Доход вырос на 10%, количество поездок на автобусе упало на 5%, поэтому YED = -5 / 10 = -0,50.',
    },
    pitfall: {
      en: 'Use the percentage change in income, not the percentage change in the price of the good itself.',
      ru: 'Используйте процентное изменение дохода, а не процентное изменение цены самого товара.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3, p. 98' },
    sim: 'econ.yed',
  },
  {
    id: 'cross-price-elasticity-of-demand',
    term: { en: 'cross-price elasticity of demand', ru: 'перекрёстная эластичность спроса (cross-price elasticity of demand, XED)' },
    def: {
      en: 'The responsiveness of demand for good A to a change in the price of good B: the percentage change in quantity demanded of A divided by the percentage change in the price of B.',
      ru: 'Чувствительность спроса на товар A к изменению цены товара B: процентное изменение величины спроса на A, делённое на процентное изменение цены B.',
    },
    example: {
      en: 'A 10% rise in the price of cola raises the quantity of lemonade demanded by 4%, so XED = 4 / 10 = 0.40.',
      ru: 'Рост цены колы на 10% повышает величину спроса на лимонад на 4%, поэтому XED = 4 / 10 = 0,40.',
    },
    pitfall: {
      en: 'The denominator is always the price of the other good, not the price of the good whose demand is measured.',
      ru: 'В знаменателе всегда цена другого товара, а не цена того товара, спрос на который измеряется.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.xed',
  },
  {
    id: 'close-substitutes',
    term: { en: 'close substitutes', ru: 'близкие заменители (close substitutes)' },
    def: {
      en: 'Substitutes that consumers switch between easily, shown by a large positive XED; a larger XED means closer substitutes.',
      ru: 'Заменители, между которыми потребители легко переключаются; это видно по большой положительной XED: чем больше XED, тем ближе заменители.',
    },
    example: {
      en: 'Two brands of bottled water with an XED of 1.80: a 5% rise in the price of one brand raises the quantity demanded of the other by 9%.',
      ru: 'Две марки бутилированной воды с XED 1,80: рост цены одной марки на 5% повышает величину спроса на другую марку на 9%.',
    },
    pitfall: {
      en: 'A small XED, such as 0.05, means the goods are only weakly related, not that they are close substitutes.',
      ru: 'Малая XED, например 0,05, означает слабую связь товаров, а не близких заменителей.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.xed',
  },
  {
    id: 'close-complements',
    term: { en: 'close complements', ru: 'близкие товары-дополнители (close complements)' },
    def: {
      en: 'Complements that are used together so closely that a large negative XED shows a strong link; a larger negative XED means closer complements.',
      ru: 'Товары-дополнители, которые используют так тесно, что большая отрицательная XED показывает сильную связь: чем больше по модулю отрицательная XED, тем ближе дополнители.',
    },
    example: {
      en: 'Printers and ink cartridges with an XED of -1.60: a 5% rise in the price of ink cuts the quantity of printers demanded by 8%.',
      ru: 'Принтеры и картриджи с XED -1,60: рост цены чернил на 5% снижает величину спроса на принтеры на 8%.',
    },
    pitfall: {
      en: 'A small negative XED, such as -0.05, means the goods are only weakly linked, not close complements.',
      ru: 'Малая отрицательная XED, например -0,05, означает слабую связь товаров, а не близких дополнителей.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.xed',
  },
];
