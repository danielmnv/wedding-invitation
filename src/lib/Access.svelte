<script>
    import Title from '$lib/components/Title.svelte';
    import GuestTicket from '$lib/components/GuestTicket.svelte';
    import GuestList from '$lib/components/GuestList.svelte';
    

    let guest = { value: 'fam1', label: 'Fam. Molina de la Cruz', group: 1, ticket: Math.floor(Math.random() * 8) + 1 },
        showList = false;
</script>

<section class="section">
    <Title text="Pases" />

    {#if !showList}
    <GuestTicket {guest} bind:showList />
    {:else}
    <GuestList bind:guest bind:showList />
    {/if}
</section>