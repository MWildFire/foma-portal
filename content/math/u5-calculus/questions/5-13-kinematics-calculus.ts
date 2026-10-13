import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-13-01',
    subject: 'math',
    topicIds: ['5-13-kinematics-calculus'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A particle P moves along a straight line. At time t seconds its acceleration is a = 10 − 4t m s⁻² for t ≥ 0. When t = 0, P is at rest. Find the value of t, in seconds, when P is next at rest.',
      ru: 'Частица P движется по прямой. В момент времени t секунд её ускорение равно a = 10 − 4t м с⁻² при t ≥ 0. В момент t = 0 частица P находится в покое. Найдите значение t в секундах, при котором P снова окажется в покое.',
    },
    markscheme: {
      en: 'M1: v = ∫(10 − 4t) dt = 10t − 2t² + C. M1: v = 0 when t = 0 gives C = 0. A1: 10t − 2t² = 0, so 2t(5 − t) = 0 and t = 5 (t = 0 is the starting instant).',
      ru: 'M1: v = ∫(10 − 4t) dt = 10t − 2t² + C. M1: при t = 0 скорость равна 0, значит C = 0. A1: 10t − 2t² = 0, то есть 2t(5 − t) = 0, и t = 5 (t = 0 — начальный момент).',
    },
    answer: '5',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-5-13-02',
    subject: 'math',
    topicIds: ['5-13-kinematics-calculus'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A particle P moves along a straight line from a fixed point O. Its velocity, in m s⁻¹, at time t seconds is v = 6t − t² for 0 ≤ t ≤ 6. At t = 0, P is at O. Find the displacement of P from O when t = 4. Give your answer correct to 2 decimal places.',
      ru: 'Частица P движется по прямой от фиксированной точки O. Её скорость в м с⁻¹ в момент времени t секунд равна v = 6t − t² при 0 ≤ t ≤ 6. В момент t = 0 частица P находится в точке O. Найдите перемещение P от точки O при t = 4. Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: s = ∫(6t − t²) dt = 3t² − t³/3 + C. M1: s = 0 when t = 0 gives C = 0. A1: s = 3t² − t³/3. A1: s(4) = 48 − 64/3 = 26.67 (2 decimal places).',
      ru: 'M1: s = ∫(6t − t²) dt = 3t² − t³/3 + C. M1: при t = 0 перемещение равно 0, значит C = 0. A1: s = 3t² − t³/3. A1: s(4) = 48 − 64/3 = 26,67 (с точностью до 2 знаков).',
    },
    answer: '26.67',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-13-03',
    subject: 'math',
    topicIds: ['5-13-kinematics-calculus'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'A tram in Dubai leaves station A at time t = 0 and comes to rest at station B 40 seconds later. It moves along a straight track. Let s metres be its displacement from A and v m s⁻¹ its velocity at time t seconds. Its acceleration is a = 1 − t/20 m s⁻² for 0 ≤ t ≤ 40. The tram starts from rest at A.\n\n(a) Show that v = t − t²/40 for 0 ≤ t ≤ 40. [3]\n\n(b) Find the displacement of the tram from A when t = 40. Give your answer correct to 2 decimal places. [4]\n\n(c) Find the time at which the tram has its maximum speed, and this maximum speed in m s⁻¹. Justify that it is a maximum. [4]\n\n(d) Comment on whether the model can be used for t > 40, giving a reason from the context. [3]',
      ru: 'Трамвай в Дубае отправляется от станции A в момент t = 0 и через 40 секунд останавливается на станции B. Он движется по прямой. Пусть s м — его перемещение от станции A, а v м с⁻¹ — его скорость в момент времени t секунд. Ускорение задано формулой a = 1 − t/20 м с⁻² при 0 ≤ t ≤ 40. Трамвай начинает движение с покоя на станции A.\n\n(a) Покажите, что v = t − t²/40 при 0 ≤ t ≤ 40. [3]\n\n(b) Найдите перемещение трамвая от станции A при t = 40. Ответ дайте с точностью до 2 знаков после запятой. [4]\n\n(c) Найдите момент времени, в который скорость трамвая максимальна, и эту максимальную скорость в м с⁻¹. Обоснуйте, что это именно максимум. [4]\n\n(d) Прокомментируйте, можно ли использовать модель при t > 40, и приведите причину из контекста. [3]',
    },
    markscheme: {
      en: '(a) M1: v = ∫(1 − t/20) dt = t − t²/40 + C. M1: v = 0 when t = 0 gives C = 0. A1: v = t − t²/40, as required.\n(b) M1: s = ∫(t − t²/40) dt = t²/2 − t³/120 + D. M1: s = 0 when t = 0 gives D = 0. A1: s = t²/2 − t³/120. A1: s(40) = 800/3 = 266.67 (2 decimal places).\n(c) M1: maximum speed where dv/dt = a = 0, so 1 − t/20 = 0. A1: t = 20. A1: v(20) = 20 − 400/40 = 10 m s⁻¹. R1: a is positive for t < 20 and negative for t > 20, so v increases and then decreases: this is a maximum.\n(d) R1: v = t − t²/40 is negative for t > 40, so the model would make the tram reverse after station B. R1: the model describes only the journey 0 ≤ t ≤ 40. A1: a valid conclusion, for example that the model should not be used beyond t = 40.',
      ru: '(a) M1: v = ∫(1 − t/20) dt = t − t²/40 + C. M1: при t = 0 скорость равна 0, значит C = 0. A1: v = t − t²/40, что и требовалось.\n(b) M1: s = ∫(t − t²/40) dt = t²/2 − t³/120 + D. M1: при t = 0 перемещение равно 0, значит D = 0. A1: s = t²/2 − t³/120. A1: s(40) = 800/3 = 266,67 (с точностью до 2 знаков).\n(c) M1: максимальная скорость там, где dv/dt = a = 0, то есть 1 − t/20 = 0. A1: t = 20. A1: v(20) = 20 − 400/40 = 10 м с⁻¹. R1: a положительно при t < 20 и отрицательно при t > 20, значит v сначала растёт, а затем убывает: это максимум.\n(d) R1: v = t − t²/40 отрицательно при t > 40, значит модель предсказывает, что трамвай поедет назад после станции B. R1: модель описывает только поездку при 0 ≤ t ≤ 40. A1: верный вывод, например, что модель нельзя использовать за пределами t = 40.',
    },
    answer: '266.67; 20; 10',
    origin: 'original',
    minutes: 14,
  },
];
