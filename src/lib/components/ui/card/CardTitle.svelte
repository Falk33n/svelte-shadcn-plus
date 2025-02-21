<script
	lang="ts"
	module
>
	import type { HeadingLevel, WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type CardTitleProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLHeadingElement>>
	> & { headingLevel?: HeadingLevel };
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		headingLevel = 'h3',
		children,
		...restProps
	}: CardTitleProps = $props();
</script>

<svelte:element
	this={headingLevel}
	bind:this={ref}
	class={cn('text-lg leading-none font-semibold tracking-tight', className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
