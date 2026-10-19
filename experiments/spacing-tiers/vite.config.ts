import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

const dirname = import.meta.dirname

// Throwaway experiment: two screens built from the real components, with a
// spacing overlay. Readable module class names ("Card-module__md") are what
// the overlay uses to name the element a padding or gap belongs to.
export default defineConfig({
  root: dirname,
  base: './',
  cacheDir: path.join(dirname, '.vite'),
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (local: string, file: string) => `${path.basename(file).replace(/\.module\.css.*$/, '')}-module__${local}`,
    },
  },
  resolve: { alias: { '@': path.resolve(dirname, '../../src') } },
  build: {
    // One page per build (ENTRY=index|density), so each folds into one file.
    rollupOptions: { input: path.join(dirname, `${process.env.ENTRY ?? 'index'}.html`), output: { inlineDynamicImports: true } },
    outDir: path.join(dirname, 'dist', process.env.ENTRY ?? 'index'),
    emptyOutDir: true, assetsInlineLimit: 100_000_000, modulePreload: false },
})
