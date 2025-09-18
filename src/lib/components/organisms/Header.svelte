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

<header class="fixed top-[30px] left-0 z-30 flex w-full items-center justify-center px-4">
	<div
		class={[
			'max-container flex items-center justify-between rounded-[var(--rounded-brand)] bg-transparent px-5 py-5 lg:px-9 lg:py-[30px]',
			'transition-[background-color] duration-600 will-change-[background-color]'
		]}
		style:background={scroll < 250
			? 'transparent'
			: 'var(--color-brand-blue-alfa-70)'}
	>
		<Logo class="relative z-15 flex h-9 w-[165px] shrink-0 lg:h-12 lg:w-[168px]" />

		{#if lg.current}
			<Navigation />
			<Link href="https://t.me/i_am_dashaa">
				<span class="action-link-light px-8">Hire</span>
				<span class="action-link-light size-[56px]"><ArrowUpRightIcon /></span>
			</Link>
		{:else}
			<BurgerMenu />
		{/if}
	</div>
</header>
