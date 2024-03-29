<script>
    import { onMount, getContext } from 'svelte';

    // Components
    import CountdownSection from '$lib/components/CountdownSection.svelte';
    import Text from '$lib/components/Text.svelte';
    import Saos from 'saos';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);

    export let isStarting = false;

    let countDate, countInterval, time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    function getUnit(index) {
        switch (index) {
            case 0:
                return 'días';
            case 1:
                return 'horas';
            case 2:
                return 'min';
            case 3:
                return 'seg';
        }
    }

    onMount(async () => {
        countDate = await _eventService.then(doc => doc.date);

		const countdown = () => {
            const now = new Date().getTime();
            const gap = countDate - now;

            if (gap <= 0 && (!isStarting || countInterval))  {
                isStarting = true
                clearInterval(countInterval)
            }

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            time.days = `${(Math.floor(gap / day))}`.padStart(2, '0');
            time.hours = `${(Math.floor((gap % day) / hour))}`.padStart(2, '0');
            time.minutes = `${(Math.floor((gap % hour) / minute))}`.padStart(2, '0');
            time.seconds = `${(Math.floor((gap % minute) / second))}`.padStart(2, '0');
        };

        countdown();
        countInterval = setInterval(() => countdown(), 1000);
	});
</script>

<section class="section">
    {#await _eventService then event}
    <Text
        class="{!isStarting ? 'visible' : 'invisible'}"
        content={event.headline.countdown.remaining}
    />

    <!-- Countdown -->
    <div class="container bg-primary bg-opacity-85 px-8 md:px-28 sm:rounded-md">
        <Saos 
            animation={"fade-in 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
            once={true}
        >
            <div class="flex flex-row py-8 text-slate-50">
                {#if !isStarting}
                {#each Object.values(time) as number, i}
                <div class="flex-1">
                    <CountdownSection number={number} unit={getUnit(i)} />
                </div>
                {/each}

                {:else}
                <div class="w-full text-center">
                    <!-- Begin text -->
                    <Saos 
                        animation={"fade-in 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
                        once={true}
                    >
                        <p class="pb-1 font-extrabold text-3xl md:text-5xl md:font-semibold">{event.headline.countdown.start.title}</p>
                        <p class="tracking-widest font-extrabold text-xs md:text-sm md:font-semibold">{event.headline.countdown.start.text}</p>
                    </Saos>
                </div>
                {/if}
            </div>
        </Saos>
    </div>
    {/await}
</section>