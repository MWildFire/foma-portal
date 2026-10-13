import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'triangle-sine-rule',
    tex: '\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}',
    name: { en: 'Sine rule', ru: 'Теорема синусов' },
    meaning: {
      en: 'In any triangle, each side divided by the sine of its opposite angle has the same value for all three sides.',
      ru: 'В любом треугольнике отношение каждой стороны к синусу противолежащего угла одно и то же для всех трёх сторон.',
    },
    when: {
      en: 'A side and its opposite angle are known, together with one more angle or side.',
      ru: 'Известны сторона и противолежащий ей угол, а также ещё один угол или сторона.',
    },
    syllabus: '3.2',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With p = 6, P = 35 and Q = 70 (degrees): q = 6 sin 70 / sin 35 = 9.83 to 3 significant figures.',
      ru: 'При p = 6, P = 35° и Q = 70°: q = 6 sin 70° / sin 35° = 9,83 (с точностью до 3 значащих цифр).',
    },
  },
  {
    id: 'triangle-cosine-rule',
    tex: 'a^{2}=b^{2}+c^{2}-2bc\\cos A,\\qquad \\cos A=\\dfrac{b^{2}+c^{2}-a^{2}}{2bc}',
    name: { en: 'Cosine rule', ru: 'Теорема косинусов' },
    meaning: {
      en: 'The square of side a equals the sum of the squares of sides b and c, minus twice their product times the cosine of the angle A between them.',
      ru: 'Квадрат стороны a равен сумме квадратов сторон b и c минус удвоенное произведение этих сторон на косинус угла A между ними.',
    },
    when: {
      en: 'Two sides and the included angle are known (find the third side), or all three sides are known (find an angle).',
      ru: 'Известны две стороны и угол между ними (находим третью сторону) или все три стороны (находим угол).',
    },
    syllabus: '3.2',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With b = 10, c = 6 and A = 55 degrees: a squared = 136 - 120 cos 55 = 67.17, so a = 8.20 (3 significant figures).',
      ru: 'При b = 10, c = 6 и A = 55°: a² = 136 - 120 cos 55° = 67,17, поэтому a = 8,20 (с точностью до 3 значащих цифр).',
    },
  },
  {
    id: 'triangle-area-sine',
    tex: '\\text{Area}=\\dfrac{1}{2}ab\\sin C',
    name: { en: 'Area of a triangle', ru: 'Площадь треугольника' },
    meaning: {
      en: 'a and b are two sides of the triangle, and C is the angle between them (the included angle).',
      ru: 'a и b — две стороны треугольника, C — угол между ними (включённый угол).',
    },
    when: {
      en: 'Two sides and the included angle are known, and the area is needed. No perpendicular height is required.',
      ru: 'Известны две стороны и угол между ними, нужна площадь. Высота не нужна.',
    },
    syllabus: '3.2',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'With a = 4, b = 7 and C = 50 degrees: area = 0.5 x 4 x 7 x sin 50 = 10.7 (1 decimal place).',
      ru: 'При a = 4, b = 7 и C = 50°: площадь = 0,5 × 4 × 7 × sin 50° = 10,7 (с одним знаком после запятой).',
    },
  },
  {
    id: 'soh-cah-toa-ratios',
    tex: '\\sin\\theta=\\dfrac{\\text{opp}}{\\text{hyp}},\\quad\\cos\\theta=\\dfrac{\\text{adj}}{\\text{hyp}},\\quad\\tan\\theta=\\dfrac{\\text{opp}}{\\text{adj}}',
    name: { en: 'SOH CAH TOA ratios', ru: 'Отношения SOH CAH TOA' },
    meaning: {
      en: 'The sine, cosine and tangent of an angle theta in a right-angled triangle, as ratios of the opposite side, the adjacent side and the hypotenuse.',
      ru: 'Синус, косинус и тангенс угла θ в прямоугольном треугольнике как отношения противолежащего катета, прилежащего катета и гипотенузы.',
    },
    when: {
      en: 'Right-angled triangles: finding a side from an angle and a side, or an angle from two sides.',
      ru: 'Прямоугольные треугольники: нахождение стороны по углу и стороне или угла по двум сторонам.',
    },
    syllabus: '3.2',
    inBooklet: false,
    example: {
      en: 'With hypotenuse 10 and angle 30 degrees: the opposite side is 10 sin 30 = 5.',
      ru: 'При гипотенузе 10 и угле 30°: противолежащий катет равен 10 sin 30° = 5.',
    },
  },
];
