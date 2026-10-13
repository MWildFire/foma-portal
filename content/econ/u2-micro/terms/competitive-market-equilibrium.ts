import type { Term } from '../../../../src/contract/types';

// Competitive market equilibrium (IB DP Economics section 2.3). Definitions are in our own words; the source is the textbook, with a page locator for each term.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'market-equilibrium',
    term: { en: 'market equilibrium', ru: 'рыночное равновесие (market equilibrium)' },
    def: {
      en: 'The price and quantity at which quantity demanded equals quantity supplied, so there is no pressure for the price to change.',
      ru: 'Цена и количество, при которых величина спроса равна величине предложения, поэтому у цены нет давления на изменение.',
    },
    example: {
      en: 'With Qd = 40 - 2P and Qs = 4 + 3P (thousand units, AED per unit), equilibrium is P = AED 7.20 and Q = 25.6 thousand units.',
      ru: 'При Qd = 40 - 2P и Qs = 4 + 3P (тыс. единиц, AED за единицу) равновесие: P = 7,20 AED и Q = 25,6 тыс. единиц.',
    },
    pitfall: {
      en: 'Equilibrium is not a fair or ideal price; it is simply the point where the two quantities match.',
      ru: 'Равновесие — не «справедливая» или идеальная цена, а просто точка, где совпадают величины спроса и предложения.',
    },
    sim: 'econ.equilibrium',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.4, p. 59' },
  },
  {
    id: 'excess-demand',
    term: { en: 'excess demand (shortage)', ru: 'избыточный спрос (excess demand)' },
    def: {
      en: 'A situation where quantity demanded exceeds quantity supplied, which happens at a price below equilibrium; the price tends to rise.',
      ru: 'Ситуация, когда величина спроса больше величины предложения (дефицит, shortage); это происходит при цене ниже равновесной, и цена имеет тенденцию расти.',
    },
    example: {
      en: 'At AED 6 in the market with Qd = 40 - 2P and Qs = 4 + 3P, quantity demanded is 28 and quantity supplied is 22, so excess demand is 6 thousand units.',
      ru: 'При цене 6 AED на рынке с Qd = 40 - 2P и Qs = 4 + 3P величина спроса равна 28, величина предложения 22, избыточный спрос 6 тыс. единиц.',
    },
    pitfall: {
      en: 'Excess demand is not the same as high demand: it is the gap between demand and supply at a price below equilibrium.',
      ru: 'Избыточный спрос — не то же самое, что высокий спрос: это разрыв между спросом и предложением при цене ниже равновесной.',
    },
    sim: 'econ.equilibrium',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.4, p. 58' },
  },
  {
    id: 'excess-supply',
    term: { en: 'excess supply (surplus)', ru: 'избыточное предложение (excess supply)' },
    def: {
      en: 'A situation where quantity supplied exceeds quantity demanded, which happens at a price above equilibrium; the price tends to fall.',
      ru: 'Ситуация, когда величина предложения больше величины спроса; это происходит при цене выше равновесной, и цена имеет тенденцию падать.',
    },
    example: {
      en: 'At AED 9 in the same market, quantity supplied is 31 and quantity demanded is 22, so excess supply is 9 thousand units.',
      ru: 'При цене 9 AED на том же рынке величина предложения равна 31, величина спроса 22, избыточное предложение 9 тыс. единиц.',
    },
    pitfall: {
      en: 'Excess supply is measured at one price, as the gap between quantity supplied and quantity demanded; it is not the total stock of goods.',
      ru: 'Избыточное предложение измеряется при одной цене как разрыв между величинами предложения и спроса; это не общий запас товаров.',
    },
    sim: 'econ.equilibrium',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.4, p. 58' },
  },
  {
    id: 'price-mechanism',
    term: { en: 'price mechanism', ru: 'ценовой механизм (price mechanism)' },
    def: {
      en: 'Prices that competitive markets set through supply and demand, acting as signals and incentives that allocate resources without central direction.',
      ru: 'Цены, которые конкурентные рынки формируют через спрос и предложение, служа сигналами и стимулами, распределяют ресурсы без централизованного управления.',
    },
    example: {
      en: 'When a shortage pushes the price of bottled water up from AED 2.00 to AED 2.50, buyers reduce quantity demanded and producers supply more until the market clears.',
      ru: 'Когда дефицит поднимает цену бутилированной воды с 2,00 до 2,50 AED, покупатели сокращают величину спроса, а производители поставляют больше, пока рынок не уравновесится.',
    },
    pitfall: {
      en: 'The price mechanism works through free changes in price; a price set by the government is a different mechanism.',
      ru: 'Ценовой механизм работает через свободное изменение цен; цена, установленная государством, — это уже другой механизм.',
    },
    sim: 'econ.equilibrium',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.5, p. 63' },
  },
  {
    id: 'consumer-surplus',
    term: { en: 'consumer surplus', ru: 'излишек потребителя (consumer surplus)' },
    def: {
      en: 'The difference between the highest amount buyers would pay and the price they actually pay, summed over the units bought; it is the area above price and below demand.',
      ru: 'Разница между максимальной ценой, которую потребители готовы заплатить, и реально уплаченной ценой, сложенная по всем купленным единицам; на графике это площадь над ценой и под кривой спроса.',
    },
    example: {
      en: 'A buyer willing to pay AED 9.00 for a unit, who pays the equilibrium price of AED 7.20, gains AED 1.80 on that unit.',
      ru: 'Покупатель, готовый заплатить 9,00 AED за единицу и платящий равновесную цену 7,20 AED, получает выгоду 1,80 AED на этой единице.',
    },
    pitfall: {
      en: 'Consumer surplus is the area above the price, not below it; the area below the price belongs to producer surplus.',
      ru: 'Излишек потребителя — это площадь над ценой, а не под ней: площадь под ценой относится к излишку производителя.',
    },
    sim: 'econ.surplus',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.5, p. 67' },
  },
  {
    id: 'producer-surplus',
    term: { en: 'producer surplus', ru: 'излишек производителя (producer surplus)' },
    def: {
      en: 'The difference between the price producers receive and the minimum price they would accept for each unit, summed over the units sold; it is the area below price and above supply.',
      ru: 'Разница между ценой, которую получают производители, и минимальной ценой, на которую они согласны за каждую единицу, сложенная по проданным единицам; это площадь под ценой и над кривой предложения.',
    },
    example: {
      en: 'A seller who would accept AED 4.00 for a unit and receives the equilibrium price of AED 7.20 earns a producer surplus of AED 3.20 on that unit.',
      ru: 'Продавец, который согласен продать единицу за 4,00 AED и получает равновесную цену 7,20 AED, получает излишек 3,20 AED на этой единице.',
    },
    pitfall: {
      en: 'Producer surplus is not the same as profit, because it does not subtract fixed costs.',
      ru: 'Излишек производителя — не то же самое, что прибыль: он не вычитает постоянные издержки.',
    },
    sim: 'econ.surplus',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.5, p. 67' },
  },
  {
    id: 'perfect-competition',
    term: { en: 'perfect competition', ru: 'совершенная конкуренция (perfect competition)' },
    def: {
      en: 'A market structure with many buyers and sellers, identical products, perfect information and free entry and exit, so that no single firm can influence the price.',
      ru: 'Структура рынка с множеством покупателей и продавцов, одинаковыми товарами, полной информацией и свободным входом и выходом, поэтому ни одна фирма не может влиять на цену.',
    },
    example: {
      en: 'Many small farms sell identical wheat at the same market price of AED 900 per tonne, so no single farm can charge more.',
      ru: 'Многие мелкие фермы продают одинаковую пшеницу по единой рыночной цене 900 AED за тонну, поэтому ни одна ферма не может назначить более высокую цену.',
    },
    pitfall: {
      en: 'Perfect competition is a theoretical benchmark; real markets, such as agriculture, come close to it but rarely meet every condition.',
      ru: 'Совершенная конкуренция — теоретический эталон; реальные рынки, например сельскохозяйственные, лишь приближаются к нему и редко выполняют все условия.',
    },
    sim: 'econ.perfect-competition-sr',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.1, p. 197' },
  },
  {
    id: 'price-taker',
    term: { en: 'price taker', ru: 'ценополучатель (price taker)' },
    def: {
      en: 'A firm that must accept the market price, so its demand curve is horizontal at that price and price equals marginal revenue and average revenue.',
      ru: 'Фирма, которая вынуждена принимать рыночную цену: её кривая спроса горизонтальна на уровне этой цены, а цена равна предельному и среднему доходу.',
    },
    example: {
      en: 'A farm that sells wheat at AED 900 per tonne gets AED 900 more for each extra tonne, so its marginal revenue is AED 900.',
      ru: 'Ферма, которая продаёт пшеницу по 900 AED за тонну, получает дополнительно 900 AED за каждую лишнюю тонну, поэтому её предельный доход равен 900 AED.',
    },
    pitfall: {
      en: 'A price taker can sell any quantity at the market price, but it would sell nothing at a higher price.',
      ru: 'Ценополучатель может продать любое количество по рыночной цене, но ничего не продаст по более высокой цене.',
    },
    sim: 'econ.perfect-competition-sr',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.3, p. 209' },
  },
  {
    id: 'supernormal-profit',
    term: { en: 'supernormal profit', ru: 'сверхнормальная прибыль (supernormal profit)' },
    def: {
      en: 'Profit above normal profit: total revenue is greater than total cost, including opportunity cost; in the short run, price is above average total cost.',
      ru: 'Прибыль сверх нормальной: общая выручка больше общих издержек, включая альтернативные издержки (opportunity cost); в краткосрочном периоде цена выше средних общих издержек.',
    },
    example: {
      en: 'A firm that sells 200 units at AED 15 each (total revenue AED 3000) with total cost AED 2600 earns supernormal profit of AED 400.',
      ru: 'Фирма продаёт 200 единиц по 15 AED (выручка 3000 AED) при общих издержках 2600 AED и получает сверхнормальную прибыль 400 AED.',
    },
    pitfall: {
      en: 'A high price alone is not enough: supernormal profit needs the price to be above average total cost.',
      ru: 'Одной высокой цены недостаточно: сверхнормальная прибыль возникает, только если цена выше средних общих издержек.',
    },
    sim: 'econ.perfect-competition-sr',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.3, p. 208' },
  },
  {
    id: 'normal-profit',
    term: { en: 'normal profit', ru: 'нормальная прибыль (normal profit)' },
    def: {
      en: 'The minimum revenue a firm must receive to keep the business running rather than shut down: total revenue equals total cost, including opportunity cost, so economic profit is zero.',
      ru: 'Минимальная выручка, которую фирма должна получать, чтобы продолжать работу, а не закрываться: выручка равна общим издержкам, включая альтернативные издержки, поэтому экономическая прибыль равна нулю.',
    },
    example: {
      en: 'A firm whose total cost is AED 3000, including AED 400 of income the owner could earn elsewhere, earns normal profit when its total revenue is AED 3000.',
      ru: 'Фирма, общие издержки которой равны 3000 AED (включая 400 AED дохода, который владелец мог бы получать в другом месте), получает нормальную прибыль при выручке 3000 AED.',
    },
    pitfall: {
      en: 'Normal profit is not zero accounting profit: it covers opportunity costs, while economic profit is zero.',
      ru: 'Нормальная прибыль не равна нулю в бухгалтерском смысле: она покрывает альтернативные издержки, а экономическая прибыль при этом равна нулю.',
    },
    sim: 'econ.perfect-competition-lr',
    syllabus: '2.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.2, p. 207' },
  },
];
