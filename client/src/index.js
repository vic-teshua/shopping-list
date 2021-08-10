import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ListProvider } from './store/listContext';

ReactDOM.render(
	<React.StrictMode>
		<ListProvider>
			<App />
		</ListProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);