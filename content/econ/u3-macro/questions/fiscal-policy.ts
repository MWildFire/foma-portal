import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-fiscal-policy-01',
    subject: 'econ',
    topicIds: ['fiscal-policy'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Tax revenue is AED 540 million and government spending is AED 610 million. Calculate the budget balance. Give your answer in AED million as a whole number, with a minus sign if it is a deficit.',
      ru: 'Налоговые поступления составляют 540 млн AED, а государственные расходы — 610 млн AED. Рассчитайте бюджетный баланс. Дайте ответ в млн AED целым числом, со знаком минус, если это дефицит.',
    },
    markscheme: {
      en: '1 mark: budget balance = tax revenue - government spending = 540 - 610. 1 mark: = -70, a deficit of AED 70 million (the minus sign shows the deficit).',
      ru: '1 балл: бюджетный баланс = налоговые поступления - государственные расходы = 540 - 610. 1 балл: = -70, дефицит 70 млн AED (знак минус показывает дефицит).',
    },
    answer: '-70',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-fiscal-policy-02',
    subject: 'econ',
    topicIds: ['fiscal-policy'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'In an open economy the marginal propensity to save is 0.2, the marginal propensity to tax is 0.25 and the marginal propensity to import is 0.15. Calculate the value of the multiplier. Give your answer to two decimal places.',
      ru: 'В открытой экономике предельная склонность к сбережению равна 0,2, предельная склонность к налогам — 0,25, а предельная склонность к импорту — 0,15. Рассчитайте значение мультипликатора. Дайте ответ с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: leakages MPS + MPT + MPM = 0.2 + 0.25 + 0.15 = 0.6. 1 mark: k = 1 / 0.6 = 1.67 (to two decimal places).',
      ru: '1 балл: изъятия MPS + MPT + MPM = 0,2 + 0,25 + 0,15 = 0,6. 1 балл: k = 1 / 0,6 = 1,67 (с двумя знаками после запятой).',
    },
    answer: '1.67',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-fiscal-policy-03',
    subject: 'econ',
    topicIds: ['fiscal-policy'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how automatic stabilizers reduce the size of fluctuations in national income during a recession, without any new decision by the government.',
      ru: 'Объясните, как автоматические стабилизаторы уменьшают размах колебаний национального дохода в рецессию, без каких-либо новых решений правительства.',
    },
    markscheme: {
      en: '1 mark: in a recession, incomes and spending fall. 1 mark: income tax is progressive, so tax revenue falls by a larger percentage than income and disposable income falls by less. 1 mark: spending on unemployment benefits rises automatically as more people lose their jobs. 1 mark: this cushions the fall in aggregate demand, so the fall in output and income is smaller.',
      ru: '1 балл: в рецессию доходы и расходы падают. 1 балл: подоходный налог прогрессивный, поэтому налоговые поступления падают в большем процентном выражении, чем доходы, и располагаемый доход падает меньше. 1 балл: расходы на пособия по безработице автоматически растут, когда всё больше людей теряют работу. 1 балл: это смягчает падение совокупного спроса (aggregate demand), поэтому падение выпуска и дохода меньше.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-fiscal-policy-04',
    subject: 'econ',
    topicIds: ['fiscal-policy'],
    paper: 'P3',
    marks: 6,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of expansionary fiscal policy to reduce unemployment in an economy that already has a large budget deficit and a negative output gap.',
      ru: 'Оцените использование экспансионистской фискальной политики для снижения безработицы в экономике, где уже есть большой бюджетный дефицит и отрицательный разрыв выпуска (output gap).',
    },
    markscheme: {
      en: '1 mark: expansionary policy shifts aggregate demand to the right, so output rises and cyclical unemployment falls. 1 mark: a negative output gap means spare capacity, so the multiplier can raise income by more than the spending. 1 mark: the large deficit means more borrowing, a higher national debt and larger future interest payments. 1 mark: crowding out: higher interest rates may reduce private investment and offset part of the effect. 1 mark: time lags (recognition, decision, implementation and impact) may mean the measure arrives after the recession has ended. 1 mark: a reasoned conclusion, for example that the result depends on the size of the multiplier, the efficiency of the spending and whether supply-side or monetary measures are used too.',
      ru: '1 балл: экспансионистская политика сдвигает совокупный спрос вправо, поэтому выпуск растёт, а циклическая безработица падает. 1 балл: отрицательный разрыв выпуска означает свободные мощности, поэтому мультипликатор может увеличить доход больше, чем расходы. 1 балл: большой дефицит означает больше заимствований, более высокий государственный долг и большие процентные платежи в будущем. 1 балл: вытеснение: более высокие процентные ставки могут сократить частные инвестиции и частично компенсировать эффект. 1 балл: временные лаги (признания, решения, реализации и воздействия) могут означать, что мера придёт уже после окончания рецессии. 1 балл: обоснованный вывод, например, что результат зависит от размера мультипликатора, эффективности расходов и того, используются ли также меры предложения или монетарная политика.',
    },
    origin: 'original',
    minutes: 6,
  },
];
