<script context="module">
	export const prerender = true;
</script>

<script>
	import Countdown from '$lib/Countdown.svelte';
</script>

<svelte:head>
	<title>Jhazzel & Edgar</title>
	<meta name="description" content="Jhazzel & Edgar - Boda de invitación" />
</svelte:head>

<section>
	<!-- Names -->
	<section class="container py-10 flex flex-col gap-y-7">
		<div class="bg-red-300 text-center uppercase">
			<p>¡Nos casamos!</p>
		</div>
		<div class="bg-blue-200 text-center">
			<h1 class="handwriting text-7xl">Jhazzel</h1>
			<h3 class="handwriting text-5xl">&</h3>
			<h1 class="handwriting text-7xl">Edgar</h1>
		</div>
	</section>

	<Countdown />
</section>

<style>
</style>
