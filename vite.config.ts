import { defineConfig } from 'vite';

export default defineConfig({
    // Set the base path for GitHub Pages deployment
    // If your repo is https://github.com/username/repo, base should be '/repo/'
    base: '/Medicare/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    }
});
