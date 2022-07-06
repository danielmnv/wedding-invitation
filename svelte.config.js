import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		// Vite
		vite: {
			ssr: {
				noExternal: ['@fortawesome/free-solid-svg-icons']
			},
			optimizeDeps: { 
				include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
