<script>
	import Logo from '$lib/components/atoms/Logo.svelte';
	import SocialLinks from '$lib/components/molecules/SocialLinks.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
</script>

<footer class="bg-neutral-black">
	<div
		class="mx-auto flex max-w-[1288px] flex-col items-center justify-between gap-20 pt-16 pb-12 lg:flex-row lg:px-8"
	>
		<Logo />
		<SocialLinks />
		<Text class="text-[#94979C]">Thank you for attention!</Text>
	</div>
</footer>
