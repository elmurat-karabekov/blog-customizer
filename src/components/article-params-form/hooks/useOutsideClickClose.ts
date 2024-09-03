import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	menuRef: React.RefObject<HTMLElement | null>;
	arrowButtonRef: React.RefObject<HTMLElement | null>;
};

export const useOutsideClickClose = ({
	isOpen,
	menuRef,
	arrowButtonRef,
	setIsOpen,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			if (
				target instanceof Node &&
				!menuRef.current?.contains(target) &&
				!arrowButtonRef.current?.contains(target)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			window.addEventListener('click', handleClick);
			return () => window.removeEventListener('click', handleClick);
		}
	}, [isOpen, menuRef, arrowButtonRef, setIsOpen]);
};
