<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import * as Button from "$lib/components/ui/button";
</script>

<nav class="p-4">
	<div class="container mx-auto flex justify-between items-center">
		<a href="/" class="text-2xl font-bold">My Blog</a>
		<div>
			<Button.Root variant="ghost" class=" mr-4">
				<a href="/top">Top Posts</a>
			</Button.Root>
			<Button.Root variant="ghost" class=" mr-4">
				<a href="/archive">Archive</a>
			</Button.Root>
			<Button.Root variant="ghost" class="">
				<a href="/about">About Me</a>
			</Button.Root>
			<Button.Root variant="ghost" on:click="{toggleMode}">
				Toggle Mode
			</Button.Root>
		</div>
	</div>
</nav>
