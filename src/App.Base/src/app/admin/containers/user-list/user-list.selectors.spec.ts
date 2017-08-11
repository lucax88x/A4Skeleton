import { AdminState } from '../../admin.state';
import { UserFactory } from '../../spec/factories/user-factory';
import { UserListSelectors } from './user-list.selectors';

describe('UserListSelectors', () => {

  let state: AdminState = {
    userList: {
      users: UserFactory.multiple(3),
      lock: false
    }
  };

  it('should return users', () => {
    //SETUP && ACT
    const result = UserListSelectors.Users(state);

    //TEST
    expect(result).toEqual(state.userList.users);
  });

  it('should return lock', () => {
    //SETUP && ACT
    const result = UserListSelectors.Lock(state);

    //TEST
    expect(result).toEqual(state.userList.lock);
  });
});