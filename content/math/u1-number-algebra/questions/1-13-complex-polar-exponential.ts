import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-13-01',
    subject: 'math',
    topicIds: ['1-13-complex-polar-exponential'],
    paper: 'P1',
    marks: 4,
    command: 'Express',
    prompt: {
      en: 'Express z = -2 + 2i in the form $r e^{i\\theta}$, where r > 0 and -π < θ ≤ π. Give r correct to 3 significant figures, and θ in radians correct to 3 decimal places.',
      ru: 'Запишите z = -2 + 2i в виде $r e^{i\\theta}$, где r > 0 и -π < θ ≤ π. Дайте r с точностью до 3 значащих цифр, а θ в радианах — с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: r = |z| = sqrt((-2)^2 + 2^2) = sqrt(8). A1: r = 2.83 (3 significant figures). M1: z lies in the second quadrant, so θ = π - arctan(2/2) = 3π/4. A1: θ = 2.356 radians (3 decimal places).',
      ru: 'M1: r = |z| = sqrt((-2)^2 + 2^2) = sqrt(8). A1: r = 2,83 (3 значащие цифры). M1: z лежит во второй четверти, поэтому θ = π - arctan(2/2) = 3π/4. A1: θ = 2,356 радиана (с точностью до 3 знаков).',
    },
    answer: '2.83; 2.356',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-13-02',
    subject: 'math',
    topicIds: ['1-13-complex-polar-exponential'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Let z = 2 cis 25° and w = 1.5 cis 40°, where cis θ = cos θ + i sin θ. Find the modulus and the argument, in degrees, of $z^{3}/w$. Give the modulus correct to 3 significant figures and the argument correct to 1 decimal place.',
      ru: 'Пусть z = 2 cis 25° и w = 1,5 cis 40°, где cis θ = cos θ + i sin θ. Найдите модуль и аргумент (в градусах) числа $z^{3}/w$. Модуль дайте с точностью до 3 значащих цифр, аргумент — с точностью до 1 знака после запятой.',
    },
    markscheme: {
      en: 'M1: |z^3/w| = |z|^3 / |w| = 2^3 / 1.5. A1: modulus 5.33 (3 significant figures). M1: arg(z^3/w) = 3 x 25 - 40 = 35 degrees, since arguments add and subtract. A1: argument 35.0 degrees (1 decimal place).',
      ru: 'M1: |z^3/w| = |z|^3 / |w| = 2^3 / 1,5. A1: модуль 5,33 (3 значащие цифры). M1: arg(z^3/w) = 3 × 25 − 40 = 35 градусов, так как аргументы складываются и вычитаются. A1: аргумент 35,0 градуса (1 знак после запятой).',
    },
    answer: '5.33; 35.0',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-13-03',
    subject: 'math',
    topicIds: ['1-13-complex-polar-exponential'],
    paper: 'P2',
    marks: 16,
    command: 'Find',
    prompt: {
      en: 'An illustrative alternating supply has a frequency of 50 Hz, so ω = 100π radians per second. The voltage across a component is V(t) = 12 cos(ωt) + 5 sin(ωt) volts, where t is the time in seconds.\n\n(a) Write V(t) in the form R cos(ωt - φ), where R > 0 and 0 < φ < π/2. Give R correct to 1 decimal place and φ in radians correct to 3 decimal places. [4]\n\n(b) Find the first positive time at which V(t) reaches its maximum value. Give your answer in milliseconds, correct to 2 decimal places. [3]\n\n(c) Write the complex number z = 12 - 5i in the form r cis θ, where r > 0 and -180° < θ ≤ 180°. Give r to 2 decimal places and θ in degrees to 2 decimal places. [3]\n\n(d) A second supply of the same frequency gives W(t) = 4 cos(ωt + 1.2) volts, where 1.2 is in radians. Find the amplitude of V(t) + W(t), correct to 2 decimal places. [4]\n\n(e) Find V(t) when t = 0.001 seconds, correct to 2 decimal places. [2]',
      ru: 'В условной учебной модели источник переменного напряжения работает на частоте 50 Гц, поэтому ω = 100π радиан в секунду. Напряжение на элементе цепи равно V(t) = 12 cos(ωt) + 5 sin(ωt) вольт, где t — время в секундах.\n\n(a) Запишите V(t) в виде R cos(ωt - φ), где R > 0 и 0 < φ < π/2. Дайте R с точностью до 1 знака после запятой, а φ в радианах с точностью до 3 знаков после запятой. [4]\n\n(b) Найдите первое положительное время, при котором V(t) достигает наибольшего значения. Ответ дайте в миллисекундах с точностью до 2 знаков после запятой. [3]\n\n(c) Запишите комплексное число z = 12 - 5i в виде r cis θ, где r > 0 и -180° < θ ≤ 180°. Дайте r с 2 знаками после запятой, а θ — в градусах с той же точностью. [3]\n\n(d) Второй источник той же частоты создаёт напряжение W(t) = 4 cos(ωt + 1,2) вольт, где 1,2 — в радианах. Найдите амплитуду V(t) + W(t) с точностью до 2 знаков после запятой. [4]\n\n(e) Найдите V(t) при t = 0,001 секунды с точностью до 2 знаков после запятой. [2]',
    },
    markscheme: {
      en: '(a) M1: R = sqrt(12^2 + 5^2), with R cos φ = 12 and R sin φ = 5. A1: R = 13.0. M1: tan φ = 5/12. A1: φ = 0.395 radians (3 decimal places).\n(b) M1: V(t) is a maximum when ωt - φ = 0, so t = φ/ω. A1: t = 0.001257 s = 1.26 ms (2 decimal places). R1: φ is positive, so this is the first positive maximum.\n(c) M1: r = |z| = sqrt(12^2 + (-5)^2). A1: r = 13.00. A1: θ = arctan(-5/12) = -22.62 degrees (fourth quadrant, 2 decimal places).\n(d) M1: W has complex amplitude 4 cis 1.2, so the amplitude of V + W is |z + 4 cis 1.2|. A1: z + 4 cis 1.2 = 13.45 - 1.27i (2 decimal places). M1: modulus of this sum. A1: amplitude 13.51 (2 decimal places).\n(e) M1: V(0.001) = 12 cos(0.1π) + 5 sin(0.1π). A1: V = 12.96 volts (2 decimal places).',
      ru: '(a) M1: R = sqrt(12^2 + 5^2), где R cos φ = 12 и R sin φ = 5. A1: R = 13,0. M1: tan φ = 5/12. A1: φ = 0,395 радиана (с точностью до 3 знаков).\n(b) M1: V(t) максимально, когда ωt - φ = 0, значит t = φ/ω. A1: t = 0,001257 с = 1,26 мс (с точностью до 2 знаков). R1: φ положительно, значит это первый положительный максимум.\n(c) M1: r = |z| = sqrt(12^2 + (-5)^2). A1: r = 13,00. A1: θ = arctan(-5/12) = -22,62 градуса (четвёртый квадрант, с точностью до 2 знаков).\n(d) M1: у W комплексная амплитуда равна 4 cis 1,2, поэтому амплитуда V + W равна |z + 4 cis 1,2|. A1: z + 4 cis 1,2 = 13,45 - 1,27i (с точностью до 2 знаков). M1: модуль этой суммы. A1: амплитуда 13,51 (с точностью до 2 знаков).\n(e) M1: V(0,001) = 12 cos(0,1π) + 5 sin(0,1π). A1: V = 12,96 вольта (с точностью до 2 знаков).',
    },
    answer: '13.0; 0.395; 1.26; 13.00; -22.62; 13.51; 12.96',
    origin: 'original',
    minutes: 16,
  },
];
