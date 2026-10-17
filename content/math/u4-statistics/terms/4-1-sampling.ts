import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.1, p. 47' },
    pitfall: {
      en: 'A sample of convenience, such as the first 20 people who answer, is not automatically representative of the population.',
      ru: 'Выборка «под рукой», например первые 20 ответивших, не обязательно представляет всю совокупность.',
    },
  },
  {
    id: 'random-sample-technique',
    term: { en: 'simple random sampling', ru: 'простой случайный отбор (simple random sampling)' },
    def: {
      en: 'For fixed size n, every subset of n distinct members of the population is equally likely. Each member has inclusion probability n/N; equal individual probabilities alone do not specify the whole sampling design.',
      ru: 'При фиксированном объёме n все наборы из n различных членов совокупности равновероятны. Вероятность включения каждого равна n/N; одних равных индивидуальных вероятностей недостаточно для полного задания плана отбора.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.1, p. 47' },
    pitfall: {
      en: 'Random sampling needs a specified chance mechanism. Picking only people who are easy to reach is convenience sampling.',
      ru: 'Для случайного отбора нужен заданный вероятностный механизм. Выбор только тех, с кем удобно связаться, — отбор по доступности.',
    },
  },
  {
    id: 'selection-bias',
    term: { en: 'bias in sampling', ru: 'смещение выборки (bias in sampling)' },
    def: {
      en: 'A systematic tendency for a sample to differ from the population in one direction, so an estimator tends on average to be too high or too low; not every individual sample must err in that direction. It comes from the way the sample is chosen, not from chance.',
      ru: 'Систематическое отклонение выборки от совокупности в одну сторону, из-за которого оценка в среднем завышена или занижена; не каждая отдельная выборка обязана ошибаться в ту же сторону. Оно возникает из-за способа отбора, а не из-за случайности.',
    },
    syllabus: '4.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.1, p. 47' },
    pitfall: {
      en: 'More observations alone do not remove selection bias. Improve the sampling design; appropriate weights or adjustments may address particular known imbalances, but need justified assumptions.',
      ru: 'Одно увеличение выборки не устраняет смещение отбора. Улучшай план отбора; веса или поправки могут учитывать конкретные известные перекосы, но требуют обоснованных допущений.',
    },
  },
];
