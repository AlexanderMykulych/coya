import { createServer, InlineConfig } from 'vite';
import { tsAnalyzerVitePlugin } from './tsAnalyzerVitePlugin'

export async function getViteServer(projPath: string) {
  const viteConfig = <InlineConfig>{
    optimizeDeps: {
      disabled: false,
    },
    base: projPath,
    root: projPath,
    plugins: await tsAnalyzerVitePlugin(),
  };

  const server = await createServer(viteConfig);
  await server.pluginContainer.buildStart({});
  return server;
}
