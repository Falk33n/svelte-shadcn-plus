<script lang="ts">
	import type { AspectRatioProps } from '$components/ui/aspect-ratio';
	import { cn } from '$utils';

	let {
		children,
		ref = $bindable(null),
		class: className,
		ratio = 1,
		...restProps
	}: AspectRatioProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('relative', className)}
	style={`padding-bottom: ${ratio ? 100 / ratio : 0}%;`}
	{...restProps}
>
	{@render children?.()}
</div>
