<script>
	import { md } from '$lib/utils/media-query.svelte.js';
	import Text from '$lib/components/atoms/Text.svelte';
</script>

<section
	class="max-container section-scroll-margin flex flex-col gap-10 px-4 py-[160px] lg:gap-[100px] lg:pt-[112px] lg:pb-[200px] 2xl:px-0"
>
	<h2 class="text-4xl leading-11 lg:text-7xl lg:leading-[1.25]">Client Thoughts in Action</h2>
	{#if md.current}
		<img src="/reviews-desktop.webp" loading="lazy" alt="clients reviews" />
	{:else}
		<img src="/reviews-mobile.webp" loading="lazy" alt="clients reviews" />
	{/if}
	<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20">
		<Text size="lg">
			I believe that great design starts with understanding. I always take the time to listen
			carefully to my clients, ensuring I truly hear their needs, goals, and challenges.
		</Text>
		<Text size="lg">
			I enjoy working both independently and as part of a team. I can take ownership of a project,
			plan and prioritize tasks efficiently, or help organize work within a team to ensure smooth
			collaboration.
		</Text>
	</div>
</section>
