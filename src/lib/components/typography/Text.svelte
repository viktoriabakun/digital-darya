<script>
	/** @typedef {'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'blockquote' | 'code' | 'mark' | 'time'} TextHtmlElement */

	/** @type {{
	 * tag?: TextHtmlElement | string,
	 * size?: 'display-2xl' | 'display-md' | 'xl' | 'lg' | 'md',
	 * color?: 'dark' | 'light',
	 * weight?: 'regular' | 'medium' | 'semibold' | 'bold',
	 * children: () => any,
	 * class?: string,
	 * }} */

	let {
		tag = 'p',
		size = 'md',
		color = 'dark',
		weight = 'regular',
		children,
		...restProps
	} = $props();

	const sizeClasses = {
		'display-2xl': 'text-[72px] leading-tight',
		'display-md': 'text-[36px] leading-snug',
		xl: 'text-[20px] leading-relaxed',
		lg: 'text-[18px] leading-relaxed',
		md: 'text-[16px] leading-relaxed'
	};

	const colorClasses = {
		dark: 'text-neutral-black',
		light: 'text-white'
	};

	const weightClasses = {
		regular: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};
</script>

<svelte:element
	this={tag}
	class={[sizeClasses[size], weightClasses[weight], colorClasses[color], restProps.class]}
>
	{@render children()}
</svelte:element>
