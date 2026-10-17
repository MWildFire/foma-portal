import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-3-01',
    subject: 'math',
    topicIds: ['3-3-trig-applications'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A kite flies at the end of a straight string of length 50 m. The string is held at ground level and makes an angle of elevation of 35° with the horizontal. Find the height of the kite above the ground, giving your answer to 1 decimal place.',
      ru: 'Воздушный змей летает на конце прямой нити длиной 50 м. Нить закреплена на уровне земли и образует с горизонталью угол возвышения 35°. Найдите высоту змея над землёй, ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: 'M1: sin 35° = h / 50 (opposite over hypotenuse). M1: h = 50 sin 35°. A1: h = 28.7 m (1 decimal place).',
      ru: 'M1: sin 35° = h / 50 (противолежащий катет к гипотенузе). M1: h = 50 sin 35°. A1: h = 28,7 м (с одним знаком после запятой).',
    },
    answer: '28.7',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-3-02',
    subject: 'math',
    topicIds: ['3-3-trig-applications'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The top of a lighthouse is 30 m above sea level. From the top, the angle of depression of a boat is 12°. Calculate the horizontal distance from the foot of the lighthouse to the boat, giving your answer to 1 decimal place.',
      ru: 'Верхушка маяка находится на высоте 30 м над уровнем моря. С верхушки угол понижения лодки равен 12°. Вычислите горизонтальное расстояние от основания маяка до лодки, ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: 'R1: the angle of elevation from the boat to the top is also 12° (alternate angles). M1: tan 12° = 30 / d. A1: d = 30 / tan 12° = 141.14 m. A1: d = 141.1 m (1 decimal place).',
      ru: 'R1: угол возвышения от лодки до верхушки тоже равен 12° (накрест лежащие углы). M1: tan 12° = 30 / d. A1: d = 30 / tan 12° = 141,14 м. A1: d = 141,1 м (с одним знаком после запятой).',
    },
    answer: '141.1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-3-03',
    subject: 'math',
    topicIds: ['3-3-trig-applications'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'Two observation points A and B are on a straight, level shoreline, 500 m apart. A buoy C is in the sea. The angle CAB is 62° and the angle CBA is 48°. A vertical mast of height 60 m stands on the buoy at C. Treat A, B and C as points in one horizontal sea-level plane and neglect eye height.\n\n(a) Find the size of the angle ACB. [2]\n\n(b) Find the distance AC, giving your answer to 1 decimal place. [3]\n\n(c) Find the shortest distance from the buoy C to the shoreline, giving your answer to 1 decimal place. [3]\n\n(d) Find the angle of elevation of the top of the mast from A, giving your answer to 1 decimal place. [3]\n\n(e) Find the distance from the top of the mast to B, giving your answer to 1 decimal place. [3]',
      ru: 'Два пункта наблюдения A и B находятся на прямом ровном берегу на расстоянии 500 м друг от друга. Буй C находится в море. Угол CAB равен 62°, а угол CBA равен 48°. На буе в точке C стоит вертикальная мачта высотой 60 м. Считайте A, B и C точками одной горизонтальной плоскости уровня моря; высотой глаз пренебрегайте.\n\n(a) Найдите величину угла ACB. [2]\n\n(b) Найдите расстояние AC, ответ дайте с одним знаком после запятой. [3]\n\n(c) Найдите кратчайшее расстояние от буя C до берега, ответ дайте с одним знаком после запятой. [3]\n\n(d) Найдите угол возвышения верхушки мачты из точки A, ответ дайте с одним знаком после запятой. [3]\n\n(e) Найдите расстояние от верхушки мачты до точки B, ответ дайте с одним знаком после запятой. [3]',
    },
    markscheme: {
      en: '(a) M1: angles in a triangle sum to 180°. A1: angle ACB = 70°.\n(b) M1: sine rule, AC / sin 48° = 500 / sin 70°. M1: AC = 500 sin 48° / sin 70°. A1: AC = 395.4 m.\n(c) M1: the shortest distance is perpendicular to AB, so it is the side opposite A in a right-angled triangle with hypotenuse AC. M1: distance = AC sin 62°. A1: distance = 349.1 m.\n(d) M1: tan θ = 60 / AC. M1: θ = arctan(60 / 395.4). A1: θ = 8.6°.\n(e) M1: sine rule, BC = 500 sin 62° / sin 70° = 469.8 m. M1: distance² = BC² + 60², by Pythagoras. A1: distance = 473.6 m.',
      ru: '(a) M1: углы треугольника в сумме дают 180°. A1: угол ACB = 70°.\n(b) M1: теорема синусов, AC / sin 48° = 500 / sin 70°. M1: AC = 500 sin 48° / sin 70°. A1: AC = 395,4 м.\n(c) M1: кратчайшее расстояние перпендикулярно AB, поэтому это катет, противолежащий углу A, в прямоугольном треугольнике с гипотенузой AC. M1: расстояние = AC sin 62°. A1: расстояние = 349,1 м.\n(d) M1: tan θ = 60 / AC. M1: θ = arctan(60 / 395,4). A1: θ = 8,6°.\n(e) M1: теорема синусов, BC = 500 sin 62° / sin 70° = 469,8 м. M1: расстояние² = BC² + 60², по теореме Пифагора. A1: расстояние = 473,6 м.',
    },
    answer: '70; 395.4; 349.1; 8.6; 473.6',
    origin: 'original',
    minutes: 14,
  },
];
