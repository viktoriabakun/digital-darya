<script>
	import NavLink from '$lib/atoms/NavLink.svelte';
</script>

<nav class="flex h-10 w-full flex-col gap-2 sm:flex-row">
	<NavLink title="Home" target="#home" />
	<NavLink title="About" target="#about" />
	<NavLink title="Skills" target="#skills" />
	<NavLink title="Works" target="#works" />
	<NavLink title="Contact" target="#contact" />
</nav>
