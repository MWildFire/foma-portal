import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-identity',
  subject: 'eng',
  code: 'C.ID',
  title: { en: 'Key concept: identity', ru: 'Ключевое понятие: идентичность' },
  papers: ['P1', 'P2'],
  order: 17,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain identity as the question of who a person is and who others say they must be', ru: 'Могу объяснить идентичность как вопрос о том, кто человек и кем другие велят ему быть' },
    { en: 'I can name the pressures on identity: family, class, gender, nation, language, names and memory', ru: 'Могу назвать давление на идентичность: семья, класс, пол, нация, язык, имена и память' },
    { en: 'I can write a concept paragraph for Paper 2 that asks a precise question about identity and answers it with a technique', ru: 'Могу написать абзац о концепте для Paper 2: точный вопрос об идентичности и ответ через приём' },
    { en: 'I can link identity to a narrator, a voice or an interior monologue and say what the link shows', ru: 'Могу связать идентичность с рассказчиком, голосом или внутренним монологом и сказать, что эта связь показывает' },
  ],
  termIds: ['narrator', 'first-person-narration', 'lyric-persona', 'protagonist', 'interior-monologue', 'foil'],
  questionIds: ['chk-concept-identity-1', 'chk-concept-identity-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
