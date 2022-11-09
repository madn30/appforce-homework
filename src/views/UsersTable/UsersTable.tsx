import React, { FC } from 'react';
import UserTable from 'components/UserTable/UserTable';
import { useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/PersonRemove';
import IconButton from '@mui/material/IconButton';
import { removeUser } from '../../store/reducers/users';
import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import { Users } from 'types/users';
import { Typography } from '@mui/material';

let currentIndex = 0;

interface UsersTableProps {
	filtered: Users[]
}

const UsersTable: FC<UsersTableProps> = ({ filtered }) => {
	const [isEditClicked, setIsEditClicked] = React.useState(false);
	const dispatch = useDispatch();

	const edit = (index: number) => {
		setIsEditClicked(true);
		currentIndex = index;
	};
	const remove = (index: number) => {
		dispatch(removeUser({ index }));

	};

	if (!filtered.length) return <Typography> Nothing found by your filter</Typography>;

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Name & Title</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right">Picture</TableCell>
						<TableCell align="right">Location</TableCell>
						<TableCell align="right">Id</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filtered.length && filtered.map((user, index) => (
						<TableRow
							key={index}
							// eslint-disable-next-line object-curly-spacing
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<UserTable user={user} />
							<TableCell align="right"> <IconButton onClick={() => edit(index)} color="primary" aria-label="add to shopping cart"> <EditIcon /></IconButton></TableCell>
							<TableCell align="left">	<IconButton onClick={() => remove(index)} color="error" aria-label="add to shopping cart"><RemoveIcon /></IconButton></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{isEditClicked &&
				<Modal
					children={<UserForm index={currentIndex} values={filtered[currentIndex]} onClose={() => setIsEditClicked(false)} />}
					open={isEditClicked}
					onClose={() => setIsEditClicked(false)} />}
		</TableContainer>
	);

};

export default UsersTable;
