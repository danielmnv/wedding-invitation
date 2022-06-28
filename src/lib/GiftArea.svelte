<script>
    import { faGifts } from '@fortawesome/free-solid-svg-icons';
    import { getContext } from 'svelte';

    // Components
    import CompanyGifts from '$lib/components/CompanyGifts.svelte';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);
</script>

<section class="section">
    {#await _eventService then event}
    <div class="container">
        <Title text={event.gifts.title} icon={faGifts} />
    
        <Text 
            class="pt-16"
            content={event.gifts.text}
        />
    </div>

    <div class="container pt-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            {#each event.gifts.companies as company, i}
            <CompanyGifts company={company.name} image="/{company.icon}" border={(i % 2) == 0} direction={(i % 2) == 0 ? 'left' : 'right'} />
            {/each}
        </div>
    </div>
    {/await}
</section>