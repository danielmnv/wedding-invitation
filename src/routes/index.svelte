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
	import Location from '$lib/Location.svelte';
	import Loader from '$lib/Loader.svelte';
	import Access from '$lib/Access.svelte';
	import People from '$lib/People.svelte';
	import Book from '$lib/Book.svelte';

	// Services
	import { Guest, Image, Event, key } from '../services';
	setContext(key, {
		_guestService: new Guest(),
		_imageService: new Image(),
		_eventService: Event
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

	<People />

	<Location />

	<Schedule />

	<GiftArea />

	<Clothing />

	<Access />

	<Book />
	{/if}
</section>
