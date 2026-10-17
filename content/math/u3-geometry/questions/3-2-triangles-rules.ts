import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-2-01',
    subject: 'math',
    topicIds: ['3-2-triangles-rules'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'In triangle ABC, AB = 6 cm, AC = 10 cm and angle BAC = 55°. Calculate the length of BC, giving your answer correct to 3 significant figures.',
      ru: 'В треугольнике ABC известно, что AB = 6 см, AC = 10 см и угол BAC = 55°. Вычислите длину BC, ответ дайте с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: cosine rule, BC^2 = 6^2 + 10^2 - 2 × 6 × 10 cos 55°. M1: BC^2 = 67.17, then take the square root. A1: BC = 8.20 cm (3 significant figures).',
      ru: 'M1: теорема косинусов, BC² = 6² + 10² − 2 × 6 × 10 cos 55°. M1: BC² = 67,17, затем извлекаем квадратный корень. A1: BC = 8,20 см (с точностью до 3 значащих цифр).',
    },
    answer: '8.20',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-2-02',
    subject: 'math',
    topicIds: ['3-2-triangles-rules'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A triangle PQR has PQ = 7 cm, QR = 9 cm and PR = 11 cm. Find the size of angle PQR, giving your answer to 1 decimal place.',
      ru: 'В треугольнике PQR стороны PQ = 7 см, QR = 9 см и PR = 11 см. Найдите величину угла PQR, ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: 'M1: cosine rule for the angle at Q, cos PQR = (PQ^2 + QR^2 - PR^2) / (2 × PQ × QR). A1: cos PQR = 9/126 = 0.0714. A1: angle PQR = 85.9°.',
      ru: 'M1: теорема косинусов для угла при Q, cos PQR = (PQ² + QR² − PR²) / (2 × PQ × QR). A1: cos PQR = 9/126 = 0,0714. A1: угол PQR = 85,9°.',
    },
    answer: '85.9',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-2-03',
    subject: 'math',
    topicIds: ['3-2-triangles-rules'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A triangular plot of land is ABC, with AB = 120 m, AC = 150 m and angle BAC = 65°. A straight path runs from A to the side BC, meeting BC at right angles at the point D.\n\n(a) Find the length of BC, giving your answer to 3 significant figures. [3]\n\n(b) Find the area of the plot, giving your answer to the nearest square metre. [2]\n\n(c) Find the size of angle ABC, giving your answer to 1 decimal place. [3]\n\n(d) Find the perimeter of the plot, giving your answer to the nearest metre. [2]\n\n(e) Find the length of the path AD, giving your answer to 1 decimal place. [4]',
      ru: 'Треугольный участок земли обозначен ABC, при этом AB = 120 м, AC = 150 м и угол BAC = 65°. Прямая дорожка идёт из A к стороне BC и пересекает её под прямым углом в точке D.\n\n(a) Найдите длину BC, ответ дайте с точностью до 3 значащих цифр. [3]\n\n(b) Найдите площадь участка, ответ дайте с точностью до квадратного метра. [2]\n\n(c) Найдите величину угла ABC, ответ дайте с одним знаком после запятой. [3]\n\n(d) Найдите периметр участка, ответ дайте с точностью до метра. [2]\n\n(e) Найдите длину дорожки AD, ответ дайте с одним знаком после запятой. [4]',
    },
    markscheme: {
      en: '(a) M1: cosine rule, BC^2 = 120^2 + 150^2 - 2 × 120 × 150 cos 65°. M1: BC^2 = 21685.7. A1: BC = 147 m (3 significant figures).\n(b) M1: area = (1/2) × 120 × 150 × sin 65°. A1: area = 8157 m² (nearest square metre).\n(c) M1: cosine rule, cos ABC = (120^2 + BC^2 - 150^2) / (2 × 120 × BC). M1: use the unrounded BC from(a), approximately147.26. A1: angle ABC = 67.4°.\n(d) M1: perimeter = 120 + 150 + BC. A1: perimeter = 417 m (nearest metre).\n(e) M1: area = (1/2) × BC × AD, so AD = 2 × area / BC (or AD = AB sin ABC). M1: substitute the unrounded values. A1: AD = 110.8 m. R1: angles ABC and ACB are both acute, so D lies on BC.',
      ru: '(a) M1: теорема косинусов, BC² = 120² + 150² − 2 × 120 × 150 cos 65°. M1: BC² = 21685,7. A1: BC = 147 м (с точностью до 3 значащих цифр).\n(b) M1: площадь = (1/2) × 120 × 150 × sin 65°. A1: площадь = 8157 м² (с точностью до квадратного метра).\n(c) M1: теорема косинусов, cos ABC = (120² + BC² − 150²) / (2 × 120 × BC). M1: используем неокруглённое BC из(a), приближённо147,26. A1: угол ABC = 67,4°.\n(d) M1: периметр = 120 + 150 + BC. A1: периметр = 417 м (с точностью до метра).\n(e) M1: площадь = (1/2) × BC × AD, поэтому AD = 2 × площадь / BC (или AD = AB sin ABC). M1: подставляем неокруглённые значения. A1: AD = 110,8 м. R1: углы ABC и ACB острые, поэтому D лежит на BC.',
    },
    answer: '147; 8157; 67.4; 417; 110.8',
    origin: 'original',
    minutes: 14,
  },
];
