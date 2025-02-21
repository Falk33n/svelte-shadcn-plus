<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type CardFooterProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLDivElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: CardFooterProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex items-center p-6 pt-0', className)}
	{...restProps}
>
	{@render children?.()}
</div>
