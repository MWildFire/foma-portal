import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'current-account',
    tex: 'CA = X - M + \\text{NPI} + \\text{NSI}',
    name: { en: 'Current account balance', ru: 'сальдо счёта текущих операций (current account balance)' },
    meaning: {
      en: 'X is exports and M is imports of goods and services; NPI is net primary income and NSI is net secondary income. A positive CA is a surplus, a negative CA is a deficit.',
      ru: 'X — экспорт и M — импорт товаров и услуг; NPI — чистый первичный доход, NSI — чистый вторичный доход. Положительное CA означает профицит, отрицательное — дефицит.',
    },
    when: {
      en: 'Any question about the current account balance, or the trade balance adjusted for income and transfers.',
      ru: 'Любой вопрос о сальдо счёта текущих операций или о торговом балансе с учётом доходов и трансфертов.',
    },
    syllabus: '4.6',
    units: 'AED million',
    example: {
      en: 'Exports 420, imports 510, NPI 35 and NSI -15: CA = 420 - 510 + 35 - 15 = -70 (AED million), a deficit.',
      ru: 'Экспорт 420, импорт 510, NPI 35 и NSI -15: CA = 420 - 510 + 35 - 15 = -70 (млн AED), дефицит.',
    },
  },
  {
    id: 'terms-of-trade',
    tex: '\\text{ToT} = \\dfrac{P_X}{P_M} \\times 100',
    name: { en: 'Terms of trade index', ru: 'индекс условий торговли (terms of trade index)' },
    meaning: {
      en: 'P_X is the export price index and P_M is the import price index, both with the same base year (base = 100). A rise means that the same exports buy more imports.',
      ru: 'P_X — индекс цен экспорта, P_M — индекс цен импорта, оба с одним базовым годом (база = 100). Рост означает, что тот же экспорт покупает больше импорта.',
    },
    when: {
      en: 'Any question that compares the prices a country receives for its exports with the prices it pays for imports over time.',
      ru: 'Любой вопрос, который сравнивает цены, получаемые страной за экспорт, с ценами, которые она платит за импорт, во времени.',
    },
    syllabus: '4.6',
    units: 'index (base = 100)',
    example: {
      en: 'Export price index 112 and import price index 96: ToT = 112 / 96 x 100 = 116.7.',
      ru: 'Индекс цен экспорта 112 и индекс цен импорта 96: ToT = 112 / 96 x 100 = 116,7.',
    },
  },
];
