import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 3.3 (resource stewardship). Definitions are in our own words, from the Geography guide (2017), core 3.3.
// The ThinkIB eBook has no page numbers, so the locator names the eBook sections that cover the subtopic.
// Concepts already defined in units 1 to 3.2 (renewable and non-renewable resources, resource security, water stress) are not repeated here.
const src: SourceRef = { kind: 'thinkib', title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 3 › 9a–9e' };

export const terms: Term[] = [
  {
    id: 'core-resource-stewardship',
    term: { en: 'resource stewardship', ru: 'бережное управление ресурсами (resource stewardship)' },
    def: {
      en: 'Managing resources with present and future needs in view. For renewable resources, limit use with regard to replenishment and ecosystem needs. For non-renewable resources, reduce depletion and damage through efficient use, reuse, recycling and substitution; extraction does not make the geological stock renew.',
      ru: 'Управление ресурсами с учётом нынешних и будущих потребностей. Для возобновляемых ресурсов изъятие ограничивают с учётом пополнения и потребностей экосистем. Для невозобновляемых снижают истощение и ущерб через эффективное использование, повторное применение, переработку и замещение; добыча не делает геологический запас возобновляемым.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Stewardship is not the same as keeping a resource unused: it allows use, but at a rate and in a way that keeps the resource available.',
      ru: 'Бережное управление — не то же, что держать ресурс неиспользуемым: оно допускает использование, но с темпом и способом, которые сохраняют доступность ресурса.',
    },
  },
  {
    id: 'core-sustainable-yield',
    term: { en: 'sustainable yield', ru: 'устойчивый объём изъятия (sustainable yield)' },
    def: {
      en: 'The amount of a renewable resource, such as fish or timber, that can be harvested each year without reducing the stock available for future harvests.',
      ru: 'Объём возобновляемого ресурса, например рыбы или древесины, который можно изымать ежегодно, не уменьшая запас для будущих изъятий.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-total-allowable-catch',
    term: { en: 'total allowable catch (TAC)', ru: 'общий допустимый улов (total allowable catch, TAC)' },
    def: {
      en: 'The maximum total catch of a fish stock that is set for a period, usually from scientific advice on the size of the stock.',
      ru: 'Максимальный общий улов рыбного запаса, установленный на период, обычно на основе научных оценок размера запаса.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-quota',
    term: { en: 'quota', ru: 'квота (quota)' },
    def: {
      en: 'A fixed share of a total catch, harvest or use that is allocated to a country, fleet, vessel or user.',
      ru: 'Фиксированная доля общего улова, добычи или использования, выделенная стране, флоту, судну или пользователю.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'For a renewable stock, a quota must be compatible with replenishment and enforced; setting one is not proof of conservation. For a non-renewable mineral, sustainable yield is not the appropriate benchmark, and an export quota need not cap extraction.',
      ru: 'Для возобновляемого запаса квота должна учитывать пополнение и соблюдаться; её наличие не доказывает сохранение ресурса. Для невозобновляемого минерального сырья устойчивый объём изъятия — неподходящий ориентир, а экспортная квота не обязательно ограничивает добычу.',
    },
  },
  {
    id: 'core-certification',
    term: { en: 'certification', ru: 'сертификация (certification)' },
    def: {
      en: 'Verification by an independent third party that a product comes from a source managed to an agreed standard, usually shown by a label.',
      ru: 'Проверка независимой третьей стороной того, что продукт получен из источника, управляемого по согласованному стандарту; обычно подтверждается маркировкой.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Certification is usually voluntary and does not by itself enforce limits set by law.',
      ru: 'Сертификация обычно добровольна и сама по себе не обеспечивает соблюдение ограничений, установленных законом.',
    },
  },
  {
    id: 'core-demand-management',
    term: { en: 'demand management', ru: 'управление спросом (demand management)' },
    def: {
      en: 'Reducing how much of a resource people use, through prices, rules, information and incentives, rather than only increasing supply.',
      ru: 'Снижение объёма использования ресурса людьми с помощью цен, правил, информации и стимулов, а не только за счёт увеличения предложения.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-water-pricing',
    term: { en: 'water pricing', ru: 'ценообразование на воду (water pricing)' },
    def: {
      en: 'Setting charges for water, for example by volume or through increasing block tariffs. Prices can help cover supply costs and encourage conservation, but do not necessarily reflect scarcity or guarantee a fall in use.',
      ru: 'Установление платы за воду, например по объёму или по прогрессивным блочным тарифам. Цена может помогать покрывать затраты подачи и стимулировать экономию, но не обязательно отражает дефицит или гарантирует сокращение потребления.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-circular-economy',
    term: { en: 'circular economy', ru: 'циркулярная экономика (circular economy)' },
    def: {
      en: 'An economic system that keeps materials and products in use for as long as possible through design, reuse, repair and recycling, so that less waste is produced and fewer new resources are extracted.',
      ru: 'Экономическая система, в которой материалы и продукты используются как можно дольше благодаря проектированию, повторному использованию, ремонту и переработке, поэтому образуется меньше отходов и добывается меньше новых ресурсов.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-recycling-rate',
    term: { en: 'recycling rate', ru: 'уровень переработки (recycling rate)' },
    def: {
      en: 'The percentage of waste generated in a period that is recycled, for example the share of municipal waste that is recycled or composted in a year.',
      ru: 'Процент отходов, образовавшихся за период, который перерабатывается, например доля муниципальных отходов, переработанных или скомпостированных за год.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A high recycling percentage alone does not show that less waste was generated: the total can rise while the percentage improves. Distinguish waste prevention, recycling and final disposal.',
      ru: 'Сам по себе высокий процент переработки не доказывает уменьшения образования отходов: общий объём может расти вместе с долей переработки. Различай предотвращение отходов, переработку и окончательное удаление.',
    },
  },
  {
    id: 'core-payments-ecosystem-services',
    term: { en: 'payments for ecosystem services (PES)', ru: 'платежи за экосистемные услуги (payments for ecosystem services, PES)' },
    def: {
      en: 'Payments to landowners or communities for maintaining ecosystem services, such as water protection, carbon storage or biodiversity, funded by governments, water users or other buyers.',
      ru: 'Платежи землевладельцам или общинам за поддержание экосистемных услуг, например защиты воды, накопления углерода или биоразнообразия, которые финансируются государствами, водопользователями или другими покупателями.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-ecosystem-service',
    term: { en: 'ecosystem service', ru: 'экосистемная услуга (ecosystem service)' },
    def: {
      en: 'A benefit that people obtain from ecosystems, such as food, fresh water, flood control, pollination or climate regulation.',
      ru: 'Выгода, которую люди получают от экосистем, например продукты питания, пресная вода, защита от наводнений, опыление или регулирование климата.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-common-pool-resource',
    term: { en: 'common-pool resource', ru: 'ресурс общего пользования (common-pool resource)' },
    def: {
      en: 'A shared resource from which it is hard to exclude users, but where one user’s use reduces what is left for others, such as a fishery, a forest or an aquifer.',
      ru: 'Общий ресурс, из использования которого трудно исключить пользователей, но использование одним снижает объём, оставшийся другим, например рыбный промысел, лес или водоносный горизонт.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-tragedy-of-the-commons',
    term: { en: 'tragedy of the commons', ru: 'трагедия общих ресурсов (tragedy of the commons)' },
    def: {
      en: 'The tendency for users of an open-access common-pool resource, each pursuing their own interest, to overuse it and so deplete it for everyone (Garrett Hardin, 1968).',
      ru: 'Склонность пользователей ресурса общего пользования с открытым доступом, каждый из которых действует в своих интересах, чрезмерно его использовать и тем самым истощать для всех (Garrett Hardin, 1968).',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The argument describes open access; many common resources are managed by rules that limit overuse.',
      ru: 'Этот аргумент описывает открытый доступ; многие общие ресурсы управляются правилами, которые ограничивают чрезмерное использование.',
    },
  },
  {
    id: 'core-desalination',
    term: { en: 'desalination', ru: 'опреснение (desalination)' },
    def: {
      en: 'Removing salt from sea water or brackish water to produce fresh water, usually by reverse osmosis or distillation; it needs large amounts of energy and leaves a concentrated brine.',
      ru: 'Удаление соли из морской или солоноватой воды для получения пресной воды, обычно обратным осмосом или дистилляцией; требует большого количества энергии и оставляет концентрированный рассол.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-multilateral-environmental-agreement',
    term: { en: 'multilateral environmental agreement', ru: 'многостороннее природоохранное соглашение (multilateral environmental agreement)' },
    def: {
      en: 'A treaty between many countries that sets shared rules or targets for a global environmental problem, such as biodiversity, trade in endangered species, the oceans or the ozone layer.',
      ru: 'Договор между многими странами, который устанавливает общие правила или цели для глобальной экологической проблемы, например для биоразнообразия, торговли исчезающими видами, океанов или озонового слоя.',
    },
    syllabus: 'core-3.3',
    papers: ['P2'],
    src,
  },
  {
    id: "core-sustainable-development-goals",
    term: {
      en: "Sustainable Development Goals (SDGs)",
      ru: "Цели устойчивого развития (ЦУР)"
    },
    def: {
      en: "The UN’s 17 goals adopted in 2015 under the 2030 Agenda, with targets and indicators linking social development and environmental sustainability.",
      ru: "17 целей ООН, принятых в 2015 году в Повестке до 2030 года; задачи и показатели связывают социальное развитие с экологической устойчивостью."
    },
    syllabus: "core-3.3",
    papers: [
      "P2"
    ],
    src: {
      kind: "web",
      title: "UN, SDG 6: target 6.1 and indicator 6.1.1",
      url: "https://sdgs.un.org/goals/goal6"
    },
    pitfall: {
      en: "A goal, target and indicator are different levels. SDG 6.1.1 measures safely managed drinking-water service access, not sustainable withdrawal or automatic enforcement.",
      ru: "Цель, задача и показатель — разные уровни. Показатель 6.1.1 измеряет доступ к безопасно организованному питьевому водоснабжению, а не устойчивость водозабора или исполнение обязательств."
    }
  },
];
