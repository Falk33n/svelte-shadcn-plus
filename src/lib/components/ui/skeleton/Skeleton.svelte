<script lang="ts">
	import type { SkeletonProps } from '$components/ui/skeleton';
	import { cn } from '$utils';

	let {
		children,
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden,
		...restProps
	}: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-muted animate-pulse rounded-md', className)}
	aria-hidden={ariaHidden || true}
	{...restProps}
>
	{@render children?.()}
</div>
