import React from 'react';
import type { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

type LoaderProps = {
	size?: string | number,
	margin?: number
};

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		height: '100%',
		margin: 'auto',
	},
	loader: {
		margin: 'auto',
	},
}));

const Loader: FC<LoaderProps> = ({ size, margin }) => {
	const classes = useStyles();

	return <div style={{ margin }} className={classes.container}><CircularProgress size={size} className={classes.loader} /></div>;
};

export default Loader;
