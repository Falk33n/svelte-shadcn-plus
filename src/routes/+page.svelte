<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
	import { Badge } from '../lib/components/ui/badge';
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
		<Badge variant="warning">Hello</Badge>
		<Badge variant="success">Hello</Badge>
		<Badge variant="info">Hello</Badge>
		<Badge variant="danger">Hello</Badge>
		<Badge variant="outline">Hello</Badge>
		<Badge variant="secondary">Hello</Badge>
		<Badge>Hello</Badge>
	</div>
</div>
