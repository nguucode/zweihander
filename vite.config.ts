/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;

// Every Base UI entry point, pre-bundled up front. Otherwise the browser test
// runner discovers each subpath (@base-ui/react/switch, /field...) the first
// time a story imports it, re-optimises, and fails that whole file — which
// is every run in CI, where the cache is always cold.
const baseUiEntries = Object.keys(
  JSON.parse(readFileSync(path.join(dirname, 'node_modules/@base-ui/react/package.json'), 'utf8')).exports,
)
  .filter((k) => k !== './package.json' && !k.includes('*'))
  .map((k) => path.posix.join('@base-ui/react', k));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { include: baseUiEntries },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        // The drive is exFAT: macOS writes an AppleDouble `._<name>` beside
        // every file, which matches the stories glob and fails to import.
        exclude: ['**/node_modules/**', '**/._*'],
        // One file at a time: only one iframe can hold focus, and WebKit
        // stalls transitions in iframes it is not showing, so focus and
        // open/close plays failed at random on the CI runner.
        fileParallelism: false,
        // The contrast stories measure every colour pair in both modes;
        // WebKit on Linux needs more than the 15s default for them.
        testTimeout: 30000,
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          // All three engines: a story that passes only in Chromium has not
          // been tested for Safari or Firefox users.
          instances: [
            { browser: 'chromium' },
            { browser: 'firefox' },
            {
              browser: 'webkit',
              // Linux WebKit paints through Skia on GL, which on a runner
              // without a GPU is Mesa's software rasteriser. Its shader cache
              // starts empty on every fresh runner, so each new kind of paint
              // compiles shaders first and stalls frames for up to seconds:
              // popup transitions never end, Base UI never unmounts the popup,
              // and focus never returns to the trigger. Skia's CPU path skips
              // GL. Only WebKitGTK/WPE read this; macOS WebKit ignores it.
              provider: playwright({
                launchOptions: { env: { ...process.env, WEBKIT_SKIA_ENABLE_CPU_RENDERING: '1' } },
              }),
            },
          ],
        }
      }
    }]
  }
});