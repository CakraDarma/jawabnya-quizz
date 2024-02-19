import store from '@store/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <NextUIProvider> */}
			<App />
			{/* </NextUIProvider> */}
		</Provider>
	</React.StrictMode>
);
