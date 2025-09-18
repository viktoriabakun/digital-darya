<script>
	/**
	 * @type {{ title: string, target: string }}
	 */
	const { title, target } = $props();
</script>

<a
	href={target}
	class={[
		'navLink text-md flex items-center px-3 py-2 text-white/40 transition-colors duration-400 hover:text-white',
		'before:mr-2 before:flex before:size-2 before:items-center before:rounded-full before:bg-transparent before:content-[""]',
	]}
>
	{title}
</a>
