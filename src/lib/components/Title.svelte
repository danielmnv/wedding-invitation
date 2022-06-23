<script>
    import Saos from 'saos';

    export let text = '', top = 100, duration = 0.6;
</script>

<Saos
    animation="fade-in-top {duration}s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
    once={true}
    top={top}
>
    {#if $$slots.custom}
    <slot name="custom"></slot>
    {:else}
    <p class="headline">{text}</p>
    {/if}
</Saos>
