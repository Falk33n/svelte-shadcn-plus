import type { WithElementRef, WithoutChildren } from '$types';
import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type IconProps = WithoutChildren<
	WithElementRef<SVGAttributes<SVGElement>, SVGSVGElement>
>;

export type IconType = Component<IconProps, Record<string, unknown>, 'ref'>;

export type WithIcon<T> = T & { icon?: IconType };
export type WithoutIcon<T> = Omit<T, 'icon'>;
