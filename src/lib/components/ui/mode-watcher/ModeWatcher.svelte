<script
	lang="ts"
	module
>
	import { getMode, setMode } from '$components/ui/mode-watcher';
	import { setContext } from 'svelte';

	export type Mode = 'system' | 'light' | 'dark';
	export type ModeWatcherProps = {
		defaultMode?: Mode;
	};

	const updateMode = () => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const currentMode = getMode();

		localStorage.setItem('mode-watcher-mode', currentMode);
		document.documentElement.classList.toggle(
			'dark',
			currentMode === 'system' ? mediaQuery.matches : currentMode === 'dark',
		);
	};
</script>

<script lang="ts">
	setContext('mode-watcher', null);

	let { defaultMode }: ModeWatcherProps = $props();

	let hasMounted = false;

	$effect(() => {
		if (!hasMounted) {
			setMode(
				defaultMode ||
					(localStorage.getItem('mode-watcher-mode') as Mode) ||
					'system',
			);

			hasMounted = true;
		}

		updateMode();
	});
</script>

<svelte:head>
	<script>
		const storedMode = localStorage.getItem('mode-watcher-mode');
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		document.documentElement.classList.toggle(
			'dark',
			storedMode ? storedMode === 'dark' : mediaQuery.matches,
		);
	</script>
</svelte:head>
