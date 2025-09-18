let isBurgerMenuOpen = $state(false);

export function getIsBurgerMenuOpen(){
	return isBurgerMenuOpen;
}

export function toggleBurgerMenu(){
	isBurgerMenuOpen = !isBurgerMenuOpen;
}