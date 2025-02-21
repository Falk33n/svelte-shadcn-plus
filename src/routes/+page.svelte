<script lang="ts">
	import { Button } from '$components/ui/button';
	import { getMode, setMode } from '$components/ui/mode-watcher';
	import Alert from '../lib/components/ui/alert/Alert.svelte';
	import AlertDescription from '../lib/components/ui/alert/AlertDescription.svelte';
	import AlertTitle from '../lib/components/ui/alert/AlertTitle.svelte';
	import Breadcrumb from '../lib/components/ui/breadcrumb/Breadcrumb.svelte';
	import BreadcrumbEllipsis from '../lib/components/ui/breadcrumb/BreadcrumbEllipsis.svelte';
	import BreadcrumbItem from '../lib/components/ui/breadcrumb/BreadcrumbItem.svelte';
	import BreadcrumbLink from '../lib/components/ui/breadcrumb/BreadcrumbLink.svelte';
	import BreadcrumbList from '../lib/components/ui/breadcrumb/BreadcrumbList.svelte';
	import BreadcrumbPage from '../lib/components/ui/breadcrumb/BreadcrumbPage.svelte';
	import BreadcrumbSeparator from '../lib/components/ui/breadcrumb/BreadcrumbSeparator.svelte';
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
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/sdsd">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbEllipsis />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/components">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	</div>
</div>
