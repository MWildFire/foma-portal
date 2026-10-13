import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-10-01',
    subject: 'math',
    topicIds: ['5-10-second-derivative'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Let f(x) = 3 ln x + x^2 for x > 0. Find f\'\'(2), giving your answer correct to 2 decimal places.',
      ru: 'Пусть f(x) = 3 ln x + x^2 при x > 0. Найдите f\'\'(2). Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: f\'(x) = 3/x + 2x. M1: f\'\'(x) = -3/x^2 + 2. A1: f\'\'(2) = -3/4 + 2 = 1.25 (2 decimal places).',
      ru: 'M1: f\'(x) = 3/x + 2x. M1: f\'\'(x) = -3/x^2 + 2. A1: f\'\'(2) = -3/4 + 2 = 1,25 (с точностью до 2 знаков).',
    },
    answer: '1.25',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-10-02',
    subject: 'math',
    topicIds: ['5-10-second-derivative'],
    paper: 'P1',
    marks: 4,
    command: 'Determine, Justify',
    prompt: {
      en: 'Let f(x) = x^4 - 8x^2 + 5. Determine the value of the local maximum and the value of the local minimum of f. Justify each result using the second derivative.',
      ru: 'Пусть f(x) = x^4 - 8x^2 + 5. Определите значение локального максимума и значение локального минимума функции f. Обоснуйте каждый результат с помощью второй производной.',
    },
    markscheme: {
      en: 'M1: f\'(x) = 4x^3 - 16x = 4x(x^2 - 4), so the stationary points are x = 0, x = 2 and x = -2. M1: f\'\'(x) = 12x^2 - 16. A1: f\'\'(0) = -16 < 0, so the local maximum value is f(0) = 5. A1: f\'\'(2) = f\'\'(-2) = 32 > 0, so both points give the local minimum value f(2) = f(-2) = -11.',
      ru: 'M1: f\'(x) = 4x^3 - 16x = 4x(x^2 - 4), стационарные точки x = 0, x = 2 и x = -2. M1: f\'\'(x) = 12x^2 - 16. A1: f\'\'(0) = -16 < 0, значит значение локального максимума равно f(0) = 5. A1: f\'\'(2) = f\'\'(-2) = 32 > 0, значит обе точки дают локальный минимум f(2) = f(-2) = -11.',
    },
    answer: '5; -11',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-10-03',
    subject: 'math',
    topicIds: ['5-10-second-derivative'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A medicine enters the bloodstream. The concentration of the medicine, in mg per litre, t hours after it is taken is modelled by C(t) = 4t e^(-0.5t) for t >= 0.\n\n(a) Show that C\'(t) = (4 - 2t) e^(-0.5t). [3]\n(b) Hence find the time at which the concentration is greatest, and the greatest concentration, giving the concentration correct to 3 decimal places. [4]\n(c) Find C\'\'(2), giving your answer correct to 3 decimal places, and hence justify that the concentration is at a maximum when t = 2. [3]\n(d) Find C\'(6), giving your answer correct to 3 decimal places. [2]\n(e) For t > 4, explain what the sign of C\'\'(t) tells you about the rate at which the concentration decreases. [2]',
      ru: 'Лекарство попадает в кровь. Концентрация лекарства в миллиграммах на литр через t часов после приёма описывается моделью C(t) = 4t e^(-0.5t) при t >= 0.\n\n(a) Покажите, что C\'(t) = (4 - 2t) e^(-0.5t). [3]\n(b) Используя этот результат, найдите момент времени, когда концентрация наибольшая, и наибольшую концентрацию, дав её с точностью до 3 знаков после запятой. [4]\n(c) Найдите C\'\'(2) с точностью до 3 знаков после запятой и обоснуйте, что при t = 2 концентрация максимальна. [3]\n(d) Найдите C\'(6) с точностью до 3 знаков после запятой. [2]\n(e) Для t > 4 объясните, что говорит знак C\'\'(t) о скорости убывания концентрации. [2]',
    },
    markscheme: {
      en: '(a) M1: product rule, C\'(t) = 4e^(-0.5t) + 4t(-0.5)e^(-0.5t). A1: C\'(t) = (4 - 2t)e^(-0.5t). A1: the stated result is obtained (AG).\n(b) M1: solve C\'(t) = 0; since e^(-0.5t) > 0, 4 - 2t = 0, so t = 2. A1: t = 2. M1: C(2) = 8e^(-1). A1: 2.943 (3 decimal places).\n(c) M1: C\'\'(t) = (t - 4)e^(-0.5t). A1: C\'\'(2) = -2e^(-1) = -0.736 (3 decimal places). R1: C\'\'(2) < 0, so the concentration is at a maximum when t = 2.\n(d) M1: substitute t = 6 into C\'(t). A1: C\'(6) = -8e^(-3) = -0.398 (3 decimal places).\n(e) R1: for t > 4, t - 4 > 0 and e^(-0.5t) > 0, so C\'\'(t) > 0. R1: C\'(t) is negative but increasing towards 0, so the concentration falls ever more slowly.',
      ru: '(a) M1: производная произведения, C\'(t) = 4e^(-0.5t) + 4t(-0.5)e^(-0.5t). A1: C\'(t) = (4 - 2t)e^(-0.5t). A1: получен заявленный результат (AG).\n(b) M1: решаем C\'(t) = 0; так как e^(-0.5t) > 0, получаем 4 - 2t = 0, значит t = 2. A1: t = 2. M1: C(2) = 8e^(-1). A1: 2,943 (с точностью до 3 знаков).\n(c) M1: C\'\'(t) = (t - 4)e^(-0.5t). A1: C\'\'(2) = -2e^(-1) = -0,736 (с точностью до 3 знаков). R1: C\'\'(2) < 0, значит при t = 2 концентрация максимальна.\n(d) M1: подставляем t = 6 в C\'(t). A1: C\'(6) = -8e^(-3) = -0,398 (с точностью до 3 знаков).\n(e) R1: при t > 4 выполнено t - 4 > 0 и e^(-0.5t) > 0, значит C\'\'(t) > 0. R1: C\'(t) отрицательна, но возрастает к 0, поэтому концентрация убывает всё медленнее.',
    },
    answer: '2; 2.943; -0.736; -0.398',
    origin: 'original',
    minutes: 14,
  },
];
