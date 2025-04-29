import { writable } from 'svelte/store';

export const isBurgerMenuOpen = writable(false);

export function toggleBurgerMenu() {
	isBurgerMenuOpen.update((value) => !value);
}
