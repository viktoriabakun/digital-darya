<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.config({ ignoreMobileResize: true });
		ScrollTrigger.defaults({ anticipatePin: 1, markers: true });


		console.log(ScrollTrigger.defaults());
		console.log(ScrollTrigger.config());
	});
</script>

<Header />
{@render children()}
<Footer />
