<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbListProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLOListElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: BreadcrumbListProps = $props();
</script>

<ol
	bind:this={ref}
	class={cn(
		'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</ol>
