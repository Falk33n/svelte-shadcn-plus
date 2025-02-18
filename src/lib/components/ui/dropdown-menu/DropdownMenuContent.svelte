<script lang="ts">
	import {
		type ContentProps,
		type DropdownMenuContextProps,
		getNewDropdownMenuContentStyle,
	} from '$components/ui/dropdown-menu';
	import { cn, createPortal, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		portalTarget,
		side,
		sideOffset,
		align,
		preventScroll,
		children,
		...restProps
	}: ContentProps = $props();

	const { open, dir, uniqueId } =
		getOrSetContext<DropdownMenuContextProps>('dropdown-menu');

	let contentStyles = $state('');

	$effect(() => {
		const triggerRef = document.getElementById(
			`dropdown-menu-trigger-${uniqueId}`,
		) as HTMLButtonElement | null;

		if (!ref || !triggerRef) return;

		const portal = createPortal(ref, portalTarget);
		contentStyles = getNewDropdownMenuContentStyle({
			ref,
			triggerRef,
			side: side || 'bottom',
			sideOffset: sideOffset || 10,
			align: align || 'center',
		});

		return () => portal.destroy();
	});
</script>

{#if open.value}
	<div
		bind:this={ref}
		class={cn(
			'bg-secondary text-secondary-foreground fixed z-50 w-fit min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
			className,
		)}
		style={contentStyles}
		{dir}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
