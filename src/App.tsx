import { useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	CustomCSSProperties,
	defaultArticleState,
} from './constants/articleProps';

import styles from './styles/index.module.scss';

const App = () => {
	const [articleStyle, setArticleStyle] = useState<CustomCSSProperties>({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});

	return (
		<div className={styles.main} style={articleStyle}>
			<ArticleParamsForm updateArticleStyle={setArticleStyle} />
			<main>
				<Article />
			</main>
		</div>
	);
};

export default App;
