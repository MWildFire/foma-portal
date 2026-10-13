import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-11-01',
    subject: 'math',
    topicIds: ['5-11-integration-techniques'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Find the value of the definite integral of (1/x + 2x) dx from x = 1 to x = 2, giving your answer correct to 3 decimal places.',
      ru: 'Найдите значение определённого интеграла от (1/x + 2x) dx при x от 1 до 2. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: an antiderivative is ln x + x^2 (the integral of 1/x is ln|x| and the integral of 2x is x^2). M1: evaluate (ln 2 + 2^2) - (ln 1 + 1^2). A1: ln 2 + 3 = 3.693 (3 decimal places).',
      ru: 'M1: первообразная ln x + x^2 (интеграл от 1/x равен ln|x|, интеграл от 2x равен x^2). M1: подставляем пределы (ln 2 + 2^2) - (ln 1 + 1^2). A1: ln 2 + 3 = 3,693 (с точностью до 3 знаков).',
    },
    answer: '3.693',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-11-02',
    subject: 'math',
    topicIds: ['5-11-integration-techniques'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Use the substitution u = x^2 + 1 to find the value of the integral from 0 to 1 of 2x(x^2 + 1)^3 dx. Give your answer correct to 2 decimal places.',
      ru: 'Используя подстановку u = x^2 + 1, найдите значение интеграла от 0 до 1 от 2x(x^2 + 1)^3 dx. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: du/dx = 2x, so du = 2x dx. M1: change the limits: x = 0 gives u = 1 and x = 1 gives u = 2. A1: the integral becomes the integral of u^3 du from 1 to 2. A1: [u^4/4] from 1 to 2 = (16 - 1)/4 = 3.75 (2 decimal places).',
      ru: 'M1: du/dx = 2x, значит du = 2x dx. M1: меняем пределы: при x = 0 получаем u = 1, при x = 1 получаем u = 2. A1: интеграл принимает вид интеграла от u^3 du от 1 до 2. A1: [u^4/4] от 1 до 2 = (16 - 1)/4 = 3,75 (с точностью до 2 знаков).',
    },
    answer: '3.75',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-11-03',
    subject: 'math',
    topicIds: ['5-11-integration-techniques'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'Water flows into a tank at a rate of 2t e^(t^2) litres per minute for t >= 0, where t is the time in minutes since the flow started. The tank is empty when t = 0.\n\n(a) Using the substitution u = t^2, show that the integral of 2t e^(t^2) dt is e^(t^2) + C. [2]\n(b) Hence find the volume of water that flows in during the first minute. Give your answer correct to 3 decimal places. [3]\n(c) Find the volume of water that flows in between t = 1 and t = 2 minutes. Give your answer correct to 3 decimal places. [3]\n(d) Find the time T, in minutes, at which the total volume of water that has flowed in reaches 20 litres. Give your answer correct to 3 decimal places. [4]\n(e) State one limitation of this model for large values of t, and give a reason. [2]',
      ru: 'В резервуар поступает вода со скоростью 2t e^(t^2) литров в минуту при t >= 0, где t — время в минутах с начала подачи. При t = 0 резервуар пуст.\n\n(a) Используя подстановку u = t^2, покажите, что интеграл от 2t e^(t^2) dt равен e^(t^2) + C. [2]\n(b) Используя этот результат, найдите объём воды, поступившей за первую минуту. Ответ дайте с точностью до 3 знаков после запятой. [3]\n(c) Найдите объём воды, поступившей между t = 1 и t = 2 минутами. Ответ дайте с точностью до 3 знаков после запятой. [3]\n(d) Найдите время T в минутах, при котором суммарный объём поступившей воды достигнет 20 литров. Ответ дайте с точностью до 3 знаков после запятой. [4]\n(e) Укажите одно ограничение этой модели при больших значениях t и объясните причину. [2]',
    },
    markscheme: {
      en: '(a) M1: u = t^2, so du = 2t dt. A1: the integral becomes the integral of e^u du = e^u + C = e^(t^2) + C (AG).\n(b) M1: limits t = 0 and t = 1 give [e^(t^2)] from 0 to 1 = e - 1. A1: e - 1. A1: 1.718 (3 decimal places).\n(c) M1: [e^(t^2)] from 1 to 2 = e^4 - e. A1: e^4 - e. A1: 51.880 (3 decimal places).\n(d) M1: total volume V(t) = e^(t^2) - 1. M1: e^(T^2) - 1 = 20, so e^(T^2) = 21. A1: T^2 = ln 21. A1: T = 1.745 (3 decimal places).\n(e) R1: the rate 2t e^(t^2) increases without limit as t grows. R1: a real pump has a maximum rate, so the model is unrealistic for large t.',
      ru: '(a) M1: u = t^2, значит du = 2t dt. A1: интеграл принимает вид интеграла от e^u du = e^u + C = e^(t^2) + C (AG).\n(b) M1: пределы t = 0 и t = 1 дают [e^(t^2)] от 0 до 1 = e - 1. A1: e - 1. A1: 1,718 (с точностью до 3 знаков).\n(c) M1: [e^(t^2)] от 1 до 2 = e^4 - e. A1: e^4 - e. A1: 51,880 (с точностью до 3 знаков).\n(d) M1: суммарный объём V(t) = e^(t^2) - 1. M1: e^(T^2) - 1 = 20, значит e^(T^2) = 21. A1: T^2 = ln 21. A1: T = 1,745 (с точностью до 3 знаков).\n(e) R1: скорость 2t e^(t^2) растёт без ограничения при росте t. R1: у реального насоса есть предельная производительность, поэтому модель неприменима при больших t.',
    },
    answer: '1.718; 51.880; 1.745',
    origin: 'original',
    minutes: 14,
  },
];
