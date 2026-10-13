import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'marginal-propensity',
    term: { en: 'marginal propensity', ru: 'предельная склонность (marginal propensity)' },
    def: {
      en: 'The share of an extra unit of income that is spent, saved, taxed or imported: the change in that use divided by the change in income.',
      ru: 'Доля каждой дополнительной единицы дохода, которая тратится, сберегается, облагается налогом или уходит на импорт: изменение этого использования, делённое на изменение дохода.',
    },
    example: {
      en: 'If income rises by AED 100 bn and consumption rises by AED 70 bn, the marginal propensity to consume is 0.7.',
      ru: 'Если доход вырос на 100 млрд AED, а потребление на 70 млрд AED, предельная склонность к потреблению равна 0,7.',
    },
    pitfall: {
      en: 'A marginal propensity applies to extra income only, not to total income.',
      ru: 'Предельная склонность относится только к дополнительному доходу, а не к общему доходу.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
  },
  {
    id: 'marginal-propensity-to-consume',
    term: { en: 'marginal propensity to consume (MPC)', ru: 'предельная склонность к потреблению (marginal propensity to consume, MPC)' },
    def: {
      en: 'The proportion of an extra unit of income that households spend on consumption: the change in consumption divided by the change in income.',
      ru: 'Доля дополнительной единицы дохода, которую домохозяйства тратят на потребление: изменение потребления, делённое на изменение дохода.',
    },
    example: {
      en: 'If income rises by AED 100 bn and consumption rises by AED 80 bn, the MPC is 0.8.',
      ru: 'Если доход вырос на 100 млрд AED, а потребление на 80 млрд AED, MPC равен 0,8.',
    },
    pitfall: {
      en: 'MPC is not the average propensity to consume, which is total consumption divided by total income.',
      ru: 'MPC — не средняя склонность к потреблению, то есть общее потребление, делённое на общий доход.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
  },
  {
    id: 'marginal-propensity-to-save',
    term: { en: 'marginal propensity to save (MPS)', ru: 'предельная склонность к сбережению (marginal propensity to save, MPS)' },
    def: {
      en: 'The proportion of an extra unit of income that is saved rather than spent. In a closed economy with no taxes, MPS = 1 - MPC.',
      ru: 'Доля дополнительной единицы дохода, которая сберегается, а не тратится. В закрытой экономике без налогов MPS = 1 - MPC.',
    },
    example: {
      en: 'If the MPC is 0.7, the MPS is 0.3, so 0.3 of every extra AED of income is saved.',
      ru: 'Если MPC равен 0,7, то MPS равен 0,3, то есть 0,3 каждого дополнительного AED дохода сберегается.',
    },
    pitfall: {
      en: 'MPS describes extra income only; it is not the saving ratio of the whole economy.',
      ru: 'MPS описывает только дополнительный доход, а не долю сбережений во всём доходе экономики.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
  },
  {
    id: 'marginal-propensity-to-tax',
    term: { en: 'marginal propensity to tax (MPT)', ru: 'предельная склонность к налогообложению (marginal propensity to tax, MPT)' },
    def: {
      en: 'The proportion of an extra unit of income paid to the government in taxes, so it leaves the circular flow.',
      ru: 'Доля дополнительной единицы дохода, уплачиваемая государству в виде налогов, и поэтому выходящая из кругового потока.',
    },
    example: {
      en: 'If extra income of AED 100 bn leads to AED 20 bn of extra tax, the MPT is 0.2.',
      ru: 'Если дополнительный доход 100 млрд AED ведёт к дополнительным налогам 20 млрд AED, MPT равен 0,2.',
    },
    pitfall: {
      en: 'MPT is the tax on extra income, which can differ from the average tax rate on total income.',
      ru: 'MPT — налог с дополнительного дохода, который может отличаться от средней налоговой ставки на весь доход.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
  },
  {
    id: 'marginal-propensity-to-import',
    term: { en: 'marginal propensity to import (MPM)', ru: 'предельная склонность к импорту (marginal propensity to import, MPM)' },
    def: {
      en: 'The proportion of an extra unit of income spent on imported goods and services, which leaves the domestic circular flow.',
      ru: 'Доля дополнительной единицы дохода, которая тратится на импортные товары и услуги и поэтому выходит из внутреннего кругового потока.',
    },
    example: {
      en: 'If extra income of AED 100 bn leads to AED 15 bn of extra imports, the MPM is 0.15.',
      ru: 'Если дополнительный доход 100 млрд AED ведёт к дополнительному импорту 15 млрд AED, MPM равен 0,15.',
    },
    pitfall: {
      en: 'The larger the MPM, the smaller the multiplier, because spending on imports does not create domestic output.',
      ru: 'Чем больше MPM, тем меньше мультипликатор, потому что расходы на импорт не создают внутреннего выпуска.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
  },
  {
    id: 'multiplier',
    term: { en: 'multiplier (k)', ru: 'мультипликатор (multiplier, k)' },
    def: {
      en: 'The number of times the change in national income is larger than the initial change in injections: k = 1 / (MPS + MPT + MPM).',
      ru: 'Во сколько раз изменение национального дохода больше первоначального изменения инъекций: k = 1 / (MPS + MPT + MPM).',
    },
    example: {
      en: 'With MPS 0.1, MPT 0.1 and MPM 0.05, k = 1 / 0.25 = 4, so AED 10 bn of extra investment raises income by AED 40 bn.',
      ru: 'При MPS 0,1, MPT 0,1 и MPM 0,05 k = 1 / 0,25 = 4, поэтому дополнительные инвестиции на 10 млрд AED поднимают доход на 40 млрд AED.',
    },
    pitfall: {
      en: 'The multiplier is one divided by the sum of the leakages, not the sum itself; more leakages make k smaller.',
      ru: 'Мультипликатор равен единице, делённой на сумму изъятий, а не самой сумме; больше изъятий — меньше k.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
    sim: 'econ.multiplier',
  },
  {
    id: 'multiplier-effect',
    term: { en: 'multiplier effect', ru: 'эффект мультипликатора (multiplier effect)' },
    def: {
      en: 'The process by which an initial injection becomes income for others, who spend part of it again, so total income rises by more than the injection.',
      ru: 'Процесс, в котором первоначальная инъекция становится доходом других людей, которые тратят часть его снова, поэтому общий доход растёт больше инъекции.',
    },
    example: {
      en: 'With an MPC of 0.8, an injection of AED 100 bn creates rounds of AED 100 bn, AED 80 bn, AED 64 bn and so on, totalling AED 500 bn.',
      ru: 'При MPC 0,8 инъекция в 100 млрд AED создаёт раунды в 100 млрд AED, 80 млрд AED, 64 млрд AED и так далее, в сумме 500 млрд AED.',
    },
    pitfall: {
      en: 'The multiplier effect takes time, because each round happens in a later period; the full effect is not immediate.',
      ru: 'Эффект мультипликатора требует времени, потому что каждый раунд происходит в более поздний период; полный эффект не наступает сразу.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' },
    sim: 'econ.multiplier',
  },
];
