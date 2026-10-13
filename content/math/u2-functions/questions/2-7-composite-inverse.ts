import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-7-01',
    subject: 'math',
    topicIds: ['2-7-composite-inverse'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The functions f and g are defined for all real x by f(x) = 2x + 5 and g(x) = x² − 3. Find (f ∘ g)(3) and (g ∘ f)(3).',
      ru: 'Функции f и g заданы для всех действительных x формулами f(x) = 2x + 5 и g(x) = x² − 3. Найдите (f ∘ g)(3) и (g ∘ f)(3).',
    },
    markscheme: {
      en: 'M1: g(3) = 6, so (f ∘ g)(3) = f(6).\nA1: (f ∘ g)(3) = 17.\nM1: f(3) = 11, so (g ∘ f)(3) = g(11).\nA1: (g ∘ f)(3) = 118, which differs from (f ∘ g)(3).',
      ru: 'M1: g(3) = 6, поэтому (f ∘ g)(3) = f(6).\nA1: (f ∘ g)(3) = 17.\nM1: f(3) = 11, поэтому (g ∘ f)(3) = g(11).\nA1: (g ∘ f)(3) = 118, что отличается от (f ∘ g)(3).',
    },
    answer: '17; 118',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-7-02',
    subject: 'math',
    topicIds: ['2-7-composite-inverse'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The function h is defined by h(x) = x² − 6x + 13 for x ≥ 3. Find h⁻¹(29).',
      ru: 'Функция h задана формулой h(x) = x² − 6x + 13 при x ≥ 3. Найдите h⁻¹(29).',
    },
    markscheme: {
      en: 'M1: h⁻¹(29) = x where h(x) = 29, so x² − 6x + 13 = 29.\nA1: x² − 6x − 16 = 0, so x = 8 or x = −2.\nR1: the domain of h is x ≥ 3, so x = −2 is rejected.\nA1: h⁻¹(29) = 8.',
      ru: 'M1: h⁻¹(29) = x, где h(x) = 29, то есть x² − 6x + 13 = 29.\nA1: x² − 6x − 16 = 0, откуда x = 8 или x = −2.\nR1: область определения h — x ≥ 3, поэтому x = −2 не подходит.\nA1: h⁻¹(29) = 8.',
    },
    answer: '8',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-7-03',
    subject: 'math',
    topicIds: ['2-7-composite-inverse'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A workshop in Dubai makes a product. After t hours it has made n(t) = 50t items, for t ≥ 0. The total cost, in AED, of making n items is C(n) = 0.01(n + 100)², for n ≥ 0.\n\n(a) Show that the total cost after t hours is 25(t + 2)² AED. [2]\n\n(b) Find the total cost after 3 hours. [2]\n\n(c) (i) Find an expression for C⁻¹(x) and state its domain. [4]\n\n(ii) Hence find the number of items that can be made for a total cost of 400 AED. [2]\n\n(d) Find the time, in hours, at which the total cost reaches 1600 AED. [4]',
      ru: 'Мастерская в Дубае выпускает изделие. Через t часов она выпускает n(t) = 50t изделий при t ≥ 0. Полная стоимость производства n изделий (в AED) равна C(n) = 0,01(n + 100)² при n ≥ 0.\n\n(a) Покажите, что полная стоимость через t часов равна 25(t + 2)² AED. [2]\n\n(b) Найдите полную стоимость через 3 часа. [2]\n\n(c) (i) Найдите выражение для C⁻¹(x) и укажите его область определения. [4]\n\n(ii) Используя результат (c)(i), найдите количество изделий, которое можно выпустить при полной стоимости 400 AED. [2]\n\n(d) Найдите время в часах, через которое полная стоимость достигнет 1600 AED. [4]',
    },
    markscheme: {
      en: '(a) M1: C(50t) = 0.01(50t + 100)². A1: = 0.01 × 2500(t + 2)² = 25(t + 2)² (AG).\n(b) M1: n(3) = 150, or 25(3 + 2)². A1: total cost 625 AED.\n(c)(i) M1: swap x and y: x = 0.01(y + 100)². M1: (y + 100)² = 100x. A1: y + 100 = 10√x, taking the positive root because n ≥ 0. A1: C⁻¹(x) = 10√x − 100, with domain x ≥ 100 (the range of C).\n(c)(ii) M1: C⁻¹(400) = 10 × 20 − 100. A1: 100 items.\n(d) M1: 25(t + 2)² = 1600. A1: (t + 2)² = 64. R1: t + 2 = −8 gives t = −10, which is rejected because t ≥ 0. A1: t = 6 hours.',
      ru: '(a) M1: C(50t) = 0,01(50t + 100)². A1: = 0,01 × 2500(t + 2)² = 25(t + 2)² (AG).\n(b) M1: n(3) = 150, или 25(3 + 2)². A1: полная стоимость 625 AED.\n(c)(i) M1: меняем местами x и y: x = 0,01(y + 100)². M1: (y + 100)² = 100x. A1: y + 100 = 10√x, берём положительный корень, так как n ≥ 0. A1: C⁻¹(x) = 10√x − 100, область определения x ≥ 100 (область значений C).\n(c)(ii) M1: C⁻¹(400) = 10 × 20 − 100. A1: 100 изделий.\n(d) M1: 25(t + 2)² = 1600. A1: (t + 2)² = 64. R1: t + 2 = −8 даёт t = −10, это отбрасывается, так как t ≥ 0. A1: t = 6 часов.',
    },
    answer: '625; 100; 6',
    origin: 'original',
    minutes: 14,
  },
];
