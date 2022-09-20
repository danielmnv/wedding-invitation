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

	let loading = true, slides, isStarting = false;

	onMount(() => {
		/**
		 * Do not show the site until slides are laoded.
		 * This is important because they are displayed at the top of the site
		*/
        new Image()
            .setPath('slider')
            .getDirectory()
            .then((images) => {
                slides = [ ...images ]
				loading = false
            })
    })
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2BEWE8XCHP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-2BEWE8XCHP');
	</script>
</svelte:head>

<section>
	{#if loading}
		<Loader />
	{:else}
	<Headline {slides} {isStarting} />

	<Countdown bind:isStarting />

	<People />

	<Location />

	<Schedule />

	<GiftArea />

	<Clothing />

	<Access />

	<Book />
	{/if}
</section>
