<script
	lang="ts"
	module
>
	import { getAvatarContext } from '$components/ui/avatar';
	import type { ImageProps } from '$components/ui/image';
	import { cn } from '$utils';
	import type { EventHandler } from 'svelte/elements';

	export type ImageStatus = { value: 'loading' | 'loaded' | 'error' };
	export type AvatarImageProps = Omit<ImageProps, 'disableLoader'>;

	type ImageEventHandler = EventHandler<Event, Element> | null | undefined;
	type ImageEventTarget = Event & {
		currentTarget: EventTarget & Element;
	};

	const handleImageEvents = (
		e: ImageEventTarget,
		imageStatus: ImageStatus,
		result: 'loaded' | 'error',
		onEvent: ImageEventHandler,
	) => {
		imageStatus.value = result;
		onEvent?.(e);
	};
</script>

<script lang="ts">
	import { LoaderCircleIcon } from '$components/ui/icons';
	import { Image } from '$components/ui/image';

	const { imageStatus } = getAvatarContext();

	let {
		ref = $bindable(null),
		'class': className,
		'aria-busy': ariaBusy = imageStatus.value === 'loading',
		onerror,
		onload,
		...restProps
	}: AvatarImageProps = $props();
</script>

{#if imageStatus.value !== 'error'}
	<Image
		bind:ref
		class={cn('aspect-square', className)}
		aria-busy={ariaBusy}
		onload={(e) => handleImageEvents(e, imageStatus, 'loaded', onload)}
		onerror={(e) => handleImageEvents(e, imageStatus, 'error', onerror)}
		{...restProps}
	/>
{/if}
{#if imageStatus.value === 'loading'}
	<LoaderCircleIcon
		class="flex size-full scale-50 animate-spin items-center justify-center"
	/>
{/if}
