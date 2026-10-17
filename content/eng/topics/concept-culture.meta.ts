import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-culture',
  subject: 'eng',
  code: 'C.CU',
  title: { en: 'Key concept: culture', ru: 'Ключевое понятие: культура' },
  papers: ['P1', 'P2'],
  order: 18,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain culture as the shared values, customs, rituals, language, class and religion of a group', ru: 'Могу объяснить культуру как общие ценности, обычаи, обряды, язык, класс и религию группы' },
    { en: 'I can recognise how a writer shows culture through ritual, food, rules of behaviour, speech, setting and symbol', ru: 'Могу увидеть, как автор показывает культуру через обряд, еду, правила поведения, речь, обстановку и символ' },
    { en: 'I can describe a clash between cultures using evidence from the text, without stereotyping any real people', ru: 'Могу описать столкновение культур, опираясь на текст, и не делать стереотипов о реальных людях' },
    { en: 'I can name a technique such as symbol, motif or juxtaposition and say what it shows about a culture', ru: 'Могу назвать приём, например символ, мотив или сопоставление, и сказать, что он показывает о культуре' },
  ],
  termIds: ['symbol', 'motif', 'juxtaposition', 'setting', 'vernacular', 'chorus'],
  questionIds: ['chk-concept-culture-1', 'chk-concept-culture-2'],
  sources: [{ kind: 'web', title: 'Ю. М. Лотман, Структура художественного текста, гл.9: текст и культурные коды, ожидание и традиция; раздел от с.269 в издании Об искусстве (1998), фактически прочитанные начальные подразделы', url: 'https://ruthenia.ru/lotman/papers/sht/9.html' }, { kind: 'web', title: 'IB Language A: literature guide, first assessment 2026, PDF34–35 / printed28–29: seven concepts, actual text read through the official examiner link', url: 'https://xmltwo.ibo.org/publications/EAD/2026_EN/GR1/GR1-A-Lit_EN_24.pdf' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
