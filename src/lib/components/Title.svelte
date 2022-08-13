<script>
    import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons'

    // Components
    import Saos from 'saos';
    import Fa from 'svelte-fa';

    export let text = '', top = 100, duration = 0.6, icon = faFeatherPointed;
</script>

<Saos
    animation="fade-in-top {duration}s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
    once={true}
    top={top}
>
    {#if $$slots.custom}
    <slot name="custom"></slot>
    {:else}
    <div class="flex flex-col gap-y-5 {$$props.class}">
        <div class="text-secondary mx-auto">
            {#if icon}
            <Fa icon={icon} size="2x" />
            {/if}
        </div>
        <p class="headline">{text}</p>
    </div>
    {/if}
</Saos>
