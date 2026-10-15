import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'w-yun-dong-ju',
  subject: 'eng',
  code: 'W.yun-dong-ju',
  title: { en: 'Sky, Wind, and Stars: selected poems (Yun Dong-ju)', ru: '«Небо, ветер, звёзды» — избранные стихи (Юн Дон Джу)' },
  papers: ['P2'],
  order: 29,
  minutes: 60,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
  {
    "en": "I can explain the likely three and spares without assuming IO eligibility",
    "ru": "Могу назвать вероятные три и запасные, не предполагая допустимость после IO"
  },
  {
    "en": "I can locate evidence in both the Korean original (K) and the class translation (C)",
    "ru": "Могу найти доказательство в корейском оригинале (K) и переводе класса (C)"
  },
  {
    "en": "I can analyse loss, self-judgement and selective sacrifice through images, repetition and address",
    "ru": "Могу анализировать утрату, самоосуждение и избирательную жертву через образы, повтор и обращения"
  },
  {
    "en": "I can compare each likely poem with drama and non-fiction, naming effects of form",
    "ru": "Могу сравнить каждое вероятное стихотворение с драмой и нон-фикшн, объясняя эффекты формы"
  },
  {
    "en": "I can distinguish a composition date from publication and identify unsettled date variants",
    "ru": "Могу отличить дату написания от публикации и указать спорные датировки"
  }
],
  termIds: ['symbol', 'motif', 'lyric-persona', 'metaphor', 'apostrophe', 'paradox', 'imagery'],
  questionIds: ['w-yun-dong-ju-1', 'w-yun-dong-ju-2', 'w-yun-dong-ju-3'],
  sources: [
  {
    "kind": "web",
    "title": "Korean Wikisource: Sky, Wind and Stars, 1948 text (explicit Korean lines)",
    "url": "https://ko.wikisource.org/wiki/하늘과_바람과_별과_시_(1948년)"
  },
  {
    "kind": "web",
    "title": "Korean Wikisource: 1955 edition (date variants)",
    "url": "https://ko.wikisource.org/wiki/하늘과_바람과_별과_시_(1955년)"
  },
  {
    "kind": "school",
    "title": "Sky, Wind and Stars anthology (class translation; translator uncredited)",
    "locator": "Poem title and explicit English line; no printed page numbers"
  }
],
};

export default topic;
