import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'theme-identities',
  subject: 'fr',
  code: 'T1',
  title: { en: 'Theme 1: Identities', ru: 'Тема 1: Идентичность (Identities)' },
  papers: ['P1', 'P2'],
  order: 1,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe my personality, appearance and interests in French', ru: 'Могу описать свой характер, внешность и интересы по-французски' },
    { en: 'I can talk about my family, my origins and the languages I speak', ru: 'Могу рассказать о семье, происхождении и языках, которыми владею' },
    { en: 'I can explain how online life and multicultural life shape identity', ru: 'Могу объяснить, как жизнь в сети и многокультурная среда влияют на идентичность' },
    { en: 'I can describe who I was and who I am now, using the imparfait and the present', ru: 'Могу описать, каким я был и каков я сейчас, используя imparfait и présent' },
  ],
  termIds: [
    'v-school-001', 'v-school-002',
    'v-t1-001', 'v-t1-002', 'v-t1-003', 'v-t1-004', 'v-t1-005', 'v-t1-006', 'v-t1-007', 'v-t1-008', 'v-t1-009', 'v-t1-010',
    'v-t1-011', 'v-t1-012', 'v-t1-013', 'v-t1-014', 'v-t1-015', 'v-t1-016', 'v-t1-017', 'v-t1-018', 'v-t1-019', 'v-t1-020',
    'v-t1-021', 'v-t1-022', 'v-t1-023', 'v-t1-024', 'v-t1-025', 'v-t1-026', 'v-t1-027', 'v-t1-028', 'v-t1-029', 'v-t1-030',
    'v-t1-031', 'v-t1-032', 'v-t1-033', 'v-t1-034', 'v-t1-035', 'v-t1-036', 'v-t1-037', 'v-t1-038', 'v-t1-039', 'v-t1-040',
    'v-t1-041', 'v-t1-042', 'v-t1-043', 'v-t1-044', 'v-t1-045', 'v-t1-046', 'v-t1-047', 'v-t1-048', 'v-t1-049', 'v-t1-050',
    'v-t1-051', 'v-t1-052', 'v-t1-053', 'v-t1-054', 'v-t1-055', 'v-t1-056', 'v-t1-057', 'v-t1-058', 'v-t1-059', 'v-t1-060',
    'v-t1-061', 'v-t1-062', 'v-t1-063', 'v-t1-064', 'v-t1-065', 'v-t1-066', 'v-t1-067', 'v-t1-068', 'v-t1-069', 'v-t1-070',
    'v-t1-071', 'v-t1-072', 'v-t1-073', 'v-t1-074', 'v-t1-075', 'v-t1-076', 'v-t1-077', 'v-t1-078', 'v-t1-079', 'v-t1-080',
    'v-t1-081', 'v-t1-082', 'v-t1-083', 'v-t1-084', 'v-t1-085', 'v-t1-086', 'v-t1-087', 'v-t1-088', 'v-t1-089', 'v-t1-090',
  ],
  questionIds: ['t1-q1', 't1-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'thinkib', title: 'ThinkIB, French B SL: Identités (page 42626)', locator: 'Styles de vie; Santé et bien-être; Convictions et valeurs; Sous-cultures; Langue et identité' },
  ],
};

export default topic;
