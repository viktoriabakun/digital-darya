<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import { lg } from '$lib/utils/media-query.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	/** @typedef {import('svelte').Snippet<[]>} Snippet */

	/**
	 * @type {{
	 * imgSrc: string,
	 * tagText: string,
	 * title: string,
	 * description: string,
	 * linkText: string,
	 * href: string,
	 * footnote: string,
	 * theme: 'dark' | 'light',
	 * }}
	 */

	let { imgSrc, tagText, title, description, linkText, href, footnote, theme } = $props();

	const themeVariants = {
		light: {
			container: 'bg-white text-neutral-black',
			tag: 'neutralDark',
			link: 'action-link-dark',
			text: 'dark'
		},
		dark: {
			container: 'bg-neutral-light-black text-white',
			tag: 'neutralLight',
			link: 'action-link-light',
			text: 'light'
		}
	};
</script>

<div
	class={[
		'max-container grid w-full grid-cols-1 overflow-hidden rounded-[var(--rounded-brand)] md:grid-cols-[_minmax(100px,_660px)_minmax(_500px,_1fr)] xl:min-h-[660px]',
		themeVariants[theme].container
	]}
>
	<img src={imgSrc} alt={title} class="aspect-[342/250] object-cover object-center md:h-full" />

	<div class="flex flex-col gap-5 p-5 md:p-10 lg:p-[60px]">
		<Tag color={themeVariants[theme].tag}>{tagText}</Tag>

		<h3 class="max-w-lg text-2xl leading-8 tracking-[0.8spx] lg:text-4xl lg:leading-11">{title}</h3>
		<Text
			class="line-clamp-5 max-w-lg tracking-[0.6px]"
			color={themeVariants[theme].text}
			size={lg.current ? 'lg' : 'md'}>{description}</Text
		>

		<div class="flex grow flex-col gap-5 md:flex-row md:items-end md:justify-between">
			<Link {href}>
				<span class={['!px-8', themeVariants[theme].link]}>{linkText}</span>
				<span class={['size-[56px]', themeVariants[theme].link]}><ArrowUpRightIcon /></span>
			</Link>
			<Text size="xxs" class="whitespace-pre-line opacity-40" color={themeVariants[theme].text}>
				{footnote}
			</Text>
		</div>
	</div>
</div>
