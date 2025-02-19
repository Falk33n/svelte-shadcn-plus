<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
	import Alert from '../lib/components/ui/alert/Alert.svelte';
	import AlertDescription from '../lib/components/ui/alert/AlertDescription.svelte';
	import AlertTitle from '../lib/components/ui/alert/AlertTitle.svelte';
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8"
>
	<div class="flex items-center gap-2">
		<Button onclick={() => setMode('light')}>Change light</Button>
		<Button onclick={() => setMode('dark')}>Change dark</Button>
		<Button onclick={() => setMode('system')}>Change system</Button>
		<Button onclick={() => console.log(getMode())}>See current mode</Button>
	</div>
	<div class="flex items-center gap-2">
		<Alert>
			<AlertTitle>Hello</AlertTitle>
			<AlertDescription>You did something bad</AlertDescription>
		</Alert>

		<div class="text-muted-foreground p-6">Hello man what you do</div>
	</div>
</div>
