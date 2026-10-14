import type { Term } from '../../../../src/contract/types';

// Option G.3 (Urban environmental and social stresses) terms.
// Definitions are written in our own words from the programme content of G.3 (IB Geography guide, 2017).
// Locators point to the ThinkIB eBook section of this unit (section level; page locators come from the S1 map).
// Hazard, vulnerability, risk and urban resilience carry syllabus G.4: the guide places risk management under G.4 (resilient city design).
const SRC = { kind: 'thinkib' as const, title: 'Option G: Urban Environments (pages 37520, 37586, 37591)', locator: 'Urban Environmental and Social Stress; Urban Micro-climates; Managing Urban Social Deprivation and Crime; guide p. 41' };

export const terms: Term[] = [
  {
    id: 'g-urban-heat-island',
    term: { en: 'urban heat island', ru: 'тепловой остров города (urban heat island)' },
    def: {
      en: 'The warmer air over a built-up area compared with its rural surroundings, strongest at night. Dense buildings and dark, sealed surfaces store heat, and the loss of vegetation removes evaporative cooling.',
      ru: 'Более тёплый воздух над застроенной территорией по сравнению с сельским окружением; сильнее всего проявляется ночью. Плотная застройка и тёмные непроницаемые покрытия накапливают тепло, а потеря растительности лишает город испарительного охлаждения.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The heat island is a difference between the city and its surroundings, not the absolute temperature of the city. It is usually largest at night.',
      ru: 'Тепловой остров — это разница между городом и окружением, а не абсолютная температура города. Обычно она больше всего ночью.',
    },
    sim: 'geo.opt-g-heat',
  },
  {
    id: 'g-albedo',
    term: { en: 'albedo', ru: 'альбедо (albedo)' },
    def: {
      en: 'The proportion of incoming solar radiation that a surface reflects back to the atmosphere. Dark surfaces such as asphalt have a low albedo and absorb more heat; light surfaces reflect more.',
      ru: 'Доля солнечной радиации, которую поверхность отражает обратно в атмосферу. Тёмные поверхности, например асфальт, имеют низкое альбедо и поглощают больше тепла; светлые отражают больше.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Replacing dark roofs with light-coloured materials raises the albedo of a city and reduces the heat its surfaces absorb.',
      ru: 'Замена тёмных крыш светлыми материалами повышает альбедо города и уменьшает количество тепла, которое поглощают поверхности.',
    },
  },
  {
    id: 'g-impermeable-surface',
    term: { en: 'impermeable surface', ru: 'водонепроницаемая поверхность (impermeable surface)' },
    def: {
      en: 'A surface, such as concrete, asphalt or a roof, through which water cannot soak into the ground, so rainfall runs off instead of infiltrating.',
      ru: 'Поверхность (бетон, асфальт, крыша), через которую вода не просачивается в грунт; дождь стекает по ней вместо того, чтобы впитаться.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In a built-up area most rain runs off streets and roofs into drains, which raises the peak flow during a storm.',
      ru: 'В застроенном районе большая часть дождя стекает с улиц и крыш в ливневую канализацию, и пиковый сток во время ливня возрастает.',
    },
  },
  {
    id: 'g-urban-flooding',
    term: { en: 'urban flooding', ru: 'городское наводнение (urban flooding)' },
    def: {
      en: 'Flooding in built-up areas that happens when heavy rain cannot drain away quickly, because impermeable surfaces increase runoff and drainage systems are too small, blocked or overloaded.',
      ru: 'Затопление застроенной территории, когда сильный дождь не успевает уйти: водонепроницаемые поверхности усиливают сток, а дренаж слишком мал, забит или перегружен.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Mumbai, 26 July 2005: 944 mm of rain in 24 hours flooded roads, railway lines and low-lying districts (Indian Meteorological Department, Santacruz station).',
      ru: 'Мумбаи, 26 июля 2005 года: 944 мм осадков за 24 часа затопили дороги, железнодорожные пути и низинные районы (Indian Meteorological Department, станция Santacruz).',
    },
  },
  {
    id: 'g-land-subsidence',
    term: { en: 'land subsidence', ru: 'просадка грунта (land subsidence)' },
    def: {
      en: 'The lowering of the ground surface, gradually or suddenly. In cities it is often caused by groundwater extraction, the weight of buildings and the compaction of soft sediments.',
      ru: 'Опускание поверхности земли, постепенное или внезапное. В городах его часто вызывают откачка грунтовых вод, вес зданий и уплотнение мягких осадков.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Jakarta: intensive groundwater extraction and rapid urbanisation have lowered coastal districts, which raises the risk of flooding at high tide.',
      ru: 'Джакарта: интенсивная откачка грунтовых вод и быстрая урбанизация опустили прибрежные районы, из-за чего возрастает риск затопления в прилив.',
    },
  },
  {
    id: 'g-particulate-pollution',
    term: { en: 'particulate pollution', ru: 'загрязнение твёрдыми частицами (particulate pollution)' },
    def: {
      en: 'Tiny solid or liquid particles suspended in the air, such as PM2.5 (up to 2.5 micrometres across) and PM10 (up to 10 micrometres), mainly from traffic, industry, construction and burning fuel. They can enter the lungs and damage health.',
      ru: 'Мелкие твёрдые или жидкие частицы во взвеси в воздухе, например PM2.5 (до 2,5 микрометра) и PM10 (до 10 микрометров), от транспорта, промышленности, строек и сжигания топлива. Они проникают в лёгкие и вредят здоровью.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-water-stress',
    term: { en: 'water stress', ru: 'водный стресс (water stress)' },
    def: {
      en: 'A situation in which demand for water exceeds the available supply, or poor quality limits its use. In growing cities it increases with population growth, pollution and falling groundwater levels.',
      ru: 'Ситуация, когда спрос на воду превышает доступные запасы, или низкое качество воды ограничивает её использование. В растущих городах он усиливается ростом населения, загрязнением и падением уровня грунтовых вод.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-urban-stress',
    term: { en: 'urban stress', ru: 'городской стресс (urban stress)' },
    def: {
      en: 'The combined pressure on a city and its people from environmental and social problems, such as heat, pollution, flooding, poverty, inequality and the loss of green space when land is redeveloped, which lowers quality of life.',
      ru: 'Совокупная нагрузка на город и его жителей от экологических и социальных проблем (жара, загрязнение, наводнения, бедность, неравенство и потеря зелёных зон при перестройке территорий), которая снижает качество жизни.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    sim: 'geo.opt-g-stress',
  },
  {
    id: 'g-urban-poverty',
    term: { en: 'urban poverty', ru: 'городская бедность (urban poverty)' },
    def: {
      en: 'A lack of income, adequate housing, clean water, sanitation, healthcare or secure work among city residents. It is often concentrated in informal settlements.',
      ru: 'Нехватка дохода, достойного жилья, чистой воды, санитарии, медицинской помощи или стабильной работы у жителей города. Часто сосредоточена в неформальных районах.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-urban-inequality',
    term: { en: 'urban inequality', ru: 'городское неравенство (urban inequality)' },
    def: {
      en: 'Uneven distribution of income, wealth, services and environmental quality between groups or districts within a city, for example between wealthy and low-income neighbourhoods.',
      ru: 'Неравное распределение доходов, имущества, услуг и качества среды между группами людей или районами одного города, например между богатыми и бедными кварталами.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-housing-affordability',
    term: { en: 'housing affordability', ru: 'доступность жилья (housing affordability)' },
    def: {
      en: 'Whether households can pay for adequate housing without cutting spending on food, health or other basic needs. A common measure is the share of household income spent on rent or mortgage payments.',
      ru: 'Может ли домохозяйство оплатить приемлемое жильё, не урезая расходы на еду, здоровье и другие базовые нужды. Часто измеряется долей дохода, которая уходит на аренду или выплаты по ипотеке.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-congestion',
    term: { en: 'congestion', ru: 'транспортные заторы (congestion)' },
    def: {
      en: 'A situation in which demand for road space exceeds its capacity, so vehicles move slowly and stop frequently. This increases travel time, fuel use, noise and air pollution.',
      ru: 'Ситуация, когда спрос на дорожное пространство превышает его пропускную способность: машины едут медленно и часто останавливаются, растут время в пути, расход топлива, шум и загрязнение воздуха.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-hazard',
    term: { en: 'hazard', ru: 'опасность (hazard)' },
    def: {
      en: 'A potentially damaging natural or human-induced event or process, such as a flood, heatwave or land subsidence. A hazard exists whether or not people or property are exposed to it.',
      ru: 'Потенциально разрушительное природное или вызванное человеком событие или процесс, например наводнение, жара или просадка грунта. Опасность существует, даже если людей и имущества рядом нет.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A hazard is not the same as a risk: a flood in an empty area is a hazard, but it creates no risk to people.',
      ru: 'Опасность — не то же самое, что риск: наводнение на пустом участке является опасностью, но риска для людей в нём нет.',
    },
  },
  {
    id: 'g-vulnerability',
    term: { en: 'vulnerability', ru: 'уязвимость (vulnerability)' },
    def: {
      en: 'The degree to which people, property or systems are likely to be harmed by a hazard. It depends on exposure, sensitivity (for example poverty, age or poor health) and the ability to cope and recover.',
      ru: 'Степень, в которой людям, имуществу или системам может быть нанесён ущерб от опасности. Зависит от подверженности, чувствительности (например, бедность, возраст, плохое здоровье) и способности справиться и восстановиться.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-risk',
    term: { en: 'risk', ru: 'риск (risk)' },
    def: {
      en: 'The chance of harm from a hazard. It combines how likely the hazard is with the vulnerability of the people and property exposed to it, so risk is high when both are high.',
      ru: 'Вероятность ущерба от опасности. Сочетает вероятность опасного события и уязвимость людей и имущества, которые ему подвержены: риск высок, когда высоки оба фактора.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-urban-resilience',
    term: { en: 'urban resilience', ru: 'городская устойчивость (urban resilience)' },
    def: {
      en: 'The ability of a city and its people to withstand a hazard or stress, adapt to it and recover, keeping essential services and social networks working.',
      ru: 'Способность города и его жителей выдержать опасность или нагрузку, приспособиться к ней и восстановиться, сохранив работу важнейших служб и социальных связей.',
    },
    syllabus: 'G.4',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Early-warning systems, upgraded drainage and community support networks all increase resilience.',
      ru: 'Системы раннего предупреждения, модернизированный дренаж и сети взаимопомощи в сообществах повышают устойчивость города.',
    },
  },
  {
    id: 'g-slum-clearance',
    term: { en: 'slum clearance', ru: 'снос трущоб (slum clearance)' },
    def: {
      en: 'The demolition of informal or substandard housing, usually to free the land for redevelopment, with the residents moved elsewhere. It can improve housing, but it often displaces poorer residents, who lose their homes and their access to work.',
      ru: 'Снос неформального или некачественного жилья, обычно чтобы освободить землю под перестройку; жителей переселяют. Такие меры могут улучшить жильё, но часто вытесняют более бедных жителей, которые теряют дом и доступ к работе.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Clearance is contested. The land and buildings may improve, but the people who lived there may not be able to return or afford the new homes.',
      ru: 'Снос вызывает споры. Территория и здания могут стать лучше, но прежние жители могут не вернуться или не смочь позволить себе новое жильё.',
    },
  },
  {
    id: 'g-cycle-of-deprivation',
    term: { en: 'cycle of deprivation', ru: 'цикл депривации (cycle of deprivation)' },
    def: {
      en: 'A self-reinforcing pattern in which low income, poor housing, weak education, unemployment and poor health pass from one generation to the next, so that each problem makes the others harder to escape.',
      ru: 'Самоподдерживающаяся схема, при которой низкий доход, плохое жильё, слабое образование, безработица и плохое здоровье передаются из поколения в поколение, и каждая проблема мешает справиться с остальными.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The cycle links several factors. Name the links, for example how weak schooling limits later work, rather than listing the problems.',
      ru: 'Цикл связывает несколько факторов. Называйте связи между ними, например как слабое образование ограничивает будущую работу, а не просто перечисляйте проблемы.',
    },
  },
  {
    id: 'g-crime-and-place',
    term: { en: 'crime and place', ru: 'география преступности (crime and place)' },
    def: {
      en: 'The study of where crime happens and why. It looks at how the design of places, land use and the social make-up of neighbourhoods shape patterns of crime, which are often concentrated in particular streets or districts.',
      ru: 'Изучение того, где и почему происходят преступления. Оно показывает, как устройство мест, землепользование и социальный состав районов формируют картину преступности; преступления часто сосредоточены на отдельных улицах или в отдельных районах.',
    },
    syllabus: 'G.3',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A high crime count in a district does not show that its residents are to blame. Poverty, design and where crime is recorded all shape the pattern.',
      ru: 'Высокое число преступлений в районе не означает, что его жители виноваты. На картину влияют бедность, планировка и то, где фиксируются преступления.',
    },
  },
];
