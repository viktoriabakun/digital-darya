<script>
	import ArrowUpRight from '$lib/icons/ArrowUpRight.svelte';

	/** @type {{
	 * href: string,
	 * target?: '_blank' | '_self' | '_parent' | '_top',
	 * rel?: string,
	 * children?: any,
	 * class?: string,
	 * }} */

	let {
		href = '',
		target = '_blank',
		rel = 'noopener noreferrer',
		children = undefined,
		...restProps
	} = $props();
</script>

<a
	{href}
	{target}
	{rel}
	class={['group inline-flex items-center align-middle select-none', restProps.class]}
>
	{#if children}
		<span class="actionLink text-md w-fit px-8 font-medium">{@render children?.()}</span>
	{/if}
	<span class="actionLink">
		<ArrowUpRight />
	</span>
</a>
