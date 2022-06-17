<script>
    import IconGift from '$lib/icons/Gift.svelte';

    export let company, image, border = false;
</script>

<div class="px-3 py-8 md:p-6 {border ? 'border-b border-b-primary md:border-b-0 md:border-r md:border-r-primary' : ''}">
    <div class="card lg:mx-16">
        <div class="body">
            <div class="px-10">
                <img src={image} alt={company}>
            </div>
        
            <button type="button" class="button mx-auto mt-8 md:mt-16">
                <span>Ver regalos</span>
                <IconGift />
            </button>
        </div>
    </div>
</div>
