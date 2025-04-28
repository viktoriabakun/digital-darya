<script>
	import Navigation from '$lib/components/molecules/Navigation.svelte';
	import SocialLinks from '$lib/components/molecules/SocialLinks.svelte';

	let open = $state(false);

	function toggleBurgerMenu() {
		open = !open;
	}

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<div class="block lg:hidden">
	<button
		onclick={toggleBurgerMenu}
		class={['burger relative z-15', { open }]}
		type="button"
		aria-label="Toggle navigation menu"
	>
		<span class="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"
		></span>
		<span class="burger-top-line"></span>
		<span class="burger-middle-line"></span>
		<span class="burger-bottom-line"></span>
	</button>

	<div
		class={[
			'absolute top-0 right-0 z-5 origin-top-right transition-transform duration-300 ease-in-out',
			open ? 'scale-100' : 'scale-0'
		]}
	>
		<div
			aria-hidden="true"
			onclick={toggleBurgerMenu}
			class={['z-0 h-screen w-screen', open && 'blur-animation']}
		></div>
		<div
			class="bg-brand-blue absolute top-0 right-0 z-10 flex h-auto w-full flex-col gap-24 px-5 pt-24 pb-10 lg:p-0"
		>
			<Navigation />

			<SocialLinks />
		</div>
	</div>
</div>

<style>
	.burger {
		width: 20px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		z-index: 10;
	}

	.burger.open {
		.burger-top-line {
			transform: rotate(45deg) translate(4px, 4.5px);
		}

		.burger-middle-line {
			opacity: 0;
		}

		.burger-bottom-line {
			transform: rotate(-45deg) translate(4px, -4px);
		}
	}

	.burger-top-line,
	.burger-middle-line,
	.burger-bottom-line {
		display: inline-block;
		height: 2px;
		background-color: white;
		border-radius: 2px;
		transition:
			transform 200ms ease,
			opacity 200ms ease;
	}

	.burger-middle-line {
		width: 14px;
	}

	@keyframes blurredBg {
		from {
			backdrop-filter: blur(0px);
			-webkit-backdrop-filter: blur(0px);
		}
		to {
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
		}
	}

	.blur-animation {
		animation: blurredBg 400ms ease-in-out forwards;
		animation-delay: 100ms;
	}
</style>
