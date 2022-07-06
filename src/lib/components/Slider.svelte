<script>
    import Carousel from 'svelte-carousel';
</script>

<div class="{$$props.class}">
    <Carousel
        autoplay
        arrows={false}
        autoplayDuration={3000}
    >
        {#each Array(3) as _, index (index)}
            <div class="img-container">
                <img class="slider" src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="No">
            </div>
        {/each}
    </Carousel>
</div>

<style>
    .img-container {
        @apply 
            relative bg-slate-200
            h-auto md:h-96 lg:h-[36rem];
    }

    .img-container::before, .img-container::after{
        content: "";
        background: url('rip.svg') bottom center;
        @apply absolute left-0 h-5 w-full bg-auto;
    }
    .img-container::before {
        @apply top-0;
    }
    .img-container::after {
        @apply bottom-0 rotate-180;
    }
    .slider {
        @apply w-full h-full object-cover;
    }
</style>