import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.4 cases. Checked in the S9 round (14.10.2026) against the pages named in src: UAE ministry statement (2025)
// and UAE strategy page; PUB and MSE pages for Singapore; Tractebel, UN News, Down To Earth and Brookings for the GERD;
// the Indus Waters Treaty text (UN Treaty Series No. 6032); gov.cn for China; USGS for the High Plains aquifer.
// Open: the World Bank mediation (Wikipedia only), and the 2025–2026 Indus suspension, which rests on news reports, not on an official notice.
export const cases: CaseStudy[] = [
  {
    id: 'a-uae-desalination',
    subject: 'geo',
    title: { en: 'UAE: desalination and reuse in an arid state', ru: 'ОАЭ: опреснение и повторное использование воды в засушливой стране' },
    place: 'UAE',
    scale: 'national',
    years: '2025–2036',
    lat: 25.2048,
    lng: 55.2708,
    facts: {
      en: 'In 2025 the UAE Ministry of Energy and Infrastructure said that non-conventional water (desalinated seawater and treated wastewater) provides 53% of the country’s water supply. The same statement says that over 160 wastewater treatment plants have a total capacity of over 3 million cubic metres a day, that 73% of treated wastewater is reused to irrigate landscapes in the country’s cities, and that the UAE mostly relies on wastewater treatment plants to meet its irrigation needs. The UAE Water Security Strategy 2036 aims to cut total water demand by 21% and to raise the reuse of treated water to 95%.',
      ru: 'В 2025 году Министерство энергетики и инфраструктуры ОАЭ сообщило, что нетрадиционные источники воды (опреснённая морская вода и очищенные сточные воды) дают 53% водоснабжения страны. В том же сообщении сказано, что более 160 станций очистки сточных вод имеют общую мощность более 3 млн кубометров в сутки, что 73% очищенных сточных вод повторно используются для полива ландшафтов в городах страны и что ОАЭ в основном полагаются на станции очистки сточных вод при удовлетворении потребностей в орошении. Стратегия водной безопасности ОАЭ до 2036 года ставит цель снизить общий спрос на воду на 21% и повысить повторное использование очищенной воды до 95%.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'UAE Ministry of Energy and Infrastructure: “Water Security is a National Priority for the UAE” (23 March 2025)',
        url: 'https://www.moei.gov.ae/en/media-center/news/23/3/2025/water-security-is-a-national-priority-for-the-uae',
      },
      {
        kind: 'web',
        title: 'The UAE Water Security Strategy 2036 (UAE Government portal)',
        url: 'https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/environment-and-energy/the-uae-water-security-strategy-2036',
      },
    ],
  },
  {
    id: 'a-singapore-four-taps',
    subject: 'geo',
    title: { en: 'Singapore: the four national taps and NEWater', ru: 'Сингапур: «четыре национальных крана» (Four National Taps) и NEWater' },
    place: 'Singapore',
    scale: 'national',
    years: '1962–2065',
    lat: 1.3521,
    lng: 103.8198,
    facts: {
      en: 'Singapore’s water comes from four “national taps”: local catchment water, imported water, NEWater (high-grade water recycled from treated used water) and desalinated water (PUB). The 1962 Johore River Water Agreement with Malaysia lets Singapore draw up to 250 million gallons of water a day, and it expires in 2061 (Singapore Ministry of Sustainability and the Environment, 2025). The fifth desalination plant, Jurong Island, was officially opened in 2022. PUB projects that total water demand could almost double by 2065, with the non-domestic sector accounting for about 60%, and that NEWater and desalination will meet most of that demand.',
      ru: 'Вода Сингапура поступает из «четырёх национальных кранов» (Four National Taps): местного стока, импортной воды, NEWater (высококачественной воды, получаемой из очищенной использованной воды) и опреснённой воды (PUB). По соглашению о реке Джохор 1962 года с Малайзией Сингапур может забирать до 250 млн галлонов воды в сутки; соглашение истекает в 2061 году (Министерство устойчивого развития и окружающей среды Сингапура, 2025). Пятый опреснительный завод, Jurong Island, официально открыт в 2022 году. PUB прогнозирует, что общий спрос на воду может почти удвоиться к 2065 году, при этом на непромышленный сектор придётся около 60% спроса, а NEWater и опреснение покроют большую его часть.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'PUB, Singapore’s National Water Agency: Singapore’s Water Loop',
        url: 'https://www.pub.gov.sg/public/waterloop',
      },
      {
        kind: 'web',
        title: 'PUB, Singapore’s National Water Agency: Our Water Story, Our Four National Taps (the four sources; NEWater is recycled from treated used water)',
        url: 'https://www.pub.gov.sg/Public/WaterLoop/OurWaterStory',
      },
      {
        kind: 'web',
        title: 'Singapore Ministry of Sustainability and the Environment: written reply on the water agreement (February 2025)',
        url: 'https://www.mse.gov.sg/latest-news/written-reply-to-parliamentary-question-on-water-agreement-feb2025/',
      },
    ],
  },
  {
    id: 'a-gerd-nile',
    subject: 'geo',
    title: { en: 'Grand Ethiopian Renaissance Dam: the dispute over the Nile', ru: 'Великая эфиопская плотина возрождения (GERD): спор о Ниле' },
    place: 'Blue Nile, Ethiopia (downstream: Sudan and Egypt)',
    scale: 'regional',
    years: '1959–2025',
    lat: 11.2,
    lng: 35.1,
    facts: {
      en: 'The Grand Ethiopian Renaissance Dam on the Blue Nile had its completion officially announced on 9 September 2025, when its turbines started up, with a capacity of 5,150 MW (Tractebel, 2025). The reservoir behind the dam holds 74 billion cubic metres (UN News, 2020). Talks in 2020 centred on how fast the reservoir fills and what effect this would have on water supplies in Sudan and Egypt downstream. The 1959 Egypt–Sudan treaty augmented the water allocations granted to Egypt and Sudan by the 1929 Anglo-Egyptian Treaty; both treaties gave Egypt a veto over any construction project on the Nile or its tributaries (Down To Earth, 2025). The legal framework regulating the allocation of the Nile’s waters has been dominated by colonial-era agreements, which Sudan and Egypt embrace and the nine upstream states contest (Down To Earth, 2025). According to Brookings (2015), the Khartoum declaration of March 2015, as far as is known, deals only with the dam and does not tackle the broader, still contentious sharing of Nile waters among all riparian states.',
      ru: 'Великая эфиопская плотина возрождения (GERD) на Голубом Ниле: о её завершении официально объявили 9 сентября 2025 года, когда турбины начали работать; её мощность — 5 150 МВт (Tractebel, 2025). Водохранилище за плотиной вмещает 74 млрд кубометров (UN News, 2020). На переговорах в 2020 году обсуждали, как быстро заполняется водохранилище и как это скажется на водоснабжении Судана и Египта ниже по течению. Договор 1959 года между Египтом и Суданом расширил квоты на воду, которые англо-египетский договор 1929 года предоставил Египту и Судану; оба договора дали Египту право вето на любые строительные проекты на Ниле и его притоках (Down To Earth, 2025). Правовую основу, регулирующую распределение вод Нила, во многом определяют колониальные соглашения; их поддерживают Судан и Египет, а девять государств верхнего течения оспаривают (Down To Earth, 2025). По данным Brookings (2015), Хартумская декларация (март 2015 года), насколько известно, касается только плотины и не решает более широкого и по-прежнему спорного вопроса о распределении вод Нила между всеми государствами бассейна.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'Tractebel: Africa’s largest hydropower scheme inaugurated in Ethiopia (17 September 2025)',
        url: 'https://tractebel-engie.com/en/news/africas-largest-hydropower-scheme-inaugurated-in-ethiopia-doubling-national-power-capacity/',
      },
      {
        kind: 'web',
        title: 'UN News: Guterres encourages Member States to reach agreement over Ethiopian Nile dam project (May 2020)',
        url: 'https://news.un.org/en/story/2020/05/1064452',
      },
      {
        kind: 'web',
        title: 'Brookings Institution: “The limits of the new ‘Nile Agreement’” (2015)',
        url: 'https://www.brookings.edu/articles/the-limits-of-the-new-nile-agreement',
      },
      {
        kind: 'web',
        title: 'Down To Earth: “Ethiopia’s mega dam has taken 14 years to build…” (9 September 2025)',
        url: 'https://www.downtoearth.org.in/amp/story/africa/ethiopias-mega-dam-has-taken-14-years-to-build-what-it-means-for-the-niles-11-river-states-why-its-so-controversial',
      },
    ],
  },
  {
    id: 'a-indus-treaty',
    subject: 'geo',
    title: { en: 'Indus Waters Treaty: an agreement under strain', ru: 'Договор о водах Инда: соглашение под давлением' },
    place: 'Indus basin, India and Pakistan (signed in Karachi)',
    scale: 'regional',
    years: '1960–2026',
    lat: 24.86,
    lng: 67.01,
    facts: {
      en: 'The Indus Waters Treaty was signed at Karachi on 19 September 1960 by India and Pakistan, after negotiations that the World Bank mediated; the Bank is also a party to the treaty (UN Treaty Series, No. 6032). Under Article II, the waters of the Eastern Rivers (Ravi, Beas and Sutlej) are available for India’s unrestricted use, apart from specified exceptions. Under Article III, Pakistan receives the Western Rivers (Indus, Jhelum and Chenab) for unrestricted use, and India may use them only for domestic, non-consumptive, agricultural and hydro-electric purposes, within the limits set in the annexes. On 23 April 2025, after the Pahalgam terror attack in Jammu and Kashmir, India announced that it was holding the treaty in abeyance. In March 2026 India’s permanent representative to the UN, P. Harish, said that the treaty would remain in abeyance until Pakistan ends its support for terrorism.',
      ru: 'Договор о водах Инда был подписан в Карачи 19 сентября 1960 года Индией и Пакистаном после переговоров, которые проводились при посредничестве Всемирного банка; Банк также является стороной договора (Сборник договоров ООН, № 6032). По статье II воды восточных рек (Рави, Беас и Сатледж) предназначены для неограниченного использования Индией, за исключением оговорённых случаев. По статье III Пакистан получает западные реки (Инд, Джелам и Ченаб) для неограниченного использования, а Индия может использовать их только для бытового, неизрасходуемого, сельскохозяйственного и гидроэнергетического использования в пределах, установленных приложениями к договору. 23 апреля 2025 года, после теракта в Пахалгаме в Джамму и Кашмире, Индия объявила, что договор приостановлен (in abeyance). В марте 2026 года постоянный представитель Индии при ООН П. Хариш заявил, что договор останется приостановленным, пока Пакистан не прекратит поддерживать терроризм.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'UN Treaty Series No. 6032 (vol. 419): The Indus Waters Treaty 1960, with annexes, signed at Karachi on 19 September 1960 (official English text)',
        url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%20419/volume-419-I-6032-English.pdf',
      },
      {
        kind: 'web',
        title: 'World Bank Group Timeline: India and Pakistan sign Indus Waters Treaty (19 September 1960)',
        url: 'https://timeline.worldbank.org/en/timeline/eventdetail/1716',
      },
      {
        kind: 'web',
        title: 'Wikipedia: Indus Waters Treaty (World Bank mediation of the negotiations)',
        url: 'https://en.wikipedia.org/wiki/Indus_Waters_Treaty',
      },
      {
        kind: 'web',
        title: 'PTI report, Deccan Herald: India issues notification on holding Indus Water Treaty in abeyance (25 April 2025)',
        url: 'https://www.deccanherald.com/amp/story/india%2Findia-issues-notification-on-holding-indus-water-treaty-in-abeyance-3510066',
      },
      {
        kind: 'web',
        title: 'All India Radio (Akashvani News): India says Indus Waters Treaty to remain in abeyance (March 2026)',
        url: 'https://www.newsonair.gov.in/india-says-indus-waters-treaty-to-remain-in-abeyance-until-pakistan-ends-support-to-terrorism',
      },
      {
        kind: 'web',
        title: 'Organiser: “India reiterates at UN that Indus Waters Treaty will remain in abeyance until Pakistan ends terror support” (20 March 2026)',
        url: 'https://organiser.org/2026/03/20/344996/bharat/india-reiterates-at-un-indus-waters-treaty-to-remain-in-abeyance-until-pakistan-ends-terror-support/amp/',
      },
    ],
  },
  {
    id: 'a-snwtp-china',
    subject: 'geo',
    title: { en: 'South-North Water Transfer Project, China', ru: 'Проект переброски воды «Юг — Север» (South-North Water Transfer Project), Китай' },
    place: 'China: from Hubei (Danjiangkou) to northern China',
    scale: 'national',
    years: '2014–2024',
    lat: 32.5,
    lng: 111.5,
    facts: {
      en: 'The first phases of the middle and eastern routes of China’s South-North Water Diversion Project were put into operation in late 2014. In the past ten years they diverted more than 76.7 billion cubic metres of water to northern China, and annual transfers rose from over 2 billion to 10 billion cubic metres. More than 185 million people in China have directly benefited, according to Xinhua’s report on gov.cn (12 December 2024).',
      ru: 'Первые очереди среднего и восточного маршрутов Проекта переброски воды с юга на север в Китае были введены в эксплуатацию в конце 2014 года. За последние десять лет по этим маршрутам на север страны перебросили более 76,7 млрд кубометров воды, а годовой объём переброски вырос с более чем 2 до 10 млрд кубометров. По данным агентства «Синьхуа» (Xinhua) на портале gov.cn, более 185 млн человек в Китае получили прямую выгоду (12 декабря 2024 года).',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'Xinhua, on the Chinese government portal gov.cn: China’s mega water diversion project benefits over 185 million people (12 December 2024)',
        url: 'https://english.www.gov.cn/news/202412/12/content_WS675a78afc6d0868f4e8ede24.html',
      },
    ],
  },
  {
    id: 'a-ogallala-aquifer',
    subject: 'geo',
    title: { en: 'High Plains (Ogallala) aquifer: a groundwater store that is being drawn down', ru: 'Высокие равнины (Огаллала): запасы подземной воды, которые сокращаются' },
    place: 'High Plains (Ogallala) aquifer, USA: parts of eight states',
    scale: 'regional',
    years: '1950–2015',
    lat: 39.0,
    lng: -101.5,
    facts: {
      en: 'The High Plains aquifer underlies 111.8 million acres (about 175,000 square miles) in parts of eight states: Colorado, Kansas, Nebraska, New Mexico, Oklahoma, South Dakota, Texas and Wyoming. Water-level declines began soon after substantial irrigation with groundwater started, about 1950. By 2015 the area-weighted average water level had fallen by 15.8 feet since predevelopment (about 1950), while individual wells ranged from a rise of 84 feet to a decline of 234 feet. Recoverable water in storage was about 2.91 billion acre-feet in 2015: a loss of about 273.2 million acre-feet since predevelopment, including 10.7 million acre-feet between 2013 and 2015 (USGS, 2017).',
      ru: 'Водоносный горизонт High Plains залегает под 111,8 млн акров (около 175 000 квадратных миль) в восьми штатах: Колорадо, Канзас, Небраска, Нью-Мексико, Оклахома, Южная Дакота, Техас и Вайоминг. Падение уровня воды началось вскоре после того, как около 1950 года начали широко использовать подземную воду для орошения. К 2015 году средний по площади уровень воды понизился на 15,8 фута по сравнению с уровнем до массового использования (около 1950 года), а по отдельным скважинам изменения шли от подъёма на 84 фута до падения на 234 фута. Запасы извлекаемой воды составляли около 2,91 млрд акр-футов в 2015 году: потеря около 273,2 млн акр-футов с 1950 года, в том числе 10,7 млн акр-футов за 2013–2015 годы (USGS, 2017).',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'USGS Scientific Investigations Report 2017–5040 (McGuire, 2017): Water-level and recoverable water in storage changes, High Plains aquifer, predevelopment to 2015 and 2013–15',
        url: 'https://pubs.usgs.gov/publication/sir20175040',
      },
    ],
  },
];
