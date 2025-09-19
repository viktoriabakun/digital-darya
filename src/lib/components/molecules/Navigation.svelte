<script lang="ts">
	import NavLink from '$lib/components/atoms/NavLink.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
	import { throttle } from '$lib/utils/throttle';

	const navLinks = [
		{ title: 'Home', target: '#home' },
		{ title: 'About', target: '#about' },
		{ title: 'Works', target: '#works' },
		{ title: 'Skills', target: '#skills' },
		{ title: 'Contact', target: '#contact' }
	];

	const sectionNames = navLinks.map(({title}) => title.toLowerCase());

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let sections = gsap.utils.toArray<HTMLElement>("section").filter(s => sectionNames.includes(s.id));
		let navLinks = gsap.utils.toArray<HTMLAnchorElement>("nav a");

		let active = sections[0];
		navLinks[0].classList.toggle("active-nav-link");

		const throttledUpdateActive = throttle(updateActive, 100);

		// track current active section and set active navLink
		function updateActive() {
			gsap.ticker.remove(throttledUpdateActive);
			const scrollY = window.scrollY;
			const center = scrollY + window.innerHeight / 2;
			let newActive: HTMLElement | null = null;

			for (const sec of sections) {
				const rect = sec.getBoundingClientRect();
				const top = rect.top + scrollY;
				const bottom = top + rect.height;
				if (center >= top && center < bottom) {
					newActive = sec;
					break;
				}
			}

			// fallback: if we're at the bottom, let the last section be active
			if (!newActive) {
				const doc = document.documentElement;
				const atBottom = Math.ceil(scrollY + window.innerHeight) >= doc.scrollHeight;
				if (atBottom) newActive = sections[sections.length - 1];
			}

			if (newActive && newActive !== active) {
				active = newActive;
				const id = active.id;
				navLinks.forEach((a) => {
					a.classList.toggle("active-nav-link", a.getAttribute("href") === `#${id}`);
				});
			}
		}

		ScrollTrigger.create({
			start: 0,
			end: () => {
				const doc = document.documentElement;
				return doc.scrollHeight - window.innerHeight; // maxScroll
			},
			onUpdate: () => {
				gsap.ticker.add(throttledUpdateActive);
			},
			refreshPriority: -1,
		});

		// scroll to section on link click
		navLinks.forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				const hash = link.getAttribute("href")!;
				gsap.to(window, { duration: 0, scrollTo: hash });
			});
		});

		ScrollTrigger.refresh();
	});

</script>

<nav class="flex w-2/3 flex-col gap-3 lg:w-auto lg:flex-row lg:gap-2">
	{#each navLinks as { title, target } (target)}
		<NavLink {title} {target}/>
	{/each}
</nav>
