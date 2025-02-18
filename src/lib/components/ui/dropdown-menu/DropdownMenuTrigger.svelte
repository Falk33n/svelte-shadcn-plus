<script lang="ts">
	import { buttonVariants } from '$components/ui/button';
	import type {
		DropdownMenuContextProps,
		DropdownMenuTriggerProps,
	} from '$components/ui/dropdown-menu';
	import { cn, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		'aria-haspopup': ariaHasPopup,
		'aria-expanded': ariaExpanded,
		disabled,
		variant,
		size,
		type,
		onclick,
		children,
		child,
		...restProps
	}: DropdownMenuTriggerProps = $props();

	const { open, onOpenChange, uniqueId } =
		getOrSetContext<DropdownMenuContextProps>('dropdown-menu');

	type ClickEvent = MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	};

	const handleOpenChange = (event: ClickEvent) => {
		open.value = !open.value;
		onOpenChange?.(open.value);
		onclick?.(event);
	};
</script>

{#if child}
	{@render child({
		props: {
			'disabled': disabled !== undefined ? disabled : false,
			'id': `dropdown-menu-trigger-${uniqueId}`,
			'aria-expanded': ariaExpanded !== undefined ? ariaExpanded : open.value,
			'aria-haspopup': ariaHasPopup !== undefined ? ariaHasPopup : 'menu',
			'onclick': (event) => handleOpenChange(event),
			'class': cn(
				buttonVariants({ variant, size, className: className as string }),
			),
			ref,
			...restProps,
		},
	})}
{:else}
	<button
		bind:this={ref}
		class={cn(
			buttonVariants({ variant, size, className: className as string }),
		)}
		onclick={(event) => handleOpenChange(event)}
		aria-expanded={ariaExpanded !== undefined ? ariaExpanded : open.value}
		aria-haspopup={ariaHasPopup !== undefined ? ariaHasPopup : 'menu'}
		id={`dropdown-menu-trigger-${uniqueId}`}
		type={type !== undefined ? type : 'button'}
		disabled={disabled !== undefined ? disabled : false}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
