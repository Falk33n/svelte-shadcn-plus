<script lang="ts">
	import type {
		AvatarContextProps,
		AvatarImageProps,
	} from '$components/ui/avatar';
	import { LoaderCircleIcon } from '$components/ui/icons';
	import { Image } from '$components/ui/image';
	import { cn, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		loading,
		onerror,
		onload,
		...restProps
	}: AvatarImageProps = $props();

	const { imageStatus } = getOrSetContext<AvatarContextProps>('avatar');
</script>

{#if imageStatus.value !== 'error'}
	<Image
		bind:ref
		disableLoader
		class={cn('aspect-square', className)}
		loading={loading || 'lazy'}
		onload={(event) => {
			imageStatus.value = 'loaded';
			onload?.(event);
		}}
		onerror={(event) => {
			imageStatus.value = 'error';
			onerror?.(event);
		}}
		{...restProps}
	/>
{/if}
{#if imageStatus.value === 'loading'}
	<LoaderCircleIcon
		aria-busy
		aria-hidden={false}
		class="flex size-full scale-50 animate-spin items-center justify-center"
	/>
{/if}
