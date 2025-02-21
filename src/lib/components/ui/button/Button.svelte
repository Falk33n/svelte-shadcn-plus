<script
	lang="ts"
	module
>
	import { LoaderCircleIcon } from '$components/ui/icons';
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type {
		HTMLAnchorAttributes,
		HTMLButtonAttributes,
	} from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/85 active:scale-[99%]',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/60 active:scale-[99%]',
				outline:
					'border-input bg-background border shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[99%]',
				ghost:
					'bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[99%]',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/85 active:scale-[99%]',
				link: 'bg-background text-primary hover:underline-offset-2 hover:underline',
			},
			size: {
				default: 'h-9 px-4',
				sm: 'h-8 px-3.5 text-sm',
				lg: 'h-10 px-5',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	});

	type AnchorElement = HTMLAnchorAttributes & {
		type?: never;
		disabled?: never;
	};

	type ButtonElement = HTMLButtonAttributes & {
		href?: never;
		rel?: never;
		target?: never;
	};

	export type ButtonProps = (AnchorElement | ButtonElement) &
		WithClassAsString<
			WithElementRef<{
				variant?: VariantProps<typeof buttonVariants>['variant'];
				size?: VariantProps<typeof buttonVariants>['size'];
				isLoading?: boolean;
			}>
		>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		isLoading = $bindable(false),
		'aria-busy': ariaBusy = isLoading,
		'class': className,
		variant = 'default',
		size = 'default',
		href,
		target,
		rel = href && target === '_blank' ? 'noopener noreferrer' : undefined,
		type = href === undefined ? 'button' : undefined,
		disabled = href === undefined ? false : undefined,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={ref}
	class={cn(buttonVariants({ variant, size, className }))}
	aria-busy={isLoading || ariaBusy}
	{rel}
	{type}
	{disabled}
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
