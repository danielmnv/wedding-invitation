<script>
    import Saos from 'saos';

    export let image;
</script>

<div class="{$$props.class} absolute">
    <Saos
        animation="slide-in-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        once={true}
        top={50}
    >
        <img class="w-auto h-28 md:h-40" src={image} alt="">
    </Saos>
</div>