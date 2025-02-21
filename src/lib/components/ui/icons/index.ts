import type {
	WithClassAsString,
	WithElementRef,
	WithoutChildren,
} from '$types';
import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export { default as CircleAlertIcon } from './CircleAlertIcon.svelte';
export { default as InfoIcon } from './InfoIcon.svelte';
export { default as LoaderCircleIcon } from './LoaderCircleIcon.svelte';

export type IconProps = WithClassAsString<
	WithoutChildren<WithElementRef<SVGAttributes<SVGElement>, SVGSVGElement>>
>;

export type IconType = Component<IconProps, Record<string, unknown>, 'ref'>;

export type WithIcon<T> = T & { icon?: IconType };
export type WithoutIcon<T> = Omit<T, 'icon'>;
