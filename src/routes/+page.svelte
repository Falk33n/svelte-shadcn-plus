<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
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
		<div
			class="bg-secondary text-secondary-foreground rounded-md px-4 py-1.5 font-medium"
		>
			Secondary
		</div>
		<div
			class="bg-accent text-accent-foreground rounded-md px-4 py-1.5 font-medium"
		>
			Accent
		</div>
		<div
			class="bg-muted text-muted-foreground rounded-md px-4 py-1.5 font-medium"
		>
			Muted
		</div>
		<div
			class="bg-primary text-primary-foreground rounded-md px-4 py-1.5 font-medium"
		>
			Primary
		</div>
		<div
			class="bg-destructive text-destructive-foreground rounded-md px-4 py-1.5 font-medium"
		>
			Destructive
		</div>
		<div class="text-foreground rounded-md border px-4 py-1.5 font-medium">
			Border
		</div>
	</div>
</div>
