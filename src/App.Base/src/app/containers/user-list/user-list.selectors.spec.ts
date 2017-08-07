import { State } from '../../app.state';
import { UserListSelectors } from './user-list.selectors';
import { UserFactory } from '../../spec/factories/user-factory';
import { SearchUserAction, SearchUserCompleteAction, SearchUserErrorAction, UserListActions } from './user-list.actions';

import { UserListState } from './user-list.states';

describe('UserListSelectors', () => {

  let state: State = {
    userList: {
      users: UserFactory.multiple(3),
      lock: false,
      error: null
    }
  };

  state.userList

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