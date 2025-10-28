<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		ScrollTrigger.config({ ignoreMobileResize: true });
		ScrollTrigger.defaults({ anticipatePin: 1 });
		ScrollTrigger.normalizeScroll(true);

		let smoother = ScrollSmoother.create({
			content: '#smooth-content',
			smooth: 1.5,
			smoothTouch: 0.1
		});
	});
</script>

<div class="flex flex-col">
	<Header />
	<div id="smooth-content">
		{@render children()}
		<Footer />
	</div>
</div>
