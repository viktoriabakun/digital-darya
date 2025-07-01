<script>
	import SkillSetFolder from '$lib/components/molecules/SkillSetFolder.svelte';

	const skillSetFolders = [
		{
			title: 'User Experience',
			icon: '',
			size: 'lg',
			color: 'light',
			tags: [
				'Competitive Analysis',
				'User Flows & Customer Journeys',
				'Wireframing & Prototyping',
				'A/B Testing',
				'User Research',
				'Information Architecture'
			]
		},
		{
			title: 'User Interface',
			icon: '',
			size: 'lg',
			color: 'dark',
			tags: [
				'Visual Design',
				'Typography & Color',
				'Responsive & Adaptive Design',
				'Design Systems & Component Libraries'
			]
		},
		{
			title: 'Figma',
			icon: 'figma-icon.svg',
			size: 'md',
			color: 'dark',
			tags: ['Prototyping', 'Visual & Layout Design', 'Design Systems & UI Components']
		},
		{
			title: 'Adobe Suite',
			icon: 'adobe-suite-icon.svg',
			size: 'md',
			color: 'dark',
			tags: ['Photoshop', 'After Effects', 'Premier Pro', 'Illustrator']
		},
		{
			title: 'Jira',
			icon: 'jira-icon.svg',
			size: 'md',
			color: 'dark',
			tags: ['Prioritization', 'Task Management', 'Design Documentation & Tracking']
		}
	];
</script>

<section id="skills" class="section-scroll-margin">
	<h2
		class="max-container px-4 py-40 text-5xl leading-[60px] font-medium lg:py-[200px] lg:text-6xl lg:leading-[72px] xl:px-0"
	>
		Explore my full range of soft and hard skills
	</h2>
	<div class="bg-neutral-black">
		<div
			class="max-container grid gap-x-10 gap-y-9 px-4 py-12 lg:grid-cols-6 lg:grid-rows-2 lg:py-[112px] xl:px-0"
		>
			{#each skillSetFolders as folder, i (folder.title + i)}
				<SkillSetFolder class={i > 1 ? 'lg:col-span-2' : 'lg:col-span-3'} {...folder} />
			{/each}
		</div>
	</div>
</section>
