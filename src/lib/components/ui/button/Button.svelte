<script lang="ts">
	import { buttonVariants, type ButtonProps } from '$components/ui/button';
	import { cn } from '$utils';
	import { LoaderCircleIcon } from '../../icons';

	let {
		ref = $bindable(null),
		isLoading = $bindable(false),
		'aria-busy': ariaBusy,
		'class': className,
		children,
		variant,
		size,
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
	disabled={href !== undefined ? undefined : disabled || false}
	rel={href
		? rel || (target === '_blank' ? 'noopener noreferrer' : undefined)
		: undefined}
	type={href ? undefined : type || 'button'}
	aria-busy={ariaBusy !== undefined ? ariaBusy : isLoading}
	{href}
	{target}
	{...restProps}
>
	{#if ariaBusy || isLoading}
		{#if size !== 'icon'}
			<span
				aria-hidden={true}
				class=""
			>
				{'Loading '}
			</span>
		{/if}
		<LoaderCircleIcon class="size-4 animate-spin" />
	{:else}
		{@render children?.()}
	{/if}
</svelte:element>
