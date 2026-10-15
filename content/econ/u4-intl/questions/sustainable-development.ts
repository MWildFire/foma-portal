import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-sustainable-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the three dimensions of sustainable development.',
      ru: 'Объясните три измерения устойчивого развития.',
    },
    markscheme: {
      en: '1 mark: economic dimension: stable growth, efficient use of resources and jobs that can last. 1 mark: social dimension: equity, access to health and education, and reducing poverty. 1 mark: environmental dimension: conserving natural capital, controlling pollution, and protecting the climate and biodiversity. 1 mark: the dimensions interact, so a policy must be judged on all three and its trade-offs stated.',
      ru: '1 балл: экономическое измерение: стабильный рост, эффективное использование ресурсов и рабочие места, которые можно сохранить. 1 балл: социальное измерение: справедливость, доступ к здравоохранению и образованию, снижение бедности. 1 балл: экологическое измерение: сохранение природного капитала, контроль загрязнения, защита климата и биоразнообразия. 1 балл: измерения взаимосвязаны, поэтому политику оценивают по всем трём и называют компромиссы.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-sustainable-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why carbon emissions are a market failure, and how a carbon tax could correct it.',
      ru: 'Объясните, почему выбросы углерода являются провалом рынка и как углеродный налог может это исправить.',
    },
    markscheme: {
      en: '1 mark: emissions impose costs on people who are not part of the transaction, so this is a negative externality. 1 mark: the firm does not pay this external cost, so its private cost is below the social cost and the market over-produces. 1 mark: a carbon tax adds a charge per unit of emissions, raising the private cost to the social cost. 1 mark: output falls to the socially optimal level, and firms have an incentive to cut emissions or switch to cleaner methods.',
      ru: '1 балл: выбросы создают издержки для людей, не участвующих в сделке, то есть это негативный внешний эффект. 1 балл: фирма не платит эти внешние издержки, поэтому её частные издержки ниже общественных, и рынок производит слишком много. 1 балл: углеродный налог добавляет плату за единицу выбросов и поднимает частные издержки до общественных. 1 балл: выпуск снижается до социально оптимального уровня, а у фирм появляется стимул сокращать выбросы или переходить на более чистые методы.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-sustainable-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether an emissions trading scheme is more effective than a carbon tax in reducing emissions.',
      ru: 'Обсудите, эффективнее ли система торговли квотами на выбросы, чем углеродный налог, в сокращении выбросов.',
    },
    markscheme: {
      en: '1 mark: a definition of both: an emissions trading scheme fixes the quantity of emissions, a carbon tax fixes the price. 1 mark: an emissions trading scheme gives certainty about the total quantity of emissions, which suits a fixed climate target. 1 mark: the permit price can be volatile, so firms face uncertainty about their costs. 1 mark: a carbon tax gives a predictable price, which helps firms plan investment, but the total reduction in emissions is uncertain. 1 mark: both internalise the external cost, so both create an incentive to cut emissions. 1 mark: effectiveness depends on how responsive firms are, that is the price elasticity of demand and supply for the polluting good. 1 mark: carbon leakage and competitiveness concerns apply to both, and may be reduced by free allocation of permits or border measures. 1 mark: administrative costs and political acceptance differ; a tax raises government revenue, while permits can be auctioned or given away. 1 mark: evaluation: the choice depends on the policy goal, a fixed quantity or a fixed price. 1 mark: a supported judgement based on the goal and the design of each policy.',
      ru: '1 балл: определение обеих систем: система торговли квотами фиксирует объём выбросов, углеродный налог фиксирует цену. 1 балл: система торговли квотами даёт определённость в общем объёме выбросов, что подходит для фиксированной климатической цели. 1 балл: цена разрешений может колебаться, поэтому фирмы не уверены в своих издержках. 1 балл: углеродный налог даёт предсказуемую цену, что помогает фирмам планировать инвестиции, но общее сокращение выбросов не определено. 1 балл: обе системы интернализируют внешние издержки, поэтому обе создают стимул сокращать выбросы. 1 балл: эффективность зависит от того, насколько чувствительны фирмы, то есть от ценовой эластичности спроса и предложения загрязняющего товара. 1 балл: утечка углерода и вопросы конкурентоспособности касаются обеих систем и могут смягчаться бесплатным распределением разрешений или пограничными мерами. 1 балл: административные издержки и общественное принятие различаются; налог приносит доходы государству, а разрешения можно продать на аукционе или раздать. 1 балл: оценка: выбор зависит от цели политики — фиксированного объёма или фиксированной цены. 1 балл: обоснованное суждение, опирающееся на цель и устройство каждой политики.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'econ-sustainable-development-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P3',
    marks: 6,
    command: 'Recommend',
    prompt: {
      en: 'A government wants to cut emissions from its power sector without sharply raising electricity prices for low-income households. Recommend one policy and justify your recommendation.',
      ru: 'Правительство хочет сократить выбросы энергетического сектора, не резко повышая цены на электроэнергию для домохозяйств с низкими доходами. Порекомендуйте одну политику и обоснуйте рекомендацию.',
    },
    markscheme: {
      en: '1 mark: a clear recommendation, for example a carbon tax with the revenue returned to low-income households as a lump-sum rebate. 1 mark: explains how the policy reduces emissions: a higher cost of fossil-fuel power encourages efficiency and switching to renewables. 1 mark: explains how it protects low-income households: the rebate offsets higher bills, so their income is kept. 1 mark: evaluates the cost to government and the time lags before emissions fall. 1 mark: evaluates the risk of carbon leakage and the effect on energy-intensive firms. 1 mark: a justified conclusion that states the key condition for success, such as a well-targeted rebate.',
      ru: '1 балл: ясная рекомендация, например углеродный налог с возвратом поступлений домохозяйствам с низкими доходами в виде единовременной компенсации. 1 балл: объясняет, как политика сокращает выбросы: более высокая цена электроэнергии из ископаемого топлива стимулирует экономию и переход на возобновляемые источники. 1 балл: объясняет, как она защищает домохозяйства с низкими доходами: компенсация покрывает более высокие счета, поэтому их доход сохраняется. 1 балл: оценивает стоимость для государства и временные лаги до снижения выбросов. 1 балл: оценивает риск утечки углерода и влияние на энергоёмкие фирмы. 1 балл: обоснованный вывод, в котором указано ключевое условие успеха, например хорошо адресная компенсация.',
    },
    origin: 'original',
    minutes: 12,
  },
];
