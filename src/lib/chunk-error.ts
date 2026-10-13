// A lazily loaded file (a chunk of the built app) can fail to download: the network drops, or a deploy changed the
// hashed file names while the tab was open. Browsers word that failure differently, so these are the known messages.
// Anything else is a bug or an unknown failure, and the page should not present it as a network problem.

// Chrome and Edge (with the URL after it), Firefox, Safari for a dynamic import, and Vite's preload of a chunk's CSS.
const CHUNK_MESSAGES = [
  'Failed to fetch dynamically imported module',
  'error loading dynamically imported module',
  'Importing a module script failed',
  'Unable to preload CSS for',
];

// Safari's message for a fetch that got no response at all. It must be the whole message: a longer message that
// merely contains these words is not a download failure.
const WHOLE_MESSAGES = ['Load failed'];

function messageOf(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return '';
}

// True when the error says that a lazily loaded file could not be fetched.
export function isChunkLoadError(error: unknown): boolean {
  const message = messageOf(error).trim();
  if (message === '') return false;
  return WHOLE_MESSAGES.includes(message) || CHUNK_MESSAGES.some(known => message.includes(known));
}
