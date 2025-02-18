<script lang="ts">
	import { Button } from '$components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuTrigger,
	} from '$components/ui/dropdown-menu';
	import { mode } from '$components/ui/mode-watcher';
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8"
>
	<div class="flex w-full items-center justify-center gap-4">
		<Button onclick={() => (mode.current = 'light')}>Change light</Button>
		<Button onclick={() => (mode.current = 'dark')}>Change dark</Button>
		<Button onclick={() => (mode.current = 'system')}>Change system</Button>
		<Button onclick={() => console.log(mode.current)}>See current mode</Button>
	</div>
	<div class="flex w-full items-center justify-center gap-4">
		<DropdownMenu>
			<DropdownMenuTrigger>Hello</DropdownMenuTrigger>
			<DropdownMenuContent sideOffset={20}>
				Im the content please dont hit the wall
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</div>
