<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';

	/** @typedef {import('svelte').Snippet<[]>} Snippet */

	/**
	 * @type {{
	 *   color?: 'dark' | 'light',
	 *   class?: string
	 *   children: Snippet
	 * }}
	 */

	let { color = 'dark', class: className = '', children } = $props();
</script>

<div class={['flex w-full items-end justify-between gap-x-2', className]}>
	<div class="flex flex-col gap-y-2.5">
		{@render children()}
		<Text {color} class="opacity-80">Learn more</Text>
	</div>
	<span class="action-link-light size-[56px]">
		<ArrowUpRightIcon />
	</span>
</div>
