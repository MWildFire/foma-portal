import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-supply-side-policies-01',
    subject: 'econ',
    topicIds: ['supply-side-policies'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'The government spends AED 600 million on a new port. The port adds AED 150 million a year to the potential output of the economy. Calculate the annual return for each AED 1 invested. Give your answer to two decimal places.',
      ru: 'Правительство тратит 600 млн AED на новый порт. Порт добавляет 150 млн AED в год к потенциальному выпуску экономики. Рассчитайте ежегодную отдачу на каждый AED 1 инвестиций. Дайте ответ с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: return = additional potential output per year / investment = 150 / 600. 1 mark: = 0.25, so each AED 1 invested adds AED 0.25 of potential output every year.',
      ru: '1 балл: отдача = дополнительный потенциальный выпуск в год / инвестиции = 150 / 600. 1 балл: = 0,25, то есть каждый AED 1 инвестиций добавляет 0,25 AED потенциального выпуска каждый год.',
    },
    answer: '0.25',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-supply-side-policies-02',
    subject: 'econ',
    topicIds: ['supply-side-policies'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between market-based and interventionist supply-side policies. Give one example of each.',
      ru: 'Проведите различие между рыночными и интервенционистскими мерами политики предложения. Приведите по одному примеру каждого вида.',
    },
    markscheme: {
      en: '1 mark: market-based policies reduce government intervention and rely on competition and incentives. 1 mark: interventionist policies use government spending or direction to raise productive capacity. 1 mark: one market-based example, such as privatisation or deregulation. 1 mark: one interventionist example, such as education and training or infrastructure.',
      ru: '1 балл: рыночные меры сокращают вмешательство государства и опираются на конкуренцию и стимулы. 1 балл: интервенционистские меры используют государственные расходы или прямое воздействие, чтобы повысить производственный потенциал. 1 балл: один пример рыночной меры, например приватизация или дерегулирование. 1 балл: один пример интервенционистской меры, например образование и профессиональная подготовка или инфраструктура.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-supply-side-policies-03',
    subject: 'econ',
    topicIds: ['supply-side-policies'],
    paper: 'P3',
    marks: 6,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of supply-side policies to reduce unemployment in a country where the main cause of unemployment is a fall in aggregate demand.',
      ru: 'Оцените использование мер политики предложения для снижения безработицы в стране, где главная причина безработицы — падение совокупного спроса (aggregate demand).',
    },
    markscheme: {
      en: '1 mark: supply-side policies shift LRAS to the right, which raises potential output in the long run. 1 mark: they do not raise AD directly, so they do little for cyclical unemployment in the short run. 1 mark: they can help structural unemployment, for example through training that matches workers to jobs. 1 mark: time lags: education and infrastructure take years to raise productivity. 1 mark: costs and equity: spending must be funded by taxes or borrowing, and labour market flexibility may reduce job security. 1 mark: a reasoned conclusion: the best response depends on the cause of unemployment, so demand-side and supply-side measures are often combined.',
      ru: '1 балл: меры политики предложения сдвигают LRAS вправо, что повышает потенциальный выпуск в долгосрочном периоде. 1 балл: они не повышают AD напрямую, поэтому мало помогают циклической безработице в краткосрочном периоде. 1 балл: они могут помочь структурной безработице, например обучением, которое соотносит работников с рабочими местами. 1 балл: временные лаги: образование и инфраструктура годами повышают производительность. 1 балл: издержки и равенство: расходы нужно финансировать налогами или заимствованиями, а гибкость рынка труда может снизить защищённость работы. 1 балл: обоснованный вывод: лучший ответ зависит от причины безработицы, поэтому меры спроса и предложения часто сочетают.',
    },
    origin: 'original',
    minutes: 6,
  },
];
