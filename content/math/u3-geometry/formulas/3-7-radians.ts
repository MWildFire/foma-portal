import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'radian-degree-conversion',
    tex: '\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\dfrac{\\pi}{180}',
    name: { en: 'Degrees to radians', ru: 'Перевод градусов в радианы (Degrees to radians)' },
    meaning: {
      en: 'Multiply an angle in degrees by pi/180 to get radians. To go back, multiply radians by 180/pi.',
      ru: 'Чтобы перевести угол из градусов в радианы, умножьте его на π/180. Обратно: радианы умножьте на 180/π.',
    },
    when: {
      en: 'The angle is given in one unit and the formula needs the other, for example before using arc length or sector area.',
      ru: 'Угол дан в одних единицах, а формула требует других, например перед вычислением длины дуги или площади сектора.',
    },
    syllabus: '3.7',
    inBooklet: false,
    example: {
      en: '150 degrees = 150 × pi/180 = 5pi/6 = 2.618 radians (to 3 decimal places).',
      ru: '150 градусов = 150 × π/180 = 5π/6 = 2,618 радиана (с точностью до 3 знаков после запятой).',
    },
  },
  {
    id: 'radian-arc-length',
    tex: 's=r\\theta',
    name: { en: 'Arc length with the angle in radians', ru: 'Длина дуги при угле в радианах (Arc length with the angle in radians)' },
    meaning: {
      en: 's is the arc length, r the radius and theta the central angle in radians.',
      ru: 's — длина дуги, r — радиус, θ — центральный угол в радианах.',
    },
    when: {
      en: 'For a nonnegative swept angle in radians, s=rθ; for signed angular displacement the distance swept is r|θ|. An ordinary arc has a sweep no greater than one full turn.',
      ru: 'При неотрицательном угле поворота в радианах s=rθ; для ориентированного поворота пройденная длина равна r|θ|. Обычная дуга соответствует не более чем одному полному обороту.',
    },
    syllabus: '3.7',
    inBooklet: true,
    example: {
      en: 'For r = 12 cm and theta = pi/3: s = 12 × pi/3 = 4pi = 12.566 cm (to 3 decimal places).',
      ru: 'При r = 12 см и θ = π/3: s = 12 × π/3 = 4π = 12,566 см (с точностью до 3 знаков после запятой).',
    },
  },
  {
    id: 'radian-sector-area',
    tex: 'A=\\dfrac{1}{2}r^{2}\\theta',
    name: { en: 'Area of a sector with the angle in radians', ru: 'Площадь сектора при угле в радианах (Area of a sector with the angle in radians)' },
    meaning: {
      en: 'A is the area of the sector bounded by two radii and an arc, with theta in radians.',
      ru: 'A — площадь сектора, ограниченного двумя радиусами и дугой; θ задан в радианах.',
    },
    when: {
      en: 'For an ordinary sector use 0≤θ≤2π in radians. Convert degrees first; a signed negative angle cannot give a negative geometric area.',
      ru: 'Для обычного сектора бери 0≤θ≤2π в радианах. Сначала переведи градусы; отрицательный ориентированный угол не означает отрицательную геометрическую площадь.',
    },
    syllabus: '3.7',
    inBooklet: true,
    example: {
      en: 'For r = 12 cm and theta = pi/3: A = 1/2 × 144 × pi/3 = 24pi = 75.398 cm² (to 3 decimal places).',
      ru: 'При r = 12 см и θ = π/3: A = ½ × 144 × π/3 = 24π = 75,398 см² (с точностью до 3 знаков после запятой).',
    },
  },
];
