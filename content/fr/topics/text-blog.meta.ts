import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-blog',
  subject: 'fr',
  code: 'P1.blog',
  title: { en: 'Writing: blog post', ru: 'Письмо: пост для блога (blog)' },
  papers: ['P1'],
  order: 8,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a personal blog post with a title, a date line and a signature', ru: 'Могу написать личный пост в блоге с заголовком, строкой с датой и подписью' },
    { en: 'I can tell an experience in the passé composé and describe its background in the imparfait', ru: 'Могу рассказать о событии в passé composé и описать фон в imparfait' },
    { en: 'I can address my readers with tu and keep the register informal', ru: 'Могу обращаться к читателям на «ты» и сохранять неформальный регистр' },
    { en: 'I can give an opinion with à mon avis, selon moi or je pense que, and add a reason', ru: 'Могу выразить мнение фразами à mon avis, selon moi или je pense que и привести причину' },
    { en: 'I can use rhetorical questions and a call to react to engage the readers', ru: 'Могу использовать риторические вопросы и призыв ответить, чтобы вовлечь читателей' },
  ],
  termIds: [],
  questionIds: ['p1-blog', 'p1-blog-q1', 'p1-blog-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Blog (page 36794)' }],
};

export default topic;
