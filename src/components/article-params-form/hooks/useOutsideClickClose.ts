import { useEffect } from 'react';

type UseOutsideClickClose = {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
	menuRef: React.RefObject<HTMLElement | null>;
	arrowButtonRef: React.RefObject<HTMLElement | null>;
};

export const useOutsideClickClose = ({
	isMenuOpen,
	menuRef,
	arrowButtonRef,
	setIsMenuOpen,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			if (
				target instanceof Node &&
				!menuRef.current?.contains(target) &&
				!arrowButtonRef.current?.contains(target)
			) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			window.addEventListener('mousedown', handleClick);
			return () => window.removeEventListener('mousedown', handleClick);
		}
	}, [isMenuOpen, menuRef, arrowButtonRef, setIsMenuOpen]);
};
