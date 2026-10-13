import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'theme-sharing-planet',
  subject: 'fr',
  code: 'T5',
  title: { en: 'Theme 5: Sharing the planet', ru: 'Тема 5: Общая планета (Sharing the planet)' },
  papers: ['P1', 'P2'],
  order: 5,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe an environmental problem, its causes and its effects in French', ru: 'Могу описать экологическую проблему, её причины и последствия по-французски' },
    { en: 'I can propose solutions and explain what a local action changes', ru: 'Могу предложить решения и объяснить, что меняет местная инициатива' },
    { en: 'I can use the passive and the conditionnel to describe actions and their results', ru: 'Могу использовать passif и conditionnel, чтобы описывать действия и их результаты' },
    { en: 'I can understand texts about energy, waste, water and solidarity in Paper 2', ru: 'Могу понимать тексты об энергии, отходах, воде и солидарности в Paper 2' },
  ],
  termIds: [
    'v-t5-001', 'v-t5-002', 'v-t5-003', 'v-t5-004', 'v-t5-005', 'v-t5-006', 'v-t5-007', 'v-t5-008', 'v-t5-009', 'v-t5-010',
    'v-t5-011', 'v-t5-012', 'v-t5-013', 'v-t5-014', 'v-t5-015', 'v-t5-016', 'v-t5-017', 'v-t5-018', 'v-t5-019', 'v-t5-020',
    'v-t5-021', 'v-t5-022', 'v-t5-023', 'v-t5-024', 'v-t5-025', 'v-t5-026', 'v-t5-027', 'v-t5-028', 'v-t5-029', 'v-t5-030',
    'v-t5-031', 'v-t5-032', 'v-t5-033', 'v-t5-034', 'v-t5-035', 'v-t5-036', 'v-t5-037', 'v-t5-038', 'v-t5-039', 'v-t5-040',
    'v-t5-041', 'v-t5-042', 'v-t5-043', 'v-t5-044', 'v-t5-045', 'v-t5-046', 'v-t5-047', 'v-t5-048', 'v-t5-049', 'v-t5-050',
    'v-t5-051', 'v-t5-052', 'v-t5-053', 'v-t5-054', 'v-t5-055', 'v-t5-056', 'v-t5-057', 'v-t5-058', 'v-t5-059', 'v-t5-060',
    'v-t5-061', 'v-t5-062', 'v-t5-063', 'v-t5-064', 'v-t5-065', 'v-t5-066', 'v-t5-067', 'v-t5-068', 'v-t5-069', 'v-t5-070',
    'v-t5-071', 'v-t5-072', 'v-t5-073', 'v-t5-074', 'v-t5-075', 'v-t5-076', 'v-t5-077', 'v-t5-078', 'v-t5-079', 'v-t5-080',
    'v-t5-081', 'v-t5-082', 'v-t5-083', 'v-t5-084', 'v-t5-085', 'v-t5-086', 'v-t5-087', 'v-t5-088', 'v-t5-089', 'v-t5-090',
  ],
  questionIds: ['t5-q1', 't5-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'own', title: "Authors' French B material (2026)" },
  ],
};

export default topic;
