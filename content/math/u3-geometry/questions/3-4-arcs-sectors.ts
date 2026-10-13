import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-4-01',
    subject: 'math',
    topicIds: ['3-4-arcs-sectors'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A sector of a circle has centre O and radius 9 cm. The central angle AOB is 120°. Find the length of the arc AB, in cm, correct to 3 significant figures.',
      ru: 'Сектор окружности имеет центр O и радиус 9 см. Центральный угол AOB равен 120°. Найдите длину дуги AB в см с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: arc length = (120/360) × 2π × 9. A1: 6π = 18.85... (unrounded). A1: 18.8 cm (3 s.f.).',
      ru: 'M1: длина дуги = (120/360) × 2π × 9. A1: 6π = 18,85... (без округления). A1: 18,8 см (3 значащие цифры).',
    },
    answer: '18.8',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-4-02',
    subject: 'math',
    topicIds: ['3-4-arcs-sectors'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'An arc AB of a circle with radius 6 cm has length 14 cm.\n\n(a) Find the central angle AOB, in degrees, correct to 1 decimal place. [2]\n\n(b) Hence find the area of the sector OAB, in cm², correct to 1 decimal place. [2]',
      ru: 'Дуга AB окружности радиуса 6 см имеет длину 14 см.\n\n(a) Найдите центральный угол AOB в градусах с точностью до 1 знака после запятой. [2]\n\n(b) Используя ответ (a), найдите площадь сектора OAB в см² с точностью до 1 знака после запятой. [2]',
    },
    markscheme: {
      en: '(a) M1: 14 = (θ/360) × 2π × 6. A1: θ = 420/π = 133.7 degrees (1 decimal place).\n(b) M1: A = (θ/360) × π × 6², or A = ½ × 6 × 14. A1: A = 42.0 cm² (1 decimal place).',
      ru: '(a) M1: 14 = (θ/360) × 2π × 6. A1: θ = 420/π = 133,7 градуса (с точностью до 1 знака после запятой).\n(b) M1: A = (θ/360) × π × 6² или A = ½ × 6 × 14. A1: A = 42,0 см² (с точностью до 1 знака после запятой).',
    },
    answer: '133.7; 42.0',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-3-4-03',
    subject: 'math',
    topicIds: ['3-4-arcs-sectors'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A garden sprinkler is at the centre O of a circular lawn of radius 12 m. It waters the sector AOB, whose central angle is 75°.\n\n(a) Find the length of the arc AB, the outer edge of the watered area, in m, correct to 3 significant figures. [2]\n\n(b) Find the area of the watered sector, in m², correct to 3 significant figures. [2]\n\n(c) A second sprinkler must water a sector with the same area as in part (b), but with radius 9 m. Find its central angle, in degrees, correct to 1 decimal place. [3]\n\n(d) Find the perimeter of this second sector (its arc plus its two radii), in m, correct to 3 significant figures. [4]\n\n(e) The first sprinkler waters only the sector AOB. Find the length of the lawn edge that is not watered, in m, correct to 3 significant figures. [3]',
      ru: 'Садовый разбрызгиватель стоит в центре O круглого газона радиуса 12 м. Он поливает сектор AOB, центральный угол которого равен 75°.\n\n(a) Найдите длину дуги AB, внешнего края политой области, в м с точностью до 3 значащих цифр. [2]\n\n(b) Найдите площадь политого сектора в м² с точностью до 3 значащих цифр. [2]\n\n(c) Второй разбрызгиватель должен поливать сектор той же площади, что в части (b), но с радиусом 9 м. Найдите его центральный угол в градусах с точностью до 1 знака после запятой. [3]\n\n(d) Найдите периметр этого второго сектора (дуга плюс два радиуса) в м с точностью до 3 значащих цифр. [4]\n\n(e) Первый разбрызгиватель поливает только сектор AOB. Найдите длину края газона, который не полит, в м с точностью до 3 значащих цифр. [3]',
    },
    markscheme: {
      en: '(a) M1: l = (75/360) × 2π × 12. A1: 15.7 m (3 s.f.).\n(b) M1: A = (75/360) × π × 12². A1: 94.2 m² (3 s.f.).\n(c) M1: (θ/360) × π × 9² = 30π, the area from part (b). A1: θ = 30 × 360/81. A1: θ = 133.3 degrees (1 decimal place).\n(d) M1: arc = (133.3/360) × 2π × 9 = 20π/3. A1: arc = 20.9 m. M1: perimeter = arc + 2 × 9. A1: 38.9 m (3 s.f.).\n(e) M1: unwatered angle = 360 − 75 = 285 degrees. M1: length = (285/360) × 2π × 12 = 19π. A1: 59.7 m (3 s.f.).',
      ru: '(a) M1: l = (75/360) × 2π × 12. A1: 15,7 м (3 значащие цифры).\n(b) M1: A = (75/360) × π × 12². A1: 94,2 м² (3 значащие цифры).\n(c) M1: (θ/360) × π × 9² = 30π, площадь из части (b). A1: θ = 30 × 360/81. A1: θ = 133,3 градуса (с точностью до 1 знака после запятой).\n(d) M1: дуга = (133,3/360) × 2π × 9 = 20π/3. A1: дуга = 20,9 м. M1: периметр = дуга + 2 × 9. A1: 38,9 м (3 значащие цифры).\n(e) M1: неполитый угол = 360 − 75 = 285 градусов. M1: длина = (285/360) × 2π × 12 = 19π. A1: 59,7 м (3 значащие цифры).',
    },
    answer: '15.7; 94.2; 133.3; 38.9; 59.7',
    origin: 'original',
    minutes: 14,
  },
];
