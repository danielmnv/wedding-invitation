<script>
    import { getContext } from 'svelte';
    import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

    // Components
    import Celebration from '$lib/components/Celebration.svelte';
    import Slider from '$lib/components/Slider.svelte';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';
    import Deco from '$lib/components/Deco.svelte';
    import Saos from 'saos';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);

    export let slides, isStarting;
</script>
<section class="section py-0">
    {#await _eventService then event}
    <!-- Fireworks -->
    {#if isStarting}
    <Celebration />
    {/if}

    <!-- Names -->
	<section class="section">
        <Deco 
            class="top-0 left-0 rotate-180"
            image="leaves.png"
        />

        <div class="container flex flex-col gap-y-7">
            <Title duration={1} top={0}>
                <div slot="custom">
                    <p class="text-center text-black/50 welcome">{event.headline.initText}</p>
                </div>
            </Title>
            <div class="text-center couple-names text-primary">
                <Saos 
                    animation={"scale-in-hor-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
                    once={true}
                >
                    <h1 class="text-6xl leading-[9rem]">{event.bride.name}</h1>
                    <h3 class="text-5xl">&</h3>
                    <h1 class="text-6xl leading-[9rem]">{event.groom.name}</h1>
                </Saos>
            </div>
        </div>

        <Deco 
            class="-bottom-8 right-0"
            image="leaves.png"
        />
	</section>

    <Slider class="pt-10" images={slides} />

    <!-- Date -->
    <Saos
        animation="fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
        once={true}
        top={150}
    >
        <section class="section container py-16">
            <div class="flex justify-center items-center">
                <div class="date-section">
                    <p class="">{event.date.getDate()}</p>
                </div>
                <div class="date-section border-x-2 border-primary">
                    <p class="text-center">{event.month}</p>
                </div>
                <div class="date-section">
                    <p class="">{event.date.getFullYear().toString().slice(-2)}</p>
                </div>
            </div>

            <div class="flex justify-center date-section pt-2">
                <p>{event.start}</p>
            </div>
        </section>
    </Saos>

    <div class="relative">
        <Deco 
            class="-bottom-1/4 md:bottom-1/4 rotate-45"
            image="deco.png"
        />
        <Deco 
            class="bottom-1/3 md:-bottom-2/4 rotate-45 -left-16"
            image="complement.png"
        />

        <Text
            hasContainer={true}
            content={event.headline.phrase}
        />

        <Text
            class="pt-0 italic"
            content={event.headline.reference}
        />

        <Deco 
            class="-bottom-1/4 md:bottom-1/4 right-0 -scale-x-100 -rotate-45"
            image="deco.png"
        />
        <Deco 
            class="bottom-1/3 md:-bottom-2/4 -right-16 -scale-x-100 -rotate-45"
            image="complement.png"
        />

        <Title 
            text=""
            class="pt-16 pb-0"
            icon={faEnvelopeOpenText}
        />
        <Text
            class="pt-0 pb-2"
            hasContainer={true}
            content={event.headline.welcomeText}
        />
        
    </div>
    {/await}
</section>