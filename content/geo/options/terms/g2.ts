import type { SourceRef, Term } from '../../../../src/contract/types';

// G.2 Changing urban systems. Definitions are written in our own words from the Option G key elements.
// Textbook locators are added when the chapter and page have been checked against the book.
const SRC: SourceRef = { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.2' };

export const terms: Term[] = [
  {
    id: 'g-counter-urbanisation',
    term: { en: 'counter-urbanisation', ru: 'контрурбанизация (counter-urbanisation)' },
    def: {
      en: 'The net movement of people from large urban areas to smaller towns and the countryside beyond them, so that rural population grows faster than the cities it left.',
      ru: 'Чистое переселение людей из крупных городских районов в малые города и сельскую местность за их пределами, при котором сельское население растёт быстрее, чем города, которые люди покинули.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Counter-urbanisation is a net flow: some people still move into cities, so describe it as a net movement out of large urban areas.',
      ru: 'Контрурбанизация — это чистый баланс миграции: часть людей всё равно переезжает в города, поэтому говорите о чистом движении из крупных городов в сельскую местность.',
    },
  },
  {
    id: 'g-suburbanisation',
    term: { en: 'suburbanisation', ru: 'субурбанизация (suburbanisation)' },
    def: {
      en: 'The growth of housing, population and jobs in the suburbs on the edge of a city, as people move out of the central area and often still commute into it for work.',
      ru: 'Рост жилья, населения и рабочих мест в пригородах на окраине города: люди переезжают из центральной части, но часто продолжают ездить туда на работу.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-urban-sprawl',
    term: { en: 'urban sprawl', ru: 'урбанистическое разрастание (urban sprawl)' },
    def: {
      en: 'Low-density, car-dependent growth of a city outwards into the surrounding countryside, where housing and businesses spread over large areas, often on farmland.',
      ru: 'Малоплотный, зависящий от автомобиля рост города наружу, в окружающую сельскую местность: жильё и предприятия занимают большие площади, часто за счёт сельхозугодий.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-edge-city',
    term: { en: 'edge city', ru: 'периферийный деловой центр (edge city)' },
    def: {
      en: 'A large cluster of offices, shops and leisure facilities on the outskirts of a metropolitan area, away from the traditional centre, which works as a second business centre with its own jobs.',
      ru: 'Крупное скопление офисов, магазинов и досуговых объектов на окраине агломерации, вдали от традиционного центра, которое работает как второй деловой центр со своими рабочими местами.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'An edge city has its own offices and jobs; a suburb with only houses is not an edge city.',
      ru: 'Периферийный деловой центр имеет собственные офисы и рабочие места; пригород, где есть только жильё, таким центром не является.',
    },
  },
  {
    id: 'g-gentrification',
    term: { en: 'gentrification', ru: 'джентрификация (gentrification)' },
    def: {
      en: 'The process by which an older, often poorer inner-city area is upgraded as wealthier residents and businesses move in, raising house prices and rents and often displacing the original residents.',
      ru: 'Процесс, при котором старый, часто бедный район внутри города обновляется по мере прихода более состоятельных жителей и бизнеса; цены на жильё и аренда растут, а прежние жители часто вынуждены уехать.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Gentrification is not any urban improvement: its key features are the arrival of richer residents and the displacement of earlier ones.',
      ru: 'Джентрификация — не любое благоустройство: ключевые признаки — приход более состоятельных жителей и вытеснение прежних.',
    },
  },
  {
    id: 'g-urban-regeneration',
    term: { en: 'urban regeneration', ru: 'городская регенерация (urban regeneration)' },
    def: {
      en: 'The planned improvement of a run-down urban area, usually by renewing land, buildings and infrastructure, to attract investment and jobs and to improve social and environmental conditions.',
      ru: 'Плановое улучшение пришедшего в упадок городского района: обновление земли, зданий и инфраструктуры для привлечения инвестиций и рабочих мест, а также улучшения социальных и экологических условий.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-brownfield-site',
    term: { en: 'brownfield site', ru: 'брауфилд (brownfield site)' },
    def: {
      en: 'Previously developed land, often in the inner city, such as abandoned factory or railway land, which can be reused and may need clean-up before new building.',
      ru: 'Ранее застроенная земля, часто во внутренней части города, например заброшенная фабричная или железнодорожная территория; её можно использовать повторно, но перед новым строительством иногда нужна очистка.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-greenfield-site',
    term: { en: 'greenfield site', ru: 'гринфилд (greenfield site)' },
    def: {
      en: 'Land that has not been built on before, usually on the urban fringe or in the countryside, which is developed for new housing, industry or business parks.',
      ru: 'Земля, которая раньше не застраивалась, обычно на окраине города или в сельской местности; её осваивают под новое жильё, промышленность или деловые парки.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Greenfield development is often cheaper for builders, but it takes farmland and adds commuting, so its costs fall on the environment and on residents.',
      ru: 'Освоение незастроенных участков часто дешевле для застройщика, но занимает сельхозземли и увеличивает поездки на работу, поэтому издержки ложатся на окружающую среду и жителей.',
    },
  },
  {
    id: 'g-bid-rent-theory',
    term: { en: 'bid-rent theory', ru: 'теория ренты земли (bid-rent theory)' },
    def: {
      en: 'A model of land use in which each activity bids for a site, and the rent it can pay falls with distance from the CBD. Each site goes to the highest bidder, which explains why offices sit near the centre and housing further out.',
      ru: 'Модель землепользования, в которой каждый вид деятельности предлагает плату за участок, а величина этой платы снижается с удалением от центрального делового района (CBD). Участок достаётся тому, кто предложил больше, поэтому офисы располагаются ближе к центру, а жильё дальше.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-bid-rent-curve',
    term: { en: 'bid-rent curve', ru: 'кривая ренты (bid-rent curve)' },
    def: {
      en: 'A graph of the maximum rent a land use can pay against distance from the CBD. The curve falls with distance, and steeper curves belong to uses that depend most on central accessibility, such as offices.',
      ru: 'График максимальной арендной платы, которую может заплатить вид землепользования, в зависимости от расстояния до CBD. Кривая снижается с расстоянием, и более крутые кривые у тех видов, которые больше всего зависят от доступности центра, например у офисов.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A bid-rent curve shows what a land use could afford to pay, not what it actually pays; where two curves cross, the highest bidder changes.',
      ru: 'Кривая ренты показывает, сколько вид землепользования может заплатить, а не то, сколько он платит на самом деле; там, где кривые пересекаются, меняется победитель торгов за участок.',
    },
    sim: 'geo.opt-g-bidrent',
  },
  {
    id: 'g-deindustrialisation',
    term: { en: 'deindustrialisation', ru: 'деиндустриализация (deindustrialisation)' },
    def: {
      en: 'The decline of manufacturing as a share of a country\'s or city\'s economy, usually through factory closures and job losses, while service jobs grow.',
      ru: 'Снижение роли обрабатывающей промышленности в экономике страны или города: закрытие заводов и потеря рабочих мест при росте сферы услуг.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-inner-city-decline',
    term: { en: 'inner-city decline', ru: 'упадок центра города (inner-city decline)' },
    def: {
      en: 'The deterioration of the economic, social and physical condition of the inner part of a city, shown by falling population, unemployment, empty buildings and poor-quality housing.',
      ru: 'Ухудшение экономического, социального и физического состояния внутренней части города, которое проявляется в сокращении населения, безработице, пустующих зданиях и жилье низкого качества.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-global-city',
    term: { en: 'global city', ru: 'глобальный город (global city)' },
    def: {
      en: 'A city that is a major centre of finance, business services, politics or culture, and that is strongly linked to other world cities through trade, investment and migration.',
      ru: 'Город, который служит крупным центром финансов, деловых услуг, политики или культуры и тесно связан с другими мировыми городами через торговлю, инвестиции и миграцию.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-land-use-change',
    term: { en: 'land-use change', ru: 'изменение землепользования (land-use change)' },
    def: {
      en: 'The change in how land is used over time, for example from farmland to housing or from factories to offices, driven by economic, social and transport change.',
      ru: 'Изменение использования земли со временем, например перевод сельхозугодий под жильё или фабрик под офисы; вызывается экономическими, социальными и транспортными переменами.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-push-factor',
    term: { en: 'push factor', ru: 'фактор выталкивания (push factor)' },
    def: {
      en: 'A factor at the place of origin that encourages people to leave, such as unemployment, poor services, conflict, pollution or a shortage of housing.',
      ru: 'Фактор в месте происхождения, который побуждает людей уехать: безработица, плохие услуги, конфликты, загрязнение или нехватка жилья.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-pull-factor',
    term: { en: 'pull factor', ru: 'фактор притяжения (pull factor)' },
    def: {
      en: 'A factor at the destination that attracts people, such as jobs, higher wages, better services, education, housing or safety.',
      ru: 'Фактор в месте назначения, который привлекает людей: рабочие места, более высокие зарплаты, лучшие услуги, образование, жильё или безопасность.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
  },
];
