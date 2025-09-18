<script>
	import NavLink from '$lib/components/atoms/NavLink.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

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

		let sections = gsap.utils.toArray("section").filter(s => sectionNames.includes(s.id));
		let	navLinks = gsap.utils.toArray("nav a");

		let active = sections[0];
		navLinks[0].classList.toggle("active-nav-link");

		// track current active section and set active nav link
		ScrollTrigger.create({
			start: 0,
			end: () => {
				const doc = document.documentElement;
				return doc.scrollHeight - window.innerHeight; // maxScroll
			},
			onUpdate: () => {
				const scrollY = window.scrollY;
				const center = scrollY + window.innerHeight / 2;

				for (const sec of sections) {
					const rect = sec.getBoundingClientRect();
					const top = rect.top + scrollY;
					const bottom = top + rect.height;
					if (center >= top && center < bottom) {
						active = sec;
						break;
					}
				}

				// fallback: if we're at the bottom, let the last section be active
				if (!active) {
					const doc = document.documentElement;
					const atBottom = Math.ceil(scrollY + window.innerHeight) >= doc.scrollHeight;
					if (atBottom) active = sections[sections.length - 1];
				}

				if (active) {
					const id = active.id;
					navLinks.forEach((a) => {
						a.classList.toggle("active-nav-link", a.getAttribute("href") === `#${id}`);
					});
				}
			},
			// this spy should refresh after all pinned animations in the project
			refreshPriority: -1,
		});

		ScrollTrigger.refresh();

		// links clicks
		navLinks.forEach((link, i) => {
			link.addEventListener("click", (event) => {
				// Prevent the default action
				event.preventDefault();
				let target = event.target;
				let hash = target.hash;

				gsap.to(window, {
					duration: 0,
					scrollTo: hash,
				});
			});
		});
	});
</script>

<nav class="flex w-2/3 flex-col gap-3 lg:w-auto lg:flex-row lg:gap-2">
	{#each navLinks as { title, target } (target)}
		<NavLink {title} {target}/>
	{/each}
</nav>
