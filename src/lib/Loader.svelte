<script>
    import Saos from 'saos';
</script>

<section class="absolute w-full h-full loader">
    <div class="absolute w-full center-item">
        <Saos
            animation="heartbeat 1.5s ease-in-out infinite both"
        >
            <div class="flex justify-center">
                <div class="circle-container loader-text">
                    <span class="first-letter">J</span>
                    <span class="second-letter">A</span>
                </div>
            </div>

            <img class="absolute center-item w-auto h-[17rem] -ml-2" src="ring.webp" alt="Ring">
        </Saos>
    </div>
</section>

<style>
.circle-container {
    @apply 
        relative
        bg-white rounded-full p-28 shadow-lg
        text-primary;
}

.first-letter {
    @apply
        absolute text-8xl
        top-1/3 left-1/3 -translate-y-1/3 -translate-x-1/3;
}

.second-letter {
    @apply
        absolute text-9xl
        bottom-1/3 right-1/3 translate-y-1/3 translate-x-1/3;
}
</style>