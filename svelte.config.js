import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module (the parent directory)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = basename(__dirname);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: `/${basePath}`,
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: true,
			strict: true,
			out: "build",
		}),
	},
};

export default config;
