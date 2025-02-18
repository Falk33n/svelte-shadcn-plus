export { default as ModeWatcher, default as Root } from './ModeWatcher.svelte';
export { getMode, setMode } from './state.svelte';
export type {
	Mode,
	ModeWatcherProps,
	ModeWatcherProps as RootProps,
} from './types';
export { updateMode } from './utils';
