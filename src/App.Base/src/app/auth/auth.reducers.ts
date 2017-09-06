import { StatusReducer } from './status.reducer';
import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth.state';

export const AuthReducers: ActionReducerMap<AuthState> = {
    status: StatusReducer
};
