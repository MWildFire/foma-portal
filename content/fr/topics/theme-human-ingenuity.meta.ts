import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'theme-human-ingenuity',
  subject: 'fr',
  code: 'T3',
  title: { en: 'Theme 3: Human ingenuity', ru: 'Тема 3: Человеческая изобретательность (Human ingenuity)' },
  papers: ['P1', 'P2'],
  order: 3,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain how an invention works and why it matters, in French', ru: 'Могу по-французски объяснить, как работает изобретение и почему оно важно' },
    { en: 'I can use the passive voice and make the past participle agree', ru: 'Могу использовать страдательный залог и правильно согласовывать participe passé' },
    { en: 'I can discuss research, data and experiments, and what their results show', ru: 'Могу рассказать об исследованиях, данных и опытах и объяснить, что показывают их результаты' },
    { en: 'I can discuss digital life, artificial intelligence and the safety of devices and data', ru: 'Могу обсуждать цифровую жизнь, искусственный интеллект и безопасность устройств и данных' },
  ],
  termIds: [
    'v-t3-001', 'v-t3-002', 'v-t3-003', 'v-t3-004', 'v-t3-005', 'v-t3-006', 'v-t3-007', 'v-t3-008', 'v-t3-009', 'v-t3-010',
    'v-t3-011', 'v-t3-012', 'v-t3-013', 'v-t3-014', 'v-t3-015', 'v-t3-016', 'v-t3-017', 'v-t3-018', 'v-t3-019', 'v-t3-020',
    'v-t3-021', 'v-t3-022', 'v-t3-023', 'v-t3-024', 'v-t3-025', 'v-t3-026', 'v-t3-027', 'v-t3-028', 'v-t3-029', 'v-t3-030',
    'v-t3-031', 'v-t3-032', 'v-t3-033', 'v-t3-034', 'v-t3-035', 'v-t3-036', 'v-t3-037', 'v-t3-038', 'v-t3-039', 'v-t3-040',
    'v-t3-041', 'v-t3-042', 'v-t3-043', 'v-t3-044', 'v-t3-045', 'v-t3-046', 'v-t3-047', 'v-t3-048', 'v-t3-049', 'v-t3-050',
    'v-t3-051', 'v-t3-052', 'v-t3-053', 'v-t3-054', 'v-t3-055', 'v-t3-056', 'v-t3-057', 'v-t3-058', 'v-t3-059', 'v-t3-060',
    'v-t3-061', 'v-t3-062', 'v-t3-063', 'v-t3-064', 'v-t3-065', 'v-t3-066', 'v-t3-067', 'v-t3-068', 'v-t3-069', 'v-t3-070',
    'v-t3-071', 'v-t3-072', 'v-t3-073', 'v-t3-074', 'v-t3-075', 'v-t3-076', 'v-t3-077', 'v-t3-078', 'v-t3-079', 'v-t3-080',
    'v-t3-081', 'v-t3-082', 'v-t3-083', 'v-t3-084', 'v-t3-085', 'v-t3-086', 'v-t3-087', 'v-t3-088', 'v-t3-089', 'v-t3-090',
  ],
  questionIds: ['t3-q1', 't3-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'own', title: "Authors' French B material (2026)" },
  ],
};

export default topic;
