<script
	lang="ts"
	module
>
	import { EllipsisIcon } from '$components/ui/icons';
	import type {
		WithClassAsString,
		WithElementRef,
		WithoutChildren,
	} from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbEllipsisProps = WithoutChildren<
		WithClassAsString<WithElementRef<HTMLAttributes<HTMLSpanElement>>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden = true,
		...restProps
	}: BreadcrumbEllipsisProps = $props();
</script>

<span
	bind:this={ref}
	class={cn('flex size-10 items-center justify-center', className)}
	aria-hidden={ariaHidden}
	{...restProps}
>
	<EllipsisIcon class="size-5" />
</span>
