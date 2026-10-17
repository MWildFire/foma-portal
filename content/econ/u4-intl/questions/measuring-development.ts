import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-measuring-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Country A has a gross national income (GNI) of USD 45000 million and a population of 3.1 million. Both figures are illustrative and converted at PPP. Calculate the GNI per capita of country A in USD. Give your answer to the nearest whole USD.',
      ru: 'Валовой национальный доход (GNI) страны A составляет 45000 млн USD, а численность её населения — 3,1 млн человек. Оба показателя условные и пересчитаны по PPP. Рассчитайте ВНД на душу населения страны A в USD. Ответ дайте с точностью до целого USD.',
    },
    markscheme: {
      en: '1 mark: GNI per capita = GNI / population. 1 mark: 45000 / 3.1 = 14516.1 (the million cancels, so the result is USD per person). 1 mark: USD 14516 per person, to the nearest whole USD.',
      ru: '1 балл: ВНД на душу населения = ВНД / численность населения. 1 балл: 45000 / 3,1 = 14516,1 (миллионы сокращаются, результат в USD на человека). 1 балл: 14516 USD на человека, с точностью до целого USD.',
    },
    answer: '14516',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-measuring-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Country A has a GNI per capita of USD 14516 and country B has a GNI per capita of USD 2350, both converted at PPP. Calculate how many times greater the GNI per capita of country A is than that of country B. Give your answer to one decimal place.',
      ru: 'ВНД на душу населения страны A составляет 14516 USD, а страны B — 2350 USD; оба показателя пересчитаны по PPP. Рассчитайте, во сколько раз ВНД на душу населения страны A больше, чем у страны B. Ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: ratio = 14516 / 2350 = 6.18 (to two decimal places). 1 mark: country A has about 6.2 times the GNI per capita of country B.',
      ru: '1 балл: отношение = 14516 / 2350 = 6,18 (с двумя знаками после запятой). 1 балл: ВНД на душу населения страны A примерно в 6,2 раза больше, чем у страны B.',
    },
    answer: '6.2',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'econ-measuring-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why economists use the Human Development Index (HDI) as well as GNI per capita when they compare the development of two countries.',
      ru: 'Объясните, почему экономисты используют индекс развития человеческого потенциала (HDI) вместе с ВНД на душу населения при сравнении развития двух стран.',
    },
    markscheme: {
      en: '1 mark: GNI per capita measures average income only, so it ignores health and education. 1 mark: the HDI includes life expectancy at birth, which measures health. 1 mark: the HDI includes years of schooling, which measure education. 1 mark: a country with high income but weak health or schooling scores lower on the HDI, so the comparison is more complete.',
      ru: '1 балл: ВНД на душу населения измеряет только средний доход и не учитывает здоровье и образование. 1 балл: HDI включает ожидаемую продолжительность жизни при рождении, которая отражает здоровье. 1 балл: HDI включает годы обучения, которые отражают образование. 1 балл: страна с высоким доходом, но слабыми показателями здоровья или образования, получает более низкий HDI, поэтому сравнение становится полнее.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-measuring-development-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: "Explain why two countries with the same GNI per capita at PPP can have different Human Development Index (HDI) values. Include the HDI dimensions and one limitation of the unadjusted index. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.",
      ru: "Объясни, почему две страны с одинаковым ВНД на душу населения по ППС могут иметь разные значения индекса человеческого развития (HDI). Раскрой измерения HDI и одно ограничение индекса без поправки на неравенство. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.",
    },
    markscheme: {
      en: "Explain GNI per capita as average primary income per resident, adjusted at PPP for price-level comparisons. HDI combines normalized health (life expectancy at birth), education (mean years for adults and expected years for children) and income indices using their geometric mean. Equal GNI per capita gives the same income index, but health/education outcomes can differ with access to services and resource allocation. Illustrative normalized indices: A has health0.8, education0.8, income0.6; B has0.6,0.6,0.6. HDI_A=(0.8×0.8×0.6)^(1/3)≈0.727; HDI_B=0.6. These are hypothetical component indices, not country data or a way to compute income indices directly from raw GNI. Explain that unadjusted HDI averages can conceal inequality within countries; it also omits several aspects of welfare. Do not say all informal output is excluded from national accounts or that HDI is the arithmetic mean. Content: actual Tragakes printed556–557 and UNDP HDI explanation, dimensions/limitations. Holistic levels, in our own words: 0 no relevant response; 1–2 very limited understanding; 3–4 relevant theory described; 5–6 partly developed explanation with some suitable terms; 7–8 clear explanation focused on the question with mostly accurate terms; 9–10 full, accurate connected explanation with appropriate terminology throughout. Use a diagram where it helps the explanation; this question does not require one. These are original Paper 1(a)-style exercises, not full papers. No real-world case or evaluative verdict is required. Level framework: actual M25 HL P1 TZ1 markscheme, p.3.",
      ru: "Объясни ВНД на душу населения как средний первичный доход резидента; ППС помогает учитывать разницу уровней цен. HDI объединяет нормированные индексы здоровья (ожидаемая продолжительность жизни при рождении), образования (средние годы обучения взрослых и ожидаемые годы обучения детей) и дохода через среднее геометрическое. При одинаковом ВНД на человека доходный индекс одинаков, но доступ к услугам и распределение ресурсов могут давать разные результаты в здоровье и образовании. Условные нормированные индексы: у A здоровье0,8, образование0,8, доход0,6; у B —0,6,0,6,0,6. HDI_A=(0,8×0,8×0,6)^(1/3)≈0,727; HDI_B=0,6. Это условные индексы компонентов, а не данные стран и не способ вычислить доходный индекс прямо из исходного ВНД. Раскрой, что средние в HDI без поправки могут скрывать внутреннее неравенство; индекс также охватывает не все стороны благосостояния. Нельзя утверждать, что весь неформальный выпуск исключён из счетов или что HDI — среднее арифметическое. Содержание: фактически прочитанные Tragakes, печатные с.556–557, и объяснение измерений/ограничений ПРООН; независимая русская терминология — МГУ, §5.1, раздел об ИЧР. Уровни, своими словами: 0 — нет ответа по существу; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана; 5–6 — объяснение частично развито, есть уместные термины; 7–8 — ясное объяснение по вопросу с в основном точными терминами; 9–10 — полное, точное и связное объяснение с уместными терминами во всём ответе. Диаграмма допустима, если помогает, но здесь не обязательна. Это авторские упражнения в формате части (a) Paper 1, а не полные работы. Реальный кейс и оценочный вывод не требуются. Основа уровней — фактическая схема M25 HL P1 TZ1, с.3.",
    },
    origin: 'original',
    minutes: 20,
  },
];
