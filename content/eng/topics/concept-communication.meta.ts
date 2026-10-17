import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-communication',
  subject: 'eng',
  code: 'C.CO',
  title: { en: 'Key concept: communication', ru: 'Ключевое понятие: коммуникация' },
  papers: ['P1', 'P2'],
  order: 20,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can say who speaks to whom, and through what medium', ru: 'Могу назвать, кто с кем говорит и через какое средство' },
    { en: 'I can find subtext and say what a text withholds from the reader', ru: 'Могу найти подтекст (subtext) и назвать, что текст утаивает от читателя' },
    { en: 'I can tell a soliloquy, an aside and an apostrophe apart, and say who hears each one', ru: 'Могу различать монолог наедине с собой (soliloquy), реплику в сторону (aside) и апострофу (apostrophe) и сказать, кто слышит каждую из них' },
    { en: 'I can explain dramatic irony as a gap between what the audience knows and what a character knows', ru: 'Могу объяснить драматическую иронию (dramatic irony) как разрыв между знанием зрителя и знанием персонажа' },
  ],
  termIds: ['subtext', 'soliloquy', 'aside', 'apostrophe', 'direct-address', 'audience', 'dramatic-irony'],
  questionIds: ['chk-concept-communication-1', 'chk-concept-communication-2'],
  sources: [{ kind: 'web', title: 'Ю. М. Лотман, Структура художественного текста, гл.9: текст и культурные коды, ожидание и традиция; раздел от с.269 в издании Об искусстве (1998), фактически прочитанные начальные подразделы', url: 'https://ruthenia.ru/lotman/papers/sht/9.html' }, { kind: 'web', title: 'IB Language A: literature guide, first assessment 2026, PDF34–35 / printed28–29: seven concepts, actual text read through the official examiner link', url: 'https://xmltwo.ibo.org/publications/EAD/2026_EN/GR1/GR1-A-Lit_EN_24.pdf' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
