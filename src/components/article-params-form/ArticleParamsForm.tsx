import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { FormEvent, useRef, useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	CustomCSSProperties,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';

type TArticleParamsForm = {
	updateArticleStyle: React.Dispatch<React.SetStateAction<CustomCSSProperties>>;
};

export const ArticleParamsForm = ({
	updateArticleStyle,
}: TArticleParamsForm) => {
	const menuRef = useRef<HTMLElement>(null);
	const arrowButtonRef = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useState(false);
	const [formFields, setFormFields] = useState({
		fontFamily: fontFamilyOptions[0],
		fontSize: fontSizeOptions[0],
		fontColor: fontColors[0],
		backgroundColor: backgroundColors[0],
		contentWidth: contentWidthArr[0],
	});

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	useOutsideClickClose({
		isOpen,
		menuRef,
		arrowButtonRef,
		setIsOpen,
	});

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		updateArticleStyle({
			'--font-family': formFields.fontFamily.value,
			'--font-size': formFields.fontSize.value,
			'--font-color': formFields.fontColor.value,
			'--container-width': formFields.contentWidth.value,
			'--bg-color': formFields.backgroundColor.value,
		});
	};

	const handleFormReset = () => {
		setFormFields((prevFormFields) => {
			const updatedFormFields = {
				...prevFormFields,
				fontFamily: fontFamilyOptions[0],
				fontSize: fontSizeOptions[0],
				fontColor: fontColors[0],
				backgroundColor: backgroundColors[0],
				contentWidth: contentWidthArr[0],
			};

			updateArticleStyle({
				'--font-family': updatedFormFields.fontFamily.value,
				'--font-size': updatedFormFields.fontSize.value,
				'--font-color': updatedFormFields.fontColor.value,
				'--container-width': updatedFormFields.contentWidth.value,
				'--bg-color': updatedFormFields.backgroundColor.value,
			});

			return updatedFormFields;
		});
	};

	const handleFormFieldChange = (
		option: OptionType,
		field: keyof typeof formFields
	) => {
		setFormFields((prev) => ({
			...prev,
			[field]: option,
		}));
	};

	return (
		<>
			<ArrowButton
				ref={arrowButtonRef}
				isFormOpen={isOpen}
				onClick={toggleOpen}
			/>
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}
				ref={menuRef}>
				<form
					className={styles.form}
					onSubmit={handleFormSubmit}
					onReset={handleFormReset}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formFields.fontFamily}
						options={fontFamilyOptions}
						onChange={(option: OptionType) =>
							handleFormFieldChange(option, 'fontFamily')
						}
					/>
					<RadioGroup
						title='рАЗМЕР шрифта'
						selected={formFields.fontSize}
						options={fontSizeOptions}
						name='font-size_'
						onChange={(option: OptionType) =>
							handleFormFieldChange(option, 'fontSize')
						}
					/>
					<Select
						title='Цвет шрифта'
						selected={formFields.fontColor}
						options={fontColors}
						onChange={(option: OptionType) =>
							handleFormFieldChange(option, 'fontColor')
						}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={formFields.backgroundColor}
						options={backgroundColors}
						onChange={(option: OptionType) =>
							handleFormFieldChange(option, 'backgroundColor')
						}
					/>
					<Select
						title='Цвет фона'
						selected={formFields.contentWidth}
						options={contentWidthArr}
						onChange={(option: OptionType) =>
							handleFormFieldChange(option, 'contentWidth')
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
