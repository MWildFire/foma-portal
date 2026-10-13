import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-12-01',
    subject: 'math',
    topicIds: ['1-12-complex-cartesian'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Let z = 2 + 3i and w = 1 - 4i. Find the real part and the imaginary part of z/w, giving each to 3 decimal places.',
      ru: 'Пусть z = 2 + 3i и w = 1 - 4i. Найдите действительную и мнимую части числа z/w, каждую с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: multiply the numerator and the denominator by the conjugate 1 + 4i. M1: use i^2 = -1 to get (-10 + 11i)/17. A1: real part -0.588 and imaginary part 0.647 (3 decimal places).',
      ru: 'M1: умножить числитель и знаменатель на сопряжённое число 1 + 4i. M1: использовать i^2 = -1 и получить (-10 + 11i)/17. A1: действительная часть -0,588 и мнимая часть 0,647 (с точностью до 3 знаков).',
    },
    answer: '-0.588; 0.647',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-1-12-02',
    subject: 'math',
    topicIds: ['1-12-complex-cartesian'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The complex number z = 5 - 12i is shown on an Argand diagram. Find the modulus of z, and the principal argument of z in degrees. Give both answers correct to 2 decimal places.',
      ru: 'Комплексное число z = 5 - 12i отмечено на диаграмме Аргана. Найдите модуль z и главное значение аргумента z в градусах. Оба ответа дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: |z| = sqrt(5^2 + (-12)^2). A1: |z| = 13.00. M1: z lies in the fourth quadrant, so arg z = -arctan(12/5). A1: arg z = -67.38 degrees (2 decimal places).',
      ru: 'M1: |z| = sqrt(5^2 + (-12)^2). A1: |z| = 13,00. M1: z лежит в четвёртом квадранте, поэтому arg z = -arctan(12/5). A1: arg z = -67,38 градуса (с точностью до 2 знаков).',
    },
    answer: '13.00; -67.38',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-12-03',
    subject: 'math',
    topicIds: ['1-12-complex-cartesian'],
    paper: 'P2',
    marks: 14,
    command: 'Find, Write down',
    prompt: {
      en: 'Let p(z) = z^2 - 6z + 34.\n\n(a) Find the roots of p(z) = 0 in the form a + bi and a - bi, where b > 0. Write down the values of a and b. [3]\n\n(b) Plot the two roots on an Argand diagram, and find the modulus of each root, correct to 2 decimal places. [2]\n\n(c) Find the argument of the root with positive imaginary part, in degrees, correct to 2 decimal places. [3]\n\n(d) Find (3 + 5i)^3 in the form x + yi. [3]\n\n(e) Find the least positive integer n such that |(3 + 5i)^n| > 1000. [3]',
      ru: 'Пусть p(z) = z^2 - 6z + 34.\n\n(a) Найдите корни уравнения p(z) = 0 в виде a + bi и a - bi, где b > 0. Укажите значения a и b. [3]\n\n(b) Отметьте два корня на диаграмме Аргана и найдите модуль каждого корня с точностью до 2 знаков после запятой. [2]\n\n(c) Найдите аргумент корня с положительной мнимой частью в градусах с точностью до 2 знаков после запятой. [3]\n\n(d) Найдите (3 + 5i)^3 в виде x + yi. [3]\n\n(e) Найдите наименьшее натуральное n, при котором |(3 + 5i)^n| > 1000. [3]',
    },
    markscheme: {
      en: '(a) M1: discriminant 36 - 4(34) = -100, or the quadratic formula. M1: z = (6 ± sqrt(-100))/2. A1: roots 3 + 5i and 3 - 5i, so a = 3 and b = 5.\n(b) A1: both roots plotted as a conjugate pair, symmetric about the real axis. A1: |z| = sqrt(34) = 5.83 for each root (2 decimal places).\n(c) M1: arg z = arctan(5/3) for the root in the first quadrant. A1: the root lies in the first quadrant, so no adjustment is needed. A1: 59.04 degrees (2 decimal places).\n(d) M1: (3 + 5i)^2 = -16 + 30i. M1: multiply by (3 + 5i). A1: (3 + 5i)^3 = -198 + 10i, so x = -198 and y = 10.\n(e) M1: |3 + 5i|^n = (sqrt(34))^n > 1000. A1: n = 3 gives 198.25, which is too small. A1: n = 4 gives 1156 > 1000, so n = 4.',
      ru: '(a) M1: дискриминант 36 - 4(34) = -100 или формула корней. M1: z = (6 ± sqrt(-100))/2. A1: корни 3 + 5i и 3 - 5i, значит a = 3 и b = 5.\n(b) A1: оба корня отмечены как сопряжённая пара, симметричная относительно действительной оси. A1: |z| = sqrt(34) = 5,83 для каждого корня (с точностью до 2 знаков).\n(c) M1: arg z = arctan(5/3) для корня в первом квадранте. A1: корень лежит в первом квадранте, поправка не нужна. A1: 59,04 градуса (с точностью до 2 знаков).\n(d) M1: (3 + 5i)^2 = -16 + 30i. M1: умножить на (3 + 5i). A1: (3 + 5i)^3 = -198 + 10i, значит x = -198 и y = 10.\n(e) M1: |3 + 5i|^n = (sqrt(34))^n > 1000. A1: при n = 3 получается 198,25, это слишком мало. A1: при n = 4 получается 1156 > 1000, значит n = 4.',
    },
    answer: '3; 5; 5.83; 59.04; -198; 10; 4',
    origin: 'original',
    minutes: 14,
  },
];
