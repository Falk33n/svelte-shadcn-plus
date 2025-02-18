<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
</script>

<div class="flex min-h-screen w-full items-center justify-center gap-4">
	<Button onclick={() => setMode('light')}>Change light</Button>
	<Button onclick={() => setMode('dark')}>Change dark</Button>
	<Button onclick={() => setMode('system')}>Change system</Button>
	<Button onclick={() => console.log(getMode())}>See current mode</Button>
	<Button variant="destructive">This is a button</Button>
	<Button variant="ghost">This is a button</Button>
	<Button variant="link">This is a button</Button>
	<Button variant="outline">This is a button</Button>
	<Button variant="secondary">This is a button</Button>
</div>
