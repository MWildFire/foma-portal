import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-comparison',
  subject: 'eng',
  code: 'P2.B2',
  title: { en: 'Comparison: similarity, difference and the so what', ru: 'Сравнение: сходство, различие и «так что»' },
  papers: ['P2'],
  order: 14,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a comparison point: a similarity or a difference, one technique in each work and a so what', ru: 'Могу написать пункт сравнения: сходство или различие, по одному приёму в каждом произведении и «так что»' },
    { en: 'I can use comparison words such as while, whereas, unlike and similarly to link two works', ru: 'Могу использовать слова сравнения, например while, whereas, unlike и similarly, чтобы связать два произведения' },
    { en: 'I can organise a balanced comparison and maintain explicit connections', ru: 'Могу выстроить сбалансированное сравнение и поддерживать явные связи' },
    { en: 'I can check that a thesis names both works and makes a claim about effect', ru: 'Могу проверить, что тезис называет оба произведения и утверждает что-то об эффекте' },
  ],
  termIds: ['theme', 'juxtaposition', 'irony', 'symbol', 'mood', 'tone', 'personification', 'pathetic-fallacy'],
  questionIds: ['p2-q06', 'p2-q07', 'p2-q08', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q12', 'p2-q13', 'p2-q14', 'p2-q15', 'p1-dickinson-fly', 'p1-hardy-thrush', 'chk-p2-comparison-1', 'chk-p2-comparison-2'],
  sims: ['eng.thesis'],
  sources: [{ kind: 'web', title: 'Thomas Hardy, The Darkling Thrush, 1919 Macmillan text, Gutenberg 3168; compare RPO textual variants, lines 29–32', url: 'https://www.gutenberg.org/cache/epub/3168/pg3168.txt' }, { kind: 'web', title: 'IB Examiner Instructions 2026, Language A, Paper 2: General guidance and criteria A–D; actual public text', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Verified school Paper 2 Revision Booklet: overview and final Mark Scheme pages; author practice methods are not additional criteria' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
