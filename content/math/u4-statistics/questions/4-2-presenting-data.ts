import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-2-01',
    subject: 'math',
    topicIds: ['4-2-presenting-data'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The travel times, t minutes, of 55 students are grouped as follows: 0 to 10 minutes: 12 students; 10 to 20 minutes: 18 students; 20 to 30 minutes: 15 students; 30 to 50 minutes: 10 students. A histogram is drawn with one bar for each class. Find the frequency density of the class 30 to 50 minutes. Find also the number of students whose travel time is at least 20 minutes.',
      ru: 'Время в пути t (в минутах) 55 учеников сгруппировано так: от 0 до 10 минут: 12 учеников; от 10 до 20 минут: 18 учеников; от 20 до 30 минут: 15 учеников; от 30 до 50 минут: 10 учеников. Гистограмма строится с одним столбцом для каждого класса. Найдите плотность частоты для класса от 30 до 50 минут. Найдите также число учеников, время в пути которых не меньше 20 минут.',
    },
    markscheme: {
      en: 'M1: frequency density = frequency / class width = 10 / 20. A1: 0.5. A1: 15 + 10 = 25 students (the classes 20 to 30 and 30 to 50).',
      ru: 'M1: плотность частоты = частота / ширина класса = 10 / 20. A1: 0,5. A1: 15 + 10 = 25 учеников (классы от 20 до 30 и от 30 до 50).',
    },
    answer: '0.5; 25',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-2-02',
    subject: 'math',
    topicIds: ['4-2-presenting-data'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The number of text messages sent in one day by 12 students is: 3, 5, 6, 8, 8, 9, 11, 12, 14, 15, 17, 21. Find (a) the range; (b) the interquartile range, correct to 1 decimal place. Use your GDC for the quartiles.',
      ru: 'Количество сообщений, отправленных за один день 12 учениками: 3, 5, 6, 8, 8, 9, 11, 12, 14, 15, 17, 21. Найдите (a) размах; (b) межквартильный размах с точностью до 1 знака после запятой. Квартили найдите с помощью калькулятора.',
    },
    markscheme: {
      en: '(a) A1: range = 21 − 3 = 18. (b) M1: lower quartile 7 and upper quartile 14.5, the medians of the lower and upper halves of the ordered data (the GDC one-variable statistics gives the same values). A1: IQR = 14.5 − 7 = 7.5.',
      ru: '(a) A1: размах = 21 − 3 = 18. (b) M1: нижний квартиль 7 и верхний квартиль 14,5, это медианы нижней и верхней половин упорядоченных данных (одномерная статистика калькулятора даёт те же значения). A1: IQR = 14,5 − 7 = 7,5.',
    },
    answer: '18; 7.5',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-2-03',
    subject: 'math',
    topicIds: ['4-2-presenting-data'],
    paper: 'P2',
    marks: 14,
    command: 'Write down',
    prompt: {
      en: 'The waiting times, in minutes, of 80 students at a school bus stop on one morning are grouped as follows: 0 to 5 minutes: 4 students; 5 to 10 minutes: 12 students; 10 to 15 minutes: 20 students; 15 to 20 minutes: 24 students; 20 to 25 minutes: 14 students; 25 to 30 minutes: 6 students.\n\n(a) Write down the cumulative frequency at each upper class boundary: 5, 10, 15, 20, 25 and 30 minutes. [2]\n\n(b) Draw the cumulative frequency graph for these data. [2]\n\n(c) Use your graph, with straight lines between the plotted points, to estimate the median and the lower quartile. Give both answers correct to 1 decimal place. [3]\n\n(d) Estimate the upper quartile and the 90th percentile. Give both answers correct to 1 decimal place. [3]\n\n(e) Find the interquartile range, correct to 1 decimal place. [2]\n\n(f) Find the percentage of students who waited at least 10 minutes and less than 20 minutes. Give your answer to the nearest whole number. [2]',
      ru: 'Время ожидания автобуса t (в минутах) у 80 учеников на одной остановке утром сгруппировано так: от 0 до 5 минут: 4 ученика; от 5 до 10 минут: 12 учеников; от 10 до 15 минут: 20 учеников; от 15 до 20 минут: 24 ученика; от 20 до 25 минут: 14 учеников; от 25 до 30 минут: 6 учеников.\n\n(a) Выпишите накопленные частоты при верхних границах классов: 5, 10, 15, 20, 25 и 30 минут. [2]\n\n(b) Постройте график накопленных частот для этих данных. [2]\n\n(c) По графику, соединяя отмеченные точки отрезками, оцените медиану и нижний квартиль. Дайте оба ответа с точностью до 1 знака после запятой. [3]\n\n(d) Оцените верхний квартиль и 90-й перцентиль. Дайте оба ответа с точностью до 1 знака после запятой. [3]\n\n(e) Найдите межквартильный размах с точностью до 1 знака после запятой. [2]\n\n(f) Найдите процент учеников, которые ждали не меньше 10 минут и меньше 20 минут. Дайте ответ с точностью до целого. [2]',
    },
    markscheme: {
      en: '(a) M1: running totals of the frequencies. A1: 4; 16; 36; 60; 74; 80.\n(b) A1: points (5, 4), (10, 16), (15, 36), (20, 60), (25, 74) and (30, 80), plotted at the upper class boundaries and joined, starting from (0, 0). A1: correct axes and scales.\n(c) M1: the median is at cumulative frequency 40 and the lower quartile at 20. A1: median = 15 + (40 − 36) / (60 − 36) × 5 = 15.8. A1: lower quartile = 10 + (20 − 16) / (36 − 16) × 5 = 11.0.\n(d) M1: the upper quartile is at 60 and the 90th percentile at 0.9 × 80 = 72. A1: upper quartile = 20.0, which is the point (20, 60). A1: 90th percentile = 20 + (72 − 60) / (74 − 60) × 5 = 24.3.\n(e) M1: IQR = 20.0 − 11.0. A1: 9.0.\n(f) M1: students with waiting times from 10 to 20 minutes: 20 + 24 = 44. A1: 44 / 80 × 100 = 55%.',
      ru: '(a) M1: нарастающие суммы частот. A1: 4; 16; 36; 60; 74; 80.\n(b) A1: точки (5, 4), (10, 16), (15, 36), (20, 60), (25, 74) и (30, 80), отмеченные при верхних границах классов и соединённые, начиная с точки (0, 0). A1: верные оси и масштаб.\n(c) M1: медиана соответствует накопленной частоте 40, нижний квартиль — 20. A1: медиана = 15 + (40 − 36) / (60 − 36) × 5 = 15,8. A1: нижний квартиль = 10 + (20 − 16) / (36 − 16) × 5 = 11,0.\n(d) M1: верхний квартиль соответствует 60, 90-й перцентиль — 0,9 × 80 = 72. A1: верхний квартиль = 20,0, это точка (20, 60). A1: 90-й перцентиль = 20 + (72 − 60) / (74 − 60) × 5 = 24,3.\n(e) M1: IQR = 20,0 − 11,0. A1: 9,0.\n(f) M1: учеников, которые ждали от 10 до 20 минут: 20 + 24 = 44. A1: 44 / 80 × 100 = 55 %.',
    },
    answer: '4; 16; 36; 60; 74; 80; 15.8; 11.0; 20.0; 24.3; 9.0; 55',
    origin: 'original',
    minutes: 14,
  },
];
