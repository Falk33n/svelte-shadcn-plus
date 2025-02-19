<script lang="ts">
	import type { AlertTitleProps } from '$components/ui/alert';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		headingLevel,
		children,
		...restProps
	}: AlertTitleProps = $props();
</script>

<svelte:element
	this={headingLevel !== undefined ? headingLevel : 'h5'}
	bind:this={ref}
	class={cn('my-1 text-lg leading-none font-medium tracking-tight', className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
