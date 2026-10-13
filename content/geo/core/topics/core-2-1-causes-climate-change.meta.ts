import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-2-1-causes-climate-change',
  subject: 'geo',
  code: 'core-2.1',
  title: { en: 'Causes of global climate change', ru: 'Причины глобального изменения климата' },
  papers: ['P2'],
  order: 5,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain the natural greenhouse effect and how enhanced greenhouse gases change the energy balance', ru: 'Могу объяснить естественный парниковый эффект и то, как усиление парниковых газов меняет энергетический баланс' },
    { en: 'I can name the main greenhouse gases and their human sources', ru: 'Могу назвать основные парниковые газы и их антропогенные источники' },
    { en: 'I can describe the carbon cycle, its stores and flows, and explain how human activity changes it', ru: 'Могу описать углеродный цикл, его запасы и потоки и объяснить, как деятельность человека его меняет' },
    { en: 'I can explain positive and negative feedback loops in the climate system', ru: 'Могу объяснить положительные и отрицательные обратные связи в климатической системе' },
    { en: 'I can interpret evidence for global climate change, including temperature and CO₂ records', ru: 'Могу интерпретировать данные об изменении климата, включая ряды температуры и CO₂' },
  ],
  termIds: [
    'core-greenhouse-effect', 'core-enhanced-greenhouse-effect', 'core-greenhouse-gas', 'core-radiative-forcing', 'core-albedo',
    'core-milankovitch-cycles', 'core-solar-output', 'core-volcanic-aerosols', 'core-carbon-cycle', 'core-carbon-store',
    'core-carbon-flux', 'core-carbon-sink', 'core-positive-feedback', 'core-negative-feedback', 'core-ice-core',
  ],
  sims: ['geo.core-greenhouse-effect', 'geo.core-carbon-cycle'],
  questionIds: ['core-2-1-a1', 'core-2-1-b1', 'core-2-1-a2', 'core-2-1-a3', 'core-2-1-a4', 'core-2-1-a5'],
  caseIds: ['core-2-1-case-mauna-loa', 'core-2-1-case-arctic-sea-ice', 'core-2-1-case-china'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), core 2.1' },
    { kind: 'web', title: 'IPCC AR6 WG1, Summary for Policymakers (2021)', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/' },
    { kind: 'web', title: 'IPCC AR6 WG3, Summary for Policymakers (2022)', url: 'https://www.ipcc.ch/report/ar6/wg3/chapter/summary-for-policymakers/' },
    { kind: 'web', title: 'NOAA GML, Trends in atmospheric carbon dioxide', url: 'https://gml.noaa.gov/ccgg/trends/' },
    { kind: 'web', title: 'NOAA GML, Mauna Loa annual mean CO2 (data to 2025)', url: 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt' },
    { kind: 'web', title: 'Global Carbon Project, Global Carbon Budget 2025 (news release, 13 November 2025)', url: 'https://cger.nies.go.jp/gcp/news/20251113.html' },
    { kind: 'web', title: 'Global Carbon Project, national fossil CO2 emissions 2025 (territorial)', url: 'https://openclimatedata.net/emissions/global-carbon-budget/2025/national-fossil/territorial-emissions' },
    { kind: 'web', title: 'NASA Earth Observatory, Milankovitch (orbital) cycles', url: 'https://earthobservatory.nasa.gov/features/Milankovitch' },
    { kind: 'web', title: 'NASA, solar irradiance science', url: 'https://earth.gsfc.nasa.gov/climate/projects/solar-irradiance/science' },
    { kind: 'web', title: 'USGS Fact Sheet 113-97, The Cataclysmic 1991 Eruption of Mount Pinatubo', url: 'https://pubs.usgs.gov/fs/1997/fs113-97/' },
    { kind: 'web', title: 'Keeling et al. (2017), PNAS, carbon isotopic discrimination of land photosynthesis', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5625891' },
    { kind: 'web', title: 'NOAA NCEI, Antarctic ice-core CO2 composite (2015)', url: 'https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite-noaa.txt' },
    { kind: 'web', title: 'NSIDC Sea Ice Index, Version 4 (G02135)', url: 'https://nsidc.org/data/g02135' },
  ],
};

export default topic;
