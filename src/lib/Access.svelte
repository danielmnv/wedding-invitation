<script>
    import { faTicket } from '@fortawesome/free-solid-svg-icons'
    import { onMount, getContext } from 'svelte';
    import { page } from '$app/stores'; 

    // Components
    import Title from '$lib/components/Title.svelte';
    import GuestTicket from '$lib/components/GuestTicket.svelte';
    import GuestList from '$lib/components/GuestList.svelte';
    
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
    <Title text={event.tickets.title} icon={faTicket} />

    {#if !showList}
    <GuestTicket {guest} on:clear={openList} />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}
    {/await}
</section>