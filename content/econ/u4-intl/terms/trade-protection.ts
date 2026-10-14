import type { SourceRef, Term } from '../../../../src/contract/types';

const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.2' };

export const terms: Term[] = [
  {
    id: 'protectionism',
    term: { en: 'protectionism', ru: 'протекционизм (protectionism)' },
    def: {
      en: 'Government policy that restricts imports or supports domestic producers against foreign competition, using tariffs, quotas, subsidies or other barriers.',
      ru: 'Политика государства, которая ограничивает импорт или поддерживает отечественных производителей в конкуренции с иностранными, с помощью пошлин, квот, субсидий или других барьеров.',
    },
    example: {
      en: 'A tariff of AED 5 per unit on imported steel is an example of protectionism.',
      ru: 'Пошлина 5 AED за единицу на импортную сталь — пример протекционизма.',
    },
    pitfall: {
      en: 'Protectionism is a policy aim; a tariff or a quota is one of the tools used to achieve it.',
      ru: 'Протекционизм — это цель политики; пошлина или квота — один из инструментов её достижения.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 444' },
  },
  {
    id: 'tariff',
    term: { en: 'tariff', ru: 'тариф (tariff)' },
    def: {
      en: 'A tax on imported goods. A specific tariff is a fixed amount per unit; an ad valorem tariff is a percentage of the import value.',
      ru: 'Налог на импортируемые товары. Специфический тариф — фиксированная сумма за единицу; адвалорный тариф — процент от стоимости импорта.',
    },
    example: {
      en: 'A tariff of AED 5 per unit raises the domestic price of an import from AED 20 to AED 25 per unit.',
      ru: 'Тариф 5 AED за единицу поднимает внутреннюю цену импорта с 20 AED до 25 AED за единицу.',
    },
    pitfall: {
      en: 'The importer pays the tariff, but buyers in the importing country pay for it through a higher price.',
      ru: 'Тариф платит импортёр, но покупатели в стране импорта платят за него через более высокую цену.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.tariff',
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 444' },
  },
  {
    id: 'quota',
    term: { en: 'quota', ru: 'квота (quota)' },
    def: {
      en: 'A legal cap on the number of physical units of a good that may be brought in or shipped out within a set time frame.',
      ru: 'Законодательно установленный предел числа физических единиц товара, которые можно ввезти или вывезти в установленный период.',
    },
    example: {
      en: 'An import quota of 25000 units per year caps imports at that quantity, even when buyers would want more at the world price.',
      ru: 'Импортная квота в 25000 единиц в год ограничивает ввоз этим объёмом, даже если покупатели хотели бы купить больше по мировой цене.',
    },
    pitfall: {
      en: 'A quota does not give government revenue by itself; the rent goes to whoever holds the import licences.',
      ru: 'Квота сама по себе не даёт государству выручки; рента достаётся тем, кто владеет импортными лицензиями.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.quota',
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 448' },
  },
  {
    id: 'export-subsidy',
    term: { en: 'export subsidy', ru: 'экспортная субсидия (export subsidy)' },
    def: {
      en: 'A payment by government to domestic producers for each unit they export, which raises the price they receive and their quantity sold abroad.',
      ru: 'Выплата государства отечественным производителям за каждую единицу, которую они экспортируют; она повышает получаемую ими цену и объём продаж за границу.',
    },
    example: {
      en: 'An export subsidy of AED 2.40 per unit on 35000 exported units costs the government AED 84000.',
      ru: 'Экспортная субсидия 2,40 AED за единицу при 35000 экспортированных единицах обходится государству в 84000 AED.',
    },
    pitfall: {
      en: 'The subsidy is paid from public money, and it also raises the price that domestic buyers pay.',
      ru: 'Субсидия оплачивается из налоговых поступлений и также повышает цену, которую платят внутренние покупатели.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.export-subsidy',
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 457' },
  },
  {
    id: 'dumping',
    term: { en: 'dumping', ru: 'демпинг (dumping)' },
    def: {
      en: "Selling exports in a foreign market at a price below their cost of production or below the price charged in the exporter's home market.",
      ru: 'Продажа экспорта на зарубежном рынке по цене ниже себестоимости или ниже цены на внутреннем рынке страны-экспортёра.',
    },
    example: {
      en: 'A foreign steel producer sells steel in the country at AED 18 per unit while it charges AED 24 per unit at home, so it is dumping.',
      ru: 'Иностранный производитель продаёт сталь в стране по 18 AED за единицу, а дома берёт 24 AED за единицу, значит, это демпинг.',
    },
    pitfall: {
      en: 'A low price is not dumping by itself; the price must be below cost or below the price in the home market.',
      ru: 'Низкая цена сама по себе не является демпингом; цена должна быть ниже себестоимости или ниже цены на внутреннем рынке.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.1, p. 466' },
  },
  {
    id: 'voluntary-export-restraint',
    term: { en: 'voluntary export restraint (VER)', ru: 'добровольное ограничение экспорта (voluntary export restraint, VER)' },
    def: {
      en: 'An agreement under which an exporting country limits the quantity it exports to another country, usually to avoid tighter tariffs or quotas.',
      ru: 'Соглашение, по которому страна-экспортёр ограничивает объём экспорта в другую страну, обычно чтобы избежать более жёстких пошлин или квот.',
    },
    example: {
      en: 'An exporter agrees to ship no more than 40000 units a year to a partner, instead of facing a tariff of AED 10 per unit.',
      ru: 'Экспортёр соглашается отгружать партнёру не более 40000 единиц в год вместо того, чтобы платить пошлину 10 AED за единицу.',
    },
    pitfall: {
      en: 'Despite the name, a VER is usually not voluntary: the exporter agrees because the alternative is a harsher measure.',
      ru: 'Несмотря на название, такое ограничение обычно не добровольно: экспортёр соглашается, потому что альтернатива — более жёсткая мера.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'administrative-barriers',
    term: { en: 'administrative barriers', ru: 'административные барьеры (administrative barriers)' },
    def: {
      en: 'Non-tariff rules and procedures, such as product standards, licences and customs checks, that make imports slower or more costly.',
      ru: 'Нетарифные правила и процедуры, например стандарты продукции, лицензии и таможенные проверки, которые делают импорт медленнее или дороже.',
    },
    example: {
      en: 'A rule that every imported food shipment is re-tested at the border, at a cost of AED 500 per shipment, adds to the cost of imports.',
      ru: 'Правило, по которому каждую импортную партию продуктов повторно проверяют на границе за 500 AED, повышает издержки импорта.',
    },
    pitfall: {
      en: 'Some standards protect consumers; an administrative barrier becomes a trade problem when it is used mainly to block imports.',
      ru: 'Некоторые стандарты защищают потребителей; административный барьер становится торговой проблемой, когда его используют главным образом для блокировки импорта.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 462' },
  },
  {
    id: 'quota-rent',
    term: { en: 'quota rent', ru: 'квотная рента (quota rent)' },
    def: {
      en: 'The extra income created by a quota: the gap between the domestic price and the world price, times the quantity imported under the quota.',
      ru: 'Дополнительный доход, который создаёт квота: разница между внутренней и мировой ценой, умноженная на объём импорта в рамках квоты.',
    },
    example: {
      en: 'With a quota of 25000 units and a domestic price AED 3.20 above the world price, the quota rent is AED 80000.',
      ru: 'При квоте 25000 единиц и внутренней цене, на 3,20 AED выше мировой, квотная рента составляет 80000 AED.',
    },
    pitfall: {
      en: 'Quota rent becomes government revenue only if government sells the licences, for example at an auction.',
      ru: 'Квотная рента становится выручкой государства, только если государство продаёт лицензии, например на аукционе.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.quota',
    src: { kind: 'textbook', title: book, locator: 'ch. 14.3, p. 450' },
  },
  {
    id: 'exchange-controls',
    term: { en: 'exchange controls', ru: 'валютный контроль (exchange controls)' },
    def: {
      en: 'Government restrictions on buying or selling foreign currency, used to limit imports by making foreign currency harder for importers to obtain.',
      ru: 'Ограничения государства на покупку или продажу иностранной валюты; используются, чтобы сократить импорт, потому что импортёрам труднее получить валюту.',
    },
    example: {
      en: 'A rule that importers may buy no more than USD 100000 of foreign currency per month limits how much they can import.',
      ru: 'Правило, по которому импортёры могут купить не более 100000 USD иностранной валюты в месяц, ограничивает объём импорта.',
    },
    pitfall: {
      en: 'Exchange controls restrict payments rather than goods, so they are easy to miss in trade data, but they still reduce imports.',
      ru: 'Валютный контроль ограничивает платежи, а не товары, поэтому его легко не заметить в данных о торговле, но он всё равно сокращает импорт.',
    },
    syllabus: '4.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 17, p. 519' },
  },
];
