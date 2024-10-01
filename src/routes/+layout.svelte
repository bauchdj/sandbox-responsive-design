<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import Navigation from "$lib/components/navigation.svelte";
</script>

<ModeWatcher />

<Navigation />

<main class="flex-grow container mx-auto p-4">
	<slot />
</main>

<footer style="height:50px" class="flex items-center m-4">
	Copyright &copy; {new Date().getFullYear()} Hunter Henrichsen. All Rights Reserved.
</footer>
