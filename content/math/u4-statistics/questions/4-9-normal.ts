import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-9-01',
    subject: 'math',
    topicIds: ['4-9-normal'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A machine fills bags of flour. The mass of a bag, $X$ kg, is normally distributed with mean 1.00 kg and standard deviation 0.02 kg. Find the probability that a randomly chosen bag has a mass between 0.97 kg and 1.03 kg. Give your answer correct to 3 decimal places.',
      ru: 'Машина наполняет мешки с мукой. Масса мешка $X$ кг распределена нормально со средним 1,00 кг и стандартным отклонением 0,02 кг. Найдите вероятность того, что масса случайно выбранного мешка находится в пределах от 0,97 кг до 1,03 кг. Ответ дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: standardise: z = (0.97 − 1.00)/0.02 = −1.5 and z = (1.03 − 1.00)/0.02 = 1.5. M1: P(−1.5 < Z < 1.5), or the normal cdf with μ = 1.00 and σ = 0.02 on the GDC. A1: 0.866 (3 decimal places).',
      ru: 'M1: стандартизация: z = (0,97 − 1,00)/0,02 = −1,5 и z = (1,03 − 1,00)/0,02 = 1,5. M1: P(−1,5 < Z < 1,5) или normal cdf с μ = 1,00 и σ = 0,02 на калькуляторе. A1: 0,866 (с точностью до 3 знаков).',
    },
    answer: '0.866',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-9-02',
    subject: 'math',
    topicIds: ['4-9-normal'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The scores of students in a mathematics test are normally distributed with mean 64 and standard deviation 9. Grade A is awarded to the top 10% of students. Calculate the lowest score, $k$, that receives grade A. Give your answer correct to 2 decimal places.',
      ru: 'Баллы учеников на контрольной по математике распределены нормально со средним 64 и стандартным отклонением 9. Оценку «отлично» получают 10% лучших учеников. Вычислите наименьший балл $k$, при котором ученик получает оценку «отлично». Ответ дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: P(X ≥ k) = 0.1, so P(X ≤ k) = 0.9. M1: inverse normal with μ = 64, σ = 9 and area 0.9 to the left (or k = μ + σz, where z is the inverse normal of 0.9). A1: k = 75.53 (2 decimal places).',
      ru: 'M1: P(X ≥ k) = 0,1, поэтому P(X ≤ k) = 0,9. M1: обратная нормальная функция с μ = 64, σ = 9 и площадью 0,9 слева (или k = μ + σz, где z — обратное нормальное значение для 0,9). A1: k = 75,53 (с точностью до 2 знаков после запятой).',
    },
    answer: '75.53',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-9-03',
    subject: 'math',
    topicIds: ['4-9-normal'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A courier company in Dubai records the masses of parcels. The mass of a parcel, $X$ kg, is normally distributed with mean 12 kg and standard deviation 2.5 kg. Give all probabilities correct to 3 decimal places, and give $m$ correct to 2 decimal places.\n\n(a) Find the probability that a parcel has a mass greater than 15 kg. [2]\n\n(b) Find $P(9 \\le X \\le 15)$. [2]\n\n(c) Find the value of $m$ such that 20% of parcels have a mass less than $m$ kg. [3]\n\n(d) A courier selects 8 parcels at random. Find the probability that exactly 2 of them have a mass greater than 15 kg. [3]\n\n(e) Find the least number of parcels, $n$, such that the probability that at least one of $n$ randomly selected parcels has a mass greater than 15 kg is greater than 0.9. [4]',
      ru: 'Курьерская компания в Дубае фиксирует массу посылок. Масса посылки $X$ кг распределена нормально со средним 12 кг и стандартным отклонением 2,5 кг. Все вероятности давайте с точностью до 3 знаков после запятой, а $m$ — с точностью до 2 знаков после запятой.\n\n(a) Найдите вероятность того, что масса посылки больше 15 кг. [2]\n\n(b) Найдите $P(9 \\le X \\le 15)$. [2]\n\n(c) Найдите значение $m$, при котором 20% посылок имеют массу меньше $m$ кг. [3]\n\n(d) Курьер выбирает наугад 8 посылок. Найдите вероятность того, что ровно у двух из них масса больше 15 кг. [3]\n\n(e) Найдите наименьшее количество посылок $n$, при котором вероятность того, что хотя бы у одной из $n$ наугад выбранных посылок масса больше 15 кг, превышает 0,9. [4]',
    },
    markscheme: {
      en: '(a) M1: standardise: z = (15 − 12)/2.5 = 1.2. A1: P(X > 15) = 0.115 (3 decimal places).\n(b) M1: P(9 ≤ X ≤ 15) = P(X ≤ 15) − P(X ≤ 9), or use the symmetry about the mean. A1: 0.770 (3 decimal places).\n(c) M1: the area to the left of m is 0.2. M1: z is the inverse normal of 0.2, which is negative, so m = μ + σz. A1: m = 9.90 (2 decimal places).\n(d) M1: X ~ B(8, p) with p = P(X > 15) from part (a), using the unrounded value. M1: P(exactly 2) = C(8, 2) × p^2 × (1 − p)^6 (or the binomial probability function). A1: 0.178 (3 decimal places).\n(e) M1: P(at least one of n parcels has mass greater than 15 kg) = 1 − (1 − p)^n, which must be greater than 0.9. M1: a GDC table of this probability for increasing n, or trial values. A1: n = 19. A1: n = 18 gives a probability just below 0.9 and n = 19 gives a probability just above it, so 19 is the least value.',
      ru: '(a) M1: стандартизация: z = (15 − 12)/2,5 = 1,2. A1: P(X > 15) = 0,115 (с точностью до 3 знаков).\n(b) M1: P(9 ≤ X ≤ 15) = P(X ≤ 15) − P(X ≤ 9) или симметрия относительно среднего. A1: 0,770 (с точностью до 3 знаков).\n(c) M1: площадь слева от m равна 0,2. M1: z — обратное нормальное значение для 0,2, оно отрицательное, поэтому m = μ + σz. A1: m = 9,90 (с точностью до 2 знаков).\n(d) M1: X ~ B(8; p), где p = P(X > 15) из пункта (a); используйте неокруглённое значение. M1: P(ровно 2) = C(8, 2) × p^2 × (1 − p)^6 (или функция биномиальной вероятности). A1: 0,178 (с точностью до 3 знаков).\n(e) M1: P(хотя бы у одной из n посылок масса больше 15 кг) = 1 − (1 − p)^n, это должно быть больше 0,9. M1: таблица калькулятора для этой вероятности при возрастающем n или подбор значений. A1: n = 19. A1: при n = 18 вероятность чуть меньше 0,9, а при n = 19 чуть больше, поэтому 19 — наименьшее значение.',
    },
    answer: '0.115; 0.770; 9.90; 0.178; 19',
    origin: 'original',
    minutes: 14,
  },
];
