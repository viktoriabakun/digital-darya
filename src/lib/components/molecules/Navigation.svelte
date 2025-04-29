<script>
	import NavLink from '$lib/components/atoms/NavLink.svelte';
</script>

<nav class="flex w-2/3 flex-col gap-3 lg:w-auto lg:flex-row lg:gap-2">
	<NavLink title="Home" target="#home" />
	<NavLink title="About" target="#about" />
	<NavLink title="Skills" target="#skills" />
	<NavLink title="Works" target="#works" />
	<NavLink title="Contact" target="#contact" />
</nav>
