<script lang="ts">
	import type {
		AvatarContextProps,
		AvatarFallbackProps,
	} from '$components/ui/avatar';
	import { cn, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AvatarFallbackProps = $props();

	const { imageStatus } = getOrSetContext<AvatarContextProps>('avatar');
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
