<script lang="ts">
	import { buttonVariants, type ButtonProps } from '$components/ui/button';
	import { cn } from 'tailwind-variants';

	let {
		children,
		href,
		target,
		rel = href
			? target === '_blank'
				? 'noopener noreferrer'
				: undefined
			: undefined,
		type = !href ? 'button' : undefined,
		disabled = !href ? false : undefined,
		ref = $bindable(null),
		variant = 'default',
		size = 'default',
		class: className,
		...restProps
	}: ButtonProps = $props();
</script>

<svelte:element
	this={!href ? 'button' : 'a'}
	bind:this={ref}
	class={cn(buttonVariants({ variant, size, className }))}
	{disabled}
	{type}
	{href}
	{target}
	{rel}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
