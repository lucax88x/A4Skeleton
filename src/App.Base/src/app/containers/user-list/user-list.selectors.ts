import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserListState } from './user-list.states';

const getUserListState = createFeatureSelector<UserListState>('userList');

export const getUsers = createSelector(
  getUserListState,
  (state: UserListState) => state.users
);
export const getLock = createSelector(
  getUserListState,
  (state: UserListState) => state.lock
);