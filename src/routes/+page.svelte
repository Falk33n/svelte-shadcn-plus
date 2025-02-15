<script lang="ts">
	import { Button } from '$components/ui/button';
	import { mode } from '$components/ui/mode-watcher';
</script>

<div class="flex min-h-screen w-full items-center justify-center gap-4">
	<Button onclick={() => (mode.current = 'light')}>Change light</Button>
	<Button onclick={() => (mode.current = 'dark')}>Change dark</Button>
	<Button onclick={() => (mode.current = 'system')}>Change system</Button>
	<Button onclick={() => console.log(mode.current)}>See current mode</Button>
	<Button variant="destructive">This is a button</Button>
	<Button variant="ghost">This is a button</Button>
	<Button variant="link">This is a button</Button>
	<Button variant="outline">This is a button</Button>
	<Button variant="secondary">This is a button</Button>
</div>
