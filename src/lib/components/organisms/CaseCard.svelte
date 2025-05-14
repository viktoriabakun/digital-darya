<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import { lg } from '$lib/utils/media-query.svelte';

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
		'max-container grid h-[80svh] w-full grid-cols-1 grid-rows-[30%_70%] overflow-hidden rounded-[var(--rounded-brand)] sm:h-auto sm:max-h-[660px] sm:min-h-[660px] sm:grid-cols-[_minmax(200px,_660px)_minmax(_400px,_1fr)] sm:grid-rows-1 md:grid-cols-[_minmax(300px,_660px)_minmax(_400px,_1fr)] lg:grid-cols-[_minmax(300px,_660px)_minmax(_500px,_1fr)]',
		themeVariants[theme].container
	]}
>
	<img src={imgSrc} alt={title} class="aspect-[342/250] h-full w-full object-cover object-center" />

	<div class="flex flex-col gap-5 p-5 md:p-10 lg:p-[60px]">
		<Tag class="[@media(height<=670px)]:hidden" color={themeVariants[theme].tag}>{tagText}</Tag>

		<h3 class="max-w-lg text-xl leading-8 tracking-[0.8px] sm:text-2xl lg:text-4xl lg:leading-11">
			{title}
		</h3>
		<Text
			class="max-w-lg tracking-[0.6px] [@media(height<=670px)]:line-clamp-5"
			color={themeVariants[theme].text}
			size={lg.current ? 'lg' : 'md'}
		>
			{description}
		</Text>

		<div class="mt-auto flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
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
