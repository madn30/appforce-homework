import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Modal from 'components/Modal/Modal';
import UserForm from 'components/UserForm/UserForm';

const useStyles = makeStyles<any>(() => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: '30px auto',
	},
}));

const AddUser: FC = () => {
	const [addUserClicked, setAddUserClicked] = React.useState(false);
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Button onClick={() => setAddUserClicked(true)} variant="contained" startIcon={<AddIcon />}>Add One More</Button>
			{addUserClicked && <Modal children={<UserForm onClose={() => setAddUserClicked(false)} />} open={addUserClicked} onClose={() => setAddUserClicked(false)} />}
		</Box>
	);
};

export default AddUser;
