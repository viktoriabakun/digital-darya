<script>
	import NavLink from '$lib/components/atoms/NavLink.svelte';
	import { onMount } from 'svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';
	import { pushState } from '$app/navigation';

	const navLinks = [
		{ title: 'Home', target: '#home' },
		{ title: 'About', target: '#about' },
		{ title: 'Works', target: '#works' },
		{ title: 'Skills', target: '#skills' },
		{ title: 'Contact', target: '#contact' }
	];

	let activeNavLink = $state('');

	onMount(() => {
		if (history.scrollRestoration) {
			history.scrollRestoration = 'manual';
		}

		activeNavLink = location.hash.length ? location.hash : '#home';
		const activeSection = document.getElementById(activeNavLink.slice(1));

		if (activeSection) {
			activeSection.scrollIntoView({ behavior: 'smooth' });
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('id');

						activeNavLink = `#${id}`;
						if (window.location.hash !== `#${id}`) {
							pushState(`#${id}`, {});
						}
					}
				});
			},
			{
				threshold: lg.current ? 0.5 : 0.2 // when 50% (desktop) or 10% (mobile) of the target is visible
			}
		);

		const sections = Array.from(document.querySelectorAll('section[id]'));
		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
		};
	});
</script>

<nav class="flex w-2/3 flex-col gap-3 lg:w-auto lg:flex-row lg:gap-2">
	{#each navLinks as { title, target } (target)}
		<NavLink {title} {target} isActive={activeNavLink === target} />
	{/each}
</nav>
