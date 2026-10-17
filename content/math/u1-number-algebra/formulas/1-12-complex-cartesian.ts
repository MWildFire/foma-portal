import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'complex-division',
    tex: '\\dfrac{a+bi}{c+di}=\\dfrac{(a+bi)(c-di)}{c^{2}+d^{2}},\\quad c^{2}+d^{2}>0',
    name: { en: 'Division of complex numbers', ru: 'Деление комплексных чисел (Division of complex numbers)' },
    meaning: {
      en: 'Divides by multiplying the top and the bottom by the conjugate of the denominator, so that the denominator becomes real.',
      ru: 'Деление выполняется умножением числителя и знаменателя на сопряжённое число знаменателя, поэтому знаменатель становится действительным.',
    },
    when: {
      en: 'Finding a quotient in Cartesian form by hand.',
      ru: 'Нахождение частного в декартовой форме вручную.',
    },
    syllabus: '1.12',
    inBooklet: false,
    example: {
      en: 'With z = 2 + 3i and w = 1 - 4i: z/w = (-10 + 11i)/17 = -0.588 + 0.647i (to 3 decimal places).',
      ru: 'При z = 2 + 3i и w = 1 - 4i: z/w = (-10 + 11i)/17 = -0,588 + 0,647i (с точностью до 3 знаков).',
    },
  },
  {
    id: 'complex-modulus-formula',
    tex: '|z|=\\sqrt{a^{2}+b^{2}},\\quad z=a+bi',
    name: { en: 'Modulus of a complex number', ru: 'Модуль комплексного числа (Modulus of a complex number)' },
    meaning: {
      en: 'The distance from the origin to the point (a, b) on the Argand diagram.',
      ru: 'Расстояние от начала координат до точки (a, b) на диаграмме Аргана.',
    },
    when: {
      en: 'Finding the size of z, for example in the modulus part of a question.',
      ru: 'Нахождение размера z, например при вычислении модуля.',
    },
    syllabus: '1.12',
    inBooklet: false,
    example: {
      en: 'For z = 2 + 3i: |z| = sqrt(2^2 + 3^2) = sqrt(13) = 3.61 (to 3 significant figures).',
      ru: 'Для z = 2 + 3i: |z| = sqrt(2^2 + 3^2) = sqrt(13) = 3,61 (с точностью до 3 значащих цифр).',
    },
  },
  {
    id: 'complex-quadratic-roots',
    tex: 'z=\\dfrac{-b\\pm i\\sqrt{4ac-b^{2}}}{2a}',
    name: { en: 'Complex roots of a quadratic', ru: 'Комплексные корни квадратного уравнения (Complex roots of a quadratic)' },
    meaning: {
      en: 'The two roots of az^2 + bz + c = 0 when the discriminant b^2 - 4ac is negative. They are complex conjugates of each other.',
      ru: 'Два корня уравнения az^2 + bz + c = 0, когда дискриминант b^2 - 4ac отрицателен. Они являются сопряжёнными комплексными числами.',
    },
    when: {
      en: 'A real quadratic with no real roots, such as z^2 - 4z + 13 = 0. The booklet has the quadratic formula (page 2) and the discriminant $\\Delta = b^{2} - 4ac$ (page 4); the complex form also needs $\\sqrt{-k} = i\\sqrt{k}$.',
      ru: 'Действительное квадратное уравнение без действительных корней, например z^2 - 4z + 13 = 0. В книжке есть формула корней (стр. 2) и дискриминант $\\Delta = b^{2} - 4ac$ (стр. 4); комплексный вид также требует $\\sqrt{-k} = i\\sqrt{k}$.',
    },
    syllabus: '1.12',
    inBooklet: false,
    example: {
      en: 'For z^2 - 4z + 13 = 0: the discriminant is -36, so z = 2 + 3i or z = 2 - 3i.',
      ru: 'Для z^2 - 4z + 13 = 0: дискриминант равен -36, поэтому z = 2 + 3i или z = 2 - 3i.',
    },
  },
];
