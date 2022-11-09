/* eslint-disable template-curly-spacing */
import React, { FC } from 'react';
import { Users } from 'types/users';
import TableCell from '@mui/material/TableCell';

interface UserTableProps {
	user: Users
}
const UserTable: FC<UserTableProps> = ({ user }) => (
	<>
		<TableCell component="th" scope="row">{user?.name?.title} {user?.name?.first} {user?.name?.last}</TableCell>
		<TableCell align="right">{user?.email}</TableCell>
		<TableCell align="right"><img style={{ borderRadius: '50%' }} src={user?.picture?.thumbnail} /></TableCell>
		<TableCell align="right">{user?.location?.country} {user?.location?.city} {user?.location.street?.name}</TableCell>
		<TableCell align="right">{user?.id?.value}</TableCell>
	</>

);

export default UserTable;
