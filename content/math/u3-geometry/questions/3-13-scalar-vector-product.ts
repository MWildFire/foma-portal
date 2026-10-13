import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-13-01',
    subject: 'math',
    topicIds: ['3-13-scalar-vector-product'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Vectors v = (2, -1, 3) and w = (1, 4, -2) are given. Find the angle between v and w, in degrees, correct to 1 decimal place.',
      ru: 'Даны векторы v = (2, −1, 3) и w = (1, 4, −2). Найдите угол между v и w в градусах с точностью до одного знака после запятой.',
    },
    markscheme: {
      en: 'M1: v · w = 2(1) + (-1)(4) + 3(-2) = -8. M1: |v| = sqrt(14) and |w| = sqrt(21), so cos θ = -8/sqrt(294). A1: θ = 117.8°.',
      ru: 'M1: v · w = 2(1) + (−1)(4) + 3(−2) = −8. M1: |v| = √14 и |w| = √21, поэтому cos θ = −8/√294. A1: θ = 117,8°.',
    },
    answer: '117.8',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-3-13-02',
    subject: 'math',
    topicIds: ['3-13-scalar-vector-product'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Line L1 has vector equation r = (1, 0, 2) + λ(1, 2, 2). Line L2 has vector equation r = (4, 1, -1) + μ(-2, 1, -2). Find the acute angle between L1 and L2, in degrees, correct to 1 decimal place.',
      ru: 'Прямая L1 задана векторным уравнением r = (1, 0, 2) + λ(1, 2, 2), а прямая L2 — уравнением r = (4, 1, −1) + μ(−2, 1, −2). Найдите острый угол между L1 и L2 в градусах с точностью до одного знака после запятой.',
    },
    markscheme: {
      en: 'M1: direction vectors b1 = (1, 2, 2) and b2 = (-2, 1, -2). M1: b1 · b2 = -4, and |b1| = |b2| = 3. R1: the acute angle uses the absolute value of the scalar product. A1: cos φ = 4/9, so φ = 63.6°.',
      ru: 'M1: направляющие векторы b1 = (1, 2, 2) и b2 = (−2, 1, −2). M1: b1 · b2 = −4, |b1| = |b2| = 3. R1: острый угол использует модуль скалярного произведения. A1: cos φ = 4/9, откуда φ = 63,6°.',
    },
    answer: '63.6',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-13-03',
    subject: 'math',
    topicIds: ['3-13-scalar-vector-product'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A section of a flat roof is modelled by the points O(0, 0, 0), A(2, 0, 2) and B(4, 8, 8), with distances in metres. The triangle OAB is one plane face of the roof.\n\n(a) Find the scalar product of OA and OB. [2]\n\n(b) Find the angle AOB, in degrees, correct to 1 decimal place. [3]\n\n(c) Find the vector product OA × OB. [3]\n\n(d) Hence find the area of triangle OAB. [3]\n\n(e) Find the acute angle between the line OA and the line AB, in degrees, correct to 1 decimal place. [3]',
      ru: 'Участок плоской крыши смоделирован точками O(0, 0, 0), A(2, 0, 2) и B(4, 8, 8); расстояния даны в метрах. Треугольник OAB — одна плоская грань крыши.\n\n(a) Найдите скалярное произведение векторов OA и OB. [2]\n\n(b) Найдите угол AOB в градусах с точностью до одного знака после запятой. [3]\n\n(c) Найдите векторное произведение OA × OB. [3]\n\n(d) Используя результат пункта (c), найдите площадь треугольника OAB. [3]\n\n(e) Найдите острый угол между прямой OA и прямой AB в градусах с точностью до одного знака после запятой. [3]',
    },
    markscheme: {
      en: '(a) M1: OA · OB = 2(4) + 0(8) + 2(8) = 24. A1: 24.\n(b) M1: |OA| = sqrt(8) and |OB| = sqrt(144) = 12, so cos θ = 24/(12 sqrt(8)). M1: cos θ = 1/sqrt(2). A1: θ = 45.0°.\n(c) M1: components (0 × 8 - 2 × 8, 2 × 4 - 2 × 8, 2 × 8 - 0 × 4). A1: (-16, -8, 16). R1: check (-16, -8, 16) · (2, 0, 2) = -32 + 32 = 0, so the result is perpendicular to OA.\n(d) M1: |OA × OB| = sqrt(256 + 64 + 256) = sqrt(576) = 24. M1: area = (1/2)(24). A1: 12 m².\n(e) M1: direction vectors OA = (2, 0, 2) and AB = (2, 8, 6), so OA · AB = 16. M1: cos φ = 16/(sqrt(8) sqrt(104)), and the scalar product is positive so the angle is acute. A1: φ = 56.3°.',
      ru: '(a) M1: OA · OB = 2(4) + 0(8) + 2(8) = 24. A1: 24.\n(b) M1: |OA| = √8 и |OB| = √144 = 12, поэтому cos θ = 24/(12√8). M1: cos θ = 1/√2. A1: θ = 45,0°.\n(c) M1: компоненты (0 × 8 − 2 × 8, 2 × 4 − 2 × 8, 2 × 8 − 0 × 4). A1: (−16; −8; 16). R1: проверка (−16; −8; 16) · (2; 0; 2) = −32 + 32 = 0, значит, результат перпендикулярен OA.\n(d) M1: |OA × OB| = √(256 + 64 + 256) = √576 = 24. M1: площадь = (1/2)(24). A1: 12 м².\n(e) M1: направляющие векторы OA = (2; 0; 2) и AB = (2; 8; 6), значит OA · AB = 16. M1: cos φ = 16/(√8 √104); скалярное произведение положительно, поэтому угол острый. A1: φ = 56,3°.',
    },
    answer: '24; 45.0; -16; -8; 16; 12; 56.3',
    origin: 'original',
    minutes: 14,
  },
];
