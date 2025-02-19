<script lang="ts">
	import type { ImageProps, ImageStatus } from '$components/ui/image';
	import { Skeleton } from '$components/ui/skeleton';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		disableLoader,
		loading,
		onerror,
		onload,
		...restProps
	}: ImageProps = $props();

	let imageStatus = $state<ImageStatus>('loading');
</script>

{#if imageStatus !== 'error'}
	<img
		bind:this={ref}
		class={cn(imageStatus === 'loading' ? 'sr-only' : 'size-full', className)}
		loading={loading || 'lazy'}
		onload={(event) => {
			imageStatus = 'loaded';
			onload?.(event);
		}}
		onerror={(event) => {
			imageStatus = 'error';
			onerror?.(event);
		}}
		{...restProps}
	/>
{/if}
{#if !disableLoader && imageStatus === 'loading'}
	<Skeleton
		aria-busy
		aria-hidden={false}
		class="size-full"
	/>
{/if}
