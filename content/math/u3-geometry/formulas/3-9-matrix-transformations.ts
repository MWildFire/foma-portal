import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'transform-image-point',
    tex: '\\begin{pmatrix}x^{\\prime}\\\\y^{\\prime}\\end{pmatrix}=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}',
    name: { en: 'Image of a point under a matrix', ru: 'Образ точки при преобразовании матрицей (Image of a point under a matrix)' },
    meaning: {
      en: 'The image (x′, y′) of the point (x, y) under the transformation with matrix M = [[a, b], [c, d]].',
      ru: 'Образ (x′, y′) точки (x, y) при преобразовании с матрицей M = [[a, b], [c, d]].',
    },
    when: {
      en: 'Finding where a point or a shape goes under a 2 × 2 transformation about the origin.',
      ru: 'Поиск образа точки или фигуры при преобразовании 2 × 2 относительно начала координат.',
    },
    syllabus: '3.9',
    inBooklet: false,
    example: {
      en: 'With M = [[2, -1], [1, 1]] and (x, y) = (1, 2): x′ = 2(1) - 1(2) = 0 and y′ = 1(1) + 1(2) = 3, so the image is (0, 3).',
      ru: 'При M = [[2, -1], [1, 1]] и (x, y) = (1, 2): x′ = 2(1) - 1(2) = 0 и y′ = 1(1) + 1(2) = 3, образ равен (0, 3).',
    },
  },
  {
    id: 'transform-det-2x2',
    tex: '\\det\\mathbf{M}=ad-bc',
    name: { en: 'Determinant of a 2 × 2 matrix', ru: 'Определитель матрицы 2 × 2 (Determinant of a 2 × 2 matrix)' },
    meaning: {
      en: 'For M = [[a, b], [c, d]], the area scale factor of the transformation with its sign. The sign shows whether orientation is kept.',
      ru: 'Для M = [[a, b], [c, d]] — коэффициент изменения площади с учётом знака. Знак показывает, сохраняется ли ориентация.',
    },
    when: {
      en: 'Finding the area scale factor, or checking whether the matrix can be inverted (det M is not 0).',
      ru: 'Поиск коэффициента изменения площади или проверка, обратима ли матрица (det M не равен 0).',
    },
    syllabus: '3.9',
    inBooklet: false,
    example: {
      en: 'For M = [[2, -1], [1, 1]]: det M = 2(1) - (-1)(1) = 3.',
      ru: 'Для M = [[2, -1], [1, 1]]: det M = 2(1) - (-1)(1) = 3.',
    },
  },
  {
    id: 'transform-area-scale',
    tex: 'A^{\\prime}=|\\det\\mathbf{M}|\\,A',
    name: { en: 'Area of the image under a transformation', ru: 'Площадь образа при преобразовании (Area of the image under a transformation)' },
    meaning: {
      en: 'A′ is the area of the image of a shape of area A under the transformation with matrix M.',
      ru: 'A′ — площадь образа фигуры площади A при преобразовании с матрицей M.',
    },
    when: {
      en: 'Any region under a 2 × 2 transformation, not only a square.',
      ru: 'Любая область при преобразовании 2 × 2, не только квадрат.',
    },
    syllabus: '3.9',
    inBooklet: false,
    example: {
      en: 'With det M = 3, a triangle of area 1 has an image of area 3.',
      ru: 'При det M = 3 треугольник площади 1 переходит в образ площади 3.',
    },
  },
  {
    id: 'transform-rotation-matrix',
    tex: '\\mathbf{R}_{\\theta}=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}',
    name: { en: 'Anticlockwise rotation about the origin', ru: 'Поворот против часовой стрелки вокруг начала координат (Anticlockwise rotation about the origin)' },
    meaning: {
      en: 'Rotates every point anticlockwise through the angle θ about the origin. Its determinant is 1.',
      ru: 'Поворачивает каждую точку против часовой стрелки на угол θ вокруг начала координат. Определитель равен 1.',
    },
    when: {
      en: 'Rotations about the origin. Use the angle unit (degrees or radians) that matches the question.',
      ru: 'Повороты вокруг начала координат. Используйте единицы угла (градусы или радианы), как в условии.',
    },
    syllabus: '3.9',
    inBooklet: false,
  },
];
