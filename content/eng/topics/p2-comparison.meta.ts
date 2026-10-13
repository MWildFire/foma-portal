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
    { en: 'I can compare point by point rather than work by work', ru: 'Могу сравнивать пункт за пунктом, а не произведение за произведением' },
    { en: 'I can check that a thesis names both works and makes a claim about effect', ru: 'Могу проверить, что тезис называет оба произведения и утверждает что-то об эффекте' },
  ],
  termIds: ['theme', 'juxtaposition', 'irony', 'symbol', 'mood', 'tone', 'personification', 'pathetic-fallacy'],
  questionIds: ['p2-q06', 'p2-q07', 'p2-q08', 'p2-q09', 'p2-q10', 'p2-q11', 'p2-q12', 'p2-q13', 'p2-q14', 'p2-q15', 'p1-dickinson-fly', 'p1-hardy-thrush', 'chk-p2-comparison-1', 'chk-p2-comparison-2'],
  sims: ['eng.thesis'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
