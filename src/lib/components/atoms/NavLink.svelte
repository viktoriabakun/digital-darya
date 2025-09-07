<script>
	/**
	 * @type {{ title: string, target: string }}
	 */
	const { title, target } = $props();
	import { toggleBurgerMenu } from '$lib/stores/burger-menu.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';

	function toggleMenuOnLinkClick() {
		if (lg.current) {
			return () => {};
		}

		toggleBurgerMenu();
	}
</script>

<a
	href={target}
	class={[
		'navLink text-md flex items-center px-3 py-2 text-white/40 transition-colors duration-400 hover:text-white',
		'before:mr-2 before:flex before:size-2 before:items-center before:rounded-full before:bg-transparent before:content-[""]',
	]}
	onclick={toggleMenuOnLinkClick}
>
	{title}
</a>
