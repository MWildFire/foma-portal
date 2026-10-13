import type { TFunction } from 'i18next';
import type { Lang, PaperId } from '../../contract/types';
import { splitDuration } from '../../planner/countdown';
import type { PlanBlock } from '../../planner/types';
import { pickText } from '../../lib/text';

// Text for blocks and durations. `t` is the translator of the "planner" namespace.

export function paperLabel(t: TFunction, paper: PaperId, part?: string): string {
  const base = t('paper', { n: paper.slice(1) });
  return part ? `${base}, ${t(`part.${part}`, { defaultValue: part })}` : base;
}

export function formatMinutes(t: TFunction, minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return t('minutes', { n: rest });
  if (rest === 0) return t('hours', { h: hours });
  return t('hoursMinutes', { h: hours, m: rest });
}

// "13 d 7 h 42 min", "7 h 42 min" or "42 min". Whole minutes, rounded down; under a minute reads "< 1 min".
export function formatRemaining(t: TFunction, ms: number): string {
  const { days, hours, minutes } = splitDuration(ms);
  const parts: string[] = [];
  if (days > 0) parts.push(`${days} ${t('unit.d')}`);
  if (days > 0 || hours > 0) parts.push(`${hours} ${t('unit.h')}`);
  parts.push(days === 0 && hours === 0 && minutes === 0 ? t('lessThanMinute') : `${minutes} ${t('unit.min')}`);
  return parts.join(' ');
}

export interface BlockText {
  kind: string;
  title: string;
  detail: string | null;
}

export function describeBlock(block: PlanBlock, lang: Lang, t: TFunction): BlockText {
  const kind = t(`kind.${block.kind}`);
  switch (block.kind) {
    case 'recall':
      return { kind, title: t('recallTitle'), detail: null };
    case 'topic': {
      const title = block.title ? pickText(block.title, lang) : block.topicId ?? '';
      const total = block.totalMinutes ?? 0;
      const start = block.start ?? 0;
      const partial = total > 0 && (start > 0 || block.minutes < total);
      return { kind, title, detail: partial ? t('slice', { from: start, to: start + block.minutes, total }) : null };
    }
    case 'practice':
      return { kind, title: block.title ? pickText(block.title, lang) : block.topicId ?? '', detail: null };
    case 'timed':
      return { kind, title: block.paper ? paperLabel(t, block.paper) : t('kind.timed'), detail: block.note ?? null };
    case 'paper':
      return { kind, title: block.paper ? paperLabel(t, block.paper, block.part) : t('kind.paper'), detail: t('paperHint') };
    case 'study':
    default:
      return { kind, title: t('studyTitle'), detail: t('studyHint') };
  }
}
