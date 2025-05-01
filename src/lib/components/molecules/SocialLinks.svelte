<script>
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import DribbleIcon from '$lib/components/icons/DribbleIcon.svelte';
	import TelegramIcon from '$lib/components/icons/TelegramIcon.svelte';
	import Link from '$lib/components/atoms/Link.svelte';

	let { class: className = '' } = $props();
</script>

<div class={['flex items-center gap-5', className]}>
	<Link href="https://example.com">
		<span class="action-link size-11 p-[11px]"><DribbleIcon /></span>
	</Link>
	<Link href="https://example.com">
		<span class="action-link size-11 pt-[11px] pr-[11px] pb-3 pl-3"><LinkedInIcon /></span>
	</Link>
	<Link href="https://example.com">
		<span class="action-link size-11 pt-[13px] pr-[13px] pb-3 pl-[9px]"><TelegramIcon /></span>
	</Link>
</div>
