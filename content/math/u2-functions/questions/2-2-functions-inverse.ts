import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-2-01',
    subject: 'math',
    topicIds: ['2-2-functions-inverse'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The function f is defined by f(x) = e^x + 2 for all real x. Find f^(-1)(5), giving your answer to 3 decimal places.',
      ru: 'Функция f задана формулой f(x) = e^x + 2 для всех действительных x. Найдите f^(-1)(5); ответ запишите с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: f^(-1)(5) = a means f(a) = 5, so e^a + 2 = 5. M1: e^a = 3, so a = ln 3. A1: 1.099 (3 decimal places).',
      ru: 'M1: f^(-1)(5) = a означает f(a) = 5, то есть e^a + 2 = 5. M1: e^a = 3, откуда a = ln 3. A1: 1,099 (с точностью до 3 знаков).',
    },
    answer: '1.099',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-2-2-02',
    subject: 'math',
    topicIds: ['2-2-functions-inverse'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The function f is defined by f(x) = x^2 - 6x + 11 for x ≥ 3. Find the least value in the range of f, and the value of f^(-1)(6).',
      ru: 'Функция f задана формулой f(x) = x^2 - 6x + 11 при x ≥ 3. Найдите наименьшее значение в области значений f и значение f^(-1)(6).',
    },
    markscheme: {
      en: 'M1: complete the square: f(x) = (x - 3)^2 + 2. A1: least value 2 (at x = 3), so the range is f(x) ≥ 2. M1: solve (x - 3)^2 + 2 = 6, so (x - 3)^2 = 4. A1: x = 5, since x = 1 is rejected by x ≥ 3; so f^(-1)(6) = 5.',
      ru: 'M1: выделяем полный квадрат: f(x) = (x - 3)^2 + 2. A1: наименьшее значение 2 (при x = 3), значит область значений f(x) ≥ 2. M1: решаем (x - 3)^2 + 2 = 6, откуда (x - 3)^2 = 4. A1: x = 5, так как корень x = 1 не удовлетворяет условию x ≥ 3; значит, f^(-1)(6) = 5.',
    },
    answer: '2; 5',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-2-03',
    subject: 'math',
    topicIds: ['2-2-functions-inverse'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bottle of juice at 22 °C is placed in a fridge kept at 4 °C. The temperature T °C of the juice t minutes after it is placed in the fridge is modelled by T(t) = 4 + 18e^(-0.4t), for t ≥ 0.\n\n(a) Write down T(0), and the temperature that the juice approaches as t increases. [2]\n\n(b) Find T(5), giving your answer to 2 decimal places. [2]\n\n(c) Find the time at which the juice reaches 10 °C, giving your answer to 2 decimal places. [3]\n\n(d) Show that the inverse function is T^(-1)(θ) = 2.5 ln(18/(θ - 4)), for 4 < θ ≤ 22, and explain why its domain is 4 < θ ≤ 22. [4]\n\n(e) Use T^(-1) to find the time at which the juice reaches 5 °C, giving your answer to 2 decimal places. [3]',
      ru: 'Бутылку сока при 22 °C кладут в холодильник, который поддерживает температуру 4 °C. Температура T °C сока через t минут после того, как его положили в холодильник, описывается моделью T(t) = 4 + 18e^(-0.4t) при t ≥ 0.\n\n(a) Запишите T(0) и температуру, к которой приближается сок при возрастании t. [2]\n\n(b) Найдите T(5); ответ округлите до 2 знаков после запятой. [2]\n\n(c) Найдите время, через которое сок достигнет 10 °C; ответ округлите до 2 знаков после запятой. [3]\n\n(d) Покажите, что обратная функция равна T^(-1)(θ) = 2,5 ln(18/(θ - 4)) при 4 < θ ≤ 22, и объясните, почему её область определения — 4 < θ ≤ 22. [4]\n\n(e) С помощью T^(-1) найдите время, через которое сок достигнет 5 °C; ответ округлите до 2 знаков после запятой. [3]',
    },
    markscheme: {
      en: '(a) A1: T(0) = 4 + 18 = 22. A1: the temperature approaches 4 °C, since e^(-0.4t) tends to 0.\n(b) M1: T(5) = 4 + 18e^(-2). A1: 6.44 (2 decimal places).\n(c) M1: 10 = 4 + 18e^(-0.4t), so e^(-0.4t) = 1/3. M1: -0.4t = ln(1/3), so t = ln 3/0.4. A1: 2.75 (2 decimal places).\n(d) M1: y = 4 + 18e^(-0.4t) gives e^(-0.4t) = (y - 4)/18. M1: t = -2.5 ln((y - 4)/18). A1: T^(-1)(θ) = 2.5 ln(18/(θ - 4)). R1: t ≥ 0 gives 0 < e^(-0.4t) ≤ 1, so 4 < θ ≤ 22, which is the range of T and therefore the domain of T^(-1).\n(e) M1: T^(-1)(5) = 2.5 ln(18/(5 - 4)) = 2.5 ln 18. A1: 2.5 ln 18 = 7.2259... A1: 7.23 (2 decimal places).',
      ru: '(a) A1: T(0) = 4 + 18 = 22. A1: температура приближается к 4 °C, так как e^(-0,4t) стремится к 0.\n(b) M1: T(5) = 4 + 18e^(-2). A1: 6,44 (2 знака после запятой).\n(c) M1: 10 = 4 + 18e^(-0,4t), откуда e^(-0,4t) = 1/3. M1: -0,4t = ln(1/3), значит t = ln 3/0,4. A1: 2,75 (2 знака после запятой).\n(d) M1: из y = 4 + 18e^(-0,4t) следует e^(-0,4t) = (y - 4)/18. M1: t = -2,5 ln((y - 4)/18). A1: T^(-1)(θ) = 2,5 ln(18/(θ - 4)). R1: t ≥ 0 даёт 0 < e^(-0,4t) ≤ 1, значит 4 < θ ≤ 22; это область значений T, а значит, и область определения T^(-1).\n(e) M1: T^(-1)(5) = 2,5 ln(18/(5 - 4)) = 2,5 ln 18. A1: 2,5 ln 18 = 7,2259... A1: 7,23 (2 знака после запятой).',
    },
    answer: '22; 4; 6.44; 2.75; 7.23',
    origin: 'original',
    minutes: 14,
  },
];
