<script>
    import CompanyGifts from '$lib/CompanyGifts.svelte';
</script>

<section class="pt-20">

    <div class="container">
        <p class="text-center text-5xl handwriting">Regalos</p>
    
        <p class="text-center pt-16 uppercase tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam debitis vel laboriosam, asperiores architecto, a reiciendis non tenetur quis eum impedit eligendi nostrum. Saepe harum aspernatur impedit fuga ducimus.</p>
    </div>

    <div class="container pt-28">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <CompanyGifts company="Amazon" image="/amazon.svg" border={true} />
            <CompanyGifts company="Cantia" image="/cantia.png" isPNG={true} />
        </div>
    </div>
</section>