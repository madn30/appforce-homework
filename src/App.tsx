/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import React, { FC } from 'react';
import Dashboard from 'views/Dashboard/Dashboard';
import DataFetcher from './components/DataFetcher/DataFetcher';

const App: FC = () => {

	const [isLoading, setIsLoading] = React.useState(false);

	return (
		<>
			<DataFetcher setIsLoading={setIsLoading} />
			{isLoading ? <LoadingScreen /> : <Dashboard />}
		</>

	);
};

export default App;
