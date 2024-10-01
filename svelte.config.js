import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { dirname, basename } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module (the parent directory)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = basename(__dirname);

const out = "docs";
// const fallback = "index.html";
const fallback = "404.html";
// const fallback = null;

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
			pages: out,
			assets: out,
			fallback,
			precompress: false,
			strict: true,
		}),
	},
	prerender: {
		entries: ["*"],
	},
};

export default config;
