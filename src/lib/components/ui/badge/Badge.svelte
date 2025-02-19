<script lang="ts">
	import { type RootProps, badgeVariants } from '$components/ui/badge';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant,
		size,
		href,
		target,
		rel,
		...restProps
	}: RootProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	class={cn(badgeVariants({ variant, size, className: className as string }))}
	rel={href
		? rel || (target === '_blank' ? 'noopener noreferrer' : undefined)
		: undefined}
	{href}
	{target}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
