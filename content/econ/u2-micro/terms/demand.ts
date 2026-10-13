import type { Term } from '../../../../src/contract/types';

// Demand (IB DP Economics section 2.1). Definitions are in our own words; the source is the textbook, with a page locator for each term.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'demand',
    term: { en: 'demand', ru: 'спрос (demand)' },
    def: {
      en: 'The quantity of goods or services that buyers are willing and able to purchase at each price during a given time period, ceteris paribus.',
      ru: 'Количество товара или услуги, которое потребители готовы и могут купить по каждой цене за определённый период времени при прочих равных условиях (ceteris paribus).',
    },
    example: {
      en: 'At AED 6 per unit buyers want 120 units a week; at AED 4 per unit they want 160 units a week.',
      ru: 'При цене 6 AED за единицу покупатели хотят купить 120 единиц в неделю, а при цене 4 AED — 160 единиц в неделю.',
    },
    pitfall: {
      en: 'Demand is the whole schedule across prices, not the quantity bought at one price.',
      ru: 'Спрос — это вся шкала по всем ценам, а не количество, купленное по одной цене.',
    },
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 43' },
  },
  {
    id: 'law-of-demand',
    term: { en: 'law of demand', ru: 'закон спроса (law of demand)' },
    def: {
      en: 'Ceteris paribus and over a given period of time, price and quantity demanded are inversely related: a fall in price increases quantity demanded and a rise in price reduces it.',
      ru: 'При прочих равных (ceteris paribus) и за определённый период времени цена и величина спроса связаны обратной зависимостью: падение цены увеличивает величину спроса, а рост цены её уменьшает.',
    },
    example: {
      en: 'When the price of a cinema ticket falls from AED 40 to AED 30, quantity demanded rises from 500 to 600 tickets a week.',
      ru: 'Когда цена билета в кино падает с 40 до 30 AED, величина спроса растёт с 500 до 600 билетов в неделю.',
    },
    pitfall: {
      en: 'The law holds only for a change in price with other factors unchanged; a change in income can move the whole curve.',
      ru: 'Закон верен только при изменении цены и неизменных прочих факторах; изменение дохода может сдвинуть всю кривую.',
    },
    sim: 'econ.demand-shift',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 44' },
  },
  {
    id: 'market-demand',
    term: { en: 'market demand', ru: 'рыночный спрос (market demand)' },
    def: {
      en: 'The sum of the quantities that all buyers in a market demand at each price, in a given period of time, ceteris paribus; on a graph it is the horizontal sum of the individual demand curves.',
      ru: 'Сумма величин спроса всех покупателей на рынке при каждой цене за определённый период времени при прочих равных условиях (ceteris paribus); на графике это горизонтальная сумма индивидуальных кривых спроса.',
    },
    example: {
      en: 'At AED 6, consumer A buys 4 units and consumer B buys 2 units, so market demand at AED 6 is 6 units.',
      ru: 'При цене 6 AED покупатель A берёт 4 единицы, покупатель B — 2 единицы, поэтому рыночный спрос при цене 6 AED составляет 6 единиц.',
    },
    pitfall: {
      en: 'Market demand adds quantities across consumers at one price, not prices across consumers.',
      ru: 'Рыночный спрос складывает величины по покупателям при одной цене, а не цены по покупателям.',
    },
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 44' },
  },
  {
    id: 'demand-curve',
    term: { en: 'demand curve', ru: 'кривая спроса (demand curve)' },
    def: {
      en: 'A graph of quantity demanded against price: price runs up the Y (vertical) axis and quantity along the X (horizontal) axis; it slopes downwards.',
      ru: 'График зависимости величины спроса от цены: цена на вертикальной оси, количество на горизонтальной; кривая идёт вниз.',
    },
    example: {
      en: 'The demand curve for bottled water passes through the points (AED 2, 300 bottles) and (AED 3, 220 bottles).',
      ru: 'Кривая спроса на бутилированную воду проходит через точки (2 AED, 300 бутылок) и (3 AED, 220 бутылок).',
    },
    pitfall: {
      en: 'Price goes on the vertical axis and quantity on the horizontal axis; do not swap them when you draw or read a demand curve.',
      ru: 'Цена откладывается по вертикальной оси, количество — по горизонтальной; не меняйте их местами при построении или чтении кривой спроса.',
    },
    sim: 'econ.demand-shift',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 44' },
  },
  {
    id: 'normal-good',
    term: { en: 'normal good', ru: 'нормальное благо (normal good)' },
    def: {
      en: 'A good for which demand rises when consumer income rises, so its income elasticity of demand is positive.',
      ru: 'Благо, спрос на которое растёт при росте дохода потребителей, поэтому его доходная эластичность спроса (income elasticity of demand) положительна.',
    },
    example: {
      en: 'As household income rises from AED 8000 to AED 9000 a month, a family buys more fresh fish, so fresh fish is a normal good.',
      ru: 'Когда доход семьи растёт с 8000 до 9000 AED в месяц, семья покупает больше свежей рыбы, значит, свежая рыба — нормальное благо.',
    },
    pitfall: {
      en: 'A normal good is not the same as a necessity: luxury goods are normal goods too.',
      ru: 'Нормальное благо — это не то же самое, что предмет первой необходимости: роскошные товары тоже являются нормальными благами.',
    },
    sim: 'econ.yed',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 45' },
  },
  {
    id: 'inferior-good',
    term: { en: 'inferior good', ru: 'товар низшей категории (inferior good)' },
    def: {
      en: 'A good for which demand falls when consumer income rises, so its income elasticity of demand is negative.',
      ru: 'Товар, спрос на который падает при росте дохода потребителей, поэтому его доходная эластичность спроса (income elasticity of demand) отрицательна.',
    },
    example: {
      en: 'As income rises from AED 8000 to AED 9000 a month, a family buys 10 fewer packs of cheap noodles a month, so cheap noodles are an inferior good.',
      ru: 'Когда доход растёт с 8000 до 9000 AED в месяц, семья покупает на 10 упаковок дешёвой лапши в месяц меньше, значит, дешёвая лапша — товар низшей категории.',
    },
    pitfall: {
      en: 'Inferior does not mean poor quality; it only means demand falls as income rises.',
      ru: 'Низшая категория не означает плохое качество: спрос просто падает при росте дохода.',
    },
    sim: 'econ.yed',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 45' },
  },
  {
    id: 'substitute-goods',
    term: { en: 'substitute goods', ru: 'товары-заменители (substitute goods)' },
    def: {
      en: 'Two goods that satisfy similar needs, so a rise in the price of one increases the demand for the other.',
      ru: 'Два блага, которые удовлетворяют похожие потребности, поэтому рост цены одного увеличивает спрос на другое.',
    },
    example: {
      en: 'When the price of a pack of coffee rises from AED 12 to AED 15, demand for a pack of tea rises, so tea and coffee are substitutes.',
      ru: 'Когда цена упаковки кофе растёт с 12 до 15 AED, спрос на упаковку чая растёт, значит, чай и кофе — товары-заменители.',
    },
    pitfall: {
      en: 'A rise in the price of a substitute shifts demand to the right; it is not a movement along the demand curve of the good itself.',
      ru: 'Рост цены заменителя сдвигает спрос вправо; это не движение вдоль кривой спроса самого товара.',
    },
    sim: 'econ.xed',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 45' },
  },
  {
    id: 'complementary-goods',
    term: { en: 'complementary goods', ru: 'товары-дополнители (complementary goods)' },
    def: {
      en: 'Two goods that are used together, so a rise in the price of one reduces the demand for the other.',
      ru: 'Два блага, которые используются вместе, поэтому рост цены одного уменьшает спрос на другое.',
    },
    example: {
      en: 'When the price of petrol rises from AED 2.50 to AED 2.90 a litre, demand for large cars falls, so petrol and large cars are complements.',
      ru: 'Когда цена бензина растёт с 2,50 до 2,90 AED за литр, спрос на большие автомобили падает, значит, бензин и большие автомобили — товары-дополнители.',
    },
    pitfall: {
      en: 'A rise in the price of a complement reduces demand for the good (the curve shifts left); it does not increase it.',
      ru: 'Рост цены дополнителя уменьшает спрос на товар (кривая сдвигается влево), а не увеличивает его.',
    },
    sim: 'econ.xed',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 46' },
  },
  {
    id: 'movement-along-demand-curve',
    term: { en: 'movement along the demand curve', ru: 'движение вдоль кривой спроса (movement along the demand curve)' },
    def: {
      en: "A change in quantity demanded caused only by the good's own price; buyers move to another point on the same demand curve.",
      ru: 'Изменение величины спроса, вызванное только изменением цены самого товара: покупатели переходят в другую точку на той же кривой спроса.',
    },
    example: {
      en: 'If the price of a bus ride falls from AED 6 to AED 4, quantity demanded rises from 300 to 380 rides a day, all on the same demand curve.',
      ru: 'Если цена поездки на автобусе падает с 6 до 4 AED, величина спроса растёт с 300 до 380 поездок в день, всё на той же кривой спроса.',
    },
    pitfall: {
      en: 'A movement along the curve is never called a change in demand, even when quantity changes a lot.',
      ru: 'Движение вдоль кривой никогда не называют изменением спроса, даже если величина сильно меняется.',
    },
    sim: 'econ.demand-shift',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 46' },
  },
  {
    id: 'shift-of-demand-curve',
    term: { en: 'shift of the demand curve (change in demand)', ru: 'сдвиг кривой спроса (shift of the demand curve)' },
    def: {
      en: 'A change in demand caused by a non-price determinant, such as income, tastes or the price of a related good; the whole curve moves right or left.',
      ru: 'Изменение спроса под влиянием неценового фактора (доход, вкусы, цена связанного товара): вся кривая спроса смещается вправо или влево.',
    },
    example: {
      en: 'If household income rises and buyers take 60 more units at AED 5, the demand curve shifts right by 60 units at that price.',
      ru: 'Если доход семей растёт и при цене 5 AED покупают на 60 единиц больше, кривая спроса сдвигается вправо на 60 единиц при этой цене.',
    },
    pitfall: {
      en: 'A change in the price of the good itself never shifts the curve; it causes a movement along it.',
      ru: 'Изменение цены самого товара никогда не сдвигает кривую; оно вызывает движение вдоль неё.',
    },
    sim: 'econ.demand-shift',
    syllabus: '2.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.2, p. 46' },
  },
];
