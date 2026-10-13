import type { L, Question, SourceRef, Term } from '../../src/contract/types';

// Types the fr subject needs on top of the shared contract (src/contract/types.ts).
//
// French text sits in a `fr` field next to `en` and `ru`. The shared `L` has no `fr` yet, so ops/requests.md asks S0
// to add `fr?: string` to it. Until that lands, FrL is a superset of L: every object typed with these interfaces is
// still assignable to the contract types, and `npm run typecheck` passes either way.

export type FrL = L & { fr?: string };

export interface FrQuestion extends Omit<Question, 'prompt' | 'stimulus' | 'markscheme' | 'model' | 'hints'> {
  prompt: FrL;
  stimulus?: FrL;
  markscheme: FrL;
  model?: FrL;
  hints?: FrL[];
}

export interface FrTerm extends Omit<Term, 'term' | 'def' | 'example' | 'pitfall'> {
  term: FrL;                 // term.fr is the French headword, term.en / term.ru the glosses
  def: FrL;
  example?: FrL;             // example.fr is one French sentence, example.en / example.ru its translation
  pitfall?: FrL;
}

// Amazon Polly neural voices used for the listening tracks (fr-FR, fr-FR, fr-CA).
export type PollyVoice = 'Lea' | 'Remi' | 'Gabrielle';

export type ProgrammeTheme = 'T1' | 'T2' | 'T3' | 'T4' | 'T5';

export interface ListeningTurn {
  speaker: string;           // a short label in French, for example 'Claire' or 'Le présentateur'
  voice: PollyVoice;
  fr: string;                // what this speaker says, in French; a line may start with [pause 1.5s] for a longer gap
}

export interface ListeningTrack {
  id: string;                // kebab, equals the file name in content/fr/listening/
  theme: ProgrammeTheme;
  title: L;
  level: 'B1' | 'B2';
  genre: 'dialogue' | 'interview' | 'announcement' | 'podcast' | 'report';
  turns: ListeningTurn[];    // the script; the transcript and the Polly SSML are both built from it
  questionIds: string[];     // Questions with paper 'P2' and section 'l1' … 'l8' (content/fr/questions/)
  audio: string;             // public path, '/audio/fr/<id>.mp3', written by scripts/fr-polly.sh
  source: SourceRef;
}

export interface ReadingPassage {
  id: string;                // kebab, equals the file name in content/fr/reading/
  theme: ProgrammeTheme;
  title: L;
  level: 'B1' | 'B2';
  paragraphs: string[];      // French text, one string per paragraph
  questionIds: string[];     // Questions with paper 'P2' and section 'r1' … 'r6' (content/fr/questions/)
  source: SourceRef;
}
