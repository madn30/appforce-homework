import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

render(
	<Provider store={store}>
		<PersistGate loading={<LoadingScreen />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);
