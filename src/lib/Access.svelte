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
    const { _guestController } = getContext(key)

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

        _guestController
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
    <Title text="Pases" icon={faTicket} />

    {#if !showList}
    <GuestTicket {guest} on:clear={openList} />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}
</section>