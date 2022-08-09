<script>
    import { faGift, faStore } from '@fortawesome/free-solid-svg-icons';

    // Components
    import Card from '$lib/components/Card.svelte';
    import Fa from 'svelte-fa';

    export let company, border = false, direction = 'left';

    function showGifts(url) {
        window.open(url, '_blank');
    }
</script>

<div class="px-3 py-8 md:p-6 {border ? 'border-b border-b-primary md:border-b-0 md:border-r md:border-r-primary' : ''}">
    <Card 
        class="lg:mx-16"
        direction={direction}
    >
        <div slot="body">
            <div class="body">
                <div class="px-10">
                    <img src={company.icon} alt={company.name}>
                </div>
                
                <p class="text-secondary text-lg pt-4">{company.id}</p>
            </div>
        </div>
        <div slot="actions">
            <div class="actions">
                <button type="button" class="button mx-auto" on:click={showGifts(company.url)}>
                    <span>{ company.btnText }</span>
                    <Fa icon={company.isOnline ? faGift : faStore} />
                </button>
            </div>
        </div>
    </Card>
    <div class="card lg:mx-16">
    </div>
</div>
