import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'revolution-area-x-axis',
    tex: 'A=\\int_{a}^{b} y\\,dx',
    name: { en: 'Area between a curve and the x-axis', ru: 'Площадь между кривой и осью x (Area between a curve and the x-axis)' },
    meaning: {
      en: 'Area between the curve y = f(x), the x-axis and the lines x = a and x = b, when y is not negative on [a, b].',
      ru: 'Площадь между кривой y = f(x), осью x и прямыми x = a и x = b, если y не отрицательно на отрезке [a, b].',
    },
    when: {
      en: 'The region lies on one side of the x-axis and its bounds are x-values.',
      ru: 'Область лежит по одну сторону от оси x, а границы заданы значениями x.',
    },
    syllabus: '5.12',
    inBooklet: true,
    example: {
      en: 'For y = 4 - x^2 on [0, 2]: A = 16/3 = 5.33 to 3 significant figures.',
      ru: 'Для y = 4 - x^2 на отрезке [0, 2]: A = 16/3 = 5,33 с точностью до 3 значащих цифр.',
    },
  },
  {
    id: 'revolution-volume-x-axis',
    tex: 'V=\\pi\\int_{a}^{b} y^{2}\\,dx',
    name: { en: 'Volume of revolution about the x-axis', ru: 'Объём тела вращения вокруг оси x (Volume of revolution about the x-axis)' },
    meaning: {
      en: 'Volume of the solid formed when the region between y = f(x), the x-axis and the lines x = a and x = b is rotated through 360 degrees about the x-axis.',
      ru: 'Объём тела, которое образуется, когда область между кривой y = f(x), осью x и прямыми x = a и x = b поворачивается на 360 градусов вокруг оси x.',
    },
    when: {
      en: 'The axis of rotation is the x-axis, the curve is written as y in terms of x, and the bounds are x-values (disc method).',
      ru: 'Ось вращения — ось x, кривая записана как y через x, а границы заданы значениями x (метод дисков).',
    },
    syllabus: '5.12',
    inBooklet: true,
    example: {
      en: 'For y = 4 - x^2 on [0, 2]: V = 256 pi / 15 = 53.6 to 3 significant figures.',
      ru: 'Для y = 4 - x^2 на отрезке [0, 2]: V = 256π / 15 = 53,6 с точностью до 3 значащих цифр.',
    },
  },
  {
    id: 'revolution-volume-y-axis',
    tex: 'V=\\pi\\int_{c}^{d} x^{2}\\,dy',
    name: { en: 'Volume of revolution about the y-axis', ru: 'Объём тела вращения вокруг оси y (Volume of revolution about the y-axis)' },
    meaning: {
      en: 'Volume of the solid formed when the region between x = g(y), the y-axis and the lines y = c and y = d is rotated through 360 degrees about the y-axis.',
      ru: 'Объём тела, которое образуется, когда область между кривой x = g(y), осью y и прямыми y = c и y = d поворачивается на 360 градусов вокруг оси y.',
    },
    when: {
      en: 'The axis of rotation is the y-axis: write the curve as x in terms of y first, and use y-bounds.',
      ru: 'Ось вращения — ось y: сначала запишите кривую как x через y, а границы берите по y.',
    },
    syllabus: '5.12',
    inBooklet: true,
    example: {
      en: 'For x = sqrt(4 - y) on [0, 4]: V = 8 pi = 25.1 to 3 significant figures.',
      ru: 'Для x = √(4 − y) на отрезке [0, 4]: V = 8π = 25,1 с точностью до 3 значащих цифр.',
    },
  },
  {
    id: 'revolution-area-y-axis',
    tex: 'A=\\int_{c}^{d} x\\,dy',
    name: { en: 'Area between a curve and the y-axis', ru: 'Площадь между кривой и осью y (Area between a curve and the y-axis)' },
    meaning: {
      en: 'Area between the curve x = g(y), with x not negative, the y-axis and the lines y = c and y = d.',
      ru: 'Площадь между кривой x = g(y), при x не отрицательном, осью y и прямыми y = c и y = d.',
    },
    when: {
      en: 'The region lies on one side of the y-axis and its bounds are y-values.',
      ru: 'Область лежит по одну сторону от оси y, а границы заданы значениями y.',
    },
    syllabus: '5.12',
    inBooklet: true,
    example: {
      en: 'For x = sqrt(4 - y) on [0, 4]: A = 16/3 = 5.33 to 3 significant figures.',
      ru: 'Для x = √(4 − y) на отрезке [0, 4]: A = 16/3 = 5,33 с точностью до 3 значащих цифр.',
    },
  },
];
