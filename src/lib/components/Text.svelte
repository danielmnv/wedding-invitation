<script>
    import Saos from 'saos';

    export let content = '', hasContainer = false;
</script>

<Saos
    animation="fade-in 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    once={true}
    top={100}
>
    <div class:container={hasContainer}>
        {#if $$slots.default}
            <div class="{$$props.class}">
                <slot />
            </div>
        {:else}
            <p class="py-9 text-center tracking-wide {$$props.class}">{content}</p>
        {/if}
    </div>
</Saos>
