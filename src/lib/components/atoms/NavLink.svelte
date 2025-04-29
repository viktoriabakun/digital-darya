<script>
	/**
	 * @type {{ title: string, target: string }}
	 */
	const { title, target } = $props();
	import { toggleBurgerMenu } from '$lib/stores/burger-menu.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';

	function onclick() {
		if (lg.current) {
			return () => {};
		}

		toggleBurgerMenu();
	}
</script>

<a
	href={target}
	class="navLink text-md flex items-center px-3 py-2 text-white/40 transition-colors duration-400 hover:text-white [&[aria-current='page']]:text-white/80"
	{onclick}
>
	{title}
</a>
