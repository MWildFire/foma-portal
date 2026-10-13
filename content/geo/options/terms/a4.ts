import type { Term } from '../../../../src/contract/types';

// Option A, A.4: definitions in our own words, aligned with the key elements of the programme (guide 2017).
// Page-level locators are added once the textbook pages are checked in ops/sources.
const SRC = { kind: 'ib-guide' as const, title: 'Geography guide (2017), Option A: Freshwater', locator: 'A.4' };
const SIM = 'geo.opt-a-dams' as const;

export const terms: Term[] = [
  {
    id: 'a-integrated-water-resources-management',
    term: { en: 'integrated water resources management (IWRM)', ru: 'комплексное управление водными ресурсами (integrated water resources management, IWRM)' },
    def: {
      en: 'A planning approach that coordinates water, land and related resources across all users (farming, cities, industry, energy and ecosystems) and across administrative boundaries, to balance economic and social gains with healthy ecosystems.',
      ru: 'Подход к планированию, который согласует управление водой, землёй и связанными ресурсами между всеми пользователями (сельское хозяйство, города, промышленность, энергетика и экосистемы) и между административными границами, чтобы сбалансировать экономическую и социальную выгоду со здоровьем экосистем.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In 2025 the UAE Ministry of Energy and Infrastructure cited a UN report that gave the UAE 82% for integrated water resources management.',
      ru: 'В 2025 году Министерство энергетики и инфраструктуры ОАЭ сослалось на доклад ООН, по которому ОАЭ получили 82% за комплексное управление водными ресурсами.',
    },
    pitfall: {
      en: 'IWRM is a process, not a single project. It is judged by coordination, data and governance, not by one new dam or pipe.',
      ru: 'IWRM — это процесс, а не отдельный проект. Его оценивают по координации, данным и управлению, а не по одной новой плотине или трубе.',
    },
  },
  {
    id: 'a-river-basin-management',
    term: { en: 'river basin management', ru: 'управление речным бассейном (river basin management)' },
    def: {
      en: 'Managing the water of a whole drainage basin as one unit, so that abstraction upstream, pollution and dam operation are planned with their effects on users downstream in view.',
      ru: 'Управление водой всего бассейна как единым целым: забор воды выше по течению, загрязнение и работа плотин планируются с учётом последствий для пользователей ниже по течению.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A basin does not follow national borders, so a basin plan needs agreement between all the countries that share the river.',
      ru: 'Бассейн не совпадает с государственными границами, поэтому план бассейна требует соглашения между всеми странами, которые делят реку.',
    },
  },
  {
    id: 'a-demand-side-management',
    term: { en: 'demand-side management', ru: 'управление спросом (demand-side management)' },
    def: {
      en: 'Reducing the amount of water that users need or take, through pricing, efficiency, reuse and leakage control, rather than only increasing supply.',
      ru: 'Снижение объёма воды, который нужен потребителям или который они забирают, за счёт тарифов, эффективности, повторного использования и контроля утечек, а не только за счёт увеличения предложения.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The UAE Water Security Strategy 2036 sets a target to cut total water demand by 21% (UAE Ministry of Energy and Infrastructure, 2025).',
      ru: 'Стратегия водной безопасности ОАЭ до 2036 года ставит цель снизить общий спрос на воду на 21% (Министерство энергетики и инфраструктуры ОАЭ, 2025).',
    },
  },
  {
    id: 'a-water-pricing',
    term: { en: 'water pricing', ru: 'тарифы на воду (water pricing)' },
    def: {
      en: 'Charging users for water so that the price reflects its cost and scarcity. Volumetric and tiered tariffs make heavy use more expensive per cubic metre.',
      ru: 'Установление платы за воду так, чтобы цена отражала её стоимость и дефицит. Тарифы, зависящие от объёма, и ступенчатые тарифы делают большой расход дороже в пересчёте на кубометр.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Price cuts demand only where users can respond. People reduce drinking and washing very little, even when prices rise.',
      ru: 'Цена снижает спрос только там, где потребители могут на неё реагировать. Питьё и гигиену люди сокращают очень мало, даже когда цены растут.',
    },
  },
  {
    id: 'a-non-revenue-water',
    term: { en: 'non-revenue water', ru: 'неучтённая вода (non-revenue water)' },
    def: {
      en: 'Water that enters a supply network but is never billed, because it is lost through leaks, theft or metering errors.',
      ru: 'Вода, которая поступает в сеть водоснабжения, но не оплачивается, потому что теряется из-за утечек, хищений или ошибок учёта.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Non-revenue water is not only a financial loss. It is water that was treated and pumped, then lost before anyone used it.',
      ru: 'Неучтённая вода — это не только финансовые потери. Это вода, которую очистили и перекачали, а потом потеряли, так и не использовав.',
    },
  },
  {
    id: 'a-drip-irrigation',
    term: { en: 'drip irrigation', ru: 'капельное орошение (drip irrigation)' },
    def: {
      en: 'Irrigation that delivers water slowly, drop by drop, through pipes at or near the plant roots. Less water is lost to evaporation and runoff than with flood irrigation.',
      ru: 'Орошение, при котором вода медленно подаётся по трубкам, капля за каплей, к корням растений. По сравнению с поливом затоплением теряется меньше воды на испарение и сток.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Drip irrigation saves water only if farmers do not respond by planting a larger area, which can cancel out the saving.',
      ru: 'Капельное орошение экономит воду, только если фермеры не расширяют посевы: иначе экономия сводится на нет.',
    },
  },
  {
    id: 'a-water-recycling',
    term: { en: 'water recycling (water reuse)', ru: 'повторное использование воды (water recycling)' },
    def: {
      en: 'Treating used water (wastewater) to a standard suitable for another use, such as irrigation, industry or, after advanced treatment, drinking.',
      ru: 'Очистка использованной воды (сточных вод) до уровня, пригодного для другого использования: полива, промышленности или, после глубокой очистки, питья.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Singapore supplies NEWater, reclaimed wastewater, as one of its four national taps (PUB).',
      ru: 'Сингапур подаёт NEWater, очищенные сточные воды, как один из четырёх национальных источников воды (PUB).',
    },
    pitfall: {
      en: 'Reused water still needs treatment and monitoring. The standard depends on the use, so water for irrigation and water for drinking are treated to different levels.',
      ru: 'Повторно используемая вода всё равно требует очистки и контроля. Стандарт зависит от назначения, поэтому воду для полива и для питья очищают до разного уровня.',
    },
  },
  {
    id: 'a-supply-augmentation',
    term: { en: 'supply augmentation', ru: 'увеличение предложения воды (supply augmentation)' },
    def: {
      en: 'Adding new water to a system, for example through dams, desalination, transfers or recharge schemes, rather than using less water.',
      ru: 'Увеличение объёма доступной воды за счёт новых источников — плотин, опреснения, переброски или пополнения водоносных горизонтов, а не за счёт снижения потребления.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Supply schemes take years to build and carry their own energy, cost and environmental costs, so they are not a quick fix.',
      ru: 'Проекты предложения строятся годами и несут собственные издержки в энергии, деньгах и экологии, поэтому это не быстрое решение.',
    },
  },
  {
    id: 'a-reservoir',
    term: { en: 'reservoir', ru: 'водохранилище (reservoir)' },
    def: {
      en: 'A stored body of water, usually behind a dam, that holds river water for supply, irrigation, hydroelectricity or flood control.',
      ru: 'Запас воды, обычно за плотиной, в котором хранится речная вода для водоснабжения, орошения, гидроэлектроэнергии или защиты от паводков.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The reservoir behind Ethiopia’s Grand Ethiopian Renaissance Dam is designed to hold about 74 billion cubic metres (UN News, 2020).',
      ru: 'Водохранилище за Великой эфиопской плотиной возрождения рассчитано примерно на 74 млрд кубометров (UN News, 2020).',
    },
    sim: SIM,
  },
  {
    id: 'a-reservoir-sedimentation',
    term: { en: 'reservoir sedimentation', ru: 'заиление водохранилища (reservoir sedimentation)' },
    def: {
      en: 'The gradual build-up of silt and sand in a reservoir. It reduces storage capacity over time and traps sediment that would otherwise reach the river and delta downstream.',
      ru: 'Постепенное накопление ила и песка в водохранилище. Со временем это уменьшает его объём и задерживает наносы, которые иначе дошли бы до реки и дельты ниже по течению.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The loss of storage is slow, so a reservoir can look fine for decades and still lose a large share of its capacity later.',
      ru: 'Потеря объёма идёт медленно, поэтому водохранилище может выглядеть нормально десятилетиями, а потом потерять значительную часть ёмкости.',
    },
    sim: SIM,
  },
  {
    id: 'a-environmental-flow',
    term: { en: 'environmental flow', ru: 'экологический сток (environmental flow)' },
    def: {
      en: 'The amount, timing and quality of water that a river must keep in order to support its ecosystems, such as fish migration, floodplain wetlands and the estuary.',
      ru: 'Объём, сроки и качество воды, которые река должна сохранять, чтобы поддерживать экосистемы: миграцию рыб, пойменные водно-болотные угодья и устье.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A minimum flow is not enough on its own. Seasonal patterns, such as floods and low flows, matter for many species.',
      ru: 'Одного минимального стока недостаточно. Для многих видов важны сезонные особенности, например паводки и межень.',
    },
  },
  {
    id: 'a-resettlement',
    term: { en: 'resettlement', ru: 'переселение (resettlement)' },
    def: {
      en: 'Moving people out of homes or land that are flooded or taken for a project, such as a reservoir, and into new housing, usually with compensation for lost land, income and community ties.',
      ru: 'Перемещение людей из домов или с земли, которые затопляются или отводятся под проект, например водохранилище, в новое жильё; обычно с компенсацией за утраченную землю, доход и связи в общине.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Resettlement is a cost of dams that is often underestimated. Lost livelihoods and community ties matter as much as the number of homes moved.',
      ru: 'Переселение — издержка плотин, которую часто недооценивают. Утраченные источники дохода и связи в общине важны не меньше, чем число перемещённых домов.',
    },
  },
  {
    id: 'a-desalination',
    term: { en: 'desalination', ru: 'опреснение (desalination)' },
    def: {
      en: 'Removing salt from seawater or brackish water to produce fresh water, usually by reverse osmosis (forcing water through a membrane) or by distillation.',
      ru: 'Удаление соли из морской или солоноватой воды для получения пресной воды; чаще всего используют обратный осмос (продавливание воды через мембрану) или дистилляцию.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'By 2025 Singapore had five desalination plants. The fifth, Jurong Island, was opened in 2022 (Singapore Ministry of Sustainability and the Environment, 2025).',
      ru: 'К 2025 году в Сингапуре работало пять опреснительных заводов. Пятый, Jurong Island, открыт в 2022 году (Министерство устойчивого развития и окружающей среды Сингапура, 2025).',
    },
    pitfall: {
      en: 'Desalination provides water without relying on rain, but it is energy-intensive and produces brine. It is a supply option with costs, not free water.',
      ru: 'Опреснение даёт воду независимо от дождей, но требует много энергии и даёт рассол. Это вариант предложения с издержками, а не бесплатная вода.',
    },
  },
  {
    id: 'a-brine',
    term: { en: 'brine', ru: 'рассол (brine)' },
    def: {
      en: 'The concentrated salt water left over after desalination. It is saltier than seawater and must be diluted or spread out when it is discharged.',
      ru: 'Концентрированный солёный раствор, который остаётся после опреснения. Он солонее морской воды, и при сбросе его нужно разбавлять или рассредоточивать.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Brine does not disappear. If it sinks or stays in one place, it can harm marine life on the seabed.',
      ru: 'Рассол никуда не девается. Если он опускается на дно или задерживается в одном месте, он вредит морским организмам.',
    },
  },
  {
    id: 'a-inter-basin-transfer',
    term: { en: 'inter-basin transfer', ru: 'межбассейновая переброска воды (inter-basin transfer)' },
    def: {
      en: 'Moving water by canal, pipe or tunnel from a river basin with a surplus to a basin where demand is greater.',
      ru: 'Перемещение воды по каналу, трубе или тоннелю из речного бассейна с избытком в бассейн, где спрос больше.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'China’s South-North Water Diversion Project diverted more than 76.7 billion cubic metres to northern China over its first ten years (State Council Information Office, 12 December 2024).',
      ru: 'Проект переброски воды «Юг — Север» в Китае передал на север страны более 76,7 млрд кубометров воды за первые десять лет (Информационное бюро Государственного совета КНР, 12 декабря 2024 года).',
    },
    pitfall: {
      en: 'A transfer moves the problem as well as the water. The source basin loses flow, and the receiving city still has to cut leaks and waste.',
      ru: 'Переброска переносит не только воду, но и проблему: бассейн-источник теряет сток, а город-получатель всё равно должен сокращать утечки и потери.',
    },
  },
  {
    id: 'a-managed-aquifer-recharge',
    term: { en: 'managed aquifer recharge', ru: 'управляемое пополнение водоносных горизонтов (managed aquifer recharge)' },
    def: {
      en: 'Deliberately adding water to an aquifer, for example through infiltration basins or injection wells, so that it is stored underground and can be pumped later.',
      ru: 'Целенаправленное добавление воды в водоносный горизонт, например через инфильтрационные бассейны или нагнетательные скважины, чтобы вода хранилась под землёй и её можно было откачать позже.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Recharge needs suitable rock, clean water and time. Pumping is still unsustainable if extraction stays higher than recharge.',
      ru: 'Пополнению нужны подходящие породы, чистая вода и время. Откачка остаётся неустойчивой, если изъятие постоянно выше пополнения.',
    },
  },
  {
    id: 'a-rainwater-harvesting',
    term: { en: 'rainwater harvesting', ru: 'сбор дождевой воды (rainwater harvesting)' },
    def: {
      en: 'Collecting rain from roofs or ground surfaces and storing it in tanks or ponds for later use, often for irrigation, toilets or, after treatment, drinking.',
      ru: 'Сбор дождя с крыш или поверхности земли и хранение его в баках или прудах для последующего использования: полива, туалетов или, после очистки, питья.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Yield depends on rainfall and roof area. One millimetre of rain on one square metre gives one litre, so very dry areas harvest little.',
      ru: 'Объём зависит от осадков и площади крыши. Один миллиметр дождя на одном квадратном метре даёт один литр, поэтому в очень засушливых районах собирается мало.',
    },
  },
  {
    id: 'a-transboundary-river',
    term: { en: 'transboundary river', ru: 'трансграничная река (transboundary river)' },
    def: {
      en: 'A river that crosses, or forms, an international boundary, so that two or more countries share its water.',
      ru: 'Река, которая пересекает или образует государственную границу, поэтому её воду делят два и более государства.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The Indus, the Nile and the Mekong are all transboundary rivers.',
      ru: 'Инд, Нил и Меконг — трансграничные реки.',
    },
  },
  {
    id: 'a-riparian-state',
    term: { en: 'riparian state', ru: 'прибрежное государство (riparian state)' },
    def: {
      en: 'A country that lies on a river or within its basin and shares the rights and duties to use the river’s water fairly.',
      ru: 'Государство, которое лежит на реке или в её бассейне и разделяет права и обязанности по справедливому использованию её воды.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Being upstream gives control over the flow, but not the right to ignore the needs of states downstream.',
      ru: 'Положение выше по течению даёт контроль над стоком, но не право игнорировать потребности государств ниже по течению.',
    },
  },
  {
    id: 'a-groundwater-overabstraction',
    term: { en: 'groundwater overabstraction', ru: 'сверхизъятие подземных вод (groundwater overabstraction)' },
    def: {
      en: 'Pumping groundwater faster than it is naturally replenished, so that water levels fall and the aquifer can become depleted.',
      ru: 'Откачка подземных вод быстрее, чем они естественным образом восполняются; уровень воды падает, и водоносный горизонт может истощиться.',
    },
    syllabus: 'A.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'FAO’s AQUASTAT country profile states that irrigation in the United Arab Emirates is completely based on groundwater.',
      ru: 'По страновому профилю FAO AQUASTAT, орошение в Объединённых Арабских Эмиратах полностью основано на подземных водах.',
    },
  },
];
