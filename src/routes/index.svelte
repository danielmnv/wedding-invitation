<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/Loader.svelte';
	import Headline from '$lib/Headline.svelte';
	import Countdown from '$lib/Countdown.svelte';
	import Event from '$lib/Event.svelte';
	import GiftArea from '$lib/GiftArea.svelte';
	import Schedule from '$lib/Schedule.svelte';
	import Clothing from '$lib/Clothing.svelte';
	import Access from '$lib/Access.svelte';

	let loading = true;

	onMount(handleLoad);

	function handleLoad() {
		setTimeout(() => loading = false, 1000);
	}
</script>

<svelte:head>
	<title>Jhazzel & Edgar</title>
	<meta name="description" content="Jhazzel & Edgar - Boda de invitación" />
</svelte:head>

<svelte:window on:load={handleLoad} />

<section>
	{#if loading}
		<Loader />
	{:else}
	<Headline />

	<Countdown />

	<Event />

	<Schedule />

	<GiftArea />

	<Clothing />

	<Access />
	{/if}
</section>

<style>
</style>
