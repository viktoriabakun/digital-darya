<script>

	/**
	 * @type {{ title: string, target: string }}
	 */
	const { title, target } = $props();
	import { page } from "$app/state";
</script>

<a
	href={target}
	class="text-md text-white/40 items-center flex hover:text-white [&[aria-current='page']]:text-white/80 navLinkDot"
	aria-current={page.url.hash === target ? 'page': undefined}
>
	{title}
</a>
