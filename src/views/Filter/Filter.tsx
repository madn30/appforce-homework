import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Users } from 'types/users';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		'& .MuiInputBase-root': {
			marginRight: 20,
			marginBottom: 20,

		},
	},

}));

interface FilterProps {
	users: Users[];
	setFiltered: React.Dispatch<React.SetStateAction<Users[]>>

}

const Filter: FC<FilterProps> = ({ users, setFiltered }) => {
	const [email, setEmail] = React.useState('');
	const [id, setId] = React.useState('');
	const [name, setName] = React.useState('');
	const [location, setLocation] = React.useState('');
	const classes = useStyles();

	React.useEffect(() => {
		const filtered = users.filter((user: Users) => {
			// eslint-disable-next-line template-curly-spacing
			const dataName = (user?.name?.first + user?.name?.last).toLowerCase();

			const dataLocation = (user.location.country + user.location.city + user.location.street).toLocaleLowerCase();

			if (email && !user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase())) return false;

			if (id && !user.id?.value?.includes(id)) return false;

			if (name && !dataName.toLocaleLowerCase().includes(name)) return false;

			if (location && !dataLocation.includes(location.toLocaleLowerCase())) return false;

			return true;
		});

		setFiltered(filtered);
	}, [users, setFiltered, email, id, name, location]);

	return (
		<Box className={classes.root}>
			<TextField
				label="Email"
				variant="outlined"
				color="primary"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				label="Name"
				variant="outlined"
				color="primary"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<TextField
				label="ID"
				variant="outlined"
				color="primary"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<TextField
				label="Location"
				variant="outlined"
				color="primary"
				value={location}
				onChange={(e) => setLocation(e.target.value)}

			/>
		</Box>
	);
};

export default Filter;
