import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UsersState = any

const initialState: UsersState = null as unknown;

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<UsersState>) => action.payload,
		// eslint-disable-next-line object-curly-spacing
		addUser: (state, action: PayloadAction<UsersState>) => {

			const isDuplicateEmail = state.some((user: UsersState) => user.email == action.payload.email);

			if (isDuplicateEmail) return alert('email already exists');

			return ([...state, action.payload]);
		},
		updateUser: (state, action: PayloadAction<{ user: UsersState, index: number }>) => {

			const { index, user } = action.payload;

			const updatedUsers = [...state];

			updatedUsers[index] = { ...user };

			return ([...updatedUsers]);

		},
		removeUser: (state, action: PayloadAction<{ index: number }>) => {
			const { index } = action.payload;

			const newUsers = [...state];

			newUsers.splice(index, 1);

			return ([...newUsers]);

		},
		removeUsers: () => initialState,
	},
});

export const {
	setUsers,
	addUser,
	updateUser,
	removeUser,
	removeUsers,

} = usersSlice.actions;

export default usersSlice.reducer;
