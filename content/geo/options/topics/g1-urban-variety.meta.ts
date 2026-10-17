import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'g1-urban-variety',
  subject: 'geo',
  code: 'G.1',
  title: { en: 'The variety of urban environments', ru: 'Разнообразие городской среды' },
  papers: ['P1'],
  option: 'G',
  order: 1,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can define urbanisation, megacity, conurbation and primate city, using the UN definition of a megacity',
      ru: 'Умею определять урбанизацию, мегаполис, конурбацию и главный город страны, используя определение мегаполиса от ООН',
    },
    {
      en: 'I can describe the concentric zone, sector, multiple nuclei and Latin American city models and say what each shows about land values',
      ru: 'Умею описывать модели концентрических зон, секторов, многоядерного города и латиноамериканского города и объяснять, что каждая показывает о ценах на землю',
    },
    {
      en: 'I can compare the models and judge how far they describe cities in LEDCs and MEDCs',
      ru: 'Умею сравнивать модели и оценивать, насколько они описывают города в развивающихся и развитых странах',
    },
    {
      en: 'I can explain planned cities, gated communities, informal settlements and the rural-urban fringe, with examples',
      ru: 'Умею объяснять спланированные города, закрытые жилые комплексы, неформальные поселения и урбанизированную периферию, приводя примеры',
    },
    {
      en: 'I can use dated figures and sources from the four cases (Dubai, Lagos, Dharavi, Singapore) to support an answer',
      ru: 'Умею использовать цифры с годами и источниками из четырёх кейсов (Дубай, Лагос, Дхарави, Сингапур) в ответе',
    },
  ],
  termIds: [
    'g-megacity',
    'g-conurbation',
    'g-primate-city',
    'g-central-business-district',
    'g-concentric-zone-model',
    'g-sector-model',
    'g-multiple-nuclei-model',
    'g-latin-american-city-model',
    'g-informal-settlement',
    'g-gated-community',
    'g-planned-city',
    'g-urban-hierarchy',
    'g-rural-urban-fringe',
    'g-zone-in-transition',
    'g-bid-rent-theory',
    'g-bid-rent-curve',
    'g-site',
    'g-function',
    'g-land-use',
    'g-ethnicity',
    'g-informal-activity',
  ],
  sims: ['geo.opt-g-models'],
  questionIds: ['g1-sq1', 'g1-sq2', 'g1-sq3', 'g1-eq1', 'g1-eq2'],
  caseIds: ['g-dubai-growth', 'g-lagos-megacity', 'g-dharavi', 'g-singapore-hdb'],
  sources: [
    {"kind": "web", "title": "Rodrigue et al., The Geography of Transport Systems, third edition", "url": "https://transportgeography.org/wp-content/uploads/GTS_Third_Edition.pdf", "locator": "Printed pp. 200–202, Burgess and sector/multiple-nuclei models; Figure 6.7"},
    {"kind": "web", "title": "НИУ ВШЭ, Моделирование территориального развития городов и городских систем, лекция 3", "url": "https://www.hse.ru/data/531/901/1237/лекция 3.pdf", "locator": "Слайды 3 и 11–13: типы моделей и схемы Берджесса и Хойта; даты моделей из этих слайдов не используются"},
    {"kind": "web", "title": "Dharavi Redevelopment Project, Tender Notice DRP/2/2022", "url": "https://hcikl.gov.in/pdf/Tender_Notice.pdf", "locator": "p. 1, Background: location near BKC and railway stations; planned redevelopment, not completed outcomes"},
    {"kind": "web", "title": "UNESCO World Heritage Centre, Brasilia", "url": "https://whc.unesco.org/en/list/445", "locator": "Description; Brief synthesis; Integrity; Authenticity: planned axes, sectors and continued transport pressures"},
    { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.1, p. 40' },
    { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37517, 37523, 37524)', locator: 'The Variety of Urban Environments; The Characteristics of Urban Places; Economic Activity in Urban Places' },
  ],
  links: [
    { title: 'ThinkIB eBook: The Variety of Urban Environments (G.1)', url: 'https://student.thinkib.net/geography/page/37517/the-variety-of-urban-environments' },
    { title: 'ThinkIB eBook: The Characteristics of Urban Places (G.1)', url: 'https://student.thinkib.net/geography/page/37523/the-characteristics-of-urban-places' },
    { title: 'ThinkIB eBook: Economic Activity in Urban Places (G.1)', url: 'https://student.thinkib.net/geography/page/37524/economic-activity-in-urban-places' },
  ],
};

export default topic;
