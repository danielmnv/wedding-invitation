<script>
	import '../app.css';
	import { handleViewport } from '../viewport';
</script>

<div class="main-content" use:handleViewport>
	<main>
		<slot />
	</main>
	
	<footer>
		<p>Made by <a target="" href="https://danielmolina.me">DM</a></p>
	</footer>
</div>