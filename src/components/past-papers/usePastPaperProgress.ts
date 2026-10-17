import { useLocalProgress } from '../../hooks/useLocalProgress';
import type { PastPaperProgress } from '../../lib/storage';

// that the timers of those papers read.
export function usePastPaperProgress(subject: string) {
  const [state, update] = useLocalProgress();
  const keyOf = (paperId: string) => `${subject}/${paperId}`;

  return {
    progressOf: (paperId: string): PastPaperProgress | undefined => state.pastPapers[keyOf(paperId)],
    setScore: (paperId: string, itemIndex: number, score: number) => update(current => {
      const key = keyOf(paperId);
      const previous = current.pastPapers[key] ?? {};
      return { ...current, pastPapers: { ...current.pastPapers, [key]: { ...previous, scores: { ...previous.scores, [String(itemIndex)]: score } } } };
    }),
    setSolved: (paperId: string, date: string | undefined) => update(current => {
      const key = keyOf(paperId);
      const previous = current.pastPapers[key] ?? {};
      return { ...current, pastPapers: { ...current.pastPapers, [key]: { ...previous, solved: date } } };
    }),
  };
}
