<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';

	/** @typedef {import('svelte').Snippet<[]>} Snippet */

	/**
	 * @type {{
	 *   titleSlot: Snippet
	 *   color?: 'dark' | 'light',
	 *   class?: string
	 * }}
	 */

	let { titleSlot, color = 'dark', class: className = '' } = $props();
</script>

<div class={['flex w-full justify-between gap-x-2', className]}>
	<div class="flex flex-col gap-y-2.5">
		{@render titleSlot()}
		<Text {color} class="opacity-80">Learn more</Text>
	</div>
	<div>
		<ArrowUpRightIcon class="action-link" />
	</div>
</div>
