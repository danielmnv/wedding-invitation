<script>
    import { faChurch, faDungeon } from '@fortawesome/free-solid-svg-icons'
    import { getContext, onMount } from 'svelte';

    // Components
    import Place from '$lib/components/Place.svelte';

    // Services
    import { key } from '../services'
    const { _eventService } = getContext(key);

    let phases = [];

    onMount(async () => {
        const snapshot = await _eventService.then(event => event.schedule.phases);

        phases = [...phases, { ...snapshot[0], icon: faChurch }, { ...snapshot[1], icon: faDungeon }];
    })
</script>
<section class="section">
    <!-- Places -->
    <div class="container">
        <div class="grid gap-x-6 gap-y-28 grid-cols-1 md:grid-cols-2">
            {#each phases as phase, i}
            <Place
                icon={phase.icon}
                time={phase.time}
                title={phase.title}
                name={phase.place}
                address={phase.address}
                url={phase.url}
                direction={(i % 2) == 0 ? 'left' : 'right'}
            />
            {/each}
        </div>
    </div>
</section>