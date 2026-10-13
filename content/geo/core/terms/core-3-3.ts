import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 3.3 (resource stewardship). Definitions are in our own words, from the Geography guide (2017), core 3.3.
// No textbook is available yet, so the source has no locator (PLAN.md section 7).
// Concepts already defined in units 1 to 3.2 (renewable and non-renewable resources, resource security, water stress) are not repeated here.
const src: SourceRef = { kind: 'own', title: 'Author wording, Geography guide (2017) core 3.3; textbook locator pending' };

export const terms: Term[] = [
  {
    id: 'core-resource-stewardship',
    term: { en: 'resource stewardship', ru: 'бережное управление ресурсами (resource stewardship)' },
    def: {
      en: 'Managing a resource sustainably so that present and future generations can keep using it: use stays within the renewal or supply capacity of the resource, and the ecosystem that supplies it is protected.',
      ru: 'Устойчивое управление ресурсом, при котором нынешнее и будущие поколения смогут продолжать им пользоваться: использование остаётся в пределах способности ресурса восстанавливаться или возобновляться, а экосистема, которая его даёт, защищена.',
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
      en: 'A quota only protects a resource if the total it divides is at or below the sustainable yield.',
      ru: 'Квота защищает ресурс, только если делимый общий объём не превышает устойчивый объём изъятия.',
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
      en: 'Charging for water in a way that reflects its scarcity and the cost of supplying it, for example through volumetric or increasing block tariffs, so that users have a reason to use less.',
      ru: 'Установление платы за воду, которая отражает её дефицит и стоимость подачи, например по объёму или по прогрессивным блочным тарифам, чтобы у пользователей была причина использовать меньше.',
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
      en: 'A high recycling rate does not reduce total waste; reducing and reusing come before recycling.',
      ru: 'Высокий уровень переработки не уменьшает общий объём отходов: сокращение и повторное использование важнее переработки.',
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
];
