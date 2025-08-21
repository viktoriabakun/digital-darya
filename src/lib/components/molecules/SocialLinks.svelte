<script>
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import DribbleIcon from '$lib/components/icons/DribbleIcon.svelte';
	import TelegramIcon from '$lib/components/icons/TelegramIcon.svelte';
	import Link from '$lib/components/atoms/Link.svelte';

	let { class: className = '' } = $props();
</script>

<div class={['flex items-center gap-5', className]}>
	<Link href="https://dribbble.com/iamdaria">
		<span class="action-link-light size-11 p-[11px]"><DribbleIcon /></span>
	</Link>
	<Link href="https://www.linkedin.com/in/darya-shamko">
		<span class="action-link-light size-11 pt-[11px] pr-[11px] pb-3 pl-3"><LinkedInIcon /></span>
	</Link>
	<Link href="https://t.me/i_am_dashaa">
		<span class="action-link-light size-11 pt-[13px] pr-[13px] pb-3 pl-[9px]"><TelegramIcon /></span
		>
	</Link>
</div>
