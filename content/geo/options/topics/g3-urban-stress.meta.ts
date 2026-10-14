import type { TopicMeta } from '../../../../src/contract/types';

// Option G.3 (Urban environmental and social stresses), Paper 1. Terms, questions and cases are in the sibling folders.
const topic: TopicMeta = {
  id: 'g3-urban-stress',
  subject: 'geo',
  code: 'G.3',
  title: { en: 'Urban environmental and social stresses', ru: 'Экологические и социальные стрессы городов' },
  papers: ['P1'],
  option: 'G',
  order: 3,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain how the urban heat island, air pollution and urban flooding form in cities',
      ru: 'Умею объяснить, как в городах возникают тепловой остров, загрязнение воздуха и городское наводнение',
    },
    {
      en: 'I can explain how land subsidence and water stress develop in a growing city',
      ru: 'Умею объяснить, как в растущем городе возникают просадка грунта и водный стресс',
    },
    {
      en: 'I can explain social stresses: urban poverty, inequality, housing affordability and congestion',
      ru: 'Умею объяснить социальные нагрузки: городскую бедность, неравенство, доступность жилья и заторы',
    },
    {
      en: 'I can use hazard, vulnerability, risk and resilience correctly in a flood or heat example',
      ru: 'Умею правильно использовать понятия «опасность», «уязвимость», «риск» и «устойчивость» на примере наводнения или жары',
    },
    {
      en: 'I can build and interpret a simple urban stress index from weighted indicators',
      ru: 'Умею построить и прочитать простой индекс городского стресса из взвешенных показателей',
    },
    {
      en: 'I can use the Mumbai, Jakarta, Kibera and Phoenix cases with their figures, years and sources',
      ru: 'Умею использовать кейсы Мумбаи, Джакарты, Киберы и Феникса с их цифрами, годами и источниками',
    },
  ],
  termIds: [
    'g-urban-heat-island',
    'g-albedo',
    'g-impermeable-surface',
    'g-urban-flooding',
    'g-land-subsidence',
    'g-particulate-pollution',
    'g-water-stress',
    'g-urban-stress',
    'g-urban-poverty',
    'g-urban-inequality',
    'g-housing-affordability',
    'g-congestion',
    'g-hazard',
    'g-vulnerability',
    'g-risk',
    'g-slum-clearance',
    'g-cycle-of-deprivation',
    'g-crime-and-place',
  ],
  sims: ['geo.opt-g-heat', 'geo.opt-g-stress'],
  questionIds: ['g3-sq1', 'g3-sq2', 'g3-sq3', 'g3-eq1', 'g3-eq2'],
  caseIds: ['g-mumbai-floods-2005', 'g-jakarta-subsidence', 'g-kibera', 'g-phoenix-heat'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.3' },
    { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37520, 37586, 37591)', locator: 'Urban Environmental and Social Stress; Urban Micro-climates; Managing Urban Social Deprivation and Crime' },
  ],
  links: [
    { title: 'ThinkIB eBook: Urban Environmental and Social Stress (G.3)', url: 'https://student.thinkib.net/geography/page/37520/urban-environmental-and-social-stress' },
    { title: 'ThinkIB eBook: Urban Micro-climates (G.3)', url: 'https://student.thinkib.net/geography/page/37586/urban-micro-climates' },
    { title: 'ThinkIB eBook: Managing Urban Social Deprivation and Crime (G.3)', url: 'https://student.thinkib.net/geography/page/37591/managing-urban-social-deprivation-and-crime' },
  ],
};

export default topic;
