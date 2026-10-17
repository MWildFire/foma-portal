import type { Question } from '../../../../src/contract/types';

const infographicUrl = new URL('../topics/assets/core-1-2-infographic.svg?no-inline', import.meta.url).href;
const infographicRuUrl = new URL('../topics/assets/core-1-2-infographic.ru.svg?no-inline', import.meta.url).href;

// Core 1.2 (changing populations and places). Original questions in IB style. Figures come from the UN DESA
// World Urbanization Prospects 2025 (summary, Annex Table A4, and File F02) and are checked by script.
const TOPIC = ['core-1-2-changing-populations'];

export const questions: Question[] = [
  {
    id: 'core-1-2-a1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Lagos had 7,909,000 people in 2000 and 12,792,000 people in 2025 (UN DESA, World Cities in 2025, annex table 3). Calculate the percentage increase in the population of Lagos from 2000 to 2025. Give your answer to one decimal place.',
      ru: 'В 2000 году в Лагосе жило 7 909 000 человек, а в 2025 году — 12 792 000 (UN DESA, World Cities in 2025, таблица 3 приложения). Рассчитайте процентный рост населения Лагоса с 2000 по 2025 год. Ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: increase = 12,792,000 − 7,909,000 = 4,883,000; 1 mark: (4,883,000 ÷ 7,909,000) × 100 = 61.7% (61.74% also accepted). Using the rounded figures 12.8 and 7.9 million gives 62.0%, which scores 1 mark only.',
      ru: '1 балл: прирост = 12 792 000 − 7 909 000 = 4 883 000; 1 балл: (4 883 000 ÷ 7 909 000) × 100 = 61,7% (принимается 61,74%). Расчёт по округлённым данным (12,8 и 7,9 млн) даёт 62,0% и оценивается в 1 балл.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-1-2-a2',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how push factors, pull factors and one intervening obstacle can affect the decision of a young person in a rural area to move to a city.',
      ru: 'Объясните, как факторы выталкивания, факторы притяжения и один промежуточный барьер могут повлиять на решение молодого человека из сельской местности переехать в город.',
    },
    markscheme: {
      en: '1 mark: a named push factor linked to the decision (for example, low farm income in a drought year); 1 mark: a named pull factor linked to the decision (for example, factory or service jobs with higher wages); 1 mark: an intervening obstacle linked to the decision (for example, the cost of travel and of a first home, or limits on services for people registered elsewhere, as with the hukou system in China); 1 mark: an explanation that the decision depends on the balance of push, pull and obstacles, so that migration is selective.',
      ru: '1 балл: назван фактор выталкивания, связанный с решением (например, низкий доход от земледелия в засушливый год); 1 балл: назван фактор притяжения, связанный с решением (например, работа на фабриках или в сфере услуг с более высокой зарплатой); 1 балл: назван промежуточный барьер, связанный с решением (например, стоимость переезда и первого жилья или ограничения доступа к услугам для тех, кто зарегистрирован в другом месте, как при системе хукоу в Китае); 1 балл: объяснено, что решение зависит от соотношения выталкивания, притяжения и барьеров, поэтому миграция избирательна.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-1-2-a3',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Outline',
    prompt: {
      en: 'Outline the difference between voluntary migration and forced migration. Give one example of each.',
      ru: 'Опишите различие между добровольной и вынужденной миграцией. Приведите по одному примеру каждого вида.',
    },
    markscheme: {
      en: '1 mark: voluntary migration is chosen by the migrant, usually for work, study or family reasons; 1 mark: forced migration happens under compulsion, for example from armed conflict, persecution, disasters or environmental change; 1 mark: one valid example of each type (for example, skilled professionals who move abroad for work; people who flee armed conflict across a border).',
      ru: '1 балл: добровольная миграция выбирается мигрантом, обычно ради работы, учёбы или семьи; 1 балл: вынужденная миграция происходит под принуждением, например из-за вооружённого конфликта, преследований, стихийных бедствий или изменения окружающей среды; 1 балл: по одному правильному примеру каждого вида (например, квалифицированные специалисты, уезжающие за границу на работу; люди, бегущие через границу от вооружённого конфликта).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-1-2-a5',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Examine',
    prompt: {
      en: 'Examine the impacts of international migration on the place of origin and on the place of destination.',
      ru: 'Рассмотрите последствия международной миграции для места выезда и для места назначения.',
    },
    markscheme: {
      en: 'Place of origin (up to 3 marks): 1 mark: remittances raise household income or pay for schooling or housing; 1 mark: brain drain reduces the supply of skilled workers; 1 mark: the loss of working-age people reduces farm and business output and can speed up rural depopulation. Place of destination (up to 3 marks): 1 mark: migrants increase the labour supply, filling jobs and supporting growth; 1 mark: rapid in-migration adds pressure on housing, transport, schools and health services; 1 mark: integration depends on language, work rights and legal status, and can bring tension or successful inclusion. Each point needs a development to score; credit named examples. Maximum 6 marks.',
      ru: 'Место выезда (до 3 баллов): 1 балл: денежные переводы повышают доходы домохозяйств или оплачивают образование и жильё; 1 балл: утечка мозгов сокращает запас квалифицированных работников; 1 балл: потеря работников трудоспособного возраста снижает выпуск в сельском хозяйстве и бизнесе и может ускорить сельское обезлюдение. Место назначения (до 3 баллов): 1 балл: мигранты увеличивают предложение рабочей силы, заполняют вакансии и поддерживают рост; 1 балл: быстрый приток населения создаёт нагрузку на жильё, транспорт, школы и здравоохранение; 1 балл: интеграция зависит от языка, права на работу и правового статуса и может вызывать напряжённость или успешно проходить. Каждый пункт нужно раскрыть; засчитываются названные примеры. Максимум 6 баллов.',
    },
    origin: 'original',
    minutes: 9,
  },
  {
    id: 'core-1-2-b1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (the infographic) shows the percentage of the population living in cities and towns (Degree of Urbanization) for the world and six regions in 1950, 2025 and 2050 (projection). Source: UN DESA Population Division, World Urbanization Prospects 2025, File F02 (percentage of population by Degree of Urbanization).' + ' [Open infographic](' + infographicUrl + ')',
      ru: 'На рисунке 1 (инфографика) показана доля населения, живущего в городах и городских поселениях (Degree of Urbanization), в мире и в шести регионах в 1950, 2025 и 2050 годах (прогноз). Источник: UN DESA Population Division, World Urbanization Prospects 2025, файл F02 (доля населения по Degree of Urbanization).' + ' [Открыть инфографику](' + infographicRuUrl + ')',
    },
    prompt: {
      en: '(a) Using Figure 1, describe the change in the percentage of the population living in cities and towns in sub-Saharan Africa from 1950 to 2050. [2]\n(b) Suggest reasons for the difference between Europe, Northern America, Australia and New Zealand and sub-Saharan Africa in 1950. [3]\n(c) Evaluate what the trend shown in Figure 1 means for infrastructure planning in sub-Saharan Africa. [5]',
      ru: '(a) По рисунку 1 опишите изменение доли населения, живущего в городах и городских поселениях, в Африке южнее Сахары с 1950 по 2050 год. [2]\n(b) Предложите причины различия между Европой, Северной Америкой, Австралией и Новой Зеландией, с одной стороны, и Африкой южнее Сахары, с другой, в 1950 году. [3]\n(c) Оцените, что означает тенденция, показанная на рисунке 1, для планирования инфраструктуры в Африке южнее Сахары. [5]',
    },
    markscheme: {
      en: '(a) 1 mark: an accurate overall description: the share rises in each period, from 42.7% in 1950 to 70.3% in 2025 and 77.5% in 2050; 1 mark: a quantified change, for example +27.5 percentage points from 1950 to 2025 (27.6 from the rounded values), slowing to +7.2 points from 2025 to 2050. (b) 1 mark: reason 1 with development, for example early industrialisation in Europe and North America created urban factory and service jobs, while sub-Saharan Africa was mainly rural and farming-based in 1950; 1 mark: reason 2 with development, for example earlier transport networks and ports in the north encouraged towns; 1 mark: reason 3 with development, for example higher farm productivity released labour to towns, whereas colonial economies in sub-Saharan Africa relied on exporting primary products. Accept any other valid reason with development. (c) Up to 5 marks, one per developed point: 1 mark: an implication, for example more people in cities and towns (about 0.9 billion in 2025, which is 70.3% of 1.27 billion) need water, sanitation, power, housing, transport and schools; 1 mark: planning must cover towns as well as large cities, because the town share is still rising (32.6% in 2025, 35.0% in 2050); 1 mark: rural needs remain (22.5% rural in 2050, and most future growth of the world’s rural population is expected in sub-Saharan Africa), so planning cannot focus on cities alone; 1 mark: national "urban" definitions in sub-Saharan Africa are narrower, so official figures can understate need, and the Degree of Urbanization is a better basis for planning; 1 mark: a supported judgement, for example early, integrated planning costs less and reduces informal settlements, but its effect depends on finance and governance.',
      ru: '(a) 1 балл: верное общее описание: доля растёт в каждый период, с 42,7% в 1950 году до 70,3% в 2025 году и 77,5% в 2050 году; 1 балл: количественное изменение, например +27,5 процентного пункта с 1950 по 2025 год (27,6 по округлённым значениям), с замедлением до +7,2 пункта с 2025 по 2050 год. (b) 1 балл: причина 1 с развитием, например раннее промышленное развитие в Европе и Северной Америке создало городские рабочие места на фабриках и в сфере услуг, тогда как Африка южнее Сахары в 1950 году была в основном сельской и аграрной; 1 балл: причина 2 с развитием, например более ранние транспортные сети и порты на севере стимулировали рост городов; 1 балл: причина 3 с развитием, например более высокая производительность сельского хозяйства высвобождала рабочих для городов, тогда как колониальная экономика Африки южнее Сахары опиралась на экспорт сырья. Засчитываются и другие верные причины с развитием. (c) До 5 баллов, по одному за раскрытый пункт: 1 балл: следствие, например больше людей в городах и городских поселениях (около 0,9 млрд в 2025 году, то есть 70,3% от 1,27 млрд) нуждаются в воде, канализации, электроэнергии, жилье, транспорте и школах; 1 балл: планирование должно охватывать и города, и крупные города, потому что доля городских поселений продолжает расти (32,6% в 2025 году, 35,0% в 2050 году); 1 балл: сохраняются потребности сельской местности (22,5% сельского населения в 2050 году, а большая часть будущего роста сельского населения мира ожидается в Африке южнее Сахары), поэтому планирование не может ограничиваться городами; 1 балл: национальные определения «городского» населения в Африке южнее Сахары уже, поэтому официальные цифры могут занижать потребности, и для планирования лучше опираться на Degree of Urbanization; 1 балл: обоснованное суждение, например раннее и комплексное планирование стоит дешевле и сокращает неформальные поселения, но его эффект зависит от финансов и управления.',
    },
    origin: 'original',
    minutes: 15,
  },
];
