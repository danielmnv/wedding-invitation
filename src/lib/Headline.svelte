<script>
    import { getContext } from 'svelte';

    // Components
    import Title from '$lib/components/Title.svelte';
    import Deco from '$lib/components/Deco.svelte';
    import Saos from 'saos';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);
</script>
<section class="section py-0">
    {#await _eventService then event}
    <Deco 
        class="top-0 left-0 rotate-180"
        image="leaves.png"
    />
    <!-- Names -->
	<section class="section container flex flex-col gap-y-7">
        <Title duration={1} top={0}>
            <div slot="custom">
                <p class="text-center uppercase">{event.headline.initText}</p>
            </div>
        </Title>
		<div class="text-center">
            <Saos 
                animation={"scale-in-hor-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
                once={true}
            >
                <h1 class="handwriting text-6xl md:text-8xl">{event.bride.name}</h1>
                <h3 class="handwriting pt-6 text-3xl md:text-5xl">&</h3>
                <h1 class="handwriting text-6xl md:text-8xl">{event.groom.name}</h1>
            </Saos>
		</div>
	</section>

    <!-- Date -->
    <Saos
        animation="fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
        once={true}
    >
        <section class="section container py-10">
            <div class="grid grid-cols-3">
                <!-- Day -->
                <div class="h-48 pr-0">
                    <div class="table w-full h-full">
                        <div class="table-cell align-middle">
                            <div class="before:table-cell after:table-cell">
                                <div class="py-2 border-y-2 border-primary">
                                    <p class="text-center tracking-widest uppercase text-base md:text-lg">{event.weekday}</p>
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
                                        <p class="text-center uppercase tracking-wider text-base md:text-lg">{event.start}</p>
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
                                    <p class="text-center tracking-widest uppercase text-base md:text-lg">{event.month}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Saos>

    <Deco 
        class="-bottom-16 right-0"
        image="leaves.png"
    />
    {/await}
</section>