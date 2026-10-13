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
    { en: 'I can write a conclusion that answers the prompt instead of summarising the essay', ru: 'Могу написать вывод, который отвечает на задание, а не пересказывает эссе' },
  ],
  termIds: ['rhetorical-question', 'antithesis', 'climax', 'argument', 'purpose'],
  questionIds: ['p2-q11', 'p2-q12', 'p2-q13', 'p2-q14', 'p2-q15', 'p2-q16', 'p2-q17', 'p2-q18', 'p2-q19', 'p2-q20', 'chk-p2-organisation-1', 'chk-p2-organisation-2'],
  sources: [{ kind: 'own', title: 'Organisation rules for Paper 2 written for this portal; criterion C from the owner brief (focus and organisation, 0–5)' }],
};

export default topic;
