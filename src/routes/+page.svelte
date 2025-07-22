<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Works from '$lib/components/sections/Works.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Reviews from '$lib/components/sections/Reviews.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
</script>

<Hero />
<About />
<Works />
<Skills />
<Reviews />
<Experience />

<style>
	section {
		border: 1px solid gray;
		padding: 40px 0;
	}
</style>
