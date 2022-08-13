<script>
    import { getContext } from 'svelte';
    import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

    // Components
    import Slider from '$lib/components/Slider.svelte';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';
    import Deco from '$lib/components/Deco.svelte';
    import Saos from 'saos';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);

    export let slides;
</script>
<section class="section py-0">
    {#await _eventService then event}
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
            <div class="text-center couple-names">
                <Saos 
                    animation={"scale-in-hor-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
                    once={true}
                >
                    <h1 class="text-8xl">{event.bride.name}</h1>
                    <h3 class="py-6 text-5xl text-primary">&</h3>
                    <h1 class="text-8xl">{event.groom.name}</h1>
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
        <section class="section container py-10">
            <div class="grid grid-cols-3">
                <!-- Day -->
                <div class="h-48 pr-0">
                    <div class="table w-full h-full">
                        <div class="table-cell align-middle">
                            <div class="before:table-cell after:table-cell">
                                <div class="py-2 border-y-2 border-primary">
                                    <p class="text-center tracking-widest text-base md:text-lg">{event.weekday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Number -->
                <div class="h-48 border-x-2 border-primary">
                    <div class="h-48 pr-0">
                        <div class="w-full h-full">
                            <div class="h-full">
                                <div class="before:table-cell after:table-cell h-full">
                                    <div class="h-full flex flex-col justify-around">
                                        <p class="text-center tracking-wider text-base md:text-lg">{event.start}</p>
                                        <p class="text-center handwriting text-5xl md:text-6xl">{event.date.getDate()}</p>
                                        <p class="text-center tracking-wider text-base md:text-lg">{event.date.getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Month -->
                <div class="h-48 pl-0">
                    <div class="table w-full h-full">
                        <div class="table-cell align-middle">
                            <div class="before:table-cell after:table-cell">
                                <div class="py-2 border-y-2 border-primary">
                                    <p class="text-center tracking-widest text-base md:text-lg">{event.month}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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