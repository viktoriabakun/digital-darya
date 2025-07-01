<script>
	import FolderShape from '$lib/components/atoms/FolderShape.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import { lg } from '$lib/utils/media-query.svelte';

	/** @type {{
	 * tags: string[],
	 * title: string,
	 * icon?: string,
	 * color: 'dark' | 'light',
	 * size: 'md' | 'lg',
	 * class?: string
	 * }}
	 */
	let { tags, title, icon, size, color, class: className = '' } = $props();

	const colorVariants = {
		light: {
			tag: 'neutralDark',
			title: 'text-neutral-black'
		},
		dark: {
			tag: 'neutralLight',
			title: 'text-white'
		}
	};

	const sizeVariants = {
		md: 'lg:max-w-[403px] md:pr-22',
		lg: 'lg:max-w-[624px] md:pr-[127px]'
	};
</script>

<section
	class={[
		'relative flex flex-col justify-between gap-12 p-5 md:p-8',
		sizeVariants[size],
		className
	]}
>
	<ul class="relative z-10 flex flex-wrap gap-4">
		{#each tags as tag, i (tag + i)}
			<li class="first:w-full lg:first:w-auto">
				<Tag class="xl:!text-xl xl:text-nowrap" color={colorVariants[color].tag}>{tag}</Tag>
			</li>
		{/each}
	</ul>
	<div class="relative z-10 flex flex-nowrap items-center gap-4">
		{#if icon}
			<img
				src={icon}
				alt=""
				aria-hidden="true"
				class="flex size-[50px] items-center justify-center"
			/>
		{/if}
		<h3 class={['text-[30px] leading-[38px]', colorVariants[color].title]}>{title}</h3>
	</div>

	<div class="absolute inset-0 z-0 h-full w-full">
		<FolderShape size={lg.current ? size : 'md'} {color} />
	</div>
</section>
