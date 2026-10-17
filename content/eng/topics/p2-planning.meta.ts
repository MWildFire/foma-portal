import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-planning',
  subject: 'eng',
  code: 'P2.PL',
  title: { en: 'Planning a comparison in 10 minutes', ru: 'Планирование сравнения за 10 минут' },
  papers: ['P2'],
  order: 11,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can decode a Paper 2 prompt: its command term and its key words', ru: 'Могу разобрать задание Paper 2: командное слово и ключевые слова' },
    { en: 'I can choose two eligible works that support a meaningful comparison addressing the question', ru: 'Могу выбрать два допустимых произведения для содержательного сравнения по вопросу' },
    { en: 'I can write one thesis sentence that makes a claim about effect', ru: 'Могу написать один тезис, который утверждает что-то об эффекте' },
    { en: 'I can plan developed comparative points and choose a coherent structure', ru: 'Могу наметить развёрнутые сравнительные пункты и связную структуру' },
    { en: 'I can keep the plan to 10 minutes and leave the rest of the paper for writing', ru: 'Могу уложить план в 10 минут и оставить остальное время на письмо' },
  ],
  termIds: ['narrator', 'focalisation', 'theme', 'juxtaposition', 'motif', 'tone'],
  sims: ['eng.p2-timer'],
  questionIds: ['p2-q01', 'p2-q02', 'p2-q03', 'p2-q04', 'p2-q05', 'chk-p2-planning-1', 'chk-p2-planning-2'],
  sources: [{ kind: 'web', title: 'IB Examiner Instructions 2026, Language A, Paper 2: General guidance and criteria A–D; actual public text', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Verified school Paper 2 Revision Booklet: overview and final Mark Scheme; methods here are flexible practice suggestions' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
