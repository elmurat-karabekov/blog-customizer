import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

// TODO: implement form handling (controlled components?? one handler for many fields??)
export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<ArrowButton isFormOpen={open} onClick={toggleOpen} />
			<aside className={clsx(styles.container, open && styles.container_open)}>
				<form className={styles.form}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={fontFamilyOptions[0]}
						options={fontFamilyOptions}
					/>
					<RadioGroup
						title='рАЗМЕР шрифта'
						selected={fontSizeOptions[0]}
						options={fontSizeOptions}
						name='font-size_'
					/>
					<Select
						title='Цвет шрифта'
						selected={fontColors[0]}
						options={fontColors}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={backgroundColors[0]}
						options={backgroundColors}
					/>
					<Select
						title='Цвет фона'
						selected={contentWidthArr[0]}
						options={contentWidthArr}
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
