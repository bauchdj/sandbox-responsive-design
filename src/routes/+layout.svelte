<script lang="ts">
    import "../app.css";
	// import { onMount } from 'svelte';
    import { ModeWatcher } from "mode-watcher";

	// onMount(() => {
    //     loadScript({ src: "https://unpkg.com/vue@3/dist/vue.global.js" });
    //     loadScript({ src: "https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js" });
	// });

	// function loadScript({ src, onload, onerror }: { src: string, onload?: () => void, onerror?: () => void }): void {
	// 	const script = document.createElement('script');
	// 	script.src = src;
	// 	if (onload) script.onload = onload;
	// 	if (onerror) script.onerror = onerror;
	// 	document.head.appendChild(script);
	// }
</script>

<ModeWatcher></ModeWatcher>

<slot />
