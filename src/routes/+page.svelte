<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '$components/ui/alert';
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
</script>

<div
	class="mx-auto flex min-h-screen w-[95vw] flex-col items-center justify-center gap-8"
>
	<div class="mb-10 flex items-center gap-2">
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
	</div>
</div>
