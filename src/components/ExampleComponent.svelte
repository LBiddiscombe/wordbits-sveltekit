<script>
	export let name;

	let buttonText = 'Click Me';

	function handleClick() {
		buttonText = 'Button Clicked';
	}
</script>

<h1 class="my-4">Hello {name}!</h1>

<button class="btn btn-primary" on:click={handleClick}>{buttonText}</button>
