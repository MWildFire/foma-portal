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
    'g-urbanisation',
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
  ],
  sims: ['geo.opt-g-models'],
  questionIds: ['g1-sq1', 'g1-sq2', 'g1-sq3', 'g1-eq1', 'g1-eq2'],
  caseIds: ['g-dubai-growth', 'g-lagos-megacity', 'g-dharavi', 'g-singapore-hdb'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.1' },
    { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37517, 37523, 37524)', locator: 'The Variety of Urban Environments; The Characteristics of Urban Places; Economic Activity in Urban Places' },
  ],
  links: [
    { title: 'ThinkIB eBook: The Variety of Urban Environments (G.1)', url: 'https://student.thinkib.net/geography/page/37517/the-variety-of-urban-environments' },
    { title: 'ThinkIB eBook: The Characteristics of Urban Places (G.1)', url: 'https://student.thinkib.net/geography/page/37523/the-characteristics-of-urban-places' },
    { title: 'ThinkIB eBook: Economic Activity in Urban Places (G.1)', url: 'https://student.thinkib.net/geography/page/37524/economic-activity-in-urban-places' },
  ],
};

export default topic;
