import { hasContext } from 'svelte';
import { getMode } from './state.svelte';

export const updateMode = () => {
	if (!hasContext('mode-watcher')) {
		throw new ReferenceError('updateMode() was called outside of its context.');
	}

	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const currentMode = getMode();

	localStorage.setItem('mode-watcher-mode', currentMode);
	document.documentElement.classList.toggle(
		'dark',
		currentMode === 'system' ? mediaQuery.matches : currentMode === 'dark',
	);
};
