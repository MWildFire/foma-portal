import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-what-is-economics-01',
    subject: 'econ',
    topicIds: ['what-is-economics'],
    paper: 'P1',
    marks: 2,
    command: 'Define',
    prompt: {
      en: 'Define the term scarcity. Then give one example of scarcity in a household budget.',
      ru: 'Определите термин ограниченность ресурсов (scarcity). Затем приведите один пример ограниченности в бюджете домохозяйства.',
    },
    markscheme: {
      en: '1 mark: scarcity is the situation in which resources are limited relative to unlimited wants. 1 mark: a valid household example with figures, for example a budget of 8,000 AED against wants that cost 9,500 AED.',
      ru: '1 балл: ограниченность ресурсов — это ситуация, когда ресурсы ограничены по сравнению с безграничными желаниями. 1 балл: верный пример из бюджета домохозяйства с цифрами, например бюджет 8 000 AED при желаниях на 9 500 AED.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'econ-what-is-economics-02',
    subject: 'econ',
    topicIds: ['what-is-economics'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A student can either work a paid shift on Friday evening that earns 300 AED or study for an exam that evening at no money cost. Explain the opportunity cost of studying on Friday evening.',
      ru: 'Студент может либо отработать в пятницу вечером смену, за которую заплатят 300 AED, либо готовиться к экзамену в тот же вечер без денежных затрат. Объясните альтернативные издержки подготовки к экзамену в пятницу вечером.',
    },
    markscheme: {
      en: '1 mark: opportunity cost is the value of the next best alternative given up. 1 mark: the next best alternative is the paid shift. 1 mark: the opportunity cost of studying is 300 AED of earnings given up, even though no money is paid for studying.',
      ru: '1 балл: альтернативные издержки — это стоимость следующей лучшей альтернативы, от которой отказались. 1 балл: следующая лучшая альтернатива — смена с оплатой. 1 балл: альтернативные издержки подготовки равны 300 AED упущенного заработка, хотя за подготовку денег не платят.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-what-is-economics-03',
    subject: 'econ',
    topicIds: ['what-is-economics'],
    paper: 'P2',
    marks: 4,
    command: 'Draw',
    prompt: {
      en: 'Draw a production possibility curve with consumer goods on the horizontal axis and capital goods on the vertical axis. Label a point U inside the curve that shows unemployment. Then draw an outward shift of the curve and label it.',
      ru: 'Нарисуйте кривую производственных возможностей: потребительские товары по горизонтальной оси, капитальные по вертикальной. Подпишите точку U внутри кривой, которая показывает безработицу. Затем нарисуйте сдвиг кривой наружу и подпишите его.',
    },
    markscheme: {
      en: '1 mark: both axes are labelled (consumer goods horizontal, capital goods vertical). 1 mark: a curve that bows outwards from the vertical axis to the horizontal axis. 1 mark: a point U inside the curve, labelled as unemployment or underproduction. 1 mark: a second curve outside the first, labelled as an outward shift from more resources or better technology.',
      ru: '1 балл: подписаны обе оси (потребительские товары по горизонтали, капитальные по вертикали). 1 балл: кривая выгнута наружу от вертикальной оси к горизонтальной. 1 балл: точка U внутри кривой подписана как безработица или недопроизводство. 1 балл: вторая кривая за пределами первой подписана как сдвиг наружу из-за роста ресурсов или улучшения технологии.',
    },
    origin: 'original',
    minutes: 6,
  },
];
