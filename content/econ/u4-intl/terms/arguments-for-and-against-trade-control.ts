import type { SourceRef, Term } from '../../../../src/contract/types';

const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.3' };

export const terms: Term[] = [
  {
    id: 'infant-industry',
    term: { en: 'infant industry', ru: 'молодая отрасль (infant industry)' },
    def: {
      en: 'A new domestic industry that cannot yet compete on cost with established foreign firms, but could become competitive with temporary protection and economies of scale.',
      ru: 'Новая отечественная отрасль, которая пока не может конкурировать по издержкам с давно работающими зарубежными фирмами, но может стать конкурентоспособной при временной защите и эффекте масштаба.',
    },
    example: {
      en: 'A new solar panel plant with costs of AED 120 per panel, against a foreign price of AED 90 per panel, may need a temporary tariff while it grows.',
      ru: 'Новый завод солнечных панелей с издержками 120 AED за панель при иностранной цене 90 AED за панель может нуждаться во временной пошлине, пока набирает объём.',
    },
    pitfall: {
      en: 'Permanent protection of an industry that never becomes competitive is not an infant industry case.',
      ru: 'Постоянная защита отрасли, которая так и не становится конкурентоспособной, не относится к аргументу о молодой отрасли.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'strategic-industry',
    term: { en: 'strategic industry', ru: 'стратегическая отрасль (strategic industry)' },
    def: {
      en: 'An industry, such as food, energy or defence production, that a government protects so that the country can supply itself in a crisis or for reasons of national security.',
      ru: 'Отрасль, например производство продовольствия, энергетика или оборона, которую государство защищает, чтобы страна могла обеспечивать себя в кризис или по соображениям национальной безопасности.',
    },
    example: {
      en: 'A country that imports 90% of its wheat may protect its farmers so that food supply continues if world trade is disrupted.',
      ru: 'Страна, которая импортирует 90% своей пшеницы, может защищать фермеров, чтобы поставки продовольствия продолжались при сбое мировой торговли.',
    },
    pitfall: {
      en: 'A security argument needs a real risk; calling an industry strategic does not by itself justify protection.',
      ru: 'Аргумент о безопасности требует реального риска; назвать отрасль стратегической само по себе не оправдывает защиту.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'declining-industry',
    term: { en: 'declining industry', ru: 'отрасль в упадке (declining industry)' },
    def: {
      en: 'An industry whose demand or competitiveness is falling over time, often as technology or consumer tastes change, so that its jobs are at risk.',
      ru: 'Отрасль, спрос на продукцию или конкурентоспособность которой снижаются со временем, часто из-за изменения технологий или вкусов потребителей, поэтому её рабочие места под угрозой.',
    },
    example: {
      en: 'A coal mine that loses 500 jobs a year as demand for coal falls is part of a declining industry.',
      ru: 'Угольная шахта, которая теряет 500 рабочих мест в год из-за падения спроса на уголь, относится к отрасли в упадке.',
    },
    pitfall: {
      en: 'Protecting jobs in a declining industry delays the move of resources into growing industries; it does not stop the decline.',
      ru: 'Защита рабочих мест в отрасли в упадке откладывает перераспределение ресурсов в растущие отрасли и не останавливает спад.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'anti-dumping-duty',
    term: { en: 'anti-dumping duty', ru: 'антидемпинговая пошлина (anti-dumping duty)' },
    def: {
      en: 'A tariff placed on dumped imports, usually set at the dumping margin (the gap between the normal price and the export price), to restore fair competition.',
      ru: 'Пошлина на импорт, продаваемый демпингом, обычно равная демпинговой марже, то есть разнице между нормальной и экспортной ценой, чтобы восстановить честную конкуренцию.',
    },
    example: {
      en: 'If a foreign firm sells steel at AED 18 per unit when its home price is AED 24, an anti-dumping duty of AED 6 per unit removes the margin.',
      ru: 'Если иностранная фирма продаёт сталь по 18 AED за единицу, а дома — по 24 AED, антидемпинговая пошлина в 6 AED за единицу устраняет разницу.',
    },
    pitfall: {
      en: 'An anti-dumping duty responds to unfair pricing; it should not be used against low prices that reflect lower costs.',
      ru: 'Антидемпинговая пошлина отвечает на недобросовестное ценообразование; её не следует применять к низким ценам, которые отражают более низкие издержки.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'downstream-industry',
    term: { en: 'downstream industry', ru: 'отрасль-потребитель (downstream industry)' },
    def: {
      en: 'An industry that buys a good, such as steel or components, as an input for its own production, so a tariff on that input raises its costs.',
      ru: 'Отрасль, которая покупает товар, например сталь или комплектующие, как ресурс для собственного производства, поэтому пошлина на этот ресурс повышает её издержки.',
    },
    example: {
      en: 'A car maker that uses 300 kg of imported steel per car faces higher costs when a tariff of AED 2 per kg is added.',
      ru: 'Автопроизводитель, который использует 300 кг импортной стали на один автомобиль, получает рост издержек при пошлине 2 AED за килограмм.',
    },
    pitfall: {
      en: 'Protecting an input can cost more jobs in the buying industry than it saves in the protected industry.',
      ru: 'Защита ресурса может стоить больше рабочих мест в отрасли-покупателе, чем сохранить в защищённой отрасли.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'trade-war',
    term: { en: 'trade war', ru: 'торговая война (trade war)' },
    def: {
      en: "An escalating sequence of retaliatory tariffs and other trade barriers between countries, in which each side responds to the other's protection and trade falls for both.",
      ru: 'Нарастающая цепочка ответных пошлин и других торговых барьеров между странами, в которой каждая сторона отвечает на защиту другой, и торговля падает у обеих.',
    },
    example: {
      en: 'Country X adds a 10% tariff on imports from Country Y, and Y replies with a 10% tariff on X exports, so exports fall on both sides.',
      ru: 'Страна X вводит пошлину 10% на импорт из страны Y, а Y отвечает пошлиной 10% на экспорт X, и экспорт падает у обеих сторон.',
    },
    pitfall: {
      en: 'One retaliatory tariff is not yet a trade war; the term describes a continuing escalation of measures.',
      ru: 'Одна ответная пошлина ещё не торговая война; этот термин описывает продолжающуюся эскалацию мер.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'rent-seeking',
    term: { en: 'rent-seeking', ru: 'поиск ренты (rent-seeking)' },
    def: {
      en: "Using lobbying and political influence to win protection or privileges that raise a firm's income without creating new output or efficiency.",
      ru: 'Использование лоббирования и политического влияния, чтобы добиться защиты или привилегий, которые повышают доход фирмы без создания нового выпуска и роста эффективности.',
    },
    example: {
      en: 'A firm spends AED 2 million on lobbying for a tariff that adds AED 10 million a year to its profit.',
      ru: 'Фирма тратит 2 млн AED на лоббирование пошлины, которая добавляет 10 млн AED в год к её прибыли.',
    },
    pitfall: {
      en: 'Rent-seeking is about gaining income through influence, not about making a better product or lowering costs.',
      ru: 'Поиск ренты — это получение дохода через влияние, а не создание лучшего продукта или снижение издержек.',
    },
    syllabus: '4.3',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
