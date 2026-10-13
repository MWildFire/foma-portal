import type { Question } from '../../../../src/contract/types';

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
      ru: 'Кратко опишите, что понимается под термином «демографическая волна молодёжи» (youth bulge).',
    },
    markscheme: {
      en: '1 mark: a large share of young people (usually aged 15 to 24) in the population. 1 mark: caused by an earlier period of high birth rates, so this age group is larger than the groups above and below it.',
      ru: '1 балл: большая доля молодых людей (обычно 15–24 года) в населении. 1 балл: возникает после прежнего периода высокой рождаемости, поэтому эта возрастная группа больше соседних групп.',
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
      en: 'Explain two ways in which an ageing population puts pressure on a country’s health care system and its pension system.',
      ru: 'Объясните два способа, которыми старение населения создаёт давление на систему здравоохранения и пенсионную систему страны.',
    },
    markscheme: {
      en: '1 mark: more people aged 65 and over need hospital care, long-term care or treatment for chronic conditions, so health spending rises. 1 mark: development, for example the cost of long-term care rises as a share of the budget. 1 mark: in a pay-as-you-go pension system, fewer workers pay contributions for each pensioner. 1 mark: development, for example the government must raise contributions, cut benefits or raise the retirement age.',
      ru: '1 балл: больше людей в возрасте 65 лет и старше нуждаются в стационарной помощи, долгосрочном уходе или лечении хронических болезней, поэтому расходы на здравоохранение растут. 1 балл: развитие, например расходы на долгосрочный уход растут как доля бюджета. 1 балл: в распределительной пенсионной системе на одного пенсионера приходится меньше работающих, платящих взносы. 1 балл: развитие, например правительству приходится повышать взносы, сокращать выплаты или повышать пенсионный возраст.',
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
      en: '1 mark: a falling birth rate reduces the future working-age population and raises the old-age dependency ratio. 1 mark: development, for example fewer workers to fund pensions and services. 1 mark: a limited effect because cash incentives do not change the costs of housing, childcare and careers. 1 mark: an example, for example Singapore introduced the Baby Bonus in 2001, but its resident total fertility rate still fell to 0.97 in 2024 (SingStat).',
      ru: '1 балл: падающая рождаемость сокращает будущее население трудоспособного возраста и повышает коэффициент пожилыми. 1 балл: развитие, например меньше работников для финансирования пенсий и услуг. 1 балл: эффект ограничен, потому что денежные стимулы не меняют расходы на жильё, детские сады и карьеру. 1 балл: пример, например в Сингапуре «бэби-бонус» введён в 2001 году, но резидентный суммарный коэффициент рождаемости всё равно снизился до 0,97 в 2024 году (SingStat).',
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
      en: '1 mark: a challenge, brain drain reduces the supply of skilled workers, such as nurses or engineers, and the public cost of training them is lost. 1 mark: development, for example shortages in hospitals or schools. 1 mark: an opportunity, remittances bring foreign currency and money for families; for example, remittances were 8.5% of GDP in the Philippines in 2025 (World Bank). 1 mark: development, for example remittances pay for education and health care or support local spending. 1 mark: brain gain, returning migrants and diaspora networks can bring skills, investment and knowledge. 1 mark: evaluation, for example the net effect depends on whether migrants return or only send money, and on how remittances are used.',
      ru: '1 балл: вызов, утечка мозгов сокращает запас квалифицированных работников, например медсестёр или инженеров, и теряются государственные расходы на их подготовку. 1 балл: развитие, например нехватка врачей в больницах или учителей в школах. 1 балл: возможность, денежные переводы приносят иностранную валюту и деньги семьям; например, в Филиппинах переводы составили 8,5% ВВП в 2025 году (Всемирный банк). 1 балл: развитие, например переводы оплачивают образование и медицину или поддерживают местные расходы. 1 балл: приток мозгов, вернувшиеся мигранты и диаспора могут приносить навыки, инвестиции и знания. 1 балл: оценка, например итоговый эффект зависит от того, возвращаются ли мигранты или только присылают деньги, и от того, как используются переводы.',
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
      en: 'Infographic (figure in this topic): old-age dependency ratio, meaning people aged 65 and over per 100 people aged 15 to 64, for Japan, South Korea and Nigeria in 2024 and in 2050 (projected). Source: UN DESA, World Population Prospects 2024, Medium variant, 2024 and 2050 projection. The total fertility rate for 2024 is shown under each country.',
      ru: 'Инфографика (рисунок в этой теме): коэффициент демографической нагрузки пожилыми, то есть число людей в возрасте 65 лет и старше на 100 человек в возрасте 15–64 лет, для Японии, Республики Корея и Нигерии в 2024 году и в 2050 году (прогноз). Источник: UN DESA, World Population Prospects 2024, вариант Medium, данные за 2024 год и прогноз на 2050 год. Суммарный коэффициент рождаемости за 2024 год показан под каждой страной.',
    },
    prompt: {
      en: '(a) Using the infographic, describe the trend in the old-age dependency ratio for Nigeria between 2024 and 2050. [2 marks] (b) Calculate the number of people aged 15 to 64 for each person aged 65 and over in Japan in 2050. Compare your answer with South Korea in 2050. [3 marks] (c) Evaluate one policy that a government could use to respond to an old-age dependency ratio above 70 by 2050. [5 marks]',
      ru: '(a) Используя рисунок, опишите тенденцию коэффициента демографической нагрузки пожилыми в Нигерии между 2024 и 2050 годами. [2 балла] (b) Рассчитайте, сколько людей в возрасте 15–64 лет приходится на одного человека в возрасте 65 лет и старше в Японии в 2050 году. Сравните ваш ответ с Республикой Корея в 2050 году. [3 балла] (c) Оцените одну политику, которую правительство может использовать для ответа на коэффициент пожилыми выше 70 к 2050 году. [5 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: the ratio rises from 5.5 (2024) to 7.0 (2050), an increase of less than 2 points. 1 mark: it stays very low, so Nigeria keeps a large working-age population relative to older people; the change is small compared with Japan (50.7 to 73.1) and South Korea (27.5 to 75.6). (b) 1 mark: method, 100 ÷ 73.1 (the ratio is per 100 people aged 15 to 64, so divide 100 by the old-age ratio). 1 mark: Japan 2050 = 1.37 (accept 1.4) people aged 15 to 64 per person aged 65 and over. 1 mark: South Korea 2050 = 100 ÷ 75.6 = 1.32, so South Korea has fewer workers per older person and more pressure on its pensions. (c) 5 marks in bands: 1 mark for a clearly named policy, for example raising the retirement age, cash incentives for births, attracting skilled migrants or helping older people to stay in work; 1 mark for an explanation of how the policy reduces the pressure shown by the ratio; 1 mark for a cost or limitation, for example high spending, political resistance or effects that take decades; 1 mark for evidence, such as figures from the infographic or a named example; 1 mark for a supported judgement on how effective the policy is likely to be and under which conditions.',
      ru: '(a) 1 балл: коэффициент растёт с 5,5 (2024) до 7,0 (2050), то есть меньше чем на 2 пункта. 1 балл: он остаётся очень низким, поэтому в Нигерии по-прежнему много людей трудоспособного возраста на одного пожилого; изменение мало по сравнению с Японией (с 50,7 до 73,1) и Республикой Корея (с 27,5 до 75,6). (b) 1 балл: способ, 100 ÷ 73,1 (коэффициент дан на 100 человек в возрасте 15–64 лет, поэтому 100 делим на коэффициент пожилыми). 1 балл: Япония, 2050: 1,37 (засчитывается 1,4) человека в возрасте 15–64 лет на одного человека в возрасте 65 лет и старше. 1 балл: Республика Корея, 2050: 100 ÷ 75,6 = 1,32, то есть на одного пожилого приходится меньше работающих, а давление на пенсионную систему выше. (c) 5 баллов по критериям: 1 балл за чётко названную политику, например повышение пенсионного возраста, денежные стимулы для рождений, привлечение квалифицированных мигрантов или помощь пожилым в сохранении работы; 1 балл за объяснение, как политика снижает давление, которое показывает коэффициент; 1 балл за издержки или ограничения, например высокие расходы, политическое сопротивление или эффекты, которые проявляются через десятилетия; 1 балл за доказательство, например данные рисунка или названный пример; 1 балл за обоснованное суждение о вероятной эффективности политики и условиях, при которых она сработает.',
    },
    origin: 'original',
    minutes: 20,
  },
];
