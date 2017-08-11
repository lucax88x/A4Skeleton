import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AuthState } from '../../auth.state';

const getState = createFeatureSelector<AuthState>('auth');

export class LoginSelectors {
  static Lock: MemoizedSelector<{}, boolean> = createSelector(
    getState,
    (state: AuthState) => state.login.lock
  );
}