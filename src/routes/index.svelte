<script context="module">
	export const prerender = true;
</script>

<script>
	import Headline from '$lib/Headline.svelte';
	import Countdown from '$lib/Countdown.svelte';
	import Event from '$lib/Event.svelte';
	import GiftArea from '$lib/GiftArea.svelte';
</script>

<svelte:head>
	<title>Jhazzel & Edgar</title>
	<meta name="description" content="Jhazzel & Edgar - Boda de invitación" />
</svelte:head>

<section>
	<Headline />

	<Countdown />

	<Event />

	<GiftArea />
</section>

<style>
</style>
