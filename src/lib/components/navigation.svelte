<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import * as Button from "$lib/components/ui/button";
</script>

<nav {...$$restProps}>
	<div class="flex justify-between items-center p-4 md:p-6">
		<a href="/" class="flex-0 text-2xl font-bold">My Blog</a>
		<div class="m-2"></div>
		<div
			class="flex-1 sm:max-w-[500px] grid grid-cols-[repeat(auto-fit,minmax(117px,1fr))] gap-2"
		>
			<Button.Root variant="ghost" class="border">
				<a href="/top">Top Posts</a>
			</Button.Root>
			<Button.Root variant="ghost" class="border">
				<a href="/archive">Archive</a>
			</Button.Root>
			<Button.Root variant="ghost" class="border">
				<a href="/about">About Me</a>
			</Button.Root>
			<Button.Root variant="ghost" class="border" on:click="{toggleMode}">
				Toggle Mode
			</Button.Root>
		</div>
	</div>
</nav>
