import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'vector-line-form',
    tex: '\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{b},\\quad \\lambda\\in\\mathbb{R}',
    name: { en: 'Vector equation of a line', ru: 'Векторное уравнение прямой (Vector equation of a line)' },
    meaning: {
      en: 'For nonzero direction b, r is the position vector of any point on the line through the point with position vector a, parallel to b.',
      ru: 'При ненулевом направлении b, r — радиус-вектор любой точки прямой, проходящей через точку с вектором положения a параллельно b.',
    },
    when: {
      en: 'Writing down a line in two or three dimensions from one point and one direction.',
      ru: 'Запись прямой на плоскости или в пространстве по одной точке и одному направлению.',
    },
    syllabus: '3.11',
    inBooklet: true,
    example: {
      en: 'Through A(2, -1, 4) with direction (3, 4, -6): r = (2, -1, 4) + λ(3, 4, -6).',
      ru: 'Через точку A(2, -1, 4) с направлением (3, 4, -6): r = (2, -1, 4) + λ(3, 4, -6).',
    },
  },
  {
    id: 'vector-line-components',
    tex: 'x=a_1+\\lambda b_1,\\quad y=a_2+\\lambda b_2,\\quad z=a_3+\\lambda b_3',
    name: { en: 'Parametric equations of a line', ru: 'Параметрические уравнения прямой (Parametric equations of a line)' },
    meaning: {
      en: 'The vector equation written one component at a time. In two dimensions omit the z-equation.',
      ru: 'Векторное уравнение, записанное отдельно для каждой компоненты. На плоскости уравнение для z не пишется.',
    },
    when: {
      en: 'Checking whether a point lies on a line, or finding where a line meets a plane such as z = 0.',
      ru: 'Проверка, лежит ли точка на прямой, или поиск точки пересечения прямой с плоскостью, например z = 0.',
    },
    syllabus: '3.11',
    inBooklet: true,
  },
  {
    id: 'vector-line-two-points',
    tex: '\\mathbf{r}=\\overrightarrow{OA}+\\lambda\\overrightarrow{AB}',
    name: { en: 'Line through two points', ru: 'Прямая через две точки (Line through two points)' },
    meaning: {
      en: 'For distinct A and B, the line through A and B, with the direction AB = OB - OA. Points with 0 ≤ λ ≤ 1 lie on the segment AB.',
      ru: 'Для различных A и B прямая через A и B, направление AB = OB - OA. Точки с 0 ≤ λ ≤ 1 лежат на отрезке AB.',
    },
    when: {
      en: 'The line is given by two points rather than by a point and a direction. The booklet gives $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}$ (page 8); the two-point form is that formula with $\\mathbf{a} = \\overrightarrow{OA}$ and $\\mathbf{b} = \\overrightarrow{AB}$.',
      ru: 'Прямая задана двумя точками, а не точкой и направлением. В книжке есть $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}$ (стр. 8); запись через две точки получается при $\\mathbf{a} = \\overrightarrow{OA}$ и $\\mathbf{b} = \\overrightarrow{AB}$.',
    },
    syllabus: '3.11',
    inBooklet: false,
  },
];
