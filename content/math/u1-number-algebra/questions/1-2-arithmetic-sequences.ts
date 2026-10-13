import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-2-01',
    subject: 'math',
    topicIds: ['1-2-arithmetic-sequences'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A sequence starts 7, 11, 15, 19, … and is arithmetic. Find the common difference d and the 20th term, u_20.',
      ru: 'Последовательность начинается с членов 7, 11, 15, 19, … и является арифметической. Найдите разность d и 20-й член u_20.',
    },
    markscheme: {
      en: 'M1: d = 11 − 7 = 4. A1: d = 4. M1: u_20 = u_1 + 19d = 7 + 19 × 4. A1: u_20 = 83.',
      ru: 'M1: разность d = 11 − 7 = 4. A1: d = 4. M1: u_20 = u_1 + 19d = 7 + 19 × 4. A1: u_20 = 83.',
    },
    answer: '4; 83',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-2-02',
    subject: 'math',
    topicIds: ['1-2-arithmetic-sequences'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A lecture hall has 25 rows of seats. The first row has 18 seats, and each row has 2 more seats than the row in front of it. Find the total number of seats in the hall.',
      ru: 'В лекционном зале 25 рядов мест. В первом ряду 18 мест, и в каждом следующем ряду на 2 места больше, чем в предыдущем. Найдите общее число мест в зале.',
    },
    markscheme: {
      en: 'M1: the number of seats in row n is u_n = 18 + (n − 1) × 2, so u_1 = 18 and d = 2. M1: u_25 = 18 + 24 × 2 = 66. M1: S_25 = 25/2 × (18 + 66). A1: 1050 seats.',
      ru: 'M1: в ряду n мест u_n = 18 + (n − 1) × 2, то есть u_1 = 18 и d = 2. M1: u_25 = 18 + 24 × 2 = 66. M1: S_25 = 25/2 × (18 + 66). A1: 1050 мест.',
    },
    answer: '1050',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-2-03',
    subject: 'math',
    topicIds: ['1-2-arithmetic-sequences'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A school library records the number of books borrowed each week. In week 1, 120 books were borrowed. A model assumes that the number borrowed increases by 8 each week, so the weekly numbers form an arithmetic sequence u_1, u_2, u_3, …\n\n(a) Find the number of books the model predicts for week 12. [2]\n\n(b) Find the total number of books the model predicts for the first 12 weeks. [3]\n\n(c) In week 12 the library actually recorded 196 books borrowed. Find the percentage error of the model\'s value for week 12, taking the actual number as the exact value. Give your answer correct to 2 decimal places. [4]\n\n(d) Find the first week in which the model predicts more than 250 books borrowed. [3]\n\n(e) Comment on how reliable the prediction in part (d) is, given your answer to part (c). [2]',
      ru: 'Школьная библиотека ведёт учёт числа книг, взятых на дом за каждую неделю. На первой неделе взяли 120 книг. Модель предполагает, что число взятых книг каждую неделю увеличивается на 8, поэтому недельные значения образуют арифметическую последовательность u_1, u_2, u_3, …\n\n(a) Найдите число книг, которое модель предсказывает на 12-ю неделю. [2]\n\n(b) Найдите общее число книг, которое модель предсказывает за первые 12 недель. [3]\n\n(c) На 12-й неделе библиотека фактически зарегистрировала 196 взятых книг. Найдите процентную погрешность значения модели для 12-й недели, считая фактическое число точным. Ответ дайте с точностью до 2 знаков после запятой. [4]\n\n(d) Найдите первую неделю, в которую модель предсказывает более 250 взятых книг. [3]\n\n(e) Прокомментируйте, насколько надёжен прогноз из части (d), с учётом ответа на часть (c). [2]',
    },
    markscheme: {
      en: '(a) M1: u_12 = 120 + 11 × 8. A1: 208 books.\n(b) M1: S_12 = 12/2 × (2 × 120 + 11 × 8). M1: substitution gives S_12 = 6 × (240 + 88) = 6 × 328. A1: 1968 books.\n(c) M1: difference between the model and the actual value: 208 − 196 = 12. M1: percentage error = 12/196 × 100. A1: 6.12 (2 decimal places). R1: the model overestimates the value by about 6.12%.\n(d) M1: 120 + 8(n − 1) > 250. A1: n − 1 > 16.25, so n − 1 ≥ 17. A1: n = 18 (u_17 = 248, u_18 = 256).\n(e) R1: the model overestimates the actual week-12 value, so the actual numbers may be lower than predicted. A1: the week in which 250 books are reached may be later than week 18, so the prediction is only an estimate and should be checked against more data.',
      ru: '(a) M1: u_12 = 120 + 11 × 8. A1: 208 книг.\n(b) M1: S_12 = 12/2 × (2 × 120 + 11 × 8). M1: подстановка даёт S_12 = 6 × (240 + 88) = 6 × 328. A1: 1968 книг.\n(c) M1: разность модели и факта: 208 − 196 = 12. M1: процентная погрешность = 12/196 × 100. A1: 6,12 (с точностью до 2 знаков). R1: модель завышает значение примерно на 6,12%.\n(d) M1: 120 + 8(n − 1) > 250. A1: n − 1 > 16,25, то есть n − 1 ≥ 17. A1: n = 18 (u_17 = 248, u_18 = 256).\n(e) R1: модель завышает фактическое значение за 12-ю неделю, значит фактические числа могут быть ниже прогноза. A1: неделя, на которую придётся 250 книг, может наступить позже 18-й недели, поэтому прогноз — лишь оценка, которую нужно проверить на более длинном ряде данных.',
    },
    answer: '208; 1968; 6.12; 18',
    origin: 'original',
    minutes: 14,
  },
];
