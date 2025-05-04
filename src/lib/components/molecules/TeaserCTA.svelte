<script>
	import Text from '$lib/components/atoms/Text.svelte';
	import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte';

	/** @type {{
	 * title: string,
	 * color?: 'dark' | 'light',
	 * class?: string,
	 * }} */
	let { title, color = 'dark', class: className = '' } = $props();
</script>

<div class={['flex w-full justify-between gap-y-2', className]}>
	<div class="flex flex-col gap-y-2.5">
		<Text {color} size="lg" weight="bold">{title}</Text>
		<Text {color} class="opacity-80">Learn more</Text>
	</div>
	<div class="action-link">
		<ArrowUpRightIcon />
	</div>
</div>
