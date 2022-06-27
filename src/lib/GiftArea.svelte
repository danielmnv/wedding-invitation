<script>
    import CompanyGifts from '$lib/components/CompanyGifts.svelte';
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';
    import { faGifts } from '@fortawesome/free-solid-svg-icons'
</script>

<section class="section">
    <div class="container">
        <Title text={'Regalos'} icon={faGifts} />
    
        <Text 
            class="pt-16"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam debitis vel laboriosam, asperiores architecto, a reiciendis non tenetur quis eum impedit eligendi nostrum. Saepe harum aspernatur impedit fuga ducimus."
        />
    </div>

    <div class="container pt-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <CompanyGifts company="Amazon" image="/amazon.svg" border={true} />
            <CompanyGifts company="Cantia" image="/cantia.svg" direction="right" />
        </div>
    </div>
</section>