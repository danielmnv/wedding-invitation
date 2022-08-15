<script>
	import '../app.css';
	import { handleViewport } from '../viewport';

	import Fa from 'svelte-fa';
	import { faArrowUpRightFromSquare, faHeart } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="main-content" use:handleViewport>
	<main>
		<slot />
	</main>
	
	<footer class="normal-case">
		<div class="p-2 flex items-center justify-between gap-x-5">
			<div class="w-8">
				<a href="https://danielmolina.me" target="_blank">
					<img src="dm.svg" alt="Daniel Molina">
				</a>
			</div>

			<div class="flex items-center gap-x-2 font-bold text-sm md:text-base">
				<span>Made with </span>
				<Fa icon={faHeart} /> 
				<span>by</span>
				<span>Daniel Molina!</span>
			</div>

			<div class="flex justify-end">
				<a href="https://danielmolina.me" target="_blank">
					<Fa icon={faArrowUpRightFromSquare} />
				</a>
			</div>
		</div>
	</footer>
</div>