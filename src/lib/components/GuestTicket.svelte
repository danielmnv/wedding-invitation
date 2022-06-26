<script>
    import Text from '$lib/components/Text.svelte';
    import Fa from 'svelte-fa';
    import { faCircle, faCircleNotch, faPlus, faXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

    export let guest, showList = false;

    function clear() {
        showList = true;
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
                    <Fa icon={index < guest.ticket ? faCircle : faCircleNotch} />
                </div>
            {/each}

            {#if guest.ticket > 5}
                <div class="text-secondary">
                    <Fa icon={faPlus} />
                </div>
            {/if}
        </div>

        <Text class="pb-0 text-xl" content={guest.ticket} />

        <Text class="pt-3" content="Lugar{guest.ticket > 1 ? 'es' : ''} en su honor" />
    </div>

    <Text class="subtitle normal-case pb-3 pt-0" content={guest.label} />

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