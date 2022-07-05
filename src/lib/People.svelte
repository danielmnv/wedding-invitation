<script>
    import { getContext } from 'svelte';

    // Components
    import List from '$lib/components/List.svelte';
    import Deco from '$lib/components/Deco.svelte';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);
</script>

<section class="section pt-0">
    {#await _eventService then event}
    <Deco 
        class="bottom-16 left-0 -scale-x-100 hidden md:block"
        image="leaves.png"
    />

    <Deco 
        class="-left-8 top-2/4 -translate-y-2/4 rotate-45 md:hidden"
        image="complement.png"
    />

    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-9 pb-9">
            <List
                title={event.headline.people.parents}
                items={event.bride.parents}
                variant={event.bride.title}
                type={1}
            />
    
            <List
                title={event.headline.people.parents}
                items={event.groom.parents}
                variant={event.groom.title}
                type={2}
            />
        </div>
    
        <List
            class="pt-0 md:pt-5"
            title={event.headline.people.godparents.text}
            items={event.headline.people.godparents.items}
        />
    </div>

    <Deco 
        class="bottom-16 right-0 hidden md:block"
        image="leaves.png"
    />

    <Deco 
        class="-right-8 top-2/4 -translate-y-2/4 -scale-x-100 -rotate-45 md:hidden"
        image="complement.png"
    />

    <Deco 
        class="-rotate-12 left-2/4 -translate-x-2/4 -bottom-10 md:-bottom-28"
        image="leaf.png"
    />
    {/await}
</section>