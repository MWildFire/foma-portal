import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-asymmetric-information-01',
    subject: 'econ',
    topicIds: ['asymmetric-information'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A used-car market has two types of car: good cars and faulty cars. With symmetric information, 800 used cars are traded each month. Because buyers cannot tell good cars from faulty ones, only 200 cars are traded each month. Calculate how many times smaller the quantity traded is under asymmetric information. Give your answer as a whole number.',
      ru: 'На рынке подержанных автомобилей есть два типа машин: исправные и неисправные. При симметричной информации в месяц продаётся 800 подержанных автомобилей. Поскольку покупатели не могут отличить исправные машины от неисправных, в месяц продаётся только 200 автомобилей. Рассчитайте, во сколько раз меньше продаётся автомобилей при асимметричной информации. Ответ дайте целым числом.',
    },
    markscheme: {
      en: '1 mark: the quantity traded falls from 800 to 200 cars per month. 1 mark: the ratio is 800 / 200 = 4. 1 mark: the quantity traded is 4 times smaller under asymmetric information (answer 4).',
      ru: '1 балл: объём сделок падает с 800 до 200 автомобилей в месяц. 1 балл: отношение равно 800 / 200 = 4. 1 балл: при асимметричной информации объём сделок меньше в 4 раза (ответ 4).',
    },
    answer: '4',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-asymmetric-information-02',
    subject: 'econ',
    topicIds: ['asymmetric-information'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between adverse selection and moral hazard. Give one example of each.',
      ru: 'Проведите различие между неблагоприятным отбором и моральным риском. Приведите по одному примеру каждого.',
    },
    markscheme: {
      en: '1 mark: adverse selection happens before the deal, when the less-informed party cannot observe hidden characteristics such as quality or risk. 1 mark: moral hazard happens after the deal, when a party changes its behaviour because it does not bear the full cost of its actions. 1 mark: an example of adverse selection, such as high-risk people buying more insurance at a common premium. 1 mark: an example of moral hazard, such as a driver who takes more risks once the car is fully insured.',
      ru: '1 балл: неблагоприятный отбор возникает до сделки, когда менее информированная сторона не может увидеть скрытые характеристики, например качество или риск. 1 балл: моральный риск возникает после сделки, когда сторона меняет поведение, потому что не несёт полной цены своих действий. 1 балл: пример неблагоприятного отбора: люди с высоким риском покупают больше страховки по общему тарифу. 1 балл: пример морального риска: водитель, у которого машина полностью застрахована, рискует сильнее.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-asymmetric-information-03',
    subject: 'econ',
    topicIds: ['asymmetric-information'],
    paper: 'P2',
    marks: 8,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the view that mandatory disclosure is the most effective government response to asymmetric information in the used-car market.',
      ru: 'Оцените утверждение, что обязательное раскрытие информации — самая эффективная реакция государства на асимметричную информацию на рынке подержанных автомобилей.',
    },
    markscheme: {
      en: '1 mark: defines asymmetric information as a situation in which one party knows more about quality than the other. 1 mark: explains the market failure, since buyers who cannot tell good cars from faulty ones pay an average price, good sellers leave and the quantity traded falls. 1 mark: explains how mandatory disclosure, such as an inspection report or a vehicle history check, narrows the information gap. 1 mark: explains that better information lets good cars sell at a fair price, so more good cars are traded. 1 mark: evaluates the cost of the policy, since checks and enforcement cost money and fall on sellers and the government. 1 mark: evaluates the limits of disclosure, since buyers may not read or understand the information and some faults stay hidden. 1 mark: compares alternatives, such as warranties (signalling), compulsory insurance or minimum standards, which may work better in some markets. 1 mark: reaches a justified judgement, for example that disclosure is useful but is not always the most effective, depending on the size of the gap and the cost of enforcement.',
      ru: '1 балл: определяет асимметричную информацию как ситуацию, в которой одна сторона знает о качестве больше другой. 1 балл: объясняет провал рынка: покупатели, которые не могут отличить исправные машины от неисправных, платят среднюю цену, продавцы хороших машин уходят, и объём сделок падает. 1 балл: объясняет, как обязательное раскрытие, например отчёт о проверке или история автомобиля, сокращает разрыв в информации. 1 балл: объясняет, что лучшая информация позволяет хорошим машинам продаваться по справедливой цене, поэтому продаётся больше хороших машин. 1 балл: оценивает издержки политики: проверки и контроль стоят денег и ложатся на продавцов и государство. 1 балл: оценивает пределы раскрытия: покупатели могут не читать или не понимать информацию, а часть дефектов остаётся скрытой. 1 балл: сравнивает альтернативы, например гарантии (сигнализация), обязательное страхование или минимальные стандарты, которые в некоторых рынках работают лучше. 1 балл: делает обоснованный вывод, например что раскрытие полезно, но не всегда самое эффективное, в зависимости от размера разрыва и издержек контроля.',
    },
    origin: 'original',
    minutes: 8,
  },
];
