import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.16',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'confidence-interval-mean',
    term: { en: 'confidence interval for a mean', ru: 'доверительный интервал для среднего (confidence interval for a mean)' },
    def: {
      en: 'An interval $(a, b)$ calculated from sample data to estimate the population mean $\\mu$. If many samples were taken and an interval was built from each one by the same method, the stated percentage of those intervals would contain $\\mu$.',
      ru: 'Интервал $(a, b)$, вычисленный по данным выборки для оценки среднего генеральной совокупности $\\mu$. Если взять много выборок и построить по каждой интервал одним и тем же методом, то указанная доля этих интервалов содержала бы $\\mu$.',
    },
    syllabus: '4.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The interval is random, while $\\mu$ is fixed. Write "we are 95% confident that $\\mu$ lies between ...", not "there is a 95% probability that $\\mu$ lies between ...".',
      ru: 'Интервал случаен, а $\\mu$ фиксировано. Пишите «с уровнем доверия 95% мы уверены, что $\\mu$ лежит между ...», а не «с вероятностью 95% $\\mu$ лежит между ...».',
    },
  },
  {
    id: 'confidence-level',
    term: { en: 'confidence level', ru: 'уровень доверия (confidence level)' },
    def: {
      en: 'The percentage, such as 95%, that describes how often the method captures the population mean in repeated samples. A higher confidence level gives a wider interval.',
      ru: 'Процент, например 95%, показывающий, как часто метод при повторных выборках накрывает среднее генеральной совокупности. Более высокий уровень доверия даёт более широкий интервал.',
    },
    syllabus: '4.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Raising the confidence level from 95% to 99% widens the interval. It does not make the estimate more precise.',
      ru: 'Повышение уровня доверия с 95% до 99% расширяет интервал. Точность оценки при этом не растёт.',
    },
  },
  {
    id: 'margin-of-error',
    term: { en: 'margin of error', ru: 'погрешность, предельная ошибка (margin of error)' },
    def: {
      en: 'Half the width of a confidence interval for a mean: the amount, $z^{*}\\sigma/\\sqrt{n}$ or $t^{*}s_{n-1}/\\sqrt{n}$, that is added to and subtracted from the sample mean.',
      ru: 'Половина ширины доверительного интервала для среднего: величина $z^{*}\\sigma/\\sqrt{n}$ или $t^{*}s_{n-1}/\\sqrt{n}$, которую прибавляют к выборочному среднему и вычитают из него.',
    },
    syllabus: '4.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The margin of error is not the interval. When the question asks for an interval, give both end points.',
      ru: 'Погрешность — это не интервал. Если в вопросе просят интервал, запишите оба его конца.',
    },
  },
  {
    id: 't-distribution-df',
    term: { en: 'Student t-distribution with n - 1 degrees of freedom', ru: 'распределение Стьюдента (t) с n − 1 степенями свободы (Student t-distribution with n - 1 degrees of freedom)' },
    def: {
      en: 'The distribution used for the mean of a normal population when $\\sigma$ is unknown and is replaced by $s_{n-1}$. It has heavier tails than the normal distribution and approaches it as $n$ grows.',
      ru: 'Распределение, которое используют для среднего нормальной совокупности, когда $\\sigma$ неизвестна и заменяется на $s_{n-1}$. Его хвосты тяжелее, чем у нормального распределения; при росте $n$ оно приближается к нему.',
    },
    syllabus: '4.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The degrees of freedom are $n - 1$, not $n$. Using $z^{*}$ when $\\sigma$ is unknown gives an interval that is too narrow.',
      ru: 'Число степеней свободы равно $n - 1$, а не $n$. Использование $z^{*}$ при неизвестной $\\sigma$ даёт слишком узкий интервал.',
    },
  },
];
