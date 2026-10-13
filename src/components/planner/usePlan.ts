import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../contract/types';
import { useNow } from '../../hooks/useExamCountdown';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import { dubaiToday } from '../../planner/dates';
import { EXAMS, QUOTAS, plannerSubjects } from '../../planner/data';
import { buildPlan } from '../../planner/plan';

// The plan for today's date in Dubai, rebuilt whenever the progress store changes or the date turns over.
export function usePlan() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language.startsWith('ru') ? 'ru' : 'en';
  const [state, update] = useLocalProgress();
  const now = useNow(10_000);
  const today = dubaiToday(now);
  const plan = useMemo(
    () => buildPlan({ today, exams: EXAMS, quotas: QUOTAS, subjects: plannerSubjects(), state }),
    [today, state],
  );
  return { plan, state, update, now, today, lang };
}
