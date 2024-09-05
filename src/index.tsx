import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './App';

import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
