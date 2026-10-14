import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-essay-1',
  subject: 'geo',
  code: 'core-essay-1',
  title: { en: 'Section C essays: Unit 1, changing population', ru: 'Эссе Section C: юнит 1, изменение населения' },
  papers: ['P2'],
  order: 4,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can plan a 10-mark Section C essay in about three minutes', ru: 'Могу составить план эссе Section C на 10 баллов примерно за три минуты' },
    { en: 'I can link a named place to a judgement in one paragraph', ru: 'Могу связать названное место с выводом в одном абзаце' },
    { en: 'I can check my own essay against the markband descriptors', ru: 'Могу проверить своё эссе по дескрипторам markband' },
  ],
  termIds: [],
  questionIds: ['core-essay-1-1', 'core-essay-1-2', 'core-essay-1-3', 'core-essay-1-4'],
  caseIds: [],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Paper 2 Section C and command terms' },
    { kind: 'web', title: 'ONS: Births in England and Wales, 2025 (total fertility rate 1.39; 585,396 live births)', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/bulletins/birthsummarytablesenglandandwales/latest' },
    { kind: 'web', title: 'Statistics Bureau of Japan: population estimates, 1 October 2024 (123,802 thousand; 29.3% aged 65 and over)', url: 'https://www.stat.go.jp/english/data/jinsui/2024np/index.html' },
    { kind: 'web', title: 'UN DESA: 2018 Revision of World Urbanization Prospects (55% urban in 2018; 68% by 2050; Nigeria 189 million)', url: 'https://www.un.org/en/desa/2018-revision-world-urbanization-prospects' },
    { kind: 'web', title: 'Shenzhen Municipal Government: 2020 population, seventh national census (17.56 million)', url: 'https://www.sz.gov.cn/en_szgov/news/latest/content/post_8771774.html' },
    { kind: 'web', title: 'Korean national statistics office (mods.go.kr): total fertility rate 2025 (0.80)', url: 'https://mods.go.kr/' },
    { kind: 'web', title: 'KDI: 2025 birth statistics (ministry data; TFR 0.80, first return to the 0.8 range since 2021)', url: 'https://eiec.kdi.re.kr/policy/materialView.do?num=285815' },
    { kind: 'web', title: 'Our World in Data: replacement-level fertility of 2.1 children per woman (UN WPP 2024 basis)', url: 'https://ourworldindata.org/data-insights/which-countries-have-fertility-rates-above-or-below-the-replacement-level' },
  ],
  links: [
    { title: 'ThinkIB eBook: Model Essays (Paper 2, Section C)', url: 'https://student.thinkib.net/geography/page/29163/model-essays' },
  ],
};

export default topic;
