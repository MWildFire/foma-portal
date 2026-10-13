import type { Question } from '../../../../src/contract/types';

// Public goods questions. The calculation (econ-public-goods-01) is checked by scripts/econ-checks/public-goods.json.
export const questions: Question[] = [
  {
    id: 'econ-public-goods-01',
    subject: 'econ',
    topicIds: ['public-goods'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'Household A pays for street lighting and household B free rides on it. The market provides 4 units of lighting, while the socially optimal quantity is 6 units. Calculate the market provision as a proportion of the socially optimal quantity. Give your answer as a decimal to two decimal places. [2 marks]',
      ru: 'Домохозяйство A оплачивает уличное освещение, а домохозяйство B пользуется им без оплаты. Рынок предоставляет 4 единицы освещения, а общественно оптимальный объём — 6 единиц. Рассчитайте рыночный объём предоставления как долю от общественно оптимального объёма. Дайте ответ десятичной дробью с двумя знаками после запятой. [2 балла]',
    },
    markscheme: {
      en: '1 mark: proportion = market quantity / socially optimal quantity = 4 / 6. 1 mark: 0.67 (to two decimal places), so the market provides about two-thirds of the optimum.',
      ru: '1 балл: доля = рыночный объём / оптимальный объём = 4 / 6. 1 балл: 0,67 (с двумя знаками после запятой), то есть рынок даёт около двух третей оптимума.',
    },
    answer: '0.67',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-public-goods-02',
    subject: 'econ',
    topicIds: ['public-goods'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a private firm is unlikely to provide a public good such as street lighting. Refer to non-excludability and free riding in your answer. [4 marks]',
      ru: 'Объясните, почему частная фирма вряд ли станет предоставлять общественное благо, например уличное освещение. В ответе сошлитесь на неисключаемость и безбилетничество. [4 балла]',
    },
    markscheme: {
      en: "1 mark: the good is non-excludable, so households that do not pay cannot be kept from using the lighting. 1 mark: buyers therefore have an incentive to free ride and wait for others to pay. 1 mark: the revenue from paying buyers is too low to cover the firm's costs, so it does not provide the good. 1 mark: the market provides less than the socially optimal quantity, or none at all, which is under-provision.",
      ru: '1 балл: благо неисключаемо, поэтому домохозяйства, которые не платят, нельзя лишить освещения. 1 балл: у покупателей возникает стимул быть безбилетниками и ждать, пока заплатят другие. 1 балл: выручки от платящих недостаточно для покрытия издержек фирмы, поэтому она не предоставляет благо. 1 балл: рынок предоставляет меньше общественно оптимального объёма или не предоставляет вовсе — это недостаточное предоставление.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-public-goods-03',
    subject: 'econ',
    topicIds: ['public-goods'],
    paper: 'P2',
    marks: 4,
    command: 'Draw',
    prompt: {
      en: 'Draw a diagram with two individual marginal benefit curves for a public good, labelled DA and DB. Draw the market demand obtained by vertical summation, and the marginal cost curve. Label the socially optimal quantity (Qopt) and the market quantity (Qm), and explain the gap in one sentence. [4 marks]',
      ru: 'Нарисуйте диаграмму с двумя индивидуальными кривыми предельной выгоды общественного блага, подписанными DA и DB. Нарисуйте рыночный спрос, полученный вертикальным суммированием, и кривую предельных издержек. Подпишите общественно оптимальный объём (Qopt) и рыночный объём (Qm) и в одном предложении объясните разрыв. [4 балла]',
    },
    markscheme: {
      en: '1 mark: DA and DB drawn as downward-sloping individual demand (marginal benefit) curves. 1 mark: market demand drawn by adding DA and DB vertically at each quantity, above both curves. 1 mark: the marginal cost curve meets the market demand at Qopt, which is labelled. 1 mark: Qm is labelled below Qopt, and the gap is explained by free riding: buyers who pay do not count the benefit that others get.',
      ru: '1 балл: DA и DB нарисованы как нисходящие индивидуальные кривые спроса (предельной выгоды). 1 балл: рыночный спрос нарисован сложением DA и DB по вертикали при каждом объёме, выше обеих кривых. 1 балл: кривая предельных издержек пересекает рыночный спрос в точке Qopt, которая подписана. 1 балл: Qm подписано ниже Qopt, а разрыв объясняется безбилетничеством: покупатели, которые платят, не учитывают выгоду, которую получают другие.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-public-goods-04',
    subject: 'econ',
    topicIds: ['public-goods'],
    paper: 'P1',
    marks: 8,
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether government provision is the best way to overcome the under-provision of public goods. [8 marks]',
      ru: 'Обсудите, является ли государственное предоставление лучшим способом преодолеть недостаточное предоставление общественных благ. [8 баллов]',
    },
    markscheme: {
      en: "1 mark: under-provision arises from free riding and non-excludability, so the price mechanism fails to reveal the true benefit. 1 mark: government provision financed by taxes avoids free riding, so the good can be provided close to the socially optimal quantity. 1 mark: the government does not know each household's willingness to pay, so it may over- or under-provide. 1 mark: taxes distort other choices, and the cost of collecting them and running the service can be high. 1 mark: for quasi-public goods such as toll roads or parks, a charge or private provision can work, so government provision is not always best. 1 mark: evaluation: compare the gain from solving free riding with the costs of bureaucracy, information and taxation. 1 mark: a supported judgement, for example that government provision suits pure public goods such as national defence, while a mix suits quasi-public goods. 1 mark: clear structure, with non-rivalry, non-excludability and free rider used accurately.",
      ru: '1 балл: недостаточное предоставление возникает из-за безбилетничества и неисключаемости, поэтому ценовой механизм не выявляет истинную выгоду. 1 балл: государственное предоставление, финансируемое налогами, устраняет безбилетничество, и благо можно предоставить близко к оптимальному объёму. 1 балл: государство не знает, сколько готово платить каждое домохозяйство, поэтому может предоставить слишком много или слишком мало. 1 балл: налоги искажают другие решения, а издержки сбора налогов и управления услугой могут быть высокими. 1 балл: для квазиобщественных благ, например платных дорог или парков, работают плата или частное предоставление, поэтому государственное предоставление не всегда лучшее. 1 балл: оценка: сравните выигрыш от устранения безбилетничества с издержками бюрократии, информации и налогообложения. 1 балл: обоснованное суждение, например, что государственное предоставление подходит чистым общественным благам, таким как оборона страны, а смешанная модель — квазиобщественным благам. 1 балл: ясная структура, в которой неконкурентность, неисключаемость и безбилетник употреблены точно.',
    },
    origin: 'original',
    minutes: 15,
  },
];
