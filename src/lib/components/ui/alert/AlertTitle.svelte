<script
	lang="ts"
	module
>
	import type { HeadingLevel, WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AlertTitleProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLHeadingElement>>
	> & { headingLevel?: HeadingLevel };
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		headingLevel = 'h5',
		children,
		...restProps
	}: AlertTitleProps = $props();
</script>

<svelte:element
	this={headingLevel}
	bind:this={ref}
	class={cn('my-1 text-lg leading-none font-medium tracking-tight', className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
