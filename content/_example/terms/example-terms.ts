import type { Term } from '../../../src/contract/types';
import { EXAMPLE_SIM } from '../ids';

// Example entries only. Real terms take the definition from the textbook, in our own words, with a locator.
export const terms: Term[] = [
  {
    id: 'demand',
    term: { en: 'demand', ru: 'спрос (demand)' },
    def: {
      en: 'The quantity of a good that buyers are willing and able to purchase at each price, per period of time.',
      ru: 'Количество товара, которое покупатели готовы и могут купить по каждой цене за единицу времени.',
    },
    syllabus: 'EX.1',
    papers: ['P1'],
    src: { kind: 'own', title: 'Example definition, to be replaced with textbook wording and locator' },
    pitfall: {
      en: 'Demand is the whole schedule across prices, not the quantity bought at one price.',
      ru: 'Спрос — это вся шкала по всем ценам, а не количество, купленное по одной цене.',
    },
    sim: EXAMPLE_SIM,
  },
  {
    id: 'supply',
    term: { en: 'supply', ru: 'предложение (supply)' },
    def: {
      en: 'The quantity of a good that producers are willing and able to sell at each price, per period of time.',
      ru: 'Количество товара, которое производители готовы и могут продать по каждой цене за единицу времени.',
    },
    syllabus: 'EX.2',
    papers: ['P1'],
    src: { kind: 'own', title: 'Example definition, to be replaced with textbook wording and locator' },
  },
];
