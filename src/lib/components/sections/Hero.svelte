<script lang="ts">
	import Text from '$lib/components/atoms/Text.svelte';
	import BlogPostCard from '$lib/components/organisms/BlogPostCard.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import { sm, lg } from '$lib/utils/media-query.svelte.js';
	import gsap from 'gsap';

	let video: HTMLVideoElement;

	function scrollToWorks(event: MouseEvent) {
		event.preventDefault();

		gsap.to(window, {
			duration: 2,
			scrollTo: '#works',
		});
	}
</script>

<div class="h-screen 2xl:h-full w-full px-4 py-[30px]">
	<section
		id="home"
		class="section-container max-container bg-brand-blue max-h-[760px] lg:max-h-[798px] section-scroll-margin relative aspect-[358/760] rounded-[var(--rounded-brand)] lg:aspect-[1288/798] h-full"
	>
		<div class="video-gradient"></div>
		<video
			bind:this={video}
			oncanplay={() => video.play()}
			class="absolute z-0 h-full w-full rounded-[var(--rounded-brand)] object-cover object-top"
			poster={sm.current ? 'hero-poster-mobile.webp' : 'hero-poster-desktop.webp'}
			autoplay
			loop
			muted
			playsinline
		>
			<source src="hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 639px)" />
			<source src="hero-bg-desktop.mp4" type="video/mp4" />
		</video>

		<div
			class="absolute z-20 flex h-full w-full flex-col justify-end gap-10 px-5 pb-8.5 lg:flex-row lg:items-end lg:justify-between lg:px-9"
		>
			<div class="max-w-[325px] sm:max-w-100 lg:max-w-[585px]">
				<h2 class="text-5xl leading-[50px] font-normal text-white lg:text-7xl lg:leading-[90px]">
					Creating Digital Design With Ease
				</h2>
				<Text size="lg" color="light" class="mt-4">
					Designing digital experiences with care and creativity. <br class="hidden lg:block" /> Proudly
					crafted to bring ideas to life.
				</Text>
				<a onclick={scrollToWorks} href="https://example.com" class="mt-8 group inline-flex">
					<span class="action-link-light px-8 text-nowrap">See works</span>
					<span class="action-link-light size-[56px]"><ArrowUpRightIcon /></span>
				</a>
			</div>
			{#if lg.current}
				<BlogPostCard />
			{/if}
		</div>
	</section>
</div>
