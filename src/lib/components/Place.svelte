<script>
    import Fa from 'svelte-fa';
    import { faMapPin } from '@fortawesome/free-solid-svg-icons';
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';

    export let title, name, address, time, url, direction = 'left', icon;

    function goToDirection(url) {
        window.open(url, '_blank')
    }
</script>
<section>
    <Title text={title} icon={icon} />

    <Card 
        class="mt-8"
        direction={direction}
    >
        <!-- Image -->
        <div slot="image">
            <img src="https://cdn0.bodas.com.mx/vendor/5370/3_2/960/jpg/img-2769_5_125370-161704859028815.jpeg" alt={name}>
        </div>
        <!-- Body -->
        <div slot="body">
            <div class="body">
                <h3 class="title">{name}</h3>
                <p class="address">{address}</p>
                <p class="time">{time}</p>
            </div>
        </div>
        <!-- Actions -->
        <div slot="actions">
            <div class="actions">
                <button type="button" class="button" on:click={goToDirection(url)}>
                    <span>Cómo llegar</span>
                    <Fa icon={faMapPin} />
                </button>
            </div>
        </div>
    </Card>
</section>