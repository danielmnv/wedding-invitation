<script>
    import { getContext } from 'svelte';

    // Components
	import Masonry from 'svelte-bricks';
    import Saos from 'saos';

	// Services
    import { key } from '../services';
    const { _imageService } = getContext(key);

	const [minColWidth, maxColWidth, gap] = [300, 400, 30];
</script>

<section class="section">
    <div class="container">
        {#await _imageService.setPath('book').getDirectory() then items}
        <Masonry 
            {items}
            {minColWidth}
            {maxColWidth}
            {gap}
            idKey="index"
            let:item
        >
            <Saos
                animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
                once={true}
                top={100}
            >
                <div class="card">
                    <img 
                        class="thumbnail min-h-[10rem]"
                        style="height: {item.height}rem"
                        src={item.url} 
                        alt="Book_{item.index}"
                    >
                </div>
            </Saos>
        </Masonry>
        {/await}
    </div>
</section>
