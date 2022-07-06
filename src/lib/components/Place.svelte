<script>
    import { faMapPin } from '@fortawesome/free-solid-svg-icons';

    // Components
    import Title from '$lib/components/Title.svelte';
    import Card from '$lib/components/Card.svelte';
    import Fa from 'svelte-fa';

    export let title, name, address, time, url, image, icon, direction = 'left';

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
            <div class="img">
                <img src={image} alt={name}>
            </div>
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