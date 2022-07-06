<script>
	import Masonry from 'svelte-bricks';

	let nItems = 10;
	$: items = [...Array(nItems).keys()];

	let [minColWidth, maxColWidth, gap] = [300, 400, 20];

    function random() {
        return Math.floor(Math.random() * (40 - 10 + 1) + 10);
    }
</script>

<section class="section">
    <div class="container">
        <Masonry {items} {minColWidth} {maxColWidth} {gap} let:item>
            <div class="card">
                <img 
                    class="slider object-cover"
                    style="min-height: {random()}rem;"
                    src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt="No"
                >
            </div>
        </Masonry>
    </div>
</section>
