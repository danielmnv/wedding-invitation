<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'; 
    import Title from '$lib/components/Title.svelte';
    import GuestTicket from '$lib/components/GuestTicket.svelte';
    import GuestList from '$lib/components/GuestList.svelte';
    import { faTicket } from '@fortawesome/free-solid-svg-icons'
    
    // Firestore
    import { onSnapshot, collection, query, where } from 'firebase/firestore';
    import { db } from '../firestore';

    let guest = {}, showList = false;

    onMount(() => {
        const nameParam = $page.url.searchParams.get('guest') || '';
    
        // If there is no name param we show the list
        if (!nameParam) {
            openList();
            return;
        }

        onSnapshot(query(collection(db, 'guests'), where('name', '==', nameParam)),
            (querySnapshot) => {
                // Show the list if there is no coincidence
                if (querySnapshot.empty) {
                    openList();
                    return;
                }

                const doc = querySnapshot.docs[0];
                guest = {
                    id: doc.id,
                    ...doc.data()
                }
            },
            (err) => {}
        );
    });

    function openList() {
        showList = true;
        window.history.replaceState({}, '', '/');
    }
</script>

<section class="section">
    <Title text="Pases" icon={faTicket} />

    {#if !showList}
    <GuestTicket {guest} on:clear={openList} />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}
</section>