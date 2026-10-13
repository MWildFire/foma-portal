import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-16-01',
    subject: 'math',
    topicIds: ['4-16-confidence-intervals'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The masses of bags of coffee filled by a machine are normally distributed with known standard deviation 2.0 g. A random sample of 16 bags has mean mass 251.4 g. Calculate a 90% confidence interval for the mean mass of bags filled by this machine. Give both end points correct to 2 decimal places.',
      ru: 'Массы пакетов кофе, которые фасует машина, распределены нормально с известным стандартным отклонением 2,0 г. Случайная выборка из 16 пакетов имеет среднюю массу 251,4 г. Вычислите 90% доверительный интервал для средней массы пакетов, которые фасует эта машина. Оба конца интервала дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: z* = 1.645 for 90% confidence (the inverse normal of 0.95). M1: standard error = 2.0/√16 = 0.5. A1: margin of error = 1.645 × 0.5 ≈ 0.822. A1: 90% confidence interval is (250.58, 252.22).',
      ru: 'M1: z* = 1,645 для 90% уровня доверия (обратная нормальная функция для 0,95). M1: стандартная ошибка = 2,0/√16 = 0,5. A1: погрешность = 1,645 × 0,5 ≈ 0,822. A1: 90% доверительный интервал (250,58; 252,22).',
    },
    answer: '250.58; 252.22',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-16-02',
    subject: 'math',
    topicIds: ['4-16-confidence-intervals'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A random sample of 10 waiting times at a clinic is taken from a normal population with unknown variance. The sample mean is 14.6 minutes and the sample standard deviation, with divisor n − 1, is 2.1 minutes. Find a 95% confidence interval for the population mean. Give both end points correct to 2 decimal places.',
      ru: 'Случайная выборка из 10 времён ожидания в клинике взята из нормальной совокупности с неизвестной дисперсией. Выборочное среднее равно 14,6 минуты, а выборочное стандартное отклонение с делителем n − 1 равно 2,1 минуты. Найдите 95% доверительный интервал для среднего генеральной совокупности. Оба конца интервала дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: t* = 2.262 with 9 degrees of freedom. M1: standard error = 2.1/√10 = 0.664. A1: 95% confidence interval is (13.10, 16.10).',
      ru: 'M1: t* = 2,262 при 9 степенях свободы. M1: стандартная ошибка = 2,1/√10 = 0,664. A1: 95% доверительный интервал (13,10; 16,10).',
    },
    answer: '13.10; 16.10',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-16-03',
    subject: 'math',
    topicIds: ['4-16-confidence-intervals'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A bottling plant fills water bottles. The volumes, in ml, are normally distributed. A random sample of 15 bottles has mean volume 500.8 ml and sample standard deviation (divisor n − 1) 3.2 ml.\n\n(a) Explain why a t interval, rather than a z interval, should be used to estimate the mean volume. [2]\n\n(b) Find a 95% confidence interval for the mean volume of bottles from this plant. Give both end points correct to 2 decimal places. [3]\n\n(c) Interpret the interval found in part (b). [2]\n\n(d) Find a 99% confidence interval for the mean volume, using the same sample. Give both end points correct to 2 decimal places. [4]\n\n(e) Assume that the population standard deviation is known to be 3.2 ml. Find the least sample size n for which a 95% confidence interval for the mean volume has a margin of error of at most 1 ml. [3]',
      ru: 'Завод разливает питьевую воду в бутылки. Объёмы в мл распределены нормально. Случайная выборка из 15 бутылок имеет средний объём 500,8 мл, а выборочное стандартное отклонение (с делителем n − 1) равно 3,2 мл.\n\n(a) Объясните, почему для оценки среднего объёма следует использовать t-интервал, а не z-интервал. [2]\n\n(b) Найдите 95% доверительный интервал для среднего объёма бутылок с этого завода. Оба конца интервала дайте с точностью до 2 знаков после запятой. [3]\n\n(c) Интерпретируйте интервал, найденный в пункте (b). [2]\n\n(d) Найдите 99% доверительный интервал для среднего объёма по той же выборке. Оба конца интервала дайте с точностью до 2 знаков после запятой. [4]\n\n(e) Предположим, что стандартное отклонение совокупности известно и равно 3,2 мл. Найдите наименьший объём выборки n, при котором 95% доверительный интервал для среднего объёма имеет погрешность не более 1 мл. [3]',
    },
    markscheme: {
      en: '(a) R1: σ is unknown and is estimated by s, so the extra uncertainty of the estimate must be allowed for. R1: n = 15 is small and the population is normal, so the t distribution with 14 degrees of freedom is used.\n(b) M1: t* = 2.145 with 14 degrees of freedom. M1: standard error = 3.2/√15 = 0.826. A1: 95% confidence interval is (499.03, 502.57).\n(c) R1: we are 95% confident that the mean volume of bottles from this plant lies between 499.03 ml and 502.57 ml. R1: the interval is about the mean volume, not about the volume of an individual bottle.\n(d) M1: t* = 2.977 with 14 degrees of freedom. M1: margin of error = 2.977 × 0.826 ≈ 2.46. A1: lower end point 498.34. A1: upper end point 503.26.\n(e) M1: z* = 1.960 for 95%. M1: n ≥ (z*σ/E)² = (1.960 × 3.2/1)² = 39.3. A1: least n = 40.',
      ru: '(a) R1: σ неизвестна и оценивается через s, поэтому нужно учесть дополнительную неопределённость оценки. R1: n = 15 мало, а совокупность нормальна, поэтому используется t-распределение с 14 степенями свободы.\n(b) M1: t* = 2,145 при 14 степенях свободы. M1: стандартная ошибка = 3,2/√15 = 0,826. A1: 95% доверительный интервал (499,03; 502,57).\n(c) R1: с уровнем доверия 95% мы уверены, что средний объём бутылок с этого завода лежит между 499,03 мл и 502,57 мл. R1: интервал относится к среднему объёму, а не к объёму отдельной бутылки.\n(d) M1: t* = 2,977 при 14 степенях свободы. M1: погрешность = 2,977 × 0,826 ≈ 2,46. A1: нижний конец 498,34. A1: верхний конец 503,26.\n(e) M1: z* = 1,960 для 95%. M1: n ≥ (z*σ/E)² = (1,960 × 3,2/1)² = 39,3. A1: наименьшее n = 40.',
    },
    answer: '499.03; 502.57; 498.34; 503.26; 40',
    origin: 'original',
    minutes: 14,
  },
];
