import { User } from '../../models/user';

export class UserListState {
  users: User[] = [];
  lock: boolean = false;
  error: string = null;  
};