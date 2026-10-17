import type { Question } from '../../../../src/contract/types';

const infographicUrl = new URL('../topics/assets/core-1-3-infographic.svg?no-inline', import.meta.url).href;
const infographicRuUrl = new URL('../topics/assets/core-1-3-infographic.ru.svg?no-inline', import.meta.url).href;

// Core 1.3 (challenges and opportunities). Original questions in IB style. Figures come from the UN DESA World
// Population Prospects 2024 (Medium variant, 1 July population, age groups 0-14, 15-64 and 65+), the World Bank
// (total fertility rate and personal remittances) and SingStat; all arithmetic is checked by script.
const TOPIC = ['core-1-3-challenges-opportunities'];

export const questions: Question[] = [
  {
    id: 'core-1-3-a1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline what is meant by the term youth bulge.',
      ru: 'Кратко опишите, что понимается под термином «молодёжный бугор» (youth bulge).',
    },
    markscheme: {
      en: '1 mark: a large share of young people (usually aged 15 to 24) in the population. 1 mark: a brief development, for example a large cohort formed through earlier high fertility and improved survival. Accept a sound explanation of its relative size; it need not exceed every neighbouring age band, especially bands of different widths.',
      ru: '1 балл: большая доля молодых людей (обычно 15–24 года) в населении. 1 балл: краткое развитие, например многочисленная когорта сформировалась при прежней высокой рождаемости и улучшении выживаемости. Засчитывайте обоснованное описание её относительного размера; она не обязана превышать все соседние возрастные группы, особенно разной ширины.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'core-1-3-a2',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Country B has the following population (million): aged 0 to 14: 8.4; aged 15 to 64: 28.0; aged 65 and over: 9.8. Calculate (i) the child dependency ratio; (ii) the old-age dependency ratio; (iii) the total dependency ratio. Give each answer to one decimal place.',
      ru: 'В стране B население (млн человек): в возрасте 0–14 лет — 8,4; в возрасте 15–64 лет — 28,0; в возрасте 65 лет и старше — 9,8. Рассчитайте (i) коэффициент демографической нагрузки детьми; (ii) коэффициент демографической нагрузки пожилыми; (iii) общий коэффициент демографической нагрузки. Округлите каждый ответ до одного знака после запятой.',
    },
    markscheme: {
      en: '1 mark: child dependency ratio = 8.4 / 28.0 × 100 = 30.0. 1 mark: old-age dependency ratio = 9.8 / 28.0 × 100 = 35.0. 1 mark: total dependency ratio = (8.4 + 9.8) / 28.0 × 100 = 65.0 (accept 30.0 + 35.0 = 65.0).',
      ru: '1 балл: коэффициент детьми = 8,4 / 28,0 × 100 = 30,0. 1 балл: коэффициент пожилыми = 9,8 / 28,0 × 100 = 35,0. 1 балл: общий коэффициент = (8,4 + 9,8) / 28,0 × 100 = 65,0 (засчитывается 30,0 + 35,0 = 65,0).',
    },
    answer: '30.0; 35.0; 65.0',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-1-3-a3',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain two ways in which an ageing population can put pressure on a country’s health care system and its pension system.',
      ru: 'Объясните два способа, которыми старение населения может создавать давление на систему здравоохранения и пенсионную систему страны.',
    },
    markscheme: {
      en: '1 mark: a larger older population can increase demand for treatment of chronic conditions or long-term care, other things equal. 1 mark: development, for example care spending could take a larger budget share if its cost rises faster than the available budget. 1 mark: in a pay-as-you-go pension system, expenditure can rise relative to contributions if the number of pensioners grows relative to contributors, with earnings and rules unchanged. 1 mark: development, for example possible responses include contribution or benefit changes, later retirement, higher employment or productivity, or tax funding; age groups alone do not count contributors.',
      ru: '1 балл: рост числа пожилых может увеличить спрос на лечение хронических болезней и долговременный уход при прочих равных. 1 балл: развитие, например расходы на долговременный уход могут занимать большую долю бюджета, если растут быстрее его общего объёма. 1 балл: в распределительной системе расходы могут расти относительно взносов, если число пенсионеров растёт относительно плательщиков при неизменных заработках и правилах. 1 балл: развитие, например возможны изменение взносов или выплат, более поздний выход на пенсию, рост занятости или производительности, финансирование из налогов. Возрастные группы сами по себе не показывают число плательщиков.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-1-3-a4',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a government with a falling birth rate might introduce a pronatalist policy, and explain one reason why such a policy may have only a limited effect.',
      ru: 'Объясните, почему правительство страны с падающей рождаемостью может ввести пронаталистскую политику, и объясните одну причину, по которой такая политика может дать ограниченный эффект.',
    },
    markscheme: {
      en: '1 mark: persistently fewer births can reduce future working-age cohorts relative to older cohorts, other things equal; effects take time and depend on migration and survival. 1 mark: development, for example fewer workers to fund pensions and services. 1 mark: a limited effect because cash incentives may offset only part of housing or childcare costs and may not resolve unavailable childcare or career penalties. 1 mark: an example, for example Singapore introduced the Baby Bonus in 2001, but its resident total fertility rate was 0.97 in 2024 (SingStat). This trend does not prove zero effect: the rate without the scheme is not observed.',
      ru: '1 балл: устойчивое уменьшение числа рождений со временем может сократить будущие поколения трудоспособного возраста относительно пожилых при прочих равных; важны также миграция и дожитие. 1 балл: развитие, например меньше работников для финансирования пенсий и услуг. 1 балл: эффект ограничен, потому что выплаты могут покрывать лишь часть расходов на жильё и уход за детьми, не решая проблемы нехватки мест или потерь в карьере. 1 балл: пример, например в Сингапуре «бэби-бонус» введён в 2001 году, но резидентный суммарный коэффициент рождаемости в 2024 году составил 0,97 (SingStat). Тренд не доказывает нулевого эффекта: значение без программы не наблюдается.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-1-3-a5',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Examine',
    prompt: {
      en: 'Examine how the emigration of skilled workers can be both a challenge and an opportunity for the country they leave. Refer to one named example.',
      ru: 'Исследуйте, как эмиграция квалифицированных работников может быть одновременно вызовом и возможностью для страны, которую они покидают. Приведите один названный пример.',
    },
    markscheme: {
      en: '1 mark: a challenge, brain drain reduces the supply of skilled workers, such as nurses or engineers, and the origin country may lose some return on publicly funded training. 1 mark: development, for example shortages in hospitals or schools. 1 mark: an opportunity, remittances bring foreign currency and money for families; for example, remittances were 8.5% of GDP in the Philippines in 2025 (World Bank). 1 mark: development, for example remittances pay for education and health care or support local spending. 1 mark: brain gain, returning migrants and diaspora networks can bring skills, investment and knowledge. 1 mark: evaluation, for example the net effect depends on local skill shortages, replacement training, knowledge links, return migration and how remittances are used; knowledge can also be shared without returning.',
      ru: '1 балл: вызов, утечка мозгов сокращает запас квалифицированных работников, например медсестёр или инженеров, и страна происхождения может недополучить отдачу от оплаченной государством подготовки. 1 балл: развитие, например нехватка врачей в больницах или учителей в школах. 1 балл: возможность, денежные переводы приносят иностранную валюту и деньги семьям; например, в Филиппинах переводы составили 8,5% ВВП в 2025 году (Всемирный банк). 1 балл: развитие, например переводы оплачивают образование и медицину или поддерживают местные расходы. 1 балл: приток знаний и квалификации — вернувшиеся мигранты и диаспора могут приносить навыки, инвестиции и знания. 1 балл: оценка, например итог зависит от местной нехватки кадров, подготовки замены, обмена знаниями, возвращения мигрантов и использования переводов; делиться знаниями можно и без возвращения.',
    },
    origin: 'original',
    minutes: 10,
  },
  {
    id: 'core-1-3-b1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Infographic (figure in this topic): old-age dependency ratio, meaning people aged 65 and over per 100 people aged 15 to 64, for Japan, South Korea and Nigeria in 2024 and 2050 (both projected). Source: UN DESA, World Population Prospects 2024, Medium variant, 2024 and 2050 projection. The total fertility rate for 2024 is shown under each country.' + ' [Open infographic](' + infographicUrl + ')',
      ru: 'Инфографика (рисунок в этой теме): коэффициент демографической нагрузки пожилыми, то есть число людей в возрасте 65 лет и старше на 100 человек в возрасте 15–64 лет, для Японии, Республики Корея и Нигерии в 2024 и 2050 годах (оба значения — прогнозы). Источник: UN DESA, World Population Prospects 2024, вариант Medium, прогнозы на 2024 и 2050 годы. Суммарный коэффициент рождаемости за 2024 год показан под каждой страной.' + ' [Открыть инфографику](' + infographicRuUrl + ')',
    },
    prompt: {
      en: '(a) Using the infographic, describe the trend in the old-age dependency ratio for Nigeria between 2024 and 2050. [2 marks] (b) Calculate the number of people aged 15 to 64 for each person aged 65 and over in Japan in 2050. Compare your answer with South Korea in 2050. [3 marks] (c) Evaluate one policy that a government could use to respond to an old-age dependency ratio above 70 by 2050. [5 marks]',
      ru: '(a) Используя рисунок, опишите тенденцию коэффициента демографической нагрузки пожилыми в Нигерии между 2024 и 2050 годами. [2 балла] (b) Рассчитайте, сколько людей в возрасте 15–64 лет приходится на одного человека в возрасте 65 лет и старше в Японии в 2050 году. Сравните ваш ответ с Республикой Корея в 2050 году. [3 балла] (c) Оцените одну политику, которую правительство может использовать для ответа на коэффициент пожилыми выше 70 к 2050 году. [5 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: the ratio rises from 5.5 (2024) to 7.0 (2050), an increase of less than 2 points. 1 mark: it stays very low, so Nigeria keeps a large working-age population relative to older people; the change is small compared with Japan (50.7 to 73.1) and South Korea (27.5 to 75.6). (b) 1 mark: method, 100 ÷ 73.1 (the ratio is per 100 people aged 15 to 64, so divide 100 by the old-age ratio). 1 mark: Japan 2050 = 1.37 (accept 1.4) people aged 15 to 64 per person aged 65 and over. 1 mark: South Korea 2050 = 100 ÷ 75.6 = 1.32, so South Korea has fewer people aged 15–64 per older person. Actual pension pressure also depends on employment, earnings, retirement rules and funding; these ratios do not count workers. (c) 5 marks for this original task: 1 mark for a clearly named policy, for example raising the retirement age, cash incentives for births, attracting skilled migrants or helping older people to stay in work; 1 mark for an explanation of how the policy can ease fiscal or care pressure; later retirement does not itself change a ratio with fixed age bands; 1 mark for a cost or limitation, for example high spending, political resistance or effects that take decades; 1 mark for evidence, such as figures from the infographic or a named example; 1 mark for a supported judgement on how effective the policy is likely to be and under which conditions.',
      ru: '(a) 1 балл: коэффициент растёт с 5,5 (2024) до 7,0 (2050), то есть меньше чем на 2 пункта. 1 балл: он остаётся очень низким, поэтому в Нигерии по-прежнему много людей трудоспособного возраста на одного пожилого; изменение мало по сравнению с Японией (с 50,7 до 73,1) и Республикой Корея (с 27,5 до 75,6). (b) 1 балл: способ, 100 ÷ 73,1 (коэффициент дан на 100 человек в возрасте 15–64 лет, поэтому 100 делим на коэффициент пожилыми). 1 балл: Япония, 2050: 1,37 (засчитывается 1,4) человека в возрасте 15–64 лет на одного человека в возрасте 65 лет и старше. 1 балл: Республика Корея, 2050: 100 ÷ 75,6 = 1,32, то есть на одного пожилого приходится меньше людей в возрасте 15–64 лет. Давление на пенсии зависит также от занятости, заработков, правил выхода на пенсию и финансирования: эти коэффициенты не считают работников. (c) 5 баллов по критериям: 1 балл за чётко названную политику, например повышение пенсионного возраста, денежные стимулы для рождений, привлечение квалифицированных мигрантов или помощь пожилым в сохранении работы; 1 балл за объяснение, как политика может облегчить бюджетную нагрузку или потребность в уходе; повышение пенсионного возраста само по себе не меняет коэффициент с фиксированными возрастными границами; 1 балл за издержки или ограничения, например высокие расходы, политическое сопротивление или эффекты, которые проявляются через десятилетия; 1 балл за доказательство, например данные рисунка или названный пример; 1 балл за обоснованное суждение о вероятной эффективности политики и условиях, при которых она сработает.',
    },
    origin: 'original',
    minutes: 20,
  },
];
