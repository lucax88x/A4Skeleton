import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

const getState = createFeatureSelector<AuthState>('auth');

export class AuthSelectors {
  static LoggedIn: MemoizedSelector<{}, boolean> = createSelector(
    getState,
    (state: AuthState) => state.status.loggedIn
  );
}
