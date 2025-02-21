<script
	lang="ts"
	module
>
	import { getDropdownMenuContext } from '$components/ui/dropdown-menu';
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn, createPortal } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type DropdownMenuContentProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLDivElement>>
	> & {
		portalTarget?: HTMLElement;
		side?: 'top' | 'bottom' | 'left' | 'right';
		sideOffset?: number;
		align?: 'start' | 'end' | 'center';
		preventScroll?: boolean;
	};

	type Side = 'top' | 'bottom' | 'left' | 'right';
	type Align = 'start' | 'end' | 'center';

	const alignPosition = (
		top: number,
		left: number,
		rect: DOMRect,
		triggerRect: DOMRect,
		side: Side,
		sideOffset: number,
		align: Align,
	) => {
		if (side === 'bottom') {
			top = triggerRect.bottom + sideOffset;
		} else if (side === 'top') {
			top = triggerRect.top - rect.height - sideOffset;
		} else if (side === 'left') {
			left = triggerRect.left - rect.width - sideOffset;
		} else {
			left = triggerRect.right + sideOffset;
		}

		if (side === 'top' || side === 'bottom') {
			if (align === 'start') {
				left = triggerRect.right - rect.width;
			} else if (align === 'end') {
				left = triggerRect.left;
			} else {
				left = triggerRect.left + (triggerRect.width - rect.width) / 2;
			}
		} else {
			if (align === 'start') {
				top = triggerRect.bottom - rect.height;
			} else if (align === 'end') {
				top = triggerRect.top;
			} else {
				top = triggerRect.top + (triggerRect.height - rect.height) / 2;
			}
		}

		return { top, left };
	};

	const preventOverflow = (
		top: number,
		left: number,
		rect: DOMRect,
		triggerRect: DOMRect,
		sideOffset: number,
	) => {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		if (top + rect.height > viewportHeight) {
			top = triggerRect.top - rect.height - sideOffset;
		} else if (top < 0) {
			top = triggerRect.bottom + sideOffset;
		}

		if (left + rect.width > viewportWidth) {
			left = triggerRect.left - rect.width - sideOffset;
		} else if (left < 0) {
			left = triggerRect.right + sideOffset;
		}

		return { top, left };
	};

	const getNewPosition = (
		ref: HTMLElement,
		triggerRef: HTMLElement,
		side: Side,
		sideOffset: number,
		align: Align,
	) => {
		const triggerRect = triggerRef.getBoundingClientRect();
		const rect = ref.getBoundingClientRect();

		let top = 0;
		let left = 0;

		({ top, left } = alignPosition(
			top,
			left,
			rect,
			triggerRect,
			side,
			sideOffset,
			align,
		));

		({ top, left } = preventOverflow(top, left, rect, triggerRect, sideOffset));

		return `top: ${top}px; left: ${left}px;`;
	};
</script>

<script lang="ts">
	const { open, dir, uniqueId } = getDropdownMenuContext();

	let {
		ref = $bindable(null),
		dir: initialDir = dir,
		class: className,
		portalTarget,
		side = 'bottom',
		sideOffset = 10,
		align = 'center',
		preventScroll = true,
		children,
		...restProps
	}: DropdownMenuContentProps = $props();

	let contentStyles = $state('');

	$effect(() => {
		const triggerRef = document.getElementById(
			`dropdown-menu-trigger-${uniqueId}`,
		) as HTMLElement | null;

		if (!ref || !triggerRef) return;

		const portal = createPortal(ref, portalTarget);
		contentStyles = getNewPosition(ref, triggerRef, side, sideOffset, align);

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
		dir={initialDir}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
