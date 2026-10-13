import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'spearman-rs-d-formula',
    tex: 'r_s=1-\\dfrac{6\\sum d_i^{2}}{n(n^{2}-1)}',
    name: {
      en: 'Spearman\'s rank correlation coefficient (d-formula)',
      ru: 'коэффициент ранговой корреляции Спирмена (формула через d) (Spearman\'s rank correlation coefficient (d-formula))',
    },
    meaning: {
      en: 'The difference $d_i$ is the gap between the two ranks of item i, and n is the number of items. Use it only when no two ranks are tied.',
      ru: 'Разность $d_i$ — это расстояние между двумя рангами объекта i, n — число объектов. Применяйте её только тогда, когда никакие ранги не совпадают.',
    },
    when: {
      en: 'Ranked data with no ties, for example two judges ordering the same items.',
      ru: 'Ранговые данные без совпадающих рангов, например порядок одних и тех же объектов у двух экспертов.',
    },
    syllabus: '4.10',
    inBooklet: false,
    example: {
      en: 'For the bakery example: n = 6 and the sum of d squared is 6, so r_s = 1 − 6 × 6 / (6 × 35) = 0.829 to 3 decimal places.',
      ru: 'Для примера с пекарнями: n = 6 и сумма квадратов d равна 6, поэтому r_s = 1 − 6 × 6 / (6 × 35) = 0,829 с точностью до 3 знаков.',
    },
  },
  {
    id: 'spearman-rs-as-ranks',
    tex: 'r_s=\\dfrac{\\sum (R_i-\\bar{R})(S_i-\\bar{S})}{\\sqrt{\\sum (R_i-\\bar{R})^{2}\\,\\sum (S_i-\\bar{S})^{2}}}',
    name: {
      en: 'Spearman\'s r_s as Pearson\'s r applied to ranks',
      ru: 'r_s как коэффициент Пирсона, применённый к рангам (Spearman\'s r_s as Pearson\'s r applied to ranks)',
    },
    meaning: {
      en: 'R_i and S_i are the ranks of item i on the two variables, and $\\bar{R}$ and $\\bar{S}$ are the mean ranks.',
      ru: 'R_i и S_i — ранги объекта i по двум величинам, $\\bar{R}$ и $\\bar{S}$ — средние ранги.',
    },
    when: {
      en: 'Ties are present (give tied values the average of their ranks), or to see why r_s behaves like Pearson\'s r.',
      ru: 'Есть совпадающие значения (им присваивают среднее из их рангов) или нужно понять, почему r_s ведёт себя как коэффициент Пирсона.',
    },
    syllabus: '4.10',
    inBooklet: false,
  },
];
