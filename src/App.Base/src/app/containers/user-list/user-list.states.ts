import { User } from '../../models/user';

export interface UserListState {
  users: User[];
  lock: boolean;
  error: string;
};