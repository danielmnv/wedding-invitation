<script>
    import Saos from 'saos';

    export let top = 100, duration = 0.6, direction = 'left';
</script>

<Saos
    animation="slide-in-{direction} {duration}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"
    once={true}
    top={top}
>
    <div class="card {$$props.class}">
        <div class="image">
            <slot name="image"></slot>
        </div>
    
        <slot name="body"></slot>
    
        <slot name="actions"></slot>
    </div>
</Saos>