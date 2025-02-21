<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AspectRatioProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLDivElement>>
	> & {
		ratio?: number;
	};
</script>

<script lang="ts">
	let {
		children,
		ref = $bindable(null),
		class: className,
		ratio = 16 / 9,
		style,
		...restProps
	}: AspectRatioProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('relative', className)}
	style={`padding-bottom: ${100 / ratio}%; ${style}`}
	{...restProps}
>
	{@render children?.()}
</div>
