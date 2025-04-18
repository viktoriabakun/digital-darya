<script>
	import Text from '$lib/typography/Text.svelte';
	import NavLink from '$lib/atoms/NavLink.svelte';
</script>

<Text>Hello World</Text>

	<nav class="fixed top-0 flex gap-2 w-full bg-black">
	<NavLink title="Home" target="#" />
	<NavLink title="About" target="#about" />
	<NavLink title="Skills" target="#skills" />
	<NavLink title="Works" target="#works" />
	<NavLink title="Contact" target="#contact" />
	</nav>

<div class="h-[200px] bg-pink-200">blabla</div>

<section id="about" class="target:bg-green-200">
	about lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit amet
</section>

<section id="skills" class="target:bg-green-300">
	skills lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit amet
</section>

<section id="works" class="target:bg-green-400">
	works lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit amet
</section>

<section id="contact" class="target:bg-green-500">
	contact lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit ametabout lorem ipsum dolor sit amet
</section>