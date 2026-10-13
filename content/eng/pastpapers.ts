import type { PastPaperRef } from '../../src/contract/types';

// Past IB papers for English A Literature (SL), linked to the IB PDFs on ibdocs.re. Each item is one question or extract:
// its number or form, its command term and the course concepts or topics it practises. Question text, resource booklets and
// markschemes are not copied here; the guiding questions are our own paraphrase.
export const pastPapers: PastPaperRef[] = [
  {
    id: 'eng-p1-m21-tz1',
    subject: 'eng', paper: 'P1', session: 'M21', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (non-fiction): Asks how the writer\'s vivid, detailed description builds the mood of the setting.', marks: 20, command: 'How', topicIds: ['form-nonfiction', 'p1-method'] },
      { q: 'Extract 2 (poetry): Asks how the poem\'s images communicate the speaker\'s emotions.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m21-tz2',
    subject: 'eng', paper: 'P1', session: 'M21', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (non-fiction)', marks: 20, topicIds: ['form-nonfiction', 'p1-method'] },
      { q: 'Extract 2 (drama): Asks how the bond between two female characters shapes the atmosphere of the scene.', marks: 20, command: 'In what ways', topicIds: ['form-drama', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n21',
    subject: 'eng', paper: 'P1', session: 'N21', level: 'SL',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/November%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/November%202021%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry): Asks how the poem handles differing viewpoints, and what this accomplishes.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (non-fiction)', marks: 20, topicIds: ['form-nonfiction', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m22-tz1',
    subject: 'eng', paper: 'P1', session: 'M22', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry)', marks: 20, topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how the writer shows the friction among the characters.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m22-tz2',
    subject: 'eng', paper: 'P1', session: 'M22', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry): Asks how the poem\'s imagery probes what happiness is like.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (prose)', marks: 20, topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n22',
    subject: 'eng', paper: 'P1', session: 'N22', level: 'SL',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (prose): Asks how shifting points of view in the narration generate meaning.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
      { q: 'Extract 2 (poetry): Asks in which manner the poem\'s images build its mood.', marks: 20, command: 'In what ways', topicIds: ['form-poetry', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m23-tz1',
    subject: 'eng', paper: 'P1', session: 'M23', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Asks how a solo speech reveals one character\'s personality.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how the setting builds a puzzling, uneasy tension.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m23-tz2',
    subject: 'eng', paper: 'P1', session: 'M23', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (prose): Asks which techniques the novelist uses to build the passage\'s mood, and why.', marks: 20, command: 'By what means', topicIds: ['form-prose', 'p1-method'] },
      { q: 'Extract 2 (poetry): Asks how the poem\'s tone shapes its meaning, and what that achieves.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n23-tz1',
    subject: 'eng', paper: 'P1', session: 'N23', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (prose): Asks how the narrative voice builds a feeling of threat in the extract.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
      { q: 'Extract 2 (drama): Asks how the dramatist shows the shifting bond between two characters across the scene.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n23-tz2',
    subject: 'eng', paper: 'P1', session: 'N23', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Asks how friction between characters is generated within the text, and what it accomplishes.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (form not printed)', marks: 20, topicIds: ['p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m24-tz1',
    subject: 'eng', paper: 'P1', session: 'M24', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (non-fiction)', marks: 20, topicIds: ['form-nonfiction', 'p1-method'] },
      { q: 'Extract 2 (drama): Asks how the bonds between characters are dramatised, and with what result.', marks: 20, command: 'Consider', topicIds: ['form-drama', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m24-tz2',
    subject: 'eng', paper: 'P1', session: 'M24', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Asks how the playwright shows a character\'s views on her sister and the sister\'s cultural world.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (non-fiction): Asks how juxtaposition helps the travel writer explore the life cycle.', marks: 20, command: 'How', topicIds: ['form-nonfiction', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n24-tz1',
    subject: 'eng', paper: 'P1', session: 'N24', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (non-fiction)', marks: 20, topicIds: ['form-nonfiction', 'p1-method'] },
      { q: 'Extract 2 (poetry): Asks how the poet examines a personal connection to language through sound and word choice.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n24-tz2',
    subject: 'eng', paper: 'P1', session: 'N24', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1__TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Focuses on the opposing portrayals of two characters in the extract and their impact.', marks: 20, command: 'Consider', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how the protagonist\'s attachment to his home country is constructed, and its impact.', marks: 20, command: 'Consider', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m25-tz1',
    subject: 'eng', paper: 'P1', session: 'M25', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry): Asks how non-literal language works in the poem and what effect it creates.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how the novelist builds and presents characters, and what this achieves.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m25-tz2',
    subject: 'eng', paper: 'P1', session: 'M25', level: 'SL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ2_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ2_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry)', marks: 20, topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how the natural scenery is depicted, and what the depiction accomplishes.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-m25-tz3',
    subject: 'eng', paper: 'P1', session: 'M25', level: 'SL', tz: 'TZ3',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ3_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ3_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (poetry): Asks how vivid description carries the poem\'s move from one state to another.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
      { q: 'Extract 2 (non-fiction): Asks how the place is evoked, and what impression that evocation leaves.', marks: 20, command: 'How', topicIds: ['form-nonfiction', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n25-tz1',
    subject: 'eng', paper: 'P1', session: 'N25', level: 'SL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ1_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ1_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Asks how the playwright\'s stage instructions build one character\'s personality.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (prose): Asks how juxtaposition in the extract is employed, and what results from it.', marks: 20, command: 'How', topicIds: ['form-prose', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p1-n25-tz3',
    subject: 'eng', paper: 'P1', session: 'N25', level: 'SL', tz: 'TZ3',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ3_SL.pdf' }, { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_1_TZ3_HLSL_markscheme.pdf' }],
    minutes: 75, marks: 20,
    items: [
      { q: 'Extract 1 (drama): Asks how the characters\' exchanges expose tension between them.', marks: 20, command: 'How', topicIds: ['form-drama', 'p1-method'] },
      { q: 'Extract 2 (poetry): Asks how opposing images help the poet examine notions of temporality and existence.', marks: 20, command: 'How', topicIds: ['form-poetry', 'p1-method'] },
    ],
  },
  {
    id: 'eng-p2-m23-tz1',
    subject: 'eng', paper: 'P2', session: 'M23', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 2', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
      { q: 'Question 3', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-perspective', 'concept-communication'] },
      { q: 'Question 4', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
    ],
  },
  {
    id: 'eng-p2-m23-tz2',
    subject: 'eng', paper: 'P2', session: 'M23', level: 'SLHL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ2_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-transformation'] },
      { q: 'Question 2', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-communication', 'concept-transformation'] },
      { q: 'Question 3', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-transformation', 'concept-identity'] },
      { q: 'Question 4', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
    ],
  },
  {
    id: 'eng-p2-n23-tz1',
    subject: 'eng', paper: 'P2', session: 'N23', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-communication', 'concept-culture'] },
      { q: 'Question 2', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-transformation', 'concept-creativity'] },
      { q: 'Question 3', marks: 30, command: 'Evaluate', topicIds: ['p2-question', 'concept-transformation', 'concept-representation'] },
      { q: 'Question 4', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
    ],
  },
  {
    id: 'eng-p2-n23-tz2',
    subject: 'eng', paper: 'P2', session: 'N23', level: 'SLHL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ2_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 2', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-transformation', 'concept-culture'] },
      { q: 'Question 3', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-communication', 'concept-culture'] },
      { q: 'Question 4', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
    ],
  },
  {
    id: 'eng-p2-m24-tz1',
    subject: 'eng', paper: 'P2', session: 'M24', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 2', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-creativity', 'concept-culture'] },
      { q: 'Question 3', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-communication', 'concept-perspective'] },
      { q: 'Question 4', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
    ],
  },
  {
    id: 'eng-p2-m24-tz2',
    subject: 'eng', paper: 'P2', session: 'M24', level: 'SLHL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ2_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
      { q: 'Question 2', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-identity', 'concept-culture'] },
      { q: 'Question 3', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
      { q: 'Question 4', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
    ],
  },
  {
    id: 'eng-p2-n24-tz1',
    subject: 'eng', paper: 'P2', session: 'N24', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-transformation', 'concept-creativity'] },
      { q: 'Question 2', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
      { q: 'Question 3', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-transformation', 'concept-culture'] },
      { q: 'Question 4', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
    ],
  },
  {
    id: 'eng-p2-n24-tz2',
    subject: 'eng', paper: 'P2', session: 'N24', level: 'SLHL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2__TZ2_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-communication', 'concept-culture'] },
      { q: 'Question 2', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-transformation', 'concept-creativity'] },
      { q: 'Question 3', marks: 30, command: 'Examine', topicIds: ['p2-question', 'concept-identity', 'concept-culture'] },
      { q: 'Question 4', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-culture', 'concept-representation'] },
    ],
  },
  {
    id: 'eng-p2-m25-tz1',
    subject: 'eng', paper: 'P2', session: 'M25', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2_TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
      { q: 'Question 2', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-communication', 'concept-creativity'] },
      { q: 'Question 3', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-identity', 'concept-perspective'] },
      { q: 'Question 4', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
    ],
  },
  {
    id: 'eng-p2-m25-tz2',
    subject: 'eng', paper: 'P2', session: 'M25', level: 'SLHL', tz: 'TZ2',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2_TZ2_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Consider', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 2', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-representation', 'concept-communication'] },
      { q: 'Question 3', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-culture', 'concept-perspective'] },
      { q: 'Question 4', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-culture', 'concept-identity'] },
    ],
  },
  {
    id: 'eng-p2-m25-tz3',
    subject: 'eng', paper: 'P2', session: 'M25', level: 'SLHL', tz: 'TZ3',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2_TZ3_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'How', topicIds: ['p2-question', 'concept-transformation', 'concept-identity'] },
      { q: 'Question 2', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-perspective', 'concept-transformation'] },
      { q: 'Question 3', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 4', marks: 30, command: 'Examine', topicIds: ['p2-question', 'concept-identity', 'concept-communication'] },
    ],
  },
  {
    id: 'eng-p2-n25-tz1',
    subject: 'eng', paper: 'P2', session: 'N25', level: 'SLHL', tz: 'TZ1',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2_TZ1_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-identity', 'concept-representation'] },
      { q: 'Question 2', marks: 30, command: 'Consider', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
      { q: 'Question 3', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-communication', 'concept-creativity'] },
      { q: 'Question 4', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-creativity', 'concept-culture'] },
    ],
  },
  {
    id: 'eng-p2-n25-tz3',
    subject: 'eng', paper: 'P2', session: 'N25', level: 'SLHL', tz: 'TZ3',
    files: [{ kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Studies%20in%20language%20and%20literature/English_A_Literature_paper_2_TZ3_HLSL.pdf' }],
    minutes: 105, marks: 30,
    items: [
      { q: 'Question 1', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-culture'] },
      { q: 'Question 2', marks: 30, command: 'Explore', topicIds: ['p2-question', 'concept-creativity', 'concept-communication'] },
      { q: 'Question 3', marks: 30, command: 'Compare', topicIds: ['p2-question', 'concept-perspective', 'concept-communication'] },
      { q: 'Question 4', marks: 30, command: 'Discuss', topicIds: ['p2-question', 'concept-representation', 'concept-identity'] },
    ],
  },
];
