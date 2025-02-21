<script
	lang="ts"
	module
>
	import type { WithIcon } from '$components/ui/icons';
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	export const alertVariants = tv({
		base: 'relative w-full bg-background rounded-lg border p-4 [&:has(svg)]:pl-12 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
		variants: {
			variant: {
				default: 'border-destructive text-destructive [&>svg]:text-destructive',
				info: 'text-foreground [&>svg]:text-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	});

	export type AlertProps = WithClassAsString<
		WithElementRef<WithIcon<HTMLAttributes<HTMLDivElement>>>
	> & {
		variant?: VariantProps<typeof alertVariants>['variant'];
	};
</script>

<script lang="ts">
	import { CircleAlertIcon, InfoIcon } from '$components/ui/icons';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'default',
		role = 'alert',
		icon: Icon = variant === 'info' ? InfoIcon : CircleAlertIcon,
		children,
		...restProps
	}: AlertProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(alertVariants({ variant, className }))}
	{role}
	{...restProps}
>
	<Icon class="size-5" />
	{@render children?.()}
</div>
