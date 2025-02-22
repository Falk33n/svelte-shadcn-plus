<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type CardContentProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLDivElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: CardContentProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('p-6', className)}
	{...restProps}
>
	{@render children?.()}
</div>
