<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
	import Alert from '../lib/components/ui/alert/Alert.svelte';
	import AlertDescription from '../lib/components/ui/alert/AlertDescription.svelte';
	import AlertTitle from '../lib/components/ui/alert/AlertTitle.svelte';
	import Avatar from '../lib/components/ui/avatar/Avatar.svelte';
	import AvatarFallback from '../lib/components/ui/avatar/AvatarFallback.svelte';
	import AvatarImage from '../lib/components/ui/avatar/AvatarImage.svelte';
</script>

<div
	class="mx-auto flex min-h-screen w-[95vw] flex-col items-center justify-center gap-8"
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

	<div class="flex items-center gap-2">
		<Avatar>
			<AvatarImage
				src="https://placehold.co/400"
				alt="he"
			/>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	</div>
</div>
