import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-13-01',
    subject: 'math',
    topicIds: ['4-13-nonlinear-regression'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Five measurements of x and y are:\n\nx: 1, 2, 3, 4, 5\ny: 3.5, 4, 7.5, 10, 10\n\nA model y = 2x + 1 is proposed for these data. Find the sum of squared residuals for this model.',
      ru: 'Пять измерений x и y:\n\nx: 1, 2, 3, 4, 5\ny: 3,5; 4; 7,5; 10; 10\n\nДля этих данных предложена модель y = 2x + 1. Найдите сумму квадратов остатков для этой модели.',
    },
    markscheme: {
      en: 'M1: predicted values 3, 5, 7, 9, 11 and residuals y − ŷ: 0.5, -1, 0.5, 1, -1. M1: squares 0.25, 1, 0.25, 1, 1. A1: sum of squared residuals = 3.50.',
      ru: 'M1: предсказанные значения 3, 5, 7, 9, 11 и остатки y − ŷ: 0,5; -1; 0,5; 1; -1. M1: квадраты 0,25; 1; 0,25; 1; 1. A1: сумма квадратов остатков = 3,50.',
    },
    answer: '3.50',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-13-02',
    subject: 'math',
    topicIds: ['4-13-nonlinear-regression'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A ball is thrown upwards. Its height h (m) is recorded at times t (s):\n\nt (s): 0, 0.5, 1, 1.5, 2, 2.5, 3\nh (m): 1.2, 4.0, 6.1, 7.1, 7.6, 6.6, 4.6\n\nUse quadratic regression on your GDC to fit a curve of the form h = at² + bt + c. Find the coefficient of determination R², correct to 3 decimal places.',
      ru: 'Мяч подбрасывают вверх. Высоту h (м) записывают в моменты времени t (с):\n\nt (с): 0; 0,5; 1; 1,5; 2; 2,5; 3\nh (м): 1,2; 4,0; 6,1; 7,1; 7,6; 6,6; 4,6\n\nС помощью квадратичной регрессии на калькуляторе подберите кривую вида h = at² + bt + c. Найдите коэффициент детерминации R² с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: quadratic regression on the GDC with t in one list and h in the other. A1: h = -1.93t² + 6.99t + 1.09. A1: R² = 0.996.',
      ru: 'M1: квадратичная регрессия на калькуляторе: t в одном списке, h в другом. A1: h = −1,93t² + 6,99t + 1,09. A1: R² = 0,996.',
    },
    answer: '0.996',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-13-03',
    subject: 'math',
    topicIds: ['4-13-nonlinear-regression'],
    paper: 'P2',
    marks: 15,
    command: 'Find',
    prompt: {
      en: 'A smoothie stand in Dubai Marina opened on day 0. On day x, the average number of customers per day was y, in hundreds. The data for seven days are:\n\nDay x: 1, 2, 3, 5, 7, 10, 14\nCustomers y (hundreds): 3.4, 4.2, 5.5, 6.1, 7.3, 7.7, 8.2\n\n(a) Find the logarithmic regression model y = a + b ln x. Give a and b correct to 2 decimal places. [3]\n\n(b) Find the coefficient of determination R² for this model, correct to 3 decimal places. [2]\n\n(c) Find R² for the linear model y = px + q, correct to 3 decimal places. State which model fits the data better. [3]\n\n(d) Use the logarithmic model to estimate the average number of customers per day on day 21. Give your answer in hundreds, correct to 2 decimal places. [3]\n\n(e) Interpret the value of b in this context. Comment on the reliability of your estimate in part (d). [4]',
      ru: 'Киоск смузи в Дубай-Марина открылся в день 0. В день x среднее число покупателей за день составило y (в сотнях). Данные за семь дней:\n\nДень x: 1, 2, 3, 5, 7, 10, 14\nПокупатели y (сотни): 3,4; 4,2; 5,5; 6,1; 7,3; 7,7; 8,2\n\n(a) Найдите логарифмическую регрессионную модель y = a + b ln x. Дайте a и b с точностью до 2 знаков после запятой. [3]\n\n(b) Найдите коэффициент детерминации R² для этой модели с точностью до 3 знаков после запятой. [2]\n\n(c) Найдите R² для линейной модели y = px + q с точностью до 3 знаков после запятой. Укажите, какая модель лучше подходит к данным. [3]\n\n(d) С помощью логарифмической модели оцените среднее число покупателей за день в день 21. Ответ дайте в сотнях с точностью до 2 знаков после запятой. [3]\n\n(e) Истолкуйте значение b в этом контексте. Прокомментируйте надёжность вашей оценки в части (d). [4]',
    },
    markscheme: {
      en: '(a) M1: logarithmic regression on the GDC with x in one list and y in the other. A1: a = 3.23. A1: b = 1.93, so y = 3.23 + 1.93 ln x.\n(b) M1: R² from the GDC for the logarithmic model. A1: R² = 0.982.\n(c) M1: linear regression on the GDC. A1: R² = 0.862. R1: the logarithmic model fits better, because its R² (0.982) is closer to 1.\n(d) M1: substitute x = 21: y = 3.23 + 1.93 ln 21. A1: y = 9.09 (hundreds).\n(e) R1: b = 1.93 means that each time the number of days is multiplied by e, the average daily number of customers rises by about 1.93 hundred. R1: the growth slows over time, so the curve levels off. R1: day 21 is outside the data (days 1 to 14), so this is an extrapolation. R1: the estimate is only a rough guide, because the pattern may change.',
      ru: '(a) M1: логарифмическая регрессия на калькуляторе: x в одном списке, y в другом. A1: a = 3,23. A1: b = 1,93, то есть y = 3,23 + 1,93 ln x.\n(b) M1: R² по калькулятору для логарифмической модели. A1: R² = 0,982.\n(c) M1: линейная регрессия на калькуляторе. A1: R² = 0,862. R1: логарифмическая модель подходит лучше, так как её R² (0,982) ближе к 1.\n(d) M1: подстановка x = 21: y = 3,23 + 1,93 ln 21. A1: y = 9,09 (в сотнях).\n(e) R1: b = 1,93 означает, что каждый раз, когда число дней умножается на e, среднее число покупателей за день растёт примерно на 1,93 сотни. R1: рост со временем замедляется, поэтому кривая выравнивается. R1: день 21 лежит вне данных (дни с 1 по 14), поэтому это экстраполяция. R1: оценка лишь ориентир, так как закономерность может измениться.',
    },
    answer: '3.23; 1.93; 0.982; 0.862; 9.09',
    origin: 'original',
    minutes: 15,
  },
];
