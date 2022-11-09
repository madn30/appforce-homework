import { combineReducers } from 'redux';
import usersReducer, { UsersState } from './users';

const rootReducer = combineReducers({
	users: usersReducer,
});

export type RootState = {
	users: UsersState,
};

export default rootReducer;
