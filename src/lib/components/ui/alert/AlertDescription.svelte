<script lang="ts">
	import type { ContentProps } from '$components/ui/alert';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: ContentProps = $props();
</script>

<p
	bind:this={ref}
	class={cn('leading-relaxed', className)}
	{...restProps}
>
	{@render children?.()}
</p>
