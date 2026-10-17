import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-15-normal-sums-clt',
  subject: 'math',
  code: '4.15',
  title: { en: 'Normal combinations and the central limit theorem', ru: 'Линейные комбинации нормальных величин и ЦПТ (Normal combinations and the central limit theorem)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 56,
  minutes: 40,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can state the distribution of a linear combination of independent normal variables, with its mean and variance',
      ru: 'Могу записать распределение линейной комбинации независимых нормальных величин, указав среднее и дисперсию',
    },
    {
      en: 'I can state that the sample mean of a normal population is N(μ, σ²/n) and use it to find probabilities',
      ru: 'Могу указать, что выборочное среднее нормальной совокупности распределено как N(μ, σ²/n), и находить по нему вероятности',
    },
    {
      en: 'I can apply the central limit theorem to the mean of a large sample from an iid sample with finite positive variance and say that the result is approximate',
      ru: 'Могу применить центральную предельную теорему к среднему большой выборки из независимых одинаково распределённых наблюдений с конечной положительной дисперсией и сказать, что результат приближённый',
    },
  ],
  termIds: ['normal-linear-combination', 'sampling-distribution-sample-mean', 'central-limit-theorem', 'standard-error-sample-mean'],
  formulaIds: ['normal-linear-combination-distribution', 'sample-mean-normal-distribution', 'clt-sample-mean-approximation', 'se-sample-mean-formula'],
  questionIds: ['q-4-15-01', 'q-4-15-02', 'q-4-15-03'],
  sources: [
    { kind: 'web', title: 'HSE, probability lecture notes (2022), §13.2 Theorem 13.4 and §13.3 Poisson limit, PDF/printed p. 60 (Russian)', url: 'https://math.hse.ru/data/2022/10/05/1742836851/HSECourse.pdf' },
    { kind: 'textbook', title: 'Oxford IB Diploma Programme: Mathematics: Applications and Interpretation HL (Oxford University Press, 2019)', locator: '13.6, printed pp. 607–612: independent normal combinations, sample means and CLT; n≥30 is a textbook heuristic' },
    { kind: 'web', title: 'ЭФ МГУ, Учебник+: Введение в эконометрику, 6.1', locator: 'Центральная предельная теорема: независимость, одинаковое распределение и конечная дисперсия; equation 6.1', url: 'https://books.econ.msu.ru/Introduction-to-Econometrics/chap06/6.1/' },
  ],
};

export default topic;
