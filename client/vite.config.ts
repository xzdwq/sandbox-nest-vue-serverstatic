import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar } from '@quasar/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, ''),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve('../build', 'static'),
    emptyOutDir: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  plugins: [vue(), quasar()],
});
