import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-measuring-development-01',
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
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Country A has a GNI per capita of USD 14516 and country B has a GNI per capita of USD 2350, both converted at PPP. How many times greater is the GNI per capita of country A than that of country B? Give your answer to one decimal place.',
      ru: 'ВНД на душу населения страны A составляет 14516 USD, а страны B — 2350 USD; оба показателя пересчитаны по PPP. Во сколько раз ВНД на душу населения страны A больше, чем у страны B? Ответ дайте с одним знаком после запятой.',
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
    subject: 'econ',
    topicIds: ['measuring-development'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of GNI per capita and the Human Development Index (HDI) to compare the development of two countries.',
      ru: 'Оцените использование ВНД на душу населения и индекса развития человеческого потенциала (HDI) для сравнения развития двух стран.',
    },
    markscheme: {
      en: '1 mark: defines GNI per capita as GNI divided by population, the average income per person. 1 mark: explains that GNI per capita converted at PPP compares living standards more fairly than market exchange rates. 1 mark: explains that the HDI combines life expectancy, schooling and GNI per capita into one index from 0 to 1. 1 mark: explains that the HDI shows outcomes that income alone misses, such as health and education. 1 mark: explains that an average hides inequality, which a Gini coefficient would show. 1 mark: notes that GNI excludes unpaid and non-market activity, the informal economy and environmental damage. 1 mark: notes that the HDI gives equal weight to its dimensions, which is a value judgement, and does not show freedom or inequality within a country. 1 mark: uses a real or hypothetical pair of countries to show when the two measures give different rankings. 1 mark: a reasoned judgement that depends on the purpose of the comparison, such as broad welfare or income alone. 1 mark: a judgement on data quality, for example estimates for poorer countries and the age of the data.',
      ru: '1 балл: определяет ВНД на душу населения как ВНД, делённый на численность населения, то есть средний доход одного человека. 1 балл: объясняет, что ВНД на душу населения, пересчитанный по PPP, точнее сравнивает уровень жизни, чем рыночные курсы. 1 балл: объясняет, что HDI объединяет ожидаемую продолжительность жизни, образование и ВНД на душу населения в один индекс от 0 до 1. 1 балл: объясняет, что HDI показывает результаты, которые доход сам по себе не отражает, например здоровье и образование. 1 балл: объясняет, что среднее значение скрывает неравенство, которое показал бы коэффициент Джини. 1 балл: отмечает, что ВНД не учитывает неоплачиваемый и нерыночный труд, неформальную экономику и ущерб окружающей среде. 1 балл: отмечает, что HDI придаёт равный вес своим измерениям, что является ценностным суждением, и не показывает свободу и неравенство внутри страны. 1 балл: использует реальную или условную пару стран, чтобы показать, когда два показателя дают разный порядок стран. 1 балл: обоснованное суждение, которое зависит от цели сравнения, например от широкого благосостояния или только от доходов. 1 балл: суждение о качестве данных, например об оценках для более бедных стран и о давности данных.',
    },
    origin: 'original',
    minutes: 15,
  },
];
