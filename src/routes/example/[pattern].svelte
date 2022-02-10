<script>
	import PageSpecificComponet from './_components/PageSpecificComponet.svelte';
	export let words;
</script>

<ul>
	{#each words as word}
		<PageSpecificComponet {word} />
	{/each}
</ul>
