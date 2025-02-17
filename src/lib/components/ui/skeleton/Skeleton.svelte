<script lang="ts">
	import type { SkeletonProps } from '$components/ui/skeleton';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-muted animate-pulse rounded-md', className)}
	{...restProps}
>
	{@render children?.()}
</div>
