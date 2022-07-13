<script>
    // Components
    import Carousel from 'svelte-carousel';
    import Saos from 'saos';

    export let images;
</script>

<div>
    <!-- Carousel -->
    <Saos
        animation="puff-in-top 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both"
        once={true}
        top={100}
    >
        <div class="{$$props.class}">
            <Carousel
                autoplay
                arrows={false}
                autoplayDuration={3000}
            >
                {#each images as img}
                    <div class="img-container">
                        <img class="thumbnail" src={img.url} alt="WeddingImage_{img.index}">
                    </div>
                {/each}
            </Carousel>
        </div>
    </Saos>
</div>

<style>
    .img-container {
        @apply 
            relative
            h-72 md:h-96 lg:h-[36rem];
    }

    .img-container::before, .img-container::after{
        content: "";
        background: url('/rip.svg') bottom center;
        @apply absolute left-0 h-5 w-full bg-auto;
    }
    .img-container::before {
        @apply top-0;
    }
    .img-container::after {
        @apply bottom-0 rotate-180;
    }
</style>