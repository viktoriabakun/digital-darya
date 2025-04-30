<script>
	/**
	 * @type {{ title: string, target: string, isActive: boolean }}
	 */
	const { title, target, isActive } = $props();
	import { toggleBurgerMenu } from '$lib/stores/burger-menu.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';

	function toggleMenuOnLinkClick() {
		if (lg.current) {
			return () => {};
		}

		toggleBurgerMenu();
	}

	function onclick() {
		document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });

		toggleMenuOnLinkClick();
	}
</script>

<a
	href={target}
	class={[
		'navLink text-md flex items-center px-3 py-2 text-white/40 transition-colors duration-400 hover:text-white',
		'before:mr-2 before:flex before:size-2 before:items-center before:rounded-full before:bg-transparent before:content-[""]',
		isActive && 'text-white/80 before:bg-white/80'
	]}
	{onclick}
>
	{title}
</a>
