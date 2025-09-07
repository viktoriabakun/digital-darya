<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import Text from '$lib/components/atoms/Text.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import TeaserCTA from '$lib/components/molecules/TeaserCTA.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		let split, tl;

		function createSplit() {
			split && split.revert();
			tl && tl.revert();

			split = new SplitText('#text-to-reveal', { type: 'chars, words' });

			tl = gsap
				.timeline({
					scrollTrigger: {
						trigger: '#pin-section',
						start: 'top top',
						end: '+=150%',
						pin: true,
						scrub: 0.75
					}
				})
				.set(split.chars, { color: 'var(--color-neutral-black)', stagger: 0.1 }, 0.1);
		}

		createSplit();

		const debouncer = gsap.delayedCall(0.2, createSplit).pause();

		window.addEventListener('resize', () => debouncer.restart(true));
	});
</script>

<section id="about" class="section-scroll-margin max-container px-4 xl:px-0">
	<section class="flex flex-col gap-y-10 py-[200px] lg:pr-[72px]">
		<h2 class="text-4xl leading-11 font-semibold">Welcome to My Digital Playground</h2>
		<div
			class="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-[minmax(200px,_1fr)_minmax(100px,_389px)_minmax(100px,_389px)] lg:gap-x-20"
		>
			<Text size="lg"
				>I'm a UX/UI designer with a passion for creating inspiring and influential designs.</Text
			>
			<Text size="lg"
				>I have experience in creating websites and systems of different complexity, from landing
				pages to CRM or CMS.</Text
			>
			<Text size="lg" class="pr-5.5"
				>I work as an individual entrepreneur with start-ups and businesses to achieve their goals
				by making user's life happier.</Text
			>
		</div>
	</section>

	<div
		class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-[minmax(200px,_518px)_minmax(220px,_365px)_minmax(220px,_365px)]"
	>
		<Link
			class="mb-5 self-start sm:col-span-2 sm:row-span-2 sm:mb-0 md:col-span-1"
			aria-label="Hire"
			href="https://example.com"
		>
			<div class="card group aspect-[calc(518/653)] bg-[url(/about-img-1.webp)] md:max-w-[518px]">
				<Tag color="neutralLight">Nice to meet you!</Tag>

				<div class="flex self-end">
					<span class="action-link-light px-8">Hire</span>
					<span class="action-link-light size-[56px]"><ArrowUpRightIcon /></span>
				</div>
			</div>
		</Link>

		<a href="#skills" aria-labelledby="skills-link-title">
			<div
				class="card group bg-brand-brown/10 aspect-[calc(365/220)] sm:aspect-[calc(365/316)] lg:max-w-[365px]"
			>
				<Tag color="brown">Skills</Tag>

				<TeaserCTA>
					<Text id="skills-link-title" size="lg" weight="bold">
						Explore my full range of <br /> design skills
					</Text>
				</TeaserCTA>
			</div>
		</a>

		<a href="#works" aria-labelledby="works-link-title">
			<div
				class="card group aspect-[calc(365/220)] bg-[url(/about-img-3.webp)] sm:aspect-[calc(365/316)] lg:max-w-[365px]"
			>
				<Tag color="neutralLight">Works</Tag>

				<TeaserCTA color="light">
					<Text id="works-link-title" color="light" size="lg" weight="bold">
						Check out <br /> my latest projects
					</Text>
				</TeaserCTA>
			</div>
		</a>

		<a href="#experience" aria-labelledby="experience-link-title">
			<div
				class="card group aspect-[calc(365/220)] bg-[url(/about-img-2.webp)] sm:aspect-[calc(365/316)] lg:max-w-[365px]"
			>
				<Tag color="neutralLight">Experience</Tag>

				<TeaserCTA color="light">
					<Text id="experience-link-title" color="light" size="lg" weight="bold">
						A glimpse into my 5 years of experience
					</Text>
				</TeaserCTA>
			</div>
		</a>

		<a href="#contact" aria-labelledby="contact-link-title">
			<div
				class="card group bg-brand-blue/10 aspect-[calc(365/220)] sm:aspect-[calc(365/316)] lg:max-w-[365px]"
			>
				<Tag color="blue">Contact</Tag>

				<TeaserCTA>
					<Text id="contact-link-title" size="lg" weight="bold">Let’s discuss your ideas</Text>
				</TeaserCTA>
			</div>
		</a>
	</div>

	<section
		id="pin-section"
		class="flex h-screen max-w-[900px] flex-col justify-center gap-10 pt-10 md:pt-20 lg:gap-[74px] lg:pt-24"
	>
		<Text
			id="text-to-reveal"
			class="text-neutral-black/10 !text-[3svh] !leading-[4svh] md:!text-4xl md:!leading-11"
			weight="semibold"
		>
			In this site portfolio, you will find some of my best UX/UI design projects that showcase my
			skills and process. I will walk you through the challenges, solutions, and outcomes of each
			project, as well as the tools and methods I used.
		</Text>
		<Text
			id="text-to-reveal"
			class="text-neutral-black/10 !text-[3svh] !leading-[4svh] md:!text-4xl md:!leading-11"
			weight="semibold"
		>
			My mission is to help products become bright and successful. By understanding your user's
			needs and together develop an amazing project.
		</Text>
	</section>
</section>
