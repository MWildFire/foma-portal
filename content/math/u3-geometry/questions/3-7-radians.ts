import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-7-01',
    subject: 'math',
    topicIds: ['3-7-radians'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A sector of a circle has radius 6.5 cm and central angle 2.4 radians. Find the area of the sector. Give your answer to 3 significant figures.',
      ru: 'Сектор круга имеет радиус 6,5 см и центральный угол 2,4 радиана. Найдите площадь сектора. Ответ дайте с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: area formula A = ½r²θ. A1: A = ½ × 6.5² × 2.4 (substitution). A1: A = 50.7 cm² (3 significant figures).',
      ru: 'M1: формула площади A = ½r²θ. A1: A = ½ × 6,5² × 2,4 (подстановка). A1: A = 50,7 см² (3 значащие цифры).',
    },
    answer: '50.7',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-7-02',
    subject: 'math',
    topicIds: ['3-7-radians'],
    paper: 'P1',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'An angle is 1.4 radians. Calculate the size of this angle in degrees. Give your answer correct to 1 decimal place.',
      ru: 'Угол равен 1,4 радиана. Вычислите его величину в градусах. Ответ дайте с точностью до 0,1.',
    },
    markscheme: {
      en: 'M1: θ = 1.4 × 180/π. A1: θ = 80.2 degrees (to 1 decimal place).',
      ru: 'M1: θ = 1,4 × 180/π. A1: θ = 80,2° (с точностью до 0,1).',
    },
    answer: '80.2',
    origin: 'original',
    minutes: 2,
  },
  {
    id: 'q-3-7-03',
    subject: 'math',
    topicIds: ['3-7-radians'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A circular lawn has centre O and radius 6 m. A sprinkler at O waters the sector OAB, where angle AOB = 1.2 radians.\n\n(a) Find the length of the arc AB. Give your answer correct to 3 significant figures. [2]\n\n(b) Find the area of the sector OAB. Give your answer correct to 3 significant figures. [3]\n\n(c) A second lawn has a sector with the same angle, 1.2 radians, and an area of 30 m². Find the radius of this lawn. Give your answer correct to 3 significant figures. [4]\n\n(d) A third sprinkler waters a sector OEF of the 6 m lawn. The arc EF has length 9 m. Find the angle EOF in degrees, correct to 1 decimal place, and state whether the sector is less than a quarter of the lawn. [5]',
      ru: 'Круглая лужайка имеет центр O и радиус 6 м. Разбрызгиватель в точке O поливает сектор OAB, где угол AOB равен 1,2 радиана.\n\n(a) Найдите длину дуги AB. Ответ дайте с точностью до 3 значащих цифр. [2]\n\n(b) Найдите площадь сектора OAB. Ответ дайте с точностью до 3 значащих цифр. [3]\n\n(c) Вторая лужайка имеет сектор с тем же углом, 1,2 радиана, и площадью 30 м². Найдите радиус этой лужайки. Ответ дайте с точностью до 3 значащих цифр. [4]\n\n(d) Третий разбрызгиватель поливает сектор OEF лужайки радиусом 6 м. Длина дуги EF равна 9 м. Найдите угол EOF в градусах с точностью до 0,1 и укажите, меньше ли сектор четверти лужайки. [5]',
    },
    markscheme: {
      en: '(a) M1: s = rθ = 6 × 1.2. A1: s = 7.20 m.\n(b) M1: A = ½r²θ. A1: A = ½ × 6² × 1.2. A1: A = 21.6 m².\n(c) M1: 30 = ½r² × 1.2. M1: r² = 2 × 30 / 1.2 = 50. A1: r = √50. A1: r = 7.07 m.\n(d) M1: θ = s/r. A1: θ = 9/6 = 1.5 rad. M1: θ = 1.5 × 180/π degrees. A1: θ = 85.9°. R1: 85.9° is less than 90°, so the sector is less than a quarter of the lawn.',
      ru: '(a) M1: s = rθ = 6 × 1,2. A1: s = 7,20 м.\n(b) M1: A = ½r²θ. A1: A = ½ × 6² × 1,2. A1: A = 21,6 м².\n(c) M1: 30 = ½r² × 1,2. M1: r² = 2 × 30 / 1,2 = 50. A1: r = √50. A1: r = 7,07 м.\n(d) M1: θ = s/r. A1: θ = 9/6 = 1,5 рад. M1: θ = 1,5 × 180/π градусов. A1: θ = 85,9°. R1: 85,9° меньше 90°, значит сектор меньше четверти лужайки.',
    },
    answer: '7.20; 21.6; 7.07; 85.9',
    origin: 'original',
    minutes: 14,
  },
];
