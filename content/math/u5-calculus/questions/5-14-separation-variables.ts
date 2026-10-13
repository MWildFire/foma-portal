import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-14-01',
    subject: 'math',
    topicIds: ['5-14-separation-variables'],
    paper: 'P1',
    marks: 3,
    command: 'Solve, Find',
    prompt: {
      en: 'Solve the differential equation dy/dx = 2xy, given that y = 3 when x = 0. Find the value of y when x = 1, giving your answer correct to 2 decimal places.',
      ru: 'Решите дифференциальное уравнение dy/dx = 2xy, если y = 3 при x = 0. Найдите значение y при x = 1. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: separate the variables and integrate: ∫(1/y) dy = ∫2x dx, so ln y = x² + C. M1: y = 3 when x = 0 gives C = ln 3, so y = 3e^(x²). A1: y(1) = 3e = 8.15 (2 decimal places).',
      ru: 'M1: разделим переменные и проинтегрируем: ∫(1/y) dy = ∫2x dx, откуда ln y = x² + C. M1: при x = 0 значение y равно 3, поэтому C = ln 3 и y = 3e^(x²). A1: y(1) = 3e = 8,15 (с точностью до 2 знаков).',
    },
    answer: '8.15',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-14-02',
    subject: 'math',
    topicIds: ['5-14-separation-variables'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The number of fish, N, in a lake satisfies the differential equation dN/dt = 0.05(600 − N), where t is the time in years. There are 100 fish in the lake at t = 0. Find the number of fish in the lake after 10 years, giving your answer to the nearest whole number.',
      ru: 'Количество рыбы N в озере удовлетворяет дифференциальному уравнению dN/dt = 0,05(600 − N), где t — время в годах. В момент t = 0 в озере 100 рыб. Найдите количество рыбы в озере через 10 лет. Ответ дайте с точностью до целого числа.',
    },
    markscheme: {
      en: 'M1: separate the variables: dN/(600 − N) = 0.05 dt. M1: integrate: −ln|600 − N| = 0.05t + C. A1: 600 − N = 500e^(−0.05t), using N = 100 when t = 0. A1: N(10) = 600 − 500e^(−0.5) = 296.73, so 297 fish to the nearest whole number.',
      ru: 'M1: разделим переменные: dN/(600 − N) = 0,05 dt. M1: проинтегрируем: −ln|600 − N| = 0,05t + C. A1: 600 − N = 500e^(−0,05t), используя N = 100 при t = 0. A1: N(10) = 600 − 500e^(−0,5) = 296,73, то есть 297 рыб (до целого).',
    },
    answer: '297',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-14-03',
    subject: 'math',
    topicIds: ['5-14-separation-variables'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A tank contains 500 litres of water in which 40 kg of salt is dissolved. At time t = 0, fresh water starts to flow into the tank at 5 litres per minute, and the well-mixed solution flows out of the tank at the same rate, so the volume stays at 500 litres. Let A kg be the mass of salt in the tank at time t minutes.\n\n(a) Show that dA/dt = −A/100. [3]\n\n(b) Given that A = 40 when t = 0, solve the differential equation by separation of variables to show that A = 40e^(−t/100). [4]\n\n(c) Find the time, in minutes, at which the mass of salt in the tank is 10 kg. Give your answer correct to 1 decimal place. [3]\n\n(d) Find the mass of salt in the tank after 2 hours. Give your answer correct to 2 decimal places. [2]\n\n(e) Comment on the behaviour of A as t becomes very large. [2]',
      ru: 'В бак вместимостью 500 литров налита вода, в которой растворены 40 кг соли. В момент t = 0 в бак начинает поступать пресная вода со скоростью 5 литров в минуту, а хорошо перемешанный раствор вытекает с той же скоростью, так что объём остаётся 500 литров. Пусть A кг — масса соли в баке в момент времени t минут.\n\n(a) Покажите, что dA/dt = −A/100. [3]\n\n(b) Учитывая, что A = 40 при t = 0, решите дифференциальное уравнение разделением переменных и покажите, что A = 40e^(−t/100). [4]\n\n(c) Найдите время в минутах, через которое масса соли в баке станет 10 кг. Ответ дайте с точностью до 1 знака после запятой. [3]\n\n(d) Найдите массу соли в баке через 2 часа. Ответ дайте с точностью до 2 знаков после запятой. [2]\n\n(e) Прокомментируйте поведение A при очень больших t. [2]',
    },
    markscheme: {
      en: '(a) M1: salt leaving the tank per minute is (A/500) × 5 = A/100. R1: the inflow is fresh water, so no salt enters. A1: dA/dt = −A/100 (AG).\n(b) M1: separate the variables: dA/A = −dt/100. M1: integrate: ln|A| = −t/100 + C. M1: A = Be^(−t/100). A1: A = 40 when t = 0 gives B = 40, so A = 40e^(−t/100) (AG).\n(c) M1: 40e^(−t/100) = 10 gives e^(−t/100) = 1/4. M1: t = 100 ln 4. A1: t = 138.6 minutes (1 decimal place).\n(d) M1: substitute t = 120: A = 40e^(−1.2). A1: A = 12.05 kg (2 decimal places).\n(e) R1: as t becomes very large, e^(−t/100) tends to 0, so A tends to 0. R1: the salt is removed gradually and the model never reaches exactly zero; the amount decays exponentially.',
      ru: '(a) M1: масса соли, уходящей за минуту, равна (A/500) × 5 = A/100. R1: поступает пресная вода, поэтому соль не добавляется. A1: dA/dt = −A/100 (AG).\n(b) M1: разделим переменные: dA/A = −dt/100. M1: проинтегрируем: ln|A| = −t/100 + C. M1: A = Be^(−t/100). A1: при t = 0 значение A = 40, значит B = 40 и A = 40e^(−t/100) (AG).\n(c) M1: 40e^(−t/100) = 10 даёт e^(−t/100) = 1/4. M1: t = 100 ln 4. A1: t = 138,6 минуты (с точностью до 1 знака).\n(d) M1: подставим t = 120: A = 40e^(−1,2). A1: A = 12,05 кг (с точностью до 2 знаков).\n(e) R1: при очень больших t величина e^(−t/100) стремится к 0, значит A стремится к 0. R1: соль выводится постепенно, и модель никогда не даёт ровно ноль; количество убывает экспоненциально.',
    },
    answer: '138.6; 12.05',
    origin: 'original',
    minutes: 14,
  },
];
