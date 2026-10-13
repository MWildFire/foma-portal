import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-essay-3',
  subject: 'geo',
  code: 'core-essay-3',
  title: { en: 'Section C essays: Unit 3, resource consumption', ru: 'Эссе Section C: юнит 3, потребление ресурсов' },
  papers: ['P2'],
  order: 12,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can plan a 10-mark Section C essay on resources in about three minutes', ru: 'Могу составить план эссе Section C на 10 баллов о ресурсах примерно за три минуты' },
    { en: 'I can link a named resource case to a judgement about security or stewardship', ru: 'Могу связать названный кейс по ресурсу с выводом о безопасности или бережном управлении' },
    { en: 'I can check my own essay against the markband descriptors', ru: 'Могу проверить своё эссе по дескрипторам markband' },
  ],
  termIds: [],
  questionIds: ['core-essay-3-1', 'core-essay-3-2', 'core-essay-3-3', 'core-essay-3-4'],
  caseIds: [],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Paper 2 Section C and command terms' },
    { kind: 'web', title: 'USGS, Mineral Commodity Summaries 2026: Cobalt (February 2026), mine output 2024–2025, Congo (Kinshasa) share, export quotas, reserves', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf' },
    { kind: 'web', title: 'USGS, Mineral Commodity Summaries 2026: Nickel (February 2026), Indonesia and world mine output 2024–2025, reserves', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-nickel.pdf' },
    { kind: 'web', title: 'Bureau of Reclamation, Colorado River Basin (70% of water for agriculture; 35–40 million municipal users; storage about 36% in April 2026; 2027–2028 operating guidelines, 21 August 2026)', url: 'https://www.usbr.gov/ColoradoRiverBasin/index.html' },
    { kind: 'web', title: 'FAO, SOFI 2025 news release (28 July 2025): 8.2% of the world population facing hunger in 2024 (8.5% in 2023); 2.6 billion unable to afford a healthy diet', url: 'https://www.fao.org/newsroom/detail/sofi-2025--fao-calls-for-urgent--coordinated-and-inclusive-action-to-end-global-hunger' },
    { kind: 'web', title: 'National Footprint and Biocapacity Accounts, 2026 edition (York University and Footprint Data Foundation; national and world public data, 2023 figures used)', url: 'https://footprint.info.yorku.ca/data/' },
  ],
};

export default topic;
