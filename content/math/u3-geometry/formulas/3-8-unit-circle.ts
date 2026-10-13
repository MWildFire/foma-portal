import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'unit-circle-point',
    tex: '(\\cos\\theta,\\ \\sin\\theta)',
    name: { en: 'Point on the unit circle', ru: 'Точка на единичной окружности (Point on the unit circle)' },
    meaning: {
      en: 'The point where the ray at angle theta from the positive x-axis meets the unit circle has x-coordinate cos theta and y-coordinate sin theta.',
      ru: 'Точка пересечения луча под углом θ от положительной полуоси x с единичной окружностью имеет абсциссу cos θ и ординату sin θ.',
    },
    when: {
      en: 'Reading the cosine and sine of any angle, in any quadrant, from the unit circle.',
      ru: 'Чтение косинуса и синуса любого угла в любой четверти по единичной окружности.',
    },
    syllabus: '3.8',
    inBooklet: false,
    example: {
      en: 'For theta = 120 degrees the point is (-0.500, 0.866), to 3 decimal places.',
      ru: 'Для θ = 120° точка имеет координаты (-0,500; 0,866) с точностью до 3 знаков после запятой.',
    },
  },
  {
    id: 'pythagorean-identity',
    tex: '\\sin^{2}\\theta+\\cos^{2}\\theta=1',
    name: { en: 'Pythagorean identity', ru: 'Тождество sin²θ + cos²θ = 1 (Pythagorean identity)' },
    meaning: {
      en: 'For every angle theta, sin squared theta plus cos squared theta equals 1. It is the equation x² + y² = 1 of the unit circle.',
      ru: 'Для любого угла θ сумма квадрата синуса и квадрата косинуса равна 1. Это уравнение x² + y² = 1 единичной окружности.',
    },
    when: {
      en: 'Finding sin theta from cos theta, or the reverse, and checking values.',
      ru: 'Нахождение sin θ по cos θ (или наоборот) и проверка значений.',
    },
    syllabus: '3.8',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'If cos theta = 0.5, then sin squared theta = 1 - 0.25 = 0.75.',
      ru: 'Если cos θ = 0,5, то sin²θ = 1 - 0,25 = 0,75.',
    },
  },
  {
    id: 'tan-identity',
    tex: '\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}',
    name: { en: 'Tangent as sine over cosine', ru: 'Тангенс как отношение синуса к косинусу (Tangent as sine over cosine)' },
    meaning: {
      en: 'tan theta is sin theta divided by cos theta. It is undefined where cos theta = 0, that is at 90 and 270 degrees.',
      ru: 'tan θ равен sin θ, делённому на cos θ. Он не определён там, где cos θ = 0, то есть при 90° и 270°.',
    },
    when: {
      en: 'Finding tan theta from sin theta and cos theta, or checking a tangent value on the unit circle.',
      ru: 'Нахождение tan θ по sin θ и cos θ или проверка значения тангенса на единичной окружности.',
    },
    syllabus: '3.8',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For theta = 120 degrees: tan theta = 0.866 / (-0.500) = -1.732 (to 3 decimal places).',
      ru: 'Для θ = 120°: tan θ = 0,866 / (-0,500) = -1,732 (с точностью до 3 знаков после запятой).',
    },
  },
  {
    id: 'sine-rule-ambiguous-case',
    tex: '\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}',
    name: { en: 'Sine rule (ambiguous case)', ru: 'Теорема синусов (неоднозначный случай) (Sine rule (ambiguous case))' },
    meaning: {
      en: 'Each side divided by the sine of its opposite angle gives the same value. Solving for sin B can give two angles, B and 180 degrees minus B.',
      ru: 'Отношение каждой стороны к синусу противолежащего угла одинаково. При нахождении sin B получаются два угла: B и 180° - B.',
    },
    when: {
      en: 'Two sides and an angle not between them are known (SSA), so the other angle is found from its sine.',
      ru: 'Известны две стороны и угол, не заключённый между ними (SSA), и другой угол находят по его синусу.',
    },
    syllabus: '3.8',
    inBooklet: true, // not checked against the IB formula booklet
    example: {
      en: 'For a = 8, b = 10 and A = 40 degrees: sin B = 10 sin 40 / 8 = 0.803 (to 3 decimal places).',
      ru: 'При a = 8, b = 10 и A = 40°: sin B = 10 sin 40° / 8 = 0,803 (с точностью до 3 знаков после запятой).',
    },
  },
];
