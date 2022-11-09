/* eslint-disable max-len */
import React, { Fragment, useEffect } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import { setUsers } from '../../store/reducers/users';
import { useDispatch } from 'react-redux';

export type DataFetcherProps = {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const DataFetcher: FC<DataFetcherProps> = ({ setIsLoading }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const init = async () => {
			try {
				const { data } = await axios.get('https://randomuser.me/api/?results=10');
				const { results } = data;

				dispatch(setUsers(results));
			}

			catch (e) {

				console.error({ e });

			}
			finally {
				setIsLoading(false);
			}

		};

		init();
	}, []);

	return <Fragment />;
};

export default DataFetcher;
