/* eslint-disable object-curly-spacing */

import React from 'react';
import type { FC } from 'react';
import { Button, Paper, TextField, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from 'store/reducers/users';
import { Users } from 'types/users';

const useStyle = makeStyles(() => ({
	paper: {
		margin: 'auto',
		position: 'absolute',
		width: '35%',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%) !important',
		padding: 30,

	},
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

interface userFormProps {
	index?: number;
	values?: Users;
	onClose: () => void
}
type Form = {
	name: string;
	email: string;
	location: string;
}
const UserForm: FC<userFormProps> = ({ index, values, onClose }) => {
	const classes = useStyle();
	const dispatch = useDispatch();

	const { handleSubmit, control } = useForm<Form>({
		mode: 'onSubmit',
		defaultValues: {
			name: values?.name ? (values?.name?.first + ' ' + values?.name?.last) : '',
			location: values?.location ? (values?.location?.country + ' ' + values?.location?.city + ' ' + values?.location.street.name) : '',
			email: values?.email ? values?.email : '',
		},

	});

	const onSubmit = (e: Form): void => {
		const name: string[] = e.name.split(' ');

		const location: string[] = e.location.split(' ');

		const payload = {
			...values,
			name: {
				first: name[0],
				last: name[1],
			},
			email: e.email,
			location: {
				country: location[0],
				city: location[1],
				street: {
					name: location[2],
				},

			},
		};

		if (!values) {
			dispatch(addUser(payload));

		}
		else {
			if (typeof (index) == 'number') dispatch(updateUser({ user: payload, index }));

		}

		onClose();
	};

	return (
		<Paper className={classes.paper} >
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
				<Controller
					name="email"
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							label="Email"
							variant="outlined"
							color="primary"
							value={value}
							onChange={onChange}
							error={!!error}
							helperText={error ? error.message : null}
							style={{ marginBottom: '15px' }}
						/>
					)}
					rules={{
						required: 'Email is required',
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Wrong email format',
						},
						validate: (value) => value != values?.email || 'please change the email',
					}}
				/>
				<Controller
					name="name"
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							label="Name"
							variant="outlined"
							color="primary"
							value={value}
							onChange={onChange}
							error={!!error}
							helperText={error ? error.message : null}
							style={{ marginBottom: '15px' }}
						/>
					)}
					rules={{
						required: 'Name is required',
						minLength: { value: 3, message: 'Must be longer than 3 characters' },
					}}
				/>

				<Controller
					name="location"
					control={control}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							label="Location"
							variant="outlined"
							color="primary"
							value={value}
							onChange={onChange}
							error={!!error}
							helperText={error ? error.message : null}
							style={{ marginBottom: '15px' }}
						/>
					)}
					rules={{
						required: 'Location is required',

					}}
				/>
				<Box className={classes.buttons}>
					<Button sx={{ mr: 3 }} variant="contained" color="primary" type="submit">Submit</Button>
					<Button onClick={onClose} variant="contained" color="error" type="submit">Close</Button>
				</Box>
			</form>

		</Paper >
	);
};

export default UserForm;
