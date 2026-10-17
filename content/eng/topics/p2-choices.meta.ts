import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-choices',
  subject: 'eng',
  code: 'P2.B1',
  title: { en: 'Authorial choices: what the writer does and why', ru: 'Авторские решения: что делает автор и зачем' },
  papers: ['P2'],
  order: 13,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name an authorial choice in a passage: narrative distance, dialogue, structure, imagery, setting, time or silence', ru: 'Могу назвать авторский выбор в отрывке: дистанцию повествования, диалог, структуру, образность, обстановку, время или молчание' },
    { en: 'I can explain the effect of a choice on the reader, not only name the choice', ru: 'Могу объяснить, как выбор действует на читателя, а не только назвать его' },
    { en: 'I can link a choice to the prompt in the last part of my explanation', ru: 'Могу связать выбор с заданием в последней части объяснения' },
    { en: 'I can choose two strong choices from both works instead of listing five weak ones', ru: 'Могу выбрать два сильных выбора из обоих произведений вместо пяти слабых' },
  ],
  termIds: ['narrator', 'focalisation', 'free-indirect-discourse', 'unreliable-narrator', 'setting', 'imagery', 'syntax', 'foreshadowing', 'diction'],
  questionIds: ['p2-q06', 'p2-q07', 'p2-q08', 'p2-q09', 'p2-q10', 'p1-joyce-araby', 'chk-p2-choices-1', 'chk-p2-choices-2'],
  sources: [{ kind: 'web', title: 'Joyce, Araby in Dubliners, Gutenberg2814: youthful retrospection and the marketing-street passage; actual primary context checked', url: 'https://www.gutenberg.org/files/2814/2814-h/2814-h.htm' }, { kind: 'web', title: 'IB Examiner Instructions2026, LanguageA, P2B1: broader authorial choices and quality rather than a technique quota', url: 'https://ibpublishing.ibo.org/exinst/apps/exinst/index.html?chapter=1&doc=EX_instructions_2026_e&part=8' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
