import type { SyllabusItem } from '../../../src/contract/types';

// Paper 1 options that [redacted]'s mock uses. Coverage is computed from this list, so an option outside the mock is not listed.
// Option G (Urban environments) first; the second option is added once its programme codes are confirmed (see ops/status).
export const syllabus: SyllabusItem[] = [
  { code: 'G.1', title: { en: 'The variety of urban environments', ru: 'Разнообразие городской среды' }, papers: ['P1'], option: 'G' },
  { code: 'G.2', title: { en: 'Changing urban systems', ru: 'Меняющиеся городские системы' }, papers: ['P1'], option: 'G' },
  { code: 'G.3', title: { en: 'Urban environmental and social stresses', ru: 'Экологические и социальные стрессы городов' }, papers: ['P1'], option: 'G' },
  { code: 'G.4', title: { en: 'Building sustainable urban systems for the future', ru: 'Устойчивые городские системы будущего' }, papers: ['P1'], option: 'G' },
  // Exam technique for the extended answer of option G, not a programme code (same pattern as core-essay-N in the core subject).
  { code: 'G-essay', title: { en: 'Extended answers in Option G', ru: 'Развёрнутые ответы по опции G' }, papers: ['P1'], option: 'G' },
];
