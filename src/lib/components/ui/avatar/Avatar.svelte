<script
	lang="ts"
	module
>
	import type { ImageStatus } from '$components/ui/avatar';
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import { getContext, hasContext, setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AvatarProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLElement>>
	>;

	type AvatarContextProps = {
		imageStatus: ImageStatus;
	};

	export const getAvatarContext = () => {
		if (!hasContext('avatar')) {
			throw new ReferenceError(
				'Avatar Context was not found. Ensure the component is inside the correct provider.',
			);
		}

		return getContext<AvatarContextProps>('avatar');
	};
</script>

<script lang="ts">
	let imageStatus = $state<ImageStatus>({
		value: 'loading',
	});

	setContext('avatar', { imageStatus });

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AvatarProps = $props();
</script>

<figure
	bind:this={ref}
	class={cn(
		'bg-secondary text-muted-foreground size-10 overflow-hidden rounded-full border font-medium uppercase',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</figure>
