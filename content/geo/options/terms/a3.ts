import type { Term } from '../../../../src/contract/types';

// Option A, A.3: definitions in our own words, aligned with the key elements of the programme (guide 2017).
// Examples carry a figure only when it was checked: WHO fact sheets (2022, 2023) and the WHO 4th edition with addenda,
// SAnews (24 January 2018), Ohio EPA presentation (27 April 2016), NERC Open Research Archive (BGS and DPHE, 2001).
const SRC = { kind: 'ib-guide' as const, title: 'Geography guide (2017), Option A: Freshwater', locator: 'A.3' };

export const terms: Term[] = [
  {
    id: 'a-water-scarcity',
    term: { en: 'water scarcity', ru: 'дефицит воды (water scarcity)' },
    def: {
      en: 'A shortage of freshwater for the needs of people, farming and industry. It can be physical (too little water) or economic (the water exists, but people cannot afford it or reach it).',
      ru: 'Нехватка пресной воды для нужд людей, сельского хозяйства и промышленности. Он бывает физическим (воды мало) или экономическим (вода есть, но люди не могут её себе позволить или до неё добраться).',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-physical-water-scarcity',
    term: { en: 'physical water scarcity', ru: 'физический дефицит воды (physical water scarcity)' },
    def: {
      en: 'Demand for water is greater than the natural supply of renewable freshwater, or the supply is too variable to rely on. It is most common in arid regions.',
      ru: 'Спрос на воду превышает природные запасы возобновляемой пресной воды, либо эти запасы настолько изменчивы, что на них нельзя положиться. Чаще всего встречается в засушливых регионах.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Physical scarcity is about the amount of renewable water per person. A country can be short of natural water and still have full taps if it relies on desalination.',
      ru: 'Физический дефицит — это количество возобновляемой воды на человека. Страна может испытывать нехватку природной воды и при этом иметь полные краны, если использует опреснение.',
    },
  },
  {
    id: 'a-economic-water-scarcity',
    term: { en: 'economic water scarcity', ru: 'экономический дефицит воды (economic water scarcity)' },
    def: {
      en: 'Water exists in rivers or aquifers, but people cannot get it because of weak investment in pipes, treatment and institutions, or because they cannot pay. The shortage is created by money and governance rather than by nature.',
      ru: 'Вода есть в реках или водоносных горизонтах, но люди не могут её получить из-за слабых инвестиций в трубы, очистку и институты либо потому, что не могут заплатить. Нехватка создана деньгами и управлением, а не природой.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In 2022, 2.2 billion people did not have safely managed drinking-water services (WHO fact sheet, 2023).',
      ru: 'В 2022 году 2,2 млрд человек не имели безопасно управляемых услуг питьевого водоснабжения (факт-шит ВОЗ, 2023).',
    },
    pitfall: {
      en: 'Economic scarcity can exist in wet countries. Missing pipes and treatment can leave people without clean water even when rainfall is high.',
      ru: 'Экономический дефицит может существовать и во влажных странах. Отсутствие труб и очистки оставляет людей без чистой воды даже при обильных осадках.',
    },
  },
  {
    id: 'a-falkenmark-indicator',
    term: { en: 'Falkenmark indicator', ru: 'индикатор Фалькенмарк (Falkenmark indicator)' },
    def: {
      en: 'Renewable freshwater per person per year, used to classify water stress. Below 1,700 m³ per person per year is water stress, below 1,000 m³ is water scarcity, and below 500 m³ is absolute scarcity.',
      ru: 'Возобновляемые пресные воды на одного человека в год, по которым классифицируют водный стресс. Ниже 1 700 м³ на человека в год — водный стресс, ниже 1 000 м³ — дефицит воды, ниже 500 м³ — абсолютный дефицит.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The 1,700 figure is widely quoted, but the 1989 paper usually cited for it does not make that claim (Damkjær and Taylor, 2017). Use the thresholds as a guide, not as a law.',
      ru: 'Цифру 1 700 часто приводят, но статья 1989 года, которую обычно цитируют, этого порога не утверждает (Damkjær and Taylor, 2017). Пороги — это ориентир, а не закон.',
    },
  },
  {
    id: 'a-drought',
    term: { en: 'drought', ru: 'засуха (drought)' },
    def: {
      en: 'A period when water availability is well below normal for that place. It builds up gradually and can last for months or years.',
      ru: 'Период, когда доступность воды заметно ниже нормы для данного места. Нарастает постепенно и может длиться месяцы или годы.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A drought is a deficit relative to normal, not simply a dry season. The same rainfall can be a drought in one region and normal in another.',
      ru: 'Засуха — это дефицит относительно нормы, а не просто сухой сезон. Одни и те же осадки могут считаться засухой в одном регионе и нормой в другом.',
    },
  },
  {
    id: 'a-meteorological-drought',
    term: { en: 'meteorological drought', ru: 'метеорологическая засуха (meteorological drought)' },
    def: {
      en: 'Rainfall well below average over a period, measured against the normal rainfall for that place and season. It is the first stage of a drought.',
      ru: 'Осадков заметно меньше среднего за период, измеряемый относительно нормальных осадков для данного места и сезона. Это первая стадия засухи.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-hydrological-drought',
    term: { en: 'hydrological drought', ru: 'гидрологическая засуха (hydrological drought)' },
    def: {
      en: 'Low water in rivers, lakes, reservoirs and groundwater. It follows the rainfall deficit with a delay, because stores buffer the shortage for a time.',
      ru: 'Низкий уровень воды в реках, озёрах, водохранилищах и подземных водах. Она наступает с задержкой после дефицита осадков, потому что запасы какое-то время сглаживают нехватку.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'It can continue after the rain returns, because reservoirs and aquifers refill slowly.',
      ru: 'Она может продолжаться и после возвращения дождей, потому что водохранилища и водоносные горизонты наполняются медленно.',
    },
  },
  {
    id: 'a-agricultural-drought',
    term: { en: 'agricultural drought', ru: 'сельскохозяйственная засуха (agricultural drought)' },
    def: {
      en: 'Soil moisture too low for crops at a given stage of growth, so yields fall. Its effect depends on the crop, the soil type and the timing of the dry spell.',
      ru: 'Влажность почвы слишком низка для растений на определённой стадии роста, и урожайность падает. Эффект зависит от культуры, типа почвы и времени засушливого периода.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-socio-economic-drought',
    term: { en: 'socio-economic drought', ru: 'социально-экономическая засуха (socio-economic drought)' },
    def: {
      en: 'The point at which water supply cannot meet demand, so people, farms and businesses face shortages and rationing. It links the physical deficit to human demand and to how supply is managed.',
      ru: 'Момент, когда водоснабжение не может удовлетворить спрос, и люди, фермеры и предприятия сталкиваются с нехваткой и нормированием. Эта засуха связывает природный дефицит со спросом людей и с тем, как управляется водоснабжение.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In January 2018 Cape Town’s City government said that a 1.4% drop in dam levels had moved Day Zero from 22 April to 12 April 2018 (SAnews, 24 January 2018).',
      ru: 'В январе 2018 года администрация Кейптауна сообщила, что падение уровня водохранилищ на 1,4% передвинуло «День ноль» (Day Zero) с 22 апреля на 12 апреля 2018 года (SAnews, 24 января 2018).',
    },
  },
  {
    id: 'a-point-source-pollution',
    term: { en: 'point source pollution', ru: 'точечное загрязнение (point source pollution)' },
    def: {
      en: 'Pollution that enters water from one identifiable outlet, such as a sewage pipe or a factory discharge. It is easier to measure and control than diffuse pollution.',
      ru: 'Загрязнение, которое попадает в воду из одного определённого выпуска, например канализационной трубы или заводского сброса. Его легче измерять и контролировать, чем рассеянное загрязнение.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A factory pipe is the easiest source to name, but it is not always the largest one. Check which sources the question means.',
      ru: 'Заводскую трубу назвать легче всего, но она не всегда самый большой источник. Смотрите, какие источники имеет в виду вопрос.',
    },
  },
  {
    id: 'a-diffuse-pollution',
    term: { en: 'diffuse pollution', ru: 'рассеянное загрязнение (diffuse pollution)' },
    def: {
      en: 'Pollution from many small, spread-out sources, such as fertiliser and manure washed off fields, pesticides, urban runoff and road salt. It is harder to trace and control.',
      ru: 'Загрязнение от множества мелких разбросанных источников: удобрения и навоз, смываемые с полей, пестициды, городской сток и дорожная соль. Его труднее отследить и контролировать.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Runoff from a field has no single outlet, so it counts as diffuse even when it reaches the river through one ditch.',
      ru: 'Сток с поля не имеет одного выпуска, поэтому это рассеянное загрязнение, даже если он попадает в реку через одну канаву.',
    },
  },
  {
    id: 'a-sewage',
    term: { en: 'sewage', ru: 'сточные воды (sewage)' },
    def: {
      en: 'Wastewater from homes and some businesses. It carries organic matter, nutrients and pathogens, and it must be treated before release to protect rivers and groundwater.',
      ru: 'Сточные воды из домов и некоторых предприятий. Они несут органику, биогены и патогены, и их нужно очистить до сброса, чтобы защитить реки и подземные воды.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'WHO estimates that about 1 million people die each year from diarrhoea caused by unsafe drinking-water, sanitation and hand hygiene (WHO fact sheet, 2023).',
      ru: 'По оценке ВОЗ, около 1 млн человек ежегодно умирают от диареи из-за небезопасной питьевой воды, санитарии и гигиены рук (факт-шит ВОЗ, 2023).',
    },
  },
  {
    id: 'a-nitrate-pollution',
    term: { en: 'nitrate pollution', ru: 'загрязнение нитратами (nitrate pollution)' },
    def: {
      en: 'Nitrate from fertiliser and manure that leaches through soil into groundwater or runs off into rivers. High nitrate levels harm infants and add to eutrophication.',
      ru: 'Нитраты из удобрений и навоза, которые просачиваются через почву в подземные воды или стекают в реки. Высокие концентрации вредят младенцам и усиливают эвтрофикацию.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'WHO guideline value: 50 mg/L of nitrate as nitrate ion, set to protect bottle-fed infants (WHO, 4th edition with addenda, 2022).',
      ru: 'Норматив ВОЗ: 50 мг/л нитрата (как ион нитрата), установлен для защиты младенцев, которых кормят из бутылочки (ВОЗ, 4-е издание с дополнениями, 2022).',
    },
    pitfall: {
      en: 'Check the basis of a value: nitrate is quoted as nitrate ion (NO3) or as nitrogen (N). To convert NO3 to nitrogen, multiply by 0.226.',
      ru: 'Проверяйте, в каком виде дано значение: нитрат указывают как ион нитрата (NO3) или в пересчёте на азот (N). Чтобы перевести NO3 в азот, умножьте на 0,226.',
    },
  },
  {
    id: 'a-eutrophication',
    term: { en: 'eutrophication', ru: 'эвтрофикация (eutrophication)' },
    def: {
      en: 'Enrichment of a lake or slow river with nutrients, mainly nitrogen and phosphorus. It causes excessive growth of algae and plants; when they die and decay, bacteria use up the dissolved oxygen.',
      ru: 'Обогащение озера или медленной реки биогенами, главным образом азотом и фосфором. Это вызывает избыточный рост водорослей и растений; когда они отмирают и разлагаются, бактерии расходуют растворённый кислород.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Eutrophication is a chain, not only algae: nutrients, growth, decay, then oxygen loss. Fish often die from the oxygen loss, not from the algae themselves.',
      ru: 'Эвтрофикация — это цепочка, а не только водоросли: биогены, рост, разложение, затем потеря кислорода. Рыба часто гибнет от нехватки кислорода, а не от самих водорослей.',
    },
  },
  {
    id: 'a-algal-bloom',
    term: { en: 'algal bloom', ru: 'цветение водорослей (algal bloom)' },
    def: {
      en: 'A rapid build-up of algae or cyanobacteria at the surface of a lake or river, often in warm, nutrient-rich water. Some blooms release toxins that can make water unsafe to drink.',
      ru: 'Быстрое накопление водорослей или цианобактерий у поверхности озера или реки, часто в тёплой и богатой биогенами воде. Некоторые цветения выделяют токсины, из-за которых воду нельзя пить.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Ohio EPA recorded advisories for microcystin in finished drinking water at public water systems in 2013 and 2014 (Ohio EPA, 2016).',
      ru: 'Агентство по охране окружающей среды Огайо (Ohio EPA) зафиксировало предупреждения о микроцистине в питьевой воде на системах водоснабжения в 2013 и 2014 годах (Ohio EPA, 2016).',
    },
    pitfall: {
      en: 'Boiling does not remove microcystin, and it can concentrate the toxin as water evaporates.',
      ru: 'Кипячение не удаляет микроцистин и при испарении воды может его концентрировать.',
    },
  },
  {
    id: 'a-microcystin',
    term: { en: 'microcystin', ru: 'микроцистин (microcystin)' },
    def: {
      en: 'A group of toxins made by some cyanobacteria during algal blooms. They damage the liver and are monitored in drinking water.',
      ru: 'Группа токсинов, которые вырабатывают некоторые цианобактерии во время цветения водорослей. Они повреждают печень и контролируются в питьевой воде.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'WHO provisional guideline value for microcystins in drinking water: 1 µg/L (WHO, 4th edition with addenda, 2022).',
      ru: 'Предварительный норматив ВОЗ для микроцистинов в питьевой воде: 1 мкг/л (ВОЗ, 4-е издание с дополнениями, 2022).',
    },
  },
  {
    id: 'a-salinisation',
    term: { en: 'salinisation', ru: 'засоление (salinisation)' },
    def: {
      en: 'Build-up of salt in soil or water. On irrigated land, water evaporates and leaves salts behind, and poor drainage makes the problem worse. Crop yields fall as salinity rises.',
      ru: 'Накопление соли в почве или воде. На орошаемых землях вода испаряется и оставляет соли, а плохой дренаж усугубляет проблему. С ростом засоления урожайность падает.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Salinisation is often caused by irrigation itself rather than by a factory. Check whether the salt source is natural or human-made.',
      ru: 'Засоление часто вызывает само орошение, а не завод. Проверяйте, природный или антропогенный источник соли.',
    },
  },
  {
    id: 'a-arsenic-contamination',
    term: { en: 'arsenic contamination of groundwater', ru: 'загрязнение подземных вод мышьяком (arsenic contamination of groundwater)' },
    def: {
      en: 'Arsenic that is released naturally from sediments into groundwater, especially in river deltas, where the chemistry of the aquifer frees it. Long-term drinking of arsenic-rich water causes skin lesions and cancers.',
      ru: 'Мышьяк, который природным путём выходит из отложений в подземные воды, особенно в речных дельтах, где химия водоносного горизонта его высвобождает. Длительное питьё воды с мышьяком вызывает поражения кожи и рак.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'WHO estimates that about 140 million people in at least 70 countries drink water with arsenic above the 10 µg/L guideline (WHO fact sheet, 2022).',
      ru: 'По оценке ВОЗ, около 140 млн человек в как минимум 70 странах пьют воду с мышьяком выше норматива 10 мкг/л (факт-шит ВОЗ, 2022).',
    },
    pitfall: {
      en: 'The arsenic here is natural, not industrial. Solutions are safer sources, such as deeper wells, and regular testing, not only the closure of a factory.',
      ru: 'Мышьяк здесь природный, а не промышленный. Решения — это более безопасные источники, например более глубокие скважины, и регулярные анализы, а не только закрытие завода.',
    },
  },
  {
    id: 'a-biochemical-oxygen-demand',
    term: { en: 'biochemical oxygen demand (BOD)', ru: 'биохимическое потребление кислорода, БПК (biochemical oxygen demand, BOD)' },
    def: {
      en: 'The amount of dissolved oxygen that bacteria use to break down organic matter in a water sample over a set time, usually five days. A high BOD means a lot of organic pollution, such as sewage or food waste.',
      ru: 'Количество растворённого кислорода, которое бактерии расходуют на разложение органики в пробе воды за установленное время, обычно пять дней. Высокий БПК означает много органического загрязнения, например от сточных вод или пищевых отходов.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'BOD measures oxygen demand, not the total amount of pollution. Toxic chemicals may change BOD very little even though they harm the river.',
      ru: 'БПК измеряет потребность в кислороде, а не весь объём загрязнения. Токсичные вещества могут почти не менять БПК, хотя вредят реке.',
    },
  },
  {
    id: 'a-e-coli',
    term: { en: 'E. coli', ru: 'кишечная палочка (E. coli)' },
    def: {
      en: 'A bacterium that lives in the gut of humans and animals. Its presence in water shows faecal contamination, so it is used as an indicator that other pathogens may also be present.',
      ru: 'Бактерия, которая живёт в кишечнике человека и животных. Её присутствие в воде показывает фекальное загрязнение, поэтому её используют как индикатор того, что могут присутствовать и другие возбудители.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'WHO drinking-water guideline: E. coli must not be detectable in any 100 mL sample (WHO, 4th edition with addenda, 2022).',
      ru: 'Норматив ВОЗ для питьевой воды: E. coli не должна обнаруживаться ни в одной пробе объёмом 100 мл (ВОЗ, 4-е издание с дополнениями, 2022).',
    },
    pitfall: {
      en: 'An E. coli test shows faecal contamination, not chemical pollution. Clear water can still contain E. coli.',
      ru: 'Анализ на E. coli показывает фекальное загрязнение, а не химическое. Прозрачная вода тоже может содержать E. coli.',
    },
  },
  {
    id: 'a-scarcity-demand-management',
    term: { en: 'demand management', ru: 'управление спросом (demand management)' },
    def: {
      en: 'Measures that reduce how much water is used rather than only increasing supply, such as pricing, restrictions, leak repair, pressure control and efficient irrigation.',
      ru: 'Меры, которые сокращают объём потребляемой воды, а не только увеличивают поставки: тарифы, ограничения, ремонт утечек, регулирование давления и эффективное орошение.',
    },
    syllabus: 'A.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In January 2018 Cape Town was installing thousands of water management devices on the properties of high users and running pressure management across the city (SAnews, 24 January 2018).',
      ru: 'В январе 2018 года Кейптаун устанавливал тысячи устройств управления водой у крупных потребителей и проводил регулирование давления по всему городу (SAnews, 24 января 2018).',
    },
    pitfall: {
      en: 'Demand management is not only restrictions. Leak repair and pricing change use over years, not only during one dry season.',
      ru: 'Управление спросом — это не только ограничения. Ремонт утечек и тарифы меняют потребление на протяжении лет, а не только в один засушливый сезон.',
    },
  },
];
