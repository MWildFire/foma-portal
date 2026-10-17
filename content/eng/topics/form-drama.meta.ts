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
  termIds: ['stage-directions', 'aside', 'soliloquy', 'subtext', 'dramatic-irony', 'mise-en-scene', 'chorus', 'tragedy', 'comedy-of-manners', 'farce', 'catharsis', 'fourth-wall', 'reversal', 'stichomythia', 'comedy', 'theatre-of-the-absurd', 'deus-ex-machina'],
  questionIds: ['p1-wilde-earnest', 'p1-ibsen-doll', 'p1-shaw-pygmalion', 'chk-form-drama-1', 'chk-form-drama-2'],
  sources: [{ kind: 'web', title: 'Ibsen, A Doll’s House, Act3 final conversation; Archer translation, collected edition1909, Gutenberg70566; primary text checked', url: 'https://www.gutenberg.org/cache/epub/70566/pg70566.txt' }, { kind: 'web', title: 'Shakespeare, Henry V, Folger Prologue1–36: Chorus directly frames the performed narrative', url: 'https://www.folger.edu/explore/shakespeares-works/henry-v/read/PRO/' }, { kind: 'web', title: 'Aristotle, Poetics VI; Butcher translation, Gutenberg1974: pity, fear and purgation in the theoretical account of tragedy', url: 'https://www.gutenberg.org/cache/epub/1974/pg1974.txt' }, { kind: 'web', title: 'РИИИ, Театральные термины и понятия, выпуск III (2015)', url: 'https://artcenter.ru/wp-content/uploads/2013/10/Театральные-термины-и-понятия.pdf', locator: 'Н. А. Таршис, Стихомифия, с.239 (PDF240); В.И.Максимов, Катарсис, с.90–92 (PDF91–93)' }, { kind: 'web', title: 'Е.А.Дунаева, Абсурда театр, Большая российская энциклопедия, т.1 (2005), с.44', url: 'https://old.bigenc.ru/theatre_and_cinema/text/661729' }, { kind: 'own', title: 'Own wording' }],
};

export default topic;
