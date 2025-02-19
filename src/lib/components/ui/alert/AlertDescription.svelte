<script lang="ts">
	import type { AlertContentProps } from '$components/ui/alert';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AlertContentProps = $props();
</script>

<p
	bind:this={ref}
	class={cn('leading-relaxed', className)}
	{...restProps}
>
	{@render children?.()}
</p>
