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
    "en": "I can distinguish reference examples from the unconfirmed school three and check eligibility after the actual school answer",
    "ru": "Могу отличить справочные примеры от неподтверждённой школьной тройки и проверить допустимость после фактического ответа школы"
  },
  {
    "en": "I can distinguish Korean reference evidence (K) from the supplied English version (C), whose exact school edition and translator remain unconfirmed",
    "ru": "Могу различить корейские справочные строки (K) и предоставленный английский вариант (C); точное школьное издание и переводчик ещё не подтверждены"
  },
  {
    "en": "I can analyse loss, self-judgement and selective sacrifice through images, repetition and address",
    "ru": "Могу анализировать утрату, самоосуждение и избирательную жертву через образы, повтор и обращения"
  },
  {
    "en": "I can practise comparing reference examples with drama and non-fiction without treating them as a confirmed school selection",
    "ru": "Могу тренировать сравнение справочных примеров с драмой и нон-фикшн, не выдавая их за подтверждённый школьный выбор"
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
    "title": "Korean Wikisource: 1955 edition (Confession date correction)",
    "url": "https://ko.wikisource.org/wiki/하늘과_바람과_별과_시_(1955년)"
  },
  {
    "kind": "school",
    "title": "Supplied Sky, Wind and Stars reference anthology; exact school edition and translator unconfirmed",
    "locator": "Poem title and explicit English line; no printed page numbers"
  }
],
};

export default topic;
