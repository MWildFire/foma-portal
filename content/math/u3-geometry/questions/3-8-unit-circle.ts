import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-8-01',
    subject: 'math',
    topicIds: ['3-8-unit-circle'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'Given that $\\cos\\theta = -0.6$ and $90^\\circ < \\theta < 180^\\circ$, find the value of $\\sin\\theta$ and the value of $\\tan\\theta$. Give each answer correct to 3 significant figures.',
      ru: 'Дано, что $\\cos\\theta = -0{,}6$ и $90^\\circ < \\theta < 180^\\circ$. Найдите $\\sin\\theta$ и $\\tan\\theta$. Каждый ответ дайте с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: sin²θ = 1 − cos²θ = 1 − 0.36 = 0.64. A1: sin θ = 0.800. R1: θ is in the second quadrant, where sine is positive, so sin θ = +0.8. M1: tan θ = sin θ / cos θ. A1: tan θ = 0.8 / (-0.6) = -1.33.',
      ru: 'M1: sin²θ = 1 − cos²θ = 1 − 0,36 = 0,64. A1: sin θ = 0,800. R1: θ лежит во второй четверти, где синус положителен, поэтому sin θ = +0,8. M1: tan θ = sin θ / cos θ. A1: tan θ = 0,8 / (-0,6) = -1,33.',
    },
    answer: '0.800; -1.33',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-3-8-02',
    subject: 'math',
    topicIds: ['3-8-unit-circle'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Find all the values of $x$ in the interval $0 \\le x \\le 2\\pi$ for which $\\cos x = -0.4$. Give each answer correct to 3 decimal places.',
      ru: 'Найдите все значения $x$ на промежутке $0 \\le x \\le 2\\pi$, при которых $\\cos x = -0{,}4$. Каждый ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: cos x is negative, so the solutions lie in the second and third quadrants. A1: x = 1.982 (second quadrant). A1: x = 2π − 1.982 = 4.301 (third quadrant).',
      ru: 'M1: cos x отрицателен, значит решения лежат во второй и третьей четвертях. A1: x = 1,982 (вторая четверть). A1: x = 2π − 1,982 = 4,301 (третья четверть).',
    },
    answer: '1.982; 4.301',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-8-03',
    subject: 'math',
    topicIds: ['3-8-unit-circle'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'In triangle ABC, BC = 7 cm, AC = 9 cm and angle BAC = 45°.\n\n(a) Find the value of $\\sin B$, correct to 3 decimal places. [2]\n\n(b) Find the two possible values of angle B, correct to 1 decimal place. [3]\n\n(c) Hence find the two possible values of angle C, correct to 1 decimal place. [3]\n\n(d) Find the area of triangle ABC for each of the two possible values of angle C, correct to 1 decimal place. [3]\n\n(e) Explain why there are two different triangles that satisfy these conditions. [3]',
      ru: 'В треугольнике ABC сторона BC = 7 см, сторона AC = 9 см, угол BAC = 45°.\n\n(a) Найдите $\\sin B$ с точностью до 3 знаков после запятой. [2]\n\n(b) Найдите два возможных значения угла B с точностью до 0,1. [3]\n\n(c) Используя результат (b), найдите два возможных значения угла C с точностью до 0,1. [3]\n\n(d) Найдите площадь треугольника ABC для каждого из двух возможных значений угла C с точностью до 0,1 см². [3]\n\n(e) Объясните, почему существуют два различных треугольника, удовлетворяющих этим условиям. [3]',
    },
    markscheme: {
      en: '(a) M1: sin B / 9 = sin 45° / 7. A1: sin B = 0.909.\n(b) M1: B = arcsin(0.909...). A1: B = 65.4°. A1: the second value is B = 180° − 65.4° = 114.6°.\n(c) M1: C = 180° − 45° − B. A1: C = 69.6°. A1: C = 20.4°.\n(d) M1: area = ½ × 7 × 9 × sin C. A1: area = 29.5 cm². A1: area = 11.0 cm².\n(e) R1: sin B = sin(180° − B), so B = 65.4° and B = 114.6° both satisfy the sine rule. R1: both give valid triangles, because 45° + 65.4° and 45° + 114.6° are both less than 180°. R1: so there are two different triangles, with different angles C and areas.',
      ru: '(a) M1: sin B / 9 = sin 45° / 7. A1: sin B = 0,909.\n(b) M1: B = arcsin(0,909...). A1: B = 65,4°. A1: второе значение B = 180° − 65,4° = 114,6°.\n(c) M1: C = 180° − 45° − B. A1: C = 69,6°. A1: C = 20,4°.\n(d) M1: площадь = ½ × 7 × 9 × sin C. A1: площадь = 29,5 см². A1: площадь = 11,0 см².\n(e) R1: sin B = sin(180° − B), поэтому B = 65,4° и B = 114,6° оба удовлетворяют теореме синусов. R1: оба дают настоящие треугольники, так как 45° + 65,4° и 45° + 114,6° меньше 180°. R1: значит, треугольников два, с разными углами C и площадями.',
    },
    answer: '0.909; 65.4; 114.6; 69.6; 20.4; 29.5; 11.0',
    origin: 'original',
    minutes: 14,
  },
];
