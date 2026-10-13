import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'scalar-product-angle',
    tex: '\\mathbf{v}\\cdot\\mathbf{w}=|\\mathbf{v}|\\,|\\mathbf{w}|\\cos\\theta',
    name: { en: 'Scalar product and the angle between vectors', ru: 'Скалярное произведение и угол между векторами' },
    meaning: {
      en: 'The scalar product of v and w equals the product of their magnitudes and the cosine of the angle between them.',
      ru: 'Скалярное произведение v и w равно произведению их модулей на косинус угла между ними.',
    },
    when: {
      en: 'Finding the angle between two vectors, or testing whether they are perpendicular.',
      ru: 'Нахождение угла между двумя векторами или проверка их перпендикулярности.',
    },
    syllabus: '3.13',
    inBooklet: true, // not checked against the IB formula booklet
  },
  {
    id: 'scalar-product-components',
    tex: '\\mathbf{v}\\cdot\\mathbf{w}=v_1w_1+v_2w_2+v_3w_3',
    name: { en: 'Scalar product in components', ru: 'Скалярное произведение в координатах' },
    meaning: {
      en: 'Multiply the matching components and add the results. On the plane use only the first two components.',
      ru: 'Перемножьте соответствующие компоненты и сложите результаты. На плоскости используются только первые две компоненты.',
    },
    when: {
      en: 'Calculating a scalar product when the vectors are given by their components.',
      ru: 'Вычисление скалярного произведения, если векторы заданы своими компонентами.',
    },
    syllabus: '3.13',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For (3, 0, 4) and (1, 2, 2): 3(1) + 0(2) + 4(2) = 11.',
      ru: 'Для (3, 0, 4) и (1, 2, 2): 3(1) + 0(2) + 4(2) = 11.',
    },
  },
  {
    id: 'vector-product-magnitude',
    tex: '|\\mathbf{v}\\times\\mathbf{w}|=|\\mathbf{v}|\\,|\\mathbf{w}|\\sin\\theta',
    name: { en: 'Magnitude of the vector product', ru: 'Длина векторного произведения' },
    meaning: {
      en: 'The magnitude of v × w is the area of the parallelogram spanned by v and w. The triangle with those sides has half this area.',
      ru: 'Длина v × w равна площади параллелограмма, построенного на v и w. Треугольник с этими сторонами имеет половину этой площади.',
    },
    when: {
      en: 'Finding the area of a parallelogram or triangle defined by two vectors from a common point.',
      ru: 'Нахождение площади параллелограмма или треугольника, построенного на двух векторах из общей точки.',
    },
    syllabus: '3.13',
    inBooklet: false,
  },
  {
    id: 'vector-product-components',
    tex: '\\mathbf{v}\\times\\mathbf{w}=(v_2w_3-v_3w_2,\\;v_3w_1-v_1w_3,\\;v_1w_2-v_2w_1)',
    name: { en: 'Vector product in components', ru: 'Векторное произведение в координатах' },
    meaning: {
      en: 'Each component is a difference of two products of components of v and w. The result is perpendicular to both v and w.',
      ru: 'Каждая компонента — разность двух произведений компонент v и w. Результат перпендикулярен и v, и w.',
    },
    when: {
      en: 'Calculating the vector product of two vectors given by their components.',
      ru: 'Вычисление векторного произведения двух векторов, заданных компонентами.',
    },
    syllabus: '3.13',
    inBooklet: false,
    example: {
      en: 'For (3, 0, 4) and (1, 2, 2): (-8, -2, 6).',
      ru: 'Для (3, 0, 4) и (1, 2, 2): (-8, -2, 6).',
    },
  },
];
