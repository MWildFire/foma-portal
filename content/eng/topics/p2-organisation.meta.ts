import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-organisation',
  subject: 'eng',
  code: 'P2.C',
  title: { en: 'Organisation: introduction, paragraphs, conclusion', ru: 'Организация: введение, абзацы, вывод' },
  papers: ['P2'],
  order: 15,
  minutes: 35,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write an introduction that names both works and states one thesis sentence', ru: 'Могу написать введение, которое называет оба произведения и содержит один тезис' },
    { en: 'I can build each paragraph as point, comparison, evidence, so what, and link to the prompt', ru: 'Могу строить абзац так: мысль, сравнение, доказательство, «так что», связь с заданием' },
    { en: 'I can use signposting words to show the order of my argument', ru: 'Могу использовать слова-указатели, чтобы показать порядок аргумента' },
    { en: 'I can synthesise the comparative answer without merely repeating sentences', ru: 'Могу обобщить сравнительный ответ, не повторяя предложения дословно' },
  ],
  termIds: ['rhetorical-question', 'antithesis', 'climax', 'argument', 'purpose'],
  questionIds: ['p2-q11', 'p2-q12', 'p2-q13', 'p2-q14', 'p2-q15', 'p2-q16', 'p2-q17', 'p2-q18', 'p2-q19', 'p2-q20', 'chk-p2-organisation-1', 'chk-p2-organisation-2'],
  sources: [{ kind: 'web', title: 'IB Examiner Instructions 2026, Language A, Paper 2: General guidance and criteria A–D; actual public text', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Verified school Paper 2 Revision Booklet: overview and final Mark Scheme; methods here are flexible practice suggestions' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
