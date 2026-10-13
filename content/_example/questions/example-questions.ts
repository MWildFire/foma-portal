import type { Question } from '../../../src/contract/types';
import { EXAMPLE_SUBJECT } from '../ids';

export const questions: Question[] = [
  {
    id: 'example-q1',
    subject: EXAMPLE_SUBJECT,
    topicIds: ['example-topic'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The price of a bus ticket rises from 4.00 to 5.00 AED. The quantity demanded falls from 200 to 160 tickets per day. Calculate the price elasticity of demand.',
      ru: 'Цена билета на автобус выросла с 4,00 до 5,00 AED. Величина спроса упала с 200 до 160 билетов в день. Рассчитайте ценовую эластичность спроса.',
    },
    markscheme: {
      en: '1 mark: % change in quantity = -40 / 200 = -20%. 1 mark: % change in price = 1 / 4 = 25%. 1 mark: PED = -20 / 25 = -0.8 (accept 0.8 if the sign is dropped with a note).',
      ru: '1 балл: процентное изменение величины спроса = -40 / 200 = -20%. 1 балл: процентное изменение цены = 1 / 4 = 25%. 1 балл: PED = -20 / 25 = -0,8 (засчитывается 0,8, если знак опущен с пометкой).',
    },
    answer: '-0.8',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'example-q2',
    subject: EXAMPLE_SUBJECT,
    topicIds: ['example-topic'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a bus company might prefer a route where demand is inelastic.',
      ru: 'Объясните, почему автобусная компания может предпочесть маршрут с неэластичным спросом.',
    },
    markscheme: {
      en: '1 mark: a price rise increases total revenue when demand is inelastic. 1 mark: the percentage fall in quantity is smaller than the percentage rise in price. 1 mark: link to the company revenue or profit. 1 mark: a real-world qualifier, such as few substitutes for commuters.',
      ru: '1 балл: при неэластичном спросе рост цены увеличивает выручку. 1 балл: процентное падение количества меньше процентного роста цены. 1 балл: связь с выручкой или прибылью компании. 1 балл: уточнение, например, у пассажиров-работников мало замен.',
    },
    origin: 'original',
    minutes: 5,
  },
];
