import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-transformation',
  subject: 'eng',
  code: 'C.TR',
  title: { en: 'Key concept: transformation', ru: 'Ключевое понятие: трансформация' },
  papers: ['P1', 'P2'],
  order: 22,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can say what changes in a text (a character, a relationship, a society or a self) and where the change happens', ru: 'Могу назвать, что меняется в тексте (персонаж, отношения, общество или «я») и где происходит перемена' },
    { en: 'I can find a turning point and say how the text marks it (epiphany, reversal, volta, climax)', ru: 'Могу найти поворотный момент и объяснить, как текст его отмечает (эпифания, перипетия, вольта, кульминация)' },
    { en: 'I can compare the start and the end of a text through voice, tone, imagery and structure', ru: 'Могу сравнить начало и конец текста через голос, тон, образность и структуру' },
    { en: 'I can explain what a change does to the reader, not only what happens in the plot', ru: 'Могу объяснить, что перемена делает с читателем, а не только то, что происходит в сюжете' },
    { en: 'I can use transformation as a key concept that links a Paper 1 extract or two works in Paper 2', ru: 'Могу использовать трансформацию как ключевое понятие, которое связывает отрывок в Paper 1 или два произведения в Paper 2' },
  ],
  termIds: ['epiphany', 'reversal', 'volta', 'climax', 'denouement', 'pace'],
  questionIds: ['chk-concept-transformation-1', 'chk-concept-transformation-2'],
  sources: [{ kind: 'web', title: 'Ю. М. Лотман, Структура художественного текста, гл.9: текст и культурные коды, ожидание и традиция; раздел от с.269 в издании Об искусстве (1998), фактически прочитанные начальные подразделы', url: 'https://ruthenia.ru/lotman/papers/sht/9.html' }, { kind: 'web', title: 'IB Language A: literature guide, first assessment 2026, PDF34–35 / printed28–29: seven concepts, actual text read through the official examiner link', url: 'https://xmltwo.ibo.org/publications/EAD/2026_EN/GR1/GR1-A-Lit_EN_24.pdf' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
