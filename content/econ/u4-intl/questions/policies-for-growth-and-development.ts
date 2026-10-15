import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-policies-for-growth-and-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain one advantage and one disadvantage of foreign aid for a low-income country.',
      ru: 'Объясните одно преимущество и один недостаток иностранной помощи для страны с низким доходом.',
    },
    markscheme: {
      en: '1 mark: an advantage is identified, such as finance for schools or clinics that the government cannot afford from its own revenue. 1 mark: the advantage is explained, for example as investment in human capital that raises productivity. 1 mark: a disadvantage is identified, such as dependence on donors or tied aid. 1 mark: the disadvantage is explained, for example as a weaker domestic tax effort or money spent on donor goods at a higher cost.',
      ru: '1 балл: названо преимущество, например финансирование школ или поликлиник, которые правительство не может оплатить из собственных доходов. 1 балл: преимущество объяснено, например как инвестиции в человеческий капитал, повышающие производительность. 1 балл: назван недостаток, например зависимость от доноров или связанная помощь. 1 балл: недостаток объяснён, например как ослабление собственных налоговых усилий или трата денег на товары донора по более высокой цене.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-policies-for-growth-and-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of microfinance to reduce poverty in a low-income country.',
      ru: 'Оцените использование микрофинансирования для снижения бедности в стране с низким доходом.',
    },
    markscheme: {
      en: '1 mark: defines microfinance as small loans and savings services for poor people without access to ordinary banks. 1 mark: explains the market failure: banks do not lend to people without collateral because small loans are costly to make. 1 mark: explains a benefit, such as extra income for small businesses. 1 mark: explains a benefit for women borrowers, such as more control over household spending. 1 mark: explains a limitation: high interest rates can lead to over-indebtedness. 1 mark: explains that many loans finance survival businesses that may not create jobs or raise incomes much. 1 mark: notes the mixed evidence on how much microfinance reduces poverty. 1 mark: uses an example, such as group lending in Bangladesh, to support a point. 1 mark: evaluates the short run and the long run: quick income effects, but limited growth without infrastructure and education. 1 mark: makes a supported judgement on whether microfinance is a main policy or a complement to others.',
      ru: '1 балл: определяет микрофинансирование как небольшие кредиты и сберегательные услуги для бедных людей без доступа к обычным банкам. 1 балл: объясняет провал рынка: банки не выдают кредиты без залога, потому что мелкие займы дороги в обслуживании. 1 балл: объясняет выгоду, например дополнительный доход малого бизнеса. 1 балл: объясняет выгоду для заёмщиц-женщин, например больший контроль над расходами домохозяйства. 1 балл: объясняет ограничение: высокие процентные ставки могут привести к долговой перегрузке. 1 балл: объясняет, что многие займы идут на бизнес для выживания, который может не создавать рабочих мест и мало повышать доходы. 1 балл: отмечает противоречивые данные о том, насколько микрофинансирование снижает бедность. 1 балл: использует пример, например групповое кредитование в Бангладеш, чтобы подкрепить мысль. 1 балл: оценивает краткосрочный и долгосрочный эффекты: быстрый рост доходов, но ограниченный рост без инфраструктуры и образования. 1 балл: делает обоснованное суждение о том, является ли микрофинансирование основной политикой или дополнением к другим мерам.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'econ-policies-for-growth-and-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P3',
    marks: 10,
    command: 'Recommend',
    prompt: {
      en: 'A low-income country has high external debt, weak roads and ports, and low school enrolment. Its government can fund one new policy only. Recommend one policy, justify your choice, and identify one risk of your recommendation and a way to reduce it.',
      ru: 'В стране с низким доходом высокий внешний долг, слабые дороги и порты и низкий охват школьным образованием. Правительство может профинансировать только одну новую политику. Порекомендуйте одну политику, обоснуйте выбор, назовите один риск рекомендации и способ его снизить.',
    },
    markscheme: {
      en: '1 mark: recommends one specific policy, such as investment in roads and ports or in schooling. 1 mark: links the policy to a named barrier in the prompt, such as weak infrastructure raising the cost of trade. 1 mark: explains the expected effect on growth or development. 1 mark: compares the policy with at least one alternative, such as debt relief or microfinance, and explains why it is preferred. 1 mark: states the time lag of the policy, for example years for roads and schools. 1 mark: considers the cost and how it is financed, including the effect on external debt if it is borrowed. 1 mark: identifies one risk, such as corruption or poor project planning. 1 mark: proposes a way to reduce that risk, such as independent audits or phased investment. 1 mark: reasons about the stakeholders, for example who gains and who pays. 1 mark: states the conditions under which the recommendation would change.',
      ru: '1 балл: рекомендует одну конкретную политику, например инвестиции в дороги и порты или в школьное образование. 1 балл: связывает политику с названным барьером из условия, например слабая инфраструктура повышает издержки торговли. 1 балл: объясняет ожидаемый эффект для роста или развития. 1 балл: сравнивает политику хотя бы с одной альтернативой, например облегчением долга или микрофинансированием, и объясняет, почему её предпочитают. 1 балл: называет временной лаг политики, например годы на строительство дорог и школ. 1 балл: учитывает стоимость и источник финансирования, включая влияние на внешний долг, если проект финансируется займом. 1 балл: называет один риск, например коррупцию или плохое планирование проекта. 1 балл: предлагает способ снизить этот риск, например независимый аудит или поэтапные инвестиции. 1 балл: рассуждает о заинтересованных сторонах, например о том, кто выигрывает и кто платит. 1 балл: называет условия, при которых рекомендация изменилась бы.',
    },
    origin: 'original',
    minutes: 15,
  },
];
