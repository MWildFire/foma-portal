// Hash routes (HashRouter). Paths follow PLAN.md §1.
export const ROUTES = {
  today: () => '/',
  plan: () => '/plan',
  exams: () => '/exams',
  subject: (subject: string) => `/s/${subject}`,
  topic: (subject: string, topic: string) => `/s/${subject}/t/${topic}`,
  terms: (subject: string) => `/s/${subject}/terms`,
  flashcards: (subject: string) => `/s/${subject}/terms?mode=cards`,
  formulas: (subject: string) => `/s/${subject}/formulas`,
  practice: (subject: string) => `/s/${subject}/practice`,
  paper: (subject: string, paper: string) => `/s/${subject}/paper/${paper}`,
  sims: () => '/sims',
  report: () => '/report',
  settings: () => '/settings',
} as const;
