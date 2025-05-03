<script>
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Navigation from '$lib/components/molecules/Navigation.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import BurgerMenu from '$lib/components/molecules/BurgerMenu.svelte';

	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<header
	class="fixed top-[50px] left-0 z-30 flex w-full items-center justify-center px-4 lg:top-[30px]"
>
	<div
		class={[
			'section-container flex items-center justify-between rounded-[var(--rounded-brand)] bg-transparent px-5 py-5 lg:px-9 lg:py-[30px]',
			'transition-[background-color] duration-600 will-change-[background-color]'
		]}
		style:background={scroll < 50
			? 'transparent'
			: scroll < 100
				? 'var(--color-brand-blue-alfa-50)'
				: scroll < 150
					? 'var(--color-brand-blue-alfa-70)'
					: 'var(--color-brand-blue)'}
	>
		<Logo class="relative z-15 flex h-9 w-[165px] shrink-0 lg:h-12 lg:w-[208px]" />

		{#if lg.current}
			<Navigation />
			<Link href="https://example.com">
				<span class="action-link px-8">Hire</span>
				<span class="action-link"><ArrowUpRightIcon /></span>
			</Link>
		{:else}
			<BurgerMenu />
		{/if}
	</div>
</header>
