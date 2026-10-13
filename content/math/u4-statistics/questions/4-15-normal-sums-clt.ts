import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-15-01',
    subject: 'math',
    topicIds: ['4-15-normal-sums-clt'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The lengths of two independent metal rods are normally distributed. Rod 1 has mean 40.0 cm and variance 0.36 cm². Rod 2 has mean 25.0 cm and variance 0.16 cm². Find the probability that rod 1 is more than 16 cm longer than rod 2. Give your answer correct to 3 decimal places.',
      ru: 'Длины двух независимых металлических стержней распределены нормально. У стержня 1 среднее 40,0 см и дисперсия 0,36 см². У стержня 2 среднее 25,0 см и дисперсия 0,16 см². Найдите вероятность того, что стержень 1 длиннее стержня 2 более чем на 16 см. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the difference L1 − L2 has mean 40.0 − 25.0 = 15.0 and, because the rods are independent, variance 0.36 + 0.16 = 0.52. A1: L1 − L2 ~ N(15, 0.52). M1: P(L1 − L2 > 16) = P(Z > (16 − 15)/√0.52), or the GDC normal cdf with standard deviation √0.52. A1: 0.083.',
      ru: 'M1: разность L1 − L2 имеет среднее 40,0 − 25,0 = 15,0 и, так как стержни независимы, дисперсию 0,36 + 0,16 = 0,52. A1: L1 − L2 ~ N(15; 0,52). M1: P(L1 − L2 > 16) = P(Z > (16 − 15)/√0,52) или нормальная функция распределения калькулятора со стандартным отклонением √0,52. A1: 0,083.',
    },
    answer: '0.083',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-15-02',
    subject: 'math',
    topicIds: ['4-15-normal-sums-clt'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The time, in minutes, that a customer spends at a self-service kiosk has mean 3.6 and standard deviation 2.4. The distribution is not normal. A random sample of 50 customers is taken. Using the central limit theorem, calculate the probability that the sample mean time is less than 3.2 minutes. Give your answer correct to 3 decimal places.',
      ru: 'Время в минутах, которое клиент проводит у терминала самообслуживания, имеет среднее 3,6 и стандартное отклонение 2,4. Распределение не является нормальным. Взята случайная выборка из 50 клиентов. Используя центральную предельную теорему, вычислите вероятность того, что среднее время в выборке меньше 3,2 минуты. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: by the central limit theorem, the sample mean is approximately N(3.6, 2.4²/50). A1: N(3.6, 0.1152), so the standard error is √0.1152 = 0.339. M1: P(sample mean < 3.2) = P(Z < (3.2 − 3.6)/0.339), or the GDC normal cdf with mean 3.6 and standard deviation 0.339. A1: 0.119.',
      ru: 'M1: по центральной предельной теореме выборочное среднее приближённо распределено как N(3,6; 2,4²/50). A1: N(3,6; 0,1152), стандартная ошибка равна √0,1152 = 0,339. M1: P(среднее < 3,2) = P(Z < (3,2 − 3,6)/0,339) или нормальная функция распределения калькулятора со средним 3,6 и стандартным отклонением 0,339. A1: 0,119.',
    },
    answer: '0.119',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-15-03',
    subject: 'math',
    topicIds: ['4-15-normal-sums-clt'],
    paper: 'P2',
    marks: 14,
    command: 'Write down',
    prompt: {
      en: 'A factory makes chocolate bars. The masses of the bars, in grams, are independent and normally distributed with mean 100 and variance 9.\n\n(a) Write down the distribution of T, the total mass of a pack of three bars, stating its mean and variance. [3]\n\n(b) Find P(T < 295), giving your answer correct to 3 decimal places. [3]\n\n(c) A random sample of 25 bars is taken and the sample mean mass is x̄. Find P(x̄ > 101), giving your answer correct to 3 decimal places. [3]\n\n(d) Find the least sample size n such that the standard error of the sample mean is at most 0.4 grams. [3]\n\n(e) Explain why the answer to part (c) would be approximately valid if the masses were not normally distributed, provided that the sample size is large. [2]',
      ru: 'Фабрика выпускает шоколадные плитки. Массы плиток в граммах — независимые нормальные величины со средним 100 и дисперсией 9.\n\n(a) Запишите распределение T — общей массы упаковки из трёх плиток, указав среднее и дисперсию. [3]\n\n(b) Найдите P(T < 295), ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(c) Взята случайная выборка из 25 плиток, средняя масса в ней равна x̄. Найдите P(x̄ > 101), ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(d) Найдите наименьший объём выборки n, при котором стандартная ошибка выборочного среднего не превышает 0,4 грамма. [3]\n\n(e) Объясните, почему ответ к пункту (c) был бы приблизительно верным, если бы массы не были нормальными, при условии что объём выборки велик. [2]',
    },
    markscheme: {
      en: '(a) M1: E(T) = 3 × 100 = 300 and Var(T) = 3 × 9 = 27, since the bars are independent. R1: T is normal, as a sum of independent normal variables. A1: T ~ N(300, 27).\n(b) M1: the standard deviation of T is √27 = 5.196, so T ~ N(300, 27). M1: P(T < 295) = P(Z < (295 − 300)/√27), or the GDC normal cdf. A1: 0.168.\n(c) M1: x̄ ~ N(100, 9/25) = N(100, 0.36), with standard deviation 0.6. M1: P(x̄ > 101) = P(Z > (101 − 100)/0.6), or the GDC normal cdf. A1: 0.048.\n(d) M1: standard error = 3/√n. M1: 3/√n ≤ 0.4 gives √n ≥ 7.5, so n ≥ 56.25. A1: n = 57.\n(e) R1: by the central limit theorem, the sample mean is approximately normal for large n, whatever the shape of the population. R1: its mean is 100 and its variance is 9/n, so the normal calculation in (c) becomes an approximation that improves as n grows.',
      ru: '(a) M1: E(T) = 3 × 100 = 300 и Var(T) = 3 × 9 = 27, так как плитки независимы. R1: T нормальна, как сумма независимых нормальных величин. A1: T ~ N(300, 27).\n(b) M1: стандартное отклонение T равно √27 = 5,196, поэтому T ~ N(300, 27). M1: P(T < 295) = P(Z < (295 − 300)/√27) или нормальная функция распределения калькулятора. A1: 0,168.\n(c) M1: x̄ ~ N(100; 9/25) = N(100; 0,36), стандартное отклонение 0,6. M1: P(x̄ > 101) = P(Z > (101 − 100)/0,6) или нормальная функция распределения калькулятора. A1: 0,048.\n(d) M1: стандартная ошибка = 3/√n. M1: 3/√n ≤ 0,4 даёт √n ≥ 7,5, поэтому n ≥ 56,25. A1: n = 57.\n(e) R1: по центральной предельной теореме выборочное среднее приближённо нормально при большом n, какова бы ни была форма совокупности. R1: его среднее равно 100, а дисперсия равна 9/n, поэтому расчёт в пункте (c) становится приближением, которое улучшается с ростом n.',
    },
    answer: '300; 27; 0.168; 0.048; 57',
    origin: 'original',
    minutes: 14,
  },
];
