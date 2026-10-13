import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-drama',
  subject: 'eng',
  code: 'F.DRA',
  title: { en: 'Drama: dialogue, stage and the audience', ru: 'Драма: диалог, сцена и зритель' },
  papers: ['P1', 'P2'],
  order: 8,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can read stage directions as evidence and say what they show about action and tone', ru: 'Могу читать ремарки как доказательство и объяснить, что они показывают о действии и тоне' },
    { en: 'I can tell an aside from a soliloquy, and name the subtext of a line', ru: 'Могу отличить реплику в сторону от монолога и назвать подтекст реплики' },
    { en: 'I can explain dramatic irony by naming what the audience knows and the character does not', ru: 'Могу объяснить драматическую иронию, назвав, что знает зритель, а персонаж — нет' },
    { en: 'I can name the genre of a scene and say how its tone and its audience shape the meaning', ru: 'Могу назвать жанр сцены и объяснить, как тон и зритель формируют смысл' },
    { en: 'I can describe how a reversal or a deus ex machina shapes the structure of a play', ru: 'Могу описать, как перипетия или бог из машины (deus ex machina) формирует структуру пьесы' },
  ],
  termIds: ['stage-directions', 'aside', 'soliloquy', 'subtext', 'dramatic-irony', 'mise-en-scene', 'chorus', 'tragedy', 'comedy-of-manners', 'farce', 'catharsis', 'fourth-wall', 'reversal', 'stichomythia'],
  questionIds: ['p1-wilde-earnest', 'p1-ibsen-doll', 'p1-shaw-pygmalion', 'chk-form-drama-1', 'chk-form-drama-2'],
  sources: [{ kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' }],
};

export default topic;
