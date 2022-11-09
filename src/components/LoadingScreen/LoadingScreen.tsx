import React from 'react';
import type { FC } from 'react';
import {
	Box,
	LinearProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingScreen: FC = () => (
	<div >
		<Box width={400}>
			<Loading />
		</Box>
	</div>
);

export default LoadingScreen;

const Loading = styled(LinearProgress)(({ theme }) => ({
	alignItems: 'center',
	backgroundColor: theme.palette.background?.default,
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%',
	justifyContent: 'center',
	minHeight: '100%',
	padding: theme.spacing(3),
}
));
