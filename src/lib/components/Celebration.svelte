<script>
    import { onMount } from "svelte";
    import { Fireworks } from 'fireworks-js'

    onMount(() => {
        const container = document.querySelector('.fireworks-container')
        // Fireworks options
        const fireworks = new Fireworks(container, {
            hue: {
                min: 40,
                max: 40
            },
            delay: {
                min: 30,
                max: 50
            },
            traceSpeed: 2
        })

        // Intervel to start fireworks
        setTimeout(() => {
            fireworks.start()

            // Interval to stop fireworks
            setTimeout(() => fireworks.stop(), 30000)
        }, 1000);
    })
</script>

<section>
    <div class="fireworks-container w-full h-full fixed"></div>
</section>