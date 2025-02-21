<script
	lang="ts"
	module
>
	import { buttonVariants, type ButtonProps } from '$components/ui/button';
	import { getDropdownMenuContext } from '$components/ui/dropdown-menu';
	import type { WithChild, WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type {
		HTMLButtonAttributes,
		MouseEventHandler,
	} from 'svelte/elements';

	type DropdownMenuTriggerChildProps = WithElementRef<HTMLButtonAttributes>;

	export type DropdownMenuTriggerProps = WithClassAsString<
		WithElementRef<
			WithChild<HTMLButtonAttributes, DropdownMenuTriggerChildProps>
		>
	> & {
		variant?: ButtonProps['variant'];
		size?: ButtonProps['size'];
	};

	type OpenChangeEvent = MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	};

	type ClickEventFunction =
		| MouseEventHandler<HTMLButtonElement>
		| null
		| undefined;

	const handleOpenChange = (
		e: OpenChangeEvent,
		open: { value: boolean },
		onOpenChange?: (open: boolean) => void,
		onclick?: ClickEventFunction,
	) => {
		open.value = !open.value;
		onOpenChange?.(open.value);
		onclick?.(e);
	};
</script>

<script lang="ts">
	const { open, onOpenChange, uniqueId } = getDropdownMenuContext();

	let {
		ref = $bindable(null),
		'class': className,
		'aria-haspopup': ariaHasPopup = 'menu',
		'aria-expanded': ariaExpanded = open.value,
		id = `dropdown-menu-trigger-${uniqueId}`,
		disabled = false,
		variant = 'default',
		size = 'default',
		type = 'button',
		onclick,
		children,
		child,
		...restProps
	}: DropdownMenuTriggerProps = $props();
</script>

{#if child}
	{@render child({
		props: {
			ref,
			disabled,
			id,
			'aria-expanded': ariaExpanded,
			'aria-haspopup': ariaHasPopup,
			'onclick': (e) => handleOpenChange(e, open, onOpenChange, onclick),
			'class': cn(buttonVariants({ variant, size, className })),
			...restProps,
		},
	})}
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		onclick={(e) => handleOpenChange(e, open, onOpenChange, onclick)}
		aria-expanded={ariaExpanded}
		aria-haspopup={ariaHasPopup}
		{id}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
