<script>
    import { faChurch, faDungeon } from '@fortawesome/free-solid-svg-icons'
    import { getContext, onMount } from 'svelte';

    // Components
    import Place from '$lib/components/Place.svelte';
    import Deco from '$lib/components/Deco.svelte';

    // Services
    import { key } from '../services'
    const { _eventService, _imageService } = getContext(key);

    let phases = [];

    onMount(async () => {
        const snapshot = await _eventService.then(event => event.schedule.phases);

        phases = [...phases, { ...snapshot[0], icon: faChurch }, { ...snapshot[1], icon: faDungeon }];
    })
</script>
<section class="section">
    <Deco 
        class="rotate-45 -left-10 top-2/4 md:top-1/4"
        image="complement.png"
    />
    <!-- Places -->
    <div class="container">
        <div class="grid gap-x-6 gap-y-28 grid-cols-1 md:grid-cols-2">
            {#each phases as phase, i}
            {#await _imageService.get(phase.image) then image}
            <Place
                {image}
                icon={phase.icon}
                time={phase.time}
                title={phase.title}
                name={phase.place}
                address={phase.address}
                url={phase.url}
                direction={(i % 2) == 0 ? 'left' : 'right'}
            />  
            {/await}
            {/each}
        </div>
    </div>
    <Deco 
        class="-rotate-12 -right-12 -bottom-16 md:bottom-0"
        image="complement.png"
    />
</section>