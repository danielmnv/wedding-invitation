<script>
    import Title from '$lib/components/Title.svelte';
    import GuestTicket from '$lib/components/GuestTicket.svelte';
    import GuestList from '$lib/components/GuestList.svelte';
    import { faTicket } from '@fortawesome/free-solid-svg-icons'
    

    let guest = { value: 'fam1', label: 'Fam. Molina de la Cruz', group: 1, ticket: Math.floor(Math.random() * 8) + 1 },
        showList = false;
</script>

<section class="section">
    <Title text="Pases" icon={faTicket} />

    {#if !showList}
    <GuestTicket {guest} bind:showList />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}
</section>