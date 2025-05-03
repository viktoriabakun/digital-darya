<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import BlogPostCard from '$lib/components/organisms/BlogPostCard.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';
	import { onMount } from 'svelte';

	let video;

	onMount(() => {
		if (video) {
			video.play();
		}
	});
</script>

<div class="w-full px-4 pt-[50px] lg:pt-[30px]">
	<section
		id="home"
		class="section-container bg-brand-blue section-scroll-margin relative aspect-[358/760] max-h-[760px] rounded-[var(--rounded-brand)] lg:aspect-[1288/797] lg:max-h-[798px]"
	>
		<div class="video-gradient"></div>
		<video
			bind:this={video}
			class=" absolute z-0 h-full w-full rounded-[var(--rounded-brand)] object-cover object-top"
			autoplay
			loop
			muted
			playsinline
			poster=""
		>
			<source src="hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
			<source src="hero-bg-desktop.mp4" type="video/mp4" />
		</video>

		<div class="relative z-20 flex h-full items-end justify-between gap-10 px-5 pb-8.5 lg:px-9">
			<div class="max-w-[325px] sm:max-w-100 lg:max-w-[585px]">
				<h2 class="text-5xl leading-[50px] font-normal text-white lg:text-7xl lg:leading-[90px]">
					Creating Digital Design With Ease
				</h2>
				<Text size="lg" color="light" class="mt-4">
					Designing digital experiences with care and creativity. <br class="hidden lg:block" /> Proudly
					crafted to bring ideas to life.
				</Text>
				<Link href="https://example.com" class="mt-8">
					<span class="action-link px-8 text-nowrap">See works</span>
					<span class="action-link"><ArrowUpRightIcon /></span>
				</Link>
			</div>
			{#if lg.current}
				<BlogPostCard />
			{/if}
		</div>
	</section>
</div>
