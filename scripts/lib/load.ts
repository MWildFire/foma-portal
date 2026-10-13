import fs from 'node:fs';
import path from 'node:path';
import { createServer, type ViteDevServer } from 'vite';
import { toPosix } from './files.ts';
import { normalizePack, type NormalizedPack } from './model.ts';

// content/<s>/index.ts collects the subject with import.meta.glob, which only Vite understands. This starts Vite without
// a config file and loads the index through its SSR loader, so the validator sees exactly what the site would build.
// MDX files are never imported (their globs stay lazy); the validator reads them from disk.

export async function openContentServer(root: string): Promise<ViteDevServer> {
  return createServer({
    root,
    configFile: false,
    envDir: false,        // content never needs .env files, so do not read them
    logLevel: 'silent',   // load errors are reported by the validator itself, once
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
}

export interface LoadFailure { message: string; file?: string; line?: number }
export type LoadResult = { ok: true; loaded: NormalizedPack } | { ok: false; failure: LoadFailure };

// First "file:line:col" of a stack trace that points into the project (not into node_modules).
function locateInStack(stack: string, root: string): { file: string; line: number } | undefined {
  const pattern = /(\/[^\s():]+\.(?:ts|tsx|mdx)):(\d+):\d+/g;
  let match = pattern.exec(stack);
  while (match !== null) {
    if (match[1].indexOf(root) === 0 && match[1].slice(root.length).indexOf('/node_modules/') === -1) {
      return { file: toPosix(path.relative(root, match[1])), line: Number(match[2]) };
    }
    match = pattern.exec(stack);
  }
  return undefined;
}

export function describeLoadError(error: unknown, root: string): LoadFailure {
  const found = error as { message?: unknown; stack?: unknown; id?: unknown; loc?: { file?: unknown; line?: unknown } };
  const lines = String(found.message === undefined ? error : found.message).split('\n').map(line => line.trim()).filter(line => line !== '');
  const message = lines.slice(0, 2).join(' ').split(`${root}/`).join('');
  const file = typeof found.loc?.file === 'string' ? found.loc.file : typeof found.id === 'string' ? found.id : undefined;
  if (file && file.indexOf(root) === 0) {
    return { message, file: toPosix(path.relative(root, file)), line: typeof found.loc?.line === 'number' ? found.loc.line : undefined };
  }
  const inStack = typeof found.stack === 'string' ? locateInStack(found.stack, root) : undefined;
  return { message, file: inStack?.file, line: inStack?.line };
}

export async function loadPack(server: ViteDevServer, root: string, folder: string): Promise<LoadResult> {
  const indexRel = `content/${folder}/index.ts`;
  if (!fs.existsSync(path.join(root, indexRel))) {
    return { ok: false, failure: { message: `${indexRel} is missing; every subject folder has the index.ts of content/_example`, file: `content/${folder}` } };
  }
  try {
    const loaded = normalizePack((await server.ssrLoadModule(`/${indexRel}`)).default);
    if (!loaded) return { ok: false, failure: { message: 'index.ts does not export a SubjectPack as its default export (expected { meta, syllabus, topics, ... })', file: indexRel } };
    return { ok: true, loaded };
  } catch (error) {
    if (error instanceof Error) server.ssrFixStacktrace(error);   // map stack lines back to the source files
    return { ok: false, failure: describeLoadError(error, root) };
  }
}
