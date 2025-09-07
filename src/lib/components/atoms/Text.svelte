<script>
	import { cn } from '$lib/utils/cn.js';

	/** @typedef {import('svelte/elements').HTMLAttributes<HTMLElement>} BaseHTMLAttributes */
	/** @typedef {'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'blockquote' | 'code' | 'mark' | 'time'} TextHtmlElement */

	/** @type {BaseHTMLAttributes & {
	 * tag?: TextHtmlElement | string,
	 * color?: 'dark' | 'light',
	 * size?: 'display-2xl' | 'display-md' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs',
	 * weight?: 'regular' | 'medium' | 'semibold' | 'bold',
	 * children: () => any,
	 * class?: string,
	 * }} */

	let {
		tag = 'p',
		color = 'dark',
		size = 'md',
		weight = 'regular',
		children,
		class: className,
		...others
	} = $props();

	const sizeClasses = {
		'display-2xl': 'text-[72px] leading-[90px]',
		'display-md': 'text-[30px] leading-[38px] lg:text-[36px] lg:leading-[44px]',
		xl: 'text-[20px] leading-[30px]',
		lg: 'text-[18px] leading-7',
		md: 'text-[16px] leading-6',
		sm: 'text-[14px] leading-5 ',
		xs: 'text-[12px] leading-4',
		xxs: 'text-[8px] leading-3'
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
	class={cn(sizeClasses[size], weightClasses[weight], colorClasses[color], className)}
	{...others}
>
	{@render children()}
</svelte:element>
