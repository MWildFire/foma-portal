import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'g2-urban-change',
  subject: 'geo',
  code: 'G.2',
  title: { en: 'Changing urban systems', ru: 'Меняющиеся городские системы' },
  papers: ['P1'],
  option: 'G',
  order: 2,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain how cities change over time through suburbanisation, counter-urbanisation and urban sprawl',
      ru: 'Умею объяснить, как города меняются со временем: субурбанизация, контрурбанизация и урбанистическое разрастание',
    },
    {
      en: 'I can describe the decline of an inner city and link it to deindustrialisation, using a named example',
      ru: 'Умею описать упадок центра города и связать его с деиндустриализацией на примере конкретного города',
    },
    {
      en: 'I can compare urban regeneration on brownfield and greenfield sites and explain gentrification',
      ru: 'Умею сравнить городскую регенерацию на брауфилд и гринфилд участках и объяснить джентрификацию',
    },
    {
      en: 'I can use bid-rent theory to explain land-use zones and predict how a change in transport moves them',
      ru: 'Умею использовать теорию ренты земли, чтобы объяснить зоны землепользования и предсказать, как изменение транспорта их сдвигает',
    },
    {
      en: 'I can explain how migration, global cities and land-use change drive urban change',
      ru: 'Умею объяснить, как миграция, глобальные города и изменение землепользования меняют город',
    },
    {
      en: 'I can answer a 10-mark structured question and a 10-mark extended question on urban change in the time allowed',
      ru: 'Умею ответить на 10-балльный структурированный и 10-балльный развёрнутый вопросы по теме в отведённое время',
    },
  ],
  termIds: [
    'g-counter-urbanisation',
    'g-suburbanisation',
    'g-urban-sprawl',
    'g-edge-city',
    'g-gentrification',
    'g-urban-regeneration',
    'g-brownfield-site',
    'g-greenfield-site',
    'g-bid-rent-theory',
    'g-bid-rent-curve',
    'g-deindustrialisation',
    'g-inner-city-decline',
    'g-land-use-change',
    'g-push-factor',
    'g-pull-factor',
  ],
  sims: ['geo.opt-g-bidrent'],
  questionIds: ['g2-sq1', 'g2-sq2', 'g2-sq3', 'g2-eq1', 'g2-eq2'],
  caseIds: ['g-detroit-decline', 'g-london-docklands', 'g-shenzhen-growth', 'g-medellin-metrocable'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Option G: Urban environments', locator: 'G.2' },
    { kind: 'thinkib', title: 'Option G: Urban Environments (pages 37518, 37556, 37580)', locator: 'Changing Urban Systems; Urbanization; Urban System Growth and Lagos' },
  ],
  links: [
    { title: 'ThinkIB eBook: Changing Urban Systems (G.2)', url: 'https://student.thinkib.net/geography/page/37518/changing-urban-systems' },
    { title: 'ThinkIB eBook: Urbanization (G.2)', url: 'https://student.thinkib.net/geography/page/37556/urbanization' },
    { title: 'ThinkIB eBook: Urban System Growth and Lagos (G.2)', url: 'https://student.thinkib.net/geography/page/37580/urban-system-growth-and-lagos' },
  ],
};

export default topic;
