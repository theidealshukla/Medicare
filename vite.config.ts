import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Set base to '/' for Netlify, or '/repo-name/' for GitHub Pages
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                services: resolve(__dirname, 'services.html'),
                doctors: resolve(__dirname, 'doctors.html'),
                contact: resolve(__dirname, 'contact.html'),
                appointment: resolve(__dirname, 'appointment.html'),
            },
        },
    }
});
