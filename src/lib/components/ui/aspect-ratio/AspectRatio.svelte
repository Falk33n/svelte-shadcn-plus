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
	class={className ? cn(className) : undefined}
	style={ratio !== undefined
		? `position: relative; padding-bottom: ${100 / ratio}%;`
		: undefined}
	{...restProps}
>
	{@render children?.()}
</div>
