<script lang="ts">
	import { type RootProps, badgeVariants } from '$components/ui/badge';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		variant = 'default',
		class: className,
		children,
		href,
		target,
		rel,
		...restProps
	}: RootProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	class={cn(badgeVariants({ variant, className: className as string }))}
	rel={href
		? rel || (target === '_blank' ? 'noopener noreferrer' : undefined)
		: undefined}
	{href}
	{target}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
