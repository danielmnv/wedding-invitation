<script>
    import { getContext } from 'svelte';

    // Components
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte'

    // Service
    import { key } from '../services';
    const { _eventService } = getContext(key); 
</script>

<section class="section">
    {#await _eventService then event}
    <Title text={event.clothing.title} />

    <div class="container pt-16">
        <div class="flex flex-col justify-center items-center gap-y-6 clothing pb-10">
            <img class="w-auto h-20 md:h-24" src={event.clothing.image} alt="Formal">

            <p class="tracking-wider button-outline">{event.clothing.codeText}</p>
        </div>

        <div class="pb-10 md:px-80">
            <hr class="border-primary">
        </div>
        
        <Text class="pt-0" content={event.clothing.warningText} />
    </div>
    {/await}
</section>