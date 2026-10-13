import type { Formula } from '../../../../src/contract/types';

// Two formulas for topic B2.4 Programming algorithms (P2). Both were checked with python3: the comparison count by
// counting the loop steps for n = 1 to 199, and the binary search worst case by simulating every target for n = 1 to 1500.
export const formulas: Formula[] = [
  {
    id: 'cs-sort-comparisons',
    tex: '\\text{Comparisons} = \\frac{n(n-1)}{2}',
    name: {
      en: 'Comparisons in bubble sort and selection sort',
      ru: 'число сравнений в пузырьковой сортировке и сортировке выбором',
    },
    meaning: {
      en: 'n is the number of items in the list. The nested loops of both sorts make this many comparisons in total, whatever the order of the data, because the inner loop is one step shorter on each pass.',
      ru: 'n — число элементов в списке. Вложенные циклы обеих сортировок делают столько сравнений всего, каким бы ни был порядок данных, потому что внутренний цикл на каждом проходе на один шаг короче.',
    },
    when: {
      en: 'Use it to check the comparison count in a trace, or to show that both sorts have $O(n^2)$ efficiency.',
      ru: 'Используйте её, чтобы проверить число сравнений в трассировке или показать, что обе сортировки имеют эффективность $O(n^2)$.',
    },
    syllabus: 'B2.4',
    example: {
      en: 'For six items, $\\frac{6 \\times 5}{2} = 15$ comparisons. This matches the bubble sort trace that counts comparisons per pass.',
      ru: 'Для шести элементов получается $\\frac{6 \\times 5}{2} = 15$ сравнений. Это совпадает с трассировкой пузырьковой сортировки, которая считает сравнения по проходам.',
    },
  },
  {
    id: 'cs-binary-worst-case',
    tex: '\\text{Worst-case comparisons} = \\lfloor \\log_2 n \\rfloor + 1',
    name: {
      en: 'Worst-case comparisons in binary search',
      ru: 'худший случай числа сравнений в двоичном поиске',
    },
    meaning: {
      en: 'n is the number of items in a sorted list. The result is the largest number of comparisons that a binary search of that list can need.',
      ru: 'n — число элементов отсортированного списка. Результат — наибольшее число сравнений, которое может понадобиться двоичному поиску в этом списке.',
    },
    when: {
      en: 'Use it to compare binary search with linear search, which needs up to n comparisons in its worst case.',
      ru: 'Используйте её, чтобы сравнить двоичный поиск с линейным, которому в худшем случае нужно до n сравнений.',
    },
    syllabus: 'B2.4',
    example: {
      en: 'For n = 1000000, the formula gives $\\lfloor \\log_2 1000000 \\rfloor + 1 = 19 + 1 = 20$ comparisons.',
      ru: 'При n = 1 000 000 формула даёт $\\lfloor \\log_2 1000000 \\rfloor + 1 = 19 + 1 = 20$ сравнений.',
    },
  },
];
