<script>
    import { faTicket } from '@fortawesome/free-solid-svg-icons'
    import { onMount, getContext } from 'svelte';
    import { page } from '$app/stores'; 

    // Components
    import GuestTicket from '$lib/components/GuestTicket.svelte';
    import GuestList from '$lib/components/GuestList.svelte';
    import Title from '$lib/components/Title.svelte';
    import Deco from '$lib/components/Deco.svelte';
    
    // Services
    import { key } from '../services';
    const { _guestService, _eventService } = getContext(key)

    let guest = {}, showList = false;

    function openList() {
        showList = true;
        window.history.replaceState({}, '', '/');
    }

    onMount(() => {
        const nameParam = $page.url.searchParams.get('guest') || '';
    
        // If there is no name param we show the list
        if (!nameParam) {
            openList();
            return;
        }

        _guestService
            .get(nameParam)
            .then(doc => {
                if (!doc) {
                    openList();
                    return;
                }

                guest = doc;
            });
    });
</script>

<section class="section">
    {#await _eventService then event}
    <Deco 
        class="-left-3 top-2/4 -translate-y-2/4 rotate-45"
        image="deco.png"
    />

    <Deco 
        class="-right-8 top-20 -rotate-12"
        image="deco.png"
    />

    <Title text={event.tickets.title} icon={faTicket} />

    {#if !showList}
    <GuestTicket {guest} on:clear={openList} />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}

    <Deco 
        class="-rotate-12 -right-12 bottom-0"
        image="complement.png"
    />
    {/await}
</section>