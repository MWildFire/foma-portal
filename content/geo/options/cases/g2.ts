import type { CaseStudy } from '../../../../src/contract/types';

// G.2 case studies. Every figure below was checked against the source listed in src (WebFetch, 2026-10-13).
// Coordinates are the centres given in each source's infobox, or the commune centre for Comuna 13.
export const cases: CaseStudy[] = [
  {
    id: 'g-detroit-decline',
    subject: 'geo',
    title: { en: 'Detroit: decline of a former industrial city', ru: 'Детройт: упадок бывшего промышленного города' },
    place: 'Detroit, Michigan, USA',
    scale: 'local',
    years: '1950–2020',
    lat: 42.33167,
    lng: -83.04583,
    facts: {
      en: "Detroit's population peaked at 1,849,568 in 1950 and fell to 639,111 at the 2020 census, a loss of 1,210,457 people or 65.4%. The decline is usually linked to the loss of car-manufacturing jobs and to residents moving to the suburbs.",
      ru: 'Население Детройта достигло пика в 1 849 568 человек по переписи 1950 года и сократилось до 639 111 человек по переписи 2020 года: потеря составила 1 210 457 человек, или 65,4%. Спад обычно связывают с потерей рабочих мест в автомобилестроении и переездом жителей в пригороды.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      {
        kind: 'web',
        title: 'US Census Bureau, QuickFacts: Detroit city, Population, Census, April 1, 2020 (639,111)',
        url: 'https://census.gov/quickfacts/fact/table/detroitcitymichigan,adriancitymichigan/POP010220',
      },
      {
        kind: 'web',
        title: 'Demographic history of Detroit, Michigan, 1820–2020 (Wikipedia; population table citing US Census Bureau data)',
        url: 'https://en.wikipedia.org/wiki/Demographic_history_of_Detroit',
      },
    ],
  },
  {
    id: 'g-london-docklands',
    subject: 'geo',
    title: { en: 'London Docklands: redevelopment of closed docks', ru: 'Лондонские доки: перестройка закрытых портовых районов' },
    place: 'London Docklands and Canary Wharf, UK',
    scale: 'local',
    years: '1981–1998',
    lat: 51.505,
    lng: -0.0225,
    facts: {
      en: 'The London Docklands Development Corporation (LDDC), set up in 1981 and wound up in 1998, oversaw the regeneration of a 22 km² (8.5 square miles) area of former docklands in Newham, Tower Hamlets and Southwark. The docks were empty by 1980. Building of Canary Wharf, a new office district, began in 1988, and its first buildings, including One Canada Square, were completed in 1991.',
      ru: 'Корпорация развития Лондонских доков (LDDC) работала с 1981 по 1998 год и руководила перестройкой территории 22 км² (8,5 кв. мили) бывших доков и портовых земель в районах Ньюэм, Тауэр-Хэмлетс и Саутуорк. К 1980 году доки опустели. Строительство делового района Канари-Уорф началось в 1988 году, первые здания, включая One Canada Square, были готовы в 1991 году.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      {
        kind: 'web',
        title: 'London Docklands Development Corporation (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/London_Docklands_Development_Corporation',
      },
      {
        kind: 'web',
        title: 'Canary Wharf (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Canary_Wharf',
      },
    ],
  },
  {
    id: 'g-shenzhen-growth',
    subject: 'geo',
    title: { en: 'Shenzhen: growth after becoming a Special Economic Zone', ru: 'Шэньчжэнь: рост после создания особой экономической зоны' },
    place: 'Shenzhen, Guangdong, China',
    scale: 'local',
    years: '1980–2020',
    lat: 22.54667,
    lng: 114.05444,
    facts: {
      en: 'Shenzhen was established as a Special Economic Zone on 26 August 1980. The Shenzhen Statistical Yearbook records 332,900 residents in 1980, while the city had 17.56 million permanent residents in 2020, about 53 times as many. Much of this growth came from migrant workers who moved to the city for factory and service jobs.',
      ru: 'Шэньчжэнь официально стал особой экономической зоной 26 августа 1980 года. По данным статистического ежегодника, в 1980 году в городе жили 332 900 человек, а в 2020 году постоянное население составляло 17,56 млн человек, то есть почти в 53 раза больше. Значительную часть роста дали трудовые мигранты, приехавшие на работу на фабрики и в сферу услуг.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      {
        kind: 'web',
        title: 'Demographics of Shenzhen (Wikipedia; yearbook and government figures)',
        url: 'https://en.wikipedia.org/wiki/Demographics_of_Shenzhen',
      },
      {
        kind: 'web',
        title: 'Shenzhen Special Economic Zone (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Shenzhen_Special_Economic_Zone',
      },
    ],
  },
  {
    id: 'g-medellin-metrocable',
    subject: 'geo',
    title: { en: 'Medellín: cable cars for hillside communities', ru: 'Медельин: канатные дороги для жителей склонов' },
    place: 'Medellín, Antioquia, Colombia (coordinates: centre of Comuna 13 / координаты: центр комуны 13)',
    scale: 'local',
    years: '2004–2026',
    lat: 6.25635,
    lng: -75.62139,
    facts: {
      en: "Medellín's first Metrocable line (Line K, to the hillside district of Santo Domingo) opened on 7 August 2004. Line J, which serves San Javier in Comuna 13, opened on 3 March 2008; El Colombiano reported that it improved the quality of life of about 120,000 residents of 19 neighbourhoods in comunas 7 and 13. Line J usually carries 35,000 to 40,000 passengers a day (Telemedellín, September 2026).",
      ru: 'Первая линия Metrocable в Медельине (линия K, к склону холма в районе Санто-Доминго) открылась 7 августа 2004 года. Линия J, которая обслуживает район Сан-Хавьер в комуне 13, открылась 3 марта 2008 года; по данным El Colombiano, она улучшила качество жизни примерно 120 000 жителей 19 районов комун 7 и 13. По данным Telemedellín (сентябрь 2026), линия J обычно перевозит от 35 до 40 тысяч пассажиров в день.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      {
        kind: 'web',
        title: 'Medellín Metro (Wikipedia): Metrocable lines and opening dates',
        url: 'https://en.wikipedia.org/wiki/Medell%C3%ADn_Metro',
      },
      {
        kind: 'web',
        title: 'El Colombiano: history of the Metro de Medellín, 30 November 2020',
        url: 'https://www.elcolombiano.com/antioquia/historia-del-metro-de-medellin-y-sus-hitos-en-25-anos-de-servicio-MB14159216',
      },
      {
        kind: 'web',
        title: 'Telemedellín: Línea J daily passengers, 3 September 2026',
        url: 'https://telemedellin.tv/?p=194860',
      },
      {
        kind: 'web',
        title: 'Comuna 13, Medellín (Wikipedia): Metrocable and access to jobs',
        url: 'https://en.wikipedia.org/wiki/Comuna_13,_Medell%C3%ADn',
      },
    ],
  },
];
