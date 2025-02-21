<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
	import type { VariantProps } from 'tailwind-variants';
	import { tv } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'focus-visible:ring-ring inline-flex select-none items-center rounded-full focus-visible:ring-offset-background duration-200 px-2.5 py-0.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/85',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/85',
				outline: 'text-foreground border',
			},
			size: {
				default: 'text-base',
				sm: 'text-sm',
				xs: 'text-xs',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	});

	type AnchorElement = HTMLAnchorAttributes;
	type SpanElement = HTMLAttributes<HTMLSpanElement> & {
		href?: never;
		rel?: never;
		target?: never;
	};

	export type BadgeProps = (AnchorElement | SpanElement) &
		WithClassAsString<
			WithElementRef<{
				variant?: VariantProps<typeof badgeVariants>['variant'];
				size?: VariantProps<typeof badgeVariants>['size'];
			}>
		>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		href,
		target,
		rel = href && target === '_blank' ? 'noopener noreferrer' : undefined,
		variant = 'default',
		size = 'default',
		...restProps
	}: BadgeProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	class={cn(badgeVariants({ variant, size, className }))}
	{rel}
	{href}
	{target}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
