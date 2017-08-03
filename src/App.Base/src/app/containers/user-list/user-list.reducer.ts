import * as _ from 'lodash';

import { Actions, SEARCH_USER, SEARCH_USER_COMPLETE, SEARCH_USER_ERROR } from './user-list.actions';
import { UserListState } from './user-list.states';

const initialState: UserListState = {
  users: [],
  lock: false,
  error: null
};

export function UserListReducer(state = initialState, action: Actions): UserListState {
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
        error: action.payload,
        lock: false
      });

    default:
      return state;
  }
}