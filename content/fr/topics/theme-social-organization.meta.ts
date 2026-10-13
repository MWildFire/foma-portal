import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'theme-social-organization',
  subject: 'fr',
  code: 'T4',
  title: { en: 'Theme 4: Social organization', ru: 'Тема 4: Общественная организация (Social organization)' },
  papers: ['P1', 'P2'],
  order: 4,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe school, studies and career plans in French', ru: 'Могу рассказать по-французски о школе, учёбе и планах на карьеру' },
    { en: "I can talk about work, unemployment and workers' rights", ru: 'Могу говорить о работе, безработице и правах работников' },
    { en: 'I can describe voluntary work and how associations help a community', ru: 'Могу описать волонтёрскую работу и то, как ассоциации помогают обществу' },
    { en: 'I can explain public services, health issues and local rules', ru: 'Могу объяснить, как работают государственные услуги, проблемы здоровья и местные правила' },
    { en: 'I can discuss inequality and the role of the media in forming opinions', ru: 'Могу обсуждать неравенство и роль СМИ в формировании мнений' },
    { en: 'I can use the subjunctive after il faut que and bien que in a formal text', ru: 'Могу использовать subjonctif после il faut que и bien que в официальном тексте' },
  ],
  termIds: [
    'v-t4-001', 'v-t4-002', 'v-t4-003', 'v-t4-004', 'v-t4-005', 'v-t4-006', 'v-t4-007', 'v-t4-008', 'v-t4-009', 'v-t4-010',
    'v-t4-011', 'v-t4-012', 'v-t4-013', 'v-t4-014', 'v-t4-015', 'v-t4-016', 'v-t4-017', 'v-t4-018', 'v-t4-019', 'v-t4-020',
    'v-t4-021', 'v-t4-022', 'v-t4-023', 'v-t4-024', 'v-t4-025', 'v-t4-026', 'v-t4-027', 'v-t4-028', 'v-t4-029', 'v-t4-030',
    'v-t4-031', 'v-t4-032', 'v-t4-033', 'v-t4-034', 'v-t4-035', 'v-t4-036', 'v-t4-037', 'v-t4-038', 'v-t4-039', 'v-t4-040',
    'v-t4-041', 'v-t4-042', 'v-t4-043', 'v-t4-044', 'v-t4-045', 'v-t4-046', 'v-t4-047', 'v-t4-048', 'v-t4-049', 'v-t4-050',
    'v-t4-051', 'v-t4-052', 'v-t4-053', 'v-t4-054', 'v-t4-055', 'v-t4-056', 'v-t4-057', 'v-t4-058', 'v-t4-059', 'v-t4-060',
    'v-t4-061', 'v-t4-062', 'v-t4-063', 'v-t4-064', 'v-t4-065', 'v-t4-066', 'v-t4-067', 'v-t4-068', 'v-t4-069', 'v-t4-070',
    'v-t4-071', 'v-t4-072', 'v-t4-073', 'v-t4-074', 'v-t4-075', 'v-t4-076', 'v-t4-077', 'v-t4-078', 'v-t4-079', 'v-t4-080',
    'v-t4-081', 'v-t4-082', 'v-t4-083', 'v-t4-084', 'v-t4-085', 'v-t4-086', 'v-t4-087', 'v-t4-088', 'v-t4-089', 'v-t4-090',
  ],
  questionIds: ['t4-q1', 't4-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'thinkib', title: 'ThinkIB, French B SL: Organisation sociale (page 42631)', locator: 'Relations sociales; Communauté; Engagement social; Éducation; Monde du travail; Ordre public' },
  ],
};

export default topic;
