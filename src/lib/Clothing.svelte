<script>
    import Saos from 'saos';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte'
</script>

<section class="section">
    <Title text={'Código de Vestimenta'} />

    <div class="container pt-16">
        <div class="flex flex-col justify-center items-center gap-y-6 clothing pb-10">
            <img class="w-auto h-20 md:h-24" src="/icons/clothing.png" alt="Formal">

            <p class="text-center uppercase tracking-wider border-2 border-primary rounded-md p-3 md:p-2 hover:bg-primary hover:text-white transition-all duration-500">Formal</p>
        </div>

        <div class="pb-10 md:px-80">
            <hr class="border-primary">
        </div>
        
        <Text class="pt-0" content="No niños" />
    </div>
</section>