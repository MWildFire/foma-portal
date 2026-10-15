import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.3 cases. Status (R01, 14.10.2026, S3): Toledo (CDC MMWR 2016; PBS NewsHour 2014) and the WHO 2022 microcystin fact sheet (printed p. 430 (fact-sheet PDF p. 1)) were opened in R01.
// The Bangladesh report number (NERC ORA, WC/00/019) was checked in R01. Cape Town was rechecked in R02 against News24 (23 January 2018): the day count is kept, and the water-loss figures that no source confirmed were removed. The Aral Sea figures (UNDP page) were not rechecked.
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
      en: 'In January 2018 the City of Cape Town said that a 1.4% drop in dam levels had moved Day Zero, the date when taps would run dry, forward by nine days, to 12 April 2018 (News24, 23 January 2018). It was installing thousands of water management devices on the properties of high users and running pressure management across the city, while it urged residents to join the water-saving effort.',
      ru: 'В январе 2018 года администрация Кейптауна заявила, что падение уровня водохранилищ на 1,4% передвинуло «День ноль» (Day Zero) — дату, когда в кранах закончилась бы вода, — на девять дней, до 12 апреля 2018 года (News24, 23 января 2018). Город устанавливал тысячи устройств управления водой у крупных потребителей и проводил регулирование давления по всей сети, одновременно призывая жителей присоединиться к экономии воды.',
    },
    usedFor: ['a3-water-scarcity'],
    src: [
      {
        kind: 'web',
        title: 'News24: Day Zero now on April 12 for Cape Town, 23 January 2018',
        url: 'https://www.news24.com/southafrica/news/day-zero-now-on-april-12-for-cape-town-20180123',
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
        title: 'NERC Open Research Archive: BGS and DPHE, Arsenic contamination of groundwater in Bangladesh, report WC/00/019 (2001), abstract',
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
      en: 'In August 2014 microcystin, a toxin made by blue-green algae (cyanobacteria) in Lake Erie, contaminated the water supply of the City of Toledo. A do-not-drink advisory was in force from Saturday 2 August to the morning of Monday 4 August 2014. It was issued for all customers of the Collins Park water treatment plant, which had 440,552 residents in four counties in 2010 (CDC, 2016), and the mayor lifted it at a news conference on 4 August (PBS NewsHour, 2014). Ohio’s first microcystin do-not-drink advisory had been issued in 2013, in Carroll Township (CDC, 2016). The WHO provisional lifetime guideline value for total microcystins (the sum of all congeners, free and cell-bound) in drinking water is 1 µg/L. The value is provisional and rests on data for microcystin-LR alone, the most studied variant (WHO, 2022, chemical fact sheet “Microcystins”, p. 430).',
      ru: 'В августе 2014 года микроцистин — токсин сине-зелёных водорослей (цианобактерий) в озере Эри — загрязнил водоснабжение города Толедо. Предупреждение «не пить воду» действовало с субботы 2 августа до утра понедельника 4 августа 2014 года и было выпущено для всех потребителей водоочистной станции «Коллинз-Парк», в которой в 2010 году насчитывалось 440 552 жителя четырёх округов (CDC, 2016). Мэр снял предупреждение на пресс-конференции 4 августа (PBS NewsHour, 2014). Первое в штате Огайо предупреждение «не пить воду» из-за микроцистина было выпущено в 2013 году в Кэрролл-Тауншипе (Carroll Township) (CDC, 2016). Предварительное руководящее значение ВОЗ при пожизненном потреблении воды для суммы всех вариантов микроцистинов (congeners; свободных в воде и связанных с клетками) в питьевой воде составляет 1 мкг/л. Оно предварительное и опирается на данные только по микроцистину-LR, наиболее изученному варианту (ВОЗ, 2022, факт-лист «Microcystins», с. 430).',
    },
    usedFor: ['a3-water-scarcity', 'a-essay-option'],
    src: [
      {
        kind: 'web',
        title: 'CDC, MMWR 2016;65(35): Community Needs Assessment After Microcystin Toxin Contamination of a Municipal Water Supply, Lucas County, Ohio, September 2014',
        url: 'https://www.cdc.gov/mmwr/volumes/65/wr/mm6535a1.htm',
      },
      {
        kind: 'web',
        title: 'PBS NewsHour: Toledo mayor lifts city’s water ban (4 August 2014)',
        url: 'https://www.pbs.org/newshour/nation/toledo-mayor-lifts-citywater-ban-lifted-nearly',
      },
      {
        kind: 'web',
        title: 'WHO: Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda (2022)',
        url: 'https://www.who.int/publications/i/item/9789240045064',
      },
      {
        kind: 'web',
        title: 'WHO: Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda (2022), chemical fact sheet “Microcystins”, printed p. 430 (fact-sheet PDF p. 1)',
        url: 'https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/chemical-fact-sheets-2022/microcystins-fact-sheet-2022.pdf?sfvrsn=e1b5c768_2&download=true',
      },
    ],
  },
  {
    id: 'a-aral-sea',
    subject: 'geo',
    title: { en: 'Aral Sea: a lake that lost most of its water in half a century', ru: 'Аральское море: озеро, которое за полвека потеряло большую часть воды' },
    place: 'Aral Sea, Central Asia (Kazakhstan and Uzbekistan)',
    scale: 'regional',
    years: '1960–2020s',
    lat: 45.0,
    lng: 59.0,
    facts: {
      en: 'According to UNDP, the Aral Sea, once the world’s fourth-largest inland lake, has lost around 90% of its water volume and 75% of its surface area over the past half century. The exposed seabed causes soil salinity, dust and salt storms, lower agricultural productivity and water insecurity across the region. Uzbekistan has made strengthening resilience in the Priaralie (the Aral Sea coastal zone) a national priority.',
      ru: 'По данным ПРООН (UNDP), Аральское море, некогда четвёртое по величине бессточное озеро в мире, за последние полвека потеряло около 90% объёма воды и 75% площади. Обнажившееся дно вызывает засоление почв, пыльные и солевые бури, снижение продуктивности сельского хозяйства и нехватку воды в регионе. Узбекистан сделал укрепление устойчивости Приаралья (прибрежной зоны Аральского моря) национальным приоритетом.',
    },
    usedFor: ['a3-water-scarcity'],
    src: [
      {
        kind: 'web',
        title: 'UNDP Climate Promise: How landlocked countries are prioritizing water in their adaptation planning (Uzbekistan section; the 90% and 75% figures link to a ScienceAlert article)',
        url: 'https://climatepromise.undp.org/news-and-stories/how-landlocked-countries-are-prioritizing-water-their-adaptation-planning',
      },
    ],
  },
];
