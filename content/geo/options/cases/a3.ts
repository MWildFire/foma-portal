import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.3 cases. Every figure below was checked against the page named in src (WebFetch, downloaded PDFs
// and the WHO 4th edition text, 13.10.2026). Figures without a checked source were left out.
export const cases: CaseStudy[] = [
  {
    id: 'a-cape-town-drought-2018',
    subject: 'geo',
    title: { en: 'Cape Town: a drought that nearly ran out of water', ru: 'Кейптаун: засуха, из-за которой почти закончилась вода' },
    place: 'Cape Town, South Africa',
    scale: 'local',
    years: '2017–2018',
    lat: -33.9249,
    lng: 18.4241,
    facts: {
      en: 'In January 2018 the City of Cape Town said that a 1.4% drop in dam levels had moved Day Zero, the date when taps would run dry, forward from 22 April to 12 April 2018 (SAnews, 24 January 2018). The City put its water losses at 16%, against a national average of 36%. It was installing thousands of water management devices on the properties of high users and running pressure management across the city, while it urged residents to join the water-saving effort.',
      ru: 'В январе 2018 года администрация Кейптауна заявила, что падение уровня водохранилищ на 1,4% передвинуло «День ноль» (Day Zero) — дату, когда в кранах закончилась бы вода, — с 22 апреля на 12 апреля 2018 года (SAnews, 24 января 2018). Потери воды в городе составляли 16% при среднем по стране показателе 36%. Город устанавливал тысячи устройств управления водой у крупных потребителей и проводил регулирование давления по всей сети, одновременно призывая жителей присоединиться к экономии воды.',
    },
    usedFor: ['a3-water-scarcity'],
    src: [
      {
        kind: 'web',
        title: 'SAnews (South African government news agency): Drop in dam levels brings Day Zero closer, 24 January 2018',
        url: 'https://www.sanews.gov.za/node/37626',
      },
    ],
  },
  {
    id: 'a-bangladesh-arsenic',
    subject: 'geo',
    title: { en: 'Bangladesh: arsenic in shallow tubewells', ru: 'Бангладеш: мышьяк в неглубоких трубчатых колодцах' },
    place: 'Bangladesh',
    scale: 'national',
    years: '2001',
    lat: 23.685,
    lng: 90.3563,
    facts: {
      en: 'A survey of 3,534 wells (excluding the Chittagong Hill Tracts), made by the British Geological Survey with Bangladesh’s Department of Public Health Engineering and reported in 2001, found that 27% of shallow tubewells (under 150 m deep) exceeded the Bangladesh standard of 50 µg/L of arsenic, and 46% exceeded the WHO guideline of 10 µg/L. Deep wells (over 150 m) had 1% and 5%. The survey estimated that 35 million people were exposed to more than 50 µg/L.',
      ru: 'Обследование 3 534 скважин (без Читтагонгских холмов), проведённое Британской геологической службой (BGS) совместно с Департаментом общественного здравоохранения и инженерии Бангладеш (DPHE) и опубликованное в 2001 году, показало: в 27% неглубоких трубчатых колодцев (глубиной до 150 м) содержание мышьяка превышало национальный стандарт Бангладеш 50 мкг/л, а в 46% — норматив ВОЗ 10 мкг/л. В глубоких скважинах (глубже 150 м) эти доли составили 1% и 5%. По оценке обследования, 35 млн человек подвергались воздействию мышьяка выше 50 мкг/л.',
    },
    usedFor: ['a3-water-scarcity'],
    src: [
      {
        kind: 'web',
        title: 'NERC Open Research Archive: BGS and DPHE, Arsenic contamination of groundwater in Bangladesh, report WC/00/19 (2001), abstract',
        url: 'https://nora.nerc.ac.uk/id/eprint/11986/',
      },
      {
        kind: 'web',
        title: 'WHO fact sheet: Arsenic (7 December 2022)',
        url: 'https://www.who.int/news-room/fact-sheets/detail/arsenic',
      },
    ],
  },
  {
    id: 'a-toledo-2014',
    subject: 'geo',
    title: { en: 'Toledo, Ohio: algal toxin in the tap water (2014)', ru: 'Толедо, Огайо: токсин водорослей в водопроводной воде (2014)' },
    place: 'Toledo, Ohio, USA (Lake Erie)',
    scale: 'local',
    years: '2014',
    lat: 41.6528,
    lng: -83.5379,
    facts: {
      en: 'In August 2014 microcystin, a toxin made by blue-green algae (cyanobacteria) in Lake Erie, contaminated the water supply of the City of Toledo. The City’s water department provides water to about 500,000 people in the city and elsewhere in Northwest Ohio, and for three days the water was contaminated. Ohio EPA recorded advisories for microcystin in finished drinking water at public water systems in 2013 and 2014. The WHO provisional guideline for microcystins in drinking water is 1 µg/L.',
      ru: 'В августе 2014 года микроцистин — токсин сине-зелёных водорослей (цианобактерий) в озере Эри — загрязнил водоснабжение города Толедо. Водный отдел города обслуживает около 500 тыс. человек в самом городе и в других местах северо-западной части Огайо, и три дня вода была загрязнена. Агентство по охране окружающей среды Огайо (Ohio EPA) фиксировало предупреждения о микроцистине в питьевой воде на системах водоснабжения в 2013 и 2014 годах. Предварительный норматив ВОЗ для микроцистинов в питьевой воде — 1 мкг/л.',
    },
    usedFor: ['a3-water-scarcity'],
    src: [
      {
        kind: 'web',
        title: 'US District Court, Northern District of Ohio, Environmental Law and Policy Center v. EPA, Case 3:17-cv-01514, order of 11 April 2018 (background on Toledo)',
        url: 'https://assets.documentcloud.org/documents/4436700/Carr-Order.pdf',
      },
      {
        kind: 'web',
        title: 'Ohio EPA, Ohio EPA’s Experience with Harmful Algal Blooms at Public Water Systems (presentation, 27 April 2016, archived by US EPA)',
        url: 'https://19january2021snapshot.epa.gov/sites/static/files/2016-05/documents/region5-ohio-hab-experience-public-water.pdf',
      },
      {
        kind: 'web',
        title: 'WHO: Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda (2022)',
        url: 'https://www.who.int/publications/i/item/9789240045064',
      },
    ],
  },
];
