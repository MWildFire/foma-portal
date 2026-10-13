import type { Question } from '../../../../src/contract/types';

// A4.2 questions (paper 1, section A). Both are original. The six ported questions for this topic are in ported.ts.
export const questions: Question[] = [
  {
    id: 'a4-2-q01',
    subject: 'cs',
    topicIds: ['a4-2-preprocessing'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'A bank records the monthly income, in thousands of dollars, of five loan applicants: 20, 30, 40, 60 and 100. The income feature is rescaled before training. (a) Calculate the min-max normalized value of the applicant with income 40. (b) Calculate the z-score of the same applicant. Use the population standard deviation and give both answers to 2 decimal places.',
      ru: 'Банк записывает ежемесячный доход пяти заявителей на кредит в тысячах долларов: 20, 30, 40, 60 и 100. Признак «доход» масштабируют перед обучением. (а) Вычислите нормализованное значение min-max для заявителя с доходом 40. (б) Вычислите z-оценку того же заявителя. Используйте стандартное отклонение генеральной совокупности и дайте оба ответа с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: '[1] Minimum 20 and maximum 100, so the range is 80. [1] Normalized value (40 − 20) / 80 = 0.25. [1] Mean 50 and population standard deviation √800 ≈ 28.28. [1] z = (40 − 50) / 28.28 ≈ −0.35.',
      ru: '[1] Минимум 20, максимум 100, размах 80. [1] Нормализованное значение (40 − 20) / 80 = 0,25. [1] Среднее 50 и стандартное отклонение генеральной совокупности √800 ≈ 28,28. [1] z = (40 − 50) / 28,28 ≈ −0,35.',
    },
    answer: '0.25 (min-max); -0.35 (z-score)',
    origin: 'original',
  },
  {
    id: 'a4-2-q02',
    subject: 'cs',
    topicIds: ['a4-2-preprocessing'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'A data set of 300 job applicants has missing values in three features. For each feature, suggest a suitable way to fill the gaps and give a reason. (i) Age: the values are roughly symmetric around the middle and there are no extreme values. (ii) Household income: a few very high values pull the average far above the income of most applicants. (iii) Preferred subject: a category chosen from a fixed list.',
      ru: 'В наборе данных о 300 соискателях работы есть пропуски в трёх признаках. Для каждого признака предложите подходящий способ заполнить пробелы и обоснуйте его. (i) Возраст: значения примерно симметричны относительно середины, крайних значений нет. (ii) Доход домохозяйства: несколько очень больших значений поднимают среднее далеко над доходом большинства соискателей. (iii) Предпочитаемый предмет: категория из фиксированного списка.',
    },
    markscheme: {
      en: '[1] Age: the mean, because the values are symmetric and have no extreme values, so the mean is a fair centre (the median is also acceptable with the same reason). [1] Household income: the median, because the few very high values would pull the mean up, while the median is not affected by them. [1] Preferred subject: the mode, the most frequent category, because a mean cannot be calculated for a category.',
      ru: '[1] Возраст: среднее, потому что значения симметричны и крайних нет, поэтому среднее — справедливый центр (медиана тоже подходит с тем же обоснованием). [1] Доход домохозяйства: медиана, потому что несколько очень больших значений подняли бы среднее, а медиана от них не зависит. [1] Предпочитаемый предмет: мода, то есть самая частая категория, потому что для категории среднее не вычисляется.',
    },
    origin: 'original',
  },
];
