<script lang="ts">
	import type { TitleProps } from '$components/ui/alert';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		'aria-level': ariaLevel,
		role,
		children,
		...restProps
	}: TitleProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'mt-1 mb-1 text-lg leading-none font-medium tracking-tight',
		className,
	)}
	aria-level={ariaLevel !== undefined ? ariaLevel : 5}
	role={role !== undefined ? role : 'heading'}
	{...restProps}
>
	{@render children?.()}
</div>
