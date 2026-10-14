import type { SourceRef, Term } from '../../../../src/contract/types';

const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.4' };

export const terms: Term[] = [
  {
    id: 'economic-integration',
    term: { en: 'economic integration', ru: 'экономическая интеграция (economic integration)' },
    def: {
      en: 'Economic co-operation and co-ordination of policies between countries, leading to closer economic links, often through agreements that reduce or remove barriers to trade and sometimes factor movement between members, usually with preferential treatment for members.',
      ru: 'Экономическое сотрудничество и координация экономической политики между странами, ведущие к более тесным экономическим связям, часто через соглашения о снижении или снятии барьеров в торговле и иногда в движении факторов производства между участниками, обычно с преференциями для участников.',
    },
    example: {
      en: 'Two countries that remove the AED 4 per unit tariff between them, but keep it on imports from outside, have started economic integration.',
      ru: 'Две страны, которые отменили пошлину 4 AED за единицу между собой, но сохранили её для импорта извне, начали экономическую интеграцию.',
    },
    pitfall: {
      en: 'Integration comes in degrees: a free trade area is the shallowest form and an economic union the deepest.',
      ru: 'Интеграция бывает разной глубины: зона свободной торговли — самая поверхностная форма, экономический союз — самая глубокая.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 472' },
  },
  {
    id: 'free-trade-area',
    term: { en: 'free trade area', ru: 'зона свободной торговли (free trade area)' },
    def: {
      en: 'A group of countries that cut out trade barriers among themselves, while each member keeps its own barriers against imports from non-members.',
      ru: 'Группа стран, которые убирают торговые барьеры между собой, а каждая страна-участница сохраняет собственные барьеры для импорта из стран, не входящих в группу.',
    },
    example: {
      en: 'Under a free trade area, a good from a member enters duty free, while the same good from a non-member pays a tariff of AED 4 per unit.',
      ru: 'В зоне свободной торговли товар из страны-участницы ввозится беспошлинно, а тот же товар из страны, не входящей в зону, платит пошлину 4 AED за единицу.',
    },
    pitfall: {
      en: 'A free trade area is not a customs union, because its members keep their own trade barriers against non-members.',
      ru: 'Зона свободной торговли — это не таможенный союз, потому что её участники сохраняют собственные торговые барьеры для стран, не входящих в зону.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 473' },
  },
  {
    id: 'customs-union',
    term: { en: 'customs union', ru: 'таможенный союз (customs union)' },
    def: {
      en: 'A free trade area in which all members also apply a common external tariff to imports from non-members.',
      ru: 'Зона свободной торговли, в которой все участники также применяют общий внешний тариф к импорту из стран, не входящих в союз.',
    },
    example: {
      en: 'If every member charges the same AED 6 per unit on steel imports from outside the union, the union has a common external tariff on steel.',
      ru: 'Если каждый участник взимает одинаковые 6 AED за единицу с импорта стали извне союза, в союзе действует общий внешний тариф на сталь.',
    },
    pitfall: {
      en: 'A customs union is a free trade area plus a common external tariff; a common market adds the free movement of factors.',
      ru: 'Таможенный союз — это зона свободной торговли плюс общий внешний тариф; общий рынок добавляет свободное движение факторов производства.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 473' },
  },
  {
    id: 'common-external-tariff',
    term: { en: 'common external tariff (common external policy)', ru: 'общий внешний тариф (common external tariff, common external policy)' },
    def: {
      en: 'The same tariff that all members of a customs union apply to imports from non-member countries; trade among members stays tariff-free.',
      ru: 'Одинаковая пошлина, которую все участники таможенного союза применяют к импорту из стран, не входящих в союз; торговля между участниками остаётся беспошлинной.',
    },
    example: {
      en: 'A common external tariff of AED 6 per unit means every member charges AED 6 on the same good from outside the union.',
      ru: 'Общий внешний тариф в 6 AED за единицу означает, что каждый участник берёт 6 AED за тот же товар из-за пределов союза.',
    },
    pitfall: {
      en: 'The common external tariff applies to outsiders only; members do not charge it to each other.',
      ru: 'Общий внешний тариф применяется только к внешним поставщикам; участники не взимают его друг с друга.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'common-market',
    term: { en: 'common market', ru: 'общий рынок (common market)' },
    def: {
      en: 'A customs union in which factors of production, such as labour and capital, can also move freely between member countries.',
      ru: 'Таможенный союз, в котором факторы производства, например рабочая сила и капитал, также могут свободно перемещаться между странами-участницами.',
    },
    example: {
      en: 'A worker can move to another member country and take a job paying AED 8000 a month without a work permit.',
      ru: 'Работник может переехать в другую страну-участницу и занять работу с зарплатой 8000 AED в месяц без разрешения на работу.',
    },
    pitfall: {
      en: 'A common market does not need a common currency; its members can keep their own currencies.',
      ru: 'Общему рынку не нужна единая валюта; его участники могут сохранять собственные валюты.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 474' },
  },
  {
    id: 'economic-union',
    term: { en: 'economic union', ru: 'экономический союз (economic union)' },
    def: {
      en: 'A common market in which members also harmonise their economic policies, such as tax and competition policy, and may share a single currency.',
      ru: 'Общий рынок, в котором участники также согласовывают экономическую политику, например налоговую и конкурентную, и могут иметь единую валюту.',
    },
    example: {
      en: 'If all members set the same 10% sales tax rate, a product priced at AED 100 before tax costs AED 110 in every member country.',
      ru: 'Если все участники устанавливают одинаковую ставку налога с продаж 10%, товар ценой 100 AED до налога стоит 110 AED в каждой стране-участнице.',
    },
    pitfall: {
      en: 'An economic union means giving up some national control over economic policy, not only removing tariffs.',
      ru: 'Экономический союз означает отказ от части национального контроля над экономической политикой, а не только отмену пошлин.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'trade-creation',
    term: { en: 'trade creation', ru: 'торговое создание (trade creation)' },
    def: {
      en: 'New trade that a customs union or free trade area creates when cheaper imports from a member replace higher-cost products, whether domestically produced or imported, or raise consumption.',
      ru: 'Новая торговля, которую создаёт таможенный союз или зона свободной торговли, когда более дешёвый импорт из страны-участницы заменяет более дорогие товары, произведённые внутри страны или импортируемые, либо увеличивает потребление.',
    },
    example: {
      en: 'Domestic output that costs AED 14 per unit is replaced by imports from a member at AED 11 per unit, which is trade creation.',
      ru: 'Внутреннее производство, которое стоит 14 AED за единицу, заменяется импортом из страны-участницы по 11 AED за единицу; это торговое создание.',
    },
    pitfall: {
      en: 'Trade creation also includes new consumption at a lower price, not only switches away from domestic production.',
      ru: 'Торговое создание включает и новое потребление по более низкой цене, а не только переход от внутреннего производства.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.integration',
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 474' },
  },
  {
    id: 'trade-diversion',
    term: { en: 'trade diversion', ru: 'торговое отклонение (trade diversion)' },
    def: {
      en: 'A switch of imports from a lower-cost non-member to a higher-cost member, because removing tariffs on the member makes it cheaper than the non-member.',
      ru: 'Переключение импорта с более дешёвого поставщика из страны, не входящей в союз, на более дорогого поставщика из страны-участницы, потому что отмена пошлины для участника делает его дешевле поставщика извне.',
    },
    example: {
      en: 'Imports that cost AED 8 per unit from a non-member switch to a member that costs AED 11 per unit, so each unit costs AED 3 more.',
      ru: 'Импорт, который стоит 8 AED за единицу у страны, не входящей в союз, переходит к участнику союза с ценой 11 AED за единицу, поэтому каждая единица стоит на 3 AED дороже.',
    },
    pitfall: {
      en: 'Trade diversion is not lost trade: the goods still move, but from a less efficient source, which can reduce welfare.',
      ru: 'Торговое отклонение — это не потерянная торговля: товары по-прежнему перемещаются, но от менее эффективного поставщика, что может снизить благосостояние.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.integration',
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 475' },
  },
  {
    id: 'rules-of-origin',
    term: { en: 'rules of origin', ru: 'правила происхождения (rules of origin)' },
    def: {
      en: 'Rules that define which goods count as made in a member country, so that only qualifying goods receive preferential treatment within a free trade area, which stops goods from entering through the member with the lowest external barriers and then moving on to others.',
      ru: 'Правила, которые определяют, какие товары считаются произведёнными в стране-участнице, чтобы в зоне свободной торговли преференции получали только подходящие товары и чтобы товары не ввозились через участника с самыми низкими внешними барьерами и не перепродавались дальше.',
    },
    example: {
      en: 'A product with 70% of its value from non-member parts may fail the rule and pay the AED 4 per unit tariff instead of entering duty free.',
      ru: 'Товар, в котором 70% стоимости приходится на детали из стран, не входящих в зону, может не пройти правило и платить пошлину 4 AED за единицу вместо беспошлинного ввоза.',
    },
    pitfall: {
      en: 'Rules of origin are needed in a free trade area, but not in a customs union, where one common tariff applies at the border.',
      ru: 'Правила происхождения нужны в зоне свободной торговли, но не нужны в таможенном союзе, где на границе действует один общий тариф.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 15.2, p. 473' },
  },
];
