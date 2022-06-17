<script>
    import CompanyGifts from '$lib/components/CompanyGifts.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<section class="section">
    <div class="container">
        <Title text={'Regalos'} />
    
        <p class="text-center pt-16 uppercase tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam debitis vel laboriosam, asperiores architecto, a reiciendis non tenetur quis eum impedit eligendi nostrum. Saepe harum aspernatur impedit fuga ducimus.</p>
    </div>

    <div class="container pt-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <CompanyGifts company="Amazon" image="/amazon.svg" border={true} />
            <CompanyGifts company="Cantia" image="/cantia.svg" />
        </div>
    </div>
</section>