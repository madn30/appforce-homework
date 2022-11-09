import { RootState } from '../store/reducers';
import { Users } from '../types/users';

export const usersSelector = (state: RootState): Users[] => state.users;
