import type { ImageProps, ImageStatus } from '$components/ui/image';
import type { WithElementRef } from '$types';
import type { HTMLAttributes } from 'svelte/elements';

export type AvatarContextProps = {
	imageStatus: { value: ImageStatus };
};

export type AvatarProps = WithElementRef<HTMLAttributes<HTMLElement>>;

export type AvatarImageProps = Omit<ImageProps, 'disableLoader'>;

export type AvatarFallbackProps = WithElementRef<
	HTMLAttributes<HTMLSpanElement>
>;
