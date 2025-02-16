<script lang="ts">
	import {
		mode,
		type Mode,
		type ModeWatcherProps,
	} from '$components/ui/mode-watcher';

	let { defaultMode }: ModeWatcherProps = $props();

	const setMode = () => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		localStorage.setItem('mode-watcher-mode', mode.current);

		if (mode.current === 'dark') {
			document.documentElement.classList.add('dark');
		} else if (mode.current === 'light') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.toggle('dark', mediaQuery.matches);
		}
	};

	let hasMounted = false;

	$effect(() => {
		if (!hasMounted) {
			mode.current = defaultMode
				? defaultMode
				: (localStorage.getItem('mode-watcher-mode') as Mode) || 'system';
			hasMounted = true;
		}

		setMode();
	});
</script>

<svelte:head>
	<script>
		const storedMode = localStorage.getItem('mode-watcher-mode');
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		if (storedMode === 'dark') {
			document.documentElement.classList.add('dark');
		} else if (storedMode === 'light') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.toggle('dark', mediaQuery.matches);
		}
	</script>
</svelte:head>
