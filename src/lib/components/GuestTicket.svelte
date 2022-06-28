<script>
    import { createEventDispatcher } from 'svelte';
    import { faCircle, faCircleNotch, faPlus, faXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

    // Components
    import Text from '$lib/components/Text.svelte';
    import Fa from 'svelte-fa';

    export let guest;

    const dispatch = createEventDispatcher();

    function clear() {
        dispatch('clear');
    }

    function confirm() {
        /* TODO: send message */
    }
</script>

<div>
    <Text content="Hemos reservado" />
    
    <div class="container">
        <div class="flex justify-center gap-x-2">
            {#each Array(5) as _, index (index)}
                <div class="text-secondary">
                    <Fa icon={index < guest.tickets ? faCircle : faCircleNotch} />
                </div>
            {/each}

            {#if guest.tickets > 5}
                <div class="text-secondary">
                    <Fa icon={faPlus} />
                </div>
            {/if}
        </div>

        <Text class="pb-0 text-xl" content={guest.tickets} />

        <Text class="pt-3" content="Lugar{guest.tickets > 1 ? 'es' : ''} en su honor" />
    </div>

    <Text class="subtitle normal-case pb-3 pt-0" content={guest.name} />

    <div class="flex justify-center">
        <button class="button-outline-secondary text-sm" on:click={clear}>
            ¿No eres tú?
            <Fa icon={faXmark} />
        </button>
    </div>

    <Text content="Favor de confirmar asistencia" />
    
    <div class="flex justify-center gap-x-7 pt-1">
        <button class="button">Confirmar <Fa icon={faClipboardCheck} on:click={confirm} /></button>
    </div>
</div>