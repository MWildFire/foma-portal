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
      en: "Detroit's population peaked at 1,849,568 in 1950 and fell to 639,111 at the 2020 census, a loss of 1,210,457 people or 65.4%. The decline is usually linked to the loss of car-manufacturing jobs and to residents moving to the suburbs. The city disputes this count: in December 2021 city leaders released a report, prepared with University of Michigan researchers, suggesting that more than 8% of occupied homes in ten neighbourhoods may have been missed, and in 2022 Detroit filed a formal challenge with the Census Bureau. The official figure is used here.",
      ru: 'Население Детройта достигло пика в 1 849 568 человек по переписи 1950 года и сократилось до 639 111 человек по переписи 2020 года: потеря составила 1 210 457 человек, или 65,4%. Спад обычно связывают с потерей рабочих мест в автомобилестроении и переездом жителей в пригороды. Власти Детройта оспаривают эту цифру: в декабре 2021 года они опубликовали доклад с участием специалистов Мичиганского университета, по которому более 8% занятых домов в десяти районах могли остаться неучтёнными, а в 2022 году город подал в Бюро переписи официальный запрос на пересмотр итогов. В кейсе используется официальная цифра.',
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
      {
        kind: 'web',
        title: 'Detroit is largest city to challenge 2020 census numbers (Associated Press, 4 April 2022, via ClickOnDetroit)',
        url: 'https://www.clickondetroit.com/news/michigan/2022/04/05/detroit-is-largest-city-to-challenge-2020-census-numbers/',
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
      en: 'The London Docklands Development Corporation (LDDC), set up in 1981 and wound up in 1998, oversaw the regeneration of a 22 km² (about 8.5 square miles) development area of land and water in Newham, Tower Hamlets and Southwark. Royal Docks closed to commercial traffic in 1981; closure dates differ between dock systems. Building of Canary Wharf, a new office district, began in 1988, and One Canada Square was built as part of its first phase in 1991.',
      ru: 'Корпорация развития Лондонских доков (LDDC) работала с 1981 по 1998 год и руководила перестройкой территории развития площадью 22 км² (около 8,5 кв. мили), включая землю и воду в районах Ньюэм, Тауэр-Хэмлетс и Саутуорк. Royal Docks закрылись для коммерческого движения в 1981 году; разные системы доков закрывались в разные годы. Строительство делового района Канари-Уорф началось в 1988 году, One Canada Square был построен в составе первой очереди в 1991 году.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      { kind: 'web', title: 'Nicholas Falk, Capital Gains: A Better Land Assembly Model for London (GLA-commissioned, February 2018)', url: 'https://www.london.gov.uk/sites/default/files/gla_capital_gains_report_.pdf', locator: 'p. 23, London Docklands case: 1981/1998, 2,200 hectares of land and water; housing-affordability criticism' },
      { kind: 'web', title: 'Royal Docks, The place: historic timeline', url: 'https://royaldocks.london/the-place', locator: '1981: closure to commercial traffic' },
      { kind: 'web', title: 'Canary Wharf Group presentation (2 May 2012)', url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/62113/CW_Presentation_02MAY12.pdf', locator: 'slide 4: construction started 1988' },
      { kind: 'web', title: 'Canary Wharf Group, One Canada Square brochure', url: 'https://offices.canarywharf.com/wp-content/uploads/2023/08/canary-wharf-office-one-canada-square-brochure.pdf', locator: 'PDF p. 15, sustainability paragraph: first phase in 1991' },
    ],
  },
  {
    id: 'g-shenzhen-growth',
    subject: 'geo',
    title: { en: 'Shenzhen: growth after becoming a Special Economic Zone', ru: 'Шэньчжэнь: рост после создания особой экономической зоны' },
    place: 'Shenzhen, Guangdong, China',
    scale: 'local',
    years: '1980; census comparison 2010–2020',
    lat: 22.54667,
    lng: 114.05444,
    facts: {
      en: 'The special-zone regulations approved on 26 August 1980 provided for designated areas in Shenzhen, Zhuhai and Shantou. City census counts are a different geographical unit: Shenzhen recorded 10,423,973 permanent residents in 2010 and 17,560,061 in 2020, a rise of 7,136,088 (68.46%). The published census total excludes Hong Kong, Macao, Taiwan and foreign residents under its coverage notes. The city total does not itself decompose natural change, migration or boundary effects, identify migrants’ motives, or measure conversion of farmland.',
      ru: 'Правила об особых зонах, утверждённые 26 августа 1980 года, предусматривали выделенные территории в Шэньчжэне, Чжухае и Шаньтоу. Перепись всего города имеет другой географический охват: постоянное население Шэньчжэня выросло с 10 423 973 человек в 2010 году до 17 560 061 в 2020 году — на 7 136 088 человек (68,46%). По примечаниям к охвату из этой численности исключены жители Гонконга, Макао, Тайваня и иностранные жители. Общая численность сама по себе не выделяет естественное движение, миграцию и изменение границ, не устанавливает мотивы мигрантов и не измеряет перевод сельхозземель под застройку.',
    },
    usedFor: ['g2-urban-change'],
    src: [
      { kind: 'web', title: 'Shenzhen Statistical Bureau, Seventh National Population Census bulletin (2021)', url: 'https://www.sz.gov.cn/zfgb/2021/gb1199/content/post_8806392.html', locator: 'Bulletin 1: total population, change since 2010 and population coverage notes' },
      { kind: 'web', title: 'NPC Standing Committee, Regulations on Special Economic Zones in Guangdong Province (26 August 1980), official court republication', url: 'https://english.court.gov.cn/2016-04/15/c_761530.htm', locator: 'approval date; Article 1: designated areas, not whole-city population boundaries' },
    ],
  },
  {
    id: 'g-medellin-metrocable',
    subject: 'geo',
    title: { en: 'Medellín: cable cars for hillside communities', ru: 'Медельин: канатные дороги для жителей склонов' },
    place: 'Medellín, Antioquia, Colombia (map: centre of Comuna 13)',
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
