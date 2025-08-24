import { writable } from 'svelte/store';

// TODOL: refactor to runes
export const isBurgerMenuOpen = writable(false);

export function toggleBurgerMenu() {
	isBurgerMenuOpen.update((value) => !value);
}
