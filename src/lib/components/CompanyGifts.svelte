<script>
    import IconGift from '$lib/icons/Gift.svelte';
    import Card from '$lib/components/Card.svelte';

    export let company, image, border = false, direction;
</script>

<div class="px-3 py-8 md:p-6 {border ? 'border-b border-b-primary md:border-b-0 md:border-r md:border-r-primary' : ''}">
    <Card 
        class="lg:mx-16"
        direction={direction}
    >
        <div slot="body">
            <div class="body">
                <div class="px-10">
                    <img src={image} alt={company}>
                </div>
            
            </div>
        </div>
        <div slot="actions">
            <div class="actions">
                <button type="button" class="button mx-auto mt-8 md:mt-16">
                    <span>Ver regalos</span>
                    <IconGift />
                </button>
            </div>
        </div>
    </Card>
    <div class="card lg:mx-16">
    </div>
</div>
