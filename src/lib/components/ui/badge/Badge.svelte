<script lang="ts">
	import { type BadgeProps, badgeVariants } from '$components/ui/badge';
	import { cn } from '$utils';

	let {
		children,
		href,
		target,
		rel = href
			? target === '_blank'
				? 'noopener noreferrer'
				: undefined
			: undefined,
		ref = $bindable(null),
		variant = 'default',
		class: className,
		...restProps
	}: BadgeProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	class={cn(badgeVariants({ variant, className }))}
	{href}
	{target}
	{rel}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
