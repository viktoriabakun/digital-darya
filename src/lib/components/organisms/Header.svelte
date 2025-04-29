<script>
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Navigation from '$lib/components/molecules/Navigation.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import BurgerMenu from '$lib/components/molecules/BurgerMenu.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
</script>

<header class="sticky top-0 flex w-full items-center justify-between bg-pink-300/80 px-[30px] py-9">
	<Logo class="relative z-15 flex h-9 w-[165px] shrink-0 lg:h-12 lg:w-[208px]" />

	{#if lg.current}
		<Navigation />
		<Link href="https://example.com">
			<span class="actionLink px-8">Hire</span>
			<span class="actionLink"><ArrowUpRightIcon /></span>
		</Link>
	{/if}

	<BurgerMenu />
</header>
