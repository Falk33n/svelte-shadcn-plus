<script lang="ts">
	import '$app.css';
	import { ModeWatcher } from '$components/ui/mode-watcher';
	import { type LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ModeWatcher />

{@render children()}
