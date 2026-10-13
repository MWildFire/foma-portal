import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.1',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'population-and-sample',
    term: { en: 'population and sample', ru: 'генеральная совокупность и выборка (population and sample)' },
    def: {
      en: 'The population is the whole group that a study is about. A sample is the part of the population that is actually measured or surveyed.',
      ru: 'Генеральная совокупность — вся группа, о которой идёт речь в исследовании. Выборка — часть этой совокупности, которую реально измеряют или опрашивают.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A sample of convenience, such as the first 20 people who answer, is not automatically representative of the population.',
      ru: 'Выборка «под рукой», например первые 20 ответивших, не обязательно представляет всю совокупность.',
    },
  },
  {
    id: 'random-sample-technique',
    term: { en: 'random sampling', ru: 'случайный отбор (random sampling)' },
    def: {
      en: 'A sampling method in which every member of the population has a known, non-zero chance of being selected, so the chance decides who is in the sample.',
      ru: 'Метод отбора, при котором каждый член совокупности имеет известный ненулевой шанс попасть в выборку, так что выбор определяет случай.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Random does not mean haphazard. Picking people who are easy to reach is not random sampling.',
      ru: 'Случайный не значит наугад. Выбор тех, до кого легко дотянуться, не является случайным отбором.',
    },
  },
  {
    id: 'selection-bias',
    term: { en: 'bias in sampling', ru: 'смещение выборки (bias in sampling)' },
    def: {
      en: 'A systematic tendency for a sample to differ from the population in one direction, so the estimates are consistently too high or too low. It comes from the way the sample is chosen, not from chance.',
      ru: 'Систематическое отклонение выборки от совокупности в одну сторону, из-за которого оценки стабильно завышены или занижены. Оно возникает из-за способа отбора, а не из-за случайности.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A larger sample does not remove bias. Only a better sampling method does.',
      ru: 'Большая выборка не устраняет смещение. Его устраняет только более удачный способ отбора.',
    },
  },
];
