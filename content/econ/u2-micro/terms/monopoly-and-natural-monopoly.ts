import type { Term } from '../../../../src/contract/types';

// Sources: the textbook (chapter and page) for terms it defines; the subject guide (section 2.11) for price-discrimination.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'monopoly',
    term: { en: 'monopoly', ru: 'монополия (monopoly)' },
    def: {
      en: 'A market with a single seller of a good that has no close substitutes, where barriers to entry stop rivals from entering, so the firm faces the whole market demand curve.',
      ru: 'Рынок, на котором один продавец продаёт товар без близких заменителей, а барьеры для входа не дают конкурентам зайти, поэтому фирма сталкивается со всей рыночной кривой спроса.',
    },
    example: {
      en: 'A firm that holds the only licence to sell a patented medicine at AED 120 per pack, with no rival allowed to sell it, is a monopoly.',
      ru: 'Фирма, которая владеет единственной лицензией на продажу запатентованного лекарства по 120 AED за упаковку, и при этом конкуренты не могут его продавать, является монополией.',
    },
    pitfall: {
      en: 'A monopoly does not have to be the only firm in the world; it must be the only seller in its market with no close substitutes.',
      ru: 'Монополия не обязательно единственная фирма в мире; важно, что она единственный продавец на своём рынке без близких заменителей.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.4, p. 215' },
    sim: 'econ.monopoly',
  },
  {
    id: 'market-power',
    term: { en: 'market power', ru: 'рыночная власть (market power)' },
    def: {
      en: "A firm's capacity to set its price above marginal cost, which is possible only if its demand curve slopes downwards, for example because it has little competition, few close substitutes or high barriers to entry.",
      ru: 'Способность фирмы устанавливать цену выше предельных издержек; это возможно только при нисходящей кривой спроса, например когда на её рынке мало конкуренции, мало близких заменителей или высокие барьеры для входа.',
    },
    example: {
      en: 'The only supplier of a branded medicine can charge AED 40 per pack, although its marginal cost is AED 20 per pack.',
      ru: 'Единственный поставщик брендового лекарства может назначить цену 40 AED за упаковку, хотя его предельные издержки составляют 20 AED за упаковку.',
    },
    pitfall: {
      en: 'Market power is not the same as market share: a firm can have a large share and still face strong rivals.',
      ru: 'Рыночная власть — это не то же, что доля рынка: у фирмы может быть большая доля, но при этом сильные конкуренты.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.4, p. 223' },
  },
  {
    id: 'barriers-to-entry',
    term: { en: 'barriers to entry', ru: 'барьеры для входа (barriers to entry)' },
    def: {
      en: 'Factors that make entry into a market hard or impossible for newcomers, such as legal protection, high start-up costs, control of a key resource or economies of scale.',
      ru: 'Факторы, которые затрудняют или делают невозможным вход новых фирм на рынок, например законная защита, высокие стартовые затраты, контроль над ключевым ресурсом или экономия от масштаба.',
    },
    example: {
      en: 'A new telecom operator would need AED 2 billion of network investment before its first customer, which keeps rivals out.',
      ru: 'Новому оператору связи нужно вложить 2 млрд AED в сеть до первого клиента, и это удерживает конкурентов вне рынка.',
    },
    pitfall: {
      en: 'Barriers to entry are what keep rivals out; a large firm in a market with easy entry is not protected by barriers.',
      ru: 'Барьеры для входа удерживают конкурентов; крупная фирма на рынке с лёгким входом не защищена барьерами.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.1, p. 196' },
  },
  {
    id: 'marginal-revenue',
    term: { en: 'marginal revenue', ru: 'предельный доход (marginal revenue)' },
    def: {
      en: 'The additional revenue a firm receives from selling one more unit of output.',
      ru: 'Дополнительная выручка, которую фирма получает от продажи одной дополнительной единицы выпуска.',
    },
    example: {
      en: 'If total revenue rises from AED 400 to AED 418 when output rises from 10 to 11 units, MR is AED 18 per unit.',
      ru: 'Если общая выручка растёт с 400 AED до 418 AED при росте выпуска с 10 до 11 единиц, MR составляет 18 AED за единицу.',
    },
    pitfall: {
      en: 'Marginal revenue is not average revenue: MR is the extra revenue from one more unit, while AR is total revenue divided by the number of units sold.',
      ru: 'Предельный доход (MR) — не то же, что средний доход (AR): MR — это дополнительная выручка от одной дополнительной единицы, а AR — общая выручка, делённая на количество единиц выпуска.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.2, p. 199' },
  },
  {
    id: 'natural-monopoly',
    term: { en: 'natural monopoly', ru: 'естественная монополия (natural monopoly)' },
    def: {
      en: 'A firm whose long-run average cost keeps falling over the relevant output range, so one firm can supply the whole market more cheaply than two or more firms could.',
      ru: 'Фирма, у которой долгосрочные средние издержки падают на всём нужном диапазоне выпуска, поэтому одна фирма может обслужить весь рынок дешевле, чем две или больше фирм.',
    },
    example: {
      en: 'A city water network that costs AED 500 million to build serves all homes at a lower average cost than two competing networks would.',
      ru: 'Городская водопроводная сеть стоимостью 500 млн AED обслуживает все дома дешевле, чем две конкурирующие сети.',
    },
    pitfall: {
      en: 'A natural monopoly is defined by falling long-run average cost, not by size; a large firm without economies of scale is not a natural monopoly.',
      ru: 'Естественная монополия определяется падением долгосрочных средних издержек, а не размером фирмы; крупная фирма без экономии от масштаба естественной монополией не является.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.4, p. 219' },
    sim: 'econ.natural-monopoly',
  },
  {
    id: 'economies-of-scale',
    term: { en: 'economies of scale', ru: 'экономия от масштаба (economies of scale)' },
    def: {
      en: 'Falling long-run average cost as output rises, because a larger scale allows specialisation, bulk buying or more efficient technology.',
      ru: 'Снижение долгосрочных средних издержек при росте выпуска, потому что больший масштаб позволяет специализацию, оптовые закупки или более эффективную технологию.',
    },
    example: {
      en: 'Doubling output from 1 million to 2 million units lowers the average cost per unit from AED 10 to AED 8 in a factory with high fixed costs.',
      ru: 'Удвоение выпуска с 1 млн до 2 млн единиц снижает средние издержки на единицу с 10 AED до 8 AED на заводе с большими постоянными затратами.',
    },
    pitfall: {
      en: 'Economies of scale are a long-run idea, when all inputs can change; do not use them to describe a short-run fall in average fixed cost.',
      ru: 'Экономия от масштаба — долгосрочное понятие, когда можно изменить все ресурсы; не используйте его для описания краткосрочного падения средних постоянных издержек.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.2, p. 204' },
  },
  {
    id: 'price-discrimination',
    term: { en: 'price discrimination', ru: 'ценовая дискриминация (price discrimination)' },
    def: {
      en: 'Charging different prices to different buyers for the same good, where the price difference is not explained by cost differences, in order to capture more consumer surplus.',
      ru: 'Назначение разных цен разным покупателям за один и тот же товар, если разница в цене не объясняется различием в издержках, чтобы присвоить больше излишка потребителя.',
    },
    example: {
      en: 'A cinema charges AED 30 for an adult ticket and AED 20 for a student ticket for the same seat, because students are willing to pay less.',
      ru: 'Кинотеатр продаёт взрослый билет за 30 AED, а студенческий за 20 AED на одно и то же место, потому что студенты готовы платить меньше.',
    },
    pitfall: {
      en: 'Price discrimination needs market power and no resale: if buyers can resell the good, the firm cannot keep the price gap.',
      ru: 'Ценовая дискриминация требует рыночной власти и невозможности перепродажи: если товар можно перепродать, разрыв в цене не удержится.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.11' },
  },
  {
    id: 'x-inefficiency',
    term: { en: 'X-inefficiency', ru: 'X-неэффективность (X-inefficiency)' },
    def: {
      en: 'Higher costs than necessary that arise when a firm faces little competition, because managers have less pressure to keep costs as low as possible.',
      ru: 'Издержки выше необходимых, которые возникают, когда у фирмы мало конкуренции, потому что у менеджеров меньше давления, заставляющего держать затраты на минимуме.',
    },
    example: {
      en: 'A monopoly that keeps 200 staff where 150 would be enough has higher average costs than a competitive rival; the extra cost is X-inefficiency.',
      ru: 'Монополия держит 200 сотрудников там, где хватило бы 150, и её средние издержки выше, чем у конкурента; лишние расходы — это X-неэффективность.',
    },
    pitfall: {
      en: 'X-inefficiency is a cost problem inside the firm, not the deadweight loss from pricing above marginal cost.',
      ru: 'X-неэффективность — это проблема издержек внутри фирмы, а не чистые потери от установления цены выше предельных издержек.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.4, p. 224' },
  },
  {
    id: 'marginal-cost-pricing',
    term: { en: 'marginal cost pricing', ru: 'ценообразование по предельным издержкам (marginal cost pricing)' },
    def: {
      en: 'Setting the price equal to marginal cost, which is allocatively efficient; for a natural monopoly it may mean a loss, because the price is below average total cost.',
      ru: 'Установление цены, равной предельным издержкам, что аллокативно эффективно; для естественной монополии это может означать убыток, потому что цена ниже средних общих издержек.',
    },
    example: {
      en: 'A water network with marginal cost AED 3 per cubic metre and average total cost AED 6 loses AED 3 on every unit if it charges AED 3.',
      ru: 'Водная сеть с предельными издержками 3 AED за кубический метр и средними общими издержками 6 AED теряет по 3 AED на каждой единице, если берёт 3 AED.',
    },
    pitfall: {
      en: 'Marginal cost pricing is efficient in the allocative sense only; it is not necessarily profitable.',
      ru: 'Ценообразование по предельным издержкам эффективно только в аллокативном смысле; оно не обязательно прибыльно.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.7, p. 244' },
  },
  {
    id: 'average-cost-pricing',
    term: { en: 'average cost pricing', ru: 'ценообразование по средним издержкам (average cost pricing)' },
    def: {
      en: 'Setting the price equal to average total cost, so the firm earns normal profit; output is higher than under monopoly but lower than the output where price equals marginal cost.',
      ru: 'Установление цены, равной средним общим издержкам: фирма получает нормальную прибыль; выпуск выше, чем у монополии, но ниже того, при котором цена равна предельным издержкам.',
    },
    example: {
      en: 'If average total cost is AED 6 per cubic metre, a regulator sets the price at AED 6, so the firm earns normal profit and sells more water than a monopoly would.',
      ru: 'Если средние общие издержки равны 6 AED за кубический метр, регулятор устанавливает цену 6 AED: фирма получает нормальную прибыль и продаёт больше воды, чем продала бы монополия.',
    },
    pitfall: {
      en: 'Average cost pricing still leaves some deadweight loss, because price is above marginal cost; it is a compromise, not the efficient outcome.',
      ru: 'Ценообразование по средним издержкам всё равно оставляет часть чистых потерь, потому что цена выше предельных издержек; это компромисс, а не эффективный исход.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.7, p. 245' },
  },
];
