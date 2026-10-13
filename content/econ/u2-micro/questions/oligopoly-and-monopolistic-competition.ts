import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-oligopoly-and-monopolistic-competition-01',
    subject: 'econ',
    topicIds: ['oligopoly-and-monopolistic-competition'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: "Two firms in a duopoly each choose a price. In one outcome, a firm sells 300 units at AED 12 per unit, and its total cost of producing 300 units is AED 2400. Calculate this firm's payoff, measured as its profit in AED, for this outcome, which would be entered in a payoff matrix. Give your answer as a whole number.",
      ru: 'Две фирмы в дуополии выбирают каждая свою цену. В одном из исходов фирма продаёт 300 единиц по 12 AED за единицу, а её общие издержки на производство 300 единиц составляют 2400 AED. Рассчитайте выигрыш этой фирмы, выраженный в её прибыли в AED, для этого исхода, который вносится в матрицу выигрышей. Ответ дайте целым числом.',
    },
    markscheme: {
      en: '1 mark: total revenue = 12 x 300 = AED 3600. 1 mark: profit = total revenue - total cost = 3600 - 2400. 1 mark: payoff (profit) = AED 1200 for this cell of the payoff matrix.',
      ru: '1 балл: общая выручка = 12 x 300 = 3600 AED. 1 балл: прибыль = общая выручка - общие издержки = 3600 - 2400. 1 балл: выигрыш (прибыль) = 1200 AED для этой ячейки матрицы выигрышей.',
    },
    answer: '1200',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-oligopoly-and-monopolistic-competition-02',
    subject: 'econ',
    topicIds: ['oligopoly-and-monopolistic-competition'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A firm with a differentiated product sells 300 cups of coffee a week at AED 12 per cup. When it cuts the price to AED 10 per cup, sales rise to 450 cups a week. Calculate its total revenue at AED 10 per cup, and state whether total revenue rises or falls compared with AED 12 per cup. Give your answer in AED as a whole number.',
      ru: 'Фирма с дифференцированным продуктом продаёт 300 чашек кофе в неделю по 12 AED за чашку. Когда она снижает цену до 10 AED за чашку, продажи растут до 450 чашек в неделю. Рассчитайте её общую выручку при цене 10 AED за чашку и укажите, растёт или падает общая выручка по сравнению с ценой 12 AED за чашку. Ответ дайте в AED целым числом.',
    },
    markscheme: {
      en: '1 mark: total revenue at AED 12 = 12 x 300 = AED 3600 a week. 1 mark: total revenue at AED 10 = 10 x 450 = AED 4500 a week, so it rises by AED 900. 1 mark: demand is elastic between these prices (the 50% rise in quantity is larger than the 16.7% fall in price), so the price cut raises total revenue.',
      ru: '1 балл: выручка при 12 AED = 12 x 300 = 3600 AED в неделю. 1 балл: выручка при 10 AED = 10 x 450 = 4500 AED в неделю, значит, она растёт на 900 AED. 1 балл: спрос эластичен между этими ценами (рост количества на 50% больше падения цены на 16,7%), поэтому снижение цены увеличивает выручку.',
    },
    answer: '4500',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-oligopoly-and-monopolistic-competition-03',
    subject: 'econ',
    topicIds: ['oligopoly-and-monopolistic-competition'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a Nash equilibrium can leave both oligopolists worse off than if they had colluded.',
      ru: 'Объясните, почему равновесие Нэша может оставить обоих олигополистов в худшем положении, чем если бы они вступили в сговор.',
    },
    markscheme: {
      en: '1 mark: a Nash equilibrium is an outcome in which no firm can gain by changing its strategy alone. 1 mark: each firm has a dominant strategy, such as a low price, which is its best choice whatever the rival does. 1 mark: when both choose it, their joint profit is lower than under collusion. 1 mark: collusion is unstable because each firm gains by cheating on the agreement, so the high-price outcome can only be sustained with punishment.',
      ru: '1 балл: равновесие Нэша — исход, при котором ни одна фирма не может выиграть, меняя стратегию в одиночку. 1 балл: у каждой фирмы есть доминирующая стратегия, например низкая цена, которая для неё лучший выбор при любом выборе конкурента. 1 балл: когда обе выбирают её, их совместная прибыль ниже, чем при сговоре. 1 балл: сговор неустойчив, потому что каждая фирма выигрывает, обманув соглашение, поэтому высокая цена держится только при наказании за обман.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-oligopoly-and-monopolistic-competition-04',
    subject: 'econ',
    topicIds: ['oligopoly-and-monopolistic-competition'],
    paper: 'P1',
    marks: 8,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the view that monopolistic competition is efficient because firms compete through product variety and consumers benefit from choice.',
      ru: 'Оцените утверждение, что монополистическая конкуренция эффективна, потому что фирмы конкурируют за счёт разнообразия продуктов, а потребители получают выбор.',
    },
    markscheme: {
      en: '1 mark: defines monopolistic competition: many firms, differentiated products and low barriers to entry. 1 mark: in the long run each firm earns normal profit and price is above MC, so allocative efficiency is not achieved. 1 mark: output is below the minimum point of ATC (excess capacity), so productive efficiency is not achieved. 1 mark: argues in favour: consumers gain variety, branding and quality that perfect competition does not offer. 1 mark: argues in favour: low barriers mean entry keeps profits close to normal, so firms cannot exploit consumers for long. 1 mark: argues against: advertising and branding add costs, which raise average costs and prices. 1 mark: evaluates the balance between variety and inefficiency, using the size of the variety gains and the cost of advertising in the market. 1 mark: reaches a justified judgement, for example that variety can outweigh the inefficiency in some markets, such as restaurants, but not in every market.',
      ru: '1 балл: определяет монополистическую конкуренцию: много фирм, дифференцированные продукты и низкие барьеры для входа. 1 балл: в долгосрочном периоде каждая фирма получает нормальную прибыль, а цена выше MC, поэтому аллокативная эффективность не достигается. 1 балл: выпуск ниже минимума ATC (избыточные мощности), поэтому продуктивная эффективность не достигается. 1 балл: довод в пользу: потребители получают разнообразие, брендинг и качество, которых не даёт совершенная конкуренция. 1 балл: довод в пользу: низкие барьеры означают, что вход держит прибыль близкой к нормальной, поэтому фирмы не могут долго эксплуатировать потребителей. 1 балл: довод против: реклама и брендинг добавляют издержки, которые повышают средние издержки и цены. 1 балл: оценивает баланс между разнообразием и неэффективностью, сопоставляя размер выигрыша от разнообразия и стоимость рекламы на рынке. 1 балл: делает обоснованный вывод, например что разнообразие в некоторых рынках, таких как рестораны, может перевесить неэффективность, но не на каждом рынке.',
    },
    origin: 'original',
    minutes: 8,
  },
];
