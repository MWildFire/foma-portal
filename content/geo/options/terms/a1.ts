import type { Term } from '../../../../src/contract/types';

// Option A, A.1: definitions in our own words, aligned with the key elements of the programme (guide 2017).
// Examples are added only where the figure, its year and its source are checked (see cases/a1.ts).
const SRC = { kind: 'thinkib' as const, title: 'Option A: Drainage Basin Hydrology and Geomorphology (page 43412)', locator: 'The Water Budget; River Processes; Upper, Middle and Lower Course Landforms' };

export const terms: Term[] = [
  {
    id: 'a-drainage-basin',
    term: { en: 'drainage basin', ru: 'речной бассейн (drainage basin)' },
    def: {
      en: 'The area of land from which a river and all its tributaries collect water. Its edge is the watershed, and all water inside it drains to one outlet.',
      ru: 'Территория, с которой река и все её притоки собирают воду. Её граница — водораздел; вся вода внутри бассейна стекает к одной точке — выходу (outlet).',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The basin is the whole land area that drains to the outlet, not only the river channel. Land beside a tributary counts too.',
      ru: 'Бассейн — это вся площадь суши, которая стекает к выходу, а не только русло реки. Территория рядом с притоком тоже входит в бассейн.',
    },
  },
  {
    id: 'a-watershed',
    term: { en: 'watershed', ru: 'водораздел (watershed)' },
    def: {
      en: 'The line of higher ground that separates one drainage basin from the next. Rain that falls on either side of it drains to different rivers.',
      ru: 'Линия возвышенности, которая отделяет один речной бассейн от соседнего. Дождь, выпавший по разные стороны от неё, стекает в разные реки.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A watershed is a line on the land, not a river. Use the word for the boundary and "basin" for the area inside it.',
      ru: 'Водораздел — это линия на местности, а не река. Слово «водораздел» обозначает границу, а «бассейн» — площадь внутри неё.',
    },
  },
  {
    id: 'a-open-system',
    term: { en: 'open system', ru: 'открытая система (open system)' },
    def: {
      en: 'A system that exchanges both energy and matter with its surroundings. A drainage basin is an open system: water, sediment and energy cross its boundary.',
      ru: 'Система, которая обменивается с окружением и энергией, и веществом. Речной бассейн — открытая система: через его границы проходят вода, наносы и энергия.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Do not treat the basin as closed. Water also leaves through evapotranspiration and through groundwater that flows beneath the watershed.',
      ru: 'Не считайте бассейн замкнутым. Вода уходит и через испарение, и через подземные воды, которые протекают под водоразделом.',
    },
  },
  {
    id: 'a-water-balance',
    term: { en: 'water balance', ru: 'водный баланс (water balance)' },
    def: {
      en: 'The account of water entering and leaving a basin over a set period: $P = Q + E + \\Delta S$, where P is precipitation, Q is discharge, E is evapotranspiration and ΔS is the change in storage.',
      ru: 'Учёт воды, которая поступает в бассейн и уходит из него за определённый период: $P = Q + E + \\Delta S$, где P — осадки, Q — сток (расход реки), E — эвапотранспирация, ΔS — изменение запасов воды.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'ΔS is negative when storage falls. Check the sign before you say whether the basin gained or lost water.',
      ru: 'ΔS отрицательно, когда запасы уменьшаются. Проверьте знак, прежде чем писать, что бассейн получил или потерял воду.',
    },
  },
  {
    id: 'a-evapotranspiration',
    term: { en: 'evapotranspiration', ru: 'эвапотранспирация (evapotranspiration)' },
    def: {
      en: 'The total loss of water to the atmosphere through evaporation from water, soil and wet surfaces, and through transpiration from plants.',
      ru: 'Суммарная потеря воды в атмосферу за счёт испарения с воды, почвы и влажных поверхностей и за счёт транспирации растений.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Evapotranspiration is an output of the basin. Water lost this way never reaches the river as discharge.',
      ru: 'Эвапотранспирация — это выход воды из бассейна. Вода, потерянная так, не попадает в реку как сток.',
    },
  },
  {
    id: 'a-infiltration',
    term: { en: 'infiltration', ru: 'инфильтрация (infiltration)' },
    def: {
      en: 'The entry of water from the ground surface into the soil. The rate is limited by the soil’s capacity to absorb water; rain that arrives faster than this runs off over the surface.',
      ru: 'Проникновение воды с поверхности земли в почву. Скорость ограничена способностью почвы впитывать воду; дождь, который поступает быстрее, стекает по поверхности.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Infiltration is the entry of water into the soil. Its movement through the soil afterwards is percolation or throughflow.',
      ru: 'Инфильтрация — это поступление воды в почву. Дальнейшее её движение в почве — это перколяция или почвенный сток.',
    },
  },
  {
    id: 'a-percolation',
    term: { en: 'percolation', ru: 'перколяция (percolation)' },
    def: {
      en: 'The slow downward movement of water through soil and rock to the water table, where it recharges groundwater.',
      ru: 'Медленное движение воды вниз через почву и породу до уровня грунтовых вод, где она пополняет подземные воды.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Percolation moves water down, while throughflow moves it sideways. Name the direction correctly in your answer.',
      ru: 'Перколяция переносит воду вниз, а почвенный сток — вбок. Указывайте направление верно в ответе.',
    },
  },
  {
    id: 'a-throughflow',
    term: { en: 'throughflow', ru: 'почвенный сток (throughflow)' },
    def: {
      en: 'Water that moves sideways through the upper soil, above the water table, and reaches the river channel. It is usually slower than overland flow but faster than groundwater flow.',
      ru: 'Вода, которая движется вбок по верхнему слою почвы, над уровнем грунтовых вод, и попадает в русло реки. Обычно она медленнее поверхностного стока, но быстрее подземного.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Throughflow stays in the soil. Water that flows over the ground surface is overland flow, not throughflow.',
      ru: 'Почвенный сток остаётся в почве. Вода, которая течёт по поверхности земли, — это поверхностный сток, а не почвенный.',
    },
  },
  {
    id: 'a-overland-flow',
    term: { en: 'overland flow', ru: 'поверхностный сток (overland flow)' },
    def: {
      en: 'Water that flows across the ground surface towards a channel. It happens when rain arrives faster than the soil can absorb it, or when the soil is already saturated.',
      ru: 'Вода, которая течёт по поверхности земли к руслу. Это происходит, когда дождь выпадает быстрее, чем почва может его впитать, или когда почва уже насыщена водой.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Overland flow is water moving across the land. It is not the water already in the river channel.',
      ru: 'Поверхностный сток — это вода, движущаяся по суше. Это не та вода, которая уже находится в русле реки.',
    },
  },
  {
    id: 'a-groundwater-flow',
    term: { en: 'groundwater flow', ru: 'подземный сток (groundwater flow)' },
    def: {
      en: 'The slow movement of water through rock and sediment below the water table. It feeds springs and rivers, often long after the rain has stopped.',
      ru: 'Медленное движение воды через породу и отложения ниже уровня грунтовых вод. Оно питает родники и реки, часто уже долго после того, как дождь прекратился.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Groundwater flow supplies most of the base flow between storms, but it rarely creates the sharp storm peak.',
      ru: 'Подземный сток даёт основную часть базисного стока между ливнями, но редко создаёт резкий пик паводка.',
    },
  },
  {
    id: 'a-storm-hydrograph',
    term: { en: 'storm hydrograph', ru: 'паводковый гидрограф (storm hydrograph)' },
    def: {
      en: 'A graph of discharge against time at the basin outlet, showing how the river responds to one storm. It has a rising limb, a peak and a falling limb, set against the base flow.',
      ru: 'График расхода воды во времени в замыкающем створе бассейна, который показывает реакцию реки на один ливень. Он включает восходящую ветвь, пик и нисходящую ветвь на фоне базисного стока.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Read the axes first: discharge is in cubic metres per second, and time is usually in hours. Do not confuse the peak of rainfall with the peak of discharge.',
      ru: 'Сначала прочитайте оси: расход измеряется в кубических метрах в секунду, время обычно в часах. Не путайте пик осадков с пиком расхода.',
    },
  },
  {
    id: 'a-rising-limb',
    term: { en: 'rising limb', ru: 'восходящая ветвь гидрографа (rising limb)' },
    def: {
      en: 'The part of a hydrograph where discharge climbs from the base flow to the peak after a storm. A steep rising limb means that water reaches the channel quickly.',
      ru: 'Участок гидрографа, на котором расход растёт от базисного стока до пика после ливня. Крутая восходящая ветвь означает, что вода быстро попадает в русло.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A steep rising limb shows fast routes such as overland flow. It does not show that the total volume of water is large.',
      ru: 'Крутая восходящая ветвь показывает быстрые пути, например поверхностный сток. Она не показывает, что общий объём воды велик.',
    },
  },
  {
    id: 'a-falling-limb',
    term: { en: 'falling limb', ru: 'нисходящая ветвь гидрографа (falling limb)' },
    def: {
      en: 'The part of a hydrograph where discharge falls from the peak back towards the base flow. Its shape shows how quickly the stores drain.',
      ru: 'Участок гидрографа, на котором расход падает от пика обратно к базисному стоку. Его форма показывает, как быстро опорожняются запасы воды в бассейне.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A long, gentle falling limb means that slow stores are still draining. It does not mean that the river is still rising.',
      ru: 'Длинная пологая нисходящая ветвь означает, что медленные запасы ещё отдают воду. Это не значит, что река всё ещё поднимается.',
    },
  },
  {
    id: 'a-lag-time',
    term: { en: 'lag time', ru: 'время запаздывания (lag time)' },
    def: {
      en: 'The time between the peak of rainfall (or the centre of mass of the storm) and the peak of discharge. A short lag time means a quick response.',
      ru: 'Время между пиком осадков (или центром тяжести ливня) и пиком расхода. Короткое время запаздывания означает быструю реакцию бассейна.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Lag time is a time in hours, not a flow. Measure it from the rainfall peak to the discharge peak, not from the start of the rain.',
      ru: 'Время запаздывания — это время в часах, а не расход. Измеряйте его от пика осадков до пика расхода, а не от начала дождя.',
    },
  },
  {
    id: 'a-peak-discharge',
    term: { en: 'peak discharge', ru: 'пиковый расход (peak discharge)' },
    def: {
      en: 'The highest discharge reached on a hydrograph after one storm, measured in cubic metres per second.',
      ru: 'Наибольший расход воды на гидрографе после одного ливня, измеряется в кубических метрах в секунду.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Rhine at Lobith: 12,060 m³/s at the peak of January 1995 (KNMI, 2020 article).',
      ru: 'Рейн у Лобита: 12 060 м³/с в пике января 1995 года (KNMI, статья 2020 года).',
    },
    pitfall: {
      en: 'Peak discharge is a flow, not a time. Quote the value with its unit and the time, for example "15 m³/s at 16:00".',
      ru: 'Пиковый расход — это расход, а не время. Указывайте значение с единицей и время, например «15 м³/с в 16:00».',
    },
  },
  {
    id: 'a-base-flow',
    term: { en: 'base flow', ru: 'базисный сток (base flow)' },
    def: {
      en: 'The part of river discharge that comes from groundwater and continues between storms, so the river keeps flowing between rain events.',
      ru: 'Часть речного стока, которая поступает из подземных вод и продолжается между ливнями, поэтому река течёт и между дождями.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Base flow is the flow before and between storms. Do not add the storm flow to it when you describe the river before the storm.',
      ru: 'Базисный сток — это сток до ливня и между ливнями. Не прибавляйте к нему паводковый сток, когда описываете реку до ливня.',
    },
  },
  {
    id: 'a-storm-flow',
    term: { en: 'storm flow', ru: 'паводковый сток (storm flow)' },
    def: {
      en: 'The extra discharge produced by one storm, above the base flow. It comes mostly from overland flow and throughflow, which reach the channel quickly.',
      ru: 'Дополнительный расход, созданный одним ливнем сверх базисного стока. В основном он состоит из поверхностного и почвенного стока, которые быстро попадают в русло.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Total discharge is base flow plus storm flow. Name both parts when you explain the rise of the hydrograph.',
      ru: 'Общий расход — это базисный сток плюс паводковый сток. Называйте обе части, когда объясняете подъём гидрографа.',
    },
  },
  {
    id: 'a-drainage-density',
    term: { en: 'drainage density', ru: 'густота речной сети (drainage density)' },
    def: {
      en: 'The total length of stream channels in a basin divided by the basin area, in kilometres per square kilometre. A high value means that water travels a short distance over the land before it reaches a channel.',
      ru: 'Общая длина русел в бассейне, делённая на его площадь, в километрах на квадратный километр. Высокое значение означает, что вода проходит по суше недалеко до русла.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Drainage density is channel length per unit area. It is not the number of rivers in the basin.',
      ru: 'Густота речной сети — это длина русел на единицу площади, а не число рек в бассейне.',
    },
  },
  {
    id: 'a-long-profile',
    term: { en: 'long profile', ru: 'продольный профиль (long profile)' },
    def: {
      en: 'A graph of the river bed’s height above sea level against distance from the source to the mouth. It usually shows a steep upper course, a gentle lower course and a changing gradient in between.',
      ru: 'График высоты русла над уровнем моря в зависимости от расстояния от истока до устья. Обычно он показывает крутое верхнее течение, пологое нижнее течение и изменение уклона между ними.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'The long profile runs along the river. A cross profile runs across the valley, so do not mix the two.',
      ru: 'Продольный профиль идёт вдоль реки. Поперечный профиль идёт поперёк долины, поэтому не путайте их.',
    },
  },
  {
    id: 'a-river-regime',
    term: { en: 'river regime', ru: 'режим реки (river regime)' },
    def: {
      en: 'The pattern of a river’s discharge through the year, which reflects the timing of rain and snowmelt and the basin’s stores. Regimes are named after their main source: nival (snowmelt), glacial (ice melt), pluvial (rain), equatorial (rain all year) or monsoon (seasonal rain).',
      ru: 'Характер изменения расхода реки в течение года, который отражает сроки дождей и таяния снега, а также запасы воды в бассейне. Режимы называют по главному источнику воды: нивальный (таяние снега), ледниковый (таяние льда), плювиальный (дожди), экваториальный (дожди в течение всего года) или муссонный (сезонные дожди).',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Lower Mekong basin: over 90% of annual rainfall falls in the wet season, typically from mid-May to October (Nature Sustainability, 2025).',
      ru: 'Нижний Меконг: более 90% годовых осадков выпадает в сезон дождей, обычно с середины мая по октябрь (Nature Sustainability, 2025).',
    },
    pitfall: {
      en: 'A river regime is a pattern over the year, not a single flood. Name the regime type and its source before you describe it.',
      ru: 'Речной режим — это закономерность в течение года, а не один паводок. Назовите тип режима и его источник, прежде чем описывать его.',
    },
  },
  {
    id: 'a-river-gradient',
    term: { en: 'river gradient', ru: 'уклон реки (river gradient)' },
    def: {
      en: 'The fall in height of the river bed over a given horizontal distance, often written as a ratio such as 1:200. A steeper gradient gives the river more energy to erode and carry load.',
      ru: 'Падение высоты русла на заданном горизонтальном расстоянии, часто записывается как отношение, например 1:200. Более крутой уклон даёт реке больше энергии для размыва и переноса наносов.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Read a ratio carefully: 1:20 is steeper than 1:200, because a fall of 1 m over 20 m is a steeper slope than 1 m over 200 m.',
      ru: 'Читайте отношение внимательно: 1:20 круче, чем 1:200, потому что падение 1 м на 20 м — это круче, чем 1 м на 200 м.',
    },
  },
  {
    id: 'a-river-erosion',
    term: { en: 'river erosion', ru: 'речная эрозия (river erosion)' },
    def: {
      en: 'The wearing away of the river bed and banks by four processes: hydraulic action (the force of moving water and trapped air), abrasion (particles carried by the river scraping the bed), attrition (particles colliding and becoming smaller and more rounded) and solution (dissolving of rock).',
      ru: 'Разрушение русла и берегов реки четырьмя процессами: гидравлическим действием (сила движущейся воды и захваченного воздуха), абразией (частицы, которые переносит река, скоблят дно), истиранием (столкновения частиц, из-за которых они становятся мельче и окатаннее) и растворением (растворение породы).',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Attrition reduces the size of particles that are already being carried. It does not erode the bed directly, so keep it separate from abrasion.',
      ru: 'Истирание уменьшает размер частиц, которые уже переносятся. Оно не размывает дно напрямую, поэтому не путайте его с абразией.',
    },
  },
  {
    id: 'a-river-transport',
    term: { en: 'river transport', ru: 'перенос наносов (river transport)' },
    def: {
      en: 'The movement of load by a river in four ways: traction (large particles rolled or slid along the bed), saltation (particles bounced along the bed), suspension (fine particles carried in the flow) and solution (dissolved material).',
      ru: 'Перенос наносов рекой четырьмя способами: волочением (traction) — перекатывание или скольжение крупных частиц по дну, сальтацией (saltation) — подскоки частиц вдоль дна, во взвеси (suspension) — мелкие частицы в потоке и в растворённом виде (solution).',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Load is the material being carried. Transport is the way it moves. Do not confuse the two words in an answer.',
      ru: 'Наносы — это переносимый материал. Перенос — это способ, которым он движется. Не путайте эти понятия в ответе.',
    },
  },
  {
    id: 'a-deposition',
    term: { en: 'deposition', ru: 'отложение наносов (deposition)' },
    def: {
      en: 'The dropping of load when a river loses energy, usually because its velocity falls. It happens on the inside of bends, on floodplains, in lakes and at the river mouth.',
      ru: 'Выпадение наносов, когда река теряет энергию, обычно из-за снижения скорости течения. Оно происходит на внутренней стороне излучин, на поймах, в озёрах и в устье реки.',
    },
    syllabus: 'A.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A high discharge carries more load, but deposition happens where the flow slows. A river can be high and still deposit on a floodplain.',
      ru: 'Большой расход переносит больше наносов, но отложение происходит там, где поток замедляется. Река может быть высокой и всё равно откладывать наносы на пойме.',
    },
  },
];
