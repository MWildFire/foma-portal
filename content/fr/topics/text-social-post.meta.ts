import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-social-post',
  subject: 'fr',
  code: 'P1.social-post',
  title: { en: 'Writing: social media post', ru: 'Письмо: пост в соцсетях (social media post)' },
  papers: ['P1'],
  order: 20,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a post with a hook title, short paragraphs and a clear call to action', ru: 'Могу написать пост с заголовком-крючком (hook), короткими абзацами и призывом к действию' },
    { en: 'I can choose tu or a neutral tone with vous and keep the same choice to the end', ru: 'Могу выбрать tu или нейтральный тон с vous и держать выбор до конца текста' },
    { en: 'I can describe an experience abroad: what happened, where, and what it changed for me', ru: 'Могу рассказать об опыте за границей: что произошло, где и что это изменило' },
    { en: 'I can use the passé composé and the imperfect in a personal story', ru: 'Могу использовать passé composé и imparfait в личном рассказе' },
    { en: 'I can use hashtags and up to three emojis in a way that suits a social network', ru: 'Могу уместно использовать хэштеги и до трёх эмодзи' },
  ],
  termIds: [],
  questionIds: ['p1-social-post', 'p1-social-post-q1', 'p1-social-post-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Message publié dans les médias sociaux / dialogue en ligne (page 37007)' }],
};

export default topic;
