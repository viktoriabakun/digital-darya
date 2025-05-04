<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import TeaserCTA from '$lib/components/molecules/TeaserCTA.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
</script>

<section id="about" class="section-scroll-margin section-container px-4">
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

	<a href="#skills" aria-labelledby="skills-link-title">
		<div class="card group bg-brand-brown/10 aspect-[365/316] lg:max-w-[365px]">
			<Tag color="brown">Skills</Tag>

			<TeaserCTA>
				{#snippet titleSlot()}
					<Text id="skills-link-title" size="lg" weight="bold">
						Explore my full range of <br /> design skills
					</Text>
				{/snippet}
			</TeaserCTA>
		</div>
	</a>

	<a href="#contacts" aria-labelledby="contacts-link-title">
		<div class="card group bg-brand-blue/10 aspect-[365/316] lg:max-w-[365px]">
			<Tag color="blue">Contacts</Tag>

			<TeaserCTA>
				{#snippet titleSlot()}
					<Text id="contacts-link-title" size="lg" weight="bold">Let’s discuss your ideas</Text>
				{/snippet}
			</TeaserCTA>
		</div>
	</a>

	<a href="#works" aria-labelledby="works-link-title">
		<div
			class="card group aspect-[365/316] bg-[url(/about-img-3.webp)] bg-cover bg-center bg-no-repeat lg:max-w-[365px]"
		>
			<Tag color="neutral">Works</Tag>

			<TeaserCTA color="light">
				{#snippet titleSlot()}
					<Text id="works-link-title" color="light" size="lg" weight="bold">
						Check out <br /> my latest projects
					</Text>
				{/snippet}
			</TeaserCTA>
		</div>
	</a>

	<a href="#experience" aria-labelledby="experience-link-title">
		<div
			class="card group aspect-[365/316] bg-[url(/about-img-2.webp)] bg-cover bg-center bg-no-repeat lg:max-w-[365px]"
		>
			<Tag color="neutral">Experience</Tag>

			<TeaserCTA color="light">
				{#snippet titleSlot()}
					<Text id="experience-link-title" color="light" size="lg" weight="bold">
						A glimpse into my 5 years of experience
					</Text>
				{/snippet}
			</TeaserCTA>
		</div>
	</a>

	<Link aria-label="Hire" class="w-full" href="https://example.com">
		<div
			class="card group aspect-[518/653] max-w-[518px] bg-[url(/about-img-1.webp)] bg-cover bg-center bg-no-repeat"
		>
			<Tag color="neutral">Nice to meet you!</Tag>

			<div class="flex self-end">
				<span class="action-link px-8">Hire</span>
				<span class="action-link"><ArrowUpRightIcon /></span>
			</div>
		</div>
	</Link>
</section>
