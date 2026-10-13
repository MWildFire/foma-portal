import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-1-01',
    subject: 'math',
    topicIds: ['2-1-straight-lines'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A straight line passes through the points A(-1, 5) and B(4, 1). Find the x-intercept of the line.',
      ru: 'Прямая проходит через точки A(-1, 5) и B(4, 1). Найдите пересечение прямой с осью x.',
    },
    markscheme: {
      en: 'M1: gradient m = (1 - 5)/(4 - (-1)) = -0.8. M1: y = -0.8x + c, and substituting B(4, 1) gives c = 4.2. A1: x-intercept 5.25 (from 0 = -0.8x + 4.2).',
      ru: 'M1: угловой коэффициент m = (1 - 5)/(4 - (-1)) = -0,8. M1: y = -0,8x + c, подстановка B(4, 1) даёт c = 4,2. A1: пересечение с осью x равно 5,25 (из 0 = -0,8x + 4,2).',
    },
    answer: '5.25',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-2-1-02',
    subject: 'math',
    topicIds: ['2-1-straight-lines'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The line L1 has equation 3x - 4y + 8 = 0. The line L2 is perpendicular to L1 and passes through the point (2, 5). Find the y-intercept of L2, giving your answer to 2 decimal places.',
      ru: 'Прямая L1 задана уравнением 3x - 4y + 8 = 0. Прямая L2 перпендикулярна L1 и проходит через точку (2, 5). Найдите пересечение L2 с осью y; ответ округлите до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: rewrite L1 as y = 0.75x + 2, so its gradient is 0.75. M1: the gradient of L2 is -1/0.75 = -4/3. M1: substitute (2, 5) into y = -(4/3)x + c, giving 5 = -8/3 + c. A1: c = 23/3 = 7.67 (2 decimal places).',
      ru: 'M1: перепишем L1 в виде y = 0,75x + 2, её угловой коэффициент равен 0,75. M1: угловой коэффициент L2 равен -1/0,75 = -4/3. M1: подставим (2, 5) в y = -(4/3)x + c, получим 5 = -8/3 + c. A1: c = 23/3 = 7,67 (2 знака после запятой).',
    },
    answer: '7.67',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-2-1-03',
    subject: 'math',
    topicIds: ['2-1-straight-lines'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A water tank is drained at a constant rate. At the start of draining (t = 0 minutes) the tank holds 240 litres. After 5 minutes it holds 168.4 litres. Let V be the volume of water in the tank, in litres, t minutes after draining starts. Assume that V is a linear function of t while the tank is draining.\n\n(a) Find the gradient of the line joining the two points, and interpret its sign in context. [3]\n\n(b) Write V in the form V = mt + c. Hence find the time, in minutes, at which the tank is empty, giving your answer to 2 decimal places. [3]\n\n(c) Find the volume of water in the tank after 10 minutes. [2]\n\n(d) A second tank, of the same shape, holds 300 litres at t = 0 and is drained at the same rate. Explain why the graphs of the two volumes are parallel, and find the difference between the two volumes after 10 minutes. [3]\n\n(e) At t = 10 a pump starts to drain the first tank at an additional constant rate of 20 litres per minute. Find the time, in minutes, at which the first tank is empty, giving your answer to 2 decimal places. [3]',
      ru: 'Резервуар с водой опустошают с постоянной скоростью. В начале слива (t = 0 минут) в нём 240 литров воды. Через 5 минут в нём 168,4 литра. Пусть V — объём воды в резервуаре в литрах через t минут после начала слива. Считайте, что V — линейная функция от t, пока идёт слив.\n\n(a) Найдите угловой коэффициент прямой, соединяющей эти две точки, и объясните смысл его знака в контексте. [3]\n\n(b) Запишите V в виде V = mt + c. Затем найдите время в минутах, когда резервуар опустеет; ответ округлите до 2 знаков после запятой. [3]\n\n(c) Найдите объём воды в резервуаре через 10 минут. [2]\n\n(d) Второй резервуар той же формы содержит 300 литров при t = 0 и опустошается с той же скоростью. Объясните, почему графики объёмов для двух резервуаров параллельны, и найдите разность объёмов через 10 минут. [3]\n\n(e) При t = 10 в первом резервуаре включают насос, который добавляет к сливу постоянную скорость 20 литров в минуту. Найдите время в минутах, когда первый резервуар опустеет; ответ округлите до 2 знаков после запятой. [3]',
    },
    markscheme: {
      en: '(a) M1: gradient m = (168.4 - 240)/(5 - 0) = -14.32. A1: m = -14.32. R1: the volume falls by 14.32 litres every minute.\n(b) M1: c = 240, so V = -14.32t + 240. M1: set V = 0. A1: t = 240/14.32 = 16.76 (2 decimal places).\n(c) M1: V(10) = 240 - 14.32 × 10. A1: 96.8 litres.\n(d) R1: both lines have the same gradient -14.32 (the same rate of draining), so they are parallel. M1: V2 = 300 - 14.32t, so V2(10) = 156.8. A1: difference 156.8 - 96.8 = 60 litres.\n(e) M1: after t = 10 the gradient is -(14.32 + 20) = -34.32, so V = 96.8 - 34.32(t - 10). M1: set V = 0. A1: t = 10 + 96.8/34.32 = 12.82 (2 decimal places).',
      ru: '(a) M1: угловой коэффициент m = (168,4 - 240)/(5 - 0) = -14,32. A1: m = -14,32. R1: объём уменьшается на 14,32 литра каждую минуту.\n(b) M1: c = 240, поэтому V = -14,32t + 240. M1: приравниваем V к 0. A1: t = 240/14,32 = 16,76 (2 знака после запятой).\n(c) M1: V(10) = 240 - 14,32 × 10. A1: 96,8 литра.\n(d) R1: у обеих прямых одинаковый угловой коэффициент -14,32 (одинаковая скорость слива), поэтому они параллельны. M1: V2 = 300 - 14,32t, откуда V2(10) = 156,8. A1: разность 156,8 - 96,8 = 60 литров.\n(e) M1: после t = 10 угловой коэффициент равен -(14,32 + 20) = -34,32, поэтому V = 96,8 - 34,32(t - 10). M1: приравниваем V к 0. A1: t = 10 + 96,8/34,32 = 12,82 (2 знака после запятой).',
    },
    answer: '-14.32; 16.76; 96.8; 60; 12.82',
    origin: 'original',
    minutes: 14,
  },
];
