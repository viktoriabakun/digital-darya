<script>
	import { lg } from '$lib/utils/media-query.svelte.js';
	import Text from '$lib/components/atoms/Text.svelte';
	import Accordion from '$lib/components/organisms/Accordion.svelte';

	const workExperience = [
		{
			company: 'FREELANCE',
			period: '2024 - Present',
			position: 'UX/UI Designer',
			description:
				'I moved into freelance UX/UI design and now oversee 2 to 3 projects with different focuses each month. At Funnelr.com, I manage and continually improve the design of a proprietary CMS tools focused on automating and optimizing business processes.  I also work on the Beauty AI App and other startups, making strides in the innovation of digital tools in different industries.'
		},
		{
			company: 'SOFTTECO',
			period: '2023 - 2024 (1 year)',
			position: 'UX/UI Designer',
			description: `I worked at a major Polish media group as part of a team developing a CMS system.
My daily tasks involved working with the design system to create key components like the asset media manager,
article editor, and data tables. I also conducted user testing with Maze, analyzed the results, and used
insights to improve the user experience.`
		},
		{
			company: 'LOMRAY SOFTWARE',
			period: '2022 - 2024 (1 year 3 month)',
			position: 'UX/UI Designer',
			description: `Creating products from scratch, +10 MVPs designs were created, working directly with the clients,
Full cycle Web/Mobile design, Design Systems, UI Kits creating, working with Jira/Trello.`
		},
		{
			company: 'DEFISER',
			period: '2022 (6 month contract)',
			position: 'UX/UI Designer',
			description: `I designed a user-friendly platform with a unique identity, I've been working on UI-Kit, created a logotype,
worked with a development team, and created engaging landing pages and social media content.`
		},
		{
			company: 'EXTBEL',
			period: '2021 - 2022 (1 year)',
			position: 'UX/UI Designer',
			description: `I have worked on both in-house products and outsourcing projects. My key responsibilities included creating
and maintaining Design Systems, conducting UX research, and designing full-cycle Web and Mobile Design.
Additionally, I managed SMM for a design blog, creating themes and visuals for posts, as well as working
on animations and logo design.`
		},
		{
			company: 'YURMARK',
			period: '2019 - 2021 (2 years)',
			position: 'UX/UI Designer + Graphic Designer',
			description: `As a Web & Graphic Designer, I handled the full design cycle—from client communication and UX research to branding,
social media graphics, and corporate presentations.`
		}
	];
</script>

<section
	id="experience"
	class="max-container section-scroll-margin flex flex-col px-4 py-12 lg:pt-0 lg:pb-[112px] xl:px-0"
>
	<h2 class="mb-10 text-4xl leading-11 lg:text-7xl lg:leading-[1.25]">Experience</h2>

	{#each workExperience as { company, position, description, period } (company)}
		<!--		mobile-->
		{#if !lg.current}
			<div class="border-t border-black py-10">
				<Accordion>
					{#snippet header()}
						<div class="flex flex-col items-start gap-2 text-start">
							<h3 class="text-xl font-semibold">{company}</h3>
							<Text size="lg" class="!text-brand-blue-alfa-50">{position}</Text>
						</div>
					{/snippet}
					{#snippet content()}
						<Text class="pt-4">{description}</Text>
					{/snippet}
					{#snippet footer()}
						<Text weight="semibold" class="pt-4">{period}</Text>
					{/snippet}
				</Accordion>
			</div>
		{:else}
			<!--			desktop-->
			<div class="border-neutral-black/20 grid grid-cols-2 border-t py-10">
				<Text weight="semibold" size="xl">{period}</Text>

				<div class="flex flex-col items-start gap-2 text-start">
					<h3 class="text-xl font-semibold">{company}</h3>
					<Text size="lg" class="text-neutral-black/80">{position}</Text>
					<Text size="lg" class="pt-2">{description}</Text>
				</div>
			</div>
		{/if}
	{/each}
</section>
