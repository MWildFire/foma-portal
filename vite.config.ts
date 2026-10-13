import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import rehypeKatex from 'rehype-katex';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { isTermFile, termIdsByFolder } from './scripts/lib/term-ids.ts';

// virtual:term-ids gives the planner the flashcard term ids of each subject (see scripts/lib/term-ids.ts).
// It is read from the term files when the build or the dev server first needs it, and again after a term file changes.
function termIdsPlugin(): Plugin {
  const id = 'virtual:term-ids';
  const resolvedId = `\0${id}`;
  let contentDir = path.resolve('content');
  return {
    name: 'foma-term-ids',
    configResolved(config) {
      contentDir = path.join(config.root, 'content');
    },
    resolveId(source) {
      return source === id ? resolvedId : undefined;
    },
    load(loadId) {
      if (loadId !== resolvedId) return undefined;
      return `export default ${JSON.stringify(termIdsByFolder(contentDir))};`;
    },
    configureServer(server) {
      const changed = (file: string) => {
        if (!isTermFile(file)) return;
        const module = server.moduleGraph.getModuleById(resolvedId);
        if (module) server.moduleGraph.invalidateModule(module);
      };
      server.watcher.on('add', changed);
      server.watcher.on('change', changed);
      server.watcher.on('unlink', changed);
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
      providerImportSource: '@mdx-js/react',
    }),
    react(),
    termIdsPlugin(),
  ],
  server: { port: 5173 },
});
