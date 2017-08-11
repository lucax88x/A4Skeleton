import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AdminState } from '../../admin.state';
import { User } from '../../models/user';

const getState = createFeatureSelector<AdminState>('admin');

export class UserListSelectors {
  static Users: MemoizedSelector<{}, User[]> = createSelector(
    getState,
    (state: AdminState) => state.userList.users
  );
  static Lock: MemoizedSelector<{}, boolean> = createSelector(
    getState,
    (state: AdminState) => state.userList.lock
  );
}