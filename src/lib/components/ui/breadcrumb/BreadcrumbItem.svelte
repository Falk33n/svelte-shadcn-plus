<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbItemProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLLIElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: BreadcrumbItemProps = $props();
</script>

<li
	bind:this={ref}
	class={cn('inline-flex items-center gap-1.5', className)}
	{...restProps}
>
	{@render children?.()}
</li>
