<script>
	/** @typedef {import('svelte/elements').HTMLAttributes<HTMLAnchorElement>} AnchorAttributes */

	/** @type { AnchorAttributes &{
	 * href: string,
	 * target?: '_blank' | '_self' | '_parent' | '_top',
	 * rel?: string,
	 * children: () => any,
	 * class?: string,
	 * }} */

	let {
		href = '',
		target = '_blank',
		rel = 'noopener noreferrer',
		children,
		class: className,
		...others
	} = $props();
</script>

<a
	{href}
	{target}
	{rel}
	class={['group inline-flex items-center align-middle', className]}
	{...others}
>
	{@render children?.()}
</a>
