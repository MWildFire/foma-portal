import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-prose',
  subject: 'eng',
  code: 'F.PRO',
  title: { en: 'Prose: narration, character and structure', ru: 'Проза: повествование, персонаж и структура' },
  papers: ['P1', 'P2'],
  order: 7,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the narrator and the type of narration, and say what the reader is allowed to know', ru: 'Могу назвать рассказчика и тип повествования и сказать, что может знать читатель' },
    { en: 'I can spot free indirect discourse and say whose voice it carries', ru: 'Могу найти несобственно-прямую речь и объяснить, чей голос в ней звучит' },
    { en: 'I can tell direct characterisation from indirect characterisation, with examples', ru: 'Могу отличить прямую характеристику от косвенной и привести примеры' },
    { en: 'I can describe the structure of a short story: exposition, climax, denouement and flashback', ru: 'Могу описать структуру рассказа: экспозиция, кульминация, развязка и ретроспекция' },
    { en: 'I can explain how a setting or a description of nature contrasts with, or mirrors, a character\'s mood', ru: 'Могу объяснить, как обстановка или описание природы контрастирует с настроением героя или отражает его' },
  ],
  termIds: ['narrator', 'first-person-narration', 'third-person-narration', 'omniscient-narrator', 'unreliable-narrator', 'focalisation', 'free-indirect-discourse', 'stream-of-consciousness', 'interior-monologue', 'direct-characterisation', 'indirect-characterisation', 'exposition', 'setting', 'pathetic-fallacy', 'plot', 'flashback', 'frame-narrative', 'antagonist'],
  questionIds: ['p1-chekhov-lady', 'p1-joyce-araby', 'p1-mansfield-garden', 'p1-chopin-hour', 'chk-form-prose-1', 'chk-form-prose-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
