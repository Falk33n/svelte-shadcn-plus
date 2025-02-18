<script lang="ts">
	import { buttonVariants, type ButtonProps } from '$components/ui/button';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		variant = 'default',
		size = 'default',
		class: className,
		children,
		href,
		target,
		rel,
		type,
		disabled,
		...restProps
	}: ButtonProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={ref}
	class={cn(buttonVariants({ variant, size, className: className as string }))}
	disabled={href ? undefined : disabled || false}
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
