<script>
	import SocialLinks from '$lib/components/molecules/SocialLinks.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
</script>

<footer class="bg-neutral-black">
	<div
		class="mx-auto flex max-w-[1288px] flex-col items-center justify-between gap-20 pt-16 pb-12 lg:flex-row lg:px-8"
	>
		<Text color="light" weight="semibold">Contact me on my socials:</Text>
		<SocialLinks />
		<Link class="text-[#94979C] h-11 cursor-pointer relative hover:text-[#9A9AEB] transition-colors duration-1500" href="https://github.com/viktoriabakun" aria-label="Developed by snoopi. Github link">
				Developed by
				<img class="size-4.5 ml-3" src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="">
				<span class="underline underline-offset-2 ml-1">snoopi</span>
		</Link>
	</div>
</footer>
