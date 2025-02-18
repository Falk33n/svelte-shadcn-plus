<script lang="ts">
	import {
		type DropdownMenuContentProps,
		type DropdownMenuContextProps,
		getNewDropdownMenuContentPosition,
	} from '$components/ui/dropdown-menu';
	import { cn, createPortal, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		portalTarget,
		side = 'bottom',
		sideOffset = 0,
		align = 'center',
		preventScroll = true,
		children,
		...restProps
	}: DropdownMenuContentProps = $props();

	const { open, dir, uniqueId } =
		getOrSetContext<DropdownMenuContextProps>('dropdown-menu');

	let contentStyles = $state('');

	$effect(() => {
		const triggerRef = document.getElementById(
			`dropdown-menu-trigger-${uniqueId}`,
		) as HTMLButtonElement | null;

		if (!ref || !triggerRef) return;

		const portal = createPortal(ref, portalTarget);
		contentStyles = getNewDropdownMenuContentPosition({
			ref,
			triggerRef,
			side,
			sideOffset,
			align,
		});

		return () => portal.destroy();
	});
</script>

{#if open.value}
	<div
		bind:this={ref}
		class={cn(
			'bg-popover text-popover-foreground fixed z-50 w-fit min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
			className,
		)}
		style={contentStyles}
		{dir}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
