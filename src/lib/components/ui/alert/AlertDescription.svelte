<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AlertDescriptionProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLParagraphElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AlertDescriptionProps = $props();
</script>

<p
	bind:this={ref}
	class={cn('leading-relaxed', className)}
	{...restProps}
>
	{@render children?.()}
</p>
