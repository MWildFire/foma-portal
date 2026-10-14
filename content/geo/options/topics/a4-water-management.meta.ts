import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a4-water-management',
  subject: 'geo',
  code: 'A.4',
  title: { en: 'Water management futures', ru: 'Будущее управления водными ресурсами' },
  papers: ['P1'],
  option: 'A',
  order: 24,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain integrated water resources management (IWRM) and why the river basin is the unit for planning',
      ru: 'Умею объяснять комплексное управление водными ресурсами (IWRM) и то, почему речной бассейн — единица планирования',
    },
    {
      en: 'I can evaluate demand management tools (pricing, efficient irrigation, leakage control, reuse) and say what limits each of them',
      ru: 'Умею оценивать инструменты управления спросом (тарифы, эффективное орошение, контроль утечек, повторное использование) и называть ограничения каждого',
    },
    {
      en: 'I can weigh the benefits and costs of supply options: dams and reservoirs, desalination, inter-basin transfers, groundwater recharge and rainwater harvesting',
      ru: 'Умею сопоставлять выгоды и издержки вариантов увеличения предложения: плотин и водохранилищ, опреснения, межбассейновых переброк, пополнения подземных вод и сбора дождевой воды',
    },
    {
      en: 'I can calculate leakage losses, the time for a reservoir to fill with sediment and the energy use of a desalination plant from given data',
      ru: 'Умею рассчитывать потери из-за утечек, время заиления водохранилища и расход энергии опреснительной установки по заданным данным',
    },
    {
      en: 'I can explain cooperation and conflict over transboundary rivers, using the Indus Waters Treaty and the Nile dispute',
      ru: 'Умею объяснять сотрудничество и конфликт вокруг трансграничных рек на примере Договора о водах Инда и спора о Ниле',
    },
    {
      en: 'I can use dated figures and sources from the five cases (UAE, Singapore, the Nile, the Indus, China) to support an answer',
      ru: 'Умею использовать цифры с годами и источниками из пяти кейсов (ОАЭ, Сингапур, Нил, Инд, Китай) в ответе',
    },
    {
      en: 'I can judge how demand growth and climate change test a water plan, using scenarios',
      ru: 'Умею оценивать, как рост спроса и изменение климата проверяют план управления водой, используя сценарии',
    },
  ],
  termIds: [
    'a-integrated-water-resources-management',
    'a-river-basin-management',
    'a-demand-side-management',
    'a-water-pricing',
    'a-non-revenue-water',
    'a-drip-irrigation',
    'a-water-recycling',
    'a-supply-augmentation',
    'a-reservoir',
    'a-reservoir-sedimentation',
    'a-environmental-flow',
    'a-resettlement',
    'a-desalination',
    'a-brine',
    'a-inter-basin-transfer',
    'a-managed-aquifer-recharge',
    'a-rainwater-harvesting',
    'a-integrated-drainage-basin-management',
    'a-dam',
    'a-wetland',
    'a-ramsar-convention',
    'a-community-participation',
  ],
  sims: ['geo.opt-a-dams'],
  questionIds: ['a4-sq1', 'a4-sq2', 'a4-sq3', 'a4-eq1', 'a4-eq2'],
  caseIds: ['a-uae-desalination', 'a-singapore-four-taps', 'a-gerd-nile', 'a-indus-treaty', 'a-snwtp-china', 'a-ogallala-aquifer'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Option A: Freshwater', locator: 'A.4' },
    { kind: 'thinkib', title: 'Option A: Water Management Futures (ThinkIB eBook, A.4)', locator: 'Water Management Futures' },
  ],
  links: [
    { title: 'ThinkIB eBook: 4. Water Management Futures (A.4)', url: 'https://student.thinkib.net/geography/page/44418/4-water-management-futures' },
    { title: 'ThinkIB eBook: Community Participation in Water Management (A.4)', url: 'https://student.thinkib.net/geography/page/44412/community-participation-in-water-management' },
    { title: 'ThinkIB eBook: The Lancang - Mekong Dam Cascade (A.4)', url: 'https://student.thinkib.net/geography/page/45425/the-lancang-mekong-dam-cascade' },
    { title: 'ThinkIB eBook: Integrated Drainage Basin Management - Mekong (A.4)', url: 'https://student.thinkib.net/geography/page/45427/integrated-drainage-basin-management-mekong' },
    { title: 'ThinkIB eBook: Growing Pressures on Wetlands (A.4)', url: 'https://student.thinkib.net/geography/page/45437/growing-pressures-on-wetlands' },
  ],
};

export default topic;
