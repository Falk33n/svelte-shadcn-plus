type AlignPosition = {
	side: 'top' | 'bottom' | 'left' | 'right';
	sideOffset: number;
	align: 'start' | 'end' | 'center';
	top: number;
	left: number;
	triggerRect: DOMRect;
	rect: DOMRect;
};

const alignPosition = ({
	triggerRect,
	rect,
	side,
	top,
	left,
	sideOffset,
	align,
}: AlignPosition) => {
	if (side === 'bottom') {
		top = triggerRect.bottom + sideOffset;
	} else if (side === 'top') {
		top = triggerRect.top - rect.height - sideOffset;
	} else if (side === 'left') {
		left = triggerRect.left - rect.width - sideOffset;
	} else {
		left = triggerRect.right + sideOffset;
	}

	if (side === 'top' || side === 'bottom') {
		if (align === 'start') {
			left = triggerRect.right - rect.width;
		} else if (align === 'end') {
			left = triggerRect.left;
		} else {
			left = triggerRect.left + (triggerRect.width - rect.width) / 2;
		}
	} else {
		if (align === 'start') {
			top = triggerRect.bottom - rect.height;
		} else if (align === 'end') {
			top = triggerRect.top;
		} else {
			top = triggerRect.top + (triggerRect.height - rect.height) / 2;
		}
	}

	return { top, left };
};

type PreventOverflow = Omit<AlignPosition, 'align' | 'side'> & {
	viewportHeight: number;
	viewportWidth: number;
};

const preventOverflow = ({
	triggerRect,
	rect,
	top,
	left,
	sideOffset,
	viewportHeight,
	viewportWidth,
}: PreventOverflow) => {
	if (top + rect.height > viewportHeight) {
		top = triggerRect.top - rect.height - sideOffset;
	} else if (top < 0) {
		top = triggerRect.bottom + sideOffset;
	}

	if (left + rect.width > viewportWidth) {
		left = triggerRect.left - rect.width - sideOffset;
	} else if (left < 0) {
		left = triggerRect.right + sideOffset;
	}

	return { top, left };
};

type GetPosition = {
	ref: HTMLDivElement;
	triggerRef: HTMLButtonElement;
	side: 'top' | 'bottom' | 'left' | 'right';
	sideOffset: number;
	align: 'start' | 'end' | 'center';
};

export const getNewDropdownMenuContentPosition = ({
	ref,
	triggerRef,
	side,
	sideOffset,
	align,
}: GetPosition) => {
	const triggerRect = triggerRef.getBoundingClientRect();
	const rect = ref.getBoundingClientRect();
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	let top = 0;
	let left = 0;

	const alignedPosition = alignPosition({
		side,
		align,
		left,
		rect,
		sideOffset,
		top,
		triggerRect,
	});

	top = alignedPosition.top;
	left = alignedPosition.left;

	const modifiedPosition = preventOverflow({
		left,
		rect,
		sideOffset,
		top,
		triggerRect,
		viewportHeight,
		viewportWidth,
	});

	top = modifiedPosition.top;
	left = modifiedPosition.left;

	return `top: ${top}px; left: ${left}px;`;
};
