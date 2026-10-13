import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-5-01',
    subject: 'math',
    topicIds: ['2-5-standard-models'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The height h metres of a water jet above a pool, at horizontal distance x metres from its nozzle, is modelled by $h(x) = -0.4x^{2} + 2.4x + 0.9$ for x ≥ 0. (a) Find the coordinates of the highest point of the jet. (b) Find the horizontal distance x at which the water reaches the pool surface, that is h(x) = 0, with x ≥ 0. Give all answers to 2 decimal places.',
      ru: 'Высота h метров струи воды над бассейном на горизонтальном расстоянии x метров от сопла задаётся моделью $h(x) = -0{,}4x^{2} + 2{,}4x + 0{,}9$ при x ≥ 0. (a) Найдите координаты самой высокой точки струи. (b) Найдите горизонтальное расстояние x, на котором вода достигает поверхности бассейна, то есть h(x) = 0, при x ≥ 0. Все ответы дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: '(a) M1: the axis of symmetry is x = -b/(2a) = -2.4/(-0.8) = 3.00. A1: the maximum height is h(3) = 4.50, so the highest point is (3.00, 4.50).\n(b) M1: solve -0.4x^2 + 2.4x + 0.9 = 0 and take the positive root, since x ≥ 0. A1: x = 6.35.',
      ru: '(a) M1: ось симметрии x = -b/(2a) = -2,4/(-0,8) = 3,00. A1: наибольшая высота h(3) = 4,50, значит самая высокая точка (3,00; 4,50).\n(b) M1: решить -0,4x^2 + 2,4x + 0,9 = 0 и взять положительный корень, так как x ≥ 0. A1: x = 6,35.',
    },
    answer: '3.00; 4.50; 6.35',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-5-02',
    subject: 'math',
    topicIds: ['2-5-standard-models'],
    paper: 'P1',
    marks: 4,
    command: 'Write down',
    prompt: {
      en: 'A simplified model for the number of daylight hours D at a location near Dubai is D(t) = 12 - 1.5cos(πt/6), where t is the number of months after the start of January and 0 ≤ t ≤ 12. (a) Write down the maximum and the minimum number of daylight hours, giving each to 1 decimal place. (b) Find the least value of t for which D(t) = 12.75. Give your answer as an exact value.',
      ru: 'Упрощённая модель числа часов дневного света D в районе Дубая: D(t) = 12 - 1,5cos(πt/6), где t — число месяцев после начала января, 0 ≤ t ≤ 12. (a) Запишите наибольшее и наименьшее число часов дневного света, каждое с точностью до 1 знака после запятой. (b) Найдите наименьшее значение t, при котором D(t) = 12,75. Ответ дайте точным значением.',
    },
    markscheme: {
      en: '(a) M1: the amplitude is 1.5 and the midline is 12. A1: maximum 13.5 hours and minimum 10.5 hours.\n(b) M1: solve 12 - 1.5cos(πt/6) = 12.75, so cos(πt/6) = -0.5. A1: πt/6 = 2π/3 gives t = 4, the first solution (the next one is t = 8).',
      ru: '(a) M1: амплитуда равна 1,5, средняя линия равна 12. A1: наибольшее значение 13,5 часа и наименьшее 10,5 часа.\n(b) M1: решить 12 - 1,5cos(πt/6) = 12,75, то есть cos(πt/6) = -0,5. A1: πt/6 = 2π/3 даёт t = 4, первое решение (следующее — t = 8).',
    },
    answer: '13.5; 10.5; 4',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-5-03',
    subject: 'math',
    topicIds: ['2-5-standard-models'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, Explain',
    prompt: {
      en: 'An open box is made from a square sheet of card of side 30 cm. A square of side x cm is cut from each corner, and the sides are folded up. The volume of the box is $V(x) = x(30 - 2x)^{2} \\text{cm}^{3}$ for 0 < x < 15.\n\n(a) Show that $V(x) = 4x^{3} - 120x^{2} + 900x$. Explain why the values of x are restricted to 0 < x < 15. [3]\n\n(b) Find the value of x for which V(x) is a maximum, and the maximum volume. Give x to 2 decimal places and the volume to the nearest $\\text{cm}^{3}$. [3]\n\n(c) Find the two values of x for which V(x) = 1000. Give your answers to 2 decimal places. [3]\n\n(d) Explain the meaning of V(x) approaching 0 as x approaches 0, and as x approaches 15. [3]\n\n(e) Find the volume of the box when x = 2. [2]',
      ru: 'Открытую коробку делают из квадратного листа картона со стороной 30 см. В каждом углу вырезают квадрат со стороной x см, а стенки загибают вверх. Объём коробки $V(x) = x(30 - 2x)^{2} \\text{см}^{3}$ при 0 < x < 15.\n\n(a) Покажите, что $V(x) = 4x^{3} - 120x^{2} + 900x$. Объясните, почему допустимы только значения 0 < x < 15. [3]\n\n(b) Найдите значение x, при котором V(x) максимально, и максимальный объём. Значение x дайте с точностью до 2 знаков после запятой, объём — с точностью до целых $\\text{см}^{3}$. [3]\n\n(c) Найдите два значения x, при которых V(x) = 1000. Ответы дайте с точностью до 2 знаков после запятой. [3]\n\n(d) Объясните смысл того, что V(x) стремится к 0 при x, стремящемся к 0, и при x, стремящемся к 15. [3]\n\n(e) Найдите объём коробки при x = 2. [2]',
    },
    markscheme: {
      en: '(a) M1: (30 - 2x)^2 = 900 - 120x + 4x^2. A1: multiply by x to get V(x) = 4x^3 - 120x^2 + 900x (AG). R1: a cut needs x > 0, and the base side 30 - 2x must be positive, so x < 15.\n(b) M1: the maximum function of the GDC on 0 < x < 15. A1: x = 5.00. A1: V = 2000 cm^3.\n(c) M1: solve V(x) = 1000 with the intersection function, or the zero function applied to V(x) - 1000. A1: x = 1.34. A1: x = 10.00.\n(d) R1: as x approaches 0 the height approaches 0, so the volume approaches 0. R1: as x approaches 15 the base side 30 - 2x approaches 0, so the volume approaches 0. R1: both ends give zero volume, so the box exists only for 0 < x < 15 and the maximum lies between them.\n(e) M1: V(2) = 2(30 - 4)^2 = 2 × 26^2. A1: V = 1352 cm^3.',
      ru: '(a) M1: (30 - 2x)^2 = 900 - 120x + 4x^2. A1: умножая на x, получаем V(x) = 4x^3 - 120x^2 + 900x (AG). R1: вырезаемый квадрат требует x > 0, а сторона основания 30 - 2x должна быть положительной, поэтому x < 15.\n(b) M1: функция максимума калькулятора на промежутке 0 < x < 15. A1: x = 5,00. A1: V = 2000 см^3.\n(c) M1: решить V(x) = 1000 функцией пересечения или функцией нуля для V(x) - 1000. A1: x = 1,34. A1: x = 10,00.\n(d) R1: при x, стремящемся к 0, высота стремится к 0, поэтому объём стремится к 0. R1: при x, стремящемся к 15, сторона основания 30 - 2x стремится к 0, поэтому объём стремится к 0. R1: на обоих концах объём равен нулю, поэтому коробка существует только при 0 < x < 15, а максимум лежит между ними.\n(e) M1: V(2) = 2(30 - 4)^2 = 2 × 26^2. A1: V = 1352 см^3.',
    },
    answer: '5.00; 2000; 1.34; 10.00; 1352',
    origin: 'original',
    minutes: 14,
  },
];
