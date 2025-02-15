export type Mode = 'system' | 'light' | 'dark';
export type ModeWatcherProps = {
	defaultMode?: Mode;
};

export { mode } from './mode-watcher.svelte';

export { default as ModeWatcher } from './ModeWatcher.svelte';
