import type { SyllabusItem } from '../../../src/contract/types';

// Paper 1 options that [redacted]'s mock uses. Coverage is computed from this list, so an option outside the mock is not listed.
// Option G (Urban environments) first, then option A (Freshwater). S1 confirmed option A from the school's ThinkIB
// section and Classroom topic (ops/requests.md, 13.10).
// Programme titles for option A follow the four units of the 2017 guide, as in the Oxford course book.
export const syllabus: SyllabusItem[] = [
  { code: 'A.1', title: { en: 'Drainage basin hydrology and geomorphology', ru: 'Гидрология и геоморфология речного бассейна' }, papers: ['P1'], option: 'A' },
  { code: 'A.2', title: { en: 'Flooding and flood mitigation', ru: 'Наводнения и их смягчение' }, papers: ['P1'], option: 'A' },
  { code: 'A.3', title: { en: 'Water scarcity and water quality', ru: 'Дефицит воды и качество воды' }, papers: ['P1'], option: 'A' },
  { code: 'A.4', title: { en: 'Water management futures', ru: 'Будущее управления водными ресурсами' }, papers: ['P1'], option: 'A' },
  // Exam technique for the extended answer of option A, not a programme code.
  { code: 'A-essay', title: { en: 'Extended answers in Option A', ru: 'Развёрнутые ответы по опции A' }, papers: ['P1'], option: 'A' },
  { code: 'G.1', title: { en: 'The variety of urban environments', ru: 'Разнообразие городской среды' }, papers: ['P1'], option: 'G' },
  { code: 'G.2', title: { en: 'Changing urban systems', ru: 'Меняющиеся городские системы' }, papers: ['P1'], option: 'G' },
  { code: 'G.3', title: { en: 'Urban environmental and social stresses', ru: 'Экологические и социальные стрессы городов' }, papers: ['P1'], option: 'G' },
  { code: 'G.4', title: { en: 'Building sustainable urban systems for the future', ru: 'Устойчивые городские системы будущего' }, papers: ['P1'], option: 'G' },
  // Exam technique for the extended answer of option G, not a programme code (same pattern as core-essay-N in the core subject).
  { code: 'G-essay', title: { en: 'Extended answers in Option G', ru: 'Развёрнутые ответы по опции G' }, papers: ['P1'], option: 'G' },
];
