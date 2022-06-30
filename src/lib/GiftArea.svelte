<script>
    import { faGifts } from '@fortawesome/free-solid-svg-icons';
    import { getContext } from 'svelte';

    // Components
    import CompanyGifts from '$lib/components/CompanyGifts.svelte';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';
    import Deco from '$lib/components/Deco.svelte';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);
</script>

<section class="section">
    {#await _eventService then event}
    <Deco 
        class="rotate-45 -left-10 top-3/4 -translate-y-2/4 hidden md:block"
        image="complement.png"
    />

    <div class="container relative">
        <Title text={event.gifts.title} icon={faGifts} />
    
        <Text 
            class="pt-16"
            content={event.gifts.text}
        />

        <Deco 
            class="-rotate-12 left-2/4 -translate-x-2/4 -bottom-24 md:-bottom-28"
            image="leaf.png"
        />
    </div>

    <div class="container pt-28">
        <div class="grid grid-cols-1 md:grid-cols-2">
            {#each event.gifts.companies as company, i}
            <CompanyGifts company={company.name} image="/{company.icon}" border={(i % 2) == 0} direction={(i % 2) == 0 ? 'left' : 'right'} />
            {/each}
        </div>
    </div>
    {/await}
</section>