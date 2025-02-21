<script
	lang="ts"
	module
>
	import type {
		WithClassAsString,
		WithElementRef,
		WithoutChildren,
	} from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SeparatorProps = WithClassAsString<
		WithElementRef<WithoutChildren<HTMLAttributes<HTMLHRElement>>>
	> & { orientation?: HTMLAttributes<HTMLHRElement>['aria-orientation'] };
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		orientation = 'horizontal',
		'aria-orientation': ariaOrientation = orientation,
		...restProps
	}: SeparatorProps = $props();
</script>

<hr
	bind:this={ref}
	class={cn(
		'bg-border my-4 shrink-0',
		orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
		className,
	)}
	aria-orientation={ariaOrientation || orientation}
	{...restProps}
/>
