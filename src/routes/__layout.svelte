<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Made by <a target="" href="https://danielmolina.me">DM</a></p>
</footer>

<style>
	main {
		
	}
</style>
