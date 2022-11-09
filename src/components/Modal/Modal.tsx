import React from 'react';
import type { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Modal as ModalMUI, ModalProps } from '@mui/material';

const useStyle = makeStyles(() => ({
	backDrop: {
		width: '100%',
		backgroundColor: 'rgba(255,255,255,.3) !important',
		backdropFilter: 'brightness(184%) saturate(50%) blur(1px) !important',
		height: '100%',
		outline: '0px  !important',

	},
	modalChild: {
		backgroundColor: 'red',
		outline: 'none',
		position: 'absolute',
		top: 60,
		bottom: 0,
		right: 0,
		transform: 'translate(-50%, -50%)',
		width: 'calc(100% - 250px)',
		height: '100%',
		padding: 20,
	},

}));

const Modal: FC<ModalProps> = (props) => {
	const { children, ...rest } = props;
	const classes = useStyle();

	return (
		<ModalMUI
			disableEnforceFocus
			className={classes.backDrop}
			{...rest}>
			<>
				{children}
			</>

		</ModalMUI>

	);
};

export default Modal;
