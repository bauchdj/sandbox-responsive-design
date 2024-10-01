<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import Navigation from "$lib/components/navigation.svelte";
</script>

<ModeWatcher />

<div class="flex flex-col h-screen">
	<Navigation class="flex-0" />

	<main class="flex-1 w-full px-4 md:px-8 lg:px-10">
		<slot />
	</main>

	<footer class="flex-0 flex items-center h-[100px] p-8">
		Copyright &copy; {new Date().getFullYear()} David Bauch. All Rights Reserved.
	</footer>
</div>
