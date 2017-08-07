import * as _ from 'lodash';

import { UserListActions, SEARCH_USER, SEARCH_USER_COMPLETE, SEARCH_USER_ERROR } from './user-list.actions';
import { UserListState } from './user-list.states';

export function UserListReducer(state = new UserListState(), action: UserListActions): UserListState {
  switch (action.type) {
    case SEARCH_USER:
      return _.assign({}, state, {
        users: [],
        lock: true
      });
    case SEARCH_USER_COMPLETE:
      return _.assign({}, state, {
        users: action.payload,
        lock: false
      });
    case SEARCH_USER_ERROR:
      return _.assign({}, state, {
        users: [],
        lock: false,
        error: action.payload,
      });

    default:
      return state;
  }
}