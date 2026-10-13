// Copy a text to the clipboard, with a fallback for browsers that do not allow it.
//   copied   - the text is on the clipboard.
//   selected - copying was not possible; the text is selected in its box and the student presses Ctrl+C.
// The browser parts are passed in, so the order of the attempts can be tested without a browser.
export type CopyResult = 'copied' | 'selected';

export interface CopyEnv {
  /** navigator.clipboard.writeText, when the browser has it (it needs a secure page). */
  writeText?: (text: string) => Promise<void>;
  /** Select the whole text in its box. */
  select: () => void;
  /** document.execCommand('copy'): the old way, true when the browser copied the selection. */
  execCopy?: () => boolean;
}

export async function copyText(text: string, env: CopyEnv): Promise<CopyResult> {
  if (env.writeText) {
    try {
      await env.writeText(text);
      return 'copied';
    } catch {
      // Blocked by the browser or by a permission. Try the next way.
    }
  }
  env.select();
  if (env.execCopy) {
    try {
      if (env.execCopy()) return 'copied';
    } catch {
      // Not allowed either. The text stays selected.
    }
  }
  return 'selected';
}
