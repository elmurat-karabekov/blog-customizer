import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type TArrowButtonProps = {
	isFormOpen: boolean;
	onClick: OnClick;
};

export const ArrowButton = forwardRef<HTMLDivElement, TArrowButtonProps>(
	({ isFormOpen, onClick }: TArrowButtonProps, ref) => {
		return (
			/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
			<div
				role='button'
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={clsx(styles.container, isFormOpen && styles.container_open)}
				onClick={onClick}
				ref={ref}>
				<img
					src={arrow}
					alt='иконка стрелочки'
					className={clsx(styles.arrow, isFormOpen && styles.arrow_open)}
				/>
			</div>
		);
	}
);

ArrowButton.displayName = 'ArrowButtons';
