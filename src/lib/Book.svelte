<script>
    import { getContext } from 'svelte';

    // Components
	import Masonry from 'svelte-bricks';
    import Saos from 'saos';

	// Services
    import { key } from '../services';
    const { _imageService } = getContext(key);

	const [minColWidth, maxColWidth, gap] = [300, 400, 30];
    const heights = [35, 30, 18, 30, 20, 35, 20];
</script>

<section class="section">
    <div class="container">
        {#await _imageService.setPath('book').getDirectory() then items}
        <Masonry {items} {minColWidth} {maxColWidth} {gap} let:item let:idx>
            <Saos
                animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
                once={true}
                top={100}
            >
                <div class="card">
                    <img 
                        class="thumbnail"
                        style="height: {heights[idx]}rem;"
                        src={item} 
                        alt="No"
                    >
                </div>
            </Saos>
        </Masonry>
        {/await}
    </div>
</section>
