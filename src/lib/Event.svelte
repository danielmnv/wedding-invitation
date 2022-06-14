<script>
    import Place from '$lib/Place.svelte';
</script>
<section>
    <div class="container">
        <p class="text-center uppercase p-9 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolores? Repudiandae aperiam deserunt veniam eius deleniti similique molestiae? 
        </p>
    </div>

    <!-- Places -->
    <div class="container pt-9">
        <div class="grid grid-cols-2 gap-6">
            <!-- Church -->
            <Place
                time="4:00 pm"
                title="Ceremonia"
                name="Templo"
                address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eius? Cum nulla nisi vel consequuntur similique iusto illo"
            />

            <!-- Event -->
            <Place
                time="6:00 pm"
                title="Recepción"
                name="Hacienda de Letras"
                address="Teodoro Olivares S/N, San Luis de Letras, 20668 San Luis de Letras, Aguascalientes, Mexico"
                url="https://www.google.com/maps/dir/?api=1&destination=22.13750203008778,-102.29250177980899"
            />
        </div>
    </div>
</section>