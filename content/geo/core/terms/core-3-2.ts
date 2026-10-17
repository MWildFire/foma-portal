import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 3.2 (impacts of changing trends in resource consumption). Definitions are in our own words, from the Geography guide (2017), core 3.2.
// The ThinkIB eBook has no page numbers, so the locator names the eBook sections that cover the subtopic.
// Two concepts that other topics already define are not repeated here: resource security (core-3-1) and water security (core-2-2).
const src: SourceRef = { kind: 'thinkib', title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 3 › 8a–8c' };

export const terms: Term[] = [
  {
    id: 'core-resource-depletion',
    term: { en: 'resource depletion', ru: 'истощение ресурсов (resource depletion)' },
    def: {
      en: 'The reduction of a resource stock because it is used or extracted faster than it can be replaced. Stocks of non-renewable resources are eventually exhausted; for renewable resources, depletion occurs when use exceeds regeneration.',
      ru: 'Сокращение запаса ресурса из-за того, что его используют или добывают быстрее, чем он может восполниться. Запасы невозобновляемых ресурсов в конце концов исчерпываются; у возобновляемых истощение наступает, когда использование превышает восстановление.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Depletion is a fall in the stock itself; pollution and habitat loss are separate impacts that can accompany extraction.',
      ru: 'Истощение — это сокращение самого запаса; загрязнение и потеря среды обитания — отдельные последствия, которые могут сопровождать добычу.',
    },
  },
  {
    id: 'core-groundwater-depletion',
    term: { en: 'groundwater depletion', ru: 'истощение подземных вод (groundwater depletion)' },
    def: {
      en: 'The fall in the water stored in an aquifer, shown by lower water-table levels, which happens when abstraction from the aquifer is greater than its natural recharge.',
      ru: 'Сокращение запасов воды в водоносном горизонте (aquifer), которое проявляется в понижении уровня грунтовых вод и происходит, когда отбор воды из горизонта больше его естественного пополнения.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Recharge is often very slow, so a depleted aquifer can take decades or centuries to refill; pumping faster for a few years does not make it renewable.',
      ru: 'Пополнение часто идёт очень медленно: истощённый горизонт может восстанавливаться десятилетиями или столетиями, и ускоренная откачка на несколько лет не делает его возобновляемым.',
    },
  },
  {
    id: 'core-water-withdrawal',
    term: { en: 'water withdrawal', ru: 'забор воды (water withdrawal)' },
    def: {
      en: 'The volume of water taken from a river, lake or aquifer for use. Part of it is consumed, for example by evaporation or by becoming part of a product, and some returns as return flow. Its destination, timing and quality depend on the system boundary; it need not return to the same source.',
      ru: 'Объём воды, взятой из реки, озера или водоносного горизонта для использования. Часть воды расходуется (например, испаряется или становится частью продукта), часть возвращается в виде возвратного стока. Куда, когда и какого качества вернётся вода, зависит от системы; возврат в тот же источник не гарантирован.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Withdrawal is not consumption: a power plant can withdraw a large volume for cooling and return most of it to the river.',
      ru: 'Забор — это не потребление: электростанция может забрать большой объём воды для охлаждения и вернуть почти всё в реку.',
    },
  },
  {
    id: 'core-water-stress',
    term: { en: 'water stress', ru: 'водный стресс (water stress)' },
    def: {
      en: 'A situation in which demand is high relative to available water. SDG 6.4.2 measures total freshwater withdrawals / (total renewable freshwater resources − environmental flow requirements) × 100. Water needed to sustain ecosystems is reserved in the denominator; the denominator must be positive.',
      ru: 'Высокая нагрузка на водные ресурсы относительно доступного объёма. Индикатор ЦУР 6.4.2 = общий забор пресной воды / (возобновляемые пресноводные ресурсы − экологические потребности в стоке) × 100. Из знаменателя исключают воду, необходимую экосистемам; знаменатель должен быть положительным.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src: {"kind": "web", "title": "FAO SDG indicator 6.4.2; official EN/RU definition including environmental flow requirements", "url": "https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/642-water-stress/en"},
    pitfall: {
      en: 'Water stress describes the balance of demand and supply, so a country with high rainfall can still be under water stress if its demand is high.',
      ru: 'Водный стресс описывает баланс спроса и предложения: страна с большим количеством осадков может испытывать водный стресс, если её спрос высок.',
    },
  },
  {
    id: 'core-water-diversion',
    term: { en: 'water diversion', ru: 'переброска воды (water diversion)' },
    def: {
      en: 'The redirection of river or groundwater flow away from its natural course, for example through canals, pipelines or dams, so that less water reaches the downstream area.',
      ru: 'Отведение речного или подземного стока от естественного русла, например каналами, трубопроводами или плотинами, из-за чего к нижерасположенной территории поступает меньше воды.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Diversion moves water to another place; the damage is the flow lost downstream, not the disappearance of the water from the planet.',
      ru: 'Переброска перемещает воду в другое место; ущерб — это утраченный сток ниже по течению, а не исчезновение воды с планеты.',
    },
  },
  {
    id: 'core-deforestation',
    term: { en: 'deforestation', ru: 'обезлесение (deforestation)' },
    def: {
      en: 'The permanent clearance of forest for another land use, such as farmland, ranching, agricultural plantations such as oil palm, mining or roads, so that the land is no longer forest.',
      ru: 'Постоянная вырубка леса ради другого вида использования земли (пашня, пастбища, сельскохозяйственные плантации, например масличной пальмы, добыча полезных ископаемых, дороги), после которой участок перестаёт быть лесом.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Logging followed by natural regrowth or replanting as forest is not deforestation; the land must change to another use.',
      ru: 'Вырубка с последующим естественным восстановлением или посадкой леса обезлесением не является; участок должен перейти к другому виду использования.',
    },
  },
  {
    id: 'core-habitat-loss',
    term: { en: 'habitat loss', ru: 'потеря среды обитания (habitat loss)' },
    def: {
      en: 'The destruction, fragmentation or degradation of the natural places where species live, which reduces the area and quality of habitat and can lead to a fall in biodiversity.',
      ru: 'Разрушение, дробление или деградация природных мест обитания видов, которые сокращают площадь и качество среды и ведут к снижению биоразнообразия.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Fragmentation can isolate populations even when the total area lost looks small.',
      ru: 'Дробление может изолировать популяции, даже если общая потерянная площадь выглядит небольшой.',
    },
  },
  {
    id: 'core-eutrophication',
    term: { en: 'eutrophication', ru: 'эвтрофикация (eutrophication)' },
    def: {
      en: 'The enrichment of water with nutrients, such as nitrates and phosphates from fertilisers and waste, which causes algal blooms; when the algae decay, oxygen is used up and aquatic life can die.',
      ru: 'Обогащение воды биогенными веществами, например нитратами и фосфатами из удобрений и стоков, которое вызывает цветение водорослей; при их разложении расходуется кислород и гибнут водные организмы.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The key harm is low oxygen after the algae decay, not the colour of the water.',
      ru: 'Главный вред — недостаток кислорода после разложения водорослей, а не цвет воды.',
    },
  },
  {
    id: 'core-price-volatility',
    term: { en: 'price volatility', ru: 'волатильность цен (price volatility)' },
    def: {
      en: 'Large and frequent changes in the price of a commodity over short periods, which make prices hard to predict for producers, consumers and governments.',
      ru: 'Крупные и частые колебания цены товара за короткие периоды, которые затрудняют прогноз цен для производителей, потребителей и государств.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Volatility is about the size and frequency of changes, not the level: a high price that stays stable is not volatile.',
      ru: 'Волатильность — это размах и частота изменений, а не уровень цены: высокая, но стабильная цена волатильной не является.',
    },
  },
  {
    id: 'core-supply-shock',
    term: { en: 'supply shock', ru: 'шок предложения (supply shock)' },
    def: {
      en: 'An unexpected change in the supply of a good or resource. An adverse shock, such as drought or a disrupted trade route, reduces supply and tends to raise price; a favourable productivity shock can increase supply and tend to lower price, other things equal.',
      ru: 'Непредвиденное изменение предложения товара или ресурса. Неблагоприятный шок, например засуха или нарушение торгового маршрута, сокращает предложение и обычно повышает цену; благоприятный скачок производительности может увеличить предложение и снизить цену при прочих равных условиях.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src: {"kind": "web", "title": "Bank of England, Megan Greene (2025), positive and negative supply shocks", "url": "https://www.bankofengland.co.uk/speech/2025/september/megan-greene-university-of-glasgow-business-school"},
    pitfall: {
      en: 'A change in demand is distinct. An adverse supply shock shifts supply left; a favourable one shifts it right. The war and drought examples in this lesson are adverse shocks.',
      ru: 'Изменение спроса — другое явление. Неблагоприятный шок сдвигает предложение влево, благоприятный — вправо. Война и засуха в этой теме — примеры неблагоприятных шоков.',
    },
  },
  {
    id: 'core-energy-dependence',
    term: { en: 'energy dependence', ru: 'энергетическая зависимость (energy dependence)' },
    def: {
      en: 'The extent to which a country relies on imported energy to meet its needs, so that a disruption to those imports threatens its energy supply.',
      ru: 'Степень, в которой страна полагается на импорт энергии для удовлетворения своих потребностей, поэтому перебои с импортом угрожают её энергоснабжению.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Dependence also depends on concentration: a country that imports from many suppliers is less exposed than one that relies on a single supplier.',
      ru: 'Зависимость определяется и концентрацией поставок: страна, которая импортирует у многих поставщиков, меньше уязвима, чем та, что зависит от одного.',
    },
  },
  {
    id: 'core-export-restriction',
    term: { en: 'export restriction', ru: 'ограничение экспорта (export restriction)' },
    def: {
      en: 'A government measure, such as an export ban, quota or tax, that limits the sale of a good abroad so that more of it stays in the domestic market, usually to protect domestic supply and prices.',
      ru: 'Мера правительства (запрет, квота или пошлина на экспорт), которая ограничивает продажу товара за границу, чтобы больше его оставалось на внутреннем рынке, обычно для защиты внутренних поставок и цен.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'An export restriction protects the exporting country but can raise prices and reduce supply for importing countries.',
      ru: 'Ограничение экспорта защищает страну-экспортёра, но может поднять цены и сократить поставки для стран-импортёров.',
    },
  },
  {
    id: 'core-resource-insecurity',
    term: { en: 'resource insecurity', ru: 'ресурсная небезопасность (resource insecurity)' },
    def: {
      en: 'The condition in which a population has unreliable access to enough food, water or energy at an affordable price, so that shortages, price shocks or supply disruptions threaten its wellbeing.',
      ru: 'Состояние, при котором население имеет ненадёжный доступ к достаточному количеству продовольствия, воды или энергии по доступной цене, поэтому дефициты, ценовые шоки или перебои поставок угрожают его благополучию.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Insecurity is about reliable access at an affordable price; a country can hold reserves and still be insecure if its access is cut off.',
      ru: 'Небезопасность — это ненадёжный доступ по доступной цене; страна может иметь запасы и всё равно оставаться уязвимой, если доступ к ним прерван.',
    },
  },
  {
    id: 'core-water-food-energy-nexus',
    term: { en: 'water–food–energy nexus', ru: 'связка «вода–продовольствие–энергия» (water–food–energy nexus)' },
    def: {
      en: 'The interdependence of water, food and energy systems: the use or shortage of one resource affects the availability, cost and sustainability of the other two.',
      ru: 'Взаимозависимость систем воды, продовольствия и энергии: использование или дефицит одного ресурса влияет на доступность, стоимость и устойчивость двух других.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Name the link, such as irrigation needing energy for pumping, rather than listing the three resources side by side.',
      ru: 'Называйте связь, например, то, что орошение требует энергии для перекачки воды, а не просто перечисляйте три ресурса.',
    },
    sim: 'geo.core-water-food-energy',
  },
  {
    id: 'core-development-induced-displacement',
    term: { en: 'development-induced displacement', ru: 'вынужденное перемещение из-за проектов развития (development-induced displacement)' },
    def: {
      en: 'The forced movement of people from their homes or land because of large projects such as mines, dams, water transfers or plantations.',
      ru: 'Принудительное переселение людей из своих домов или с земли из-за крупных проектов: шахт, плотин, переброски воды или плантаций.',
    },
    syllabus: 'core-3.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'It is forced movement caused by a project; people who move for work by choice are not displaced in this sense.',
      ru: 'Это принудительное переселение из-за проекта; люди, которые переезжают на работу по собственному выбору, в этом смысле не перемещены.',
    },
  },
];
