import { useEffect, useMemo, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../contract/types';
import { useNow } from '../../hooks/useExamCountdown';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import { dubaiToday } from '../../planner/dates';
import { EXAMS, QUOTAS, getPlannerContent, loadPlannerContent, type PlannerContent } from '../../planner/data';
import { buildPlan } from '../../planner/plan';
import type { Plan } from '../../planner/types';

// The planner's content (every subject's topics and terms). undefined until it has been loaded.
export function usePlannerContent(): PlannerContent | undefined {
  const content = getPlannerContent();
  const [, rerender] = useReducer((count: number) => count + 1, 0);
  useEffect(() => {
    if (content) return undefined;
    let active = true;
    loadPlannerContent().then(
      () => {
        if (active) rerender();
      },
      error => console.error(error),
    );
    return () => {
      active = false;
    };
  }, [content]);
  return content;
}

// The plan for today's date in Dubai, rebuilt whenever the progress store changes or the date turns over.
// The plan is null until the content has loaded: the pages show a placeholder meanwhile.
export function usePlan() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const [state, update] = useLocalProgress();
  const now = useNow(10_000);
  const today = dubaiToday(now);
  const content = usePlannerContent();
  const plan = useMemo(
    () => (content ? buildPlan({ today, exams: EXAMS, quotas: QUOTAS, subjects: content.subjects, state, pastPapers: content.pastPapers }) : null),
    [today, state, content],
  );
  return { plan, state, update, now, today, lang };
}

// What a page gets once its plan exists.
export type PlanReady = Omit<ReturnType<typeof usePlan>, 'plan'> & { plan: Plan };
