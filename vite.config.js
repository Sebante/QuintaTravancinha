import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				// Nav links point to pages that don't exist yet — we're building
				// the site incrementally, one page at a time.
				handleHttpError: 'warn'
			},
			paths: {
				// Set to '/<repo-name>' only for the GitHub Pages preview build;
				// stays empty for Vercel and other root-path deployments.
				base: process.env.BASE_PATH ?? ''
			}
		})
	]
});
