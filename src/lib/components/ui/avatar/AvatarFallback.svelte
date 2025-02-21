<script
	lang="ts"
	module
>
	import { getAvatarContext } from '$components/ui/avatar';
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AvatarFallbackProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLSpanElement>>
	>;
</script>

<script lang="ts">
	const { imageStatus } = getAvatarContext();

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AvatarFallbackProps = $props();
</script>

{#if imageStatus.value === 'error'}
	<span
		bind:this={ref}
		class={cn('flex size-full items-center justify-center', className)}
		{...restProps}
	>
		{@render children?.()}
	</span>
{/if}
