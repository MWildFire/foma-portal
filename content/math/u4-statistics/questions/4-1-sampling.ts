import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-1-01',
    subject: 'math',
    topicIds: ['4-1-sampling'],
    paper: 'P1',
    marks: 3,
    command: 'Estimate',
    prompt: {
      en: 'A random sample of 40 students is taken from a school of 800 students. 18 of the students in the sample walk to school. Estimate the number of students in the whole school who walk to school.',
      ru: 'Случайную выборку из 40 учеников берут в школе, где 800 учеников. 18 учеников из выборки ходят в школу пешком. Оцените, сколько учеников всей школы ходят в школу пешком.',
    },
    markscheme: {
      en: 'M1: proportion in the sample is 18 / 40 = 0.45. M1: estimated number is 0.45 × 800. A1: 360 students.',
      ru: 'M1: доля в выборке 18 / 40 = 0,45. M1: оценка числа учеников 0,45 × 800. A1: 360 учеников.',
    },
    answer: '360',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-1-02',
    subject: 'math',
    topicIds: ['4-1-sampling'],
    paper: 'P1',
    marks: 2,
    command: 'Estimate',
    prompt: {
      en: 'The heights, in cm, of a random sample of 5 students are 162, 170, 158, 175 and 165. Estimate the mean height of all 600 students in the school. Give your answer correct to 1 decimal place.',
      ru: 'Рост (в см) случайной выборки из 5 учеников: 162, 170, 158, 175 и 165. Оцените средний рост всех 600 учеников школы. Дайте ответ с точностью до 1 знака после запятой.',
    },
    markscheme: {
      en: 'M1: sum of the heights is 830, so the sample mean is 830 / 5. A1: 166.0 cm.',
      ru: 'M1: сумма роста равна 830, поэтому выборочное среднее равно 830 / 5. A1: 166,0 см.',
    },
    answer: '166.0',
    origin: 'original',
    minutes: 2,
  },
  {
    id: 'q-4-1-03',
    subject: 'math',
    topicIds: ['4-1-sampling'],
    paper: 'P2',
    marks: 14,
    command: 'Explain',
    prompt: {
      en: 'A school in Dubai has 1200 students. The principal wants to estimate the proportion of students who travel to school by bus. The full list of the 1200 students is available as a numbered list.\n\n(a) Explain why surveying the first 60 students who arrive at the main gate in the morning is not a random sample. [3]\n\n(b) Describe how the principal could choose a random sample of 60 students from the list. [3]\n\n(c) In a random sample of 60 students, 42 travel by bus. Estimate the proportion of all 1200 students who travel by bus. Give your answer to 3 decimal places. [2]\n\n(d) Use your answer to part (c) to estimate the number of students who travel by bus. [2]\n\n(e) A second random sample of 8 bus students records their journey times, in minutes: 12, 15, 18, 14, 16, 45, 13, 17.\n(i) Find the mean journey time with the value 45 included, and the mean with it removed. Give both answers to 2 decimal places. [2]\n(ii) Comment on the effect of the value 45 on the mean, and on whether the mean describes this sample well. [2]',
      ru: 'Школа в Дубае насчитывает 1200 учеников. Директор хочет оценить долю учеников, которые добираются до школы на автобусе. Полный список из 1200 учеников есть в виде нумерованного списка.\n\n(a) Объясните, почему опрос первых 60 учеников, которые утром приходят к главным воротам, не является случайной выборкой. [3]\n\n(b) Опишите, как директор может выбрать случайную выборку из 60 учеников по этому списку. [3]\n\n(c) В случайной выборке из 60 учеников 42 добираются на автобусе. Оцените долю всех 1200 учеников, которые добираются на автобусе. Дайте ответ с точностью до 3 знаков после запятой. [2]\n\n(d) Используя ответ на часть (c), оцените число учеников, которые добираются на автобусе. [2]\n\n(e) Вторая случайная выборка из 8 учеников, которые едут на автобусе, записала время в пути в минутах: 12, 15, 18, 14, 16, 45, 13, 17.\n(i) Найдите среднее время в пути с учётом значения 45 и среднее без него. Дайте оба ответа с точностью до 2 знаков после запятой. [2]\n(ii) Прокомментируйте влияние значения 45 на среднее и на то, хорошо ли среднее описывает эту выборку. [2]',
    },
    markscheme: {
      en: '(a) R1: the first 60 students are chosen by position at the gate, not at random, so not every student has a known chance of selection. R1: students who arrive early may share one travel method, so the sample is biased. R1: a random method using the numbered list gives every student the same chance.\n(b) M1: give each student a number from 1 to 1200 using the list. M1: use a random number generator or random number table to pick 60 different numbers between 1 and 1200. A1: the 60 students with those numbers form a random sample.\n(c) M1: p-hat = 42 / 60 = 0.7. A1: 0.700.\n(d) M1: estimate is 0.700 × 1200. A1: 840 students.\n(e)(i) M1: sums 150 and 105 with divisors 8 and 7. A1: 18.75 with 45 included and 15.00 with 45 removed.\n(e)(ii) R1: removing 45 lowers the mean by 3.75 minutes, so the single value pulls the mean up. R1: the mean is not a good summary of this sample; the median, which is less affected by 45, or a check of the value describes the sample better.',
      ru: '(a) R1: первые 60 учеников выбраны по месту у ворот, а не случайно, поэтому у каждого ученика нет известного шанса попасть в выборку. R1: ученики, которые приходят рано, могут добираться одним способом, поэтому выборка смещена. R1: случайный метод по нумерованному списку даёт каждому ученику одинаковый шанс.\n(b) M1: присвоить каждому ученику номер от 1 до 1200 по списку. M1: с помощью генератора случайных чисел или таблицы случайных чисел выбрать 60 различных чисел от 1 до 1200. A1: 60 учеников с этими номерами образуют случайную выборку.\n(c) M1: p̂ = 42 / 60 = 0,7. A1: 0,700.\n(d) M1: оценка равна 0,700 × 1200. A1: 840 учеников.\n(e)(i) M1: суммы 150 и 105 с делителями 8 и 7. A1: 18,75 с учётом 45 и 15,00 без 45.\n(e)(ii) R1: без 45 среднее уменьшается на 3,75 минуты, значит одно значение тянет среднее вверх. R1: среднее плохо описывает эту выборку; лучше описывает медиана, которая меньше зависит от 45, или проверка этого значения.',
    },
    answer: '0.700; 840; 18.75; 15.00',
    origin: 'original',
    minutes: 14,
  },
];
