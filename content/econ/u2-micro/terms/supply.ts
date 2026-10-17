import type { Term } from '../../../../src/contract/types';

// Supply (IB DP Economics section 2.2). Definitions are in our own words. Sources: the textbook (chapter 2.3, page per term).
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'supply',
    term: { en: 'supply', ru: 'предложение (supply)' },
    def: {
      en: 'The quantity of a product or service that producers are prepared and able to sell at each price over a given period of time.',
      ru: 'Количество товара или услуги, которое производители готовы и могут продать по каждой цене за определённый период времени.',
    },
    example: {
      en: 'At AED 6 per loaf the bakeries in a town are willing to sell 140 loaves a day; at AED 4 per loaf they sell 100 loaves a day.',
      ru: 'При цене 6 AED за буханку пекарни города готовы продать 140 буханок в день, а при цене 4 AED — 100 буханок в день.',
    },
    pitfall: {
      en: 'Supply is the whole schedule across prices, not the quantity offered at one price.',
      ru: 'Предложение — это вся шкала по всем ценам, а не количество, предложенное по одной цене.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 49' },
  },
  {
    id: 'law-of-supply',
    term: { en: 'law of supply', ru: 'закон предложения (law of supply)' },
    def: {
      en: 'Ceteris paribus, over a given time period, price and quantity supplied are positively related: a rise in price increases quantity supplied and a fall reduces it.',
      ru: 'При прочих равных (ceteris paribus) за определённый период времени цена и величина предложения связаны прямой зависимостью: рост цены увеличивает величину предложения, а падение её уменьшает.',
    },
    example: {
      en: 'When the price of rice rises from AED 3 to AED 4 per kilogram, farmers supply 800 tonnes a year instead of 600 tonnes.',
      ru: 'Когда цена риса растёт с 3 до 4 AED за килограмм, фермеры поставляют 800 тонн в год вместо 600 тонн.',
    },
    pitfall: {
      en: 'A rise in price causes a movement along the supply curve; it does not shift the curve.',
      ru: 'Рост цены вызывает движение вдоль кривой предложения, но не сдвигает её.',
    },
    sim: 'econ.supply-shift',
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 50' },
  },
  {
    id: 'market-supply',
    term: { en: 'market supply', ru: 'рыночное предложение (market supply)' },
    def: {
      en: 'The total quantity that all firms in a market supply at each price; on a graph it is the horizontal sum of the individual supply curves.',
      ru: 'Сумма величин предложения всех фирм на рынке при каждой цене; на графике это горизонтальная сумма индивидуальных кривых предложения.',
    },
    example: {
      en: 'Ten identical bakeries each supply 14 loaves at AED 6, so market supply at AED 6 is 140 loaves.',
      ru: 'Десять одинаковых пекарен поставляют по 14 буханок при цене 6 AED, поэтому рыночное предложение при цене 6 AED составляет 140 буханок.',
    },
    pitfall: {
      en: 'Market supply adds quantities across firms at one price, not prices across firms.',
      ru: 'Рыночное предложение складывает величины по фирмам при одной цене, а не цены по фирмам.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 51' },
  },
  {
    id: 'supply-curve',
    term: { en: 'supply curve', ru: 'кривая предложения (supply curve)' },
    def: {
      en: 'A graph showing how quantity supplied varies with price: price is measured up the vertical axis, quantity across the horizontal axis; the curve usually slopes upwards.',
      ru: 'График зависимости величины предложения от цены: цена на вертикальной оси, количество на горизонтальной; обычно кривая идёт вверх.',
    },
    example: {
      en: 'The supply curve for loaves passes through the points (AED 4, 100 loaves) and (AED 6, 140 loaves), so it slopes upwards.',
      ru: 'Кривая предложения буханок проходит через точки (4 AED, 100 буханок) и (6 AED, 140 буханок), поэтому она идёт вверх.',
    },
    pitfall: {
      en: 'Price is on the vertical axis in IB diagrams; do not swap the axes when you read or draw a supply curve.',
      ru: 'На диаграммах IB цена откладывается по вертикальной оси; не меняйте оси при чтении или построении кривой предложения.',
    },
    sim: 'econ.supply-shift',
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 50' },
  },
  {
    id: 'cost-of-production',
    term: { en: 'cost of production', ru: 'издержки производства (cost of production)' },
    def: {
      en: 'The total expense of the inputs (factors of production) used to make a good, namely land, labour, capital and entrepreneurship; a rise in the costs of additional output reduces supply, other things equal. A cost increase that does not change marginal production incentives need not shift short-run supply.',
      ru: 'Совокупные расходы на факторы производства (factors of production): землю, труд, капитал и предпринимательскую способность; рост затрат на дополнительный выпуск уменьшает предложение при прочих равных. Рост затрат, не меняющий предельных стимулов производства, не обязан сдвигать краткосрочное предложение.',
    },
    example: {
      en: 'When the price of flour rises from AED 2 to AED 3 per kilogram, the cost of making a loaf rises, so bakeries supply fewer loaves at each price.',
      ru: 'Когда цена муки растёт с 2 до 3 AED за килограмм, издержки выпечки буханки растут, и пекарни предлагают меньше буханок при каждой цене.',
    },
    pitfall: {
      en: 'A rise in the price of the good itself is not a cost of production; costs are the prices of the inputs.',
      ru: 'Рост цены самого товара не является издержкой производства: издержки — это цены ресурсов.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 52' },
  },
  {
    id: 'substitutes-in-production',
    term: { en: 'substitutes in production', ru: 'товары-субституты в производстве (substitutes in production)' },
    def: {
      en: 'Two goods that use the same resources, so a rise in the price of one makes producers switch production away from the other and reduces its supply.',
      ru: 'Два товара, использующие одни и те же ресурсы; рост цены одного заставляет производителей переключаться с другого, и его предложение уменьшается.',
    },
    example: {
      en: 'When the price of barley rises from AED 1.50 to AED 2.00 per kilogram, farmers switch land from wheat to barley, so the supply of wheat falls.',
      ru: 'Когда цена ячменя растёт с 1,50 до 2,00 AED за килограмм, фермеры переводят землю с пшеницы на ячмень, и предложение пшеницы падает.',
    },
    pitfall: {
      en: 'Substitution in production concerns competing uses of inputs; substitution in consumption concerns buyers switching goods. The same pair can have both relationships; specify the mechanism in the question.',
      ru: 'Замещение в производстве касается конкурирующих способов использовать ресурсы, а замещение в потреблении — переключения покупателей между товарами. Одна пара может иметь обе связи; укажи механизм из задания.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 52' },
  },
  {
    id: 'joint-supply',
    term: { en: 'joint supply', ru: 'совместное предложение (joint supply)' },
    def: {
      en: 'Two or more goods produced together from the same process, so a rise in the output of one increases the supply of the other, for example beef and leather.',
      ru: 'Два или более товаров, произведённых вместе в одном процессе, поэтому рост выпуска одного увеличивает предложение другого, например говядины и кожи.',
    },
    example: {
      en: 'When the price of beef rises from AED 30 to AED 36 per kilogram, cattle farmers raise beef output, so more leather is supplied at every price.',
      ru: 'Когда цена говядины растёт с 30 до 36 AED за килограмм, фермеры наращивают выпуск говядины, и кожи поставляется больше при каждой цене.',
    },
    pitfall: {
      en: 'With joint supply the link runs through the main output: a fall in beef output also reduces the supply of leather, even if the leather price is unchanged.',
      ru: 'При совместном предложении связь идёт через выпуск основного товара: падение выпуска говядины уменьшает и предложение кожи, даже если цена кожи не меняется.',
    },
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 52' },
  },
  {
    id: 'movement-along-supply-curve',
    term: { en: 'movement along the supply curve', ru: 'движение вдоль кривой предложения (movement along the supply curve)' },
    def: {
      en: "A change in quantity supplied that results only from the good's own price; producers move to another point on the same supply curve.",
      ru: 'Изменение величины предложения, вызванное только изменением цены самого товара: производители переходят в другую точку на той же кривой предложения.',
    },
    example: {
      en: 'If the price of loaves rises from AED 4 to AED 6, bakeries supply 140 loaves instead of 100, all on the same supply curve.',
      ru: 'Если цена буханки растёт с 4 до 6 AED, пекарни поставляют 140 буханок вместо 100, всё на той же кривой предложения.',
    },
    pitfall: {
      en: 'A change in the price of the good is never a change in supply; it is a change in quantity supplied.',
      ru: 'Изменение цены самого товара — это никогда не изменение предложения, а изменение величины предложения.',
    },
    sim: 'econ.supply-shift',
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 52' },
  },
  {
    id: 'shift-of-supply-curve',
    term: { en: 'shift of the supply curve (change in supply)', ru: 'сдвиг кривой предложения (shift of the supply curve)' },
    def: {
      en: 'A change in supply caused by a non-price determinant, such as costs, technology, taxes, subsidies or the number of sellers; the whole curve moves.',
      ru: 'Изменение предложения под влиянием неценового фактора (издержки, технология, налоги, субсидии, число продавцов): вся кривая предложения смещается.',
    },
    example: {
      en: 'A new oven that lowers costs means bakeries supply 20 more loaves a day at AED 6, so the supply curve shifts right.',
      ru: 'Новая печь, которая снижает издержки, означает, что пекарни поставляют на 20 буханок в день больше при цене 6 AED, поэтому кривая предложения сдвигается вправо.',
    },
    pitfall: {
      en: 'A tax on producers shifts supply left and a subsidy shifts it right; the direction comes from the change in costs, not from the change in the price of the good.',
      ru: 'Налог на производителей сдвигает предложение влево, а субсидия — вправо; направление определяется изменением издержек, а не ценой самого товара.',
    },
    sim: 'econ.supply-shift',
    syllabus: '2.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.3, p. 52' },
  },
];
