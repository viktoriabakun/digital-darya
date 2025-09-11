<script>
	import { toggleBurgerMenu, getIsBurgerMenuOpen } from '$lib/stores/burger-menu.svelte';
</script>

<button
	onclick={toggleBurgerMenu}
	class={['burger', { open: getIsBurgerMenuOpen() }]}
	type="button"
	aria-label="Toggle navigation menu"
>
	<span class="absolute top-1/2 left-1/2 size-12 -translate-1/2 [@media(pointer:fine)]:hidden"
	></span>
	<span class="burger-top-line"></span>
	<span class="burger-middle-line"></span>
	<span class="burger-bottom-line"></span>
</button>

<style>
	.burger {
		position: relative;
		z-index: 15;
		width: 20px;
		display: flex;
		flex-direction: column;
		gap: 4px;
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
		width: 100%;
		opacity: 1;
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
</style>
