import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-perspective',
  subject: 'eng',
  code: 'C.PE',
  title: { en: 'Key concept: perspective', ru: 'Ключевое понятие: перспектива' },
  papers: ['P1', 'P2'],
  order: 21,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the narrator and the person they speak in: first, third, omniscient or unreliable', ru: 'Могу назвать рассказчика и лицо, от которого он говорит: первое, третье, всезнающий (omniscient) или ненадёжный (unreliable)' },
    { en: 'I can say whose perception the reader follows (focalisation)', ru: 'Могу назвать, чьим восприятием следует читатель (фокализация, focalisation)' },
    { en: 'I can explain what a perspective hides from the reader', ru: 'Могу объяснить, что перспектива скрывает от читателя' },
    { en: 'I can explain how perspective shapes the sympathy a reader feels', ru: 'Могу объяснить, как перспектива формирует сочувствие, которое испытывает читатель' },
  ],
  termIds: ['narrator', 'first-person-narration', 'omniscient-narrator', 'unreliable-narrator', 'focalisation', 'free-indirect-discourse', 'lyric-persona'],
  questionIds: ['chk-concept-perspective-1', 'chk-concept-perspective-2'],
  sources: [{ kind: 'web', title: 'IB Language A: literature guide, first assessment 2026, PDF34–35 / printed28–29: seven concepts, actual text read through the official examiner link', url: 'https://xmltwo.ibo.org/publications/EAD/2026_EN/GR1/GR1-A-Lit_EN_24.pdf' },
    { kind: 'web', title: 'В. Шмид, Нарратология (М., 2003), printed pp. 92–93, 112–113, 222–223: voice, focalisation and represented speech (Russian academic text)', url: 'https://www.philol.msu.ru/~discours/images/stories/speckurs/schmid.pdf' },{ kind: 'own', title: 'Own wording' }],
};

export default topic;
