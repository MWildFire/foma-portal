import type { SimId, SubjectId } from '../../src/contract/types';

// The example subject is not a real SubjectId. The contract types stay verbatim, so the example casts once, here.
export const EXAMPLE_SUBJECT = '_example' as unknown as SubjectId;
export const EXAMPLE_SIM = '_example.demo' as unknown as SimId;
