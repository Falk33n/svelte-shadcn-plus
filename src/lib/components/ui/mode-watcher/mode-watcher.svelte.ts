import type { Mode } from '$components/ui/mode-watcher';

export const mode = $state<{ current: Mode }>({
	current: 'system',
});
