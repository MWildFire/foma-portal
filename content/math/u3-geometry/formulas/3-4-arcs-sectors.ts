import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'arc-length-degrees',
    tex: 'l=\\dfrac{\\theta}{360}\\times 2\\pi r',
    name: { en: 'Arc length (angle in degrees)', ru: 'Длина дуги (угол в градусах)' },
    meaning: {
      en: 'l is the arc length, r the radius and theta the central angle in degrees.',
      ru: 'l — длина дуги, r — радиус, θ — центральный угол в градусах.',
    },
    when: {
      en: 'The central angle is given in degrees.',
      ru: 'Центральный угол задан в градусах.',
    },
    syllabus: '3.4',
    inBooklet: false,
    example: {
      en: 'r = 6 cm, theta = 50 degrees: l = (50/360) × 2π × 6 = 5.24 cm (3 s.f.)',
      ru: 'r = 6 см, θ = 50 градусов: l = (50/360) × 2π × 6 = 5,24 см (3 значащие цифры)',
    },
  },
  {
    id: 'sector-area-degrees',
    tex: 'A=\\dfrac{\\theta}{360}\\times \\pi r^{2}',
    name: { en: 'Area of a sector (angle in degrees)', ru: 'Площадь сектора (угол в градусах)' },
    meaning: {
      en: 'A is the area of the sector, r the radius and theta the central angle in degrees.',
      ru: 'A — площадь сектора, r — радиус, θ — центральный угол в градусах.',
    },
    when: {
      en: 'The central angle is given in degrees.',
      ru: 'Центральный угол задан в градусах.',
    },
    syllabus: '3.4',
    inBooklet: false,
    example: {
      en: 'r = 6 cm, theta = 50 degrees: A = (50/360) × π × 6^2 = 15.7 cm^2 (3 s.f.)',
      ru: 'r = 6 см, θ = 50 градусов: A = (50/360) × π × 6^2 = 15,7 см^2 (3 значащие цифры)',
    },
  },
  {
    id: 'arc-length-radians',
    tex: 'l=r\\theta',
    name: { en: 'Arc length (angle in radians)', ru: 'Длина дуги (угол в радианах)' },
    meaning: {
      en: 'l is the arc length, r the radius and theta the central angle in radians.',
      ru: 'l — длина дуги, r — радиус, θ — центральный угол в радианах.',
    },
    when: {
      en: 'The central angle is given in radians, as in the formula booklet. Radians are the subject of topic 3.7.',
      ru: 'Центральный угол задан в радианах, как в сборнике формул IB. Радианы изучают в теме 3.7.',
    },
    syllabus: '3.4',
    inBooklet: true,
    example: {
      en: 'r = 6 cm, theta = 5π/18 (50 degrees): l = 6 × 5π/18 = 5.24 cm (3 s.f.)',
      ru: 'r = 6 см, θ = 5π/18 (50 градусов): l = 6 × 5π/18 = 5,24 см (3 значащие цифры)',
    },
  },
  {
    id: 'sector-area-radians',
    tex: 'A=\\tfrac{1}{2}r^{2}\\theta',
    name: { en: 'Area of a sector (angle in radians)', ru: 'Площадь сектора (угол в радианах)' },
    meaning: {
      en: 'A is the area of the sector, r the radius and theta the central angle in radians.',
      ru: 'A — площадь сектора, r — радиус, θ — центральный угол в радианах.',
    },
    when: {
      en: 'The central angle is given in radians, as in the formula booklet.',
      ru: 'Центральный угол задан в радианах, как в сборнике формул IB.',
    },
    syllabus: '3.4',
    inBooklet: true,
    example: {
      en: 'r = 6 cm, theta = 5π/18: A = (1/2) × 6^2 × 5π/18 = 15.7 cm^2 (3 s.f.)',
      ru: 'r = 6 см, θ = 5π/18: A = (1/2) × 6^2 × 5π/18 = 15,7 см^2 (3 значащие цифры)',
    },
  },
];
