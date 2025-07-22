<script>
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import MinusIcon from '$lib/components/icons/MinusIcon.svelte';
	import { slide } from 'svelte/transition';

	/** @typedef {import('svelte').Snippet<[]>} Snippet */

	/**
	 * @type {{
	 *   header: Snippet,
	 *   content: Snippet
	 *   footer?: Snippet
	 * }}
	 */

	let { header, content, footer } = $props();

	let open = $state(false);

	function toggle() {
		open = !open;
	}
</script>

<div>
	<button
		class="flex w-full items-start justify-between"
		onclick={toggle}
		type="button"
		aria-expanded={open}
	>
		{@render header()}

		<span class="flex size-6 shrink-0 items-center justify-center">
			{#if open}
				<MinusIcon />
			{:else}
				<PlusIcon />
			{/if}
		</span>
	</button>

	{#if open}
		<div transition:slide>
			{@render content()}
		</div>
	{/if}

	{@render footer?.()}
</div>
