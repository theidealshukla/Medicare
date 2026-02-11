import { defineConfig } from 'vite';

export default defineConfig({
    // Set base to '/' for Netlify, or '/repo-name/' for GitHub Pages
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    }
});
