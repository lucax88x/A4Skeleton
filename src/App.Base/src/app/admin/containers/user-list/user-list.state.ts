import { User } from '../../models/user';

export class UserListState {
  users: User[] = [];
  lock: boolean;

  constructor() {
    this.lock = false;
  }
}
