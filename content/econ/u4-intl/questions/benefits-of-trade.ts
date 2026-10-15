import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-benefits-of-trade-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['benefits-of-trade'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Country C can produce 150 tonnes of rice or 60 tonnes of fish in one year with the same resources. Calculate the opportunity cost of one tonne of fish, in tonnes of rice. Give your answer to one decimal place.',
      ru: 'Страна C может произвести за год 150 тонн риса или 60 тонн рыбы при одинаковых ресурсах. Рассчитайте альтернативные издержки одной тонны рыбы в тоннах риса (opportunity cost). Дайте ответ с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: opportunity cost of fish = rice given up / fish gained = 150 / 60. 1 mark: = 2.5 tonnes of rice for each tonne of fish.',
      ru: '1 балл: альтернативные издержки рыбы = отказ от риса / получено рыбы = 150 / 60. 1 балл: = 2,5 тонны риса за каждую тонну рыбы.',
    },
    answer: '2.5',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-benefits-of-trade-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['benefits-of-trade'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Country D can produce 40 tonnes of rice or 60 tonnes of fish in one year with the same resources. Calculate the opportunity cost of one tonne of rice, in tonnes of fish. Give your answer to one decimal place.',
      ru: 'Страна D может произвести за год 40 тонн риса или 60 тонн рыбы при одинаковых ресурсах. Рассчитайте альтернативные издержки одной тонны риса в тоннах рыбы. Дайте ответ с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: opportunity cost of rice = fish given up / rice gained = 60 / 40. 1 mark: = 1.5 tonnes of fish for each tonne of rice.',
      ru: '1 балл: альтернативные издержки риса = отказ от рыбы / получено риса = 60 / 40. 1 балл: = 1,5 тонны рыбы за каждую тонну риса.',
    },
    answer: '1.5',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-benefits-of-trade-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['benefits-of-trade'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between absolute advantage and comparative advantage. Give one example of each.',
      ru: 'Проведите различие между абсолютным преимуществом и сравнительным преимуществом. Приведите по одному примеру каждого.',
    },
    markscheme: {
      en: '1 mark: absolute advantage: a producer can make more of a good from the same resources (or the same output with fewer resources). 1 mark: comparative advantage: a producer can make a good at a lower opportunity cost than another producer. 1 mark: an example of absolute advantage, with output figures. 1 mark: an example of comparative advantage, with opportunity costs.',
      ru: '1 балл: абсолютное преимущество: производитель выпускает больше товара из тех же ресурсов (или тот же выпуск с меньшими ресурсами). 1 балл: сравнительное преимущество: производитель выпускает товар с меньшими альтернативными издержками, чем другой производитель. 1 балл: пример абсолютного преимущества с цифрами выпуска. 1 балл: пример сравнительного преимущества с альтернативными издержками.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-benefits-of-trade-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['benefits-of-trade'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain two limits on the gains from trade for a country that specialises in exporting a single primary commodity.',
      ru: 'Объясните два ограничения выгод от торговли для страны, которая специализируется на экспорте одного сырьевого товара (primary commodity).',
    },
    markscheme: {
      en: '1 mark: the first limit is identified, for example dependence on one export whose world price can fall sharply. 1 mark: it is explained: a fall in the price cuts export revenue, incomes and government tax revenue. 1 mark: the second limit is identified, for example adjustment costs or unemployment when resources cannot move easily to other industries. 1 mark: it is explained: the transition takes time and workers in the declining sector lose income.',
      ru: '1 балл: первое ограничение названо, например зависимость от одного экспорта, цена которого на мировом рынке может резко упасть. 1 балл: объяснено: падение цены сокращает выручку от экспорта, доходы и налоговые поступления государства. 1 балл: второе ограничение названо, например издержки адаптации или безработица, когда ресурсы трудно перевести в другие отрасли. 1 балл: объяснено: переход занимает время, а работники отрасли, которая сокращается, теряют доход.',
    },
    origin: 'original',
    minutes: 5,
  },
];
