<script>
    import { faCircle, faCircleNotch, faPlus, faXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
    import { createEventDispatcher, getContext } from 'svelte';

    // Components
    import Text from '$lib/components/Text.svelte';
    import Fa from 'svelte-fa';

    // Services
    import { key } from '../../services'
    const { _eventService } = getContext(key);
    const dispatch = createEventDispatcher();

    export let guest;

    function clear() {
        dispatch('clear');
    }

    function confirm(phone, msg) {
        msg = msg.replace('__name__', guest.name);
        msg = encodeURIComponent(msg.replace('__tickets__', `${guest.tickets} pase${guest.tickets > 1 ? 's' : ''}`));
        window.open(`https://wa.me/521${phone}/?text=${msg}`);
    }
</script>

<div>
    {#await _eventService then event}
    <Text content={event.tickets.initText} />
    
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

        <Text class="pt-3" content={event.tickets.numberText.replace('__plural__', guest.tickets > 1 ? 'es' : '')} />
    </div>

    <Text class="subtitle pb-3 pt-0" content={guest.name} />

    <div class="flex justify-center">
        <button class="button-outline-secondary text-sm" on:click={clear}>
            {event.tickets.clearText}
            <Fa icon={faXmark} />
        </button>
    </div>

    <Text class="font-extrabold" content={event.tickets.confirmText} />
    
    <div class="flex justify-center gap-x-7 pt-1">
        <button class="button" on:click={confirm((guest.group == 1 ? event.bride.phone : event.groom.phone), event.tickets.whatsappText)}>
            {event.tickets.btnText}
            <Fa icon={faClipboardCheck} />
        </button>
    </div>
    {/await}
</div>