<script lang="ts">
	import {
		setMode,
		updateMode,
		type Mode,
		type ModeWatcherProps,
	} from '$components/ui/mode-watcher';
	import { setContext } from 'svelte';

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
