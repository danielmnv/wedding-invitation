<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount, setContext } from 'svelte';

	// Components
	import Countdown from '$lib/Countdown.svelte';
	import Headline from '$lib/Headline.svelte';
	import GiftArea from '$lib/GiftArea.svelte';
	import Schedule from '$lib/Schedule.svelte';
	import Clothing from '$lib/Clothing.svelte';
	import Loader from '$lib/Loader.svelte';
	import Access from '$lib/Access.svelte';
	import Event from '$lib/Event.svelte';

	// Services
	import { GuestService, event, key } from '../services';
	setContext(key, {
		_guestService: new GuestService(),
		_eventService: event
	});

	let loading = true;

	function handleLoad() {
		setTimeout(() => loading = false, 1000);
	}

	onMount(handleLoad);
</script>

<svelte:head>
	<title>Jhazzel & Edgar</title>
	<meta name="description" content="Jhazzel & Edgar - Invitación de Boda" />
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
