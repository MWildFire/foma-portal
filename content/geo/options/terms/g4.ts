import type { SourceRef, Term } from '../../../../src/contract/types';

// Terms of Option G.4. Definitions are our own wording of the G.4 content; the source is the ThinkIB eBook section (section level).
const SRC: SourceRef = { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37521, 37639, 37641, 37654, 37666)', locator: 'Sustainable Urban Systems; Urban Growth; Resilient Cities; Ecocity Design and Environmental Strategies; Smart Cities' };

export const terms: Term[] = [
  {
    id: 'g-sustainable-urban-development',
    term: { en: 'sustainable urban development', ru: 'устойчивое городское развитие (sustainable urban development)' },
    def: {
      en: 'Urban growth that meets present needs for housing, jobs, mobility, water and waste while protecting the environment, keeping the economy viable and leaving future generations real options.',
      ru: 'Городской рост, который удовлетворяет нынешние потребности в жилье, работе, передвижении, воде и отходах, защищает окружающую среду, сохраняет экономическую жизнеспособность и оставляет будущим поколениям реальный выбор.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Sustainability is not only clean energy: social equity and affordable housing are part of it.',
      ru: 'Устойчивость — это не только чистая энергия: социальная справедливость и доступное жильё тоже её часть.',
    },
  },
  {
    id: 'g-green-infrastructure',
    term: { en: 'green infrastructure', ru: 'зелёная инфраструктура (green infrastructure)' },
    def: {
      en: 'A network of parks, street trees, green roofs, wetlands and other natural or semi-natural spaces in a city that delivers several services at once, such as cooling, flood control, habitat and recreation.',
      ru: 'Сеть парков, уличных деревьев, зелёных крыш, водно-болотных угодий и других природных или полуприродных пространств города, которая одновременно даёт несколько услуг: охлаждение, защиту от наводнений, среду обитания и отдых.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-bus-rapid-transit',
    term: { en: 'bus rapid transit', ru: 'скоростной автобусный транзит (bus rapid transit)' },
    def: {
      en: 'A high-capacity bus system that runs on dedicated lanes, with fast boarding at stations, pre-paid fares and frequent services, so that it works more like a metro than an ordinary bus.',
      ru: 'Высокопропускная автобусная система, которая работает по выделенным полосам, имеет станции с быстрой посадкой, оплату до посадки и частые рейсы, поэтому работает скорее как метро, чем как обычный автобус.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A bus in ordinary traffic is not BRT; the dedicated lanes and station design are what make it rapid.',
      ru: 'Автобус в обычном потоке машин — это не BRT: скорость дают выделенные полосы и устройство станций.',
    },
  },
  {
    id: 'g-modal-split',
    term: { en: 'modal split', ru: 'модальное распределение поездок (modal split)' },
    def: {
      en: 'The percentage of all trips in an area made by each transport mode, such as car, bus, rail, cycling and walking, over a given period.',
      ru: 'Процентная доля всех поездок на данной территории, совершённых каждым видом транспорта (автомобиль, автобус, рельс, велосипед, пешком) за заданный период.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'State whether the figures count trips or journeys, and which year, before comparing two cities.',
      ru: 'Перед сравнением двух городов укажите, считаются поездки или отдельные перемещения, и за какой год данные.',
    },
  },
  {
    id: 'g-compact-city',
    term: { en: 'compact city', ru: 'компактный город (compact city)' },
    def: {
      en: 'A city with high-density, mixed-use development in which homes, jobs and services are close together, so journeys are shorter and public transport, walking and cycling are practical.',
      ru: 'Город с высокой плотностью застройки и смешанным использованием территории, где жильё, работа и услуги расположены близко друг к другу, поэтому поездки короче, а общественный транспорт, пешие и велосипедные передвижения практичнее.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Compact does not mean tall towers only: good public space and mixed uses are needed too.',
      ru: 'Компактность — это не только высотки: нужны также качественное общественное пространство и смешанные функции.',
    },
  },
  {
    id: 'g-eco-city',
    term: { en: 'eco-city', ru: 'эко-город (eco-city)' },
    def: {
      en: 'A city planned from the start to minimise its environmental footprint, usually through low-carbon energy, efficient buildings, water recycling, waste reduction and sustainable transport.',
      ru: 'Город, спланированный с самого начала так, чтобы свести к минимуму экологический след, обычно за счёт низкоуглеродной энергетики, энергоэффективных зданий, переработки воды, сокращения отходов и устойчивого транспорта.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-smart-city',
    term: { en: 'smart city', ru: 'умный город (smart city)' },
    def: {
      en: 'A city that uses digital technology, sensors and data to manage transport, energy, water and waste more efficiently and to inform residents and planners.',
      ru: 'Город, который использует цифровые технологии, датчики и данные, чтобы эффективнее управлять транспортом, энергией, водой и отходами и информировать жителей и планировщиков.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Technology alone does not make a city sustainable; the data must lead to policy and investment decisions.',
      ru: 'Одни технологии не делают город устойчивым: данные должны приводить к решениям по политике и инвестициям.',
    },
  },
  {
    id: 'g-car-free-zone',
    term: { en: 'car-free zone', ru: 'зона без автомобилей (car-free zone)' },
    def: {
      en: 'An area, such as a street or district, where private motor vehicles are restricted or banned, usually with exceptions for emergency, delivery and disabled access, so that walking, cycling and public transport dominate.',
      ru: 'Территория, например улица или район, где личные автомобили ограничены или запрещены, обычно с исключениями для экстренных служб, доставки и людей с ограниченными возможностями, чтобы преобладали пешеходы, велосипеды и общественный транспорт.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-sustainable-transport',
    term: { en: 'sustainable transport', ru: 'устойчивый транспорт (sustainable transport)' },
    def: {
      en: 'Transport that meets mobility needs while cutting emissions, congestion, pollution and land take, and keeps access fair, mainly by shifting trips to walking, cycling and public transport.',
      ru: 'Транспорт, который удовлетворяет потребности в передвижении, снижая выбросы, пробки, загрязнение и занятие земли и сохраняя справедливый доступ, в основном за счёт переноса поездок на пешие, велосипедные и общественные виды транспорта.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-urban-carbon-footprint',
    term: { en: 'urban carbon footprint', ru: 'углеродный след города (urban carbon footprint)' },
    def: {
      en: 'The total greenhouse gas emissions caused by the activities of a city, such as transport, buildings, energy use, industry and waste, often expressed per person.',
      ru: 'Общий объём выбросов парниковых газов от деятельности города: транспорта, зданий, потребления энергии, промышленности и отходов, часто выраженный на одного жителя.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-community-participation',
    term: { en: 'community participation', ru: 'участие сообщества (community participation)' },
    def: {
      en: 'The involvement of residents in planning and decisions about their area, from consultation and feedback to co-design, so that plans reflect local needs and gain public support.',
      ru: 'Вовлечение жителей в планирование и решения о своём районе, от консультаций и обратной связи до совместного проектирования, чтобы планы отражали местные потребности и получали поддержку.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-circular-economy',
    term: { en: 'circular economy', ru: 'циркулярная экономика (circular economy)' },
    def: {
      en: 'An economic model in which products and materials stay in use for as long as possible through reuse, repair, remanufacturing and recycling, so that both waste and the extraction of new resources fall.',
      ru: 'Экономическая модель, в которой продукты и материалы остаются в обороте как можно дольше благодаря повторному использованию, ремонту, восстановлению и переработке, поэтому сокращаются и отходы, и добыча новых ресурсов.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-trade-off',
    term: { en: 'trade-off', ru: 'компромисс (trade-off)' },
    def: {
      en: 'A situation in which improving one objective, such as lower emissions, reduces another, such as parking or shop trade, so planners must weigh costs and benefits openly.',
      ru: 'Ситуация, в которой улучшение одной цели, например снижения выбросов, ухудшает другую, например удобство парковки или торговлю в магазинах, поэтому планировщики должны открыто взвешивать издержки и выгоды.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A trade-off is not a reason to do nothing; name both sides and say which side the plan favours and why.',
      ru: 'Компромисс — не повод ничего не делать: назовите обе стороны и объясните, какую сторону выбирает план и почему.',
    },
  },
  {
    id: 'g-active-travel',
    term: { en: 'active travel', ru: 'активные виды передвижения (active travel)' },
    def: {
      en: 'Travel powered by people themselves, mainly walking and cycling, for everyday trips such as commuting, shopping or school journeys.',
      ru: 'Передвижение на собственной силе, прежде всего пешком и на велосипеде, для повседневных поездок: на работу, за покупками или в школу.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-sustainable-drainage-systems',
    term: { en: 'sustainable drainage systems', ru: 'устойчивые системы водоотведения (sustainable drainage systems)' },
    def: {
      en: 'Methods of managing rainwater close to where it falls, such as ponds, swales, rain gardens, green roofs and permeable paving, which slow runoff, reduce flood peaks and recharge groundwater.',
      ru: 'Способы управления дождевой водой вблизи места выпадения, например пруды, дренажные канавы, дождевые сады, зелёные крыши и проницаемое покрытие, которые замедляют сток, снижают пики наводнений и пополняют грунтовые воды.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-waste-hierarchy',
    term: { en: 'waste hierarchy', ru: 'иерархия обращения с отходами (waste hierarchy)' },
    def: {
      en: 'A ranking of waste options from most to least preferred: prevention and reduction first, then reuse, recycling and energy recovery, with disposal in landfill as the last resort.',
      ru: 'Ранжирование способов обращения с отходами от самого предпочтительного к наименее предпочтительному: сначала предотвращение и сокращение, затем повторное использование, переработка и извлечение энергии, а захоронение на полигоне — в последнюю очередь.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
];
