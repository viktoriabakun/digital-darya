<script>
	/** @type  {{
	 * color?: 'neutral' | 'blue' | 'brown'
	 * children?: any,
	 * class?: string,
	 * }}  */

	let { color = 'neutral', children, ...restProps } = $props();

	const colorVariants = {
		neutral: 'text-white bg-white/5 ',
		blue: 'text-brand-blue bg-brand-blue/5',
		brown: 'text-brand-brown bg-brand-brown/5'
	};
</script>

<span
	class={[
		'inline-flex h-fit w-fit shrink-0 items-center justify-center rounded-3xl p-4 text-lg font-medium backdrop-blur-2xl select-none',
		colorVariants[color],
		restProps.class
	]}
>
	{@render children()}
</span>
