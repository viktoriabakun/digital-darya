<script lang="ts">
	import Text from '$lib/components/atoms/Text.svelte';
	import BlogPostCard from '$lib/components/organisms/BlogPostCard.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import gsap from 'gsap';

	let video: HTMLVideoElement;
	let showPoster = $state(true);

	async function handleCanPlay() {
		try {
			await video.play();
			showPoster = false;
		} catch (err) {
			console.warn('Could not autoplay video', err);
		}
	}

	function scrollToWorks(event: MouseEvent) {
		event.preventDefault();

		gsap.to(window, {
			duration: 2,
			scrollTo: '#works'
		});
	}
</script>

<div class="h-full w-full px-4 py-[30px]">
	<section
		id="home"
		class="section-container max-container bg-brand-blue section-scroll-margin relative aspect-[358/760] h-full max-h-[760px] rounded-[var(--rounded-brand)] lg:max-h-[798px]"
	>
		<picture class:opacity={showPoster ? 1 : 0} class="absolute inset-0 z-0 transition-opacity">
			<source srcset="hero-poster-mobile.webp" media="(max-width: 1023px)" />
			<source srcset="hero-poster-desktop.webp" media="(min-width: 1024px)" />
			<img alt="" class="h-full w-full rounded-[var(--rounded-brand)] object-cover object-top" />
		</picture>

		<div class="video-gradient"></div>
		<video
			bind:this={video}
			oncanplay={handleCanPlay}
			class="absolute z-0 h-full w-full rounded-[var(--rounded-brand)] object-cover object-top"
			autoplay
			loop
			muted
			playsinline
			preload="metadata"
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
				<a onclick={scrollToWorks} href="https://example.com" class="group mt-8 inline-flex">
					<span class="action-link-light px-8 text-nowrap">See works</span>
					<span class="action-link-light size-[56px]"><ArrowUpRightIcon /></span>
				</a>
			</div>
			<BlogPostCard />
		</div>
	</section>
</div>
