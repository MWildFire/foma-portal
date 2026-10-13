import type { SourceRef, Term } from '../../../../src/contract/types';

const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.10' };

export const terms: Term[] = [
  {
    id: 'export-led-growth',
    term: { en: 'export-led growth', ru: 'рост, ведомый экспортом (export-led growth)' },
    def: {
      en: 'A development strategy in which the growth of exports drives the economy, supported by trade openness, export promotion and competitive costs and exchange rates.',
      ru: 'Стратегия развития, при которой рост экспорта движет экономикой; её поддерживают открытость торговли, стимулирование экспорта и конкурентоспособные издержки и курс валюты.',
    },
    example: {
      en: 'Manufactured exports grow by 15% a year as firms learn to meet foreign quality standards.',
      ru: 'Экспорт промышленных товаров растёт на 15% в год, потому что фирмы учатся соответствовать зарубежным стандартам качества.',
    },
    pitfall: {
      en: 'Export-led growth does not mean giving up all policy: successful cases combined openness with active support for exporting firms.',
      ru: 'Рост, ведомый экспортом, не означает отказа от политики: удачные примеры сочетали открытость с активной поддержкой экспортёров.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'foreign-direct-investment',
    term: { en: 'foreign direct investment (FDI)', ru: 'прямые иностранные инвестиции (foreign direct investment, FDI)' },
    def: {
      en: 'Investment by a firm in another country that gives lasting control or a significant stake, usually at least 10% of voting shares, in an overseas business.',
      ru: 'Инвестиции фирмы в другой стране, которые дают долгосрочный контроль или значимую долю, обычно не менее 10% голосов, в зарубежном бизнесе.',
    },
    example: {
      en: 'A foreign firm that spends AED 200 million on a factory it fully owns makes a foreign direct investment of AED 200 million.',
      ru: 'Иностранная фирма, которая тратит 200 млн AED на завод, полностью ей принадлежащий, делает прямую инвестицию на 200 млн AED.',
    },
    pitfall: {
      en: 'FDI means lasting control; buying shares on a stock exchange without control is portfolio investment instead.',
      ru: 'Прямые иностранные инвестиции означают долгосрочный контроль; покупка акций на бирже без контроля — это портфельные инвестиции.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'special-economic-zone',
    term: { en: 'special economic zone', ru: 'особая экономическая зона (special economic zone)' },
    def: {
      en: 'A geographic area with its own rules, such as lower taxes, faster customs and better infrastructure, designed to attract foreign investment and exports.',
      ru: 'Территория с особыми правилами, например с более низкими налогами, быстрым таможенным оформлением и лучшей инфраструктурой, созданная для привлечения иностранных инвестиций и экспорта.',
    },
    example: {
      en: 'A zone that offers a 5-year tax holiday to electronics assemblers can attract plants that employ 500 local workers.',
      ru: 'Зона, которая даёт сборщикам электроники налоговые каникулы на 5 лет, может привлечь заводы, которые нанимают 500 местных работников.',
    },
    pitfall: {
      en: 'A zone whose plants import all their inputs gives the host economy little benefit; links to local firms matter.',
      ru: 'Зона, где заводы ввозят все комплектующие, приносит стране мало пользы; важны связи с местными фирмами.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'foreign-aid',
    term: { en: 'foreign aid', ru: 'иностранная помощь (foreign aid)' },
    def: {
      en: 'Grants and concessional loans from governments and international bodies to support development or emergency relief in another country, also called official development assistance.',
      ru: 'Гранты и льготные кредиты от правительств и международных организаций на поддержку развития или экстренную помощь в другой стране; также называется официальной помощью развитию.',
    },
    example: {
      en: 'A donor provides a concessional loan of AED 100 million at a low interest rate to build a rural clinic.',
      ru: 'Донор предоставляет льготный кредит в 100 млн AED под низкую процентную ставку на строительство сельской поликлиники.',
    },
    pitfall: {
      en: 'Aid that is poorly spent, or that adds to debt without building capacity, may not raise growth at all.',
      ru: 'Помощь, которую плохо расходуют или которая увеличивает долг без роста возможностей, может вовсе не повысить рост.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'tied-aid',
    term: { en: 'tied aid', ru: 'связанная помощь (tied aid)' },
    def: {
      en: 'Foreign aid that must be spent on goods, services or contractors from the donor country, which can raise its cost and limit the choice of the recipient.',
      ru: 'Иностранная помощь, которую нужно тратить на товары, услуги или подрядчиков из страны-донора; это может повысить её стоимость и ограничить выбор получателя.',
    },
    example: {
      en: 'If AED 10 million of aid for a water project must buy pumps from the donor, the project may cost more than local suppliers would charge.',
      ru: 'Если помощь в 10 млн AED на водный проект можно тратить только на насосы из страны-донора, проект может обойтись дороже местных поставщиков.',
    },
    pitfall: {
      en: 'Tied aid is still aid; the problem lies in the restriction on spending, not in the transfer of funds.',
      ru: 'Связанная помощь остаётся помощью; проблема в ограничении трат, а не в самом переводе средств.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'debt-relief',
    term: { en: 'debt relief', ru: 'облегчение долгового бремени (debt relief)' },
    def: {
      en: 'Reducing the debt burden of a country by cancelling or restructuring its debt, for example by lowering the principal or interest, or extending repayment periods.',
      ru: 'Снижение долговой нагрузки страны путём списания или реструктуризации долга, например снижения основной суммы или процентов либо продления сроков погашения.',
    },
    example: {
      en: 'Cancelling AED 500 million of debt frees the interest payments that the government can then spend on schools.',
      ru: 'Списание 500 млн AED долга освобождает деньги на проценты, которые правительство может потратить на школы.',
    },
    pitfall: {
      en: 'Relief does not fix the causes of debt: without better borrowing and tax systems, a country can build up debt again.',
      ru: 'Списание не устраняет причины задолженности: без улучшения систем заимствований и налогов долг может вырасти снова.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'microfinance',
    term: { en: 'microfinance', ru: 'микрофинансирование (microfinance)' },
    def: {
      en: 'Small loans, savings and insurance services for poor people and small businesses who have no access to ordinary banks, often without collateral.',
      ru: 'Небольшие кредиты, сбережения и страховые услуги для бедных людей и малого бизнеса, у которых нет доступа к обычным банкам; часто выдаются без залога.',
    },
    example: {
      en: 'A market trader borrows AED 2000 without collateral to buy stock, repays weekly and then expands her stall.',
      ru: 'Торговка на рынке берёт 2000 AED без залога на закупку товара, возвращает деньги еженедельно и затем расширяет свой прилавок.',
    },
    pitfall: {
      en: 'Microfinance is not a cure-all: loans often finance small survival businesses, and the evidence on large poverty reduction is mixed.',
      ru: 'Микрофинансирование — не панацея: кредиты часто идут на мелкий бизнес для выживания, а данные о сильном снижении бедности противоречивы.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'economic-infrastructure',
    term: { en: 'economic infrastructure', ru: 'экономическая инфраструктура (economic infrastructure)' },
    def: {
      en: 'The long-lived physical systems that support production and trade, such as roads, ports, power, water and telecommunications.',
      ru: 'Долгоживущие физические системы, которые поддерживают производство и торговлю: дороги, порты, электроэнергия, водоснабжение и связь.',
    },
    example: {
      en: 'A new port that cuts shipping time from 10 days to 6 days lowers the cost of every export that passes through it.',
      ru: 'Новый порт, который сокращает время перевозки с 10 до 6 дней, снижает издержки каждого экспорта, проходящего через него.',
    },
    pitfall: {
      en: 'Projects can become white elephants: costly, unused or badly maintained infrastructure that yields little return.',
      ru: 'Проекты могут стать «белыми слонами»: дорогой, невостребованной или плохо обслуживаемой инфраструктурой с малой отдачей.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
