/// <reference types="vite/client" />

// The flashcard term ids of each subject, read from the term files at build time (see vite.config.ts).
declare module 'virtual:term-ids' {
  const termIds: Record<string, string[]>;
  export default termIds;
}
