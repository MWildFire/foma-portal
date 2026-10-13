import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-10-01',
    subject: 'math',
    topicIds: ['4-10-spearman'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Two teachers rank eight Year 12 essays from 1 (best) to 8 (worst). There are no tied ranks.\n\nTeacher A: 1, 2, 3, 4, 5, 6, 7, 8\nTeacher B: 2, 4, 1, 3, 6, 5, 8, 7\n\nCalculate Spearman\'s rank correlation coefficient r_s, correct to 3 decimal places.',
      ru: 'Два учителя ранжируют восемь сочинений 12 класса от 1 (лучшее) до 8 (худшее). Совпадающих рангов нет.\n\nУчитель A: 1, 2, 3, 4, 5, 6, 7, 8\nУчитель B: 2, 4, 1, 3, 6, 5, 8, 7\n\nВычислите коэффициент ранговой корреляции Спирмена r_s с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: differences d (A minus B): -1, -2, 2, 1, -1, 1, -1, 1. M1: sum of d squared = 14. A1: r_s = 1 − 6 × 14 / (8 × 63) = 0.833.',
      ru: 'M1: разности d (A минус B): -1, -2, 2, 1, -1, 1, -1, 1. M1: сумма квадратов d равна 14. A1: r_s = 1 − 6 × 14 / (8 × 63) = 0,833.',
    },
    answer: '0.833',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-10-02',
    subject: 'math',
    topicIds: ['4-10-spearman'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Six students sat a mathematics test and a physics test. Each test was marked out of 80. Their marks are:\n\nMathematics: 34, 58, 41, 72, 65, 49\nPhysics: 38, 50, 47, 70, 61, 44\n\nFind Spearman\'s rank correlation coefficient r_s for these marks, correct to 3 decimal places.',
      ru: 'Шесть учеников написали контрольные по математике и по физике; каждая контрольная оценивалась из 80 баллов. Их баллы:\n\nМатематика: 34, 58, 41, 72, 65, 49\nФизика: 38, 50, 47, 70, 61, 44\n\nНайдите коэффициент ранговой корреляции Спирмена r_s для этих баллов с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: rank each list from 1 (lowest). Mathematics: 1, 4, 2, 6, 5, 3. Physics: 1, 4, 3, 6, 5, 2. M1: sum of d squared = 2 (only the third and sixth pairs differ). A1: r_s = 1 − 6 × 2 / (6 × 35) = 0.943.',
      ru: 'M1: проранжируйте каждый список от 1 (наименьший). Математика: 1, 4, 2, 6, 5, 3. Физика: 1, 4, 3, 6, 5, 2. M1: сумма квадратов d равна 2 (различаются только третья и шестая пары). A1: r_s = 1 − 6 × 2 / (6 × 35) = 0,943.',
    },
    answer: '0.943',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-10-03',
    subject: 'math',
    topicIds: ['4-10-spearman'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A review website rates eight coffee shops in Dubai Marina. For each shop, x is the average customer rating (out of 5) and y is the price of a flat white in AED. The data are:\n\nRating x: 4.4, 3.9, 4.9, 3.6, 4.7, 4.1, 4.6, 4.2\nPrice y (AED): 17, 12, 65, 14, 24, 15, 22, 18\n\n(a) Rank the ratings and the prices from 1 (lowest) to 8 (highest), then find the sum of the squared differences of the ranks, Σd². [3]\n\n(b) Find Spearman\'s rank correlation coefficient r_s, correct to 3 decimal places. [2]\n\n(c) Find Pearson\'s product-moment correlation coefficient r for the original data, correct to 3 decimal places. [2]\n\n(d) Remove the shop with a price of 65 AED. Find r_s and r for the remaining seven shops, each correct to 3 decimal places. [4]\n\n(e) Explain which coefficient better describes the link between rating and price for these data. Refer to the effect of the shop charging 65 AED in your answer. [3]',
      ru: 'Сайт отзывов оценивает восемь кофеен в районе Дубай-Марина. Для каждой кофейни x — средний рейтинг клиентов (из 5), y — цена флэт уайта в AED. Данные:\n\nРейтинг x: 4,4; 3,9; 4,9; 3,6; 4,7; 4,1; 4,6; 4,2\nЦена y (AED): 17, 12, 65, 14, 24, 15, 22, 18\n\n(a) Проранжируйте рейтинги и цены от 1 (наименьшее) до 8 (наибольшее), затем найдите сумму квадратов разностей рангов Σd². [3]\n\n(b) Найдите коэффициент ранговой корреляции Спирмена r_s с точностью до 3 знаков после запятой. [2]\n\n(c) Найдите коэффициент корреляции Пирсона r для исходных данных с точностью до 3 знаков после запятой. [2]\n\n(d) Исключите кофейню с ценой 65 AED. Найдите r_s и r для оставшихся семи кофеен, каждое с точностью до 3 знаков после запятой. [4]\n\n(e) Объясните, какой коэффициент лучше описывает связь между рейтингом и ценой в этих данных. В ответе сошлитесь на влияние кофейни, которая берёт 65 AED. [3]',
    },
    markscheme: {
      en: '(a) M1: ranks of the ratings 5, 2, 8, 1, 7, 3, 6, 4 and of the prices 4, 1, 8, 2, 7, 3, 6, 5. M1: differences d: 1, 1, 0, -1, 0, 0, 0, -1. A1: Σd² = 4.\n(b) M1: r_s = 1 − 6 × 4 / (8 × 63). A1: r_s = 0.952.\n(c) M1: GDC two-variable statistics with the original data. A1: r = 0.714.\n(d) M1: remove the 65 AED shop, so n = 7. A1: r_s = 1 − 6 × 4 / (7 × 48) = 0.929. M1: GDC for the seven pairs. A1: r = 0.889.\n(e) R1: r_s hardly changes (0.952 with eight shops, 0.929 with seven), because it uses only ranks and the order of the shops is almost unchanged. R1: r rises from 0.714 to 0.889 when the outlier is removed, because the very high price pulls the linear fit. R1: r_s is the better measure here, since the link is consistently increasing and the outlier distorts r.',
      ru: '(a) M1: ранги рейтингов 5, 2, 8, 1, 7, 3, 6, 4 и ранги цен 4, 1, 8, 2, 7, 3, 6, 5. M1: разности d: 1, 1, 0, -1, 0, 0, 0, -1. A1: Σd² = 4.\n(b) M1: r_s = 1 − 6 × 4 / (8 × 63). A1: r_s = 0,952.\n(c) M1: статистика двух переменных на калькуляторе для исходных данных. A1: r = 0,714.\n(d) M1: исключите кофейню с ценой 65 AED, n = 7. A1: r_s = 1 − 6 × 4 / (7 × 48) = 0,929. M1: калькулятор для семи пар. A1: r = 0,889.\n(e) R1: r_s почти не меняется (0,952 при восьми кофейнях, 0,929 при семи), потому что он использует только ранги, а порядок кофеен почти не меняется. R1: r возрастает с 0,714 до 0,889 после исключения выброса, потому что очень высокая цена тянет линейную прямую. R1: здесь лучше подходит r_s, поскольку связь последовательно возрастающая, а выброс искажает r.',
    },
    answer: '4; 0.952; 0.714; 0.929; 0.889',
    origin: 'original',
    minutes: 14,
  },
];
