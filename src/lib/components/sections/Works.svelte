<script>
	import CaseCard from '$lib/components/organisms/CaseCard.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const cases = [
		{
			id: 1,
			imgSrc: 'case-1.webp',
			tagText: 'Health&Wellness',
			title: 'Health documents storage mobile application',
			description:
				'This mobile app is an essential companion for anyone looking to manage their health effectively. With its user-friendly interface, it provides access to extensive health information and delivers personalized recommendations tailored to individual needs.',
			linkText: 'App store',
			href: 'https://example.com',
			footnote:
				'Design project was created for Lomray Software. \n All rights belong to Lomray Software',
			theme: 'dark'
		},
		{
			id: 2,
			imgSrc: 'case-2.webp',
			tagText: 'Fin-tech',
			title: 'Payments mobile application',
			description:
				'This application seamlessly combines money management with the convenience of transfers and payments, offering endless possibilities for everyday life. It allows you to easily pay for transport, fuel, and take advantage of unique promo codes and discounts.',
			linkText: 'Ask about project',
			href: 'https://example.com',
			footnote: 'Design project was created as case study',
			theme: 'light'
		},
		{
			id: 3,
			imgSrc: 'case-3.webp',
			tagText: 'Fitness&Sport',
			title: 'Fitness application for well-known fitness trainer',
			description:
				'This fitness web and mobile app, created for a well-known trainer and runner in the USA, combines running tracking features with fitness classes, nutrition guidance, and podcasts, offering a holistic approach to health and fitness.',
			linkText: 'App store',
			href: 'https://example.com',
			footnote:
				'Design project was created for Lomray Software. \n All rights belong to Lomray Software',
			theme: 'dark'
		},
		{
			id: 4,
			imgSrc: 'case-4.webp',
			tagText: 'Media',
			title: 'Content Management System',
			description:
				'This CMS system integrates powerful management and creation tools, designed to help editors and managers achieve their goals. With a robust custom asset media manager and an intuitive editor mode, users have full creative freedom to craft amazing articles, with the option of leveraging AI for an extra boost when needed.',
			linkText: 'Ask about project',
			href: 'https://example.com',
			footnote: 'Design project is under NDA',
			theme: 'light'
		},
		{
			id: 5,
			imgSrc: 'case-5.webp',
			tagText: 'Mobile Game',
			title: 'Mobile game “Truth or Dare”',
			description:
				'This mobile game, Truth or Dare, provides an engaging experience with two modes: Online and Offline, allowing players to enjoy the game anytime, anywhere. With an extensive collection of theme and occasion packs, it keeps the gameplay fresh and exciting, offering endless new challenges and fun twists.',
			linkText: 'App store',
			href: 'https://example.com',
			footnote:
				'Design project was created for Lomray Software. \n All rights belong to Lomray Software',
			theme: 'dark'
		}
	];
</script>

<section
	id="works"
	class="flex min-h-screen w-screen items-center justify-center bg-black px-6 py-12 xl:p-0"
>
	<div id="case-wrapper">
		{#each cases as caseItem (caseItem.id)}
			<CaseCard {...caseItem} />
		{/each}
	</div>
</section>
