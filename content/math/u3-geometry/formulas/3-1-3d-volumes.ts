import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'distance-3d-points',
    tex: 'AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}',
    name: { en: 'Distance between two points in 3D', ru: 'Расстояние между двумя точками в 3D (Distance between two points in 3D)' },
    meaning: {
      en: 'The length of the segment AB, where A has coordinates (x1, y1, z1) and B has coordinates (x2, y2, z2).',
      ru: 'Длина отрезка AB, где A имеет координаты (x1, y1, z1), а B имеет координаты (x2, y2, z2).',
    },
    when: {
      en: 'Two positions are given by coordinates in a three-dimensional model.',
      ru: 'Два положения заданы координатами в трёхмерной модели.',
    },
    syllabus: '3.1',
    inBooklet: false,
    example: {
      en: 'A(2, -1, 5) and B(4, 1, 8): AB squared = 4 + 4 + 9 = 17, so AB = 4.12 (3 significant figures).',
      ru: 'A(2, -1, 5) и B(4, 1, 8): AB² = 4 + 4 + 9 = 17, поэтому AB = 4,12 (с точностью до 3 значащих цифр).',
    },
  },
  {
    id: 'pyramid-volume',
    tex: 'V=\\dfrac{1}{3}Ah',
    name: { en: 'Volume of a pyramid', ru: 'Объём пирамиды (Volume of a pyramid)' },
    meaning: {
      en: 'A is the base area and h is the perpendicular height from the apex to the base.',
      ru: 'A — площадь основания, h — перпендикулярная высота от вершины до основания.',
    },
    when: {
      en: 'Any pyramid. Use the perpendicular height, not the slant height of a face.',
      ru: 'Любая пирамида. Берите перпендикулярную высоту, а не апофему грани.',
    },
    syllabus: '3.1',
    inBooklet: false,
    example: {
      en: 'Square base of side 6 and height 4: V = (1/3) x 36 x 4 = 48.',
      ru: 'Квадратное основание со стороной 6 и высота 4: V = (1/3) × 36 × 4 = 48.',
    },
  },
  {
    id: 'cone-volume',
    tex: 'V=\\dfrac{1}{3}\\pi r^{2}h',
    name: { en: 'Volume of a cone', ru: 'Объём конуса (Volume of a cone)' },
    meaning: {
      en: 'r is the base radius and h is the perpendicular height of the cone.',
      ru: 'r — радиус основания, h — перпендикулярная высота конуса.',
    },
    when: {
      en: 'Right circular cones, including the cone part of a composite solid.',
      ru: 'Прямые круговые конусы, в том числе конусная часть составного тела.',
    },
    syllabus: '3.1',
    inBooklet: false,
    example: {
      en: 'r = 6 and h = 8: V = (1/3) pi x 36 x 8 = 96 pi.',
      ru: 'r = 6 и h = 8: V = (1/3)π × 36 × 8 = 96π.',
    },
  },
  {
    id: 'sphere-volume',
    tex: 'V=\\dfrac{4}{3}\\pi r^{3}',
    name: { en: 'Volume of a sphere', ru: 'Объём шара (Volume of a sphere)' },
    meaning: {
      en: 'r is the radius. The surface area of the same sphere is 4 pi r^2.',
      ru: 'r — радиус шара. Площадь поверхности того же шара равна 4πr².',
    },
    when: {
      en: 'Solid spheres. The volume of a hemisphere is half of this value.',
      ru: 'Шары. Объём полушара равен половине этого значения.',
    },
    syllabus: '3.1',
    inBooklet: false,
    example: {
      en: 'r = 3: V = (4/3) pi x 27 = 36 pi.',
      ru: 'Радиус r = 3: V = (4/3)π × 27 = 36π.',
    },
  },
];
