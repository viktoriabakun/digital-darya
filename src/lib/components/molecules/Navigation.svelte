<script>
	import NavLink from '$lib/components/atoms/NavLink.svelte';
	import { onMount } from 'svelte';
	import { lg } from '$lib/utils/media-query.svelte.js';

	onMount(() => {
		const sections = Array.from(document.querySelectorAll('section[id]'));
		const navLinks = Array.from(document.querySelectorAll('.navLink'));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('id');
						if (id && location.hash !== `#${id}`) {
							history.replaceState(null, '', `#${id}`);
							navLinks.forEach((link) => link.removeAttribute('aria-current'));
							navLinks
								.find((link) => link.getAttribute('href') === `#${id}`)
								?.setAttribute('aria-current', 'page');
						}
					}
				});
			},
			{
				threshold: lg.current ? 0.5 : 0.2 // when 50% (desktop) or 10% (mobile) of the target is visible
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
		};
	});
</script>

<nav class="flex w-2/3 flex-col gap-3 lg:w-auto lg:flex-row lg:gap-2">
	<NavLink title="Home" target="#home" />
	<NavLink title="About" target="#about" />
	<NavLink title="Skills" target="#skills" />
	<NavLink title="Works" target="#works" />
	<NavLink title="Contact" target="#contact" />
</nav>
