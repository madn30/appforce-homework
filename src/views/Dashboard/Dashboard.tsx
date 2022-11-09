import { Box } from '@mui/material';
import React, { FC } from 'react';
import AddUser from 'views/AddUser/AddUser';
import UsersTable from 'views/UsersTable/UsersTable';
import { makeStyles } from '@mui/styles';
import Filter from 'views/Filter/Filter';
import { Users } from 'types/users';
import { usersSelector } from 'selectors/users';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},

}));

const Dashboard: FC = () => {
	const [filtered, setFiltered] = React.useState<Users[]>([]);
	const classes = useStyles();
	const users = useSelector(usersSelector);

	return (
		<Box className={classes.root}>
			<Filter users={users} setFiltered={setFiltered} />
			<UsersTable filtered={filtered} />
			<AddUser />
		</Box>
	);
};

export default Dashboard;
