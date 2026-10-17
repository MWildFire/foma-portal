import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-3-01',
    subject: 'math',
    topicIds: ['4-3-central-dispersion'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate, Estimate',
    prompt: {
      en: 'The heights, h cm, of 60 plants are grouped as follows: 0 to 10 cm: 6 plants; 10 to 20 cm: 18 plants; 20 to 30 cm: 24 plants; 30 to 40 cm: 12 plants. Calculate an estimate of the mean height of the plants. Give your answer correct to 1 decimal place.',
      ru: 'Высоты h (в см) 60 растений сгруппированы так: от 0 до 10 см: 6 растений; от 10 до 20 см: 18 растений; от 20 до 30 см: 24 растения; от 30 до 40 см: 12 растений. Вычислите оценку средней высоты растений. Дайте ответ с точностью до 1 знака после запятой.',
    },
    markscheme: {
      en: 'M1: class midpoints 5, 15, 25 and 35. M1: sum of f x = 30 + 270 + 600 + 420 = 1320. A1: estimated mean = 1320 / 60 = 22.0 cm.',
      ru: 'M1: середины классов 5, 15, 25 и 35. M1: сумма f x = 30 + 270 + 600 + 420 = 1320. A1: оценка среднего = 1320 / 60 = 22,0 см.',
    },
    answer: '22.0',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-3-02',
    subject: 'math',
    topicIds: ['4-3-central-dispersion'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A data set of six values has mean 14 and standard deviation 3.5. Each value is multiplied by 2, and then 5 is added to the result. Find the new mean and the new standard deviation.',
      ru: 'Набор из шести значений имеет среднее 14 и стандартное отклонение 3,5. Каждое значение умножили на 2, а затем к результату прибавили 5. Найдите новое среднее и новое стандартное отклонение.',
    },
    markscheme: {
      en: 'M1: new mean = 2 × 14 + 5. A1: new mean = 33. A1: new standard deviation = 2 × 3.5 = 7, because adding 5 does not change the spread.',
      ru: 'M1: новое среднее = 2 × 14 + 5. A1: новое среднее = 33. A1: новое стандартное отклонение = 2 × 3,5 = 7, так как прибавление 5 не меняет разброс.',
    },
    answer: '33; 7',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-3-03',
    subject: 'math',
    topicIds: ['4-3-central-dispersion'],
    paper: 'P2',
    marks: 14,
    command: 'Estimate',
    prompt: {
      en: 'The daily steps, in thousands, of 40 students are grouped as follows: 0 to 4: 5 students; 4 to 6: 12 students; 6 to 8: 14 students; 8 to 12: 9 students. The daily steps, in thousands, of six other students are: 3, 5, 6, 7, 9, 12.\n\n(a) (i) Estimate the mean number of steps of the 40 students. Give your answer correct to 2 decimal places. [3]\n(ii) Write down the modal class. [1]\n\n(b) For the six students, (i) find the mean. [1] (ii) find the standard deviation, correct to 2 decimal places. [3]\n\n(c) For the six students, find the lower quartile, the upper quartile and the interquartile range. [4]\n\n(d) Explain which measure of spread, the standard deviation or the interquartile range, better describes the six values. [2]',
      ru: 'Ежедневное количество шагов (в тысячах) 40 учеников сгруппировано так: от 0 до 4: 5 учеников; от 4 до 6: 12 учеников; от 6 до 8: 14 учеников; от 8 до 12: 9 учеников. Ежедневное количество шагов (в тысячах) у шести других учеников: 3, 5, 6, 7, 9, 12.\n\n(a) (i) Оцените среднее количество шагов у 40 учеников. Дайте ответ с точностью до 2 знаков после запятой. [3]\n(ii) Укажите модальный класс. [1]\n\n(b) Для шести учеников (i) найдите среднее. [1] (ii) найдите стандартное отклонение с точностью до 2 знаков после запятой. [3]\n\n(c) Для шести учеников найдите нижний квартиль, верхний квартиль и межквартильный размах. [4]\n\n(d) Объясните, какая мера разброса — стандартное отклонение или межквартильный размах — лучше описывает шесть значений. [2]',
    },
    markscheme: {
      en: '(a)(i) M1: midpoints 2, 5, 7 and 10, with f x = 10, 60, 98 and 90. M1: sum of f x = 258. A1: 258 / 40 = 6.45 (thousand steps).\n(a)(ii) A1: 6 to 8, the class with the highest frequency density, 14 / 2 = 7.\n(b)(i) A1: mean = (3 + 5 + 6 + 7 + 9 + 12) / 6 = 7.\n(b)(ii) M1: sum of squared deviations from 7 is 16 + 4 + 1 + 0 + 4 + 25 = 50. M1: variance = 50 / 6 = 8.33. A1: standard deviation = 2.89.\n(c) M1: lower half 3, 5, 6 and upper half 7, 9, 12. A1: lower quartile 5. A1: upper quartile 9. A1: IQR = 9 − 5 = 4.\n(d) R1: a reasoned choice of either measure is acceptable. IQR = 4 describes the middle half and is robust to extreme values; SD = 2.89 uses every value and is reasonable for the full spread. R1: there is no Tukey outlier here: fences are −1 and 15. Do not assert that 12 is automatically an outlier or that one measure is universally better.',
      ru: '(a)(i) M1: середины 2, 5, 7 и 10, с f x = 10, 60, 98 и 90. M1: сумма f x = 258. A1: 258 / 40 = 6,45 (тысячи шагов).\n(a)(ii) A1: от 6 до 8, класс с наибольшей плотностью частоты 14 / 2 = 7.\n(b)(i) A1: среднее = (3 + 5 + 6 + 7 + 9 + 12) / 6 = 7.\n(b)(ii) M1: сумма квадратов отклонений от 7 равна 16 + 4 + 1 + 0 + 4 + 25 = 50. M1: дисперсия = 50 / 6 = 8,33. A1: стандартное отклонение = 2,89.\n(c) M1: нижняя половина 3, 5, 6 и верхняя половина 7, 9, 12. A1: нижний квартиль 5. A1: верхний квартиль 9. A1: IQR = 9 − 5 = 4.\n(d) R1: допустим обоснованный выбор любой меры. IQR = 4 описывает среднюю половину и устойчив к крайним значениям; SD = 2,89 учитывает все наблюдения и подходит для полного разброса. R1: выбросов по Тьюки нет: границы −1 и 15. Нельзя автоматически называть 12 выбросом или одну меру всегда лучшей.',
    },
    answer: '6.45; 7; 2.89; 5; 9; 4',
    origin: 'original',
    minutes: 14,
  },
];
