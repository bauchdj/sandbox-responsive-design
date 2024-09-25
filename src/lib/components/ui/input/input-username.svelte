<script lang="ts">
	import { onMount } from "svelte";
	import { Input } from "$lib/components/ui/input/index.js";

	let input;
	let props = {
		type: "text",
		name: "username",
		placeholder: "Username",
		autocomplete: "username",
		required: true,
	}
	export let value = "";

	onMount(() => {
		$:input?.focus();
	});
</script>

<Input
	bind:ref={input}
	bind:value
	{...props}
	{...$$restProps}
/>

