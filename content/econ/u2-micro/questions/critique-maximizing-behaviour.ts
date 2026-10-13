import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-critique-maximizing-behaviour-01',
    subject: 'econ',
    topicIds: ['critique-maximizing-behaviour'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain two reasons why consumers may fail to maximize utility when they make everyday purchases.',
      ru: 'Объясните две причины, по которым потребители могут не максимизировать полезность при обычных покупках.',
    },
    markscheme: {
      en: '1 mark: bounded rationality: consumers have limited information and time, so they cannot compare every option. 1 mark: the link to the purchase, for example a shopper who accepts the first acceptable product (satisficing). 1 mark: a second reason, such as a bias: a first price seen (anchoring) makes a discount look like a bargain. 1 mark: the link to utility: the product chosen does not give the highest utility the consumer could have had.',
      ru: '1 балл: ограниченная рациональность: у потребителя мало информации и времени, поэтому он не может сравнить все варианты. 1 балл: связь с покупкой, например покупатель берёт первый приемлемый товар (удовлетворительный выбор). 1 балл: вторая причина, например искажение: первая увиденная цена (якорение) делает скидку похожей на выгоду. 1 балл: связь с полезностью: выбранный товар не даёт наибольшей полезности, которую потребитель мог бы получить.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-critique-maximizing-behaviour-02',
    subject: 'econ',
    topicIds: ['critique-maximizing-behaviour'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how loss aversion could lead a consumer to keep a gym membership that she does not use.',
      ru: 'Объясните, как неприятие потерь может заставить потребительницу сохранить абонемент в спортзал, которым она не пользуется.',
    },
    markscheme: {
      en: '1 mark: loss aversion means the pain of losing money is greater than the pleasure of gaining the same amount. 1 mark: cancelling feels like a loss, while the fee already paid cannot be recovered in any case. 1 mark: a rational consumer would compare only the future benefits and costs of keeping the membership. 1 mark: keeping an unused membership gives less utility than cancelling it, so the choice does not maximize utility.',
      ru: '1 балл: неприятие потерь означает, что боль от потери денег сильнее удовольствия от такого же выигрыша. 1 балл: отмена ощущается как потеря, хотя уплаченный взнос в любом случае не вернуть. 1 балл: рациональный потребитель сравнивал бы только будущие выгоды и издержки членства. 1 балл: неиспользуемое членство даёт меньше полезности, чем отмена, поэтому такой выбор не максимизирует полезность.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-critique-maximizing-behaviour-03',
    subject: 'econ',
    topicIds: ['critique-maximizing-behaviour'],
    paper: 'P3',
    marks: 8,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of default options as a government policy to increase saving for retirement.',
      ru: 'Оцените использование вариантов по умолчанию как государственной политики, направленной на рост сбережений на пенсию.',
    },
    markscheme: {
      en: '1 mark: a default option is the choice that applies when a person takes no action; it is a nudge that keeps other options open. 1 mark: present bias and inertia mean that many people do not start saving, so a default can overcome them. 1 mark: example: a pension plan that enrols workers automatically and lets them opt out. 1 mark: benefit: the policy is cheap to run and keeps choice, because workers can still opt out. 1 mark: benefit: it can help people who want to save but lack self-control. 1 mark: limitation: some workers may save too much or may not be able to afford the default contribution. 1 mark: limitation: some people see a default chosen for them as paternalism, and the policy may not suit everyone. 1 mark: judgement: the effect depends on the size of the default, the information given and the financial position of each worker; the policy is useful but not perfect.',
      ru: '1 балл: вариант по умолчанию — выбор, который действует, если человек ничего не делает; это подталкивание, оставляющее открытыми другие варианты. 1 балл: предпочтение настоящего и инерция означают, что многие люди не начинают копить, и вариант по умолчанию может это преодолеть. 1 балл: пример: пенсионный план, который автоматически подключает работников и позволяет отказаться. 1 балл: достоинство: политика дешева в управлении и сохраняет выбор, так как работники могут отказаться. 1 балл: достоинство: она может помочь тем, кто хочет копить, но не хватает самоконтроля. 1 балл: ограничение: некоторые работники могут копить слишком много или не потянуть взнос по умолчанию. 1 балл: ограничение: решение, принятое за человека, может восприниматься как патернализм, и политика подходит не всем. 1 балл: вывод: эффект зависит от размера взноса по умолчанию, информации и финансов каждого работника; политика полезна, но не идеальна.',
    },
    origin: 'original',
    minutes: 10,
  },
];
