<script>
	/** @type {{
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
		...restProps
	} = $props();
</script>

<a {href} {target} {rel} class={['group inline-flex items-center align-middle', restProps.class]}>
	{@render children?.()}
</a>
