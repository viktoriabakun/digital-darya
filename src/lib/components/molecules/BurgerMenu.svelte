<script>
	import { isBurgerMenuOpen as open } from '$lib/stores/burger-menu.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';
	import Navigation from '$lib/components/molecules/Navigation.svelte';
	import SocialLinks from '$lib/components/molecules/SocialLinks.svelte';
	import BurgerButton from '$lib/components/atoms/BurgerButton.svelte';

	$effect(() => {
		if ($open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	$effect(() => {
		if (lg.current) {
			open.set(false);
		}
	});
</script>

<BurgerButton />

<div
	class={[
		' fixed top-0 right-0 z-10 w-full  overflow-x-hidden backdrop-blur-xs transition-[height] duration-300',
		$open ? 'h-full' : 'h-0'
	]}
>
	<div
		class={[
			'bg-brand-blue relative mx-4 mt-[50px] rounded-[var(--rounded-brand)] px-5 pt-24 pb-10'
		]}
	>
		<Navigation />
		<SocialLinks class="ml-3 pt-[99px]" />
	</div>
</div>
