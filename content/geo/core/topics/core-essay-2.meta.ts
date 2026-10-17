import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-essay-2',
  subject: 'geo',
  code: 'core-essay-2',
  title: { en: 'Section C essays: Unit 2, climate change', ru: 'Эссе Section C: юнит 2, изменение климата' },
  papers: ['P2'],
  order: 8,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can plan a 10-mark Section C essay on climate change in about three minutes', ru: 'Могу составить план эссе Section C на 10 баллов о климатических изменениях примерно за три минуты' },
    { en: 'I can link a named case to a judgement about vulnerability or response', ru: 'Могу связать названный кейс с выводом об уязвимости или о реагировании' },
    { en: 'I can check my own essay against the markband descriptors', ru: 'Могу проверить своё эссе по дескрипторам markband' },
  ],
  termIds: [],
  questionIds: ['core-essay-2-1', 'core-essay-2-2', 'core-essay-2-3', 'core-essay-2-4'],
  caseIds: [],
  sources: [
    {kind:'web',title:'IPCC AR6 WGII Technical Summary, Box TS.1: evolving vulnerability frameworks, hazard/exposure/vulnerability; Annex II Vulnerability entry',url:'https://www.ipcc.ch/report/ar6/wg2/chapter/technical-summary/'},
    {kind:'web',title:'МГЭИК AR5 WGII, Резюме для политиков, вставка РП.2: независимые русские определения подверженности и уязвимости',url:'https://www.ipcc.ch/site/assets/uploads/2018/03/ar5_wgII_spm_ru-1.pdf'},
    { kind: 'ib-guide', title: 'Geography guide (2017), Paper 2 Section C and command terms' },
    { kind: 'web', title: 'UNFCCC: the Convention (adopted at UN Headquarters, New York, 9 May 1992; in force 21 March 1994)', url: 'https://unfccc.int/process-and-meetings/the-convention/what-is-the-united-nations-framework-convention-on-climate-change' },
    { kind: 'web', title: 'UNFCCC: Kyoto Protocol (adopted 11 December 1997; in force 16 February 2005; average 5% cut against 1990 levels for 2008–2012)', url: 'https://unfccc.int/kyoto_protocol' },
    { kind: 'web', title: 'UNFCCC: The Paris Agreement (adopted 12 December 2015; in force 4 November 2016; 194 Parties as of 27 January 2026)', url: 'https://unfccc.int/process-and-meetings/the-paris-agreement' },
    { kind: 'web', title: 'IPCC AR6 WG1, Summary for Policymakers (2021): A.1 human influence; A.1.3 human-caused warming 0.8–1.3 °C and natural drivers over 1850–1900 to 2010–2019', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/' },
    { kind: 'web', title: 'NOAA GML: Mauna Loa annual mean CO2, co2_annmean_mlo.txt (316.91 ppm in 1960; 363.88 ppm in 1997; 427.35 ppm in 2025)', url: 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt' },
  ],
  links: [
    { title: 'ThinkIB eBook: Model Essays (Paper 2, Section C)', url: 'https://student.thinkib.net/geography/page/29163/model-essays' },
  ],
};

export default topic;
