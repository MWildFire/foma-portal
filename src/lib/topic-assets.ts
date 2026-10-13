// Resolves <Figure src="./assets/x.svg"> to a built asset URL.
// The src is relative to the MDX file, but the component only knows the subject and the topic id,
// so the folder of the topic's MDX file is looked up from the list of MDX paths.

// '/content/a/b/../c/./d.svg' -> '/content/a/c/d.svg'. Climbing above the root stops at the root.
export function normalizePath(path: string): string {
  const out: string[] = [];
  for (const part of path.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') out.pop();
    else out.push(part);
  }
  return `/${out.join('/')}`;
}

// A path starting with '/' is relative to the project root, anything else to the folder `dir`.
export function resolveRelative(dir: string, src: string): string {
  return src.startsWith('/') ? normalizePath(src) : normalizePath(`${dir}/${src}`);
}

// Folder (with trailing slash) of '<topicId>.en.mdx' or '.ru.mdx' inside content/<subject>/, or null.
export function topicDirOf(mdxPaths: readonly string[], subject: string, topicId: string): string | null {
  const pattern = /^(\/content\/([^/]+)\/(?:.*\/)?)([^/]+)\.(?:en|ru)\.mdx$/;
  for (const path of mdxPaths) {
    const match = pattern.exec(path);
    if (match && match[2] === subject && match[3] === topicId) return match[1];
  }
  return null;
}

const hasScheme = (src: string): boolean => /^[a-z][a-z0-9+.-]*:/i.test(src) || src.startsWith('//');

export interface FigureLookup {
  assets: Readonly<Record<string, string>>;  // '/content/geo/core/topics/assets/x.svg' -> built URL
  mdxPaths: readonly string[];               // '/content/geo/core/topics/some-topic.en.mdx'
  subject: string;
  topicId: string;
  src: string;
}

// 1. The path relative to the topic's own folder. 2. Fallback: the same file name under any assets/ folder
// of the same subject (first in path order), for a topic whose MDX path is not known.
export function findFigureUrl({ assets, mdxPaths, subject, topicId, src }: FigureLookup): string | null {
  const wanted = src.trim();
  if (!wanted || hasScheme(wanted)) return null;

  const dir = topicDirOf(mdxPaths, subject, topicId);
  if (dir) {
    const exact = assets[resolveRelative(dir, wanted)];
    if (exact) return exact;
  }

  const normalized = normalizePath(wanted);
  const marker = normalized.lastIndexOf('/assets/');
  const tail = marker >= 0 ? normalized.slice(marker + '/assets/'.length) : normalized.slice(1);
  if (!tail) return null;
  const prefix = `/content/${subject}/`;
  const keys = Object.keys(assets).filter(key => key.startsWith(prefix) && key.endsWith(`/assets/${tail}`)).sort();
  return keys.length > 0 ? assets[keys[0]] : null;
}
