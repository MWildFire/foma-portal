import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'vector-length-3d',
    tex: '|\\mathbf{v}|=\\sqrt{v_1^{2}+v_2^{2}+v_3^{2}}',
    name: { en: 'Magnitude of a vector', ru: 'Длина (модуль) вектора' },
    meaning: {
      en: 'The length of v = v1 i + v2 j + v3 k. In two dimensions, omit the v3 term.',
      ru: 'Длина вектора v = v1 i + v2 j + v3 k. В двумерном случае слагаемое v3 опускается.',
    },
    when: {
      en: 'Finding the length of a vector, or the distance between two points.',
      ru: 'Поиск длины вектора или расстояния между двумя точками.',
    },
    syllabus: '3.10',
    inBooklet: false,
    example: {
      en: 'For AB = (4, 3, -6): |AB| = sqrt(16 + 9 + 36) = sqrt(61) = 7.810 to 3 decimal places.',
      ru: 'Для AB = (4, 3, -6): |AB| = sqrt(16 + 9 + 36) = sqrt(61) = 7,810 с точностью до 3 знаков.',
    },
  },
  {
    id: 'vector-ab-points',
    tex: '\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}',
    name: { en: 'Vector from A to B', ru: 'Вектор от A к B' },
    meaning: {
      en: 'The vector AB is the position vector of B minus the position vector of A.',
      ru: 'Вектор AB равен радиус-вектору точки B минус радиус-вектор точки A.',
    },
    when: {
      en: 'Finding the displacement between two points, or the distance between them.',
      ru: 'Поиск смещения между двумя точками или расстояния между ними.',
    },
    syllabus: '3.10',
    inBooklet: false,
    example: {
      en: 'For a = (1, -2, 4) and b = (5, 1, -2): AB = (4, 3, -6).',
      ru: 'Для a = (1, -2, 4) и b = (5, 1, -2): AB = (4, 3, -6).',
    },
  },
  {
    id: 'unit-vector-normalise',
    tex: '\\hat{\\mathbf{v}}=\\dfrac{\\mathbf{v}}{|\\mathbf{v}|}',
    name: { en: 'Unit vector in the direction of v', ru: 'Единичный вектор в направлении v' },
    meaning: {
      en: 'Dividing a non-zero vector by its magnitude gives a vector of length 1 in the same direction.',
      ru: 'Деление ненулевого вектора на его длину даёт вектор длины 1 того же направления.',
    },
    when: {
      en: 'Finding a direction, or rescaling a vector to a chosen length.',
      ru: 'Поиск направления или изменение длины вектора до нужной.',
    },
    syllabus: '3.10',
    inBooklet: false,
    example: {
      en: 'For AB = (4, 3, -6): the unit vector is (0.512, 0.384, -0.768) to 3 decimal places.',
      ru: 'Для AB = (4, 3, -6): единичный вектор равен (0,512; 0,384; -0,768) с точностью до 3 знаков.',
    },
  },
  {
    id: 'midpoint-position-vector',
    tex: '\\mathbf{m}=\\dfrac{\\mathbf{a}+\\mathbf{b}}{2}',
    name: { en: 'Position vector of a midpoint', ru: 'Радиус-вектор середины отрезка' },
    meaning: {
      en: 'The midpoint of AB has position vector equal to the average of the position vectors a and b.',
      ru: 'Радиус-вектор середины отрезка AB равен среднему арифметическому радиус-векторов a и b.',
    },
    when: {
      en: 'Finding the midpoint of a line segment in two or three dimensions.',
      ru: 'Поиск середины отрезка на плоскости или в пространстве.',
    },
    syllabus: '3.10',
    inBooklet: false,
    example: {
      en: 'For a = (2, -1, 3) and b = (5, 3, -2): m = (3.5, 1, 0.5).',
      ru: 'Для a = (2, -1, 3) и b = (5, 3, -2): m = (3,5; 1; 0,5).',
    },
  },
];
