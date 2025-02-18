<script lang="ts">
	import { buttonVariants } from '$components/ui/button';
	import type {
		DropdownMenuContextProps,
		DropdownMenuTriggerProps,
	} from '$components/ui/dropdown-menu';
	import { cn, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		disabled = false,
		variant = 'default',
		size = 'default',
		type = 'button',
		class: className,
		children,
		child,
		...restProps
	}: DropdownMenuTriggerProps = $props();

	const { open, onOpenChange, uniqueId } =
		getOrSetContext<DropdownMenuContextProps>('dropdown-menu');

	const handleOpenChange = () => {
		open.value = !open.value;
		onOpenChange?.(open.value);
	};
</script>

{#if child}
	{@render child({
		ref,
		disabled,
		'id': `dropdown-menu-trigger-${uniqueId}`,
		'aria-expanded': open.value,
		'onclick': handleOpenChange,
		'aria-haspopup': 'menu',
		'class': cn(buttonVariants({ variant, size, className })),
	})}
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		onclick={handleOpenChange}
		aria-expanded={open.value}
		aria-haspopup="menu"
		id={`dropdown-menu-trigger-${uniqueId}`}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
