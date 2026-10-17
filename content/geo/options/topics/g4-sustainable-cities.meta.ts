import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'g4-sustainable-cities',
  subject: 'geo',
  code: 'G.4',
  title: { en: 'Building sustainable urban systems for the future', ru: 'Создание устойчивых городских систем будущего' },
  papers: ['P1'],
  option: 'G',
  order: 4,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can define sustainable urban development and explain its environmental, economic and social goals',
      ru: 'Умею определить устойчивое городское развитие и объяснить его экологические, экономические и социальные цели',
    },
    {
      en: 'I can explain how compact cities and green infrastructure reduce environmental pressure',
      ru: 'Умею объяснить, как компактный город и зелёная инфраструктура снижают нагрузку на окружающую среду',
    },
    {
      en: 'I can compare transport options using modal split data from a case study',
      ru: 'Умею сравнивать варианты транспорта по данным о модальном распределении поездок из кейса',
    },
    {
      en: 'I can evaluate eco-city and smart-city approaches, using Masdar City or another case',
      ru: 'Умею оценивать подходы эко-города и умного города на примере Масдар-Сити или другого кейса',
    },
    {
      en: 'I can discuss trade-offs and the role of community participation in urban planning',
      ru: 'Умею обсуждать компромиссы и роль участия жителей в городском планировании',
    },
    {
      en: 'I can quote case-study figures with the place, year and source',
      ru: 'Умею приводить цифры из кейсов с местом, годом и источником',
    },
  ],
  termIds: [
    'g-sustainable-urban-development',
    'g-green-infrastructure',
    'g-bus-rapid-transit',
    'g-modal-split',
    'g-compact-city',
    'g-eco-city',
    'g-smart-city',
    'g-car-free-zone',
    'g-sustainable-transport',
    'g-urban-carbon-footprint',
    'g-community-participation',
    'g-circular-economy',
    'g-trade-off',
    'g-active-travel',
    'g-sustainable-drainage-systems',
    'g-waste-hierarchy',
    'g-urban-resilience',
    'g-resilient-city-design',
    'g-urban-growth-projections',
    'g-hazard',
    'g-vulnerability',
    'g-risk',
  ],
  questionIds: ['g4-sq1', 'g4-sq2', 'g4-sq3', 'g4-eq1', 'g4-eq2'],
  caseIds: ['g-curitiba-brt', 'g-copenhagen-cycling', 'g-vauban-freiburg', 'g-masdar-city'],
  sims: ['geo.opt-g-transport'],
  sources: [
    {"kind": "web", "title": "City of Freiburg, Quartier Vauban", "url": "https://www.freiburg.de/pb/208732.html?fontZoom=L", "locator": "Former military site; Verkehrskonzept: explicitly car-reduced, with differing road/access arrangements"},
    {"kind": "web", "title": "IRENA, Headquarters in Masdar City factsheet (2015)", "url": "https://www.irena.org/-/media/Files/IRENA/Agency/Factsheet/IRENA_Headquarters_Factsheet.pdf", "locator": "p. 1, March 2015 move; Building Facts: passive design and energy-management claims, not a citywide net-zero measure"},
    { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.4' },
    { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37521, 37639, 37641, 37654, 37666)', locator: 'Sustainable Urban Systems; Urban Growth; Resilient Cities; Ecocity Design and Environmental Strategies; Smart Cities' },
  ],
  links: [
    { title: 'ThinkIB eBook: Sustainable Urban Systems (G.4)', url: 'https://student.thinkib.net/geography/page/37521/sustainable-urban-systems' },
    { title: 'ThinkIB eBook: Urban Growth (G.4)', url: 'https://student.thinkib.net/geography/page/37639/urban-growth' },
    { title: 'ThinkIB eBook: Resilient Cities (G.4)', url: 'https://student.thinkib.net/geography/page/37641/resilient-cities' },
    { title: 'ThinkIB eBook: Ecocity Design and Environmental Strategies (G.4)', url: 'https://student.thinkib.net/geography/page/37654/ecocity-design-and-environmental-strategies' },
    { title: 'ThinkIB eBook: Smart Cities (G.4)', url: 'https://student.thinkib.net/geography/page/37666/smart-cities' },
    { title: 'ThinkIB: Resilient Cities (23.01.2026)', url: 'https://student.thinkib.net/geography/task/1158376/resilient-cities' },
  ],
};

export default topic;
