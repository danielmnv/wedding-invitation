<script>
    import IconLocation from '$lib/icons/Location.svelte';

    export let title, name, address, time, url;

    function goToDirection(url) {
        window.open(url, '_blank')
    }
</script>
<section>
    <p class="headline mb-8">{title}</p>

    <div class="card">
        <div class="img">
            <img src="https://cdn0.bodas.com.mx/vendor/5370/3_2/960/jpg/img-2769_5_125370-161704859028815.jpeg" alt={name}>
        </div>

        <div class="body">
            <h3 class="title">{name}</h3>
            <p class="address">{address}</p>
            <p class="time">{time}</p>
        </div>

        <div class="actions">
            <button type="button" class="button" on:click={goToDirection(url)}>
                <span>Cómo llegar</span>
                <IconLocation />
            </button>
        </div>
    </div>
</section>