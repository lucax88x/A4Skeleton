import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AdminState } from '../../admin.state';
import { User } from '../../models/user';

const getUserListState = createFeatureSelector<AdminState>('admin');

export class UserListSelectors {
  static Users: MemoizedSelector<{}, User[]> = createSelector(
    getUserListState,
    (state: AdminState) => state.userList.users
  );
  static Lock: MemoizedSelector<{}, boolean> = createSelector(
    getUserListState,
    (state: AdminState) => state.userList.lock
  );
}