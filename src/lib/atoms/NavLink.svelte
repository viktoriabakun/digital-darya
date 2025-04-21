<script>
	/**
	 * @type {{ title: string, target: string }}
	 */
	const { title, target } = $props();
	import { page } from '$app/state';
</script>

<a
	href={target}
	class="navLinkDot text-md flex items-center py-2 pr-3 pl-[30px] text-white/40 transition-colors duration-400 hover:text-white [&[aria-current='page']]:text-white/80"
	aria-current={page.url.hash === target ? 'page' : undefined}
>
	{title}
</a>
