import { type ClassValue, clsx } from 'clsx';
import { getContext, hasContext, setContext } from 'svelte';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getOrSetContext = <T>(key: string, props?: T): T => {
	if (props !== undefined) {
		return setContext<T>(key, props);
	}

	if (hasContext(key)) {
		return getContext<T>(key);
	}

	throw new ReferenceError(
		`Context with the key "${key}" was not found. Ensure the component is inside the correct provider.`,
	);
};

export const createPortal = (
	node: HTMLElement,
	target: HTMLElement = document.body.querySelector('div') ?? document.body,
) => {
	target.appendChild(node);

	return {
		destroy() {
			if (node && node.parentNode === target) {
				target.removeChild(node);
			}
		},
	};
};