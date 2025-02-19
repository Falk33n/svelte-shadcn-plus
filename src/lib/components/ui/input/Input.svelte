<script lang="ts">
	import type { InputProps } from '$components/ui/input';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: InputProps = $props();
</script>

<input
	bind:this={ref}
	class={cn(
		'border-input placeholder:text-muted-foreground focus-visible:ring-offset-background focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:font-medium focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
		className,
	)}
	{...restProps}
/>
