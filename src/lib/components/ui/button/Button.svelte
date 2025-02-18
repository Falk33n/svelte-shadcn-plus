<script lang="ts">
	import { buttonVariants, type RootProps } from '$components/ui/button';
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
		type,
		disabled,
		...restProps
	}: RootProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={ref}
	class={cn(buttonVariants({ variant, size, className: className as string }))}
	disabled={href !== undefined ? undefined : disabled || false}
	rel={href
		? rel || (target === '_blank' ? 'noopener noreferrer' : undefined)
		: undefined}
	type={href ? undefined : type || 'button'}
	{href}
	{target}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
