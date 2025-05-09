<script>
	/** @type  {{
	 * color?: 'neutralLight' | 'neutralDark' | 'blue' | 'brown'
	 * children?: any,
	 * class?: string,
	 * }}  */

	let { color = 'neutralLight', children, ...restProps } = $props();

	const colorVariants = {
		neutralLight: 'text-white bg-white/10',
		neutralDark: 'text-neutral-black bg-neutral-black/10 ',
		blue: 'text-brand-blue bg-brand-blue/5',
		brown: 'text-brand-brown bg-brand-brown/5'
	};
</script>

<span
	class={[
		'text-md inline-flex h-fit w-fit shrink-0 items-center justify-center rounded-3xl px-4 py-3 font-medium backdrop-blur-2xl select-none lg:p-4 lg:text-lg',
		colorVariants[color],
		restProps.class
	]}
>
	{@render children()}
</span>
