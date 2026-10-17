import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'sample-mean-estimate',
    tex: '\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n}x_i',
    name: { en: 'Sample mean', ru: 'Выборочное среднее (sample mean)' },
    meaning: {
      en: 'The average of the n values in a sample. It is used as an estimate of the population mean.',
      ru: 'Среднее n значений выборки. Используется как оценка среднего всей совокупности.',
    },
    when: {
      en: 'For n>0, estimating a population mean from a simple random sample with accurate responses; other sampling designs may require weights. The booklet (page 9) has the weighted mean $\\bar{x} = \\dfrac{\\sum f_i x_i}{n}$; with every $f_i = 1$ it becomes this formula.',
      ru: 'При n>0 оценка среднего совокупности по простой случайной выборке с точными ответами; другие планы отбора могут требовать весов. В книжке (стр. 9) есть взвешенное среднее $\\bar{x} = \\dfrac{\\sum f_i x_i}{n}$; при всех $f_i = 1$ получается эта формула.',
    },
    syllabus: '4.1',
    inBooklet: false,
    example: {
      en: 'Heights 170, 172 and 168 cm give x-bar = 510 / 3 = 170 cm.',
      ru: 'Значения роста 170, 172 и 168 см дают x̄ = 510 / 3 = 170 см.',
    },
  },
  {
    id: 'sample-proportion-estimate',
    tex: '\\hat{p}=\\dfrac{x}{n}',
    name: { en: 'Sample proportion', ru: 'Выборочная доля (sample proportion)' },
    meaning: {
      en: 'The fraction of the sample that has a given property. It is used as an estimate of the population proportion.',
      ru: 'Доля выборки, обладающей данным свойством. Используется как оценка доли во всей совокупности.',
    },
    when: {
      en: 'For n>0, a yes/no property measured on a simple random sample with accurate responses; unequal inclusion probabilities may require weights.',
      ru: 'При n>0 свойство «да или нет» в простой случайной выборке с точными ответами; при неравных вероятностях включения могут требоваться веса.',
    },
    syllabus: '4.1',
    inBooklet: false,
    example: {
      en: '36 of 120 students own a bicycle: p-hat = 36 / 120 = 0.3.',
      ru: '36 из 120 учеников имеют велосипед: p̂ = 36 / 120 = 0,3.',
    },
  },
];
