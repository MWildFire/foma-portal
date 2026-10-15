import type { Question } from '../../../../src/contract/types';

const infographicUrl = new URL('../topics/assets/core-1-1-infographic.svg?no-inline', import.meta.url).href;

// Topic core-1.1. Section A: five original questions (2 to 6 marks). Section B: one infographic question (10 marks).
// Figures come from UN DESA WPP 2024 (Medium variant, 2023 values), UNDP HDR 2025 (HDI 2023) and the World Bank
// Atlas-method GNI per capita (2025). Section A calculations use invented data and were checked by script.
const topicIds = ['core-1-1-population-development'];

export const questions: Question[] = [
  {
    id: 'core-1-1-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A country has a mid-year population of 1,850,000. In one year there are 43,700 births and 11,270 deaths. Calculate, per 1000 people: (i) the crude birth rate; (ii) the crude death rate; (iii) the natural increase. Show your working.',
      ru: 'В стране среднегодовая численность населения составляет 1 850 000 человек. За год родились 43 700 человек и умерли 11 270. Рассчитайте на 1000 человек: (i) общий коэффициент рождаемости; (ii) общий коэффициент смертности; (iii) естественный прирост. Покажите ход решения.',
    },
    markscheme: {
      en: '1 mark: (i) CBR = 43,700 / 1,850,000 × 1000 = 23.6 per 1000; 1 mark: (ii) CDR = 11,270 / 1,850,000 × 1000 = 6.1 per 1000; 1 mark: (iii) natural increase = 23.6 − 6.1 = 17.5 per 1000 (accept 17.5; the unrounded value is 17.53; error carried forward from (i) and (ii)).',
      ru: '1 балл: (i) общий коэффициент рождаемости (CBR) = 43 700 / 1 850 000 × 1000 = 23,6 на 1000; 1 балл: (ii) общий коэффициент смертности (CDR) = 11 270 / 1 850 000 × 1000 = 6,1 на 1000; 1 балл: (iii) естественный прирост = 23,6 − 6,1 = 17,5 на 1000 (засчитывается 17,5; без округления 17,53; перенос ошибки из пунктов (i) и (ii)).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-1-1-a3',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the shape of a population pyramid changes as a country moves from stage 2 to stage 4 of the demographic transition model.',
      ru: 'Объясните, как меняется форма возрастно-половой пирамиды, когда страна переходит со стадии 2 на стадию 4 модели демографического перехода.',
    },
    markscheme: {
      en: '1 mark: in stage 2 the base is wide because birth rates are high and many children are born each year; 1 mark: as birth rates fall in stages 3 and 4, the base narrows; 1 mark: as death rates fall, more people survive into the middle age groups, which widen; 1 mark: as life expectancy rises the top widens, so the pyramid shows an ageing population by stage 4 (a figure such as the UK median age of 39.8 years in 2023, UN WPP 2024, earns this mark if linked).',
      ru: '1 балл: на стадии 2 основание широкое, потому что рождаемость высока и каждый год рождается много детей; 1 балл: по мере снижения рождаемости на стадиях 3 и 4 основание сужается; 1 балл: по мере снижения смертности больше людей доживает до средних возрастов, и эти группы расширяются; 1 балл: по мере роста продолжительности жизни верх пирамиды расширяется, и к стадии 4 пирамида показывает стареющее население (цифра, например медианный возраст Великобритании 39,8 года в 2023 году, UN WPP 2024, засчитывается, если она связана с ответом).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-1-1-a4',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a country’s level of development, shown by its Human Development Index (HDI) and GNI per capita, is linked to its population structure.',
      ru: 'Объясните, как уровень развития страны, который показывают индекс развития человеческого потенциала (ИРЧП) и ВНД на душу населения, связан с её возрастной структурой населения.',
    },
    markscheme: {
      en: '1 mark: a higher HDI and income usually go with lower birth rates; 1 mark: education, and especially women’s schooling and access to contraception, reduces the number of children per woman; 1 mark: better health care lowers death rates and raises life expectancy, so the share of older people grows; 1 mark: a named example with figures, for example Niger (HDI 0.419, median age 15.2 years) and Japan (HDI 0.925, median age 49.0 years) in 2023 (UNDP HDR 2025; UN WPP 2024).',
      ru: '1 балл: более высокие ИРЧП и доход обычно сопровождаются меньшей рождаемостью; 1 балл: образование, особенно образование женщин и доступ к контрацепции, сокращает число детей на одну женщину; 1 балл: лучшее здравоохранение снижает смертность и повышает ожидаемую продолжительность жизни, поэтому доля пожилых людей растёт; 1 балл: пример с цифрами, например Нигер (ИРЧП 0,419, медианный возраст 15,2 года) и Япония (ИРЧП 0,925, медианный возраст 49,0 года) в 2023 году (UNDP HDR 2025; UN WPP 2024).',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-1-1-a5',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Examine',
    prompt: {
      en: 'Examine the views of Malthus and Boserup on the relationship between population growth and food supply. Refer to one named example in your answer.',
      ru: 'Рассмотрите взгляды Мальтуса и Бозеруп на связь между ростом населения и обеспечением продовольствием. В ответе приведите один названный пример.',
    },
    markscheme: {
      en: '1 mark: Malthus (1798): population grows geometrically and food supply arithmetically, so food shortages follow; 1 mark: Malthus’s checks are positive (famine, disease, war) and preventive (later marriage, fewer births); 1 mark: Boserup (1965): population pressure makes farmers intensify production and adopt new techniques, so food supply grows with population; 1 mark: the named example is applied to one theory, for example the Green Revolution in India in the 1960s and 1970s, when high-yield seeds, fertilisers and irrigation raised grain output; 1 mark: an evaluation point, for example Malthus underestimated technological change, while Boserup underestimated environmental limits, conflict and unequal access to food; 1 mark: a justified judgement, for example that the outcome depends on technology, institutions and the rate of population growth. Maximum 6 marks.',
      ru: '1 балл: Мальтус (1798): население растёт в геометрической прогрессии, а продовольствие — в арифметической, поэтому возникает нехватка еды; 1 балл: сдерживающие факторы Мальтуса — положительные (голод, болезни, войны) и превентивные (позднее вступление в брак, меньше рождений); 1 балл: Бозеруп (1965): давление населения заставляет фермеров интенсифицировать производство и внедрять новые методы, поэтому производство продовольствия растёт вместе с населением; 1 балл: названный пример применён к одной из теорий, например «зелёная революция» в Индии в 1960–1970-е годы, когда высокоурожайные сорта, удобрения и орошение увеличили производство зерна; 1 балл: оценка, например Мальтус недооценил технологический прогресс, а Бозеруп — экологические ограничения, конфликты и неравный доступ к продовольствию; 1 балл: обоснованное суждение, например, что исход зависит от технологий, институтов и темпов роста населения. Максимум 6 баллов.',
    },
    origin: 'original',
    minutes: 8,
  },
  {
    id: 'core-1-1-b1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (infographic) shows the crude birth rate and the crude death rate, per 1000 people, for five countries in 2023. Source: United Nations, Department of Economic and Social Affairs, Population Division, World Population Prospects 2024 (Medium variant), 2023 values.' + ' [Open infographic](' + infographicUrl + ')',
      ru: 'Рисунок 1 (инфографика) показывает общий коэффициент рождаемости и общий коэффициент смертности на 1000 человек для пяти стран в 2023 году. Источник: Организация Объединённых Наций, Департамент по экономическим и социальным вопросам, Отдел народонаселения, World Population Prospects 2024 (вариант Medium), значения за 2023 год.' + ' [Открыть инфографику](' + infographicUrl + ')',
    },
    prompt: {
      en: '(a) Identify the stage of the demographic transition model for Niger, the United Kingdom and Japan. [3]\n\n(b) Calculate the natural increase per 1000 people for Bangladesh and for Germany. Show your working. [3]\n\n(c) Using the infographic and your knowledge, explain why natural change is strongly positive in Niger but negative in Japan. [4]',
      ru: '(a) Определите стадию модели демографического перехода для Нигера, Великобритании и Японии. [3]\n\n(b) Рассчитайте естественный прирост на 1000 человек для Бангладеш и для Германии. Покажите ход решения. [3]\n\n(c) Используя инфографику и свои знания, объясните, почему естественный прирост в Нигере сильно положительный, а в Японии отрицательный. [4]',
    },
    markscheme: {
      en: '(a) 1 mark each, maximum 3: Niger = stage 2 (early expanding), because the birth rate of 41.9 is far above the death rate of 8.9 per 1000; United Kingdom = stage 4 (low stationary), because both rates are low (10.0 and 9.5) and natural increase is close to zero (0.5); Japan = stage 5 (declining), because the death rate of 12.3 is above the birth rate of 6.0 per 1000. Credit a stage only with the figures as evidence.\n\n(b) 1 mark: Bangladesh 20.4 − 5.0 = 15.4 per 1000 (accept 15.3 to 15.4, because the rates are rounded); 1 mark: Germany 8.5 − 12.2 = −3.7 per 1000 (accept −3.7); 1 mark: Bangladesh grows naturally by about 1.5% a year, while Germany has a natural decrease of about 0.4% a year, so its deaths exceed its births.\n\n(c) 1 mark each, maximum 4: Niger has births far above deaths, so natural increase is about 33 per 1000; high fertility and a young population (many women of childbearing age) keep births high. Japan has deaths above births, so natural change is negative; low fertility and an ageing population (many deaths at older ages) keep births low and deaths high.',
      ru: '(a) 1 балл за каждый ответ, максимум 3: Нигер = стадия 2 (ранний рост), потому что рождаемость 41,9 намного выше смертности 8,9 на 1000; Великобритания = стадия 4 (низкий стационар), потому что обе величины низкие (10,0 и 9,5), а естественный прирост близок к нулю (0,5); Япония = стадия 5 (сокращение), потому что смертность 12,3 выше рождаемости 6,0 на 1000. Стадия засчитывается только с цифрами в качестве обоснования.\n\n(b) 1 балл: Бангладеш 20,4 − 5,0 = 15,4 на 1000 (засчитывается 15,3–15,4, так как значения округлены); 1 балл: Германия 8,5 − 12,2 = −3,7 на 1000 (засчитывается −3,7); 1 балл: в Бангладеш естественный прирост около 1,5% в год, а в Германии естественная убыль около 0,4% в год, то есть смертей больше, чем рождений.\n\n(c) 1 балл за каждый пункт, максимум 4: в Нигере рождений намного больше смертей, поэтому естественный прирост около 33 на 1000; высокая рождаемость и молодое население (много женщин репродуктивного возраста) поддерживают высокое число рождений. В Японии смертей больше рождений, поэтому естественный прирост отрицательный; низкая рождаемость и стареющее население (много смертей в пожилом возрасте) поддерживают низкое число рождений и высокую смертность.',
    },
    origin: 'original',
    minutes: 15,
  },
];
