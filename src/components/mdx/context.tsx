import { createContext, useContext } from 'react';
import type { SubjectPack } from '../../contract/pack';
import type { Lang } from '../../contract/types';
import { useLangT } from '../content/useLangT';

// What an MDX component needs to know about the page it sits on. The MDX gives components string props only
// (an id, a title), so the subject, the topic and the data come from here.
export interface TopicContextValue {
  subjectId: string;
  topicId: string;
  pack: SubjectPack;
  /** Language of the body being rendered. In EN+RU mode each column has its own provider. */
  contentLang: Lang;
  /** Language of the app UI (the switch in the header). Nothing in a topic body reads it: simulations get contentLang. */
  uiLang: Lang;
}

const TopicContext = createContext<TopicContextValue | null>(null);

export const TopicContextProvider = TopicContext.Provider;

// null outside a topic page; components then show a visible warning instead of crashing.
export function useTopicContext(): TopicContextValue | null {
  return useContext(TopicContext);
}

// Strings of the `topic` namespace in the language of the body the component sits in.
export function useBodyT() {
  return useLangT(useTopicContext()?.contentLang);
}
