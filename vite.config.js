import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        hmr: {
            overlay: false, // Disable Vite's error overlay if needed
        }
    }
});
