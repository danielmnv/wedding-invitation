<script>
    import IconGift from '$lib/icons/Gift.svelte';

    export let company, image, border = false, isPNG = false;
</script>

<div class="px-3 py-8 md:p-6 {border ? 'border-b border-b-primary md:border-b-0 md:border-r md:border-r-primary' : ''}">
    <div class="px-20 md:px-28">
        <img src={image} alt={company} class:png-image="{isPNG}">
    </div>

    <button type="button" class="button mx-auto mt-8 md:mt-16">
        <span>Ver regalos</span>
        <IconGift />
    </button>
</div>

<style>
    .png-image {
        /* TODO: if this color needs to be changeed, look for https://codepen.io/sosuke/pen/Pjoqqp */
        /* filter: invert(82%) sepia(6%) saturate(3219%) hue-rotate(4deg) brightness(83%) contrast(100%); */
        filter: invert(1);
    }
</style>