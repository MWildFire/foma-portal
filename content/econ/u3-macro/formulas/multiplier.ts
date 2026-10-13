import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'mps',
    tex: 'MPS = 1 - MPC',
    name: { en: 'Marginal propensity to save (MPS)', ru: 'Предельная склонность к сбережению (MPS)' },
    meaning: {
      en: 'The share of each extra unit of income that is saved, found from the share that is consumed.',
      ru: 'Доля каждой дополнительной единицы дохода, которая сберегается; находится через долю, которая потребляется.',
    },
    when: {
      en: 'A closed economy with no taxes, where extra income is either consumed or saved.',
      ru: 'В закрытой экономике без налогов, где дополнительный доход либо потребляется, либо сберегается.',
    },
    syllabus: '3.2',
    units: 'ratio (0 to 1)',
    example: {
      en: 'MPC = 0.6, so MPS = 1 - 0.6 = 0.4.',
      ru: 'MPC = 0,6, значит MPS = 1 - 0,6 = 0,4.',
    },
  },
  {
    id: 'multiplier',
    tex: 'k = \\dfrac{1}{MPS + MPT + MPM}',
    name: { en: 'Multiplier with leakages (k)', ru: 'Мультипликатор с изъятиями (k)' },
    meaning: {
      en: 'The change in national income per unit change in injections, where MPS, MPT and MPM are the marginal propensities to save, tax and import.',
      ru: 'Изменение национального дохода на единицу изменения инъекций; MPS, MPT и MPM — предельные склонности к сбережению, налогообложению и импорту.',
    },
    when: {
      en: 'An open economy with taxes and imports, or any economy where withdrawals leave the circular flow.',
      ru: 'Открытая экономика с налогами и импортом или любая экономика, где изъятия выводят деньги из кругового потока.',
    },
    syllabus: '3.2',
    units: 'number of times',
    example: {
      en: 'MPS 0.1, MPT 0.1 and MPM 0.2: k = 1 / (0.1 + 0.1 + 0.2) = 1 / 0.4 = 2.5.',
      ru: 'MPS 0,1, MPT 0,1 и MPM 0,2: k = 1 / (0,1 + 0,1 + 0,2) = 1 / 0,4 = 2,5.',
    },
  },
  {
    id: 'multiplier-mpc',
    tex: 'k = \\dfrac{1}{1 - MPC}',
    name: { en: 'Multiplier from the MPC (closed economy, no tax)', ru: 'Мультипликатор через MPC (закрытая экономика без налогов)' },
    meaning: {
      en: 'The change in national income per unit change in injections when all extra income is either consumed or saved.',
      ru: 'Изменение национального дохода на единицу изменения инъекций, когда весь дополнительный доход либо потребляется, либо сберегается.',
    },
    when: {
      en: 'A closed economy with no taxes, where the MPC is given.',
      ru: 'В закрытой экономике без налогов, когда дан MPC.',
    },
    syllabus: '3.2',
    units: 'number of times',
    example: {
      en: 'MPC = 0.8: k = 1 / (1 - 0.8) = 1 / 0.2 = 5.',
      ru: 'При MPC = 0,8: k = 1 / (1 - 0,8) = 1 / 0,2 = 5.',
    },
  },
];
