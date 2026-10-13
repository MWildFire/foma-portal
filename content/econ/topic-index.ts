import type { PastPaperRef, TopicMeta } from '../../src/contract/types';
import { buildTopicIndex } from '../../src/content/build-pack';

// The light part of this subject, read on the first screen of the planner and of the simulation gallery: the topic
// metadata, the past-paper links and which topic bodies exist. Terms, questions and the bodies stay in index.ts.
export default buildTopicIndex({
  topicMeta: import.meta.glob<{ default: TopicMeta }>('./**/topics/*.meta.ts', { eager: true }),
  pastPapers: import.meta.glob<{ pastPapers: PastPaperRef[] }>('./**/pastpapers.ts', { eager: true }),
  topicBody: import.meta.glob('./**/topics/*.{en,ru}.mdx'),
});
