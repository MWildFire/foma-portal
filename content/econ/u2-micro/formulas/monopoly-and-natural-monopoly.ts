import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'profit',
    tex: '\\pi = TR - TC',
    name: { en: 'Profit (π)', ru: 'Прибыль (π)' },
    meaning: {
      en: 'Total revenue minus total cost. Total cost includes normal profit, so a positive result is supernormal profit.',
      ru: 'Общая выручка минус общие издержки. Общие издержки включают нормальную прибыль, поэтому положительный результат — сверхнормальная прибыль.',
    },
    when: {
      en: 'Testing whether a firm, for example a monopolist, earns supernormal profit or a loss at its chosen output and price.',
      ru: 'Проверка того, получает ли фирма, например монополист, сверхнормальную прибыль или убыток при выбранных выпуске и цене.',
    },
    syllabus: '2.11',
    units: 'AED',
    example: {
      en: 'Price AED 40, output 10 units, total cost AED 260: profit = 40 x 10 - 260 = AED 140.',
      ru: 'Цена 40 AED, выпуск 10 единиц, общие издержки 260 AED: прибыль = 40 x 10 - 260 = 140 AED.',
    },
  },
  {
    id: 'marginal-revenue',
    tex: '\\text{MR} = \\dfrac{\\Delta TR}{\\Delta Q}',
    name: { en: 'Marginal revenue (MR)', ru: 'Предельный доход (MR)' },
    meaning: {
      en: 'The change in total revenue from selling one more unit. For linear demand P = a - bQ, MR = a - 2bQ, which falls twice as fast as price.',
      ru: 'Изменение общей выручки от продажи одной дополнительной единицы. При линейном спросе P = a - bQ имеем MR = a - 2bQ: MR падает вдвое быстрее цены.',
    },
    when: {
      en: 'Finding the profit-maximising output, where MR equals MC, for a firm with a downward-sloping demand curve.',
      ru: 'Поиск выпуска, максимизирующего прибыль, где MR равен MC, для фирмы с нисходящей кривой спроса.',
    },
    syllabus: '2.11',
    units: 'AED per unit',
    example: {
      en: 'Total revenue rises from AED 400 to AED 418 when output rises from 10 to 11 units, so MR = AED 18 per unit.',
      ru: 'Общая выручка растёт с 400 AED до 418 AED при росте выпуска с 10 до 11 единиц, поэтому MR = 18 AED за единицу.',
    },
  },
];
