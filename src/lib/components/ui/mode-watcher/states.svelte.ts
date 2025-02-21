import type { Mode } from '$components/ui/mode-watcher';

let mode = $state<Mode>('system');

export const getMode = () => mode;
export const setMode = (newMode: Mode) => {
	mode = newMode;
};
