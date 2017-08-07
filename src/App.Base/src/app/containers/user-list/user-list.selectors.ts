import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserListState } from './user-list.states';

const getUserListState = createFeatureSelector<UserListState>('userList');

export class UserListSelectors {
  static Users = createSelector(
    getUserListState,
    (state: UserListState) => state.users
  );
  static Lock = createSelector(
    getUserListState,
    (state: UserListState) => state.lock
  );
}